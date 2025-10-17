"use client"

import React from "react"
import Link from "next/link"

const TalentSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              <span className="text-[#EC2229]">Talent</span> Without Boundaries
              <Link href="/talent" className="text-foreground ml-2 inline-flex items-center hover:text-accent transition-colors">
                <span>→</span>
              </Link>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Connecting the right people to the roles that matter across every industry.
            </p>
          </div>

          {/* <div className="rounded-xl border bg-card p-4 md:p-6"> */}
            <div className="aspect-[6/3] w-full overflow-hidden rounded-lg border bg-muted">
              <img
                src="/talent1.jpg"
                alt="Recruiting team collaborating during interviews"
                className="h-full w-full object-cover"
              />
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default TalentSection
