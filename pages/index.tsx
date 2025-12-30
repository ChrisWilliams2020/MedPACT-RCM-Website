import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Check, BarChart3, ShieldCheck, Mic, Cpu, DollarSign, Activity, ArrowRight, Building2, Lock, Server, ChevronRight, Star } from "lucide-react";

/**
 * MedPact RCM – Fortune 100 Premium Landing Page
 * Luxury UI for High Net Worth Healthcare Management
 * Brand: Deep navy, champagne gold, platinum accents
 * Typography: Sophisticated serif headings, clean sans body
 */

export default function MedPactRCMLanding() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Premium Top Bar */}
      <div className="w-full bg-gradient-to-r from-amber-900/20 via-amber-800/10 to-amber-900/20 border-b border-amber-700/20 text-amber-200 text-center text-xs tracking-[0.3em] uppercase py-3 font-light">
        Private & Confidential — For Qualified Clients Only
      </div>

      {/* Premium Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/90 border-b border-slate-800/50">
        <div className="mx-auto max-w-[1400px] px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-sm bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 shadow-lg shadow-amber-900/50" />
            <div>
              <div className="font-serif text-2xl tracking-tight text-amber-100">MedPact</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-slate-400 -mt-1">Revenue Management</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="text-sm text-slate-300 hover:text-amber-200 transition tracking-wide">Services</a>
            <a href="#expertise" className="text-sm text-slate-300 hover:text-amber-200 transition tracking-wide">Expertise</a>
            <a href="#insights" className="text-sm text-slate-300 hover:text-amber-200 transition tracking-wide">Insights</a>
            <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-semibold px-6 py-2 shadow-lg shadow-amber-900/30 border border-amber-500/50">
              Private Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Premium Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Elegant background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-slate-950 to-slate-950" />
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.05) 1px, transparent 0)', backgroundSize: '40px 40px'}} />
        
        <div className="relative mx-auto max-w-[1400px] px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/30 border border-amber-700/30 text-amber-200 text-xs tracking-widest uppercase mb-8">
                <Star className="h-3 w-3" />
                Fortune 100 Excellence
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.1] tracking-tight">
                Precision Wealth
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 font-normal mt-2">
                  Healthcare Management
                </span>
              </h1>
              
              <div className="mt-8 h-px w-24 bg-gradient-to-r from-amber-600 to-transparent" />
              
              <p className="mt-8 text-xl text-slate-300 font-light leading-relaxed max-w-xl">
                Exclusive revenue cycle optimization for high-net-worth medical practices. 
                Delivering 30%+ profitability improvement through proprietary intelligence and white-glove execution.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
                  <ShieldCheck className="h-5 w-5 text-amber-500" />
                  <span className="text-sm text-slate-300">Bank-Grade Security</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
                  <Lock className="h-5 w-5 text-amber-500" />
                  <span className="text-sm text-slate-300">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
                  <Star className="h-5 w-5 text-amber-500" />
                  <span className="text-sm text-slate-300">Concierge Service</span>
                </div>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a href="/book-demo">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-semibold px-8 py-6 text-base shadow-2xl shadow-amber-900/50 border border-amber-500/50">
                    Schedule Private Consultation
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-700 text-slate-200 hover:bg-slate-900 hover:text-amber-200 px-8 py-6 text-base">
                  View Executive Summary
                </Button>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-800">
                <p className="text-sm italic text-slate-400 font-light">
                  "Where private equity execution meets institutional precision. Not consulting — partnership."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl border border-slate-800/50 p-8 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: DollarSign, title: "Revenue Intelligence", copy: "Proprietary pricing analytics & forecasting", color: "amber" },
                    { icon: BarChart3, title: "Executive Analytics", copy: "Real-time portfolio performance insights", color: "amber" },
                    { icon: ShieldCheck, title: "Compliance Assurance", copy: "Continuous regulatory monitoring", color: "amber" },
                    { icon: Cpu, title: "Automation Suite", copy: "AI-driven workflow orchestration", color: "amber" },
                  ].map((f) => (
                    <div key={f.title} className="group rounded-xl p-6 bg-slate-950/50 border border-slate-800/50 hover:border-amber-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/20">
                      <f.icon className="h-8 w-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-base font-semibold text-slate-200 mb-2">{f.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{f.copy}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-800/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Trusted by</span>
                    <span className="text-amber-400 font-semibold">500+ Elite Practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Quick Links */}
      <section id="quicklinks" className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-slate-200 mb-3">Explore Our Capabilities</h2>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { href: "/mission", label: "Our Mission", desc: "Strategic Vision" },
              { href: "/platform", label: "Platform", desc: "Technology Suite" },
              { href: "/outcomes", label: "Outcomes", desc: "Proven Results" },
              { href: "/innovations", label: "Innovations", desc: "Proprietary IP" },
              { href: "/payer-provider", label: "Intelligence", desc: "Market Insights" },
              { href: "/about", label: "Leadership", desc: "Expert Team" },
            ].map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className="group p-6 rounded-lg bg-slate-950/50 border border-slate-800 hover:border-amber-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/20"
              >
                <div className="text-slate-200 font-semibold mb-1 group-hover:text-amber-400 transition">{item.label}</div>
                <div className="text-xs text-slate-500 tracking-wide">{item.desc}</div>
                <ChevronRight className="h-4 w-4 text-slate-600 mt-2 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { href: "/contact", label: "Contact Us", desc: "Get in Touch" },
              { href: "/become-user", label: "Become a Client", desc: "Exclusive Access" },
              { href: "/become-partner", label: "Partnership", desc: "Strategic Alliance" },
            ].map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className="group p-6 rounded-lg bg-gradient-to-br from-amber-950/20 to-amber-900/10 border border-amber-700/30 hover:border-amber-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/30"
              >
                <div className="text-amber-200 font-semibold mb-1 group-hover:text-amber-100 transition">{item.label}</div>
                <div className="text-xs text-amber-400/60 tracking-wide">{item.desc}</div>
                <ChevronRight className="h-4 w-4 text-amber-600 mt-2 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional-Grade Problem / Solution */}
      <section id="solution" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-200 mb-4">The Executive Challenge</h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6" />
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
              High-performing practices demand institutional-grade financial infrastructure
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Problem Card */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-red-950/20 to-slate-950 border border-red-900/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-red-950/50 border border-red-800/50 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="font-serif text-2xl text-slate-200">Systemic Deficiencies</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  { title: "Revenue Leakage", desc: "Payment inaccuracy from fragmented coding and billing systems" },
                  { title: "Operational Inefficiency", desc: "Labor-intensive manual processes impeding scalability" },
                  { title: "Data Fragmentation", desc: "Disconnected systems preventing strategic insights" },
                  { title: "Execution Gap", desc: "Private equity scale without operational excellence" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4 p-4 rounded-lg bg-slate-950/50 border border-slate-800/50">
                    <div className="h-2 w-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-slate-300 font-semibold mb-1">{item.title}</div>
                      <div className="text-sm text-slate-500 font-light">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Solution Card */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-amber-950/20 to-slate-950 border border-amber-800/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-amber-950/50 border border-amber-700/50 flex items-center justify-center">
                  <Check className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="font-serif text-2xl text-slate-200">Institutional Solution</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  { title: "Intelligence-Driven Actions", desc: "Transform complex data into strategic profitability levers" },
                  { title: "Revenue Protection", desc: "Eliminate leakage through AI-assisted optimization" },
                  { title: "Workflow Excellence", desc: "Automate processes to achieve institutional efficiency" },
                  { title: "Unified Intelligence", desc: "Single platform integrating all financial operations" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4 p-4 rounded-lg bg-slate-950/50 border border-slate-800/50 hover:border-amber-700/50 transition-colors">
                    <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-slate-200 font-semibold mb-1">{item.title}</div>
                      <div className="text-sm text-slate-400 font-light">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-amber-900/30">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Performance Guarantee</span>
                  <span className="text-amber-400 text-xl font-semibold">30% Improvement</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 font-light">Over 36 months — Near-term cash lift to durable EBITDA</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block rounded-xl p-8 bg-slate-950/50 border border-slate-800">
              <p className="text-lg italic text-slate-300 font-light max-w-3xl">
                "Private equity achieved ownership scale but struggled with operational precision. 
                MedPact delivers institutional-grade execution where others failed."
              </p>
              <div className="mt-4 h-px w-16 bg-amber-600 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700" />
                <div className="font-serif text-xl text-amber-100">MedPact</div>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Institutional-grade revenue cycle management for America's most successful healthcare practices.
              </p>
            </div>
            
            <div>
              <h4 className="text-amber-200 font-semibold mb-4 tracking-wide">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/platform" className="hover:text-amber-300 transition">Platform Overview</a></li>
                <li><a href="/outcomes" className="hover:text-amber-300 transition">Performance Results</a></li>
                <li><a href="/innovations" className="hover:text-amber-300 transition">Proprietary Technology</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-amber-200 font-semibold mb-4 tracking-wide">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/about" className="hover:text-amber-300 transition">Leadership Team</a></li>
                <li><a href="/contact" className="hover:text-amber-300 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-amber-300 transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 font-light">© {new Date().getFullYear()} MedPact Inc. All rights reserved. Confidential and Proprietary.</p>
            <div className="flex items-center gap-6 text-xs text-slate-500 tracking-wide">
              <a href="#" className="hover:text-amber-400 transition">Securities</a>
              <a href="#" className="hover:text-amber-400 transition">Compliance</a>
              <a href="#" className="hover:text-amber-400 transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
