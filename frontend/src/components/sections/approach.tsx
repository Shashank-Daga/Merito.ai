import { ProcessOverview } from "./process-overview";

export function Approach() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid items-center gap-10">
          <ProcessOverview />
        </div>
      </div>
    </section>
  )
}
