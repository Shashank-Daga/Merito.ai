export function AboutIntro() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-balance">About Merito Hiring</h1>
            <p className="mt-4 leading-relaxed text-pretty text-foreground/80">
              We&apos;re a recruitment partner built for speed and quality. Our team blends deep industry knowledge with
              a rigorous screening process to deliver candidates who ramp quickly and stay longer.
            </p>
          </div>
          <ul className="grid gap-4">
            <li className="rounded-lg border bg-card p-4">
              <h3 className="font-medium">Vetted network</h3>
              <p className="text-sm text-foreground/70">
                Thousands of pre-screened candidates across engineering, product, GTM, and operations.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <h3 className="font-medium">Consistent outcomes</h3>
              <p className="text-sm text-foreground/70">
                SLAs on speed and quality with transparent updates throughout the process.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <h3 className="font-medium">Partnership-first</h3>
              <p className="text-sm text-foreground/70">
                We act as an extension of your team—aligning on role nuances and success metrics.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
