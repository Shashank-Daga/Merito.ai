import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-secondary overflow-hidden">
      {/* Ambient background accent */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              <span className="text-[#EC2229]">M</span>erito
            </h3>
            <p className="text-[#40444b] text-sm leading-relaxed max-w-sm">
              Merito offers full-stack talent services for people-first
              companies. Our solutions are based on our unique approach of
              Acquired Intelligence (AI).
            </p>

            {/* LinkedIn */}
            <div className="pt-2">
              <a
                href="https://www.linkedin.com/company/merito-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 text-sm text-[#40444b]
                  transition-all duration-200
                  hover:text-black hover:underline
                "
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <div className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/our-people", label: "Our People" },
                { href: "/talent", label: "Talent" },
                { href: "/customers", label: "Customers" },
                { href: "/insights", label: "Insights" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    block text-sm text-[#40444b]
                    transition-all duration-200 ease-out
                    hover:text-black hover:translate-x-1 hover:underline
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Services</h3>
            <div className="space-y-3">
              <Link
                href="/apply"
                className="
                  block text-sm text-[#40444b]
                  transition-all duration-200 ease -out
                  hover:text-black hover:translate-x-1 hover:underline
                "
              >
                Apply for Jobs
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-[#40444b]">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@merito.com"
                  className="transition-colors hover:underline hover:text-[#004250]"
                >
                  admin@merito.ai
                </a>
              </div>

              <div className="flex items-start gap-2 text-sm text-[#40444b]">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+91 9767663123"
                  className="transition-colors hover:underline hover:text-[#004250]"
                >
                  +91 9767663123
                </a>
              </div>

              <div className="flex items-start gap-2 text-sm text-[#40444b]">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/BxEXHrkSbkH6YAHX7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:underline hover:text-[#004250]"
                >
                  1st Floor, Shreyas Crest, Baner, Pune
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-black/10 text-center">
          <p className="text-[#40444b] text-sm">
            © 2026 Merito. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
