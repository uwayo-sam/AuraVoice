import { TrendingUp, Clock, PhoneIncoming, ArrowRight } from "lucide-react";

const cases = [
  {
    title: "24/7 Leak Detection & Dispatch",
    client: "Prestige Plumbing (Chicago)",
    problem: "Losing 30% of emergency calls after 10 PM to voicemail.",
    solution: "AuraVoice emergency triage agent installed.",
    result: "$12k in protected revenue in the first month.",
    icon: <PhoneIncoming size={32} className="text-accent" />
  },
  {
    title: "Scaling Without New Hires",
    client: "Spark Electric (Miami)",
    problem: "Office manager overwhelmed by seasonal quote requests.",
    solution: "AI handling all standard quote intake and scheduling.",
    result: "Avoided $4k/mo salary expense while growing 15%.",
    icon: <TrendingUp size={32} className="text-accent" />
  },
  {
    title: "Instant Storm Response",
    client: "Elite Roofing (Dallas)",
    problem: "Unable to keep up with call volume after a major storm.",
    solution: "Multi-line AI capacity handling 20 concurrent calls.",
    result: "Captured 45 new storm leads in 24 hours.",
    icon: <Clock size={32} className="text-accent" />
  }
];

export default function CaseStudies() {
  return (
    <div className="pt-48 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <h2 className="text-accent font-bold mb-6 uppercase tracking-widest text-sm">Success Stories</h2>
          <h1 className="text-white mb-12">Real results for <br /> <span className="opacity-40">real tradespeople.</span></h1>
          <p className="text-2xl text-gray-400 max-w-2xl leading-relaxed">
            We don&apos;t just provide software—we provide a competitive advantage. See how AuraVoice is protecting revenue across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
           {cases.map((item, i) => (
             <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[40px] flex flex-col justify-between group hover:border-accent/40 transition-all">
                <div>
                   <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                      {item.icon}
                   </div>
                   <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                   <p className="text-accent text-xs font-bold uppercase tracking-widest mb-8">{item.client}</p>
                   
                   <div className="space-y-6 mb-12">
                      <div>
                         <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Problem</p>
                         <p className="text-sm text-gray-300">{item.problem}</p>
                      </div>
                      <div>
                         <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Impact</p>
                         <p className="text-lg font-bold text-white">{item.result}</p>
                      </div>
                   </div>
                </div>
                <a href="/contact" className="inline-flex items-center gap-2 font-bold text-accent text-sm group-hover:gap-4 transition-all">
                   View Full Report <ArrowRight size={16} />
                </a>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-[50px] overflow-hidden border border-white/10">
           <div className="bg-[#0A0A0B] p-20 flex flex-col justify-center">
              <h3 className="text-5xl font-bold mb-8 italic tracking-tighter">&quot;I wake up to booked jobs in my calendar every single day.&quot;</h3>
              <p className="text-gray-400 text-lg uppercase font-bold tracking-[0.2em]">— Master Plumber, NJ</p>
           </div>
           <div className="bg-[#0F0F12] p-20 flex flex-col justify-center">
              <h3 className="text-5xl font-bold mb-8 italic tracking-tighter">&quot;We used to lose 5-10 calls every weekend. Now we capture them all.&quot;</h3>
              <p className="text-gray-400 text-lg uppercase font-bold tracking-[0.2em]">— HVAC Owner, TX</p>
           </div>
        </div>
      </div>
    </div>
  );
}
