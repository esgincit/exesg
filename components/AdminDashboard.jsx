"use client";

import { useEffect, useState } from "react";

const EMPTY = {
  title: "",
  position: "",
  company: "Executive Software Guild Inc.",
  location: "8751 Collin McKinney PKWY, Suite 601, McKinney TX 75070",
  category: "Speciality Occupation",
  type: "H-1B",
  expiry: "",
  responsibility: "",
  skill: "",
  lca_posting: true,
  lca_posting_file: "",
  active: true,
};

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(null); // null = checking
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  const loadJobs = async () => {
    const res = await fetch("/api/admin/postings", { credentials: "same-origin" });
    if (res.status === 401) return setAuthed(false);
    const j = await res.json().catch(() => ({ jobs: [] }));
    setJobs(j.jobs || []);
    setAuthed(true);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/whoami", { credentials: "same-origin" });
      const j = await res.json().catch(() => ({ authenticated: false }));
      if (j.authenticated) {
        setAuthed(true);
        loadJobs();
      } else setAuthed(false);
    })();
  }, []);

  async function login(e) {
    e.preventDefault();
    setLoginError("");
    setBusy(true);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
      credentials: "same-origin",
    });
    setBusy(false);
    if (res.ok) {
      setPassword("");
      loadJobs();
    } else {
      const j = await res.json().catch(() => ({}));
      setLoginError(j.error || "Login failed");
    }
  }

  async function logout() {
    await fetch("/api/logout", { method: "POST", credentials: "same-origin" });
    setAuthed(false);
    setJobs([]);
  }

  async function saveJob(e) {
    e.preventDefault();
    setBusy(true);
    setMsg("");
    const payload = { ...form };
    const res = await fetch(editingId ? `/api/admin/postings?id=${editingId}` : "/api/admin/postings", {
      method: editingId ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      credentials: "same-origin",
    });
    setBusy(false);
    const j = await res.json().catch(() => ({}));
    if (res.ok) {
      setMsg(editingId ? "Posting updated." : "Posting published.");
      setForm(EMPTY);
      setEditingId(null);
      loadJobs();
    } else setMsg(j.error || "Save failed");
  }

  async function toggleActive(job) {
    setBusy(true);
    await fetch(`/api/admin/postings?id=${job.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !job.active }),
      credentials: "same-origin",
    });
    setBusy(false);
    loadJobs();
  }

  async function deleteJob(job) {
    if (!confirm(`Delete posting #${job.id} (${job.title})? This cannot be undone.`)) return;
    setBusy(true);
    await fetch(`/api/admin/postings?id=${job.id}`, {
      method: "DELETE",
      credentials: "same-origin",
    });
    setBusy(false);
    loadJobs();
  }

  function editJob(job) {
    setEditingId(job.id);
    setForm({
      title: job.title || "",
      position: job.position || "",
      company: job.company || "",
      location: job.location || "",
      category: job.category || "",
      type: job.type || "",
      expiry: job.expiry || "",
      responsibility: job.responsibility || "",
      skill: job.skill || "",
      lca_posting: !!job.lca_posting,
      lca_posting_file: job.lca_posting_file || "",
      active: !!job.active,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const input = "w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none";
  const label = "mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500";

  if (authed === null)
    return <p className="py-20 text-center text-gray-500">Checking session…</p>;

  if (!authed)
    return (
      <form onSubmit={login} className="mx-auto max-w-sm rounded-lg border border-gray-200 bg-white p-8 shadow">
        <h1 className="mb-1 text-xl font-bold text-brand">ESG Admin</h1>
        <p className="mb-6 text-sm text-gray-500">Sign in to manage LCA postings.</p>
        <label className={label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={input}
          autoFocus
        />
        {loginError && <p className="mt-2 text-sm text-red-600">{loginError}</p>}
        <button
          type="submit"
          disabled={busy}
          className="mt-4 w-full rounded bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-50"
        >
          {busy ? "Checking…" : "Sign in"}
        </button>
      </form>
    );

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-brand">LCA Postings Manager</h1>
          <p className="text-sm text-gray-500">
            Postings save instantly and appear on the Careers page. PDF files go in{" "}
            <code className="rounded bg-gray-100 px-1">/lca_posting_files/</code> of the deployed site.
          </p>
        </div>
        <button onClick={logout} className="text-sm font-semibold text-gray-500 hover:text-brand">
          Sign out
        </button>
      </div>

      {/* Create / edit form */}
      <form onSubmit={saveJob} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-brand">
          {editingId ? `Edit posting #${editingId}` : "New LCA posting"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label}>Title *</label>
            <input value={form.title} onChange={set("title")} required className={input} />
          </div>
          <div>
            <label className={label}>Position</label>
            <input value={form.position} onChange={set("position")} className={input} />
          </div>
          <div>
            <label className={label}>Company</label>
            <input value={form.company} onChange={set("company")} className={input} />
          </div>
          <div>
            <label className={label}>Location</label>
            <input value={form.location} onChange={set("location")} className={input} />
          </div>
          <div>
            <label className={label}>Category</label>
            <input value={form.category} onChange={set("category")} className={input} />
          </div>
          <div>
            <label className={label}>Type (e.g. H-1B)</label>
            <input value={form.type} onChange={set("type")} className={input} />
          </div>
          <div>
            <label className={label}>Expiry (e.g. 07/04/2029)</label>
            <input value={form.expiry} onChange={set("expiry")} className={input} />
          </div>
          <div>
            <label className={label}>LCA PDF file name (in /lca_posting_files/)</label>
            <input value={form.lca_posting_file} onChange={set("lca_posting_file")} className={input} placeholder="LCA (Certified)_Name.pdf" />
          </div>
        </div>
        <div className="mt-4">
          <label className={label}>Responsibilities / job description (one item per line)</label>
          <textarea value={form.responsibility} onChange={set("responsibility")} rows={8} className={input} />
        </div>
        <div className="mt-4">
          <label className={label}>Skills</label>
          <textarea value={form.skill} onChange={set("skill")} rows={2} className={input} />
        </div>
        <div className="mt-4 flex gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.lca_posting} onChange={set("lca_posting")} />
            LCA posting flag
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.active} onChange={set("active")} />
            Active (visible on Careers page)
          </label>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <button
            type="submit"
            disabled={busy}
            className="rounded bg-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-50"
          >
            {busy ? "Saving…" : editingId ? "Update posting" : "Publish posting"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm(EMPTY);
              }}
              className="text-sm text-gray-500 hover:text-brand"
            >
              Cancel edit
            </button>
          )}
          {msg && <span className="text-sm text-green-700">{msg}</span>}
        </div>
      </form>

      {/* Listings table */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-brand">All postings ({jobs.length})</h2>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Expiry</th>
              <th className="px-6 py-3">LCA</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-b border-gray-50 last:border-0">
                <td className="px-6 py-3 text-gray-400">{job.id}</td>
                <td className="px-6 py-3 font-medium text-gray-800">{job.title}</td>
                <td className="px-6 py-3">{job.expiry}</td>
                <td className="px-6 py-3">
                  {job.lca_posting ? (
                    <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-700">posted</span>
                  ) : (
                    <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">none</span>
                  )}
                </td>
                <td className="px-6 py-3">
                  {job.active ? (
                    <span className="rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-700">active</span>
                  ) : (
                    <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">hidden</span>
                  )}
                </td>
                <td className="px-6 py-3">
                  <div className="flex gap-3 text-xs font-semibold">
                    <button onClick={() => editJob(job)} className="text-brand hover:underline">
                      Edit
                    </button>
                    <button onClick={() => toggleActive(job)} className="text-amber-600 hover:underline">
                      {job.active ? "Hide" : "Show"}
                    </button>
                    <button onClick={() => deleteJob(job)} className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {!jobs.length && (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                  No postings yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
