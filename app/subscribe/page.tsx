"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumInput } from "@/components/ui/premium-input";
import { PremiumCard } from "@/components/ui/premium-card";
import { 
  User, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  ChevronRight,
  Info
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const steps = [
  { id: 1, name: "Personal Info", icon: <User className="w-4 h-4" /> },
  { id: 2, name: "Investment", icon: <Briefcase className="w-4 h-4" /> },
  { id: 3, name: "Disclosures", icon: <ShieldCheck className="w-4 h-4" /> },
  { id: 4, name: "Review", icon: <CheckCircle2 className="w-4 h-4" /> },
];

export default function SubscriptionForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "100,000",
    frequency: "One-time",
    entityType: "Individual",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        router.push("/agreement");
      }, 1500);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Form Header */}
      <header className="bg-white border-b border-slate-200 py-6 px-8">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">N</div>
            <span className="font-bold text-slate-900 tracking-tight">NEXUS INVEST</span>
          </Link>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    currentStep === step.id 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-100" 
                      : currentStep > step.id 
                      ? "bg-blue-100 text-blue-600" 
                      : "bg-slate-100 text-slate-400"
                  }`}>
                    {currentStep > step.id ? <CheckCircle2 className="w-4 h-4" /> : step.id}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider hidden md:inline ${
                    currentStep === step.id ? "text-slate-900" : "text-slate-400"
                  }`}>
                    {step.name}
                  </span>
                  {step.id < 4 && <ChevronRight className="w-4 h-4 text-slate-300" />}
                </div>
              ))}
            </div>
            <PremiumButton variant="ghost" size="sm" onClick={() => router.push("/")}>
              Save & Exit
            </PremiumButton>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <PremiumCard className="p-10">
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Personal Information</h2>
                      <p className="text-slate-500">Please provide your legal contact details as they appear on your tax documents.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <PremiumInput 
                        label="First Name" 
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                      <PremiumInput 
                        label="Last Name" 
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                    <PremiumInput 
                      label="Email Address" 
                      placeholder="john@example.com" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3">
                      <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-700 leading-relaxed">
                        We use this information to pre-fill your subscription documents and verify your identity.
                      </p>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Investment Details</h2>
                      <p className="text-slate-500">Configure your participation in the Nexus Opportunity Fund IV.</p>
                    </div>
                    <div className="space-y-6">
                      <PremiumInput 
                        label="Investment Amount (USD)" 
                        value={formData.amount}
                        onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      />
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 ml-1">Entity Type</label>
                        <div className="grid grid-cols-2 gap-4">
                          {["Individual", "Joint", "Trust", "Corporation"].map((type) => (
                            <button
                              key={type}
                              onClick={() => setFormData({...formData, entityType: type})}
                              className={`p-4 rounded-xl border text-sm font-bold transition-all ${
                                formData.entityType === type 
                                  ? "bg-blue-50 border-blue-600 text-blue-600" 
                                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Regulatory Disclosures</h2>
                      <p className="text-slate-500">Confirm your accreditation status and regulatory compliance.</p>
                    </div>
                    <div className="space-y-4">
                      {[
                        "I am an Accredited Investor as defined in Rule 501 of Regulation D.",
                        "I understand the high risks associated with private equity investments.",
                        "I have received and reviewed the Private Placement Memorandum (PPM).",
                        "I am not a person or entity prohibited from doing business with US persons."
                      ].map((item, i) => (
                        <label key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer group">
                          <input type="checkbox" className="w-5 h-5 mt-0.5 accent-blue-600" defaultChecked />
                          <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Final Review</h2>
                      <p className="text-slate-500">Please review your information before generating the agreement.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                        <span className="text-sm font-medium text-slate-500">Investor Name</span>
                        <span className="text-sm font-bold text-slate-900">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                        <span className="text-sm font-medium text-slate-500">Investment Amount</span>
                        <span className="text-sm font-bold text-slate-900">${formData.amount}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                        <span className="text-sm font-medium text-slate-500">Entity Type</span>
                        <span className="text-sm font-bold text-slate-900">{formData.entityType}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-500">Fund Name</span>
                        <span className="text-sm font-bold text-blue-600">Nexus Opportunity Fund IV</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Footer Buttons */}
                <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                  <PremiumButton 
                    variant="outline" 
                    onClick={handleBack}
                    className={currentStep === 1 ? "invisible" : "flex gap-2"}
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </PremiumButton>
                  <PremiumButton 
                    variant="primary" 
                    onClick={handleNext}
                    isLoading={isLoading}
                    className="px-8 flex gap-2"
                  >
                    {currentStep === 4 ? "Generate Agreement" : "Continue"} 
                    {currentStep !== 4 && <ArrowRight className="w-4 h-4" />}
                  </PremiumButton>
                </div>
              </PremiumCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
