import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

export default function MissionPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <PublicHeader />

      <section className="px-6 pt-12 pb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Our Mission
        </h1>
        <p className="mt-6 text-xl font-bold text-gray-800 bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
          Fix execution where private equity struggled — turning complex operational and financial data into action.
        </p>
        <p className="mt-6 text-gray-700 text-lg">
          Healthcare practices leave millions on the table because payment accuracy, productivity, and 
          infrastructure don't talk to each other. Private equity scaled ownership — but struggled to scale execution.
        </p>
        <p className="mt-4 text-gray-700 text-lg font-semibold">
          MedPact fixes that.
        </p>
        <p className="mt-4 text-gray-700 text-lg">
          We turn complex operational and financial data into action across payment yield, labor productivity, 
          payer strategy, and capacity utilization. Not reports — results.
        </p>
        <p className="mt-4 text-gray-700 text-lg">
          Healthcare practices lose profitability to payment leakage, labor inefficiency, and disconnected data. 
          MedPact's intelligence-driven platform unifies pricing transparency, payer intelligence, workflow automation, 
          compliance, and analytics into a single operating layer — replacing fragmented tools and manual processes.
        </p>
        <p className="mt-4 text-gray-700 text-lg">
          Our mission is to deliver measurable profitability improvement — starting with near-term cash lift 
          and compounding into durable EBITDA — by fixing the execution gaps that have held healthcare organizations back.
        </p>
      </section>

      <PublicFooter />
    </main>
  );
}
