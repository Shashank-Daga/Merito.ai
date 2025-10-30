"use client"

import { Button } from "@/components/ui/button"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

interface CTAProps {
  onBookCall?: () => void
}

export function CTA({ onBookCall }: CTAProps) {
  useRevealAnimation({ stagger: true })

  return (
    <section className="border-t bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="reveal-element rounded-2xl border p-8 md:p-12 bg-[#004250]">
          <div className="grid items-center gap-6 md:grid-cols-3">
            <div className="md:col-span-2 text-white">
              <h2 className="text-2xl md:text-3xl font-semibold text-balance ">Consult Our Recruitment Expert</h2>
              <p className="mt-2">Get in touch with our team for your professionalized recruitment plan and hire highly qualified candidates.</p>
            </div>
            <div className="md:text-right">
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
