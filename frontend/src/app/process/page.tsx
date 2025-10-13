import { ProcessOverview } from "@/components/sections/process-overview"
import { DetailedProcess } from "@/components/sections/detailed-process"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"

export default function ProcessPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <ProcessOverview />
      <DetailedProcess />
      <Testimonials />
      <CTA />
    </div>
  )
}
