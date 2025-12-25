"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

const industries = [
  "Finance & Banking",
  "Healthcare & Life Sciences",
  "Manufacturing & Engineering",
  "Operations & Logistics",
  "Sales & Marketing",
  "Technology & IT",
]

const TalentSection: React.FC = () => {
  useRevealAnimation({ stagger: true })

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-start">
        {/* Left Text Block */}
        <div className="reveal-element">
          <h2 className="text-5xl font-semibold text-gray-900 mb-4">
            <span className="text-[#EC2229]">Industries</span> We Serve
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Connecting the right people to the roles that matter across every industry.
          </p>
          <Link href="/talent">
            <Button variant="foreground" className="px-8 py-6 text-lg">
              Know more
            </Button>
          </Link>
        </div>

        {/* Right Animated Industry List */}
        <div>
          {industries.map((industry, index) => (
            <AnimatedIndustry key={industry} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedIndustry({
  industry,
  index,
}: {
  industry: string
  index: number
}) {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = index * 200
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

  const hash = industry.toLowerCase().replace(/[^a-z0-9]+/g, "-")

  return (
    <Link href={`/customers#${hash}`}>
      <p
        ref={ref}
        className={`text-2xl font-semibold text-gray-900 cursor-pointer transition-all duration-700 transform mb-6
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          hover:text-[#EC2229] hover:scale-105`}
      >
        {industry}
      </p>
    </Link>
  )
}

export default TalentSection
