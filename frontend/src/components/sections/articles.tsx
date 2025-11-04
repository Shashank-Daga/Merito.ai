"use client"

import Image from "next/image"
import { useState } from "react"
import { useRevealAnimation } from "@/hooks/useRevealAnimation"

export function Articles() {
  useRevealAnimation({ stagger: true })

  const [visibleCount, setVisibleCount] = useState(6)

  const articles = [
    {
      id: 1,
      title: "Pioneering Talent Acquisition for D2C Success in India",
      image: "/Insights/Articles/1.png"
    },
    {
      id: 2,
      title: "Crafting a Shortlist-worthy CV",
      image: "/Insights/Articles/2.webp"
    },
    {
      id: 3,
      title: "AI and Automation in HR",
      image: "/Insights/Articles/3.webp"
    },
    {
      id: 4,
      title: "Moving from Job-based to Skill-based Organization",
      image: "/Insights/Articles/4.webp"
    },
    {
      id: 5,
      title: "Overcome the Hiring Biases in 2024",
      image: "/Insights/Articles/5.webp"
    },
    {
      id: 6,
      title: "Top 5 Hurdles in Your OKR Implementation & How to Tackle them",
      image: "/Insights/Articles/6.webp"
    },
    {
      id: 7,
      title: "Acing Recruitment- Irrespective of Who Drives the Market",
      image: "/Insights/Articles/7.webp"
    },
    {
      id: 8,
      title: "What is Company Culture?",
      image: "/Insights/Articles/8.webp"
    },
    {
      id: 9,
      title: "Breaking Barriers: Tapping the High Potential Resource Pool of women on Career-Break",
      image: "/Insights/Articles/9.webp"
    },
    {
      id: 10,
      title: "Tech Job Market: Navigating the Highs & Lows",
      image: "/Insights/Articles/10.svg"
    },
    {
      id: 11,
      title: "Building an Internal Talent Marketplace: Making Your Organization Future-Proof",
      image: "/Insights/Articles/11.webp"
    },
    {
      id: 12,
      title: "Nurturing Continuous Upskilling: Strategies for Companies to Stay Ahead",
      image: "/Insights/Articles/12.webp"
    },
    {
      id: 13,
      title: "New Trends in Corporate Learning – Bringing Learning in the Flow of Work",
      image: "/Insights/Articles/13.webp"
    },
    {
      id: 14,
      title: "Measuring Return on Learning Investment: A Strategic Approach for Companies",
      image: "/Insights/Articles/14.webp"
    },
    {
      id: 15,
      title: "FAST Goals: The Next Evolution in Goal Setting",
      image: "/Insights/Articles/15.webp"
    },
    {
      id: 16,
      title: "Driving Successful Business Outcomes with OKRs: Unlocking the Power of Alignment and Focus",
      image: "/Insights/Articles/16.webp"
    },
    {
      id: 17,
      title: "Need for Defined Learning Path for Employee Development",
      image: "/Insights/Articles/17.webp"
    },
    {
      id: 18,
      title: "How the Assessment can help Companies to Better Develop their Talent",
      image: "/Insights/Articles/18.webp"
    },
    {
      id: 19,
      title: "10 Key people metrics every company should track",
      image: "/Insights/Articles/19.webp"
    },
    {
      id: 20,
      title: "Leveraging People Analytics to Drive Organizational Performance",
      image: "/Insights/Articles/20.webp"
    },
    {
      id: 21,
      title: "How Companies Should Ensure That Their Employee Develop Right Behavioral Traits",
      image: "/Insights/Articles/21.webp"
    },
    {
      id: 22,
      title: "Why Defining Your Culture is Critical for Companies on the Rise",
      image: "/Insights/Articles/22.webp"
    },
    {
      id: 23,
      title: "Accelerating Onboarding Success: 5 Key Steps Employers Should Take to Help New Hires Hit the Road Faster",
      image: "/Insights/Articles/23.webp"
    },
    {
      id: 24,
      title: "Building a Solid Foundation: Strategies to Prevent Post-Joining Drop-Outs",
      image: "/Insights/Articles/24.webp"
    },
    {
      id: 25,
      title: "Engagement Is Key to Turn Your Disengaged Employee Into Raving Fan",
      image: "/Insights/Articles/25.webp"
    },
    {
      id: 26,
      title: "Nurturing Engagement: Empowering Employees in the Remote Work Era",
      image: "/Insights/Articles/26.webp"
    },
    {
      id: 27,
      title: "A Skills Based Approach For Effective Talent Planning",
      image: "/Insights/Articles/27.webp"
    },
    {
      id: 28,
      title: "How Technology is Changing the Way Employees Learn and Develop",
      image: "/Insights/Articles/28.webp"
    },
    {
      id: 29,
      title: "Leveraging Technology to Make Reward and Recognition More Meaningful",
      image: "/Insights/Articles/29.webp"
    },
    {
      id: 30,
      title: "Essential Tools for Seamless Remote Working: Enhancing Productivity and Collaboration",
      image: "/Insights/Articles/30.webp"
    },
    {
      id: 31,
      title: "10 News Way in which Employers are Driving Engagement",
      image: "/Insights/Articles/31.webp"
    },
    {
      id: 32,
      title: "Leveraging Technology for Enhanced Hiring Efficiency in Companies",
      image: "/Insights/Articles/32.webp"
    },
    {
      id: 33,
      title: "Video Interviews And How They Can Be Used for Campus Hiring",
      image: "/Insights/Articles/33.webp"
    },
    {
      id: 34,
      title: "Hiring at Entry Level: What Companies Can Do To Ensure Quality Hires from Campus",
      image: "/Insights/Articles/34.webp"
    },
    {
      id: 35,
      title: "Culture Fitment And How Assessments Can Help You For The Same",
      image: "/Insights/Articles/35.webp"
    },
    {
      id: 36,
      title: "5 ways in Which Assessments Can Help You Beyond Hiring",
      image: "/Insights/Articles/36.webp"
    },
    {
      id: 37,
      title: "Importance of Pre-hire Assessments",
      image: "/Insights/Articles/37.webp"
    },
    {
      id: 38,
      title: "How Video JDs Are More Effective in Attracting And Engaging With Prospective Talent",
      image: "/Insights/Articles/38.webp"
    },
    {
      id: 39,
      title: "5 Things Companies Should Do to Attract Better Talent",
      image: "/Insights/Articles/39.webp"
    },
    {
      id: 40,
      title: "Importance of Employer Branding",
      image: "/Insights/Articles/40.webp"
    }
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <h2 className="reveal-element text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, visibleCount).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <button className="mt-4 text-[#263238] font-medium hover:text-accent transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
        {visibleCount < articles.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="bg-[#004250] text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
