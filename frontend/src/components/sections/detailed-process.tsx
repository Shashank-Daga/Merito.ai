export function DetailedProcess() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6">
            <h2 className="text-2xl font-semibold">How we evaluate</h2>
            <ul className="mt-4 grid gap-3 text-sm">
              <li>• Role-specific technical depth</li>
              <li>• Problem-solving and ownership</li>
              <li>• Communication and collaboration</li>
              <li>• Culture and values alignment</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h2 className="text-2xl font-semibold">What you get</h2>
            <ul className="mt-4 grid gap-3 text-sm">
              <li>• Curated shortlist with context</li>
              <li>• Transparent weekly updates</li>
              <li>• Interview support and feedback loop</li>
              <li>• Offer guidance and onboarding help</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
