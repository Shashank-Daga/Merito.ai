"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

const DATA = [
  {
    image: "/Peoples/dhaynesh.jpg",
    name: "Dhyanesh Shah",
    position: "Co-founder",
    company: "Mosaic Wellness",
    quote:
      "We have worked with Merito for various roles across the levels and had a really good experience with them. They are a professional team, quick to act and incorporate our feedback to help us hire great candidates. Their assessments helped us ensure quality hires.",
  },
  {
    image: "/Peoples/sameer.jpg",
    name: "Sameer Bhapkar",
    position: "DGM Corp Development",
    company: "Shyam Steel",
    quote:
      "I am really impressed with the way Merito team has helped us with our hiring. From understanding our hiring needs to identifying the RIGHT fit candidates, they took focused efforts which helped us meet our hiring goals on time.",
  },
  {
    image: "/Peoples/sneh.jpg",
    name: "Sneh Jain",
    position: "Co-founder",
    company: "The Bakers Dozen",
    quote:
      "As a part of our growth we were looking to build strong D2C presence and hire key roles. Merito helped us hire leadership roles across Finance, Operations and Marketing. The time-to-hire was simply amazing.",
  },
  {
    image: "/Peoples/darshan.jpg",
    name: "Darshan Teredesai",
    position: "Co-founder",
    company: "Olous App",
    quote:
      "As a growth company, we are always searching for great talent. Merito helped us engage with the right candidates and close key tech and HR positions in just two weeks.",
  },
  {
    image: "/Peoples/anuja.jpg",
    name: "Anuja Kishore",
    position: "Chief Corporate Development Officer",
    company: "Lighthouse",
    quote:
      "We loved how the leadership at Merito is aligned with our needs. The genuine intention and consistent follow-up of the team helped us hire efficiently.",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((index + 1) % DATA.length)
  const prev = () => setIndex((index - 1 + DATA.length) % DATA.length)

  const t = DATA[index]

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-10">
          Client testimonials
        </h2>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 justify-center mh-[360px] md:h-[320px]">


          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src={t.image}
              alt={t.name}
              width={160}
              height={160}
              className="w-40 h-40 rounded-xl object-cover"
            />
          </div>

          {/* Testimonial Content */}
          <div className="text-left flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-4">
              {t.position}, {t.company}
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t.quote}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
