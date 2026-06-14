"use client";

import { Wind } from "lucide-react";

const links = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Technology", href: "#anatomy" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
              <Wind className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white font-bold tracking-tight">INFINICIG</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 justify-center">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm hover:text-sky-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Infinicig. All rights reserved.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-600 max-w-xl mx-auto">
            Infinicig is a concept product for adult smokers only. The regenerative technology described represents our innovation pipeline. Pre-orders are subject to regulatory approval by jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
}
