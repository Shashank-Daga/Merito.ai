import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Suspense } from "react"
import { Testimonials } from "@/components/sections/testimonials"
import { Toaster } from "@/components/ui/toaster"

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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-secondary`} suppressHydrationWarning={true}>
        {/* Calendly script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
          async
          data-auto-load="false"
        />

        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children}</main>
          <Testimonials />
          <Footer />
          <Analytics />
        </Suspense>

        <Toaster />
      </body>
    </html>
  )
}
