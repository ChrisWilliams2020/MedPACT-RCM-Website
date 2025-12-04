import React from "react";
import { Button } from "./ui/button";

export default function PublicHeader() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500" />
            <span className="font-bold text-lg tracking-tight">MedPACT <span className="text-slate-500">RCM</span></span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            Home
          </a>
          <a href="/about" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            About
          </a>
          <a href="/platform" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            Platform
          </a>
          <a href="/contact" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a href="/book-demo">
            <Button className="rounded-2xl px-4 py-2 font-semibold bg-gradient-to-r from-cyan-600 to-emerald-600">
              Book a Demo
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
