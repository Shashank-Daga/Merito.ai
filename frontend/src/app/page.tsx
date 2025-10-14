"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Hero } from "@/components/sections/hero"
import { Approach } from "@/components/sections/approach"
import { Metrics } from "@/components/sections/metrics"
import { TrustedCompanies } from "@/components/sections/trusted-companies"
import TalentSection from "@/components/sections/talent-section"
import WhyChooseUs from "@/components/sections/why-choose-us"
import { CTA } from "@/components/sections/cta"
import ScheduleCallSection from "@/components/ScheduleCallSection"

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBookCall = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <Hero onBookCall={handleBookCall} />
      <Metrics />
      <TrustedCompanies />
      <Approach />
      <TalentSection />
      <WhyChooseUs />
      <CTA onBookCall={handleBookCall} />

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ScheduleCallSection />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
