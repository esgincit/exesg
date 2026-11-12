"use client";

import { useState } from "react";

// Form endpoint (Web3Forms). Messages go to sunil.vootkuri@esgit.com.
// Can be overridden at build time with NEXT_PUBLIC_FORM_ENDPOINT.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://api.web3forms.com/submit";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const ACCESS_KEY = process.env.NEXT_PUBLIC_FORM_KEY || "166ce431-eb8f-4278-9e88-c2efd5c7c5a5";

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, access_key: ACCESS_KEY, from_name: "ESG Website Contact Form" }),
      });
      const j = await res.json().catch(() => null);
      if (res.ok && j && j.success !== false) {
        form.reset();
        setStatus("Thank you! Your message has been sent. We'll get back to you soon.");
      } else {
        setStatus("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setStatus("Something went wrong. Please try again or email us directly.");
    }
  }

  const inputClass =
    "w-full rounded border border-gray-300 px-3 py-2 focus:border-brand focus:outline-none";

  return (
    <form onSubmit={submit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-semibold text-gray-700">
            Name *
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-700">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-semibold text-gray-700">
          Subject
        </label>
        <input id="subject" name="subject" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-gray-700">
          Message *
        </label>
        <textarea id="message" name="message" required rows={6} className={inputClass} />
      </div>
      <button
        type="submit"
        className="w-fit rounded bg-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Send Message
      </button>
      <p id="form-status" className="text-sm text-green-700">
        {status}
      </p>
    </form>
  );
}
