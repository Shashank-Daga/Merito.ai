"use client"

import React from "react"
import { motion } from "framer-motion"

const ScheduleCallSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Schedule a Call with Merito
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss your hiring needs and show you how Merito connects you with top talent faster, smarter, and globally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <iframe
            src="https://kolander.com/merito/schedule"
            title="Schedule a Call with Merito"
            className="w-full h-[700px] md:h-[800px] border-0"
            allow="camera; microphone; calendar"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ScheduleCallSection
