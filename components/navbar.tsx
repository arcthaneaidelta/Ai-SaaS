"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PremiumButton } from "./ui/premium-button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Map as MapIcon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
            <MapIcon className="w-6 h-6" />
          </div>
          <span className="font-bold text-2xl text-slate-900 tracking-tight">TransitPrime</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "Platform", href: "/dashboard" },
            { name: "Network Map", href: "/map" },
            { name: "Gap Analysis", href: "/gap-analysis" },
            { name: "Pricing", href: "#" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <PremiumButton variant="ghost" size="sm" className="hidden sm:inline-flex font-bold uppercase tracking-wider text-xs">
              Log In
            </PremiumButton>
          </Link>
          <Link href="/dashboard">
            <PremiumButton size="sm" className="px-6 rounded-xl font-bold uppercase tracking-wider text-xs shadow-md shadow-blue-100">
              Launch App
            </PremiumButton>
          </Link>
          
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b border-slate-100 py-6 flex flex-col gap-4"
        >
          {["Platform", "Network Map", "Gap Analysis", "Pricing"].map((item) => (
            <Link
              key={item}
              href="#"
              className="px-6 py-2 text-lg font-semibold text-slate-900 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
