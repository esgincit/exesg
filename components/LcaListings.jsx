"use client";

import { useEffect, useState } from "react";

function JobCard({ job }) {
  const respLines = (job.responsibility || "")
    .split(/\n+/)
    .map((s) => s.replace(/^[•●·\-\s]+/, "").trim())
    .filter(Boolean);

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-brand">{job.title}</h3>
          <p className="text-sm text-gray-600">
            {job.company} — {job.location}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            {job.category}
            {job.type ? ` · ${job.type}` : ""}
            {job.expiry ? ` · valid through ${job.expiry}` : ""}
          </p>
        </div>
        {job.lca_posting_file && (
          <a
            href={`/lca_posting_files/${job.lca_posting_file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-amber-600"
          >
            View LCA (PDF)
          </a>
        )}
      </div>
      {respLines.length > 0 && (
        <div className="mt-4">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Responsibilities
          </h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            {respLines.map((line, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {job.skill && (
        <p className="mt-4 text-sm text-gray-600">
          <span className="font-semibold text-gray-700">Skills: </span>
          {job.skill}
        </p>
      )}
    </article>
  );
}

export default function LcaListings() {
  const [jobs, setJobs] = useState(null); // null = loading

  useEffect(() => {
    fetch("/api/postings")
      .then((r) => r.json())
      .then((j) => setJobs(j.jobs || []))
      .catch(() => setJobs([]));
  }, []);

  if (jobs === null)
    return <p className="text-sm text-gray-400">Loading LCA postings…</p>;

  if (!jobs.length)
    return (
      <p className="max-w-3xl text-gray-600">
        No LCA postings are currently open. New postings appear here automatically when published.
      </p>
    );

  return (
    <div className="space-y-5">
      {jobs.map((job, i) => (
        <JobCard key={job.id || i} job={job} />
      ))}
    </div>
  );
}
