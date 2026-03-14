import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-8">
              <Image src="/AuraLogo.svg" alt="AuraVoice" width={160} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed font-medium uppercase tracking-widest mb-8">
              Empowering the trades with elite voice intelligence. Built for plumbers, electricians, and HVAC pros.
            </p>
            <div className="flex gap-6">
              <Twitter size={18} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
              <Instagram size={18} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={18} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-8 text-[11px] uppercase tracking-[0.3em]">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Results</Link></li>
              <li><Link href="/partners" className="hover:text-white">Partners</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-8 text-[11px] uppercase tracking-[0.3em]">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-white mb-8 text-[11px] uppercase tracking-[0.3em]">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li className="flex items-center gap-3"><Phone size={14} /> (555) 123-4567</li>
              <li className="flex items-center gap-3"><Mail size={14} /> hello@auravoice.ai</li>
              <li className="flex items-center gap-3"><MapPin size={14} /> San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} AuraVoice Intelligence.
          </p>
          <div className="flex gap-10 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
             <Link href="#" className="hover:text-white transition-colors">Terms</Link>
             <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
