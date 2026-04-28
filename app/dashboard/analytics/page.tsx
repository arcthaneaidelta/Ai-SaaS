"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, PieChart, Download } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Advanced Analytics</h1>
          <p className="text-sm text-slate-500">Deep dive into your sales and team performance.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
          <Download size={18} />
          Export All Data
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="p-8 bg-white border border-slate-200 rounded-3xl h-[400px] flex items-center justify-center text-slate-400">
            <div className="text-center">
               <BarChart3 size={48} className="mx-auto mb-4 opacity-20" />
               <p className="font-medium">Sales Distribution Chart</p>
               <p className="text-xs">Interactive visualization loading...</p>
            </div>
         </div>
         <div className="p-8 bg-white border border-slate-200 rounded-3xl h-[400px] flex items-center justify-center text-slate-400">
            <div className="text-center">
               <PieChart size={48} className="mx-auto mb-4 opacity-20" />
               <p className="font-medium">Lead Attribution Source</p>
               <p className="text-xs">Interactive visualization loading...</p>
            </div>
         </div>
      </div>
    </div>
  );
}
