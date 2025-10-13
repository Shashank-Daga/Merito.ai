import { AboutIntro } from "@/components/sections/about-intro"
import { Approach } from "@/components/sections/approach"
import { TrustedCompanies } from "@/components/sections/trusted-companies"
import { CTA } from "@/components/sections/cta"

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <AboutIntro />
      <Approach />
      <TrustedCompanies />
      <CTA />
    </div>
  )
}
