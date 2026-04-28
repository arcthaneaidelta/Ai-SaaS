"use client";

import { motion } from "framer-motion";
import Sidebar from "@/components/sidebar";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { 
  FileBarChart, 
  Download, 
  Share2, 
  Calendar, 
  Filter, 
  FileText,
  Search,
  MoreVertical,
  CheckCircle2,
  Clock
} from "lucide-react";

export default function ReportsPage() {
  const reports = [
    { name: "Q2 Continuity Audit", date: "Apr 24, 2026", size: "4.2 MB", type: "PDF", status: "Verified" },
    { name: "South Corridor Impact Study", date: "Apr 22, 2026", size: "1.8 MB", type: "PDF", status: "Verified" },
    { name: "Statewide Accessibility Index", date: "Apr 18, 2026", size: "8.5 MB", type: "XLSX", status: "Processing" },
    { name: "Gap Analysis: North District", date: "Apr 15, 2026", size: "2.1 MB", type: "PDF", status: "Verified" },
    { name: "GTFS-RT Feed Health Report", date: "Apr 12, 2026", size: "0.5 MB", type: "JSON", status: "Verified" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />
      
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
              <FileBarChart className="w-3 h-3" /> Audit & Reporting Hub
            </div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Intelligence Reports</h1>
          </div>
          
          <div className="flex gap-3">
            <PremiumButton className="rounded-xl px-6 shadow-lg shadow-blue-100">
              <Calendar className="w-4 h-4 mr-2" /> Schedule Report
            </PremiumButton>
          </div>
        </header>

        <div className="space-y-8">
          {/* Featured Report Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <PremiumCard className="p-8 border-none bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <FileBarChart className="w-64 h-64" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-100 mb-4">
                  <Clock className="w-3 h-3" /> Latest Generation: 2 hours ago
                </div>
                <h2 className="text-3xl font-bold mb-4 tracking-tight">Annual Transit Continuity & Resilience Audit (2026)</h2>
                <p className="text-blue-100/80 mb-8 leading-relaxed">
                  A comprehensive analysis of statewide transit performance, identified service gaps, 
                  and the projected impact of infrastructure investments over the next 24 months.
                </p>
                <div className="flex gap-4">
                  <PremiumButton className="bg-white text-blue-600 hover:bg-blue-50 px-8 rounded-xl h-12 shadow-2xl">
                    <Download className="w-4 h-4 mr-2" /> Download Report
                  </PremiumButton>
                  <PremiumButton variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8 rounded-xl h-12">
                    <Share2 className="w-4 h-4 mr-2" /> Share with Team
                  </PremiumButton>
                </div>
              </div>
            </PremiumCard>
          </motion.div>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <PremiumButton variant="outline" className="rounded-xl h-10 px-4 bg-white border-slate-200 text-xs font-bold">
                <Filter className="w-3 h-3 mr-2 text-slate-400" /> Filter by Type
              </PremiumButton>
              <PremiumButton variant="outline" className="rounded-xl h-10 px-4 bg-white border-slate-200 text-xs font-bold">
                <Calendar className="w-3 h-3 mr-2 text-slate-400" /> Sort: Date
              </PremiumButton>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search reports..."
                className="pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-4 focus:ring-blue-500/10 w-72 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Reports List */}
          <PremiumCard className="p-0 border-slate-200/60 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Report Name</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date Generated</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">File Size</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {reports.map((report, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 group-hover:scale-110 transition-transform">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 mb-0.5">{report.name}</p>
                            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{report.type} DOCUMENT</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm font-medium text-slate-500">{report.date}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm font-bold text-slate-900 tabular-nums">{report.size}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${
                          report.status === "Verified" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                        }`}>
                          {report.status === "Verified" ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5 animate-spin" />}
                          {report.status}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-600 transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
              <p className="text-xs text-slate-400 font-medium">Showing {reports.length} of 42 reports</p>
              <div className="flex gap-2">
                <PremiumButton variant="outline" size="sm" className="h-9 px-3 rounded-lg border-slate-200 text-xs disabled:opacity-50" disabled>Previous</PremiumButton>
                <PremiumButton variant="outline" size="sm" className="h-9 px-3 rounded-lg border-slate-200 text-xs">Next Page</PremiumButton>
              </div>
            </div>
          </PremiumCard>
        </div>
      </main>
    </div>
  );
}
