"use client"

import { useEffect, useRef, useState } from "react"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

type Metric = { label: string; value: number; suffix?: string; duration?: number }

const METRICS: Metric[] = [
  { label: "Specialists hired", value: 1000, suffix: "+" },
  { label: "Avg. time-to-hire (days)", value: 20 },
  { label: "Clients served", value: 50, suffix: "+" },
  { label: "Hiring accuracy", value: 90, suffix: "%" },
]

export function Metrics() {
  useRevealAnimation({ stagger: true })

  return (
    <section className="relative bg-secondary overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20 text-center">
        <h2 className="reveal-element text-2xl md:text-3xl font-semibold text-balance text-[#121212]">
          <span className="text-[#EC2229]">Impact</span> in Numbers
        </h2>

        <div className="reveal-element mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {METRICS.map((m, index) => (
            <CounterCard key={m.label} metric={m} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CounterCard({ metric, index }: { metric: Metric; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = index * 600
            setTimeout(() => setVisible(true), delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  useEffect(() => {
    if (!visible) return
    const duration = metric.duration ?? 900
    const start = performance.now()
    const from = 0
    const to = metric.value
    let raf = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(from + (to - from) * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, metric.value, metric.duration])

  return (
    <div
      ref={ref}
      className={`
        relative rounded-xl p-6
        bg-gradient-to-br from-[#004250] to-[#00323d]
        border border-white/10
        transition-all duration-500 ease-out
        hover:-translate-y-2
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Accent glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#EC2229]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 text-4xl font-bold text-white tracking-tight">
        {value}
        {metric.suffix || ""}
      </div>

      <div className="relative z-10 mt-2 text-sm text-white/80">
        {metric.label}
      </div>
    </div>
  )
}
