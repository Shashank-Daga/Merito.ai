"use client"

import { motion } from "framer-motion"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

const DATA = [
  {
    quote:
      "We have worked with Merito for various roles across the levels and had a really good experience with them. They are a professional team, quick to act and incorporate our feedback to help us hire great candidates. There assessments helped us to ensure quality of hires.",
    author: "Dhyanesh Shah",
    position: "Co-founder",
    company: "Mosaic Wellness",
    color: "red",
    rotation: "-3deg",
  },
  {
    quote:
      "I am really impressed with the way Merito team has helped us with our hiring. From understanding our hiring needs to identifying the RIGHT fit candidates they have taken focused efforts which helped us to meet our hiring needs in time bound manner.",
    author: "Sameer Bhapkar",
    position: "DGM Corp Development",
    company: "Shyam Steel",
    color: "purple",
    rotation: "2deg",
  },
  {
    quote:
      "As a part of our growth we were looking to build strong our D2C presence and hire few key roles for the same. Merito helped us to hire leadership roles across Finance, Operations and Marketing. The time to hire for all these roles were simply amazing.",
    author: "Sneh Jain",
    position: "Co-founder",
    company: "The Bakers Dozen",
    color: "blue",
    rotation: "-2deg",
  },
  {
    quote:
      "As a growth company we are always searching for great talent. We were looking to hire key roles in our Tech and HR teams and thats when we were introduced to Merito. The Merito team with their assessment-driven recruitment helped us to engage with RIGHT candidates and close these positions in just 2 weeks.",
    author: "Darshan Teredesai",
    position: "Co-founder",
    company: "Olous App",
    color: "purple",
    rotation: "2deg",
  },
  {
    quote:
      "We loved how the leadership at Merito is aligned with our needs. The genuine intention and consistent follow up of the team has helped us with hiring.",
    author: "Anuja Kishore",
    position: "Cheif Corporate Development Officer",
    company: "Lighthouse",
    color: "blue",
    rotation: "-2deg",
  },
]

const duplicatedData = [...DATA, ...DATA]

export function Testimonials() {
  useRevealAnimation()

  return (
    <section className="bg-secondary py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="reveal-element text-4xl md:text-5xl font-semibold text-merito-deep mb-12">
          Voices of <span className="text-[#EC2229]">Trust</span>
        </h2>

        {/* Scrollable container */}
        <motion.div
          className="flex gap-8 pb-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedData.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`relative flex-shrink-0 snap-center bg-white rounded-2xl shadow-xl p-8 w-[320px] md:w-[360px] transition-transform duration-300`}
              style={{ rotate: t.rotation }}
            >
              {/* Push pin icon */}
              <div className="absolute -top-4 right-10">
                {t.color === "red" && (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="#EC2229">
                    <path d="M9 4l6 6-2 2-6-6 2-2zm7.5 1.5L12 10l-2-2 4.5-4.5a2.5 2.5 0 113.5 3.5zM4 13l7 7v-3l3-3-7-7-3 3v3z" />
                  </svg>
                )}
                {t.color === "blue" && (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="#2563eb">
                    <path d="M9 4l6 6-2 2-6-6 2-2zm7.5 1.5L12 10l-2-2 4.5-4.5a2.5 2.5 0 113.5 3.5zM4 13l7 7v-3l3-3-7-7-3 3v3z" />
                  </svg>
                )}
                {t.color === "purple" && (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="#8b5cf6">
                    <path d="M9 4l6 6-2 2-6-6 2-2zm7.5 1.5L12 10l-2-2 4.5-4.5a2.5 2.5 0 113.5 3.5zM4 13l7 7v-3l3-3-7-7-3 3v3z" />
                  </svg>
                )}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-base leading-relaxed text-gray-800 italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="text-left">
                  <div className="font-semibold text-merito-deep text-sm">{t.author}</div>
                  <div className="text-xs text-gray-600">{t.position}</div>
                  <div className="text-xs text-gray-600">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
