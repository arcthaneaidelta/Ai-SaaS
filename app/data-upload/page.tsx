"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Sidebar from "@/components/sidebar";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { 
  Upload, 
  File, 
  CheckCircle2, 
  AlertCircle, 
  Database, 
  CloudUpload, 
  X,
  FileCode,
  FileSpreadsheet,
  Globe,
  Loader2
} from "lucide-react";

export default function DataUploadPage() {
  const [files, setFiles] = useState<{ name: string; size: string; status: "pending" | "processing" | "complete" }[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const simulateUpload = (fileName: string, fileSize: string) => {
    const newFile = { name: fileName, size: fileSize, status: "processing" as const };
    setFiles(prev => [...prev, newFile]);

    setTimeout(() => {
      setFiles(prev => 
        prev.map(f => f.name === fileName ? { ...f, status: "complete" as const } : f)
      );
    }, 3000);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    droppedFiles.forEach(file => {
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(1) + " MB";
      simulateUpload(file.name, sizeInMB);
    });
  }, []);

  const removeFile = (name: string) => {
    setFiles(prev => prev.filter(f => f.name !== name));
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />
      
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
              <Database className="w-3 h-3" /> Data Management Center
            </div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Data Ingestion</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Jobs</p>
              <p className="text-lg font-bold text-slate-900">{files.filter(f => f.status === "processing").length} Processing</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <PremiumButton variant="outline" className="rounded-xl px-6 border-slate-200 bg-white">
              View History
            </PremiumButton>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Upload Area */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              className={`relative rounded-[2.5rem] border-2 border-dashed transition-all duration-300 p-12 flex flex-col items-center justify-center min-h-[400px] text-center ${
                isDragging 
                  ? "border-blue-500 bg-blue-50/50 scale-[0.99] shadow-inner" 
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-8 relative group-hover:scale-110 transition-transform duration-300">
                <CloudUpload className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                Drop your transit datasets here
              </h3>
              <p className="text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
                Support for GTFS (Static & Real-time), CSV, and JSON network configurations. 
                Maximum file size: 500MB.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <PremiumButton className="px-8 h-12 rounded-xl shadow-xl shadow-blue-100">
                  Select Files to Upload
                </PremiumButton>
                <PremiumButton variant="outline" className="px-8 h-12 rounded-xl bg-white border-slate-200">
                  Connect S3 / Cloud Hub
                </PremiumButton>
              </div>
              
              {/* Floating Icons for Decoration */}
              <div className="absolute top-10 left-10 opacity-10">
                <FileCode className="w-12 h-12" />
              </div>
              <div className="absolute bottom-10 right-10 opacity-10">
                <Globe className="w-12 h-12" />
              </div>
              <div className="absolute top-1/2 right-20 opacity-10">
                <FileSpreadsheet className="w-12 h-12" />
              </div>
            </motion.div>

            {/* Ingestion Pipeline Queue */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-2">Active Ingestion Pipeline</h4>
              <AnimatePresence mode="popLayout">
                {files.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-12 rounded-[2rem] bg-slate-50 border border-slate-100 border-dashed flex flex-col items-center justify-center text-slate-400"
                  >
                    <File className="w-8 h-8 mb-4 opacity-50" />
                    <p className="text-sm font-medium">No files in queue</p>
                  </motion.div>
                ) : (
                  files.map((file, i) => (
                    <motion.div
                      key={file.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      layout
                    >
                      <PremiumCard className="p-6 border-slate-200/60 shadow-sm flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            file.status === "complete" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                          }`}>
                            {file.status === "processing" ? <Loader2 className="w-6 h-6 animate-spin" /> : <File className="w-6 h-6" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="font-bold text-slate-900">{file.name}</span>
                              <span className="text-[10px] text-slate-400 font-bold bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-tighter">{file.size}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <p className="text-xs text-slate-500 font-medium">
                                {file.status === "processing" ? "Verifying schema & cross-referencing nodes..." : "Verification complete. Ingested into network layer."}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          {file.status === "complete" && (
                            <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-bold uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                              <CheckCircle2 className="w-4 h-4" /> Ready
                            </div>
                          )}
                          <button 
                            onClick={() => removeFile(file.name)}
                            className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </PremiumCard>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Guidelines & Documentation */}
          <div className="space-y-8">
            <PremiumCard className="p-8 border-slate-200/60 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Ingestion Guide</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex-shrink-0 flex items-center justify-center text-blue-600 font-bold text-xs">1</div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1 text-sm">Schema Validation</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">Files must adhere to GTFS 2.0 standards or the TransitPrime JSON spec.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex-shrink-0 flex items-center justify-center text-blue-600 font-bold text-xs">2</div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1 text-sm">Coordinate Matching</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">GPS coordinates will be automatically snapped to the state&apos;s road network.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex-shrink-0 flex items-center justify-center text-blue-600 font-bold text-xs">3</div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1 text-sm">AI Indexing</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">Our engine will scan for discontinuities immediately after upload.</p>
                  </div>
                </div>
              </div>
            </PremiumCard>

            <PremiumCard className="p-8 border-slate-200/60 shadow-sm bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertCircle className="w-20 h-20" />
              </div>
              <h3 className="text-lg font-bold mb-3">System Health</h3>
              <p className="text-xs text-blue-100/80 leading-relaxed mb-6 font-medium">
                Our ingestion servers are currently at 12% capacity. Large datasets will process with minimal latency.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">All Systems Nominal</span>
              </div>
            </PremiumCard>
          </div>
        </div>
      </main>
    </div>
  );
}
