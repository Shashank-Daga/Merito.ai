export function Industries() {
  const items = [
    "SaaS / B2B",
    "Fintech",
    "Healthtech",
    "E-commerce",
    "AI / ML",
    "Developer Tools",
    "Consumer",
    "Marketplace",
  ]
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold">Industries we serve</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {items.map((label) => (
            <div key={label} className="rounded-lg border bg-card p-4 text-sm">
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
