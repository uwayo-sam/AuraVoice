import { Globe, Users, Briefcase, ArrowRight, DollarSign } from "lucide-react";

export default function Partners() {
  return (
    <div className="pt-48 pb-32">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-accent font-bold mb-6 uppercase tracking-widest text-sm">Alliance Program</h2>
        <h1 className="text-white mb-12">Grow with the <br /> <span className="opacity-40">best in voice AI.</span></h1>
        <p className="text-xl text-gray-400 mb-24 leading-relaxed">
          Are you a marketing agency for the trades? Or a CRM developer looking for elite voice integration? Join our partner ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-32">
           <div className="bg-white/5 border border-white/10 p-12 rounded-[40px] hover:bg-white/[0.08] transition-all group">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-8"><Briefcase /></div>
              <h4 className="text-2xl font-bold mb-4">Marketing Agencies</h4>
              <p className="text-gray-400 mb-8 leading-relaxed">Protect the leads you generate. Ensure your clients never miss a call from the traffic you send them.</p>
              <div className="flex items-center gap-3 text-accent font-bold text-sm">
                 Referral Fee Program <DollarSign size={16} />
              </div>
           </div>
           
           <div className="bg-white/5 border border-white/10 p-12 rounded-[40px] hover:bg-white/[0.08] transition-all group">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-8"><Users /></div>
              <h4 className="text-2xl font-bold mb-4">Enterprise Resellers</h4>
              <p className="text-gray-400 mb-8 leading-relaxed">Wholesale AuraVoice deployments to your existing book of business. We handle the tech, you handle the relationship.</p>
              <div className="flex items-center gap-3 text-accent font-bold text-sm">
                 Volume Discount Pricing <Globe size={16} />
              </div>
           </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[40px] p-20">
           <h3 className="text-4xl font-bold mb-8">Apply to Become a Partner</h3>
           <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">We hand-select our partners to ensure the highest quality of service for our mutual clients.</p>
           <a href="/contact" className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-200 transition-all">
              Initialize Application <ArrowRight size={24} />
           </a>
        </div>
      </div>
    </div>
  );
}
