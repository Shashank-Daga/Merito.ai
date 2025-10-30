"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

export default function TrustedHiringPartner() {
    useRevealAnimation({ stagger: true })

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
                {/* Left Image Section */}
                <div className="reveal-element relative w-full lg:w-1/2 flex justify-center">
                    {/* Back image */}
                    <div className="relative w-3/4 rounded-2xl overflow-hidden shadow-md transform translate-y-[-100px]">
                        <Image
                            src="/process.jpg"
                            alt="Team discussing hiring strategy"
                            width={600}
                            height={450}
                            className="rounded-2xl object-cover"
                        />
                    </div>

                    {/* Front overlapping image */}
                    <div className="absolute bottom-[-90px] right-[-40px] w-[65%] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/process1.jpg"
                            alt="Recruitment professionals at work"
                            width={600}
                            height={450}
                            className="rounded-2xl object-cover"
                        />
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="reveal-element w-full lg:w-1/2 mt-16 lg:mt-0">
                    <h2 className="text-4xl font-semibold leading-tight text-gray-900 mb-4">
                        Your Trusted Hiring Partner
                    </h2>
                    <p className="text-gray-600 mb-8">
                        At Merito, we bring strategy, data, and domain expertise together to
                        simplify recruitment and help businesses scale with the right
                        people.
                    </p>

                    <ul className="space-y-4 mb-8">
                        {[
                            "AI-Enhanced Talent Search",
                            "Human-Led Decision Making",
                            "Culture Fit Verified with Ref-Track",
                            "Scalable Recruitment Solutions",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <CheckCircle2 className="text-[#6A0DAD]" size={22} />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-12 mb-8">
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-900">20+</h3>
                            <p className="text-gray-600">Years of Experience</p>
                        </div>
                        {/* <div className="border-l border-gray-300 h-12"></div>
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-900">8K</h3>
                            <p className="text-gray-600">Happy Clients</p>
                        </div> */}
                    </div>

                    <Link href="/about">
                        <Button className="bg-black text-white px-6 py-6 text-base rounded-lg hover:bg-gray-900">
                            Learn more about us
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
