import { Articles } from "@/components/sections/articles"
import { CTA } from "@/components/sections/cta"
import { Podcasts } from "@/components/sections/podcasts"
import { Cat } from "lucide-react"

export default function InsightsPage() {
  return (
    <>
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#003366] to-[#005580]">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="text-[#00ADEF]">Insights</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover the latest trends, strategies, and stories shaping the future of talent acquisition and business growth.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-[#00ADEF] rounded-full"></div>
          </div>
        </div>
      </section>
      <Articles />
      <Podcasts />
      <CTA />
    </>
  )
}
