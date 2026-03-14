"use client";

import { motion } from "framer-motion";
import { PhoneCall, ShieldCheck, Zap, Clock, Globe, ArrowRight, MessageSquare, Calendar } from "lucide-react";

const features = [
  {
    title: "24/7 Professional Answering",
    description: "Whether it's 2 PM or 2 AM, your phone is answered by a professional AI that sounds and acts like a member of your team.",
    icon: <Clock className="text-[#6C47FF]" size={24} />,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-white/5"
  },
  {
    title: "Direct Job Scheduling",
    description: "The AI checks your actual availability and books appointments directly into your calendar or CRM, so you wake up to a full schedule.",
    icon: <Calendar className="text-[#6C47FF]" size={24} />,
    className: "md:col-span-1 md:row-span-2",
    visual: (
      <div className="mt-8 space-y-3">
         <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-[10px] text-accent font-bold uppercase mb-1">Available Slot</p>
            <p className="font-bold">Mon, Oct 14 @ 9:00 AM</p>
         </div>
         <div className="p-4 rounded-xl bg-white/5 border border-white/10 opacity-60">
            <p className="text-[10px] text-accent font-bold uppercase mb-1">Available Slot</p>
            <p className="font-bold">Mon, Oct 14 @ 2:30 PM</p>
         </div>
         <div className="p-4 rounded-xl bg-accent text-white shadow-xl shadow-accent/20">
            <p className="text-[10px] font-bold uppercase mb-1">Booking Confirmed</p>
            <p className="font-bold">New Service Call Created</p>
         </div>
      </div>
    )
  },
  {
    title: "Emergency Filter",
    description: "Instantly routes urgent calls like flooding or outages to your personal line while handling standard quotes on its own.",
    icon: <ShieldCheck className="text-[#6C47FF]" size={24} />,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-white/5"
  },
  {
    title: "Built for the USA Trades",
    description: "Optimized specifically for American Electricians, Plumbers, and HVAC professionals. It speaks the language of your business.",
    icon: <Globe className="text-[#6C47FF]" size={24} />,
    className: "md:col-span-2 md:row-span-1",
    visual: (
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
         {['Electricians', 'Plumbers', 'HVAC', 'Roofers'].map((trade) => (
           <div key={trade} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center font-bold text-sm uppercase tracking-widest text-white/40">
              {trade}
           </div>
         ))}
      </div>
    )
  }
];

export default function BentoGrid() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <h2 className="text-accent font-bold mb-6 uppercase tracking-widest text-sm">Capabilities</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Everything your agency <br className="hidden md:block" /> needs to dominate.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${feature.className} bg-[#0F0F12] border border-white/5 p-10 rounded-[40px] flex flex-col hover:border-white/20 transition-all`}
            >
              <div className="mb-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                     {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
              </div>
              {feature.visual}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
