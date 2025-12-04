"use client";

import { useState } from "react";
import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

export default function BookDemoPage() {
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
      body: JSON.stringify({ ...body, context: "book-demo" }),
    });
    const data = await res.json();
    if (data.ok) setSent(true);
    else setError(data.error || "Failed to submit. Please try again.");
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <PublicHeader />

      <section className="px-6 pt-12 pb-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Book a Demo
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Schedule a personalized demonstration of the MedPACT platform. 
          Suggest your preferred dates and times, and we'll confirm a session that works for both of us.
        </p>
      </section>

      <section className="px-6 pb-16 max-w-xl mx-auto w-full">
        {sent ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
            <h2 className="text-lg font-semibold">
              Thank you for requesting a demo!
            </h2>
            <p className="mt-2 text-gray-700">
              We&apos;ve received your request and will contact you within 24 hours to confirm your demo session.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Organization *
              </label>
              <input
                name="organization"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Role/Title
              </label>
              <input
                name="role"
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Date Option 1 *
              </label>
              <input
                name="date1"
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Time for Option 1 *
              </label>
              <select
                name="time1"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="">Select a time...</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="9:30 AM">9:30 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="1:30 PM">1:30 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="2:30 PM">2:30 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="3:30 PM">3:30 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="4:30 PM">4:30 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Date Option 2 (Alternative)
              </label>
              <input
                name="date2"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Time for Option 2
              </label>
              <select
                name="time2"
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="">Select a time...</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="9:30 AM">9:30 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="1:30 PM">1:30 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="2:30 PM">2:30 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="3:30 PM">3:30 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="4:30 PM">4:30 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time Zone
              </label>
              <select
                name="timezone"
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="ET">Eastern Time (ET)</option>
                <option value="CT">Central Time (CT)</option>
                <option value="MT">Mountain Time (MT)</option>
                <option value="PT">Pacific Time (PT)</option>
                <option value="Other">Other (please specify in comments)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Demo Duration Preference
              </label>
              <select
                name="duration"
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="30 minutes">30 minutes</option>
                <option value="45 minutes">45 minutes</option>
                <option value="60 minutes">60 minutes</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What aspects of MedPACT are you most interested in?
              </label>
              <textarea
                name="interests"
                rows={4}
                placeholder="e.g., Revenue cycle automation, payer collaboration, platform integration..."
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Additional Comments or Questions
              </label>
              <textarea
                name="comments"
                rows={3}
                placeholder="Any specific questions or requirements for the demo..."
                className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-emerald-600 px-5 py-4 text-base font-semibold text-white shadow-sm hover:opacity-90 transition"
            >
              Request Demo
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
