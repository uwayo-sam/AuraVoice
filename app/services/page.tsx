import { Zap, Droplets, Wind, Hammer, ArrowRight, ShieldCheck, Activity, Cpu } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions for Electricians, Plumbers & HVAC",
  description: "Custom AI voice solutions tailored for the trades. See how our AI handles emergencies for plumbers and bookings for electricians.",
};

const industries = [
  {
    id: "electricians",
    name: "Electrical Engineering",
    icon: <Zap size={24} className="text-accent" />,
    description: "High-priority emergency dispatching and maintenance scheduling for master electricians.",
    specs: "99.2% Resolution Accuracy"
  },
  {
    id: "plumbers",
    name: "Hydraulic Systems",
    icon: <Droplets size={24} className="text-accent" />,
    description: "Real-time flood detection and emergency technician routing for plumbing enterprises.",
    specs: "Instant Leak Triage"
  },
  {
    id: "hvac",
    name: "Climate Control",
    icon: <Wind size={24} className="text-accent" />,
    description: "Seamless seasonal volume management with diagnostic pre-screening for HVAC pros.",
    specs: "Level 4 Diagnostic Logic"
  },
  {
    id: "roofers",
    name: "Structural Integrity",
    icon: <Hammer size={24} className="text-accent" />,
    description: "Storm-response lead capture and insurance qualification for high-end roofing agencies.",
    specs: "Fast-Track Lead Pipeline"
  }
];

export default function Services() {

  return (
    <div className="bg-black pt-60 pb-40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <h2 className="mb-8 font-mono text-[11px] tracking-[0.4em] uppercase opacity-40">Industry Specialization</h2>
          <h1 className="text-6xl md:text-[100px] font-black tracking-tighter-x text-gradient leading-none mb-12">
            The standard <br /> for the trades.
          </h1>
          <p className="text-xl text-primary max-w-2xl leading-relaxed uppercase tracking-widest">
            Custom-trained neural models optimized for the unique technical requirements of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05] rounded-xl overflow-hidden mb-40">
          {industries.map((industry) => (
            <div key={industry.id} className="bg-black p-16 hover:bg-white/[0.02] transition-colors group">
              <div className="flex justify-between items-start mb-12">
                 <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 group-hover:border-accent/40 transition-colors">
                    {industry.icon}
                 </div>
                 <span className="text-[10px] font-mono text-accent font-bold tracking-widest uppercase">{industry.specs}</span>
              </div>
              <h3 className="text-4xl font-bold mb-6 tracking-tighter-x text-white">{industry.name}</h3>
              <p className="text-primary mb-12 text-lg leading-relaxed">{industry.description}</p>
              
              <Link href="/contact" className="inline-flex items-center gap-3 font-black text-[11px] uppercase tracking-[0.3em] text-white hover:text-accent transition-all group-hover:gap-5">
                Request Deployment <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Infrastructure Specs */}
        <div className="border border-white/[0.05] rounded-xl p-20 relative overflow-hidden bg-[#030303]">
           <div className="absolute inset-0 tech-grid opacity-[0.02]"></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h3 className="text-4xl font-bold mb-8 tracking-tighter-x">Custom Node Architecture</h3>
                 <p className="text-primary text-lg leading-relaxed mb-10">
                    Your business is unique. We build custom &quot;Brains&quot; trained on your specific service lists, pricing models, and technician skillsets. No generic responses, ever.
                 </p>
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                       <div className="flex items-center gap-2 mb-2">
                          <Cpu size={14} className="text-accent" />
                          <span className="text-[10px] font-mono font-bold tracking-widest uppercase">Compute</span>
                       </div>
                       <p className="text-sm font-bold text-white uppercase tracking-widest">Enterprise Edge</p>
                    </div>
                    <div>
                       <div className="flex items-center gap-2 mb-2">
                          <Activity size={14} className="text-accent" />
                          <span className="text-[10px] font-mono font-bold tracking-widest uppercase">Uptime</span>
                       </div>
                       <p className="text-sm font-bold text-white uppercase tracking-widest">High Availability</p>
                    </div>
                 </div>
              </div>
              <div className="aspect-square bg-white/[0.02] border border-white/10 rounded-xl p-12 flex items-center justify-center">
                 <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-accent/20 blur-[100px] animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <ShieldCheck size={120} className="text-white/10" />
                    </div>
                    {/* Animated Lines */}
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="absolute h-px bg-accent/40 w-full top-1/2 -translate-y-1/2 opacity-20" style={{ transform: `rotate(${i * 36}deg)` }}></div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
