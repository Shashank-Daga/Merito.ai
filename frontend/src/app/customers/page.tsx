import { SuccessStories } from "@/components/sections/success-stories"
import { OurImpact } from "@/components/sections/our-impact"
import { CTA } from "@/components/sections/cta"

export default function CustomersPage() {
  return (
    <>
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#003366] to-[#005580]">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Our <span className="text-[#00ADEF]">Customers</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders across sectors, we deliver exceptional talent solutions that drive success.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-[#00ADEF] rounded-full"></div>
          </div>
        </div>
      </section>
      <SuccessStories />
      <OurImpact />
      <CTA />
    </>
  )
}
