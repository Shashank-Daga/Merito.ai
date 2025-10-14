import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Suspense } from "react"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Merito.ai",
  description:
    "Expedite Hiring connects companies with top talent fast. Expert staffing, streamlined process, and industry-aligned placements.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning={true}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning={true}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children}</main>
          <Testimonials />
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
