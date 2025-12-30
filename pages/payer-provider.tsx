import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";
import { Users, TrendingUp, FileCheck, Target } from "lucide-react";

export default function PayerProviderPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <PublicHeader />

      <section className="px-6 pt-12 pb-16 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Payer Intelligence & Provider Success
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-3xl">
          MedPact RCM bridges the gap between providers and payers through intelligent automation, 
          transparent pricing, and data-driven contract optimization — creating alignment where 
          traditionally there has been friction.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <Users className="h-10 w-10 text-cyan-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">For Providers</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">•</span>
                <span>Understand true payer economics before services occur with contract rate modeling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">•</span>
                <span>Reduce denial rates through predictive intelligence and automated appeals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">•</span>
                <span>Accelerate reimbursement cycles with optimized claims and workflow automation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">•</span>
                <span>Negotiate stronger contracts with data-driven payer performance analytics</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <FileCheck className="h-10 w-10 text-emerald-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">For Payers</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Receive cleaner, more accurate claims with AI-assisted coding optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Reduce administrative burden through automated eligibility verification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Improve member experience with transparent pricing and patient communications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Partner with providers on value-based care initiatives using shared analytics</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-2xl p-8 text-white">
          <div className="flex items-start gap-4 mb-6">
            <TrendingUp className="h-10 w-10 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Shared Success Model</h2>
              <p className="text-lg text-cyan-50">
                When providers and payers operate from the same intelligence layer, everyone wins. 
                Cleaner claims mean faster adjudication. Better pricing transparency means fewer 
                disputes. Data-driven negotiations replace adversarial relationships.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="font-bold text-lg mb-2">Provider Benefits</h3>
              <p className="text-cyan-50">Faster reimbursement, fewer denials, stronger negotiating position</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Payer Benefits</h3>
              <p className="text-cyan-50">Reduced processing costs, improved accuracy, better provider relationships</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <Target className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-4">One Platform, Aligned Incentives</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            MedPact RCM replaces fragmented workflows and adversarial processes with a unified intelligence 
            layer that creates transparency, accelerates cash flow, and turns payer-provider relationships 
            into strategic partnerships.
          </p>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
