"use client";

import { motion } from "framer-motion";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { 
  FileText, 
  Download, 
  ArrowRight, 
  ArrowLeft,
  Search,
  ZoomIn,
  ZoomOut,
  Maximize2
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AgreementPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Bar */}
      <header className="bg-white border-b border-slate-200 py-4 px-8 sticky top-0 z-30">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <PremiumButton variant="ghost" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </PremiumButton>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-tight uppercase tracking-wide">Subscription Agreement</h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nexus Opportunity Fund IV</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-100 rounded-lg p-1">
              <PremiumButton variant="ghost" size="sm" className="h-8 w-8 p-0"><ZoomOut className="w-4 h-4" /></PremiumButton>
              <span className="text-xs font-bold px-3 text-slate-600">100%</span>
              <PremiumButton variant="ghost" size="sm" className="h-8 w-8 p-0"><ZoomIn className="w-4 h-4" /></PremiumButton>
            </div>
            <PremiumButton variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" /> Download PDF
            </PremiumButton>
            <PremiumButton size="sm" className="gap-2" onClick={() => router.push("/sign")}>
              Proceed to Sign <ArrowRight className="w-4 h-4" />
            </PremiumButton>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-4xl"
        >
          {/* Document Preview Card */}
          <div className="bg-white shadow-2xl shadow-slate-200 border border-slate-200 rounded-lg min-h-[1200px] p-24 relative overflow-hidden">
            {/* Watermark/Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
            
            {/* Header */}
            <div className="text-center mb-16 border-b-2 border-slate-900 pb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">SUBSCRIPTION AGREEMENT</h2>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">Nexus Opportunity Fund IV, LP</p>
            </div>

            {/* Content Body */}
            <div className="space-y-8 text-slate-800 leading-relaxed font-serif">
              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-4">1. SUBSCRIPTION</h3>
                <p className="text-justify indent-12">
                  The undersigned (the “Investor”) hereby subscribes for and agrees to purchase a limited partnership interest (the “Interest”) in Nexus Opportunity Fund IV, LP (the “Partnership”), a Delaware limited partnership, in the aggregate principal amount specified on the signature page hereto (the “Subscription Amount”), on the terms and conditions set forth in this Subscription Agreement.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-4">2. REPRESENTATIONS AND WARRANTIES</h3>
                <p className="text-justify indent-12">
                  The Investor represents and warrants to the Partnership and the General Partner as follows: (a) Investor has received and reviewed the Confidential Private Placement Memorandum and the Limited Partnership Agreement; (b) Investor has such knowledge and experience in financial and business matters that it is capable of evaluating the merits and risks of an investment in the Interest; (c) Investor is an “accredited investor” as defined in Rule 501(a) of Regulation D under the Securities Act.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-4">3. CAPITAL CONTRIBUTIONS</h3>
                <p className="text-justify indent-12">
                  Investor shall contribute capital to the Partnership in an amount equal to the Subscription Amount as and when called by the General Partner in accordance with the terms of the Partnership Agreement. The initial capital contribution shall be due on the date specified in the initial capital call notice.
                </p>
              </section>

              {/* Placeholder for Signature */}
              <div className="mt-24 pt-12 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-24">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Investor Signature</p>
                    <div className="h-16 w-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center group cursor-pointer hover:border-blue-400 transition-colors" onClick={() => router.push("/sign")}>
                      <span className="text-blue-500 font-bold text-sm flex items-center gap-2 group-hover:scale-105 transition-transform">
                        <FileText className="w-4 h-4" /> Click here to sign
                      </span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-0.5 w-full bg-slate-900" />
                      <p className="text-xs font-bold">Authorized Signatory</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Date of Execution</p>
                    <p className="text-lg font-bold py-4">April 28, 2026</p>
                    <div className="mt-4 space-y-2">
                      <div className="h-0.5 w-full bg-slate-900" />
                      <p className="text-xs font-bold">Effective Date</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Footer */}
              <div className="mt-32 text-[10px] text-slate-400 text-center uppercase tracking-widest leading-relaxed">
                CONFIDENTIAL DOCUMENT • FOR INSTITUTIONAL USE ONLY • SUBJECT TO SEC REGULATION D
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Action Footer Overlay */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <div className="glass px-8 py-4 rounded-2xl flex items-center gap-6 shadow-2xl shadow-blue-200 border border-blue-100">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Next Step</span>
            <span className="text-sm font-bold text-slate-900">Digital Signature Flow</span>
          </div>
          <PremiumButton size="lg" className="px-8 shadow-lg shadow-blue-200" onClick={() => router.push("/sign")}>
            Sign Agreement <ArrowRight className="w-4 h-4 ml-2" />
          </PremiumButton>
        </div>
      </motion.div>
    </div>
  );
}
