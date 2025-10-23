export function Approach() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid items-center gap-10">
          <div className="#121212">
            <h2 className="text-2xl md:text-3xl font-semibold text-balance">Our Hiring Process, <span className="text-[#EC2229]">Simplified</span>
              <a href="/process" className="text-[#121212] ml-2 inline-flex items-center hover:text-accent transition-colors">
                <span>→</span>
              </a>
            </h2>
            <p className="mt-3">A streamlined approach that expedites hiring while ensuring the perfect fit.</p>
          </div>
          {/* <div className="rounded-xl border bg-card p-4 md:p-6"> */}
            <div className="aspect-[8/3] w-full overflow-hidden rounded-lg border bg-muted">
              <img
                src="/process2.jpg"
                alt="Recruiting team collaborating during interviews"
                className="h-full w-full object-cover"
              />
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}
