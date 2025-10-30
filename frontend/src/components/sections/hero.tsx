"use client"

import { Button } from "@/components/ui/button"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

interface HeroProps {
  onBookCall: () => void
}

export function Hero({ onBookCall }: HeroProps) {
  useRevealAnimation({ stagger: true })

  return (
    <section className="bg-[url('/home_page_banner.jpg')] bg-cover bg-center bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-32 md:py-42">
        <div className="grid items-center gap-10">
          <div className="text-black">
            <h1 className="reveal-element text-4xl md:text-5xl font-semibold text-balance" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 800 }}>
              <span className="text-[#EC2229]">Expedite</span> Hiring
            </h1>
            <p className="reveal-element mt-4 text-foreground leading-relaxed">
              Human expertise meets intelligent technology <br/>to expedite hiring and <br/>connect the right talent with the right role.
            </p>
            <div className="reveal-element mt-6 flex items-center gap-3">
              <Button size="lg" onClick={onBookCall}>
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
