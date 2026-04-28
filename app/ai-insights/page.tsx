"use client";

import { motion } from "framer-motion";
import Sidebar from "@/components/sidebar";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { 
  Cpu, 
  Lightbulb, 
  TrendingUp, 
  Target, 
  Sparkles, 
  ArrowRight,
  BarChart3,
  Globe,
  Zap,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";

const impactData = [
  { name: "Connectivity", current: 65, projected: 88, color: "#3b82f6" },
  { name: "Accessibility", current: 42, projected: 75, color: "#10b981" },
  { name: "Frequency", current: 58, projected: 82, color: "#8b5cf6" },
  { name: "Reliability", current: 71, projected: 90, color: "#f59e0b" },
];

export default function AIInsightsPage() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />
      
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
              <Sparkles className="w-3 h-3" /> Predictive Intelligence Layer
            </div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">AI Insights & Projections</h1>
          </div>
          
          <div className="flex gap-3">
            <PremiumButton variant="outline" className="rounded-xl px-6 bg-white border-slate-200">
              Refresh Model
            </PremiumButton>
            <PremiumButton className="rounded-xl px-6 shadow-lg shadow-blue-100">
              Export Forecast
            </PremiumButton>
          </div>
        </header>

        {/* AI Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <PremiumCard className="p-8 bg-slate-900 text-white border-none overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Cpu className="w-48 h-48" />
            </div>
            <div className="relative z-10 grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Executive AI Summary</h2>
                </div>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  The network is currently operating at <span className="text-white font-bold text-xl">82% continuity efficiency</span>. 
                  Our predictive models suggest that implementing the "South-East Corridor Extension" would reduce statewide service gaps by <span className="text-emerald-400 font-bold text-xl">18.4%</span> within the first quarter.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-bold tracking-tight">Target: 95% Coverage</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-bold tracking-tight">Proj. Growth: +12%</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
                  <div className="text-5xl font-bold mb-2">A+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Resilience Rating</div>
                  <div className="mt-4 flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className={`h-1 w-6 rounded-full ${i <= 4 ? "bg-blue-500" : "bg-white/10"}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </PremiumCard>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projected Impact Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2"
          >
            <PremiumCard className="p-8 h-[500px] border-slate-200/60 shadow-sm">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Projected Impact Analysis</h3>
                  <p className="text-sm text-slate-500 font-medium">Predicted KPI improvements after AI recommendation implementation</p>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <div className="w-2.5 h-2.5 rounded-sm bg-slate-200" /> Current
                  </div>
                  <div className="flex items-center gap-1.5 text-blue-600">
                    <div className="w-2.5 h-2.5 rounded-sm bg-blue-600" /> Projected
                  </div>
                </div>
              </div>
              
              <div className="w-full h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={impactData} barGap={12}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 600 }}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 600 }}
                      domain={[0, 100]}
                    />
                    <Tooltip 
                      cursor={{ fill: "#f8fafc" }}
                      contentStyle={{ 
                        borderRadius: "16px", 
                        border: "1px solid #e2e8f0", 
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)",
                        padding: "16px"
                      }} 
                    />
                    <Bar dataKey="current" fill="#e2e8f0" radius={[6, 6, 0, 0]} barSize={40} />
                    <Bar dataKey="projected" radius={[6, 6, 0, 0]} barSize={40}>
                      {impactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </PremiumCard>
          </motion.div>

          {/* Strategic Recommendations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <PremiumCard className="p-8 h-full border-slate-200/60 shadow-sm bg-white overflow-y-auto no-scrollbar">
              <h3 className="text-xl font-bold text-slate-900 mb-8 tracking-tight flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" /> Priority Actions
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Feeder Loop Optm.",
                    region: "West District",
                    impact: "Critical",
                    desc: "Deploy AI-routed micro-shuttles to bridge the 2-mile last-mile gap.",
                    roi: "+14.2%"
                  },
                  {
                    title: "Schedule Sync",
                    region: "Central Hub",
                    impact: "High",
                    desc: "Recalibrate transfer windows to reduce average wait time by 8.5 minutes.",
                    roi: "+9.1%"
                  },
                  {
                    title: "Demand Response",
                    region: "Rural North",
                    impact: "Medium",
                    desc: "Transition low-occupancy routes to on-demand digital hailed service.",
                    roi: "+22.5%"
                  },
                  {
                    title: "Infrastructure Hub",
                    region: "Southport",
                    impact: "High",
                    desc: "Establish a multimodal interchange to unify bus and rail schedules.",
                    roi: "+6.4%"
                  }
                ].map((rec, i) => (
                  <div key={i} className="group p-5 rounded-[1.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${
                        rec.impact === "Critical" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                      }`}>
                        {rec.impact} Impact
                      </span>
                      <span className="text-xs font-bold text-emerald-600">{rec.roi} ROI</span>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{rec.title}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-3">{rec.region}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{rec.desc}</p>
                    <PremiumButton variant="ghost" size="sm" className="w-full h-9 rounded-xl text-blue-600 font-bold uppercase tracking-wider text-[10px] group-hover:bg-blue-50">
                      Run Scenario <ArrowRight className="w-3 h-3 ml-2" />
                    </PremiumButton>
                  </div>
                ))}
              </div>
            </PremiumCard>
          </motion.div>
        </div>

        {/* Global Network Anomalies */}
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {[
            { label: "Detected Anomalies", value: "3", icon: <AlertTriangle className="text-amber-500" />, sub: "Require Immediate Action" },
            { label: "Operational Efficiency", value: "92%", icon: <Zap className="text-blue-500" />, sub: "+4% from last month" },
            { label: "Citizen Coverage", value: "94.2%", icon: <Globe className="text-emerald-500" />, sub: "Target: 98%" },
            { label: "AI Confidence", value: "99.8%", icon: <CheckCircle2 className="text-blue-600" />, sub: "Verified Model v4.2" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
            >
              <PremiumCard className="p-6 border-slate-200/60 shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-[10px] text-slate-400 font-medium italic">{stat.sub}</p>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
