import { SuccessStories } from "@/components/sections/success-stories"
import { OurImpact } from "@/components/sections/our-impact"
import { CTA } from "@/components/sections/cta"
import { getAllSuccessStoriesMetadata } from "@/lib/success-stories"

export default function CustomersPage() {
  const stories = getAllSuccessStoriesMetadata()

  return (
    <div className="mx-auto max-w-7xl px-8">
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl text-center text-foreground">
          <h2 className="text-5xl md:text-5xl font-bold mb-4 tracking-tight">
            Our Customers
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders across sectors, we deliver exceptional talent solutions that drive success.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-accent-foreground rounded-full"></div>
          </div>
        </div>
      </section>
      <SuccessStories stories={stories} />
      <OurImpact />
      <CTA />
    </div>
  )
}
