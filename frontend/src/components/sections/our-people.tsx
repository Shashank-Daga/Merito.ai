"use client"

export function OurPeople() {
  const teamMembers = [
    { name: "John Doe", position: "Founder", image: "/placeholder-user.jpg" },
    { name: "Jane Smith", position: "Head HR", image: "/placeholder-user.jpg" },
    { name: "Alice Johnson", position: "HR Manager", image: "/placeholder-user.jpg" },
    { name: "Bob Brown", position: "HR Specialist", image: "/placeholder-user.jpg" },
    { name: "Charlie Davis", position: "HR Coordinator", image: "/placeholder-user.jpg" },
    { name: "Diana Evans", position: "HR Analyst", image: "/placeholder-user.jpg" },
    { name: "Eve Foster", position: "HR Assistant", image: "/placeholder-user.jpg" },
  ]

  return (
    <section className="bg-[#FFEFE4] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a]">
            Our <span className="text-[#EC2229]">People</span>
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Meet the dedicated team behind Merito, committed to connecting talent with opportunity.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-xs text-center transition-transform transform hover:scale-105"
            >
              <div className="bg-gray-100 p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div className="py-4">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-red-600 font-medium mt-1">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
