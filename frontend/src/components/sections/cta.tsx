"use client"

import { Button } from "@/components/ui/button"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

const onBookCall = () => {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/merito"
  window.open(url, "_blank")
}

export function CTA() {
  useRevealAnimation({ stagger: true })

  return (
    <section className="border-t bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">

        <div className="reveal-element border p-8 md:p-12 bg-white">
          <div className="grid items-center gap-6 md:grid-cols-3">

            <div className="md:col-span-2 text-black">
              <h2 className="text-2xl md:text-3xl font-semibold text-balance ">Consult Our Recruitment Expert</h2>
              <p className="mt-2">Get in touch with our team for your professionalized recruitment plan and hire highly qualified candidates.</p>
            </div>

            <div className="md:text-right md:justify-self-end">
              <Button size="lg" variant="foreground" onClick={onBookCall}>
                Book a Discovery Call
              </Button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}
