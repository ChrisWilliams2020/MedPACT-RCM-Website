import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

export default function OutcomesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-gray-50 to-slate-100">
      <PublicHeader />

      <section className="px-6 pt-12 pb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Outcomes
        </h1>
        <p className="mt-4 text-gray-600">
          Healthcare organizations leveraging MedPACT typically achieve a{" "}
          <span className="font-semibold">15% profitability improvement in the first year</span>{" "}
          through accelerated reimbursements, reduced denial rates, and
          operational efficiency gains.
        </p>
        <p className="mt-4 text-gray-600">
          Over a <span className="font-semibold">five-year period</span>, the
          MedPACT model produces a cumulative{" "}
          <span className="font-semibold">30% improvement in profitability</span>,
          enabled by sustained protocol adoption, outcome optimization, and the
          compounding effects of payer–provider alignment.
        </p>
      </section>

      <PublicFooter />
    </main>
  );
}
