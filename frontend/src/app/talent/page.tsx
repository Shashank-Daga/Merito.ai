"use client"

import React from "react"
import Link from "next/link"

interface CalendlyWidget {
  initPopupWidget: (options: { url: string }) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget
  }
}

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
  const handleBookCall = () => {
    try {
      console.log('Opening Calendly in new tab');
      window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, '_blank');
    } catch (error) {
      console.error('Error opening Calendly:', error);
      alert('Failed to open scheduling page. Please contact us directly.');
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4">
        {/* Back to Home Link */}
        <div className="mb-4">
          <Link href="/" className="text-foreground">
            ←
          </Link>
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
            <h2 className="text-2xl font-semibold text-foreground mb-6">Tech Roles</h2>
            <ul className="space-y-3 inline-block text-left">
              {techRoles.map((role) => (
                <li key={role} className="text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-accent-foreground rounded-full mr-3 flex-shrink-0"></span>
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Non-Tech Roles */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Non-Tech Roles</h2>
            <ul className="space-y-3 inline-block text-left">
              {nonTechRoles.map((role) => (
                <li key={role} className="text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-accent-foreground rounded-full mr-3 flex-shrink-0"></span>
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <button
            onClick={handleBookCall}
            className="bg-accent-foreground text-black px-8 py-3 rounded-xl font-medium hover:bg-accent transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Discovery Call
          </button>
        </div>
      </div>
    </div>
  )
}
