import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

export default function InnovationsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-gray-50 to-slate-100">
      <PublicHeader />

      <section className="px-6 pt-12 pb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Innovations
        </h1>
        <p className="mt-4 text-gray-600">
          MedPACT introduces a novel approach to revenue integrity, combining
          secure data intelligence, protocol-based adjudication, and shared
          financial alignment—all without exposing proprietary models or trade
          secrets. The platform's strength lies in its architecture: a secure,
          transparent system that rewards accuracy, compliance, and improved
          patient outcomes.
        </p>
        <p className="mt-4 text-gray-600">
          MedPACT elevates the industry not by revealing algorithms, but by
          orchestrating collaboration that delivers measurable value at every
          step of the revenue cycle. This allows partners to benefit from
          innovation and performance while MedPACT maintains the confidentiality
          of its core intellectual property.
        </p>
      </section>

      <PublicFooter />
    </main>
  );
}
