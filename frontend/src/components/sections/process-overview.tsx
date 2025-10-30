"use client"

import { useRevealAnimation } from "@/hooks/useRevealAnimation"

// Replace your existing component with this
export function ProcessOverview() {
  useRevealAnimation({ stagger: true })

  const steps = [
    {
      title: "Role Benchmarking",
      desc: "Define key success factors and must-haves for each role.",
    },
    {
      title: "Talent Mapping",
      desc: "Identify the talent landscape to ensure we reach every suitable candidate.",
    },
    {
      title: "Smart AI Sourcing",
      desc: "Leverage AI to shortlist only the top 2% of candidates.",
    },
    {
      title: "Rigorous Evaluation",
      desc: "Assess skills, culture fit, and overall alignment using our proprietary framework.",
    },
    {
      title: "Calibrated Interviews",
      desc: "Present only the most qualified candidates for client interviews, ensuring precision.",
    },
    {
      title: "Continuous Feedback",
      desc: "Refine recommendations and sourcing based on outcomes to improve every hire.",
    },
  ]

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <h2 className="reveal-element text-4xl md:text-5xl font-semibold text-center text-merito-deep">
          Hiring Top 2% Talent, <span className="text-[#EC2229]">Every Time</span>
        </h2>
        <div className="text-center mb-12">
          <p className="reveal-element mt-3 text-gray-700">A streamlined approach that expedites hiring while ensuring the perfect fit.</p>
        </div>

        {/* Columns: use divide-x for thin vertical dividers that span the grid's height */}
        <div
          className="reveal-element grid grid-cols-1 md:grid-cols-6 divide-x divide-black group"
          // give a minimum height so the dividers extend below the copy (matches reference)
          style={{ minHeight: '360px' }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-6 py-8 cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105 hover:-translate-y-4"
            >
              <div className="max-w-[260px]">
                {/* Heading: heavy, uppercase */}
                <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-wider text-merito-deep mb-4 transition-colors duration-300 hover:text-merito-teal">
                  {step.title}
                </h3>

                {/* Body: constrained width and comfortable leading */}
                <p className="text-sm md:text-base text-gray-700 leading-7 transition-colors duration-300 hover:text-gray-900">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
