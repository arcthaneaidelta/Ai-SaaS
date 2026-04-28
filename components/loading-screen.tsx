"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Bus, Map, Shield, Activity, Database, Cpu } from "lucide-react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  
  const loadingSteps = [
    { text: "Initializing Transit Intelligence...", icon: <Bus className="w-5 h-5" /> },
    { text: "Analyzing Statewide Connectivity...", icon: <Map className="w-5 h-5" /> },
    { text: "Mapping Coverage Gaps...", icon: <Shield className="w-5 h-5" /> },
    { text: "Processing GTFS Datasets...", icon: <Database className="w-5 h-5" /> },
    { text: "Optimizing Transit Continuity...", icon: <Activity className="w-5 h-5" /> },
    { text: "Generating AI Insights...", icon: <Cpu className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        const diff = Math.random() * 5;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingSteps.length);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6"
    >
      <div className="max-w-md w-full text-center">
        {/* Animated Brand Mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 relative"
        >
          <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center shadow-2xl shadow-blue-200 relative z-10">
            <motion.div
              animate={{ 
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 border-2 border-white/20 rounded-xl"
            />
            <Map className="w-10 h-10 text-white" />
          </div>
          
          {/* Pulsing Aura */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-100/50 rounded-full -z-10 blur-xl"
          />
        </motion.div>

        {/* Dynamic Status Text */}
        <div className="h-10 overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
              className="flex items-center justify-center gap-3 text-slate-700"
            >
              <span className="text-blue-600">{loadingSteps[textIndex].icon}</span>
              <p className="font-semibold tracking-tight">
                {loadingSteps[textIndex].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Advanced Progress Indicator */}
        <div className="space-y-4">
          <div className="relative w-full h-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 h-full bg-blue-600 rounded-full shadow-[0_0_12px_rgba(37,99,235,0.5)]"
            />
          </div>
          
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Engine Active
            </motion.span>
            <span className="tabular-nums text-slate-600">{Math.round(progress)}% Verified</span>
          </div>
        </div>
      </div>

      {/* Decorative Background Mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
      </div>
    </motion.div>
  );
}
