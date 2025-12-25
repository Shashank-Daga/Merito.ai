// src/components/sections/articles.tsx  ← NO "use client"
import Image from "next/image";
import Link from "next/link";

interface ArticleMetadata {
  id: string;
  title: string;
  image: string;
}

export function Articles({ articles }: { articles: ArticleMetadata[] }) {
  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">
          Latest Articles
        </h2>

        {articles.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <p className="text-xl">No articles available yet.</p>
            <p className="text-sm mt-2">
              Check back soon for insights and updates.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
              >
                <Link href={`/insights/${article.id}`} className="block">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-grow">

                  <Link href={`/insights/${article.id}`}>
                    <h3 className="text-xl font-semibold text-foreground mb-5 line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>

                  <Link
                    href={`/insights/${article.id}`}
                    className="mt-auto text-foreground/90 font-medium hover:text-foreground transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
