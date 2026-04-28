"use client";

import { motion } from "framer-motion";
import { Plus, Search, Filter, MoreHorizontal, Mail, Phone, ExternalLink } from "lucide-react";
import { useState } from "react";

const initialContacts = [
  { id: 1, name: "Alice Johnson", company: "TechFlow Inc.", email: "alice@techflow.com", phone: "+1 (555) 123-4567", status: "Active", score: 92 },
  { id: 2, name: "Bob Smith", company: "Design Pro", email: "bob@designpro.io", phone: "+1 (555) 987-6543", status: "Prospect", score: 45 },
  { id: 3, name: "Charlie Brown", company: "Growth Co.", email: "charlie@growth.co", phone: "+1 (555) 456-7890", status: "Qualified", score: 78 },
  { id: 4, name: "Diana Prince", company: "Wonder Labs", email: "diana@wonder.com", phone: "+1 (555) 000-1111", status: "Active", score: 88 },
  { id: 5, name: "Ethan Hunt", company: "Mission Safe", email: "ethan@mission.com", phone: "+1 (555) 999-8888", status: "Inactive", score: 12 },
];

export default function ContactsPage() {
  const [contacts, setContacts] = useState(initialContacts);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: "New Contact",
      company: "Company Ltd.",
      email: "new@example.com",
      phone: "+1 (000) 000-0000",
      status: "Prospect",
      score: 50,
    };
    setContacts([newContact, ...contacts]);
    setIsAdding(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Contacts</h1>
          <p className="text-sm text-slate-500">Manage and track your customer relationships.</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/10"
        >
          <Plus size={18} />
          Add Contact
        </button>
      </div>

      {/* Filters Area */}
      <div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Filter by name, email or company..." 
              className="w-full pl-10 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 text-slate-600 border border-slate-200 rounded-lg text-sm hover:bg-slate-50">
            <Filter size={14} />
            Filters
          </button>
        </div>
        <div className="text-xs text-slate-400">
          Showing {contacts.length} contacts
        </div>
      </div>

      {/* Table Area */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">AI Score</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {contacts.map((contact) => (
              <motion.tr 
                key={contact.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-[10px]">
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{contact.name}</p>
                      <p className="text-xs text-slate-400">{contact.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-slate-600">{contact.company}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                    contact.status === 'Active' ? 'bg-emerald-50 text-emerald-600' :
                    contact.status === 'Qualified' ? 'bg-blue-50 text-blue-600' :
                    contact.status === 'Prospect' ? 'bg-indigo-50 text-indigo-600' :
                    'bg-slate-100 text-slate-500'
                  }`}>
                    {contact.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 w-16 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${contact.score > 80 ? 'bg-emerald-500' : contact.score > 40 ? 'bg-blue-500' : 'bg-slate-300'}`} 
                        style={{ width: `${contact.score}%` }} 
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-600">{contact.score}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Mail size={16} />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Phone size={16} />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Contact Modal Simulation */}
      {isAdding && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">Add New Contact</h3>
              <p className="text-sm text-slate-500">Enter customer details below.</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Full Name</label>
                <input type="text" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="e.g. Jane Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Email Address</label>
                <input type="email" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="jane@example.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Company</label>
                    <input type="text" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="Acme Inc." />
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Phone</label>
                    <input type="text" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="+1..." />
                 </div>
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
              <button onClick={() => setIsAdding(false)} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">Cancel</button>
              <button onClick={handleAddContact} className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/20">Save Contact</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
