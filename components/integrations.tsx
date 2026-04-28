"use client";

import { motion } from "framer-motion";
import { Layout, Mail, MessageSquare, Zap, Code, Globe } from "lucide-react";

const logos = [
  { icon: <Layout className="w-8 h-8" />, name: "Workflow" },
  { icon: <Mail className="w-8 h-8" />, name: "Gmail" },
  { icon: <Zap className="w-8 h-8" />, name: "Zapier" },
  { icon: <Code className="w-8 h-8" />, name: "GitHub" },
  { icon: <MessageSquare className="w-8 h-8" />, name: "Intercom" },
  { icon: <Globe className="w-8 h-8" />, name: "Stripe" },
];

export function Integrations() {
  return (
    <section className="py-20 bg-white overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-bold tracking-widest text-slate-400 uppercase">
          Trusted by over 2,500+ fast-growing teams
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex py-4">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center gap-3 px-12 opacity-40 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0">
              <div className="text-slate-900">{logo.icon}</div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
