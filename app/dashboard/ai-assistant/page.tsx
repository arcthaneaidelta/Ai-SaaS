"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, User, Bot, Zap, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const initialMessages = [
  { id: 1, role: "bot", content: "Hello John! I'm your Nexus AI Assistant. How can I help you optimize your workflows today?" },
];

const suggestions = [
  "Summarize last week's sales performance",
  "Which leads are most likely to close this month?",
  "Draft a follow-up email for Wonder Labs",
  "Automate my LinkedIn outreach"
];

export default function AIAssistantPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    const userMsg = { id: Date.now(), role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botResponse = "I've analyzed your data. Based on current trends, your conversion rate is expected to increase by 15% if you follow up with the 'High Score' leads in your pipeline.";
      if (text.toLowerCase().includes("email")) {
        botResponse = "I've drafted a personalized follow-up email for Wonder Labs. It highlights their recent interest in the Enterprise Bundle. Would you like to send it now via Gmail integration?";
      } else if (text.toLowerCase().includes("leads")) {
        botResponse = "You have 12 leads with an AI score above 90. I recommend focusing on 'Global Expansion' and 'Enterprise Bundle' as they show high intent signals.";
      }
      
      setMessages(prev => [...prev, { id: Date.now() + 1, role: "bot", content: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="h-[calc(100vh-180px)] flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Sparkles className="text-white" size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Nexus AI Assistant</h2>
            <p className="text-xs text-slate-500">Always active • Connected to your CRM</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-[10px] font-bold">LIVE SYNC</span>
        </div>
      </div>

      {/* Chat Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-blue-600 text-white'
                }`}>
                  {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-slate-900 text-white rounded-tr-none' 
                    : 'bg-slate-50 text-slate-800 border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
               <div className="flex gap-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 rounded-tl-none flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-slate-100 space-y-4">
        {messages.length < 3 && (
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s, i) => (
              <button 
                key={i} 
                onClick={() => handleSend(s)}
                className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-xs text-slate-600 transition-all flex items-center gap-2 group"
              >
                {s}
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </button>
            ))}
          </div>
        )}
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
            placeholder="Ask AI to automate something..."
            className="w-full pl-4 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
          <button 
            onClick={() => handleSend(input)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
