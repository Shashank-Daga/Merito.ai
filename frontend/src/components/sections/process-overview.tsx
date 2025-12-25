"use client"

import { useEffect, useRef, useState } from "react"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

export function ProcessOverview() {
  useRevealAnimation({ stagger: true })

  const steps = [
    { title: "Role Benchmarking", desc: "Define key success factors and must-haves for each role." },
    { title: "Talent Mapping", desc: "Identify the talent landscape to ensure we reach every suitable candidate." },
    { title: "Smart AI Sourcing", desc: "Leverage AI to shortlist only the top 2% of candidates." },
    { title: "Rigorous Evaluation", desc: "Assess skills, culture fit, and overall alignment using our proprietary framework." },
    { title: "Calibrated Interviews", desc: "Present only the most qualified candidates for client interviews, ensuring precision." },
    { title: "Continuous Feedback", desc: "Refine recommendations and sourcing based on outcomes to improve every hire." },
  ]

  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <h2 className="reveal-element text-4xl md:text-5xl font-semibold text-center text-merito-deep mb-4">
          Our Hiring Process, <span className="text-[#EC2229]">Simplified</span>
        </h2>
        <div className="text-center mb-12">
          <p className="reveal-element mt-3 text-gray-700">
            A streamlined approach that expedites hiring while ensuring the perfect fit.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-6">
          {steps.map((step, index) => (
            <AnimatedStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedStep({
  step,
  index,
}: {
  step: { title: string; desc: string }
  index: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = index * 200 // staggered reveal
            setTimeout(() => setVisible(true), delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border-2 border-secondary/20 bg-gradient-to-br from-card via-card/50 to-secondary/5 backdrop-blur p-6 overflow-hidden hover-lift transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-lg hover:border-accent/50
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Subtle hover gradient overlay */}

      <div className="relative z-10 text-center">
        <div className="mb-5 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#EC2229]/10 text-sm font-bold text-[#EC2229]">
          {index + 1}
        </div>
        <h3 className="mt-2 text-lg font-semibold text-primary">{step.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80 hover:text-gray-800">{step.desc}</p>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-transparent group-hover:h-2 transition-all duration-300" />
    </div>
  )
}
