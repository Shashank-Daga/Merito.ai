export function OurPeople() {
  const teamMembers = [
    { name: "John Doe", position: "Founder" },
    { name: "Jane Smith", position: "Head HR" },
    { name: "Alice Johnson", position: "HR Manager" },
    { name: "Bob Brown", position: "HR Specialist" },
    { name: "Charlie Davis", position: "HR Coordinator" },
    { name: "Diana Evans", position: "HR Analyst" },
    { name: "Eve Foster", position: "HR Assistant" },
  ]

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">
            Our <span className="text-[#EC2229]">People</span>
          </h1>
          <p className="mt-4 leading-relaxed text-pretty text-foreground/80">
            Meet the dedicated team behind Merito, committed to connecting talent with opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-primary to-accent-foreground p-6 rounded-lg shadow-sm border text-center">
              <img
                src="/placeholder-user.jpg"
                alt={`${member.name} profile`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-foreground mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
