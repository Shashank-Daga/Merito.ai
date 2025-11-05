"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const techRoles = [
  "CTO", "Product Managers", "Back End Developer", "VP Product",
  "Full Stack Engineer", "React Native Developer", "Java Programmer",
  "Data Engineer", "Tech Lead", "Data Scientist", "Android & iOS Developer",
  "QA Engineer / Lead", "Front End Developer", "Blockchain Developer",
  "Node.js Programmer", "DevOps",
]

const nonTechRoles = [
  "UI/UX Designer", "Project Manager", "Creative Director", "Customer Service Head",
  "Digital Marketing Manager", "Business Dev.", "Content Editors / Writers",
  "HR Head / Manager", "Business Head", "Ad Sales Manager", "Sales Director",
  "Key Account Manager", "SEO Manager", "Head Finance", "SEM Head", "Category Manager / Head",
]

export default function TalentPage() {
  const [activeTab, setActiveTab] = useState<"tech" | "nontech" | "all">("all")

  const handleBookCall = () => {
    try {
      window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, "_blank")
    } catch (error) {
      alert("Failed to open scheduling page. Please contact us directly.")
    }
  }

  const roles =
    activeTab === "all"
      ? [...techRoles, ...nonTechRoles]
      : activeTab === "tech"
      ? techRoles
      : nonTechRoles

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03, duration: 0.4 },
    }),
  }

  return (
    <div className="min-h-screen bg-secondary relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Back to Home */}
        <div className="mb-4">
          <Link href="/" className="text-[#004250] font-semibold hover:underline">← Back</Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-semibold text-[#002c3e]"
          >
            Explore Roles We Hire For
          </motion.h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            From technical specialists to business leaders, discover how Merito connects you with talent that drives real results.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {["all", "tech", "nontech"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#004250] text-white shadow-md"
                  : "bg-white text-[#004250] border border-[#004250]/20 hover:bg-[#004250]/10"
              }`}
            >
              {tab === "all" ? "All Roles" : tab === "tech" ? "Tech Roles" : "Non-Tech Roles"}
            </button>
          ))}
        </div>

        {/* Animated Role Cloud */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          <AnimatePresence>
            {roles.map((role, i) => (
              <motion.div
                key={role}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                custom={i}
                whileHover={{
                  scale: 1.07,
                  backgroundColor: "#004250",
                  color: "#fff",
                  boxShadow: "0px 4px 12px rgba(0, 66, 80, 0.3)",
                }}
                className="px-4 py-2 rounded-full bg-white text-[#004250] border border-[#004250]/20 shadow-sm cursor-pointer transition-all duration-300"
              >
                {role}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* "And many more" tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: roles.length * 0.03 + 0.5,
              duration: 0.8,
            }}
            className="px-5 py-2 rounded-full bg-[#004250]/10 text-[#004250] font-medium border border-[#004250]/20 italic"
          >
            ...and many more
          </motion.div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-20">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleBookCall}
            className="bg-[#004250] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Book a Discovery Call
          </motion.button>
        </div>
      </div>
    </div>
  )
}
