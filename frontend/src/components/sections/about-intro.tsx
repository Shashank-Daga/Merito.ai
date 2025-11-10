"use client"

import { useState } from "react"
import { OurPeople } from "./our-people"

export function AboutIntro() {
  // const [activeValue, setActiveValue] = useState<string | null>(null)

  return (
    <>
      {/* Origin Section */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              Our <span className="text-[#EC2229]">Origin</span>
            </h1>
            <div className="w-16 h-1 bg-[#EC2229] mx-auto rounded-full"></div>
          </div>

          {/* Story Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Story Cards */}
            <div className="space-y-4">
              {[
                {
                  title: "Career Corner Foundation",
                  text: "The roots of Merito lie in Career Corner Education, which was set up with a vision to help individuals unlock their potential. Started as an education services company aimed at helping students and professionals make the RIGHT career decisions.",
                },
                {
                  title: "Merito Launch",
                  text: "Career Corner ventured into recruitment services in 2021 with its curated talent platform Merito. Since then, Merito has worked closely with more than 50 companies to help them hire quality talent for roles across levels.",
                },
                {
                  title: "Merito.ai Era",
                  text: "We realized the need for leveraging technology to transform people functions and that's how Merito.ai was born. We support organizations in the growth phase by streamlining their recruitment, improving employee engagement, skill mapping, and performance management.",
                },
              ].map((item, idx) => (
                <StoryCard key={idx} title={item.title} text={item.text} index={idx} />
              ))}
            </div>

            {/* Right: Timeline */}
            <div className="relative">
              <TimelineVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Mission <span className="text-[#EC2229]">&</span> Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: "Mission",
                icon: "🎯",
                text: "To empower individuals and organizations to reach their full potential through exceptional talent services.",
                color: "from-blue-50 to-blue-100",
                borderColor: "border-blue-200",
                textColor: "text-blue-900",
              },
              {
                label: "Vision",
                icon: "🚀",
                text: "To become a leader in talent services that enable individual and organizational growth.",
                color: "from-purple-50 to-purple-100",
                borderColor: "border-purple-200",
                textColor: "text-purple-900",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl border-2 ${item.borderColor} bg-gradient-to-br ${item.color} p-8 transition-all duration-500 hover:shadow-lg hover:scale-105 cursor-pointer`}
              >
                <div className="absolute top-0 right-0 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 translate-x-2 -translate-y-2">
                  {item.icon}
                </div>

                <h3 className={`text-2xl font-bold ${item.textColor} mb-4`}>{item.label}</h3>
                <p className={`${item.textColor} text-lg leading-relaxed`}>{item.text}</p>

                {/* Animated accent line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#EC2229] to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              Our <span className="text-[#EC2229]">Values</span>
            </h2>
            <p className="text-foreground/60 text-lg">The principles that guide every decision we make</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Identity",
                desc: "Every individual and organization is unique. True success comes from embracing that uniqueness.",
                icon: "✨",
              },
              {
                title: "Innovation",
                desc: "We bring fresh thinking and smarter processes to transform talent discovery and hiring.",
                icon: "💡",
              },
              {
                title: "Integrity",
                desc: "We act with honesty and transparency in every decision.",
                icon: "🤝",
              },
              {
                title: "Intelligence",
                desc: "Smarter hiring through human expertise and technology.",
                icon: "🧠",
              },
              {
                title: "Inclusivity",
                desc: "We value diversity and ensure equal opportunities for all talent to thrive.",
                icon: "🌍",
              },
            ].map((item, index) => (
              <ValueCard key={index} title={item.title} desc={item.desc} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              Our <span className="text-[#EC2229]">Approach</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              We combine human expertise with intelligent technology to make hiring smarter, faster, and more reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hiring Insight",
                desc: "Years of hiring knowledge and industry understanding help us identify candidates who truly fit your needs.",
                gradient: "from-teal-500 to-cyan-600",
                number: "01",
              },
              {
                title: "Smart Sourcing",
                desc: "Our AI tools accelerate sourcing and shortlisting, letting experts focus on the right candidates.",
                gradient: "from-blue-500 to-indigo-600",
                number: "02",
              },
              {
                title: "Expert Judgment",
                desc: "Human expertise ensures every recommendation aligns with your organization's culture and long-term goals.",
                gradient: "from-purple-500 to-pink-600",
                number: "03",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white border border-border/40 p-8 transition-all duration-500 hover:border-[#EC2229]/30 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors duration-500">
                  {item.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-[#EC2229] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {item.desc}
                  </p>

                  {/* Animated accent */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#EC2229] to-transparent group-hover:w-12 transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our People */}
      <OurPeople />
    </>
  )
}

function StoryCard({
  title,
  text,
  index,
}: {
  title: string
  text: string
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-xl border-2 border-border/40 bg-card p-6 transition-all duration-300 hover:border-[#EC2229]/50 hover:shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute left-0 top-0 h-full w-1 bg-[#EC2229] transition-all duration-500 ${
          isHovered ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ transformOrigin: "top" }}
      ></div>

      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EC2229]/10 font-bold text-[#EC2229]">
            {index + 1}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
          <p className="text-foreground/70 leading-relaxed text-sm">{text}</p>
        </div>
      </div>
    </div>
  )
}

function TimelineVisualization() {
  const timelineItems = [
    { year: "2015", title: "Career Corner established" },
    { year: "2021", title: "Merito launched as curated talent platform" },
    { year: "2023", title: "Merito.ai is launched in its current form" },
  ]

  return (
    <div className="relative">
      {timelineItems.map((item, idx) => (
        <div key={idx} className="flex gap-6 mb-12 last:mb-0">
          {/* Timeline dot */}
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#EC2229] to-red-600 flex items-center justify-center text-white font-bold shadow-lg transform hover:scale-125 transition-transform duration-300">
              {idx + 1}
            </div>
            {idx < timelineItems.length - 1 && (
              <div className="w-1 h-16 bg-gradient-to-b from-[#EC2229] to-[#EC2229]/30 mt-2"></div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pt-2">
            <p className="text-3xl font-bold text-[#EC2229] mb-1">{item.year}</p>
            <p className="text-foreground/70 text-lg">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ValueCard({
  title,
  desc,
  icon,
}: {
  title: string
  desc: string
  icon: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-border/40 bg-card p-6 transition-all duration-500 hover:shadow-lg hover:border-[#EC2229]/30 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#EC2229]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#EC2229] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
          {desc}
        </p>
      </div>

      {/* Top accent line animation */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#EC2229] to-transparent group-hover:w-full transition-all duration-700"></div>
    </div>
  )
}
