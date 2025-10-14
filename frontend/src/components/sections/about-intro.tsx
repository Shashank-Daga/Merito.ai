export function AboutIntro() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="text-centre mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-balance">Our <span className="text-[#EC2229]">Origin</span></h1>
            <p className="mt-4 leading-relaxed text-pretty text-foreground/80">
              We began by helping individuals make the right career choices. Today, we help organizations hire the talent that drives success. Every decision is guided by experience, human judgment, and intelligent systems.
            </p>
          </div>
        </div>
        <div className="text-centre mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-balance">Our <span className="text-[#EC2229]">Mission</span></h1>
            <p className="mt-4 leading-relaxed text-pretty text-foreground/80">
              Put the right people in the right roles, faster and smarter.
            </p>
          </div>
        </div>
        <div className="text-centre mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-balance">Our <span className="text-[#EC2229]">Values</span></h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Identity</h3>
                <p className="text-gray-600">Every individual and organization is unique. True success comes from embracing that uniqueness.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Innovation</h3>
                <p className="text-gray-600">We bring fresh thinking and smarter processes to transform talent discovery and hiring.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Integrity</h3>
                <p className="text-gray-600">We act with honesty and transparency in every decision.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Intelligence</h3>
                <p className="text-gray-600">Smarter hiring through human expertise and technology.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Inclusivity</h3>
                <p className="text-gray-600">We value diversity and ensure equal opportunities for all talent to thrive.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
