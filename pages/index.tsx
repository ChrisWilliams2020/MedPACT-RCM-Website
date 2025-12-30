import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Check, BarChart3, ShieldCheck, Zap, Cpu, DollarSign, Activity, ArrowRight, TrendingUp, Lock, Sparkles, ChevronRight, Star } from "lucide-react";

/**
 * MedPact RCM – Apple-Inspired Premium Design
 * Clean, minimal, sophisticated
 * Focus: Maximizing Profitability, Innovation, and Value
 * Brand: Pure white, soft grays, vibrant blue accents
 */

export default function MedPactRCMLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      {/* Profitability Banner */}
      <div className="fixed top-14 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white py-3 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm md:text-base font-semibold tracking-wide">
            🎯 Our goal for you is 30% increase in profitability over 3 years
          </p>
        </div>
      </div>

      {/* Clean Apple-Style Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-blue-100/50">
        <div className="mx-auto max-w-[1200px] px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-semibold text-xl tracking-tight text-gray-900">MedPact RCM</div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#platform" className="text-gray-700 hover:text-gray-900 transition">Platform</a>
            <a href="#innovation" className="text-gray-700 hover:text-gray-900 transition">Innovation</a>
            <a href="#outcomes" className="text-gray-700 hover:text-gray-900 transition">Outcomes</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 transition">About</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Apple-Style Hero */}
      <section className="pt-44 pb-20 px-6">
        <div className="mx-auto max-w-[980px] text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.05] mb-6">
            Maximizing Profitability.
            <br />
            Innovation. Value.
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 font-normal max-w-[720px] mx-auto leading-relaxed mb-8">
            MedPact RCM transforms healthcare revenue cycle management through intelligent automation, 
            delivering measurable results that matter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-blue-600/20">
              Explore the Platform
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-6 rounded-full text-lg font-medium bg-white">
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-600" />
              <span>30% Revenue Improvement</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-600" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-600" />
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-3xl bg-white/80 backdrop-blur-sm p-8 md:p-12 shadow-xl shadow-blue-200/30 border border-blue-100/50">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: DollarSign, title: "Revenue Intelligence", desc: "Real-time pricing transparency and optimization", color: "blue" },
                { icon: Zap, title: "Workflow Automation", desc: "AI-driven process automation at scale", color: "indigo" },
                { icon: BarChart3, title: "Performance Analytics", desc: "Executive dashboards with actionable insights", color: "blue" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-blue-100/50">
                  <div className={`h-12 w-12 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-4`}>
                    <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-800 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars - Apple Style */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              Built on three principles
            </h2>
            <p className="text-xl text-gray-800 max-w-[600px] mx-auto">
              Every feature designed to maximize your practice's potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Maximizing Profitability",
                desc: "Achieve up to 30% revenue improvement over 3 years through intelligent automation and data-driven optimization",
                features: ["Revenue protection", "Payment accuracy", "Denial prevention", "Cash flow acceleration"]
              },
              {
                icon: Sparkles,
                title: "Innovation",
                desc: "Cutting-edge AI and machine learning transform complex operational data into actionable strategic insights",
                features: ["AI-assisted coding", "Predictive analytics", "Automated workflows", "Real-time intelligence"]
              },
              {
                icon: ShieldCheck,
                title: "Value",
                desc: "Deliver exceptional outcomes while reducing operational burden and ensuring compliance at every step",
                features: ["HIPAA compliant", "CMS audit-ready", "Integrated platform", "Proven results"]
              }
            ].map((pillar) => (
              <div key={pillar.title} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 border border-blue-100/50">
                <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <pillar.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-800 leading-relaxed mb-6">{pillar.desc}</p>
                <ul className="space-y-3">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-800">
                      <Check className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features - Clean Grid */}
      <section className="py-20 px-6 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              Complete RCM platform
            </h2>
            <p className="text-xl text-gray-800 max-w-[600px] mx-auto">
              Everything you need to transform your revenue cycle, all in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Revenue Protection",
                desc: "Prevent revenue loss before care is delivered",
                features: ["Price transparency engine", "Eligibility verification", "Contract rate modeling"]
              },
              {
                title: "Revenue Capture",
                desc: "Capture 100% of earned revenue accurately",
                features: ["Charge capture optimization", "AI-assisted coding", "Patient engagement"]
              },
              {
                title: "Revenue Recovery",
                desc: "Accelerate cash flow and reduce write-offs",
                features: ["Denials intelligence", "Workflow automation", "Claims management"]
              },
              {
                title: "Strategic Intelligence",
                desc: "Turn RCM into a growth lever",
                features: ["Executive analytics", "Payer performance", "Contract optimization"]
              }
            ].map((feature) => (
              <div key={feature.title} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-800 mb-6">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-800">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-xl border border-blue-100/50">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
                Results that speak for themselves
              </h2>
              <p className="text-xl text-gray-800">
                Real outcomes from real healthcare organizations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-semibold text-blue-600 mb-2">30%</div>
                <div className="text-gray-800">Profitability improvement over 3 years</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-semibold text-blue-600 mb-2">95%+</div>
                <div className="text-gray-800">First-pass claims accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-semibold text-blue-600 mb-2">40%</div>
                <div className="text-gray-800">Faster AR collections</div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium">
                See Case Studies
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 px-6 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Explore MedPact RCM</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/platform", title: "Platform", desc: "Complete RCM solution", icon: Cpu },
              { href: "/outcomes", title: "Outcomes", desc: "Proven performance", icon: BarChart3 },
              { href: "/innovations", title: "Innovation", desc: "AI-powered technology", icon: Sparkles },
              { href: "/about", title: "About Us", desc: "Our team & mission", icon: Star },
              { href: "/contact", title: "Contact", desc: "Get in touch", icon: ArrowRight },
              { href: "/book-demo", title: "Book Demo", desc: "See it in action", icon: ChevronRight },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-200/50 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                  <link.icon className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{link.title}</div>
                  <div className="text-sm text-gray-800">{link.desc}</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-blue-600 ml-auto group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Apple-Style Footer */}
      <footer className="border-t border-blue-100/50 bg-white/80 backdrop-blur-sm py-12">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="font-semibold text-lg text-gray-900 mb-4">MedPact RCM</div>
              <p className="text-sm text-gray-800 leading-relaxed">
                Maximizing profitability, innovation, and value for healthcare practices.
              </p>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="/platform" className="hover:text-blue-600 transition">Overview</a></li>
                <li><a href="/outcomes" className="hover:text-blue-600 transition">Results</a></li>
                <li><a href="/innovations" className="hover:text-blue-600 transition">Technology</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="/about" className="hover:text-blue-600 transition">About Us</a></li>
                <li><a href="/mission" className="hover:text-blue-600 transition">Mission</a></li>
                <li><a href="/contact" className="hover:text-blue-600 transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="/book-demo" className="hover:text-blue-600 transition">Book Demo</a></li>
                <li><a href="/become-user" className="hover:text-blue-600 transition">Become a Client</a></li>
                <li><a href="/become-partner" className="hover:text-blue-600 transition">Partners</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-blue-100/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700">© {new Date().getFullYear()} MedPact Inc. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-gray-700">
              <a href="#" className="hover:text-gray-900 transition">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition">Terms</a>
              <a href="#" className="hover:text-gray-900 transition">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
