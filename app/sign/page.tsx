"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { 
  ArrowLeft, 
  Check, 
  RotateCcw, 
  ShieldCheck, 
  Lock,
  ChevronDown,
  MousePointer2
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignPage() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = "#1e40af";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const handleStart = (e: MouseEvent | TouchEvent) => {
      setIsDrawing(true);
      const rect = canvas.getBoundingClientRect();
      const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = ("touches" in e ? e.touches[0].clientY : e.clientY) - rect.top;
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = ("touches" in e ? e.touches[0].clientY : e.clientY) - rect.top;
      ctx.lineTo(x, y);
      ctx.stroke();
      setHasSigned(true);
    };

    const handleEnd = () => {
      setIsDrawing(false);
    };

    canvas.addEventListener("mousedown", handleStart);
    canvas.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    canvas.addEventListener("touchstart", handleStart);
    canvas.addEventListener("touchmove", handleMove);
    canvas.addEventListener("touchend", handleEnd);

    return () => {
      canvas.removeEventListener("mousedown", handleStart);
      canvas.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      canvas.removeEventListener("touchstart", handleStart);
      canvas.removeEventListener("touchmove", handleMove);
      canvas.removeEventListener("touchend", handleEnd);
    };
  }, [isDrawing]);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSigned(false);
  };

  const handleFinish = () => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push("/success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Dark Mode Sign Header */}
      <header className="bg-slate-950 border-b border-slate-800 py-4 px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <PremiumButton variant="ghost" size="sm" onClick={() => router.back()} className="text-slate-400 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Document
          </PremiumButton>
          <div className="h-6 w-px bg-slate-800" />
          <div className="flex items-center gap-2 text-blue-400">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Secure Signing Session</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-3 h-3 text-slate-500" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">AES-256 Encrypted</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-white mb-2">Sign your agreement</h1>
              <p className="text-slate-400">Use your mouse or touch screen to draw your legal signature below.</p>
            </div>

            <PremiumCard className="p-0 border-slate-800 bg-slate-950 overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.1)]">
              {/* Signature Pad Area */}
              <div className="relative aspect-video w-full bg-[#fcfcfc] cursor-crosshair">
                <canvas 
                  ref={canvasRef}
                  width={800}
                  height={450}
                  className="absolute inset-0 w-full h-full"
                />
                
                {/* Floating Indicators */}
                {!hasSigned && !isDrawing && (
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                      <MousePointer2 className="w-6 h-6 text-blue-500" />
                    </div>
                    <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">Sign Here</span>
                  </motion.div>
                )}

                {/* DocuSign Style Tag */}
                <div className="absolute top-8 left-8">
                  <div className="bg-yellow-400 text-slate-900 px-3 py-1.5 rounded-sm font-black text-[10px] uppercase flex items-center gap-1 shadow-lg">
                    Sign <ChevronDown className="w-3 h-3" />
                  </div>
                </div>

                {/* Guidelines */}
                <div className="absolute bottom-16 left-12 right-12 h-px bg-slate-200" />
              </div>

              {/* Controls */}
              <div className="p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={clearSignature}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
                  >
                    <RotateCcw className="w-4 h-4" /> Clear
                  </button>
                  <div className="h-4 w-px bg-slate-800" />
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest max-w-[200px]">
                    By signing, you agree to be legally bound by the terms of this subscription.
                  </p>
                </div>

                <PremiumButton 
                  disabled={!hasSigned || isProcessing}
                  isLoading={isProcessing}
                  onClick={handleFinish}
                  className="px-10 h-14 rounded-xl shadow-2xl shadow-blue-900/20"
                >
                  Adopt & Sign <Check className="w-5 h-5 ml-2" />
                </PremiumButton>
              </div>
            </PremiumCard>

            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="flex flex-col items-center opacity-40">
                <ShieldCheck className="w-6 h-6 text-slate-400 mb-2" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Identity</span>
              </div>
              <div className="flex flex-col items-center opacity-40">
                <Lock className="w-6 h-6 text-slate-400 mb-2" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Immutable Log</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
