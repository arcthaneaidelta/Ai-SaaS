"use client";

import { motion } from "framer-motion";
import { User, Bell, Shield, Globe, CreditCard } from "lucide-react";

export default function SettingsPage() {
  const sections = [
    { icon: <User size={20} />, title: "Profile Information", desc: "Manage your personal details and account settings." },
    { icon: <Bell size={20} />, title: "Notifications", desc: "Configure how you receive alerts and updates." },
    { icon: <Shield size={20} />, title: "Security & Privacy", desc: "Update your password and 2FA settings." },
    { icon: <Globe size={20} />, title: "Integrations", desc: "Manage connected apps and API keys." },
    { icon: <CreditCard size={20} />, title: "Billing & Plan", desc: "View your current plan and invoices." },
  ];

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500">Manage your account and platform preferences.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden divide-y divide-slate-100">
        {sections.map((section, i) => (
          <div key={i} className="p-6 hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between group">
            <div className="flex items-center gap-5">
               <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {section.icon}
               </div>
               <div>
                  <h3 className="text-sm font-bold text-slate-900">{section.title}</h3>
                  <p className="text-xs text-slate-500">{section.desc}</p>
               </div>
            </div>
            <button className="text-xs font-bold text-blue-600">Configure</button>
          </div>
        ))}
      </div>
      
      <div className="pt-4 flex justify-end">
         <button className="px-6 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all">
            Save All Changes
         </button>
      </div>
    </div>
  );
}
