import Link from "next/link";
import Image from "next/image";
import { 
  Check, Phone, ShieldAlert, Clock, Zap, 
  ArrowRight, Target
} from "lucide-react";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AuraVoice",
    "image": "https://auravoice.ai/AuraLogo.svg",
    "description": "24/7 AI Voice Agents for Electricians, Plumbers, HVAC, and Roofers. Stop losing leads to voicemail.",
    "url": "https://auravoice.ai",
    "telephone": "+1-555-123-4567",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$"
  };

  return (
    <div className="bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Hero Section - Massive Impact */}
      <section className="relative pt-60 pb-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-accent/10 blur-[200px] rounded-full opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-12 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              The New Standard for USA Home Services
            </div>
            
            <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.85] mb-12 text-gradient">
              Never Miss <br /> Another Job.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
              We install 24/7 AI Voice Agents for Plumbers, Electricians, and HVAC pros. Stop losing leads to voicemail and start booking jobs while you sleep.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-32">
              <Link href="/contact" className="bg-white text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-200 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.1)] flex items-center gap-3">
                Deploy Your Agent <ArrowRight size={20} />
              </Link>
              <Link href="#how-it-works" className="bg-white/5 border border-white/10 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white/10 transition-all">
                See it in action
              </Link>
            </div>

            {/* Premium Visual Representation */}
            <div className="w-full relative">
               <div className="absolute inset-0 bg-accent/20 blur-[150px] opacity-20"></div>
               <div className="relative bg-white/[0.03] border border-white/10 rounded-[40px] p-2 backdrop-blur-3xl shadow-2xl">
                  <div className="bg-black rounded-[32px] overflow-hidden border border-white/5 aspect-video flex flex-col">
                     <div className="h-12 border-b border-white/5 flex items-center px-8 gap-3 bg-white/5">
                        <div className="flex gap-1.5">
                           <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                           <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                           <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
                        </div>
                        <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] mx-auto">System Status: Active</div>
                     </div>
                     <div className="flex-grow flex items-center justify-center relative">
                        <div className="absolute inset-0 tech-grid opacity-[0.05]"></div>
                        <div className="flex flex-col items-center gap-10 relative z-10">
                           <div className="relative group cursor-pointer">
                              <div className="absolute inset-0 bg-accent blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                              <Image src="/AuraIcon.svg" alt="Aura" width={140} height={140} className="relative z-10" />
                           </div>
                           <div className="text-center">
                              <p className="text-accent font-mono text-sm font-bold tracking-[0.4em] uppercase mb-4">Processing Call...</p>
                              <div className="flex gap-1 justify-center">
                                 {[...Array(15)].map((_, i) => (
                                   <div key={i} className="w-1.5 bg-accent/40 rounded-full animate-wave" style={{ height: '32px', animationDelay: `${i * 0.1}s` }}></div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Section - The Brands We Empower */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-16">The Infrastructure of the Trades</p>
          <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-20 contrast-200">
             <div className="text-3xl font-black tracking-tighter italic">ELECTRICIANS</div>
             <div className="text-3xl font-black tracking-tighter italic">PLUMBERS</div>
             <div className="text-3xl font-black tracking-tighter italic">HVAC PROS</div>
             <div className="text-3xl font-black tracking-tighter italic">ROOFERS</div>
          </div>
        </div>
      </section>

      {/* 3. The "Missed Call" Problem - Emotional Hook */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-accent font-bold mb-8 uppercase tracking-[0.3em] text-[11px]">The Revenue Leak</h2>
              <h3 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-none">Voicemail <br /> <span className="opacity-30">doesn&apos;t book jobs.</span></h3>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                In home services, speed is everything. If you don&apos;t answer the first time, your customer calls the next person on Google. Voicemail is a dead end for your business.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">82% Abandonment Rate</h4>
                    <p className="text-gray-500 leading-relaxed">People in emergencies will not leave a message. They call until someone answers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                    <Clock size={24} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">Hiring is Too Expensive</h4>
                    <p className="text-gray-500 leading-relaxed">A 24/7 receptionist costs $4k+/mo. AuraVoice does it better for 80% less.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
               <div className="absolute inset-0 bg-red-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative bg-[#0F0F12] border border-white/10 rounded-[48px] p-12 md:p-16 shadow-2xl">
                  <div className="flex items-center gap-4 mb-10">
                     <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                     <span className="font-mono text-xs uppercase tracking-widest text-red-500">Alert: Revenue Loss Detected</span>
                  </div>
                  <div className="space-y-8">
                      <div className="bg-white/5 rounded-2xl p-8 border border-white/5">
                         <p className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest">Missed Call at 10:32 PM</p>
                         <p className="text-2xl font-bold italic">&quot;My furnace just stopped working and I have kids. Please help.&quot;</p>
                      </div>

                     <div className="flex justify-between items-center py-6 border-y border-white/5">
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Status</p>
                        <p className="text-red-500 font-black tracking-tighter text-xl italic uppercase">Lead Lost to Competitor</p>
                     </div>
                     <div className="pt-4">
                        <p className="text-sm font-bold text-gray-500 uppercase mb-2">Estimated Job Value</p>
                        <p className="text-6xl font-black tracking-tighter">$1,500.00</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Solution - How AuraVoice Works */}
      <section id="how-it-works" className="py-40 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <h2 className="text-accent font-bold mb-8 uppercase tracking-[0.3em] text-[11px]">The Solution</h2>
            <h3 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-none">Simple setup. <br /> <span className="opacity-30">Elite results.</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
             <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block -z-10"></div>
             
             {[
               {
                 n: "01",
                 t: "Brain Training",
                 d: "We build your AI agent's logic based on your specific trade, pricing, and service area.",
                 i: <Target />
               },
               {
                 n: "02",
                 t: "System Sync",
                 d: "The AI connects to your calendar (ServiceTitan, Housecall Pro) to book jobs automatically.",
                 i: <Zap />
               },
               {
                 n: "03",
                 t: "Live Deployment",
                 d: "Every inbound call is now answered in 1 ring, 24/7/365. You never miss a lead again.",
                 i: <Activity />
               }
             ].map((step, i) => (
               <div key={i} className="bg-[#0A0A0B] border border-white/10 p-12 rounded-[40px] hover:border-accent/40 transition-colors group">
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white shadow-[0_0_30px_rgba(108,71,255,0.4)]">
                        {step.i}
                     </div>
                     <span className="text-5xl font-black text-white/5 group-hover:text-accent/10 transition-colors">{step.n}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-6 tracking-tight uppercase">{step.t}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{step.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Features Grid */}
      <BentoGrid />

      {/* 6. Emergency Routing - The "Peace of Mind" Feature */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="bg-accent rounded-[60px] p-12 md:p-32 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <div>
                   <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-10 border border-white/20">
                      <ShieldAlert size={40} className="text-white" />
                   </div>
                   <h3 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-none">Smart Emergency <br /> Routing.</h3>
                   <p className="text-xl text-white/80 leading-relaxed mb-12 max-w-lg">
                     Our AI distinguishes between a general quote and a plumbing flood or electrical fire. Standard calls are handled; emergencies go straight to your cell.
                   </p>
                   <ul className="space-y-6">
                      {["Semantic keyword detection", "2-second routing latency", "Owner-only emergency line"].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-white font-bold tracking-wide uppercase text-sm">
                           <div className="w-6 h-px bg-white/40"></div>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
                    <div className="bg-black/20 backdrop-blur-3xl rounded-[48px] p-12 md:p-16 border border-white/10">
                   <div className="flex flex-col gap-10">
                      <div className="space-y-4">
                         <p className="text-[10px] font-mono tracking-[0.5em] uppercase text-white/40">Inbound Call Ingest</p>
                         <p className="text-2xl font-bold italic tracking-tight">&quot;My ceiling is leaking and there&apos;s water everywhere!&quot;</p>
                      </div>

                      <div className="h-px bg-white/10 w-full"></div>
                      <div className="flex flex-col items-center gap-6">
                         <div className="bg-white text-accent px-10 py-5 rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex items-center gap-4">
                            <Zap size={24} />
                            EMERGENCY DETECTED
                         </div>
                         <p className="text-white/60 font-mono text-[11px] uppercase tracking-widest">Routing to mobile: (555) 0123</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Pricing Section - Professional & Transparent */}
      <section id="pricing" className="py-40 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <h2 className="text-accent font-bold mb-8 uppercase tracking-[0.3em] text-[11px]">Investment</h2>
            <h3 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-none">Built for growth. <br /> <span className="opacity-30">Priced for ROI.</span></h3>
          </div>

          <div className="max-w-2xl mx-auto">
             <div className="bg-[#0F0F12] border border-white/10 rounded-[50px] p-12 md:p-20 relative overflow-hidden shadow-2xl group hover:border-accent/40 transition-colors">
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Image src="/AuraIcon.svg" alt="Aura" width={160} height={160} />
                </div>
                
                <div className="mb-16">
                   <h4 className="text-xl font-bold text-accent uppercase tracking-[0.3em] mb-8">Agency Deployment</h4>
                   <div className="flex items-end gap-3 mb-4">
                      <span className="text-8xl font-black tracking-tighter text-white">$1,000</span>
                      <span className="text-gray-500 font-bold mb-4 uppercase text-sm tracking-widest">Setup</span>
                   </div>
                   <p className="text-gray-400 text-lg font-medium italic">Full-scale AI brain training & infrastructure integration</p>
                </div>

                <div className="space-y-8 mb-16 border-y border-white/5 py-12">
                   {[
                     "Custom AI Voice Personality",
                     "Industry-Specific Technical Training",
                     "Calendar & CRM Direct Integration",
                     "Smart Emergency Routing Protocols",
                     "24/7/365 Production Monitoring",
                     "Unlimited Call Concurrent Capacity"
                   ].map((feature, i) => (
                     <div key={i} className="flex items-center gap-5">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                           <Check size={14} className="text-accent" />
                        </div>
                        <p className="font-bold text-gray-200 tracking-wide">{feature}</p>
                     </div>
                   ))}
                </div>

                <div className="bg-white/5 rounded-3xl p-10 mb-12 border border-white/5">
                   <p className="text-[10px] font-bold text-gray-500 uppercase mb-3 tracking-[0.4em]">Ongoing Retainer</p>
                   <p className="text-4xl font-black text-white">$500 <span className="text-sm text-gray-400 font-bold">/ MONTH</span></p>
                   <p className="text-xs text-gray-400 mt-4 font-medium leading-relaxed uppercase tracking-widest">Covers Hosting, Security, Maintenance & 24/7 Tech Support</p>
                </div>

                <Link href="/contact" className="block w-full bg-white text-black text-center py-6 rounded-full text-xl font-black uppercase tracking-[0.2em] hover:bg-gray-200 transition-all">
                   Initialize Deployment
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* 8. Final Call to Action */}
      <section className="py-60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[200px] opacity-20 -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <Image src="/AuraLogo.svg" alt="AuraVoice" width={280} height={70} className="mx-auto mb-20" />
          <h2 className="text-6xl md:text-[140px] font-black tracking-tighter leading-none mb-16 text-gradient">
            Build the <br /> Future.
          </h2>
          <p className="text-2xl text-gray-400 mb-20 max-w-3xl mx-auto leading-relaxed uppercase tracking-[0.3em] font-medium">
             Stop losing jobs to voicemail. <br /> Deployment takes 48 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-6 bg-accent text-white px-16 py-8 rounded-full text-2xl font-black uppercase tracking-[0.3em] hover:bg-accent/90 transition-all shadow-[0_30px_60px_rgba(108,71,255,0.4)]">
             Start Now <ArrowRight size={28} />
          </Link>
        </div>
      </section>
    </div>
  );
}

const Activity = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
