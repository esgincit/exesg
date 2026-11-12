// Pages middleware: canonical redirect for the exesg.in domain.
// exesg.in / www.exesg.in → https://www.exesg.us/<same path>?<same query>
// All other hostnames (exesg.us, www.exesg.us, admin.exesg.us, …) pass through untouched.

const REDIRECT_HOSTS = new Set(["exesg.in", "www.exesg.in"]);
const TARGET = "https://www.exesg.us";

export async function onRequest(context) {
  const { request, next } = context;
  const host = (request.headers.get("host") || "").toLowerCase();

  if (REDIRECT_HOSTS.has(host)) {
    const url = new URL(request.url);
    const target = TARGET + url.pathname + url.search;
    return new Response(null, {
      status: 301,
      headers: {
        Location: target,
        "Cache-Control": "public, max-age=86400",
      },
    });
  }

  return next();
}
