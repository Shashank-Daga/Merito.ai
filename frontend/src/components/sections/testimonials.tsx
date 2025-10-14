"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const DATA = [
  {
    quote:
      "Merito filled three senior engineering roles in under two weeks. Outstanding communication and candidate quality.",
    author: "CTO, Series B SaaS",
  },
  {
    quote: "Best recruiting partner we’ve worked with—aligned on needs, zero fluff, consistent results.",
    author: "Head of People, Fintech",
  },
  {
    quote: "The process was smooth and transparent. Hires are still thriving months later.",
    author: "COO, Healthtech",
  },
]

export function Testimonials() {
  const [idx, setIdx] = useState(0)
  const next = () => setIdx((i) => (i + 1) % DATA.length)
  const prev = () => setIdx((i) => (i - 1 + DATA.length) % DATA.length)

  const t = DATA[idx]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">
          Voices of <span className="text-[#EC2229]">Trust</span>
        </h2>
        <div className="rounded-2xl border bg-card p-6 md:p-10">
          <blockquote className="text-lg md:text-xl text-pretty">&ldquo;{t.quote}&rdquo;</blockquote>
          <div className="mt-4 text-sm text-foreground/70">— {t.author}</div>
          <div className="mt-6 flex items-center gap-3">
            <Button variant="secondary" size="sm" onClick={prev} aria-label="Previous testimonial">
              Prev
            </Button>
            <Button size="sm" onClick={next} aria-label="Next testimonial">
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
