"use client"

import React from "react"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

const comparisonData = [
  {
    traditional: "Manual processes, gut-feel decisions",
    merito: "AI + Human Intelligence + Expert Oversight",
    inHouse: "Process-driven but limited reach",
  },
  {
    traditional: "45–60 days to hire",
    merito: "Under 20 days",
    inHouse: "30–45 days",
  },
  {
    traditional: "Variable candidate fit",
    merito: "90%+ Fit Score",
    inHouse: "Moderate fit",
  },
  {
    traditional: "Generic candidate pipeline",
    merito: "Contextual + Curated + Expanded Network",
    inHouse: "Internal + Referral-based pipeline",
  },
  {
    traditional: "Limited domain knowledge",
    merito: "Expert-led across domains",
    inHouse: "Functional understanding",
  },
  {
    traditional: "Minimal technology adoption",
    merito: "AI-powered sourcing & evaluation",
    inHouse: "Basic ATS use",
  },
  {
    traditional: "Unpredictable costs",
    merito: "Flexible & outcome-based",
    inHouse: "High fixed costs",
  },
]

const WhyChooseUs: React.FC = () => {
  useRevealAnimation({ stagger: true })

  return (
    <section className="bg-secondary py-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <h2 className="reveal-element text-3xl md:text-4xl font-semibold text-[#121212] text-center mb-12">
          Why Choose Us
        </h2>

        {/* Comparison Table */}
        <div className="reveal-element grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Traditional Hiring Column */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Traditional Hiring</h3>
            <div className="divide-y divide-gray-200">
              {comparisonData.map((item, index) => (
                <div key={index} className="py-4 text-center">
                  <p className="text-gray-700">{item.traditional}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Merito Column */}
          <div className="bg-[#B3D3D1] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-2 border-[#00ADEF]">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center"><span className="text-[#EC2229]">M</span>erito</h3>
            <div className="divide-y divide-gray-200">
              {comparisonData.map((item, index) => (
                <div key={index} className="py-4 text-center">
                  <p className="text-black font-medium">{item.merito}</p>
                </div>
              ))}
            </div>
          </div>

          {/* In-House Hiring Column */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">In-House Hiring</h3>
            <div className="divide-y divide-gray-200">
              {comparisonData.map((item, index) => (
                <div key={index} className="py-4 text-center">
                  <p className="text-foreground font-medium">{item.inHouse}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
