"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, BarChart3, Users2, Workflow } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="text-blue-600" />,
    title: "AI Lead Scoring",
    description: "Automatically rank leads based on engagement, intent, and historical data patterns."
  },
  {
    icon: <Zap className="text-blue-600" />,
    title: "Instant Automations",
    description: "Trigger workflows across 100+ integrations with simple natural language commands."
  },
  {
    icon: <Workflow className="text-blue-600" />,
    title: "Visual Pipelines",
    description: "Manage deals with a clean, drag-and-drop interface enhanced by AI deal-at-risk alerts."
  },
  {
    icon: <BarChart3 className="text-blue-600" />,
    title: "Predictive Analytics",
    description: "Forecast revenue and team performance with up to 98% accuracy using neural models."
  },
  {
    icon: <Users2 className="text-blue-600" />,
    title: "Team Collaboration",
    description: "Unified workspace for sales, marketing, and support to sync on customer journeys."
  },
  {
    icon: <Shield className="text-blue-600" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC2 Type II compliance, and advanced permission controls."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Engineered for Modern Teams
          </h2>
          <p className="text-lg text-slate-500">
            Nexus AI brings together everything you need to manage relationships and automate work in one unified, intelligent platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 border border-slate-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
