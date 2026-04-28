"use client";

import { motion } from "framer-motion";
import { Plus, MoreVertical, AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const initialStages = [
  {
    id: "lead",
    title: "New Leads",
    deals: [
      { id: "d1", title: "Global Expansion", company: "TechFlow", value: "$24,000", priority: "High", risk: false },
      { id: "d2", title: "API Integration", company: "Wonder Labs", value: "$12,500", priority: "Medium", risk: true },
    ]
  },
  {
    id: "contacted",
    title: "Contacted",
    deals: [
      { id: "d3", title: "Platform Migration", company: "Design Pro", value: "$45,000", priority: "High", risk: false },
    ]
  },
  {
    id: "proposal",
    title: "Proposal Sent",
    deals: [
      { id: "d4", title: "Annual License", company: "Growth Co.", value: "$8,200", priority: "Low", risk: false },
      { id: "d5", title: "Custom Workflow", company: "Mission Safe", value: "$32,000", priority: "Medium", risk: false },
    ]
  },
  {
    id: "negotiation",
    title: "Negotiation",
    deals: [
      { id: "d6", title: "Enterprise Bundle", company: "Wonder Labs", value: "$120,000", priority: "High", risk: false },
    ]
  }
];

export default function PipelinePage() {
  const [stages, setStages] = useState(initialStages);

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Sales Pipeline</h1>
          <p className="text-sm text-slate-500">Track and manage your deals across the funnel.</p>
        </div>
        <div className="flex gap-3">
           <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">U{i}</div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">+5</div>
           </div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/10">
              <Plus size={18} />
              New Deal
           </button>
        </div>
      </div>

      <div className="flex-1 flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
        {stages.map((stage) => (
          <div key={stage.id} className="flex-shrink-0 w-80 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
               <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-700">{stage.title}</h3>
                  <span className="px-2 py-0.5 bg-slate-200 text-slate-600 rounded-full text-[10px] font-bold">
                    {stage.deals.length}
                  </span>
               </div>
               <button className="text-slate-400 hover:text-slate-600">
                  <MoreVertical size={16} />
               </button>
            </div>

            <div className="flex-1 bg-slate-100/50 rounded-2xl p-3 space-y-3 border border-slate-200/50">
               {stage.deals.map((deal) => (
                 <motion.div
                   key={deal.id}
                   whileHover={{ y: -2, scale: 1.01 }}
                   className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-grab active:cursor-grabbing"
                 >
                   <div className="flex items-start justify-between mb-3">
                      <div>
                         <p className="text-xs font-bold text-blue-600 mb-1">{deal.company}</p>
                         <h4 className="text-sm font-bold text-slate-900 leading-tight">{deal.title}</h4>
                      </div>
                      {deal.risk && (
                        <div className="text-orange-500" title="AI Alert: Deal at risk">
                           <AlertCircle size={16} />
                        </div>
                      )}
                   </div>
                   
                   <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-bold text-slate-900">{deal.value}</span>
                      <div className="flex items-center gap-1.5 text-slate-400">
                         <Clock size={12} />
                         <span className="text-[10px] font-medium">12d</span>
                      </div>
                   </div>

                   <div className="mt-3 pt-3 border-t border-slate-50 flex items-center justify-between">
                      <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        deal.priority === 'High' ? 'bg-red-50 text-red-600' :
                        deal.priority === 'Medium' ? 'bg-orange-50 text-orange-600' :
                        'bg-blue-50 text-blue-600'
                      }`}>
                        {deal.priority} Priority
                      </div>
                      <div className="flex -space-x-1">
                         <div className="w-5 h-5 rounded-full border border-white bg-slate-200" />
                         <div className="w-5 h-5 rounded-full border border-white bg-slate-300" />
                      </div>
                   </div>
                 </motion.div>
               ))}
               
               <button className="w-full py-2 border-2 border-dashed border-slate-200 rounded-xl text-xs font-bold text-slate-400 hover:border-slate-300 hover:text-slate-500 transition-all">
                  + Add Deal
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
