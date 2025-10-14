import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="border-t bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="rounded-2xl border bg-card p-8 md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-balance">Consult Our Recruitment Expert</h2>
              <p className="mt-2 text-foreground/80">Get in touch with our team for your professionalized recruitment plan and hire highly qualified candidates.</p>
            </div>
            <div className="md:text-right">
              <Button size="lg" asChild>
                <Link href="/talent">Book a Discovery Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
