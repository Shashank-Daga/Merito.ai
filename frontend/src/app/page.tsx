import { Hero } from "@/components/sections/hero"
import { Approach } from "@/components/sections/approach"
import { Metrics } from "@/components/sections/metrics"
import { TrustedCompanies } from "@/components/sections/trusted-companies"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Approach />
      <Metrics />
      <TrustedCompanies />
      <Testimonials />
      <CTA />
    </>
  )
}
