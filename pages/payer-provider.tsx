import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

export default function PayerProviderPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-gray-50 to-slate-100">
      <PublicHeader />

      <section className="px-6 pt-12 pb-16 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Payer–Provider Collaboration
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl">
          MedPACT provides a unified collaborative workspace where payers and
          providers work from the same real-time data, protocol definitions, and
          outcome benchmarks. This replaces traditional disputes with shared
          visibility and co-owned decisions about how care is delivered and
          reimbursed.
        </p>
        <p className="mt-4 text-gray-600 max-w-3xl">
          By co-building and approving treatment protocols, both sides reduce
          the cost of care while maintaining or improving clinical outcomes.
          Every efficiency gained becomes shared savings, distributed
          transparently through MedPACT&apos;s ledger and royalty logic. The
          result is a partnership model built on trust, transparency, and aligned
          profitability.
        </p>
      </section>

      <PublicFooter />
    </main>
  );
}
