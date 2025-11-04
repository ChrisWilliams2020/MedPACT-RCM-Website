
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Check, BarChart3, ShieldCheck, Mic, Cpu, DollarSign, Activity, ArrowRight, Building2, Lock, Server } from "lucide-react";
import { motion } from "framer-motion";

const MotionH1 = motion('h1');
const MotionDiv = motion('div');

/**
 * MedPact RCM – Single-file landing page
 * Stack: Next.js 14 App Router, Tailwind CSS, shadcn/ui, Lucide icons, Framer Motion
 * Brand: blue / green / black (black for nav buttons). Bold button style by default.
 * Notes: Replace logo src with MedPact mark. Wire to /api/contact or CRM of choice.
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* Top Announcement */}
      <div className="w-full bg-gradient-to-r from-cyan-600 to-emerald-600 text-white text-center text-sm py-2">CONFIDENTIAL & BUSINESS RESTRICTED</div>
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500" />
            <span className="font-bold text-lg tracking-tight">MedPact <span className="text-slate-500">RCM</span></span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {[
              { href: "#solution", label: "Solution" },
              { href: "#platform", label: "Platform" },
              { href: "#outcomes", label: "Outcomes" },
              { href: "#innovations", label: "Innovations" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-2 rounded-full text-sm font-medium bg-black text-white hover:opacity-90 transition">{l.label}</a>
            ))}
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
             <MotionH1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="text-4xl md:text-5xl font-bold leading-tight"
               {...({ class: "text-4xl md:text-5xl font-bold leading-tight" } as any)}
             >
              Revenue Cycle, Reimagined:
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-emerald-600"> Voice + AI Automation</span>
            </MotionH1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Eliminate manual billing, reduce denials, and negotiate stronger payer contracts with MedPact’s unified, voice-first RCM platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge className="bg-cyan-600">HIPAA-ready</Badge>
              <Badge className="bg-emerald-600">FHIR-aware</Badge>
              <Badge className="bg-slate-800">JWT Security</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-2xl px-6 py-6 text-base font-bold bg-gradient-to-r from-cyan-600 to-emerald-600">
                Get a Live Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-6 py-6 text-base font-bold border-slate-300">
                Download One-Pager
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-500">Doctors shouldn’t look away from patients to justify a billing code. We fix that.</p>
          </div>
           <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="relative"
             {...({ class: "relative" } as any)}
           >
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/70 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: DollarSign, title: "Billing Automation", copy: "AI coding, claims, and denials." },
                  { icon: BarChart3, title: "Financial Analytics", copy: "Predictive payer & cash flow." },
                  { icon: ShieldCheck, title: "Credentialing", copy: "98.7% success in 3.2 days." },
                  { icon: Mic, title: "Voice Workflows", copy: "Ambient documentation to FHIR." },
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
          </MotionDiv>
        </div>
      </section>
      {/* ...rest of landing page sections... */}
    </main>
  );
}
