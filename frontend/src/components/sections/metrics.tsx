"use client"

import { useEffect, useRef, useState } from "react"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

type Metric = { label: string; value: number; suffix?: string; duration?: number }

const METRICS: Metric[] = [
  { label: "Specialists hired", value: 1000, suffix: "+" },
  { label: "Avg. time-to-hire (days)", value: 15 },
  { label: "Clients served", value: 50, suffix: "+" },
  // { label: "Client satisfaction (NPS)", value: 74 },
  { label: "Hiring accuracy", value: 90, suffix: "%" },
]

export function Metrics() {
  useRevealAnimation({ stagger: true })

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 text-center">
        <h2 className="reveal-element text-2xl md:text-3xl font-semibold text-balance text-[#121212]"><span className="text-[#EC2229]">Impact</span> in Numbers</h2>
        <div className="reveal-element mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {METRICS.map((m) => (
            <CounterCard key={m.label} metric={m} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CounterCard({ metric }: { metric: Metric }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

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
    <div ref={ref} className="rounded-xl border bg-[#83b6b3] p-5">
      <div className="text-3xl font-semibold">
        {value}
        {metric.suffix || ""}
      </div>
      <div className="mt-1 text-sm text-foreground/70">{metric.label}</div>
    </div>
  )
}
