export function ProcessOverview() {
  const steps = [
    { title: "1. Intake", desc: "Role calibration and success criteria." },
    { title: "2. Source", desc: "Outbound + network + referrals." },
    { title: "3. Screen", desc: "Skills, experience, and values fit." },
    { title: "4. Shortlist", desc: "Curated candidates with context." },
    { title: "5. Interview", desc: "Scheduling and feedback loop." },
    { title: "6. Offer", desc: "Support through negotiation." },
  ]
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Our process</h1>
        <p className="mt-3 text-foreground/80">Clear stages. Consistent outcomes.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border bg-card p-5">
              <div className="text-sm font-semibold text-primary">{s.title}</div>
              <p className="mt-2 text-sm text-foreground/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
