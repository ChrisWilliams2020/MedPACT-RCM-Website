import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";
import { Lightbulb, Zap, Brain, Shield } from "lucide-react";

export default function InnovationsPage() {
  const innovations = [
    {
      icon: Brain,
      title: "Pricing Intelligence, Not Billing Labor",
      description: "Traditional RCM relies on manual billing teams. MedPact RCM is built around real-time pricing intelligence, automated workflows, and predictive analytics — shifting from labor-intensive processes to intelligence-driven automation."
    },
    {
      icon: Shield,
      title: "Native Compliance, Not Bolted-On",
      description: "Compliance isn't an afterthought. Our CMS, HIPAA, and payer audit capabilities are native to the platform architecture, providing always-on regulatory readiness without add-on modules or manual processes."
    },
    {
      icon: Zap,
      title: "Integration-First Design",
      description: "Designed to integrate seamlessly with existing EHRs and practice management systems, not replace them. MedPact RCM becomes your intelligence and automation layer on top of current infrastructure."
    },
    {
      icon: Lightbulb,
      title: "Unified Operating Layer",
      description: "Instead of managing separate tools for pricing, eligibility, claims, denials, analytics, and compliance, organizations get one unified platform that aligns operations, finance, and leadership on the same data."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <PublicHeader />

      <section className="px-6 pt-12 pb-16 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Platform Innovations
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-3xl">
          MedPact RCM reimagines revenue cycle management from the ground up — moving beyond fragmented 
          tools and manual processes to create an intelligence-driven platform that transforms RCM from 
          a cost center into a profit engine.
        </p>

        <div className="mt-12 space-y-6">
          {innovations.map((innovation, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <innovation.icon className="h-10 w-10 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{innovation.title}</h3>
                  <p className="mt-3 text-gray-600">{innovation.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">The MedPact RCM Difference</h2>
          <p className="text-lg text-cyan-50">
            While traditional RCM vendors focus on replacing staff or automating individual tasks, 
            MedPact RCM provides a complete intelligence layer that covers the entire revenue cycle — 
            from pre-service revenue protection through post-service recovery and strategic optimization.
          </p>
          <p className="mt-4 text-lg text-cyan-50">
            This architecture enables organizations to prevent revenue loss before care is delivered, 
            capture 100% of earned revenue accurately, and turn RCM into a growth lever rather than 
            a back-office burden.
          </p>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
