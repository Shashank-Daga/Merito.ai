"use client"

import { useState } from "react"

export function OurImpact() {
  const clientsByType = {
    "Technology & IT": [
      "NETXD",
      "Cuepilot AI",
      "SimplyFI Softech",
      "iNode",
      "DQ",
      "KU",
      "Think 9",
      "GTT",
      "OSMOS",
      "Exxat",
      "Knowcross",
      "Dynamind",
      "WCP",
    ],
    "Manufacturing & Engineering": [
      "Shyam Steel",
      "On2Cook",
      "Rekise Marine",
      "Sunlimited SolaR",
      "Vadcore",
      "Teertham",
    ],
    "Healthcare & Life Sciences": [
      "HealthAI Solutions",
      "MediTech",
      "CareConnect",
      "BioInnovate",
      "WellnessTech"
    ],
    "Finance & Banking": [
      "Equirus",
      "SimplyFI Softech"
    ],
    "Sales & Marketing": [
      "Yoptima",
      "GroupM",
      "Collective Artists Network",
      "Interskale",
      "Zouk",
      "Aza Fashions",
      "The Baker&apos;s Dozen",
      "Soulflower",
      "Banjaras",
      "Future Group",
      "Joyspoon",
      "VSnapU",
      "PeelWorks",
    ],
    "Operations & Logistics": [
      "ReCircle",
      "Mosaic",
      "ITP",
      "Rekise Marine",
      "Panchshil Realty"
    ],
    "Education": [
      "Athena Education",
      "MIT",
      "MIT-Ethiqual",
      "Wadhwani"
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
                  className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-accent-foreground/30"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent-foreground rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-800 font-medium">{client}</span>
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
