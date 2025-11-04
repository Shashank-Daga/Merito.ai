"use client"

import { Button } from "@/components/ui/button"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

interface HeroProps {
  onBookCall: () => void
}

export function Hero({ onBookCall }: HeroProps) {
  useRevealAnimation({ stagger: true })

  return (
    <section className="relative h-[90vh] flex items-center justify-start overflow-hidden bg-secondary">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-6 md:px-12">
        <div className="max-w-xl">
          <h1
            className="reveal-element text-4xl md:text-5xl font-semibold text-balance text-white"
            style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 800 }}
          >
            <span className="text-[#EC2229]">Expedite</span> Hiring
          </h1>

          <p className="reveal-element mt-4 text-white/90 leading-relaxed text-lg">
            Human expertise meets intelligent technology to expedite hiring <br /> and connect the right talent with the right role.
          </p>

          <div className="reveal-element mt-6 flex items-center gap-3">
            <Button size="lg" onClick={onBookCall}>
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
