"use client"

import Image from "next/image"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

export function SuccessStories() {
  useRevealAnimation({ stagger: true })

  const stories = [
    {
      id: 1,
      title: "Expanding Horizons: How Merito catalyzed expansion for Lighthouse Communities",
      logo: "/Stories/lh.webp",
      client: "Lighthouse Communities"
    },
    {
      id: 2,
      title: "How Merito helped GroupM to hire across levels!",
      logo: "/logos/Sales & Marketing/groupM.png",
      client: "groupM"
    },
    {
      id: 3,
      title: "How Merito helped Mosaic Wellness to hire critical roles!",
      logo: "/Stories/mosaic_well.webp",
      client: "Mosaic Wellness"
    },
    {
      id: 4,
      title: "How Merito helped to Build Tech and Product Teams at Carrot!",
      logo: "/Stories/carrot.webp",
      client: "Carrot"
    },
    {
      id: 5,
      title: "How Merito helped The Baker&apos;s Dozen to hire key roles!",
      logo: "/logos/Sales & Marketing/Bakers.avif",
      client: "Baker&apos;s Dozen"
    },
    {
      id: 6,
      title: "How Merito helped Shyam Steel to hire key roles!",
      logo: "/logos/Manufacturing & Engg/Shyam Steel.jpg",
      client: "Shyam Steel"
    }
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <h1 className="reveal-element text-4xl md:text-5xl font-semibold text-center text-foreground mb-12">
          Success Stories
        </h1>
        <div className="reveal-element grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-4">{story.title}</h3>
              <div className="flex items-center mb-4 flex-grow">
                <Image
                  src={story.logo}
                  alt={`${story.client} logo`}
                  width={150}
                  height={80}
                  className="object-contain mr-4"
                />
                {/* <div className="text-sm text-gray-500">
                  <strong>Client:</strong> {story.client}
                </div> */}
              </div>
              <div className="flex justify-end">
                <button className="text-[#263238] font-medium hover:text-accent transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
