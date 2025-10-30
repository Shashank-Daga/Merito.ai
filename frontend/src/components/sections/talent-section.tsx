"use client"

import React from "react"
import Link from "next/link"
import { useRevealAnimation } from "../../hooks/useRevealAnimation"

const industries = [
  "Technology & IT",
  "Manufacturing & Engineering",
  "Healthcare & Life Sciences",
  "Finance & Banking",
  "Sales & Marketing",
  "Operations & Logistics",
]

const TalentSection: React.FC = () => {
  useRevealAnimation({ stagger: true })

  return (
    <section className="py-15 px-4 md:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <h2
          className="reveal-element text-4xl md:text-5xl font-semibold text-center text-merito-deep"
          tabIndex={0}
          aria-label="Industries We Serve"
        >
          <span className="text-[#EC2229]">Industries</span> We Serve
          <Link
            href="/talent"
            className="text-foreground ml-2 inline-flex items-center hover:text-accent transition-colors"
          >
            <span>→</span>
          </Link>
        </h2>

        <div className="text-center mb-12">
          <p
            className="reveal-element mt-3 text-gray-700"
            tabIndex={0}
            aria-label="Connecting the right people to the roles that matter across every industry."
          >
            Connecting the right people to the roles that matter across every industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {industries.map((industry) => (
            <div
              key={industry}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-lg font-medium text-foreground">{industry}</h3>
            </div>
          ))}
        </div>

        {/* #TODO: Add CTA button linking to "/talent" page */}
      </div>
    </section>
  )
}

export default TalentSection
