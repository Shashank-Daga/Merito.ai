import { getAllArticlesMetadata } from "@/lib/articles"
import { Articles } from "@/components/sections/articles"
import { CTA } from "@/components/sections/cta"
import { Podcasts } from "@/components/sections/podcasts"

export default function InsightsPage() {
  const articles = getAllArticlesMetadata()

  return (
    <div className="mx-auto max-w-7xl px-8">
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl text-center text-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Insights
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the latest trends, strategies, and stories shaping the future of talent acquisition and business growth.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-accent-foreground rounded-full"></div>
          </div>
        </div>
      </section>
      <Articles articles={articles} />
      <Podcasts />
      <CTA />
    </div>
  )
}
