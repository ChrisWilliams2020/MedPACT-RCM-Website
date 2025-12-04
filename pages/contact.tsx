"use client";

import { useState } from "react";
import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

export default function ContactPage() {
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
      body: JSON.stringify({ ...body, context: "contact" }),
    });
    const data = await res.json();
    if (data.ok) setSent(true);
    else setError(data.error || "Failed to send. Please try again.");
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <PublicHeader />

      <section className="px-6 pt-12 pb-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Contact MedPACT
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Share your contact information and how we can help. A member of our
          team will follow up with you.
        </p>
      </section>

      <section className="px-6 pb-16 max-w-xl mx-auto w-full">
        {sent ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
            <h2 className="text-lg font-semibold">Thank you for reaching out.</h2>
            <p className="mt-2 text-gray-700">
              We&apos;ve received your information and will contact you shortly.
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
                Email Address
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
                Phone Number
              </label>
              <input
                name="phone"
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What are you interested in?
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
              Send Message
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
