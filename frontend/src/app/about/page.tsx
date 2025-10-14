import { AboutIntro } from "@/components/sections/about-intro"
import { CTA } from "@/components/sections/cta"

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <AboutIntro />
      <CTA />
    </div>
  )
}
