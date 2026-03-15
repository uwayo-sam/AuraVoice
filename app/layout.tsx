import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://auravoice.ai'),
  title: {
    default: "AuraVoice | 24/7 AI Voice Agents for Home Services",
    template: "%s | AuraVoice"
  },
  description: "Stop losing leads to voicemail. AuraVoice provides 24/7 AI Voice Agents for Electricians, Plumbers, HVAC, and Roofers to book jobs and route emergencies instantly.",
  keywords: ["AI Voice Agent", "Home Services AI", "Plumber Answering Service", "Electrician AI", "HVAC Lead Generation", "Automated Call Handling"],
  authors: [{ name: "AuraVoice Team" }],
  creator: "AuraVoice",
  publisher: "AuraVoice Intelligence",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "YOUR_GSC_VERIFICATION_CODE_HERE", // Replace with your code from Search Console
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://auravoice.ai",
    siteName: "AuraVoice",
    title: "AuraVoice | AI Agents for Home Services",
    description: "24/7 AI Voice Agents for Electricians, Plumbers, HVAC, and Roofers. Never miss a call again.",
    images: [
      {
        url: "/AuraLogo.svg",
        width: 1200,
        height: 630,
        alt: "AuraVoice AI Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraVoice | AI Agents for Home Services",
    description: "24/7 AI Voice Agents for the trades. Stop missing calls, start booking jobs.",
    images: ["/AuraLogo.svg"],
  },
  icons: {
    icon: [
      { url: "/AuraIcon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/AuraIcon.svg",
    apple: "/AuraIcon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
