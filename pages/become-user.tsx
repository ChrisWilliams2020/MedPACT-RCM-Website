"use client";

import { useState } from "react";
import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

export default function BecomeUserPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...body, context: "become-user" }),
    });
    const data = await res.json();
    if (data.ok) setSent(true);
    else setError(data.error || "Failed to submit. Please try again.");
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-gray-50 to-slate-100">
      <PublicHeader />

      <section className="px-6 pt-12 pb-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Become a MedPACT User
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Tell us who you are and where you want to innovate your business.
          We&apos;ll connect you with the right MedPACT team resources.
        </p>
      </section>

      <section className="px-6 pb-16 max-w-xl mx-auto w-full">
        {sent ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
            <h2 className="text-lg font-semibold">
              Thank you for your interest in MedPACT.
            </h2>
            <p className="mt-2 text-gray-700">
              A member of our team will contact you about next steps.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Where do you want to innovate your business?
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
            >
              Submit
            </button>
            {error && (
              <p className="text-sm text-red-600 mt-2">
                {error}
              </p>
            )}
          </form>
        )}
      </section>

      <PublicFooter />
    </main>
  );
}
