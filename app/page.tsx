"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import Link from "next/link";
import { 
  ArrowRight, 
  Map as MapIcon, 
  Activity, 
  ShieldCheck, 
  BarChart3, 
  Globe2, 
  Zap,
  Layers,
  Search,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/navbar";

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen bg-[#f8fafc] selection:bg-blue-100">
      <Navbar />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
        style={{ scaleX: smoothProgress }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <motion.div style={{ opacity, scale, y }} className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-10 tracking-wider uppercase"
            >
              <Zap className="w-3 h-3" />
              <span>Next-Gen Transit Continuity Engine</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]"
            >
              Bridge the Gaps in <span className="text-blue-600">Transit Mobility.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Analyze statewide transit networks with AI-powered precision. 
              Identify service gaps, optimize continuity, and ensure every citizen has a path to mobility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/dashboard">
                <PremiumButton size="lg" className="px-8 py-7 text-lg rounded-2xl gap-2 shadow-xl shadow-blue-200">
                  Launch Platform <ArrowRight className="w-5 h-5" />
                </PremiumButton>
              </Link>
              <Link href="/map">
                <PremiumButton variant="outline" size="lg" className="px-8 py-7 text-lg rounded-2xl bg-white">
                  Explore Network Map
                </PremiumButton>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Dynamic Background Grid */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-50/50 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-indigo-50/50 rounded-full blur-[120px]" 
          />
        </div>

        {/* Hero Interactive Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="container mx-auto px-6 mt-24"
        >
          <div className="relative max-w-6xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
            <div className="relative rounded-[2.5rem] border border-white bg-white/40 backdrop-blur-xl p-4 shadow-2xl overflow-hidden">
              <div className="bg-slate-900 rounded-[1.8rem] overflow-hidden aspect-[16/9] relative border border-slate-800">
                {/* Mock UI Overlay */}
                <div className="absolute inset-0 flex flex-col">
                  {/* Top Bar */}
                  <div className="h-14 border-b border-white/5 flex items-center px-6 gap-4 bg-slate-900/50 backdrop-blur-sm">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="h-6 w-px bg-white/10 mx-2" />
                    <div className="bg-white/5 px-3 py-1 rounded-md text-[10px] text-slate-400 font-mono flex items-center gap-2">
                      <Search className="w-3 h-3" />
                      transit-prime.io/analysis/network-state
                    </div>
                  </div>
                  
                  {/* Dashboard Mockup Content */}
                  <div className="flex-1 p-8 grid grid-cols-12 gap-8">
                    <div className="col-span-8 flex flex-col gap-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-6 w-48 bg-white/10 rounded-lg mb-2" />
                          <div className="h-3 w-32 bg-white/5 rounded-md" />
                        </div>
                        <div className="flex gap-2">
                          <div className="h-8 w-8 rounded-lg bg-blue-600/20 border border-blue-500/30" />
                          <div className="h-8 w-24 rounded-lg bg-white/5 border border-white/10" />
                        </div>
                      </div>
                      
                      {/* Map Simulation */}
                      <div className="flex-1 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                        </div>
                        {/* Mock Routes */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                          <motion.path
                            d="M 100 100 Q 300 50 500 200 T 800 150"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                          />
                          <motion.path
                            d="M 50 250 Q 250 300 450 150 T 750 250"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.5, delay: 0.5 }}
                          />
                          <circle cx="500" cy="200" r="8" className="fill-amber-500 animate-pulse" />
                        </svg>
                        
                        {/* Overlay Card */}
                        <div className="absolute bottom-6 left-6 p-4 bg-slate-900/90 border border-white/10 rounded-xl backdrop-blur-md shadow-2xl">
                          <div className="flex items-center gap-3 mb-2">
                            <Activity className="w-4 h-4 text-amber-500" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Gap Detected</span>
                          </div>
                          <div className="text-xs text-slate-400">Sector 4-B: Missing feeder route</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-4 flex flex-col gap-6">
                      <div className="h-40 bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
                        <div className="h-2 w-12 bg-blue-500 rounded-full" />
                        <div>
                          <div className="h-8 w-24 bg-white/20 rounded-lg mb-2" />
                          <div className="h-3 w-16 bg-white/5 rounded-md" />
                        </div>
                      </div>
                      <div className="h-40 bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
                        <div className="h-2 w-12 bg-emerald-500 rounded-full" />
                        <div>
                          <div className="h-8 w-24 bg-white/20 rounded-lg mb-2" />
                          <div className="h-3 w-16 bg-white/5 rounded-md" />
                        </div>
                      </div>
                      <div className="flex-1 bg-white/5 rounded-2xl border border-white/10 p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="h-2 w-2 rounded-full bg-blue-500" />
                          <div className="h-2 w-16 bg-white/10 rounded-full" />
                        </div>
                        <div className="space-y-3">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="h-2 w-full bg-white/5 rounded-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Narrative Section: Problems & Solutions */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Statewide transit continuity shouldn&apos;t be a <span className="text-blue-600">guessing game.</span>
              </h2>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                Fragmented datasets and disconnected systems create gaps in service that leave millions stranded. 
                TransitPrime unifies your data into a single, intelligent continuity layer.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Real-time Network Analysis", desc: "Instantly visualize every route across the state." },
                  { title: "AI Gap Detection", desc: "Predict and identify areas with insufficient coverage." },
                  { title: "Standardized Data Ingestion", desc: "Seamlessly process GTFS, GTFS-RT, and custom formats." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-slate-50 rounded-[3rem] border border-slate-100 p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Decorative orbital rings */}
                  <div className="absolute inset-0 border border-blue-100 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-8 border border-slate-100 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-16 border border-blue-50 rounded-full animate-[spin_10s_linear_infinite]" />
                  
                  {/* Central Node */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100 relative z-10">
                      <Globe2 className="w-12 h-12 text-blue-600" />
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-50 flex items-center justify-center"
                  >
                    <Activity className="w-6 h-6 text-emerald-500" />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 10, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-50 flex items-center justify-center"
                  >
                    <Layers className="w-6 h-6 text-blue-500" />
                  </motion.div>
                  <motion.div 
                    animate={{ x: [0, 10, 0] }} 
                    transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                    className="absolute top-1/2 right-0 w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-50 flex items-center justify-center"
                  >
                    <ShieldCheck className="w-6 h-6 text-amber-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">The Modern Standard for Transit Analysis</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Enterprise-grade tools designed for planners, policymakers, and transit operators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
                title: "Advanced Analytics",
                description: "Deep-dive into coverage density, route performance, and population access metrics."
              },
              {
                icon: <MapIcon className="w-6 h-6 text-blue-600" />,
                title: "Interactive Mapping",
                description: "State-of-the-art GIS visualization with dynamic layers and real-time transit telemetry."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
                title: "Continuity Audits",
                description: "Automated auditing of transit network resilience and backup service planning."
              }
            ].map((feature, i) => (
              <PremiumCard key={i} className="bg-white group p-8 rounded-[2rem] border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-base">{feature.description}</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[3rem] bg-slate-900 overflow-hidden p-12 md:p-24 text-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#2563eb1a,transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Ready to optimize your state&apos;s transit?</h2>
              <p className="text-xl text-slate-400 mb-12">
                Join the leading states using TransitPrime to build a more connected future.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/dashboard">
                  <PremiumButton size="lg" className="px-12 py-8 text-xl rounded-2xl h-auto">
                    Get Started Now
                  </PremiumButton>
                </Link>
                <Link href="/contact" className="text-white font-semibold hover:text-blue-400 transition-colors">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-200 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-100">
                <MapIcon className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl text-slate-900 tracking-tight">TransitPrime</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10 text-sm font-semibold text-slate-500">
              <Link href="/product" className="hover:text-blue-600 transition-colors">Product</Link>
              <Link href="/solutions" className="hover:text-blue-600 transition-colors">Solutions</Link>
              <Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
              <Link href="/docs" className="hover:text-blue-600 transition-colors">Documentation</Link>
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
            </div>
            
            <div className="text-slate-400 text-sm">
              © 2026 TransitPrime Systems. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
