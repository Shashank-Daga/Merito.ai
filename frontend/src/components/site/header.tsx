"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/customers", label: "Customers" },
    { href: "/insights", label: "Insights" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 md:ml-10"
          >
            <img
              src="/Merito.svg"
              alt="Merito Logo"
              className="h-11 w-auto"
            />
            <span className="sr-only">Go to homepage</span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-12"
            aria-label="Main"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  relative text-xl font-medium text-foreground/80
                  transition-colors duration-200
                  hover:text-foreground
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-[#EC2229]
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link href="/apply" className="hidden md:block">
              <Button variant="foreground" className="px-8 py-5 text-base">
                Apply
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="
                md:hidden inline-flex h-11 w-11 items-center justify-center
                rounded-md hover:bg-white/10 transition
              "
            >
              <div className="space-y-1">
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-foreground transition-transform",
                    open && "translate-y-1.5 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-foreground transition-opacity",
                    open && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-foreground transition-transform",
                    open && "-translate-y-1.5 -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden mt-3 rounded-xl border bg-white shadow-lg animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    rounded-md px-3 py-2.5
                    text-base font-medium
                    hover:bg-muted transition
                  "
                >
                  {item.label}
                </Link>
              ))}

              <Link href="/apply" onClick={() => setOpen(false)}>
                <Button className="mt-3 w-full rounded-xl py-3">
                  Apply
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
