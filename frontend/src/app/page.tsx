"use client"

import { Hero } from "@/components/sections/hero"
import { Approach } from "@/components/sections/approach"
import { Metrics } from "@/components/sections/metrics"
import { TrustedCompanies } from "@/components/sections/trusted-companies"
import TalentSection from "@/components/sections/talent-section"
import WhyChooseUs from "@/components/sections/why-choose-us"
import { CTA } from "@/components/sections/cta"
import TrustedHiringPartner from "@/components/sections/trusted-hiring-partner"

interface CalendlyWidget {
  initPopupWidget: (options: { url: string }) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget
  }
}

export default function HomePage() {
  const handleBookCall = () => {
    try {
      console.log('Opening Calendly in new tab');
      window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, '_blank');
    } catch (error) {
      console.error('Error opening Calendly:', error);
      alert('Failed to open scheduling page. Please contact us directly.');
    }
  }

  return (
    <>
      <Hero onBookCall={handleBookCall} />
      <Metrics />
      <TrustedCompanies />
      <TrustedHiringPartner />
      <Approach />
      <TalentSection />
      <WhyChooseUs />
      <CTA onBookCall={handleBookCall} />
    </>
  )
}
