import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";
import ImageUpload from "../components/ImageUpload";

type Leader = {
  name: string;
  title: string;
  bio: string;
  id: string;
};

type Advisor = {
  name: string;
  bio: string;
  id: string;
};

const leadership: Leader[] = [
  {
    name: "Dr. Christopher Williams",
    title: "Founder & CEO",
    bio: "Dr. Williams is a practicing ophthalmologist, entrepreneur, and the visionary behind MedPACT. His clinical background and operational insight drive MedPACT's mission to modernize the financial infrastructure of healthcare.",
    id: "christopher-williams",
  },
  {
    name: "Dave Davis",
    title: "Chief Operating Officer",
    bio: "Dave Davis is a seasoned entrepreneurial operator known for scaling startups and optimizing execution. He brings operational rigor, strategic insight, and high-growth experience to MedPACT.",
    id: "dave-davis",
  },
  {
    name: "Terrence Duckett",
    title: "Chief Strategy and Marketing Officer",
    bio: "Terrence Duckett is a distinguished healthcare strategist with deep expertise in payer partnerships, market development, and system integration. He shapes MedPACT's long-term strategy and market expansion.",
    id: "terrence-duckett",
  },
  {
    name: "Robert Ostovich",
    title: "Director of Sales",
    bio: "Robert brings over 30 years of enterprise-wide healthcare sales experience, specializing in solutions that transform organizational profitability through technology-driven innovation.",
    id: "robert-ostovich",
  },
  {
    name: "Dr. Jason Bacharach",
    title: "Medical Director",
    bio: "A highly experienced medical leader with extensive expertise in helping corporations refine healthcare delivery, optimize clinical pathways, and strengthen operational outcomes across complex systems.",
    id: "jason-bacharach",
  },
  {
    name: "Bill Williams",
    title: "Executive Advisor",
    bio: "Bill Williams provides strategic guidance in corporate governance, financial structuring, and enterprise relationships to support MedPACT's accelerated growth.",
    id: "bill-williams",
  },
  {
    name: "Lindsay Saddic",
    title: "Communications Director",
    bio: "Lindsay Saddic manages executive operations, organizational coordination, and communication workflows across MedPACT's cross-functional teams.",
    id: "lindsay-saddic",
  },
];

const advisors: Advisor[] = [
  {
    name: "Dr. Scott Edmonds",
    bio: "Dr. Edmonds is a seasoned clinician–entrepreneur with deep experience advising emerging healthcare companies and guiding innovations that improve practice economics and patient access.",
    id: "scott-edmonds",
  },
  {
    name: "Julia Lee",
    bio: "Julia Lee is an expert in practice optimization and network development. She has advised leading ophthalmology practices and AAO members on efficiency, workflow integration, and revenue integrity.",
    id: "julia-lee",
  },
  {
    name: "Brian Murphy",
    bio: "Brian Murphy is a Strategy Advisor with extensive experience in product messaging, go-to-market strategy, and enterprise sales. He helps MedPACT refine market positioning and accelerate revenue growth.",
    id: "brian-murphy",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <PublicHeader />

      <section className="px-6 pt-12 pb-8 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          About MedPACT
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl">
          MedPACT is dedicated to transforming the revenue cycle from an
          adversarial, opaque process into a collaborative, transparent, and
          profitable partnership between payers and providers. Our leadership
          and advisors bring deep experience in clinical care, operations,
          technology, and healthcare finance.
        </p>
      </section>

      {/* Leadership */}
      <section className="px-6 pb-12 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">Leadership Team</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          The MedPACT leadership team combines clinical insight, operational
          excellence, and strategic vision to build a platform that aligns
          incentives and unlocks shared profitability.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {leadership.map((leader) => (
            <article
              key={leader.name}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              {/* Picture window with upload */}
              <ImageUpload personId={leader.id} personName={leader.name} />

              <div>
                <h3 className="text-lg font-semibold">{leader.name}</h3>
                <p className="text-sm font-medium text-cyan-600">
                  {leader.title}
                </p>
                <p className="mt-2 text-sm text-gray-600">{leader.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">Advisors</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Our advisors help guide MedPACT&apos;s growth, product direction, and
          alignment with the evolving healthcare landscape.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {advisors.map((advisor) => (
            <article
              key={advisor.name}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              {/* Picture window with upload */}
              <ImageUpload personId={advisor.id} personName={advisor.name} />

              <div>
                <h3 className="text-lg font-semibold">{advisor.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{advisor.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
