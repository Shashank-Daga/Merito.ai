"use client"

import Image from "next/image"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

export function OurPeople() {
  useRevealAnimation({ stagger: true })

  const teamMembers = [
    { name: "Rushikesh Humne", position: "Founder", image: "/placeholder-user.jpg" },
    { name: "Abhi Karn", position: "Vice President", image: "/Team/abhi.png" },
    { name: "Nabamita", position: "HR Manager", image: "/placeholder-user.jpg" },
    { name: "Ayushi", position: "HR Specialist", image: "/placeholder-user.jpg" },
    { name: "Anish", position: "HR Coordinator", image: "/placeholder-user.jpg" },
    { name: "Sharanya", position: "HR Analyst", image: "/placeholder-user.jpg" },
    { name: "Neha", position: "HR Assistant", image: "/placeholder-user.jpg" },
  ]

  return (
    <section className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="reveal-element text-4xl md:text-5xl font-semibold text-[#1a1a1a]">
            Our <span className="text-[#EC2229]">People</span>
          </h2>
          <p className="text-xl reveal-element mt-4 text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated team behind Merito, committed to connecting talent with opportunity.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-xs text-center transition-transform transform hover:scale-105 border-5 border-gray-200"
            >
              <div className="bg-gray-100 p-4 relative h-64">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="py-3">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-lg text-red-600 font-medium mt-1">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
