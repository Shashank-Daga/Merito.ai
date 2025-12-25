"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

export function OurImpact() {
  const clientsByType = {
    "Finance & Banking": [
      { name: "Equirus", logo: "/logos/Finance & Banking/Equirus.svg" },
      { name: "SimplyFI Softech", logo: "/logos/Finance & Banking/SimplyFi Softech1.png" },
    ],
    "Healthcare & Life Sciences": [
      { name: "Wadhwani", logo: "/logos/Edu/Wadhwani.webp" },
      { name: "Athena Education", logo: "/logos/Edu/Athena.png" },
    ],
    "Manufacturing & Engineering": [
      { name: "On2Cook", logo: "/logos/Manufacturing & Engg/on2cook.png" },
      { name: "Rekise Marine", logo: "/logos/Manufacturing & Engg/" },
      { name: "Shyam Steel", logo: "/logos/Manufacturing & Engg/Shyam Steel.jpg" },
      { name: "Sunlimited SolaR", logo: "/logos/Manufacturing & Engg/sunlimited.png" },
      { name: "Teertham", logo: "/logos/Manufacturing & Engg/Teertham.png" },
      { name: "Vadcore", logo: "/logos/Manufacturing & Engg/" },
    ],
    "Operations & Logistics": [
      { name: "ITP", logo: "/logos/Operations & Log/" },
      { name: "Mosaic", logo: "/logos/Operations & Log/Mosaic.png" },
      { name: "Panchshil Realty", logo: "/logos/Operations & Log/Panchshil.png" },
      { name: "ReCircle", logo: "/logos/Operations & Log/ReCircle.png" },
      { name: "Rekise Marine", logo: "/logos/Operations & Log/" },
    ],
    "Sales & Marketing": [
      { name: "Aza Fashions", logo: "/logos/Sales & Marketing/aza1.png" },
      { name: "Banjaras", logo: "/logos/Sales & Marketing/Banjaras.webp" },
      { name: "Collective Artists Network", logo: "/logos/Sales & Marketing/Collective Artists Network.svg" },
      { name: "Future Group", logo: "/logos/Sales & Marketing/future.webp" },
      { name: "GroupM", logo: "/logos/Sales & Marketing/groupM.png" },
      { name: "Interskale", logo: "/logos/Sales & Marketing/interskale.jpg" },
      { name: "Joyspoon", logo: "/logos/Sales & Marketing/joyspoon.avif" },
      { name: "Soulflower", logo: "/logos/Sales & Marketing/soulflower.avif" },
      { name: "The Baker's Dozen", logo: "/logos/Sales & Marketing/Bakers.avif" },
      { name: "VSnapU", logo: "/logos/Sales & Marketing/vsnapu.svg" },
      { name: "Yoptima", logo: "/logos/Sales & Marketing/yoptima.webp" },
      { name: "Zouk", logo: "/logos/Sales & Marketing/zouk.webp" },
    ],
    "Technology & IT": [
      { name: "Cuepilot AI", logo: "/logos/Tech & IT/cuepilot.png" },
      { name: "DQ", logo: "/logos/Tech & IT/DQ.png" },
      { name: "Dynamind", logo: "/logos/Tech & IT/dynamind.svg" },
      { name: "Exxat", logo: "/logos/Tech & IT/Exxat.jpeg" },
      { name: "GTT", logo: "/logos/Tech & IT/GTT.png" },
      { name: "iNode", logo: "/logos/Tech & IT/Inode.png" },
      { name: "Knowcross", logo: "/logos/Tech & IT/" },
      { name: "KU", logo: "/logos/Tech & IT/KU.png" },
      { name: "NETXD", logo: "/logos/Tech & IT/netxd.png" },
      { name: "OSMOS", logo: "/logos/Tech & IT/Osmos.png" },
      { name: "SimplyFI Softech", logo: "/logos/Finance & Banking/SimplyFi Softech1.png" },
      { name: "Think 9", logo: "/logos/Tech & IT/Think 9.png" },
      { name: "WCP", logo: "/logos/Tech & IT/WCP.png" },
    ],
  }

  const allIndustries = Object.keys(clientsByType)
  const [selectedType, setSelectedType] = useState(allIndustries[0])

  // Reveal animations
  useRevealAnimation({ stagger: true })

  // Detect hash on page load
  useEffect(() => {
    if (typeof window === "undefined") return

    const hash = window.location.hash?.substring(1) // remove "#"
    if (hash) {
      const matched = allIndustries.find(
        (type) => type.toLowerCase().replace(/[^a-z0-9]+/g, "-") === hash
      )
      if (matched) {
        setSelectedType(matched)

        // smooth scroll to that section
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }
  }, [allIndustries])

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <h2
          className="reveal-element text-5xl md:text-4xl font-semibold text-center text-foreground mb-12"
          tabIndex={0}
          aria-label="Our Impact"
        >
          Our Impact
        </h2>

        <div className="reveal-element grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Industry Types List */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-semibold text-[#121212] mb-10">Industries</h3>
            <div className="space-y-3">
              {allIndustries.map((type, index) => {
                const hash = type.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                return (
                  <AnimatedIndustryButton
                    key={type}
                    type={type}
                    hash={hash}
                    count={clientsByType[type as keyof typeof clientsByType].length}
                    isSelected={selectedType === type}
                    onClick={() => setSelectedType(type)}
                    index={index}
                  />
                )
              })}
            </div>
          </div>

          {/* Clients Display */}
          <div className="md:col-span-2">
            <h3
              id={selectedType.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="text-3xl font-semibold text-[#121212] mb-10 reveal-element"
            >
              {selectedType} Clients
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {clientsByType[selectedType as keyof typeof clientsByType].map(
                (client, index) => (
                  <AnimatedClientLogo
                    key={index}
                    client={client}
                    index={index}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedIndustryButton({
  type,
  hash,
  count,
  isSelected,
  onClick,
  index,
}: {
  type: string
  hash: string
  count: number
  isSelected: boolean
  onClick: () => void
  index: number
}) {
  const ref = useRef<HTMLButtonElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // stagger based on index
            setTimeout(() => {
              setVisible(true)
            }, index * 150)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <button
      id={hash}
      ref={ref}
      onClick={onClick}
      className={`w-full text-left px-6 py-4 transition-all duration-300 transform ${
        isSelected
          ? "bg-[#004250] text-white shadow-lg"
          : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 hover:shadow-md"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <span className="font-medium">{type}</span>
      <span className={`ml-2 text-sm ${isSelected ? "text-white/80" : "text-gray-500"}`}>
        ({count})
      </span>
    </button>
  )
}

function AnimatedClientLogo({
  client,
  index,
}: {
  client: { name: string; logo: string }
  index: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible(true)
            }, index * 100)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className={`relative p-4 flex justify-center items-center h-24 rounded transition-all duration-500 transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <Image
        src={client.logo}
        alt={`${client.name} logo`}
        fill
        className="rounded object-contain"
      />
    </div>
  )
}
