"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { CheckCircle2, Zap, Globe, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Regional",
      price: "$2,499",
      period: "/month",
      desc: "For small to medium transit agencies managing single-district networks.",
      features: [
        "Up to 50 active routes",
        "Basic Gap Analysis",
        "Weekly Network Audits",
        "Standard GTFS Ingestion",
        "Email Support"
      ],
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      cta: "Start Regional Plan",
      featured: false
    },
    {
      name: "Statewide",
      price: "$8,999",
      period: "/month",
      desc: "Comprehensive solution for state DOTs and multi-district authorities.",
      features: [
        "Unlimited active routes",
        "Advanced AI Continuity Scanning",
        "Real-time Data Sync (GTFS-RT)",
        "Scenario Impact Modeling",
        "24/7 Priority Support",
        "Custom API Access"
      ],
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      cta: "Deploy Statewide",
      featured: true
    },
    {
      name: "Federal",
      price: "Custom",
      period: "",
      desc: "Enterprise-grade infrastructure for national transit oversight and policy.",
      features: [
        "Multi-state Data Federation",
        "Predictive National Analytics",
        "Dedicated Continuity Analyst",
        "Custom Governance Layer",
        "On-premise Deployment Opt.",
        "White-glove Implementation"
      ],
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      cta: "Contact Sales",
      featured: false
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-8 uppercase tracking-widest"
          >
            Flexible Infrastructure
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight"
          >
            Scale your <span className="text-blue-600">Transit Intelligence.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Choose the plan that fits your agency&apos;s scale. From local networks to statewide oversight, TransitPrime has you covered.
          </motion.p>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
              >
                <PremiumCard className={`h-full p-10 flex flex-col items-start text-left border-slate-200/60 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all duration-500 ${
                  plan.featured ? "bg-white ring-4 ring-blue-600/5 shadow-blue-100/50" : "bg-white/60 backdrop-blur-sm"
                }`}>
                  {plan.featured && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-blue-600 text-white text-[10px] font-bold px-8 py-1.5 rotate-45 translate-x-6 translate-y-2 uppercase tracking-widest">
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {plan.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed">{plan.desc}</p>
                  
                  <div className="flex items-baseline gap-1 mb-10">
                    <span className="text-5xl font-bold text-slate-900 tracking-tighter">{plan.price}</span>
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">{plan.period}</span>
                  </div>
                  
                  <div className="space-y-4 w-full mb-10">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="text-sm font-semibold text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/success" className="w-full mt-auto">
                    <PremiumButton 
                      variant={plan.featured ? "primary" : "outline"} 
                      className={`w-full h-14 rounded-2xl font-bold text-sm uppercase tracking-widest ${
                        plan.featured ? "shadow-xl shadow-blue-200" : "bg-white border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {plan.cta} <ArrowRight className="w-4 h-4 ml-2" />
                    </PremiumButton>
                  </Link>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-50/50 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">Trusted by Policy Makers Statewide</p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
            {/* Mock Agency Logos */}
            <div className="font-black text-2xl tracking-tighter text-slate-900">DOT.ALPHA</div>
            <div className="font-black text-2xl tracking-tighter text-slate-900">METRO.LINK</div>
            <div className="font-black text-2xl tracking-tighter text-slate-900">RURAL.HUB</div>
            <div className="font-black text-2xl tracking-tighter text-slate-900">STATE.GRID</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Globe className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl text-slate-900 tracking-tight">TransitPrime</span>
            </div>
            <div className="text-slate-400 text-sm font-medium">
              © 2026 TransitPrime Systems Inc. Enterprise Continuity Solutions.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
