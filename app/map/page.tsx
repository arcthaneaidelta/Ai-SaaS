"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { 
  Map as MapIcon, 
  Layers, 
  Maximize2, 
  Minimize2, 
  Search, 
  Filter, 
  AlertTriangle, 
  CheckCircle2, 
  Navigation2,
  Info,
  Activity
} from "lucide-react";

export default function MapPage() {
  const [showGaps, setShowGaps] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  const routes = [
    { id: "R1", name: "Metro Line A", color: "#3b82f6", d: "M 100 200 Q 250 150 400 250 T 700 200", status: "Active" },
    { id: "R2", name: "Coastal Express", color: "#10b981", d: "M 50 400 Q 200 350 350 450 T 650 400", status: "Active" },
    { id: "R3", name: "Valley Loop", color: "#8b5cf6", d: "M 300 100 Q 450 150 500 300 T 400 500", status: "Maintenance" },
    { id: "R4", name: "North Shuttle", color: "#f59e0b", d: "M 100 50 L 700 100", status: "Active" },
  ];

  const gaps = [
    { id: "G1", x: 450, y: 320, title: "District 7 Gap", impact: "High" },
    { id: "G2", x: 200, y: 150, title: "Westside Discontinuity", impact: "Medium" },
    { id: "G3", x: 600, y: 450, title: "Industrial Feeder Gap", impact: "High" },
  ];

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 relative flex flex-col">
        {/* Map Header Overlay */}
        <div className="absolute top-8 left-8 right-8 z-20 flex justify-between items-start pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pointer-events-auto"
          >
            <PremiumCard className="p-4 flex items-center gap-4 bg-white/80 backdrop-blur-xl border-slate-200/50 shadow-2xl">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <MapIcon className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900 tracking-tight">Interactive Network Map</h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Statewide Analysis View</p>
              </div>
            </PremiumCard>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-3 pointer-events-auto"
          >
            <div className="flex gap-2">
              <PremiumButton variant="outline" size="sm" className="bg-white/80 backdrop-blur-xl rounded-xl h-10 px-4">
                <Layers className="w-4 h-4 mr-2" /> Layers
              </PremiumButton>
              <PremiumButton variant="outline" size="sm" className="bg-white/80 backdrop-blur-xl rounded-xl h-10 px-4">
                <Filter className="w-4 h-4 mr-2" /> Filters
              </PremiumButton>
            </div>
            
            <PremiumCard className="p-2 bg-white/80 backdrop-blur-xl border-slate-200/50 shadow-xl flex flex-col gap-1">
              <button 
                onClick={() => setShowGaps(!showGaps)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-xs font-bold ${
                  showGaps ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span>Gap Detection</span>
                <div className={`w-2 h-2 rounded-full ${showGaps ? "bg-white animate-pulse" : "bg-slate-300"}`} />
              </button>
              <button className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-bold">
                <span>Terrain View</span>
                <div className="w-2 h-2 rounded-full bg-slate-300" />
              </button>
            </PremiumCard>
          </motion.div>
        </div>

        {/* The Map Simulation */}
        <div className="flex-1 bg-slate-100 relative overflow-hidden">
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
          
          <motion.svg 
            viewBox="0 0 800 600" 
            className="w-full h-full preserve-3d"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Mock Landmass Silhouette */}
            <path 
              d="M 100 100 Q 400 50 700 100 Q 750 300 600 500 Q 400 550 100 500 Z" 
              fill="#ffffff" 
              className="drop-shadow-sm" 
            />
            
            {/* Routes */}
            {routes.map((route) => (
              <g key={route.id} className="cursor-pointer group">
                <motion.path
                  d={route.d}
                  fill="none"
                  stroke={route.color}
                  strokeWidth={selectedRoute === route.id ? 8 : 4}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  onClick={() => setSelectedRoute(route.id)}
                  className="transition-all duration-300 opacity-80 hover:opacity-100"
                />
                {/* Moving indicator for transit vehicles */}
                <motion.circle r="4" fill={route.color}>
                  <animateMotion 
                    dur="10s" 
                    repeatCount="indefinite" 
                    path={route.d} 
                  />
                </motion.circle>
              </g>
            ))}

            {/* Gaps Layer */}
            <AnimatePresence>
              {showGaps && gaps.map((gap) => (
                <motion.g
                  key={gap.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="cursor-pointer"
                >
                  <circle 
                    cx={gap.x} 
                    cy={gap.y} 
                    r="20" 
                    fill="rgba(245, 158, 11, 0.1)" 
                    className="animate-ping" 
                  />
                  <circle 
                    cx={gap.x} 
                    cy={gap.y} 
                    r="12" 
                    fill="rgba(245, 158, 11, 0.2)" 
                  />
                  <motion.path
                    d={`M ${gap.x} ${gap.y - 15} L ${gap.x - 10} ${gap.y + 5} L ${gap.x + 10} ${gap.y + 5} Z`}
                    fill="#f59e0b"
                  />
                </motion.g>
              ))}
            </AnimatePresence>
          </motion.svg>

          {/* Map Controls Floating */}
          <div className="absolute bottom-8 left-8 flex flex-col gap-2">
            <PremiumButton variant="outline" size="sm" className="bg-white shadow-lg w-10 h-10 p-0 rounded-xl">
              <Maximize2 className="w-4 h-4" />
            </PremiumButton>
            <PremiumButton variant="outline" size="sm" className="bg-white shadow-lg w-10 h-10 p-0 rounded-xl">
              <Minimize2 className="w-4 h-4" />
            </PremiumButton>
          </div>

          {/* Network Explorer Side Panel Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-32 right-8 bottom-8 w-80 z-20"
          >
            <PremiumCard className="h-full bg-white/90 backdrop-blur-xl border-slate-200/60 shadow-2xl flex flex-col overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Navigation2 className="w-4 h-4 text-blue-600" /> Network Explorer
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search route ID..."
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
                {routes.map((route) => (
                  <div 
                    key={route.id}
                    onClick={() => setSelectedRoute(route.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      selectedRoute === route.id 
                        ? "bg-blue-50 border-blue-200 shadow-sm" 
                        : "bg-white border-slate-100 hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: route.color }} />
                        <span className="font-bold text-slate-900 text-sm">{route.name}</span>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        route.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                      }`}>
                        {route.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] text-slate-500 font-medium">
                      <div className="flex items-center gap-1">
                        <Activity className="w-3 h-3" /> 98% Perf
                      </div>
                      <div className="flex items-center gap-1">
                        <Info className="w-3 h-3" /> 12 Stops
                      </div>
                    </div>
                  </div>
                ))}

                {showGaps && gaps.map((gap) => (
                  <div 
                    key={gap.id}
                    className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 border-dashed"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span className="font-bold text-amber-900 text-sm">{gap.title}</span>
                    </div>
                    <p className="text-[10px] text-amber-700/70 mb-3 font-medium">Predicted continuity break detected via AI simulation.</p>
                    <PremiumButton size="sm" className="w-full bg-amber-600 hover:bg-amber-700 text-[10px] h-8 rounded-lg uppercase tracking-wider font-bold">
                      Resolve Gap
                    </PremiumButton>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Network Health</span>
                  <span className="text-xs font-bold text-emerald-600">Stable</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "88%" }}
                    className="h-full bg-emerald-500 rounded-full"
                  />
                </div>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
