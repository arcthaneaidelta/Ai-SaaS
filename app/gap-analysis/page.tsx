"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { 
  Search, 
  Filter, 
  AlertTriangle, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  ArrowRight, 
  Plus,
  RefreshCw,
  Clock,
  Users,
  ChevronRight
} from "lucide-react";

export default function GapAnalysisPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const startScan = () => {
    setIsScanning(true);
    setScanProgress(0);
  };

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsScanning(false), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isScanning]);

  const gaps = [
    { 
      id: "G-1024", 
      region: "South Corridor", 
      type: "Accessibility Gap", 
      severity: "High", 
      impact: "15,000+ citizens", 
      aiRec: "Extend Route 4 by 2.5 miles",
      status: "Detected"
    },
    { 
      id: "G-1025", 
      region: "Industrial Zone", 
      type: "Frequency Gap", 
      severity: "Medium", 
      impact: "8,500+ workers", 
      aiRec: "Add 15-min feeder loop during peak",
      status: "Analyzing"
    },
    { 
      id: "G-1026", 
      region: "East Valley", 
      type: "Coverage Discontinuity", 
      severity: "Critical", 
      impact: "22,000 citizens", 
      aiRec: "Implement on-demand micro-transit",
      status: "Detected"
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />
      
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
              <Cpu className="w-3 h-3" /> AI Analysis Engine v4.2
            </div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Gap Analysis</h1>
          </div>

          <div className="flex items-center gap-3">
            <PremiumButton 
              onClick={startScan}
              disabled={isScanning}
              className="gap-2 px-6 rounded-2xl h-12 shadow-lg shadow-blue-100 min-w-[200px]"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Scanning Network...
                </>
              ) : (
                <>
                  <Activity className="w-4 h-4" /> Run New Scan
                </>
              )}
            </PremiumButton>
          </div>
        </header>

        {/* Scanning Overlay */}
        <AnimatePresence>
          {isScanning && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-10"
            >
              <PremiumCard className="p-8 border-blue-100 bg-blue-50/30 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${scanProgress}%` }}
                    className="h-full bg-blue-600"
                  />
                </div>
                
                <div className="flex items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100 border border-blue-50 relative">
                      <Cpu className="w-8 h-8 text-blue-600 animate-pulse" />
                      <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl animate-ping opacity-20" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Statewide Network Audit in Progress</h3>
                      <p className="text-sm text-slate-500 font-medium">Scanning 842 routes across 12 districts for continuity breaks...</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600 tabular-nums">{scanProgress}%</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Verification Phase</div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Gaps Table */}
          <div className="lg:col-span-8">
            <PremiumCard className="p-0 border-slate-200/60 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-slate-900">Detected Gaps</h3>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">12 TOTAL</span>
                </div>
                <div className="flex gap-2">
                  <PremiumButton variant="outline" size="sm" className="h-9 px-3 rounded-lg border-slate-200">
                    <Filter className="w-3 h-3 mr-2" /> Severity
                  </PremiumButton>
                  <PremiumButton variant="outline" size="sm" className="h-9 px-3 rounded-lg border-slate-200">
                    <Search className="w-3 h-3" />
                  </PremiumButton>
                </div>
              </div>
              
              <div className="divide-y divide-slate-100">
                {gaps.map((gap, i) => (
                  <motion.div 
                    key={gap.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 hover:bg-slate-50/50 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          gap.severity === "Critical" ? "bg-red-50 text-red-600" :
                          gap.severity === "High" ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                        }`}>
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-slate-900">{gap.region}</span>
                            <span className="text-[10px] text-slate-400 font-mono">#{gap.id}</span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" /> {gap.impact}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span>{gap.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          gap.severity === "Critical" ? "bg-red-100 text-red-700" :
                          gap.severity === "High" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"
                        }`}>
                          {gap.severity} Severity
                        </span>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                          <CheckCircle2 className="w-3 h-3" /> {gap.status}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pl-14">
                      <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:border-blue-200 group-hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                              <Cpu className="w-3 h-3" />
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.15em] mb-0.5">AI Recommendation</p>
                              <p className="text-sm font-bold text-slate-900">{gap.aiRec}</p>
                            </div>
                          </div>
                          <PremiumButton variant="ghost" size="sm" className="text-blue-600 h-8 gap-2 font-bold uppercase tracking-wider text-[10px]">
                            Implement <ArrowRight className="w-3 h-3" />
                          </PremiumButton>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-center">
                <PremiumButton variant="ghost" className="text-slate-500 font-bold text-xs uppercase tracking-widest gap-2">
                  View Analysis History <Plus className="w-4 h-4" />
                </PremiumButton>
              </div>
            </PremiumCard>
          </div>

          {/* Sidebar Stats & Info */}
          <div className="lg:col-span-4 space-y-6">
            <PremiumCard className="p-8 border-slate-200/60 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-8 tracking-tight">Summary Metrics</h3>
              <div className="space-y-6">
                {[
                  { label: "Statewide Score", value: "84/100", icon: <Activity className="w-5 h-5 text-blue-600" /> },
                  { label: "Impacted Citizens", value: "48,200", icon: <Users className="w-5 h-5 text-blue-600" /> },
                  { label: "Avg. Wait Increase", value: "12.4 min", icon: <Clock className="w-5 h-5 text-blue-600" /> },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                        {stat.icon}
                      </div>
                      <span className="text-sm font-bold text-slate-500">{stat.label}</span>
                    </div>
                    <span className="text-lg font-bold text-slate-900 tracking-tight">{stat.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 rounded-2xl bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Cpu className="w-16 h-16" />
                </div>
                <h4 className="font-bold mb-2">Continuity Tip</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Increasing connectivity in the South Corridor could boost your statewide accessibility score by up to 12 points.
                </p>
                <PremiumButton size="sm" className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-[10px] uppercase tracking-wider h-10 rounded-xl">
                  Analyze Scenarios
                </PremiumButton>
              </div>
            </PremiumCard>

            <PremiumCard className="p-8 border-slate-200/60 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Report Sharing</h3>
              <div className="flex flex-col gap-3">
                <PremiumButton variant="outline" className="w-full h-12 justify-between rounded-xl px-4 border-slate-200 group">
                  <span className="text-xs font-bold text-slate-600">Download PDF Audit</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </PremiumButton>
                <PremiumButton variant="outline" className="w-full h-12 justify-between rounded-xl px-4 border-slate-200 group">
                  <span className="text-xs font-bold text-slate-600">Export GTFS-Gap-Set</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </PremiumButton>
              </div>
            </PremiumCard>
          </div>
        </div>
      </main>
    </div>
  );
}
