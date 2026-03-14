import { Check, ArrowRight, ShieldCheck, Zap, Star } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Pricing | $1,000 Setup",
  description: "One-time setup fee of $1,000 and a $500 monthly retainer for 24/7 AI voice answering. No hidden fees, no long-term contracts.",
};

export default function Pricing() {
  return (
    <div className="pt-48 pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-accent font-bold mb-6 uppercase tracking-widest text-sm">Investment</h2>
          <h1 className="text-white mb-8">Simple, professional <br /> <span className="opacity-40">pricing for the trades.</span></h1>
          <p className="text-xl text-gray-400">We don't hide our fees. You get full agency-level service for one clear investment.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
            {/* Setup Plan */}
            <div className="bg-[#0F0F12] p-12 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold mb-8 uppercase tracking-widest text-white/60">Initial Deployment</h4>
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-6xl font-black tracking-tighter">$1,000</span>
                  <span className="text-gray-500 font-bold mb-2 uppercase text-sm">Setup</span>
                </div>
                <ul className="space-y-4 mb-12">
                  {[
                    "Custom AI Brain Construction",
                    "Service List Integration",
                    "Pricing Logic Training",
                    "Calendar/CRM Sync",
                    "Phone Line Porting",
                    "1-on-1 Strategy Call"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check size={16} className="text-accent" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="bg-white text-black text-center py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
                Start My Setup
              </Link>
            </div>

            {/* Monthly Plan */}
            <div className="bg-[#16161A] p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10"><Zap size={100} fill="currentColor" /></div>
              <div>
                <h4 className="text-xl font-bold mb-8 uppercase tracking-widest text-accent">Monthly Retainer</h4>
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-6xl font-black tracking-tighter text-white">$500</span>
                  <span className="text-gray-500 font-bold mb-2 uppercase text-sm">/ Month</span>
                </div>
                <ul className="space-y-4 mb-12">
                  {[
                    "24/7/365 AI Answering",
                    "Ongoing AI Logic Refinement",
                    "Monthly Performance Reports",
                    "Emergency Filter Maintenance",
                    "Priority Technical Support",
                    "Unlimited Call Capacity"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check size={16} className="text-accent" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                 <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Status</p>
                 <p className="text-sm font-bold text-white">Agency Partnership Included</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { t: "ROI Guaranteed", d: "One booked job per month typically covers the entire retainer.", i: <Zap /> },
             { t: "No Contracts", d: "We believe in our value. Cancel anytime if you're not satisfied.", i: <ShieldCheck /> },
             { t: "Agency Scale", d: "We handle the tech, you handle the growth. Simple.", i: <Star /> }
           ].map((item, i) => (
             <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent mb-6">{item.i}</div>
                <h5 className="text-lg font-bold mb-4">{item.t}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
