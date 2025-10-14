export function TrustedCompanies() {
  const logos = [
    { name: "Acme Corp", alt: "Acme Corp logo" },
    { name: "Globex", alt: "Globex logo" },
    { name: "Initech", alt: "Initech logo" },
    { name: "Umbrella", alt: "Umbrella logo" },
    { name: "Stark", alt: "Stark Industries logo" },
    { name: "Wayne", alt: "Wayne Enterprises logo" },
  ]
  return (
    <section aria-labelledby="trusted-heading" className="border-t border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h2 id="trusted-heading" className="text-2xl md:text-3xl font-semibold text-balance text-center">
          Trusted by <span className="text-[#EC2229]">Growth Companies</span>
        </h2>
        <div className="mt-6 overflow-hidden">
          <div className="flex animate-[scroll-x_25s_linear_infinite] gap-10 will-change-transform">
            {[...logos, ...logos].map((logo, idx) => (
              <div key={`${logo.name}-${idx}`} className="shrink-0">
                <img
                  src={`/.jpg?height=40&width=120&query=${encodeURIComponent(logo.name + " logo")}`}
                  alt={logo.alt}
                  className="h-10 w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
