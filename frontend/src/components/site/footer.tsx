import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold text-balance"><span className="text-[#EC2229]">M</span>erito</h3>
            </div>
            <p className="text-[#40444b] text-sm">
              Merito offers full-stack talent services for people-first companies. Our solutions are based on our unique approach of Acquired Intelligence (AI).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-[#40444b] hover:text-[#004250] text-sm transition-colors">
                About Us
              </Link>
              <Link href="/our-people" className="block text-[#40444b] hover:text-[#004250] text-sm transition-colors">
                Our People
              </Link>
              <Link href="/talent" className="block text-[#40444b] hover:text-[#004250] text-sm transition-colors">
                Talent
              </Link>
              <Link href="/customers" className="block text-[#40444b] hover:text-[#004250] text-sm transition-colors">
                Customers
              </Link>
              <Link href="/insights" className="block text-[#40444b] hover:text-[#004250] text-sm transition-colors">
                Insights
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <Link href="/apply" className="block text-[#40444b] hover:text-[#004250] text-sm transition-colors">
                Apply for Jobs
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-[#40444b]">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@merito.com" className="hover:underline hover:text-[#004250]">admin@merito.ai</a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-[#40444b]">
                <Phone className="h-4 w-4" />
                <a href="tel:+91 9767663123" className="hover:underline hover:text-[#004250]">+91 9767663123</a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-[#40444b]">
                <MapPin className="h-4 w-4" />
                <a href="https://maps.app.goo.gl/BxEXHrkSbkH6YAHX7" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#004250]">1st Floor, Shreyas Crest, Baner, Pune</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#40444b] mt-8 pt-8 text-center">
          <p className="text-[#40444b] text-sm">
            © 2024 Merito. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
