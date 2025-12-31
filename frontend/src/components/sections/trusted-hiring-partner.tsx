"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function TrustedHiringPartner() {
  useRevealAnimation({ stagger: true });

  return (
    <section className="py-24 bg-secondary overflow-visible">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* ===================== */}
        {/* 📱 MOBILE IMAGE STACK */}
        {/* ===================== */}
        <div className="w-full flex justify-center lg:hidden">
          <div className="w-full max-w-md space-y-6">
            <Image
              src="/process.jpg"
              alt="Hiring network"
              width={720}
              height={480}
              className="rounded-xl object-cover shadow-md"
            />
            <Image
              src="/process1.jpg"
              alt="AI + Human collaboration"
              width={720}
              height={480}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
        {/* ======================= */}
        {/* 💻 DESKTOP IMAGE STACK */}
        {/* ======================= */}

        {/* Left Image Section */}
        <div className="relative w-full lg:w-1/2 hidden lg:flex justify-center lg:-translate-x-10">
          
          {/* Back image — comes from ABOVE */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-3/4 rounded-xl overflow-hidden shadow-md transform translate-y-[-125px]"
          >
            <Image
              src="/process.jpg"
              alt="Team discussing hiring strategy"
              width={600}
              height={450}
              className="rounded-xl object-cover"
            />
          </motion.div>

          {/* Front overlapping image — comes from BELOW */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute bottom-[-150px] right-[-40px] w-[65%] rounded-xl overflow-hidden shadow-lg"
          >
            
            <Image
              src="/process1.jpg"
              alt="Recruitment professionals at work"
              width={600}
              height={450}
              className="rounded-xl object-cover"
            />
          </motion.div>
        </div>
        
        {/* ================= */}
        {/* CONTENT (SHARED) */}
        {/* ================= */}
        <div className="reveal-element w-full lg:w-1/2">
          <div className="relative bg-white border border-black/10 shadow-lg p-10 rounded-xl">
            <h2 className="text-4xl font-semibold leading-tight text-gray-900 mb-4">
              Your Trusted Hiring Partner
            </h2>

            <p className="text-gray-600 mb-8">
              At Merito, we bring strategy, data, and domain expertise together
              to simplify recruitment and help businesses scale with the right
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

            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-gray-900">20+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>

            <Link href="/about">
              <Button
                variant="foreground"
                className="px-6 py-6 text-base flex items-center gap-2"
              >
                Learn more about us
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
