"use client"

import { Articles } from "@/components/sections/articles"
import { CTA } from "@/components/sections/cta"
import { Podcasts } from "@/components/sections/podcasts"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

export default function InsightsPage() {
  useRevealAnimation({ stagger: true })

  return (
    <>
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl text-center text-foreground">
          <h1 className="reveal-element text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Insights
          </h1>
          <p className="reveal-element text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the latest trends, strategies, and stories shaping the future of talent acquisition and business growth.
          </p>
          <div className="reveal-element mt-8 flex justify-center">
            <div className="w-24 h-1 bg-accent-foreground rounded-full"></div>
          </div>
        </div>
      </section>
      <Articles />
      <Podcasts />
      <CTA />
    </>
  )
}
