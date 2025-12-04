import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

export default function PlatformPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-gray-50 to-slate-100">
      <PublicHeader />

      <section className="px-6 pt-12 pb-16 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          The MedPACT Platform
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl">
          The MedPACT platform integrates revenue cycle automation, shared
          protocol intelligence, and real-time payer–provider collaboration into
          one unified environment. By aligning clinical pathways with
          reimbursement logic, MedPACT reduces variance, eliminates unnecessary
          denials, and ensures predictable financial outcomes.
        </p>
        <p className="mt-4 text-gray-600 max-w-3xl">
          Our platform transforms profitability by converting administrative
          waste into shared revenue, enabling organizations to realize immediate
          improvements and long-term financial stability. When every stakeholder
          operates from the same trusted data and agreed-upon protocols,
          financial performance becomes more transparent, more predictable, and
          more sustainable.
        </p>
      </section>

      <PublicFooter />
    </main>
  );
}
