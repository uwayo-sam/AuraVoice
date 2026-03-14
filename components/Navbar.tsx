"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/AuraLogo.svg" 
            alt="AuraVoice" 
            width={160} 
            height={40} 
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</Link>
          <Link href="/case-studies" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Results</Link>
          <Link href="/about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</Link>
          <Link href="/faq" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">FAQ</Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</Link>
          <Link href="/contact" className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0A0A0B] border-b border-white/10 p-8 flex flex-col gap-6 shadow-2xl">
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium">Services</Link>
          <Link href="/case-studies" onClick={() => setIsOpen(false)} className="text-lg font-medium">Results</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="text-lg font-medium">FAQ</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">Pricing</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-accent text-white px-6 py-4 rounded-xl text-center font-bold">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
