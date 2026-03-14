"use client";

import { Mail, Phone, MapPin, Send, ArrowUpRight, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-black pt-60 pb-40">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            
            {/* Left Content */}
            <div className="space-y-16">
               <div>
                  <h2 className="mb-8 font-mono text-[11px] tracking-[0.4em] uppercase opacity-40">System Access</h2>
                  <h1 className="text-7xl font-black tracking-tighter-x text-gradient leading-none mb-12">
                    Initialize Your <br /> Deployment.
                  </h1>
                  <p className="text-xl text-primary max-w-lg leading-relaxed uppercase tracking-widest">
                    Enter the infrastructure. Speak with an enterprise engineer to deploy AuraVoice within 48 hours.
                  </p>
               </div>

               <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                     <div className="w-12 h-12 rounded bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent group-hover:border-accent/50 transition-colors">
                        <Phone size={20} />
                     </div>
                     <div>
                        <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Direct Line</p>
                        <p className="text-lg font-bold text-white tracking-tighter">(555) 123-4567</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                     <div className="w-12 h-12 rounded bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent group-hover:border-accent/50 transition-colors">
                        <Mail size={20} />
                     </div>
                     <div>
                        <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Secure Email</p>
                        <p className="text-lg font-bold text-white tracking-tighter">enterprise@auravoice.ai</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                     <div className="w-12 h-12 rounded bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent group-hover:border-accent/50 transition-colors">
                        <MapPin size={20} />
                     </div>
                     <div>
                        <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Hub</p>
                        <p className="text-lg font-bold text-white tracking-tighter">San Francisco, CA</p>
                     </div>
                  </div>
               </div>

               <div className="p-10 rounded-xl bg-accent/[0.03] border border-accent/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4">
                     <ArrowUpRight size={20} className="text-accent opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-4">Enterprise SLA</h4>
                  <p className="text-primary text-sm leading-relaxed mb-0 font-medium">
                     All deployments include a dedicated implementation manager and 99.99% uptime guarantee.
                  </p>
               </div>
            </div>

            {/* Right Form */}
            <div className="relative">
               <div className="absolute inset-0 bg-accent/20 blur-[150px] opacity-20 -z-10"></div>
               {submitted ? (
                 <div className="bg-white/[0.02] border border-white/10 rounded-xl p-20 text-center flex flex-col items-center justify-center min-h-[600px] backdrop-blur-md">
                    <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-10 border border-accent/20">
                       <Send size={40} />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 tracking-tighter-x">Request Received.</h3>
                    <p className="text-primary uppercase tracking-widest text-sm mb-12 max-w-sm leading-loose">
                       Your request has been prioritized. An engineer will reach out within 120 minutes.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="text-[11px] font-mono font-bold text-accent uppercase tracking-[0.4em] hover:text-white transition-colors">Return to Console</button>
                 </div>
               ) : (
                 <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white/[0.02] border border-white/10 rounded-xl p-12 md:p-16 backdrop-blur-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                       <div className="space-y-4">
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-1">Full Name</label>
                          <input required type="text" className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 rounded-sm text-sm text-white outline-none focus:border-accent transition-all font-medium uppercase tracking-widest" />
                       </div>
                       <div className="space-y-4">
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-1">Work Email</label>
                          <input required type="email" className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 rounded-sm text-sm text-white outline-none focus:border-accent transition-all font-medium uppercase tracking-widest" />
                       </div>
                    </div>

                    <div className="mb-8 space-y-4">
                       <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-1">Organization</label>
                       <input required type="text" className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 rounded-sm text-sm text-white outline-none focus:border-accent transition-all font-medium uppercase tracking-widest" />
                    </div>

                    <div className="mb-12 space-y-4">
                       <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-1">System Requirements</label>
                       <textarea required rows={4} className="w-full bg-white/[0.03] border border-white/10 px-6 py-6 rounded-sm text-sm text-white outline-none focus:border-accent transition-all font-medium uppercase tracking-widest resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-white text-black py-6 rounded-sm text-[13px] font-black uppercase tracking-[0.4em] hover:bg-white/90 transition-all shadow-2xl flex items-center justify-center gap-3">
                       INITIALIZE SYSTEM <ChevronRight size={18} />
                    </button>
                    <p className="text-center text-[9px] text-white/20 mt-8 uppercase font-bold tracking-[0.4em]">Proprietary Enterprise Deployment</p>
                 </form>
               )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
