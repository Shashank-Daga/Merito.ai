export function ProcessOverview() {
  const steps = [
    {
      title: "Role Benchmarking",
      desc: "Define key success factors and must-haves for each role.",
    },
    {
      title: "Talent Mapping",
      desc: "Identify the talent landscape to ensure we reach every suitable candidate.",
    },
    {
      title: "Smart AI Sourcing",
      desc: "Leverage AI to shortlist only the top 2% of candidates.",
    },
    {
      title: "Rigorous Evaluation",
      desc: "Assess skills, culture fit, and overall alignment using our proprietary framework.",
    },
    {
      title: "Calibrated Interviews",
      desc: "Present only the most qualified candidates for client interviews, ensuring precision.",
    },
    {
      title: "Continuous Feedback",
      desc: "Refine recommendations and sourcing based on outcomes to improve every hire.",
    },
  ]

  return (
    <section aria-labelledby="process-title">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <header className="max-w-2xl">
          <h2 id="process-title" className="text-balance text-3xl md:text-4xl font-semibold">
            Hiring Top 2% Talent, Every Time
          </h2>
          <p className="mt-2 text-pretty text-base md:text-lg text-foreground/80"></p>
        </header>

        {/* Mobile: Vertical timeline for simple scanning */}
        <div className="mt-10 md:hidden">
          <ol className="relative border-s border-foreground/10">
            {steps.map((s, i) => (
              <li key={s.title} className="ms-6 pb-8 last:pb-0">
                <span
                  className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold ring-4 ring-background"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <article
                  tabIndex={0}
                  aria-labelledby={`step-m-${i}`}
                  className="rounded-xl bg-card p-4 shadow-sm ring-1 ring-border/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <h3 id={`step-m-${i}`} className="text-sm font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/80">{s.desc}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        {/* Desktop: S-shaped flow with arrow connectors */}
        <div className="mt-12 hidden md:block">
          <div className="relative">
            {/* Connectors layer (desktop only) */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1200 540"
              role="presentation"
              aria-hidden="true"
            >
            </svg>


            {/* Cards grid */}
            <ol aria-label="Flowchart: hiring process" className="grid grid-cols-3 gap-6">
              {steps.map((s, i) => {
                // Compute grid position for S-shaped layout
                const gridPos = [
                  // Row 1 (left -> right)
                  "col-start-1 row-start-1",
                  "col-start-2 row-start-1",
                  "col-start-3 row-start-1",
                  // Row 2 (right -> left)
                  "col-start-3 row-start-2",
                  "col-start-2 row-start-2",
                  "col-start-1 row-start-2",
                ][i]

                return (
                  <li key={s.title} className={gridPos}>
                    <article
                      tabIndex={0}
                      aria-labelledby={`step-d-${i}`}
                      className="group rounded-2xl border bg-card p-5 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold"
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        <h3 id={`step-d-${i}`} className="text-base font-semibold">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm text-foreground/80">{s.desc}</p>

                      {/* Decorative divider */}
                      <div
                        aria-hidden="true"
                        className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
                      />
                    </article>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
