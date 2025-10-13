import { TalentGrid } from "@/components/sections/talent-grid"
import { Industries } from "@/components/sections/industries"
import { CTA } from "@/components/sections/cta"

export default function TalentPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <TalentGrid />
      <Industries />
      <CTA />
    </div>
  )
}
