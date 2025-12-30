import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";
import { Check, ShieldCheck, DollarSign, BarChart3, FileText, AlertCircle } from "lucide-react";

export default function PlatformPage() {
  const valueChain = [
    {
      title: "Pre-Service (Revenue Protection)",
      goal: "Prevent revenue loss before care is delivered",
      icon: ShieldCheck,
      features: [
        "Advanced Price Transparency Engine — Real-time, CMS-compliant pricing & patient responsibility estimates",
        "Eligibility & Benefits Intelligence — Automated coverage verification with human-readable insights",
        "Contract Rate Modeling & Benchmarking — Understand true payer economics before services occur"
      ],
      painSolved: "Unclear pricing, surprise bills, pre-authorization errors, under-reimbursement"
    },
    {
      title: "Point of Care (Revenue Capture)",
      goal: "Capture 100% of earned revenue accurately",
      icon: DollarSign,
      features: [
        "Charge Capture & Coding Optimization — AI-assisted detection of missed charges and coding gaps",
        "Patient Financial Engagement Platform — Transparent billing, payment plans, and patient communications"
      ],
      painSolved: "Undercoding, missed charges, patient confusion, low collections"
    },
    {
      title: "Post-Service (Revenue Recovery)",
      goal: "Accelerate cash flow and reduce write-offs",
      icon: FileText,
      features: [
        "Claims Management & Denials Intelligence — Predictive denial risk, root-cause analysis, prioritized appeals",
        "RCM Workflow Automation & Task Orchestration — Rules-driven follow-ups, escalations, and recovery workflows"
      ],
      painSolved: "High denial rates, delayed AR, staff overload, reactive billing"
    },
    {
      title: "Strategic Intelligence Layer (Revenue Optimization)",
      goal: "Turn RCM into a growth lever, not a cost center",
      icon: BarChart3,
      features: [
        "RCM Analytics & Executive Dashboards — Real-time KPIs: AR days, net collections, payer performance",
        "Payer Negotiation & Uplift Intelligence (Advanced Module) — Data-driven contract renegotiation and margin expansion"
      ],
      painSolved: "Blind payer negotiations, lack of executive visibility, margin erosion"
    },
    {
      title: "Compliance & Risk Layer (Always-On)",
      goal: "Reduce regulatory exposure and audit risk",
      icon: AlertCircle,
      features: [
        "Compliance, Audit & Regulatory Readiness Layer — CMS, HIPAA, payer audit logs, documentation, reporting"
      ],
      painSolved: "Compliance gaps, audit stress, regulatory penalties"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <PublicHeader />

      <section className="px-6 pt-12 pb-16 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          The MedPACT Platform
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-4xl">
          Healthcare practices leave millions on the table because payment accuracy, productivity, and infrastructure 
          don't talk to each other. MedPact turns complex operational and financial data into action across payment yield, 
          labor productivity, payer strategy, and capacity utilization.
        </p>
        <p className="mt-3 text-base font-semibold text-gray-800">
          Not reports — results.
        </p>
        
        <div className="mt-12 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">RCM Value Chain Coverage</h2>
          
          {valueChain.map((phase, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <phase.icon className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-600">{phase.goal}</p>
                  
                  <div className="mt-4 space-y-3">
                    {phase.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-0.5 text-cyan-600 flex-shrink-0" />
                        <p className="text-slate-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm font-semibold text-red-800">
                      <span className="font-bold">Key Pain Solved:</span> {phase.painSolved}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Execution Over Reporting</h2>
          <p className="text-lg text-cyan-50 mb-6">
            Healthcare practices lose profitability to payment leakage, labor inefficiency, and disconnected data. 
            Private equity scaled ownership — but struggled to scale execution. MedPact fixes that.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3">Core Bundle (Entry ARR)</h3>
              <p className="text-cyan-50">Price Transparency + Eligibility + Claims + Dashboards</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Expansion Modules</h3>
              <p className="text-cyan-50">Coding Optimization, Workflow Automation, Patient Engagement</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Enterprise / High-Margin Upsell</h3>
              <p className="text-cyan-50">Contract Intelligence + Payer Negotiation AI</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why MedPact RCM Wins</h2>
          <div className="space-y-4">
            {[
              "Fixes execution where private equity struggled — turns data into action",
              "Addresses payment leakage, labor inefficiency, and disconnected data",
              "Delivers up to 30% profitability improvement over 3 years (near-term cash lift → durable EBITDA)",
              "Built around pricing intelligence, not billing labor — compliance is native, not bolted on"
            ].map((win, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="h-6 w-6 mt-0.5 text-emerald-600 flex-shrink-0" />
                <p className="text-lg text-slate-700">{win}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
