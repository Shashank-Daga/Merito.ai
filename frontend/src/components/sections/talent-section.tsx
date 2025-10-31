"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRevealAnimation } from "../../hooks/useRevealAnimation"

const industries = [
  "Consumer",
  "Financial Services",
  "Pharma & Healthcare",
  "Industrials",
  "Infrastructure & Energy",
  "Offshoring",
  "Technology",
]

const TalentSection: React.FC = () => {
  useRevealAnimation({ stagger: true })

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-start">
        {/* Left Text Block */}
        <div>
          <h2 className="text-5xl font-semibold text-gray-900 mb-4">
            <span className="text-[#EC2229]">Industries</span> We Serve
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Connecting the right people to the roles that matter across every industry.
          </p>
          <Link href="/talent">
            <Button className="bg-[#EC2229] hover:bg-[#b61a20] text-white px-8 py-6 rounded-lg text-lg">
              Know more
            </Button>
          </Link>
        </div>

        {/* Right List */}
        <div className="space-y-4">
          {[
            "Consumer",
            "Financial Services",
            "Pharma & Healthcare",
            "Industrials",
            "Infrastructure & Energy",
            "Offshoring",
            "Technology",
          ].map((industry) => (
            <p key={industry} className="text-2xl font-semibold text-gray-900">
              {industry}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TalentSection
