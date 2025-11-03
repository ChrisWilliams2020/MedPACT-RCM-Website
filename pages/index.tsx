
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Check, BarChart3, ShieldCheck, Mic, Cpu, DollarSign, Activity, ArrowRight, Building2, Lock, Server } from "lucide-react";
import { motion } from "framer-motion";

/**
 * MedPact RCM – Single-file landing page
 * Stack: Next.js 14 App Router, Tailwind CSS, shadcn/ui, Lucide icons, Framer Motion
 * Brand: blue / green / black (black for nav buttons). Bold button style by default.
 * Notes: Replace logo src with MedPact mark. Wire to /api/contact or CRM of choice.
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* Top Announcement */}
      <div className="w-full bg-gradient-to-r from-cyan-600 to-emerald-600 text-white text-center text-sm py-2">CONFIDENTIAL & BUSINESS RESTRICTED</div>
      {/* ...rest of MedPactRCMLanding code... */}
    </main>
  );
}
