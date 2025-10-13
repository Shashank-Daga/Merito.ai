import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-balance" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 800 }}>
              <span style={{ color: '#EC2229' }}>Expedite</span> Hiring
            </h1>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Human expertise meets intelligent technology to expedite hiring and connect the right talent with the right role.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Button size="lg" asChild>
                <Link href="/talent">Book a Discovery Call</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-4 md:p-6">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border bg-muted">
              <img
                src="/home_banner_1.webp"
                alt="Recruiting team collaborating during interviews"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
