"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Users, GitBranch, MessageSquare, Zap, BarChart3, Settings, Search, Bell, Menu, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarItems = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", href: "/dashboard" },
  { icon: <Users size={20} />, label: "Contacts", href: "/dashboard/contacts" },
  { icon: <GitBranch size={20} />, label: "Pipelines", href: "/dashboard/pipeline" },
  { icon: <MessageSquare size={20} />, label: "AI Assistant", href: "/dashboard/ai-assistant" },
  { icon: <Zap size={20} />, label: "Workflows", href: "/dashboard/workflows" },
  { icon: <BarChart3 size={20} />, label: "Analytics", href: "/dashboard/analytics" },
  { icon: <Settings size={20} />, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 260 : 80 }}
        className="bg-white border-r border-slate-200 flex flex-col relative z-20"
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          {isSidebarOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-bold text-slate-900 tracking-tight"
            >
              Nexus AI
            </motion.span>
          )}
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-4">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <div className={`${isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"}`}>
                  {item.icon}
                </div>
                {isSidebarOpen && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm truncate"
                  >
                    {item.label}
                  </motion.span>
                )}
                {isActive && isSidebarOpen && (
                  <motion.div 
                    layoutId="active-pill"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
           <div className={`flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-100 ${!isSidebarOpen && 'justify-center'}`}>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs flex-shrink-0">
                JD
              </div>
              {isSidebarOpen && (
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-slate-900 truncate">John Doe</p>
                  <p className="text-[10px] text-slate-500 truncate">Enterprise Plan</p>
                </div>
              )}
           </div>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-20 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 shadow-sm z-30"
        >
          <ChevronRight size={14} className={`transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : ''}`} />
        </button>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
             <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search anything..." 
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
             </div>
          </div>

          <div className="flex items-center gap-4">
             <button className="p-2 text-slate-400 hover:text-slate-600 relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
             </button>
             <div className="h-8 w-px bg-slate-200" />
             <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/10">
                <Zap size={14} />
                Ask AI
             </button>
          </div>
        </header>

        {/* Page Area */}
        <div className="flex-1 overflow-y-auto p-8">
           <div className="max-w-7xl mx-auto">
              {children}
           </div>
        </div>
      </main>
    </div>
  );
}
