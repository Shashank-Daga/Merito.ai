"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

export function Podcasts() {
  useRevealAnimation({ stagger: true })

  const [visibleCount, setVisibleCount] = useState(3)

  const podcasts = [
    {
      id: 1,
      title: "Acquired Intelliegence for Talent Problems",
      image: "/Insights/Podcasts/1.webp",
      link: "https://open.spotify.com/episode/1mKswVgdGkbh77IoPtYlcq?go=1&sp_cid=2e073532847d39d3b16ff885f12a933d&utm_source=embed_player_p&utm_medium=desktop&si=a9c25f900a6745fa&nd=1&dlsi=fcd06aa6228b42d4"
    },
    {
      id: 2,
      title: "Think of Recuritment as Sales",
      image: "/Insights/Podcasts/2.webp",
      link: "https://open.spotify.com/episode/3ORlXjmVcNJ6DIApUgyTva?go=1&sp_cid=2e073532847d39d3b16ff885f12a933d&utm_source=embed_player_p&utm_medium=desktop&si=a628a84a79ed41cb&nd=1&dlsi=989fdb8c1047408f"
    },
    {
      id: 3,
      title: "Do you have ICE in your hiring?",
      image: "/Insights/Podcasts/3.webp",
      link: "https://open.spotify.com/episode/204wN9LEAxdE9tvmWz69ne?go=1&sp_cid=2e073532847d39d3b16ff885f12a933d&utm_source=embed_player_p&utm_medium=desktop&si=4493fa0553db4867&nd=1&dlsi=aa1369e99a8840e5"
    },
    {
      id: 4,
      title: "Candidate Experience and What Companies Can Do to Ensure It?",
      image: "/Insights/Podcasts/4.webp",
      link: "https://open.spotify.com/episode/1mKswVgdGkbh77IoPtYlcq?go=1&sp_cid=2e073532847d39d3b16ff885f12a933d&utm_source=embed_player_p&utm_medium=desktop&si=a9c25f900a6745fa&nd=1&dlsi=e6891225a7d94cf7"
    }
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <h2 className="reveal-element text-3xl md:text-4xl font-semibold text-center text-[#121212] mb-12">
          Featured Podcasts
        </h2>
        <div className="reveal-element grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.slice(0, visibleCount).map((podcast) => (
            <article
              key={podcast.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src={podcast.image}
                  alt={podcast.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {podcast.title}
                </h3>
                <Link
                  href={podcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-foreground/90 font-medium hover:text-foreground transition-colors"
                >
                  Listen Now →
                </Link>
              </div>
            </article>
          ))}
        </div>
        {visibleCount < podcasts.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="text-white bg-accent/90 hover:bg-[#004250] transition-colors px-8 py-3 rounded-lg font-medium"
            >
              More Podcasts
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
