"use client";

import { motion } from "framer-motion";
import { PremiumButton } from "@/components/ui/premium-button";
import { CheckCircle2, ArrowRight, Map, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-6 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full"
        >
          <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl shadow-blue-100 text-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50" />
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
              className="w-24 h-24 bg-emerald-100 rounded-3xl flex items-center justify-center text-emerald-600 mx-auto mb-10 shadow-xl shadow-emerald-50"
            >
              <CheckCircle2 className="w-12 h-12" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold text-slate-900 mb-4 tracking-tight"
            >
              System Activated
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-slate-500 mb-12 font-medium leading-relaxed"
            >
              Your regional agency account has been provisioned. The AI engine is now ready to ingest your first GTFS dataset.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 mb-12"
            >
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Map className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Maps</p>
                <p className="text-xs font-bold text-slate-900">Active</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Cpu className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Engine</p>
                <p className="text-xs font-bold text-slate-900">Ready</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Security</p>
                <p className="text-xs font-bold text-slate-900">Verified</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <Link href="/dashboard">
                <PremiumButton className="w-full h-14 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-blue-100">
                  Go to Dashboard <ArrowRight className="w-4 h-4 ml-2" />
                </PremiumButton>
              </Link>
              <Link href="/data-upload">
                <PremiumButton variant="ghost" className="w-full h-14 rounded-2xl font-bold text-sm uppercase tracking-widest text-slate-400 hover:text-blue-600">
                  Upload GTFS Data
                </PremiumButton>
              </Link>
            </motion.div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-8 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]"
          >
            Statewide Transit Continuity Platform v4.2
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}
