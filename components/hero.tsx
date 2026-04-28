"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
              The Future of CRM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight"
          >
            AI-Powered CRM That <br />
            <span className="text-blue-600">Thinks With You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Nexus AI automates your workflows, predicts customer needs, and closes deals faster. 
            Experience the world's most intelligent workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/dashboard"
              className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              Start Free Trial
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all">
              <div className="w-6 h-6 flex items-center justify-center bg-slate-100 rounded-full">
                <Play size={12} fill="currentColor" />
              </div>
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mt-20 relative max-w-6xl mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white"
        >
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
            </div>
            <div className="ml-4 h-6 w-64 bg-slate-100 rounded flex items-center px-2 text-[10px] text-slate-400">
              nexus-ai.app/dashboard
            </div>
          </div>
          <div className="aspect-[16/9] bg-white relative overflow-hidden">
             {/* Abstract Dashboard Mockup */}
             <div className="absolute inset-0 p-8 flex gap-6">
                <div className="w-48 bg-slate-50 rounded-lg flex flex-col gap-4 p-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-3 bg-slate-200 rounded w-full" style={{ width: `${60 + (i * 7) % 40}%` }} />
                  ))}
                </div>
                <div className="flex-1 flex flex-col gap-6">
                   <div className="flex gap-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex-1 h-32 bg-slate-50 rounded-xl border border-slate-100" />
                      ))}
                   </div>
                   <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100" />
                </div>
             </div>
             {/* Animated overlay for "intelligence" */}
             <motion.div 
               animate={{ opacity: [0, 0.5, 0] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 to-indigo-100/20 pointer-events-none"
             />
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
      </div>
    </section>
  );
}
