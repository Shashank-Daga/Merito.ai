"use client"

import { useRevealAnimation } from "@/hooks/useRevealAnimation"

export function AboutIntro() {
  useRevealAnimation({ stagger: true })

  return (
    <>
      <section className="bg-secondary pb-16">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
          {/* Our Origin */}
          <div className="text-center mb-16">
            <h1 className="reveal-element text-3xl md:text-4xl font-semibold">
              Our <span className="text-[#EC2229]">Origin</span>
            </h1>
          </div>

          {/* The Merito Story */}
          <div className="reveal-element grid grid-cols-1 md:grid-cols-2 gap-12 items-center ml-29">
            {/* Left Text Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {/* <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#121212]">
                The <span className="text-[#EC2229]">Merito Story</span>
              </h2> */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                The roots of Merito lie in Career Corner Education, which was set up with a vision to help individuals
                unlock their potential. Started as an education services company aimed at helping students and
                professionals make the RIGHT career decisions, Career Corner ventured into recruitment services in 2021
                with its curated talent platform Merito. Since then, Merito has worked closely with more than 50
                companies to help them hire quality talent for roles across levels.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We realized the need for leveraging technology to transform people functions not just for hiring but
                also for retaining and developing talent — and that&apos;s how <b>Merito.ai</b> was born. We support
                organizations in the growth phase by streamlining their recruitment, improving employee engagement,
                skill mapping, performance management, and much more.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Under our Hub platform, we help educational institutions train their students for entrepreneurship and
                employment. Our programs such as <b>C2C</b> and <b>EDP</b> have helped thousands of students find the
                right job.
              </p>
            </div>

            {/* Right Timeline Section */}
            <div className="relative">
              {/* Continuous Vertical Line */}
              <div
                className="absolute left-0 w-1"
                style={{
                  top: '12px',
                  height: 'calc(100% - 12px)',
                  right: '50px',
                  background: `
                    linear-gradient(to bottom, #EC2229 20%, transparent 20%),
                    linear-gradient(to bottom, transparent 0%, transparent 10%, #EC2229 10%, #EC2229 20%, transparent 20%),
                    linear-gradient(to bottom, #EC2229 40%, transparent 40%),
                    linear-gradient(to bottom, transparent 0%, transparent 10%, #EC2229 10%, #EC2229 20%, transparent 20%),
                    linear-gradient(to bottom, #EC2229 60%, transparent 60%)
                  `,
                  backgroundSize: '60% 20px',  // Controls the height of each segment
                  backgroundPosition: 'top, top, top, top, top',
                  backgroundRepeat: 'repeat-y'
                }}
              ></div>

              <div className="pl-10">
                {[
                  { year: "2015", title: "Career Corner established" },
                  { year: "2021", title: "Merito launched as curated talent platform" },
                  { year: "2023", title: "Merito.ai is launched in its current form" },
                ].map((item, idx) => (
                  <div key={idx} className={`relative ${idx !== 2 ? 'mb-12 pb-4' : ''}`}>
                    {/* Timeline Circle Dot */}
                    <div
                      className="absolute bg-white rounded-full border-[2.5px] border-[#EC2229]"
                      style={{
                        left: '-55px',
                        top: '8px',
                        width: '20px',
                        height: '20px'
                      }}
                    ></div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#EC2229] mb-2">{item.year}</h3>
                      <p className="text-gray-700 text-base leading-relaxed">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-element max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {/* <span className="inline-block bg-[#FDE0E0] text-[#EC2229] text-sm font-medium px-4 py-1 rounded-full mb-3">
              Mission
            </span> */}
            <h2 className="text-2xl md:text-3xl text-center font-semibold text-[#121212] mb-2">Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              &quot;To empower individuals and organizations to reach their full potential through exceptional talent
              services.&quot;
            </p>
          </div>

          <div>
            {/* <span className="inline-block bg-[#FDE0E0] text-[#EC2229] text-sm font-medium px-4 py-1 rounded-full mb-3">
              Vision
            </span> */}
            <h2 className="text-2xl md:text-3xl text-center font-semibold text-[#121212] mb-2">Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              &quot;To become a leader in talent services that enable individual and organizational growth.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="reveal-element text-3xl md:text-4xl font-semibold text-balance">
              Our <span className="text-[#EC2229]">Values</span>
            </h1>
          </div>

          <div className="reveal-element grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Identity",
                desc: "Every individual and organization is unique. True success comes from embracing that uniqueness.",
              },
              {
                title: "Innovation",
                desc: "We bring fresh thinking and smarter processes to transform talent discovery and hiring.",
              },
              {
                title: "Integrity",
                desc: "We act with honesty and transparency in every decision.",
              },
              {
                title: "Intelligence",
                desc: "Smarter hiring through human expertise and technology.",
              },
              {
                title: "Inclusivity",
                desc: "We value diversity and ensure equal opportunities for all talent to thrive.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach (kept as-is) */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
          <div className="text-center text-[#121212]">
            <h1 className="reveal-element text-3xl md:text-4xl font-semibold text-balance">
              Our <span className="text-[#EC2229]">Approach</span>
            </h1>
            <p className="reveal-element mt-4 leading-relaxed text-pretty max-w-3xl mx-auto">
              We combine human expertise with intelligent technology to make hiring smarter, faster, and more reliable.
            </p>

            <div className="reveal-element mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
              <div className="bg-[#004250] p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-bold  mb-2">Hiring Insight</h3>
                <p>
                  Years of hiring knowledge and industry understanding help us identify candidates who truly fit your needs.
                </p>
              </div>
              <div className="bg-[#004250] p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-bold mb-2">Smart Sourcing</h3>
                <p>
                  Our AI tools accelerate sourcing and shortlisting, letting experts focus on the right candidates.
                </p>
              </div>
              <div className="bg-[#004250] p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-bold mb-2">Expert Judgment</h3>
                <p>
                  Human expertise ensures every recommendation aligns with your organization’s culture and long-term goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
