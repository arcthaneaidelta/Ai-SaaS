"use client";

import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Map, 
  Activity, 
  Database, 
  FileBarChart, 
  Settings, 
  LogOut, 
  Bell,
  HelpCircle,
  Cpu
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const menuItems = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: "Overview", href: "/dashboard" },
  { icon: <Map className="w-5 h-5" />, label: "Network Map", href: "/map" },
  { icon: <Activity className="w-5 h-5" />, label: "Gap Analysis", href: "/gap-analysis" },
  { icon: <Database className="w-5 h-5" />, label: "Data Hub", href: "/data-upload" },
  { icon: <FileBarChart className="w-5 h-5" />, label: "Reports", href: "/reports" },
  { icon: <Cpu className="w-5 h-5" />, label: "AI Insights", href: "/ai-insights" },
];

const secondaryItems = [
  { icon: <Bell className="w-5 h-5" />, label: "Notifications", href: "#" },
  { icon: <Settings className="w-5 h-5" />, label: "Settings", href: "/settings" },
  { icon: <HelpCircle className="w-5 h-5" />, label: "Support", href: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-72 flex-col bg-white border-r border-slate-200/60 p-6 sticky top-0 h-screen">
      <Link href="/" className="flex items-center gap-3 px-2 mb-12 group">
        <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
          <Map className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl text-slate-900 leading-tight tracking-tight">TransitPrime</span>
          <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase leading-tight">Statewide Engine</span>
        </div>
      </Link>

      <nav className="flex-1 space-y-1.5">
        <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase px-3 mb-4">
          Analysis Platform
        </div>
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
              pathname === item.href 
                ? "text-blue-600 bg-blue-50/80 font-bold" 
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
            )}
          >
            {pathname === item.href && (
              <motion.div 
                layoutId="active-nav"
                className="absolute left-0 w-1 h-6 bg-blue-600 rounded-r-full"
              />
            )}
            <span className={cn(
              "transition-colors",
              pathname === item.href ? "text-blue-600" : "group-hover:text-blue-500"
            )}>
              {item.icon}
            </span>
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto space-y-1.5">
        <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase px-3 mb-4">
          Configuration
        </div>
        {secondaryItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
              pathname === item.href 
                ? "text-blue-600 bg-blue-50/80 font-bold" 
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
            )}
          >
            <span className={pathname === item.href ? "text-blue-600" : "text-slate-400"}>
              {item.icon}
            </span>
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
        
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200 mt-4 group">
          <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-wider text-[10px]">Sign Out</span>
        </button>

        <div className="mt-8 pt-8 border-t border-slate-100 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 p-0.5 shadow-sm overflow-hidden">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Transit" 
                alt="User" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900">Dr. Alan Carter</span>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-tight">Regional Planner</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
