"use client";

import { motion } from "framer-motion";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import Sidebar from "@/components/sidebar";
import { 
  BarChart3, 
  Map as MapIcon, 
  ArrowUpRight, 
  ArrowDownRight, 
  Activity, 
  AlertTriangle, 
  Search,
  Plus,
  Bus,
  Train,
  CheckCircle2,
  Clock,
  Cpu
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const performanceData = [
  { name: "Mon", score: 82 },
  { name: "Tue", score: 85 },
  { name: "Wed", score: 84 },
  { name: "Thu", score: 88 },
  { name: "Fri", score: 91 },
  { name: "Sat", score: 87 },
  { name: "Sun", score: 89 },
];

const stats = [
  { label: "Network Coverage", value: "94.2%", change: "+2.1%", positive: true, icon: <MapIcon className="w-5 h-5" /> },
  { label: "Active Routes", value: "842", change: "+12", positive: true, icon: <Bus className="w-5 h-5" /> },
  { label: "Detected Gaps", value: "24", change: "-4", positive: true, icon: <AlertTriangle className="w-5 h-5 text-amber-500" /> },
  { label: "Continuity Score", value: "88/100", change: "+5", positive: true, icon: <Activity className="w-5 h-5" /> },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />
      
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-2"
            >
              <Activity className="w-3 h-3" /> System Operational
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-slate-900 tracking-tight"
            >
              Statewide Overview
            </motion.h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search routes or regions..."
                className="pl-10 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all w-72 shadow-sm"
              />
            </div>
            <PremiumButton variant="primary" className="gap-2 px-6 rounded-2xl h-12 shadow-lg shadow-blue-100">
              <Plus className="w-4 h-4" /> Import Data
            </PremiumButton>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <PremiumCard className="p-6 flex flex-col justify-between border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 border border-slate-100">
                    {stat.icon}
                  </div>
                  <div className={`flex items-center text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    stat.positive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                  }`}>
                    {stat.positive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                    {stat.change}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</h3>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Performance Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2"
          >
            <PremiumCard className="p-8 h-[450px] border-slate-200/60 shadow-sm">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Continuity Performance</h3>
                  <p className="text-sm text-slate-500 font-medium">Statewide network resilience index (Last 7 Days)</p>
                </div>
                <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                  <button className="px-4 py-1.5 text-xs font-bold text-blue-600 bg-white rounded-lg shadow-sm">Index</button>
                  <button className="px-4 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-600">Raw Data</button>
                </div>
              </div>
              
              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 600 }}
                      dy={15}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 600 }}
                      domain={[0, 100]}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: "16px", 
                        border: "1px solid #e2e8f0", 
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)",
                        padding: "12px"
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#2563eb" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorScore)" 
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </PremiumCard>
          </motion.div>

          {/* AI Insights Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <PremiumCard className="p-8 h-full border-slate-200/60 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Cpu className="w-24 h-24 text-blue-600" />
              </div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">AI Insights</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: <AlertTriangle className="w-4 h-4 text-amber-500" />, 
                    title: "Feeder Gap Detected", 
                    desc: "District 4 is missing a critical 15-min feeder loop to the Central Station.",
                    urgency: "High" 
                  },
                  { 
                    icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />, 
                    title: "Optimal Continuity", 
                    desc: "North-South corridor has achieved 99% continuity compliance.",
                    urgency: "Resolved" 
                  },
                  { 
                    icon: <Clock className="w-4 h-4 text-blue-500" />, 
                    title: "Wait-time Anomaly", 
                    desc: "Simulations suggest increasing Route 12 frequency by 5% will boost score.",
                    urgency: "Medium" 
                  },
                ].map((insight, i) => (
                  <div key={i} className="group p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {insight.icon}
                        <span className="font-bold text-slate-900 text-sm">{insight.title}</span>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        insight.urgency === "High" ? "bg-amber-100 text-amber-700" : 
                        insight.urgency === "Resolved" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"
                      }`}>
                        {insight.urgency}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{insight.desc}</p>
                  </div>
                ))}
              </div>
              
              <PremiumButton variant="outline" className="w-full mt-8 rounded-xl font-bold text-xs uppercase tracking-widest h-12">
                Generate Full Report
              </PremiumButton>
            </PremiumCard>
          </motion.div>
        </div>

        {/* Bottom Section: Active Alerts Table Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <PremiumCard className="p-0 border-slate-200/60 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Recent Network Alerts</h3>
              <PremiumButton variant="ghost" size="sm" className="text-blue-600 font-bold uppercase tracking-wider text-[10px]">
                View All Alerts
              </PremiumButton>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Region</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Issue Type</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Population Impact</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Rec</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { region: "District 4-B", type: "Continuity Gap", impact: "12,400", status: "Critical", rec: "Add Bus Route X4" },
                    { region: "Central Hub", type: "Capacity Strain", impact: "45,000", status: "Warning", rec: "Increase Frequency" },
                    { region: "Eastern Valley", type: "Schedule Drift", impact: "8,200", status: "Monitoring", rec: "Recalibrate GTFS-RT" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-bold text-slate-900 text-sm">{row.region}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-slate-500 text-sm">{row.type}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-slate-900 font-medium text-sm">{row.impact}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          row.status === "Critical" ? "bg-red-50 text-red-600" :
                          row.status === "Warning" ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-blue-500" />
                          <span className="text-xs text-blue-600 font-bold">{row.rec}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </PremiumCard>
        </motion.div>
      </main>
    </div>
  );
}
