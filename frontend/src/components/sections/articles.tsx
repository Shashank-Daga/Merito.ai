export function Articles() {
  const articles = [
    {
      id: 1,
      title: "Pioneering Talent Acquisition for D2C Success in India",
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      title: "Crafting a Shorlist-worthy CV",
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "AI and Automation in HR",
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
