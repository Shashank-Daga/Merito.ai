import { AboutIntro } from "@/components/sections/about-intro"
import { CTA } from "@/components/sections/cta"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-8">
      <AboutIntro />
      <CTA />
    </div>
  )
}
