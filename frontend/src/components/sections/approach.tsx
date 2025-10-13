export function Approach() {
  const items = [
    { title: "Intake & alignment", desc: "We calibrate on the role, must-haves, and success metrics." },
    { title: "Sourcing & screening", desc: "Multi-stage vetting for skills, experience, and culture fit." },
    { title: "Shortlist & interviews", desc: "Curated candidates with context and interview coordination." },
    { title: "Offer & onboarding", desc: "Support through negotiation and onboarding for fast ramp." },
  ]
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">A focused, transparent approach</h2>
        <p className="mt-3 text-foreground/80">Built for speed without compromising on quality.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl border bg-card p-5">
              <div className="text-sm font-semibold text-primary">{i.title}</div>
              <p className="mt-2 text-sm text-foreground/80">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
