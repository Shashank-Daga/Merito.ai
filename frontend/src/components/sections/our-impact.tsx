"use client"

import { useState } from "react"

export function OurImpact() {
  const clientsByType = {
    "Technology & IT": [
      { name: "NETXD", logo: "/netxd.png" },
      { name: "Cuepilot AI", logo: "/cuepilot.png" },
      { name: "SimplyFI Softech", logo: "/SimplyFi Softech.png" },
      { name: "iNode", logo: "/placeholder-logo.png" },
      { name: "DQ", logo: "/placeholder-logo.png" },
      { name: "KU", logo: "/placeholder-logo.png" },
      { name: "Think 9", logo: "/placeholder-logo.png" },
      { name: "GTT", logo: "/placeholder-logo.png" },
      { name: "OSMOS", logo: "/placeholder-logo.png" },
      { name: "Exxat", logo: "/placeholder-logo.png" },
      { name: "Knowcross", logo: "/placeholder-logo.png" },
      { name: "Dynamind", logo: "/placeholder-logo.png" },
      { name: "WCP", logo: "/placeholder-logo.png" },
    ],
    "Manufacturing & Engineering": [
      { name: "Shyam Steel", logo: "/placeholder-logo.png" },
      { name: "On2Cook", logo: "/placeholder-logo.png" },
      { name: "Rekise Marine", logo: "/placeholder-logo.png" },
      { name: "Sunlimited SolaR", logo: "/placeholder-logo.png" },
      { name: "Vadcore", logo: "/placeholder-logo.png" },
      { name: "Teertham", logo: "/placeholder-logo.png" },
    ],
    "Healthcare & Life Sciences": [
      { name: "HealthAI Solutions", logo: "/placeholder-logo.png" },
      { name: "MediTech", logo: "/placeholder-logo.png" },
      { name: "CareConnect", logo: "/placeholder-logo.png" },
      { name: "BioInnovate", logo: "/placeholder-logo.png" },
      { name: "WellnessTech", logo: "/placeholder-logo.png" }
    ],
    "Finance & Banking": [
      { name: "Equirus", logo: "/placeholder-logo.png" },
      { name: "SimplyFI Softech", logo: "/SimplyFi Softech.png" }
    ],
    "Sales & Marketing": [
      { name: "Yoptima", logo: "/placeholder-logo.png" },
      { name: "GroupM", logo: "/placeholder-logo.png" },
      { name: "Collective Artists Network", logo: "/placeholder-logo.png" },
      { name: "Interskale", logo: "/placeholder-logo.png" },
      { name: "Zouk", logo: "/placeholder-logo.png" },
      { name: "Aza Fashions", logo: "/placeholder-logo.png" },
      { name: "The Baker&apos;s Dozen", logo: "/placeholder-logo.png" },
      { name: "Soulflower", logo: "/placeholder-logo.png" },
      { name: "Banjaras", logo: "/placeholder-logo.png" },
      { name: "Future Group", logo: "/placeholder-logo.png" },
      { name: "Joyspoon", logo: "/placeholder-logo.png" },
      { name: "VSnapU", logo: "/placeholder-logo.png" },
      { name: "PeelWorks", logo: "/placeholder-logo.png" },
    ],
    "Operations & Logistics": [
      { name: "ReCircle", logo: "/placeholder-logo.png" },
      { name: "Mosaic", logo: "/placeholder-logo.png" },
      { name: "ITP", logo: "/placeholder-logo.png" },
      { name: "Rekise Marine", logo: "/placeholder-logo.png" },
      { name: "Panchshil Realty", logo: "/placeholder-logo.png" }
    ],
    "Education": [
      { name: "Athena Education", logo: "/placeholder-logo.png" },
      { name: "MIT", logo: "/placeholder-logo.png" },
      { name: "MIT-Ethiqual", logo: "/placeholder-logo.png" },
      { name: "Wadhwani", logo: "/placeholder-logo.png" }
    ]
  }

  const [selectedType, setSelectedType] = useState(Object.keys(clientsByType)[0])

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-foreground mb-12">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Client Types List */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-[#121212] mb-6">Client Types</h3>
            <div className="space-y-3">
              {Object.keys(clientsByType).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${selectedType === type
                    ? "bg-gradient-to-br from-accent-foreground to-primary"
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
                  <div className="bg-[#83b6b3]" style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                    <img src={client.logo} alt={client.name} className="rounded" />
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
