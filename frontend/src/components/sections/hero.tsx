import { Button } from "@/components/ui/button"

interface HeroProps {
  onBookCall: () => void
}

export function Hero({ onBookCall }: HeroProps) {
  return (
    <section className="bg-[url('/home_page_banner.jpg')] bg-cover bg-center bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-semibold text-balance" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 800 }}>
              <span className="text-[#EC2229]">Expedite</span> Hiring
            </h1>
            <p className="mt-4 text-foreground leading-relaxed">
              Human expertise meets intelligent technology <br/>to expedite hiring and <br/>connect the right talent with the right role.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Button size="lg" onClick={onBookCall}>
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
