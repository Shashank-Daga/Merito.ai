import React from "react"
import Link from "next/link"

const industries = [
  "Technology & IT",
  "Manufacturing & Engineering",
  "Healthcare & Life Sciences",
  "Finance & Banking",
  "Sales & Marketing",
  "Operations & Logistics",
]

const techRoles = [
  "CTO",
  "Product Managers",
  "Back End Developer",
  "VP Product",
  "Full Stack Engineer",
  "React Native developer",
  "Java Programmer",
  "Data Engineer",
  "Tech Lead",
  "Data Scientist",
  "Android & iOS Developer",
  "QA Engineer/Lead",
  "Front End Developer",
  "Blockchain developer",
  "Node.js Programmer",
  "DevOps",
]

const nonTechRoles = [
  "UI/UX Designer",
  "Project Manager",
  "Creative Director",
  "Customer Service Head",
  "Digital Marketing Manager",
  "Business Dev.",
  "Content Editors/Writers",
  "HR Head/Manager",
  "Business Head",
  "Ad Sales Manager",
  "Sales Director",
  "Key Account Manager",
  "SEO Manager",
  "Head Finance",
  "SEM Head",
  "Category Manager/Head",
]

export default function TalentPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Back to Home Link */}
        <div className="mb-8">
          <Link href="/" className="text-[#003366] hover:text-[#00ADEF] transition-colors">
            ← Back to Home
          </Link>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#003366] mb-4">
            Industries We Serve
          </h1>
        </div>

        {/* Industries Grid */}
        <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {industries.map((industry) => (
            <div
              key={industry}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-lg font-medium text-[#003366]">{industry}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From technical specialists to business experts, we connect you with the talent that drives results.
          </p>
        </div>

        {/* Roles Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tech Roles */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#003366] mb-6">Tech Roles</h2>
            <ul className="space-y-3 inline-block text-left">
              {techRoles.map((role) => (
                <li key={role} className="text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-[#00ADEF] rounded-full mr-3 flex-shrink-0"></span>
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Non-Tech Roles */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#003366] mb-6">Non-Tech Roles</h2>
            <ul className="space-y-3 inline-block text-left">
              {nonTechRoles.map((role) => (
                <li key={role} className="text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-[#00ADEF] rounded-full mr-3 flex-shrink-0"></span>
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#00ADEF] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#0099CC] transition-colors duration-300 shadow-lg hover:shadow-xl">
            Book a Discovery Call
          </button>
        </div>
      </div>
    </div>
  )
}
