import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Check, BarChart3, ShieldCheck, Mic, Cpu, DollarSign, Activity, ArrowRight, Building2, Lock, Server } from "lucide-react";

/**
 * MedPact RCM – Single-file landing page
 * Stack: Next.js 14 App Router, Tailwind CSS, shadcn/ui, Lucide icons, Framer Motion
 * Brand: blue / green / black (black for nav buttons). Bold button style by default.
 * Notes: Replace logo src with MedPact mark. Wire to /api/contact or CRM of choice.
 */

export default function MedPactRCMLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-slate-900 dark:text-slate-100">
      {/* Top Announcement */}
      <div className="w-full bg-gradient-to-r from-cyan-600 to-emerald-600 text-white text-center text-sm py-2">CONFIDENTIAL & BUSINESS RESTRICTED</div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500" />
            <span className="font-bold text-lg tracking-tight">MedPact <span className="text-slate-500">RCM</span></span>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl px-4 py-2 font-semibold bg-gradient-to-r from-cyan-600 to-emerald-600">
              Book a Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fix Execution Where Private Equity Struggled:
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-emerald-600"> Turn Data Into Action</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Healthcare practices lose profitability to payment leakage, labor inefficiency, and disconnected data. 
              MedPact fixes execution — delivering up to 30% profitability improvement over 3 years.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge className="bg-cyan-600">HIPAA-ready</Badge>
              <Badge className="bg-emerald-600">FHIR-aware</Badge>
              <Badge className="bg-slate-800">JWT Security</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/book-demo">
                <Button size="lg" className="rounded-2xl px-6 py-6 text-base font-bold bg-gradient-to-r from-cyan-600 to-emerald-600">
                  Get a Live Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="rounded-2xl px-6 py-6 text-base font-bold border-slate-300">
                Download One-Pager
              </Button>
            </div>
            <p className="mt-4 text-base font-semibold">"Private equity scaled ownership — but struggled to scale execution. MedPact fixes that."</p>
            <p className="mt-2 text-sm text-slate-500">We turn complex operational and financial data into action across payment yield, labor productivity, payer strategy, and capacity utilization. Not reports — results.</p>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/70 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: DollarSign, title: "Price Transparency", copy: "Real-time CMS-compliant pricing & estimates." },
                  { icon: BarChart3, title: "RCM Analytics", copy: "Real-time KPIs, payer performance, margins." },
                  { icon: ShieldCheck, title: "Compliance Layer", copy: "CMS, HIPAA audit-ready, always-on." },
                  { icon: Cpu, title: "Workflow Automation", copy: "Rules-driven follow-ups & task orchestration." },
                ].map((f) => (
                  <Card key={f.title} className="rounded-2xl">
                    <CardHeader className="pb-1">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <f.icon className="h-5 w-5 text-emerald-600" /> {f.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-slate-600 dark:text-slate-300">{f.copy}</CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links: Two-column button matrix */}
      <section id="quicklinks" className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-3">
            {/* Column A */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/mission", label: "Mission" },
                { href: "/platform", label: "Platform" },
                { href: "/outcomes", label: "Outcomes" },
                { href: "/innovations", label: "Innovations" },
                { href: "/payer-provider", label: "Provider↔Payer" },
                { href: "/about", label: "About Us" },
              ].map((b, i) => (
                <a key={i} href={b.href} className="px-4 py-3 rounded-2xl text-sm font-semibold bg-black text-white text-center hover:opacity-90 transition">{b.label}</a>
              ))}
            </div>
            {/* Column B */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/contact", label: "Contact" },
                { href: "/become-user", label: "Become a User" },
                { href: "/become-partner", label: "Become a Partner" },
              ].map((b, i) => (
                <a key={i} href={b.href} className="px-4 py-3 rounded-2xl text-sm font-semibold bg-gradient-to-r from-cyan-600 to-emerald-600 text-white text-center hover:opacity-90 transition">{b.label}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem / Solution */}
      <section id="solution" className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl">The Problem</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300">
              <ul className="space-y-3">
                {[
                  "Payment leakage from inaccurate coding and missed charges",
                  "Labor inefficiency — staff buried in manual processes",
                  "Disconnected data — payment accuracy, productivity, infrastructure don't talk",
                  "Private equity scaled ownership but struggled to scale execution",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3"><Activity className="h-5 w-5 mt-0.5 text-cyan-600" /> {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-emerald-200/50">
            <CardHeader>
              <CardTitle className="text-2xl">Our Solution</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300">
              <ul className="space-y-3">
                {[
                  "Turn data into action across payment yield, labor productivity, payer strategy",
                  "Fix payment leakage with AI-assisted coding and charge capture",
                  "Eliminate labor inefficiency through workflow automation",
                  "Connect operational and financial data into one intelligence layer",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3"><Check className="h-5 w-5 mt-0.5 text-emerald-600" /> {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} MedPact Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Security</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
