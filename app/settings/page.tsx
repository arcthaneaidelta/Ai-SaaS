"use client";

import { motion } from "framer-motion";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumInput } from "@/components/ui/premium-input";
import Sidebar from "@/components/sidebar";
import { 
  User, 
  Bell, 
  Shield, 
  Palette,
  Save,
  Plus,
  AlertCircle,
  Map as MapIcon,
  Globe,
  Database,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const tabs = [
  { id: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
  { id: "branding", label: "Regional Branding", icon: <Palette className="w-4 h-4" /> },
  { id: "data", label: "Data Hub Config", icon: <Database className="w-4 h-4" /> },
  { id: "notifications", label: "Alerts", icon: <Bell className="w-4 h-4" /> },
  { id: "security", label: "Security", icon: <Shield className="w-4 h-4" /> },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />
      
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
            <Globe className="w-3 h-3" /> System Preferences
          </div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Platform Settings</h1>
          <p className="text-slate-500 font-medium">Manage your regional transit analysis preferences and security.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Settings Tabs */}
          <div className="lg:col-span-1 space-y-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 font-bold text-sm",
                  activeTab === tab.id 
                    ? "bg-white text-blue-600 shadow-lg shadow-blue-100/50 border border-blue-50" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                )}
              >
                <span className={activeTab === tab.id ? "text-blue-600" : "text-slate-400"}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <PremiumCard className="p-8 border-slate-200/60 shadow-sm bg-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-slate-100">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {tabs.find(t => t.id === activeTab)?.label}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Configure your {activeTab.toLowerCase()} parameters for TransitPrime.</p>
                </div>
                <PremiumButton className="gap-2 px-8 rounded-xl h-12 shadow-xl shadow-blue-100">
                  <Save className="w-4 h-4" /> Save Changes
                </PremiumButton>
              </div>

              {activeTab === "profile" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-10 max-w-2xl"
                >
                  <div className="flex items-center gap-8">
                    <div className="w-24 h-24 rounded-3xl bg-blue-50 border-4 border-white shadow-2xl shadow-blue-100 flex items-center justify-center text-blue-600 overflow-hidden relative group">
                      <img 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Transit" 
                        alt="Profile" 
                        className="w-full h-full object-cover rounded-2xl" 
                      />
                      <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <span className="text-[10px] text-white font-bold uppercase tracking-widest">Change</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Dr. Alan Carter</h4>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">Lead Regional Planner • District 4</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <PremiumInput label="Full Name" defaultValue="Dr. Alan Carter" />
                    <PremiumInput label="Employee ID" defaultValue="TX-4092-B" />
                  </div>
                  <PremiumInput label="Professional Email" defaultValue="a.carter@state-transit.gov" />
                  <PremiumInput label="Regional Agency" defaultValue="Statewide Transit Continuity Authority" />
                </motion.div>
              )}

              {activeTab === "branding" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-10 max-w-2xl"
                >
                  <div className="space-y-6">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Theme Accent Color</label>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 shadow-xl shadow-blue-200 cursor-pointer border-4 border-white ring-2 ring-blue-600" />
                      <div className="w-14 h-14 rounded-2xl bg-emerald-600 shadow-xl shadow-emerald-100 cursor-pointer border-4 border-white" />
                      <div className="w-14 h-14 rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-100 cursor-pointer border-4 border-white" />
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 shadow-xl shadow-slate-100 cursor-pointer border-4 border-white" />
                      <button className="w-14 h-14 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-300 hover:text-blue-500 transition-all group">
                        <Plus className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Agency Brandmark</label>
                    <div className="p-12 rounded-[2rem] border-2 border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-4 group hover:border-blue-200 transition-colors">
                      <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-blue-200 group-hover:scale-110 transition-transform">
                        <MapIcon className="w-8 h-8" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-slate-900 mb-1">TransitPrime Default</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SVG Format Recommended</p>
                      </div>
                      <PremiumButton variant="outline" size="sm" className="bg-white rounded-xl h-10 px-6 border-slate-200">
                        Replace Logo
                      </PremiumButton>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "notifications" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {[
                    { title: "New Continuity Gap", desc: "Alert when the AI engine detects a new service discontinuity.", icon: <AlertCircle className="w-4 h-4 text-amber-500" /> },
                    { title: "Dataset Processed", desc: "Notify when a GTFS upload has finished schema validation.", icon: <Database className="w-4 h-4 text-blue-500" /> },
                    { title: "Resilience Score Drop", desc: "Alert when a region's continuity score falls below 75%.", icon: <TrendingUp className="w-4 h-4 text-red-500 rotate-180" /> },
                    { title: "System Intelligence Update", desc: "Notifications about new AI model version deployments.", icon: <Cpu className="w-4 h-4 text-indigo-500" /> },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-6 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-md transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h5>
                          <p className="text-xs text-slate-500 mt-0.5 font-medium">{item.desc}</p>
                        </div>
                      </div>
                      <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer shadow-inner">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "security" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-10 max-w-2xl"
                >
                  <div className="p-8 rounded-[2rem] bg-amber-50 border border-amber-100 flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <Shield className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-amber-900">Enhanced Security Required</h5>
                      <p className="text-sm text-amber-700 mt-1 leading-relaxed font-medium">
                        To protect critical state infrastructure data, Multi-Factor Authentication is required for all regional planning accounts.
                      </p>
                      <PremiumButton variant="primary" size="sm" className="mt-6 bg-amber-600 hover:bg-amber-700 shadow-xl shadow-amber-200/50 h-10 px-6 rounded-xl">
                        Enable MFA Protection
                      </PremiumButton>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <PremiumInput label="Current Password" type="password" />
                    <div className="grid md:grid-cols-2 gap-6">
                      <PremiumInput label="New Security Password" type="password" />
                      <PremiumInput label="Confirm Security Password" type="password" />
                    </div>
                  </div>
                </motion.div>
              )}
            </PremiumCard>
          </div>
        </div>
      </main>
    </div>
  );
}

// Mock TrendingUp for the notifications tab
function TrendingUp({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
