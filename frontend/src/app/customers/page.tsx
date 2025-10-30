"use client"

import { SuccessStories } from "@/components/sections/success-stories"
import { OurImpact } from "@/components/sections/our-impact"
import { CTA } from "@/components/sections/cta"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

export default function CustomersPage() {
  useRevealAnimation({ stagger: true })

  return (
    <>
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-primary to-accent-foreground">
        <div className="mx-auto max-w-7xl text-center text-foreground">
          <h1 className="reveal-element text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Our Customers
          </h1>
          <p className="reveal-element text-xl max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders across sectors, we deliver exceptional talent solutions that drive success.
          </p>
          <div className="reveal-element mt-8 flex justify-center">
            <div className="w-24 h-1 bg-accent-foreground rounded-full"></div>
          </div>
        </div>
      </section>
      <SuccessStories />
      <OurImpact />
      <CTA />
    </>
  )
}
