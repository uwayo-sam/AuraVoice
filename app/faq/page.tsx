import { Plus, Minus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Common questions about our AI voice agents, CRM integrations, and emergency call routing for home services.",
};

const faqs = [
  {
    q: "Does the AI sound like a robot?",
    a: "No. Our AI uses the latest ultra-realistic neural voice technology. It has natural cadence, breathes, and sounds like a professional office manager."
  },
  {
    q: "How does it handle emergencies?",
    a: "During the setup process, we define what counts as an 'emergency' for your trade (e.g., a burst pipe or a main panel failure). When the AI detects these keywords, it instantly routes the call to your cell phone or a designated emergency technician."
  },
  {
    q: "Can it book jobs in my specific CRM?",
    a: "Yes. We natively integrate with Housecall Pro, ServiceTitan, Jobber, and Workiz. We can also sync with Google Calendar or Outlook."
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Our service is month-to-month. We charge a one-time $1,000 setup fee to build your custom AI brain, and after that, it's just a $500 monthly retainer for maintenance and 24/7 service."
  },
  {
    q: "What if the AI makes a mistake?",
    a: "Every call is recorded and transcribed. You can review any call at any time. Our team also performs weekly logic reviews to ensure your AI is constantly getting smarter."
  },
  {
    q: "How long does it take to get set up?",
    a: "Typically, we can have your custom AI agent live and answering calls within 48-72 hours of your initial strategy session."
  }
];

export default function FAQ() {

  return (
    <div className="pt-48 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-24 text-center">
          <h2 className="text-accent font-bold mb-6 uppercase tracking-widest text-sm">Common Questions</h2>
          <h1 className="text-white mb-8">Everything you <br /> <span className="opacity-40">need to know.</span></h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-all cursor-default group">
              <h4 className="text-xl font-bold mb-4 flex justify-between items-center text-white">
                {faq.q}
                <Plus size={20} className="text-accent group-hover:rotate-90 transition-transform" />
              </h4>
              <p className="text-gray-400 leading-relaxed text-lg">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-accent rounded-[40px] text-center max-w-4xl mx-auto">
           <h3 className="text-3xl font-bold text-white mb-6">Have more questions?</h3>
           <p className="text-white/80 text-xl mb-10">Our enterprise engineers are available for a 1-on-1 discovery call.</p>
           <a href="/contact" className="bg-white text-accent px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Book a Strategy Call
           </a>
        </div>
      </div>
    </div>
  );
}
