export function TalentGrid() {
  const candidates = [
    { role: "Senior Backend Engineer", tags: ["Go", "Postgres", "Kubernetes"] },
    { role: "Product Manager", tags: ["B2B SaaS", "Roadmaps", "Analytics"] },
    { role: "Data Scientist", tags: ["Python", "ML", "Experimentation"] },
    { role: "Design Lead", tags: ["UX", "Design Systems", "Figma"] },
    { role: "Growth Marketer", tags: ["Paid", "Lifecycle", "B2C"] },
    { role: "Sales Manager", tags: ["Mid-market", "Playbooks", "Coaching"] },
  ]
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Top candidates ready to hire</h1>
        <p className="mt-3 text-foreground/80">Vetted profiles across functions and seniorities.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {candidates.map((c) => (
            <article key={c.role} className="rounded-xl border bg-card p-5">
              <h3 className="font-medium">{c.role}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-md bg-muted px-2 py-1 text-xs text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
