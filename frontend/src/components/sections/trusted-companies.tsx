"use client"

import Image from "next/image"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

export function TrustedCompanies() {
  useRevealAnimation()

  const logos = [
    { name: "Athena", src: "/logos/Edu/Athena.png", alt: "Athena logo" },
    { name: "Wadhwani", src: "/logos/Edu/Wadhwani.webp", alt: "Wadhwani logo" },
    { name: "Equirus", src: "/logos/Finance & Banking/Equirus.svg", alt: "Equirus logo" },
    { name: "SimplyFi Softech", src: "/logos/Finance & Banking/SimplyFi Softech1.png", alt: "SimplyFi Softech logo" },
    { name: "On2Cook", src: "/logos/Manufacturing & Engg/on2cook.png", alt: "On2Cook logo" },
    { name: "Shyam Steel", src: "/logos/Manufacturing & Engg/Shyam Steel.jpg", alt: "Shyam Steel logo" },
    { name: "Teertham", src: "/logos/Manufacturing & Engg/Teertham.png", alt: "Teertham logo" },
    { name: "Mosaic", src: "/logos/Operations & Log/Mosaic.png", alt: "Mosaic logo" },
    { name: "Panchshil", src: "/logos/Operations & Log/Panchshil.png", alt: "Panchshil logo" },
    { name: "ReCircle", src: "/logos/Operations & Log/ReCircle.png", alt: "ReCircle logo" },
    { name: "Aza Fashions", src: "/logos/Sales & Marketing/aza1.png", alt: "Aza Fashions logo" },
    { name: "The Baker's Dozen", src: "/logos/Sales & Marketing/Bakers.avif", alt: "The Baker's Dozen logo" },
    { name: "Banjaras", src: "/logos/Sales & Marketing/Banjaras.webp", alt: "Banjaras logo" },
    { name: "Collective Artists Network", src: "/logos/Sales & Marketing/Collective Artists Network.svg", alt: "Collective Artists Network logo" },
    { name: "Interskale", src: "/logos/Sales & Marketing/interskale.jpg", alt: "Interskale logo" },
    { name: "Joyspoon", src: "/logos/Sales & Marketing/joyspoon.avif", alt: "Joyspoon logo" },
    { name: "Soulflower", src: "/logos/Sales & Marketing/soulflower.avif", alt: "Soulflower logo" },
    { name: "VSnapU", src: "/logos/Sales & Marketing/vsnapu.svg", alt: "VSnapU logo" },
    { name: "Yoptima", src: "/logos/Sales & Marketing/yoptima.webp", alt: "Yoptima logo" },
    { name: "Zouk", src: "/logos/Sales & Marketing/zouk.webp", alt: "Zouk logo" },
    { name: "Cuepilot AI", src: "/logos/Tech & IT/cuepilot.png", alt: "Cuepilot AI logo" },
    { name: "Dynamind", src: "/logos/Tech & IT/dynamind.svg", alt: "Dynamind logo" },
    { name: "Exxat", src: "/logos/Tech & IT/Exxat.jpeg", alt: "Exxat logo" },
    { name: "GTT", src: "/logos/Tech & IT/GTT.png", alt: "GTT logo" },
    { name: "KU", src: "/logos/Tech & IT/KU.png", alt: "KU logo" },
    { name: "NETXD", src: "/logos/Tech & IT/netxd.png", alt: "NETXD logo" },
    { name: "Osmos", src: "/logos/Tech & IT/Osmos.png", alt: "Osmos logo" },
    { name: "SimplyFi Softech", src: "/logos/Tech & IT/SimplyFi Softech.png", alt: "SimplyFi Softech logo" },
    { name: "Think 9", src: "/logos/Tech & IT/Think 9.png", alt: "Think 9 logo" },
    { name: "WCP", src: "/logos/Tech & IT/WCP.png", alt: "WCP logo" },
  ]
  return (
    <section aria-labelledby="trusted-heading" className="border-t border-b bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h2 id="trusted-heading" className="reveal-element text-4xl md:text-4xl font-semibold text-balance text-center mb-16">
          Trusted by <span className="text-[#EC2229]">Growth Companies</span>
        </h2>
        <div className="reveal-element mt-12 overflow-hidden">
          <div className="flex animate-[scroll-x_25s_linear_infinite] gap-2 will-change-transform">
            {[...logos, ...logos].map((logo, idx) => (
              <div key={`${logo.name}-${idx}`} className="shrink-0 relative h-12 w-[140px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
