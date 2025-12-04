import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

export default function MissionPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-gray-50 to-slate-100">
      <PublicHeader />

      <section className="px-6 pt-12 pb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Our Mission
        </h1>
        <p className="mt-4 text-gray-600">
          MedPACT's mission is to realign the financial framework of healthcare
          by replacing adversarial revenue interactions with a transparent,
          collaborative, and data-driven model. Our goal is to create a revenue
          cycle ecosystem where payers and providers share a unified
          understanding of clinical intent, financial accuracy, and verified
          outcomes. MedPACT enables organizations to eliminate unnecessary
          friction, reduce administrative burden, and ensure every claim is
          adjudicated fairly and efficiently.
        </p>
        <p className="mt-4 text-gray-600">
          We believe healthcare profitability should be rooted in value,
          precision, and aligned incentives—not complexity or conflict. MedPACT
          empowers organizations to improve reimbursement integrity, accelerate
          payment timelines, and optimize operational performance through
          protocol-based collaboration and intelligent automation. When
          transparency and shared gains replace traditional barriers, patients,
          providers, and payers all benefit.
        </p>
      </section>

      <PublicFooter />
    </main>
  );
}
