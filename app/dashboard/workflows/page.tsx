"use client";

import { motion } from "framer-motion";
import { Zap, Play, Mail, Users, ArrowRight, Settings2, Plus, Clock } from "lucide-react";
import { useState } from "react";

const nodes = [
  { id: 1, type: "trigger", icon: <Users size={18} />, title: "New Lead Created", description: "Triggered when a lead is added via API or form." },
  { id: 2, type: "action", icon: <Zap size={18} />, title: "AI Scoring", description: "Nexus AI analyzes lead data and assigns a score." },
  { id: 3, type: "action", icon: <Mail size={18} />, title: "Send Welcome Email", description: "Personalized intro email sent from John's Gmail." },
  { id: 4, type: "action", icon: <Settings2 size={18} />, title: "Update CRM", description: "Move deal to 'Contacted' stage in pipeline." },
];

export default function WorkflowsPage() {
  const [activeWorkflow, setActiveWorkflow] = useState("Lead Nurturing Automation");

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{activeWorkflow}</h1>
          <p className="text-sm text-slate-500">Visual automation builder with AI decision nodes.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Play size={16} />
            Test Flow
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/10">
            Publish Changes
          </button>
        </div>
      </div>

      <div className="flex-1 bg-slate-100/50 rounded-[2rem] border border-slate-200/50 p-12 relative overflow-hidden flex flex-col items-center">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        {/* Workflow Nodes */}
        <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-lg">
          {nodes.map((node, index) => (
            <div key={node.id} className="flex flex-col items-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5 relative group hover:border-blue-500 transition-colors`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  node.type === 'trigger' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                }`}>
                  {node.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">{node.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      node.type === 'trigger' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {node.type.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{node.description}</p>
                </div>
                
                {/* Node Handles */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-slate-200 rounded-full group-hover:border-blue-500" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-slate-200 rounded-full group-hover:border-blue-500" />
              </motion.div>

              {index < nodes.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 48 }}
                  className="w-0.5 bg-slate-200 relative"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <ArrowRight className="rotate-90 text-slate-300" size={14} />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
          
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-dashed border-slate-200 rounded-2xl text-sm font-bold text-slate-400 hover:bg-white hover:border-blue-300 hover:text-blue-500 transition-all">
            <Plus size={18} />
            Add Automation Step
          </button>
        </div>
        
        {/* Floating AI Helper */}
        <div className="absolute bottom-8 right-8">
           <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-xs animate-bounce-subtle">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                 <Zap className="text-white" size={18} />
              </div>
              <div>
                 <p className="text-xs font-bold text-slate-900">AI Suggestion</p>
                 <p className="text-[10px] text-slate-500">Add a 15-minute delay before the welcome email to feel more natural.</p>
              </div>
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
