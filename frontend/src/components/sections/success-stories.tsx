"use client"

import Image from "next/image"
import Link from "next/link"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

interface SuccessStoryMetadata {
  id: string
  title: string
  image: string
}

export function SuccessStories({ stories }: { stories: SuccessStoryMetadata[] }) {
  useRevealAnimation({ stagger: true })

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <h1 className="reveal-element text-4xl md:text-4xl font-semibold text-center text-foreground mb-12">
          Success Stories
        </h1>
        
        {stories.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <p className="text-xl">No success stories available yet.</p>
            <p className="text-sm mt-2">Check back soon for inspiring client stories.</p>
          </div>
        ) : (
          <div className="reveal-element grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div 
                key={story.id} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col border border-gray-200 dark:border-gray-700"
              >
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {story.title}
                </h3>
                
                <div className="flex items-center justify-center mb-4 flex-grow bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <Image
                    src={story.image}
                    alt={`${story.title} logo`}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                
                <div className="flex justify-end mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href={`/customers/${story.id}`}
                    className="text-[#263238] dark:text-accent font-medium hover:text-accent transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
