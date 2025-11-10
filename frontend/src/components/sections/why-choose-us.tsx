"use client"

import { useState } from "react"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

const comparisonData = [
  {
    category: "Approach",
    traditional: "Manual processes, gut-feel decisions",
    merito: "AI + Human Intelligence + Expert Oversight",
    inHouse: "Process-driven but limited reach",
  },
  {
    category: "Timeline",
    traditional: "45–60 days to hire",
    merito: "Under 20 days",
    inHouse: "30–45 days",
  },
  {
    category: "Quality",
    traditional: "Variable candidate fit",
    merito: "90%+ Fit Score",
    inHouse: "Moderate fit",
  },
  {
    category: "Pipeline",
    traditional: "Generic candidate pipeline",
    merito: "Contextual + Curated + Expanded Network",
    inHouse: "Internal + Referral-based pipeline",
  },
  {
    category: "Expertise",
    traditional: "Limited domain knowledge",
    merito: "Expert-led across domains",
    inHouse: "Functional understanding",
  },
  {
    category: "Technology",
    traditional: "Minimal technology adoption",
    merito: "AI-powered sourcing & evaluation",
    inHouse: "Basic ATS use",
  },
  {
    category: "Costs",
    traditional: "Unpredictable costs",
    merito: "Flexible & outcome-based",
    inHouse: "High fixed costs",
  },
]

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<"traditional" | "inHouse" | "merito">("merito")

  return (
    <section className="bg-secondary py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="reveal-element text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Why Choose Us</h2>
          <p className="reveal-element text-lg text-foreground/70 text-balance">
            See how we outperform traditional hiring and in-house teams across every dimension
          </p>
        </div>

        <div className="reveal-element flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab("traditional")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === "traditional"
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-muted text-foreground hover:bg-muted/80"
              }`}
          >
            Traditional Hiring
          </button>
          <button
            onClick={() => setActiveTab("merito")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === "merito"
                ? "bg-destructive text-destructive-foreground shadow-md scale-105"
                : "bg-muted text-foreground hover:bg-muted/80"
              }`}
          >
            Merito
          </button>
          <button
            onClick={() => setActiveTab("inHouse")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === "inHouse"
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-muted text-foreground hover:bg-muted/80"
              }`}
          >
            In-House Hiring
          </button>
        </div>

        <div className="space-y-3">
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="reveal-element group rounded-lg border border-border p-5 hover:border-primary/60 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4 md:gap-6">
                {/* Category Label */}
                <div className="flex-shrink-0 w-24 md:w-32">
                  <span className="text-sm font-bold text-primary uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>

                {/* Comparison View */}
                <div className="text-center flex-1 grid md:grid-cols-3 gap-4">
                  {/* Traditional */}
                  <div
                    className={`p-3 rounded-lg transition-all duration-300 ${activeTab === "traditional"
                        ? "bg-primary/15 border border-primary/50"
                        : "bg-muted/50 opacity-70 group-hover:opacity-90"
                      }`}
                  >
                    <p className="text-sm text-foreground">{item.traditional}</p>
                  </div>

                  {/* Merito */}
                  <div
                    className={`p-3 rounded-lg transition-all duration-300 ${activeTab === "merito"
                        ? "bg-destructive/10 border border-destructive/30"
                        : "bg-muted/50 opacity-70 group-hover:opacity-90"
                      }`}
                  >
                    <p className="text-sm font-medium text-foreground">{item.merito}</p>
                  </div>

                  {/* In-House */}
                  <div
                    className={`p-3 rounded-lg transition-all duration-300 ${activeTab === "inHouse"
                        ? "bg-primary/15 border border-primary/50"
                        : "bg-muted/50 opacity-70 group-hover:opacity-90"
                      }`}
                  >
                    <p className="text-sm text-foreground">{item.inHouse}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
