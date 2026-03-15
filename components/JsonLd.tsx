import React from 'react';

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AuraVoice",
    "url": "https://auravoice.ai",
    "logo": "https://auravoice.ai/AuraLogo.svg",
    "sameAs": [
      "https://twitter.com/auravoice",
      "https://linkedin.com/company/auravoice"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-000-0000",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AuraVoice AI Agent",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "description": "24/7 AI Voice Agent for home services like plumbing, HVAC, and electrical.",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Voice Answering Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AuraVoice",
      "image": "https://auravoice.ai/AuraLogo.svg"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "description": "Automated lead capture and job booking for trade professionals."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
