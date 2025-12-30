import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";
import { TrendingUp, DollarSign, Clock, Target } from "lucide-react";

export default function OutcomesPage() {
  const outcomes = [
    {
      icon: DollarSign,
      metric: "Up to 30% Profitability Improvement",
      description: "Over 3 years: starting with near-term cash lift and compounding into durable EBITDA"
    },
    {
      icon: TrendingUp,
      metric: "Payment Yield Optimization",
      description: "Fix payment leakage through AI-assisted coding, charge capture, and denial prevention"
    },
    {
      icon: Clock,
      metric: "Labor Productivity Gains",
      description: "Eliminate manual processes and staff overload through intelligent workflow automation"
    },
    {
      icon: Target,
      metric: "Data-Driven Action",
      description: "Turn operational and financial data into action across payer strategy and capacity utilization"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <PublicHeader />

      <section className="px-6 pt-12 pb-16 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Proven Outcomes
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-3xl">
          Our clients achieve up to 30% profitability improvement over 3 years, starting with near-term 
          cash lift and compounding into durable EBITDA.
        </p>
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Not reports — results.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <outcome.icon className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900">{outcome.metric}</h3>
              <p className="mt-3 text-gray-600">{outcome.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">The Execution Gap Fixed</h2>
          <div className="space-y-4 text-cyan-50">
            <p>
              <span className="font-semibold text-white">Payment Leakage:</span> Healthcare practices leave millions on the table 
              from inaccurate coding, missed charges, and preventable denials
            </p>
            <p>
              <span className="font-semibold text-white">Labor Inefficiency:</span> Staff buried in manual processes that could 
              be automated, reducing productivity and increasing costs
            </p>
            <p>
              <span className="font-semibold text-white">Disconnected Data:</span> Payment accuracy, productivity, and infrastructure 
              don't talk to each other — creating blind spots
            </p>
            <p>
              <span className="font-semibold text-white">MedPact's Solution:</span> We connect operational and financial data into 
              one intelligence layer that drives action across payment yield, labor productivity, payer strategy, and capacity utilization
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 italic">
            "Private equity scaled ownership — but struggled to scale execution. MedPact fixes that."
          </p>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
