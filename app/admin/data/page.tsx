"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import Sidebar from "@/components/sidebar";
import { 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const submissions = [
  { id: "1", name: "David Miller", email: "david@miller-capital.com", amount: "$250,000", status: "Signed", date: "2026-04-28", fund: "Nexus Opportunity IV" },
  { id: "2", name: "Elena Kostic", email: "elena@kostic.me", amount: "$100,000", status: "Pending Signature", date: "2026-04-27", fund: "Nexus Opportunity IV" },
  { id: "3", name: "Marcus Thorne", email: "m.thorne@lunar-ventures.io", amount: "$500,000", status: "Signed", date: "2026-04-27", fund: "Nexus Tech Fund II" },
  { id: "4", name: "Sarah Jenkins", email: "sarah@jenkins.co", amount: "$50,000", status: "In Progress", date: "2026-04-26", fund: "Nexus Opportunity IV" },
  { id: "5", name: "Robert Chen", email: "r.chen@global-invest.com", amount: "$1,000,000", status: "Signed", date: "2026-04-25", fund: "Nexus Growth Equity" },
  { id: "6", name: "Alice Wong", email: "alice@wong.net", amount: "$150,000", status: "Signed", date: "2026-04-25", fund: "Nexus Opportunity IV" },
  { id: "7", name: "Julian Vance", email: "jvance@vance-holdings.com", amount: "$200,000", status: "Pending Signature", date: "2026-04-24", fund: "Nexus Opportunity IV" },
  { id: "8", name: "Sophia Martinez", email: "sophia@smartinez.dev", amount: "$75,000", status: "Signed", date: "2026-04-24", fund: "Nexus Growth Equity" },
];

export default function DataManagement() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    
    // Simulate data processing delay
    setTimeout(() => {
      // Mock Excel Download
      const csvContent = "data:text/csv;charset=utf-8," 
        + "ID,Name,Email,Amount,Status,Date,Fund\n"
        + submissions.map(s => `${s.id},${s.name},${s.email},${s.amount},${s.status},${s.date},${s.fund}`).join("\n");
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "nexus_investor_data_2026.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsExporting(false);
    }, 1200);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Investor Submissions</h1>
            <p className="text-slate-500 font-medium">Manage and export subscription data for all funds.</p>
          </div>

          <div className="flex items-center gap-3">
            <PremiumButton 
              variant="outline" 
              className="gap-2"
              onClick={handleExport}
              isLoading={isExporting}
            >
              <Download className="w-4 h-4" /> Export to Excel
            </PremiumButton>
            <PremiumButton variant="primary" className="gap-2">
              <Filter className="w-4 h-4" /> Filter Data
            </PremiumButton>
          </div>
        </header>

        <PremiumCard className="p-0 overflow-hidden border-slate-200">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
            <div className="relative group max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search by name, email or fund..."
                className="pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all w-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Displaying 1-8 of 1,284</span>
              <PremiumButton variant="outline" size="sm" className="w-9 h-9 p-0"><ChevronLeft className="w-4 h-4" /></PremiumButton>
              <PremiumButton variant="outline" size="sm" className="w-9 h-9 p-0"><ChevronRight className="w-4 h-4" /></PremiumButton>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Investor</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Investment</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fund Offering</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {submissions.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                          {row.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 leading-none mb-1">{row.name}</p>
                          <p className="text-xs text-slate-500">{row.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-bold text-slate-900">{row.amount}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-medium text-slate-600">{row.fund}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide",
                        row.status === "Signed" ? "bg-green-50 text-green-600" : 
                        row.status === "Pending Signature" ? "bg-amber-50 text-amber-600" : 
                        "bg-slate-100 text-slate-500"
                      )}>
                        {row.status === "Signed" ? <CheckCircle2 className="w-3 h-3" /> : 
                         row.status === "Pending Signature" ? <Clock className="w-3 h-3" /> : 
                         <AlertCircle className="w-3 h-3" />}
                        {row.status}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-medium text-slate-500">{row.date}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <PremiumButton variant="ghost" size="sm" className="w-8 h-8 p-0">
                          <ExternalLink className="w-4 h-4 text-slate-400" />
                        </PremiumButton>
                        <PremiumButton variant="ghost" size="sm" className="w-8 h-8 p-0">
                          <MoreHorizontal className="w-4 h-4 text-slate-400" />
                        </PremiumButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PremiumCard>
      </main>
    </div>
  );
}
