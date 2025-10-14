export function Podcasts() {
  const podcasts = [
    {
      id: 1,
      title: "Talent Acquisition in the Digital Age",
      description: "Join our experts as they discuss how technology is transforming the way companies find and hire top talent.",
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      title: "Building Company Culture That Attracts Talent",
      description: "Learn from industry leaders about creating workplace cultures that naturally draw in the best candidates.",
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "The Skills Gap: Bridging the Divide",
      description: "Exploring the current skills gap in various industries and strategies to address this growing challenge.",
      image: "/placeholder.jpg"
    }
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">
          Featured Podcasts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast) => (
            <article
              key={podcast.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="w-16 h-16 bg-accent-foreground rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {podcast.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">
                  {podcast.description}
                </p>
                <button className="mt-4 text-#263238 font-medium hover:text-accent transition-colors">
                  Listen Now →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
