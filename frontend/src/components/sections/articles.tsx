export function Articles() {
  const articles = [
    {
      id: 1,
      title: "The Future of Remote Work: Trends and Predictions",
      description: "Explore how remote work is evolving and what it means for talent acquisition strategies in 2024 and beyond.",
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      title: "Building High-Performance Teams: A Guide for Leaders",
      description: "Learn the key strategies for assembling and maintaining teams that consistently deliver exceptional results.",
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "Diversity in Tech: Why It Matters and How to Achieve It",
      description: "Understanding the importance of diversity in technology and practical steps to create inclusive workplaces.",
      image: "/placeholder.jpg"
    }
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">
                  {article.description}
                </p>
                <button className="mt-4 text-#263238 font-medium hover:text-accent transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
