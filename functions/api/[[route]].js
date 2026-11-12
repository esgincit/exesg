const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

// ---------- auth helpers ----------
const secretFor = (env) => (env.ADMIN_PASSWORD || "") + "::esg-lca-admin::v1";

async function hmacSign(message, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function makeToken(env) {
  const ts = Date.now().toString();
  const sig = await hmacSign(ts, secretFor(env));
  return `${ts}.${sig}`;
}

async function verifyToken(token, env) {
  if (!token || !token.includes(".")) return false;
  const [ts, sig] = token.split(".");
  const age = Date.now() - Number(ts);
  if (!Number(ts) || age < 0 || age > 1000 * 60 * 60 * 24 * 14) return false; // 14-day session
  const expected = await hmacSign(ts, secretFor(env));
  return sig === expected;
}

function getCookie(request, name) {
  const header = request.headers.get("Cookie") || "";
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return v.join("=");
  }
  return null;
}

async function requireAdmin(request, env) {
  if (!env.ADMIN_PASSWORD) return { ok: false, error: "Admin password not configured" };
  const token = getCookie(request, "admin_token");
  if (!(await verifyToken(token, env))) return { ok: false, error: "Unauthorized" };
  return { ok: true };
}

// ---------- D1 helpers ----------
const COLUMNS = [
  "id",
  "title",
  "position",
  "company",
  "location",
  "category",
  "type",
  "expiry",
  "responsibility",
  "skill",
  "lca_posting",
  "lca_posting_file",
  "active",
  "created_at",
];

async function ensureTable(db) {
  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS postings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        position TEXT,
        company TEXT,
        location TEXT,
        category TEXT,
        type TEXT,
        expiry TEXT,
        responsibility TEXT,
        skill TEXT,
        lca_posting INTEGER DEFAULT 0,
        lca_posting_file TEXT,
        active INTEGER DEFAULT 1,
        created_at TEXT DEFAULT (datetime('now'))
      )`
    )
    .run();
}

function bodyToFields(body) {
  const f = {};
  for (const c of COLUMNS) {
    if (c === "id" || c === "created_at") continue;
    if (body[c] !== undefined) f[c] = body[c];
  }
  for (const k of ["lca_posting", "active"]) {
    if (k in f) f[k] = f[k] ? 1 : 0;
  }
  return f;
}

// ---------- main handler ----------
export async function onRequest(context) {
  const { request, env, params } = context;
  const db = env.DB;
  if (!db) return json({ error: "Database binding missing" }, 500);

  await ensureTable(db);
  const route = params.route || [];
  const method = request.method.toUpperCase();
  const url = new URL(request.url);

  // GET /api/postings — public list of active postings
  if (route[0] === "postings" && method === "GET") {
    const { results } = await db
      .prepare("SELECT * FROM postings WHERE active = 1 ORDER BY created_at DESC, id DESC")
      .all();
    return json({ jobs: results });
  }

  // POST /api/login {password} → sets admin cookie
  if (route[0] === "login" && method === "POST") {
    const body = await request.json().catch(() => ({}));
    if (!env.ADMIN_PASSWORD) return json({ error: "Admin password not configured" }, 500);
    if (body.password !== env.ADMIN_PASSWORD) return json({ error: "Wrong password" }, 401);
    const token = await makeToken(env);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `admin_token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${60 * 60 * 24 * 14}`,
      },
    });
  }

  // POST /api/logout
  if (route[0] === "logout" && method === "POST") {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "admin_token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0",
      },
    });
  }

  // GET /api/whoami — used by admin UI to check session
  if (route[0] === "whoami" && method === "GET") {
    const auth = await requireAdmin(request, env);
    return json({ authenticated: auth.ok, error: auth.error || null });
  }

  const auth = await requireAdmin(request, env);
  if (!auth.ok) return json({ error: auth.error }, auth.error === "Unauthorized" ? 401 : 500);

  // GET /api/admin/postings — full list incl. inactive
  if (route[0] === "admin" && route[1] === "postings" && method === "GET") {
    const { results } = await db.prepare("SELECT * FROM postings ORDER BY id DESC").all();
    return json({ jobs: results });
  }

  // POST /api/admin/postings — create
  if (route[0] === "admin" && route[1] === "postings" && method === "POST") {
    const body = await request.json().catch(() => ({}));
    const f = bodyToFields(body);
    if (!f.title) return json({ error: "Title is required" }, 400);
    const keys = Object.keys(f);
    const sql = `INSERT INTO postings (${keys.join(",")}) VALUES (${keys.map(() => "?").join(",")})`;
    const res = await db
      .prepare(sql)
      .bind(...keys.map((k) => f[k] ?? null))
      .run();
    return json({ success: true, id: res.meta && res.meta.last_row_id });
  }

  // PATCH /api/admin/postings?id=N — update
  if (route[0] === "admin" && route[1] === "postings" && method === "PATCH") {
    const id = Number(url.searchParams.get("id"));
    if (!id) return json({ error: "id required" }, 400);
    const body = await request.json().catch(() => ({}));
    const f = bodyToFields(body);
    const keys = Object.keys(f);
    if (!keys.length) return json({ error: "no fields to update" }, 400);
    const sql = `UPDATE postings SET ${keys.map((k) => `${k} = ?`).join(", ")} WHERE id = ?`;
    await db
      .prepare(sql)
      .bind(...keys.map((k) => f[k]), id)
      .run();
    return json({ success: true });
  }

  // DELETE /api/admin/postings?id=N
  if (route[0] === "admin" && route[1] === "postings" && method === "DELETE") {
    const id = Number(url.searchParams.get("id"));
    if (!id) return json({ error: "id required" }, 400);
    await db.prepare("DELETE FROM postings WHERE id = ?").bind(id).run();
    return json({ success: true });
  }

  return json({ error: "Not found" }, 404);
}
