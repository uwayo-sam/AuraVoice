import { Users, Target, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-48 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-accent font-bold mb-6 uppercase tracking-widest text-sm">Our Mission</h2>
          <h1 className="text-white mb-12">We built AuraVoice for the <span className="opacity-40">hard-working trades.</span></h1>
          <p className="text-2xl text-gray-400 leading-relaxed">
            AuraVoice was born from a simple observation: the best plumbers, electricians, and HVAC pros are often the ones who can't answer their phones. They're too busy doing the work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
           <div className="relative aspect-square">
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full"></div>
              <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[40px] flex items-center justify-center overflow-hidden">
                 <Image src="/AuraIcon.svg" alt="AuraIcon" width={300} height={300} className="opacity-20" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-12">
                       <h3 className="text-6xl font-black italic tracking-tighter mb-4 opacity-80 uppercase">USA MADE</h3>
                       <p className="text-accent font-mono tracking-widest uppercase font-bold">Deploying Everywhere</p>
                    </div>
                 </div>
              </div>
           </div>
           <div className="space-y-12">
              <div>
                 <h4 className="text-2xl font-bold mb-6 flex items-center gap-4">
                    <Users size={24} className="text-accent" />
                    Who We Are
                 </h4>
                 <p className="text-gray-400 text-lg leading-relaxed">
                    We are a team of AI engineers and home service agency experts based in San Francisco. We understand that your business doesn't need "chatbots"—it needs a reliable member of the team.
                 </p>
              </div>
              <div>
                 <h4 className="text-2xl font-bold mb-6 flex items-center gap-4">
                    <Target size={24} className="text-accent" />
                    Our Focus
                 </h4>
                 <p className="text-gray-400 text-lg leading-relaxed">
                    We only work with home service businesses. By narrowing our focus, we've built the most intelligent AI voice models for technical trades in the USA.
                 </p>
              </div>
              <div>
                 <h4 className="text-2xl font-bold mb-6 flex items-center gap-4">
                    <Shield size={24} className="text-accent" />
                    Our Promise
                 </h4>
                 <p className="text-gray-400 text-lg leading-relaxed">
                    We promise to treat your business like our own. Every AI we deploy is rigorously tested to ensure it represents your brand with professionalism and accuracy.
                 </p>
              </div>
           </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[50px] p-20 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(108,71,255,0.1),transparent)]"></div>
           <h3 className="text-4xl font-bold mb-10 relative z-10">Ready to join the future <br /> of the trades?</h3>
           <a href="/contact" className="inline-flex items-center gap-4 bg-[#6C47FF] text-white px-12 py-6 rounded-full text-xl font-bold relative z-10 hover:bg-[#5a3ae6] transition-all">
              Work With Us <ArrowRight size={24} />
           </a>
        </div>
      </div>
    </div>
  );
}
