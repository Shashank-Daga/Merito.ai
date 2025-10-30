"use client"

import { useState } from "react"
import Image from "next/image"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

export function OurImpact() {
  const clientsByType = {
    "Technology & IT": [
      { name: "Cuepilot AI", logo: "/logos/Tech & IT/cuepilot.png" },
      { name: "DQ", logo: "/logos/Tech & IT/" },
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
    "Manufacturing & Engineering": [
      { name: "On2Cook", logo: "/logos/Manufacturing & Engg/on2cook.png" },
      { name: "Rekise Marine", logo: "/logos/Manufacturing & Engg/" },
      { name: "Shyam Steel", logo: "/logos/Manufacturing & Engg/Shyam Steel.jpg" },
      { name: "Sunlimited SolaR", logo: "/logos/Manufacturing & Engg/sunlimited.png" },
      { name: "Teertham", logo: "/logos/Manufacturing & Engg/Teertham.png" },
      { name: "Vadcore", logo: "/logos/Manufacturing & Engg/" },
    ],
    "Finance & Banking": [
      { name: "Equirus", logo: "/logos/Finance & Banking/Equirus.svg" },
      { name: "SimplyFI Softech", logo: "/logos/Finance & Banking/SimplyFi Softech1.png" }
    ],
    "Sales & Marketing": [
      { name: "Aza Fashions", logo: "/logos/Sales & Marketing/aza1.png" },
      { name: "Banjaras", logo: "/logos/Sales & Marketing/Banjaras.webp" },
      { name: "Collective Artists Network", logo: "/logos/Sales & Marketing/Collective Artists Network.svg" },
      { name: "Future Group", logo: "/logos/Sales & Marketing/future.webp" },
      { name: "GroupM", logo: "/logos/Sales & Marketing/groupM.png" },
      { name: "Interskale", logo: "/logos/Sales & Marketing/interskale.jpg" },
      { name: "Joyspoon", logo: "/logos/Sales & Marketing/joyspoon.avif" },
      { name: "PeelWorks", logo: "/logos/Sales & Marketing/" },
      { name: "Soulflower", logo: "/logos/Sales & Marketing/soulflower.avif" },
      { name: "The Baker's Dozen", logo: "/logos/Sales & Marketing/Bakers.avif" },
      { name: "VSnapU", logo: "/logos/Sales & Marketing/vsnapu.svg" },
      { name: "Yoptima", logo: "/logos/Sales & Marketing/yoptima.webp" },
      { name: "Zouk", logo: "/logos/Sales & Marketing/zouk.webp" },
    ],
    "Operations & Logistics": [
      { name: "ITP", logo: "/logos/Operations & Log/" },
      { name: "Mosaic", logo: "/logos/Operations & Log/Mosaic.png" },
      { name: "Panchshil Realty", logo: "/logos/Operations & Log/Panchshil.png" },
      { name: "ReCircle", logo: "/logos/Operations & Log/ReCircle.png" },
      { name: "Rekise Marine", logo: "/logos/Operations & Log/" },
    ],
    "Education": [
      { name: "Athena Education", logo: "/logos/Edu/Athena.png" },
      { name: "MIT", logo: "/logos/Edu/" },
      { name: "MIT-Ethiqual", logo: "/logos/Edu/" },
      { name: "Wadhwani", logo: "/logos/Edu/Wadhwani.webp" }
    ]
  }

  const [selectedType, setSelectedType] = useState(Object.keys(clientsByType)[0])

  useRevealAnimation({ stagger: true })

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <h2
          className="reveal-element text-4xl md:text-5xl font-semibold text-center text-foreground mb-12"
          tabIndex={0}
          aria-label="Our Impact"
        >
          Our Impact
        </h2>
        <div className="reveal-element grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Client Types List */}
          <div className="md:col-span-1">
            <h3
              className="text-2xl font-semibold text-[#121212] mb-6"
              tabIndex={0}
              aria-label="Client Types"
            >
              Client Types
            </h3>
            <div className="space-y-3">
              {Object.keys(clientsByType).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${selectedType === type
                    ? "bg-[#004250] text-white shadow-lg"
                    : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 hover:shadow-md"
                    }`}
                >
                  <span className="font-medium">{type}</span>
                  <span className={`ml-2 text-sm ${selectedType === type ? 'text-white/80' : 'text-gray-500'}`}>
                    ({clientsByType[type as keyof typeof clientsByType].length})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Clients Display */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-[#121212] mb-6">{selectedType} Clients</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {clientsByType[selectedType as keyof typeof clientsByType].map((client, index) => (
                <div
                  key={index}
                >
                  <div className=" relative" style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                    <Image 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      fill
                      className="rounded object-contain p-4"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
