"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small teams getting started with AI CRM.",
    features: ["Up to 1,000 contacts", "Basic AI Lead Scoring", "5 Workflows", "Standard Support"]
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing teams that need advanced automation.",
    features: ["Unlimited contacts", "Advanced AI Predictions", "Unlimited Workflows", "Priority Support", "Custom Dashboards"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale power for large organizations.",
    features: ["Dedicated AI Instance", "SSO & Advanced Security", "Custom Integrations", "24/7 White-glove Support", "On-premise Options"]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-500">
            Choose the plan that fits your team. Scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border bg-white shadow-sm ${
                plan.popular ? "border-blue-500 ring-4 ring-blue-500/10 shadow-xl shadow-blue-500/5" : "border-slate-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-slate-500 ml-1">/mo</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all ${
                plan.popular ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200" : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
