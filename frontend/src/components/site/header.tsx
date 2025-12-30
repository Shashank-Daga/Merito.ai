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
          ? "bg-white/80 backdrop-blur border-b shadow-sm"
          : "bg-secondary border-b"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 md:py-5">
        <div className="flex items-center">
          {/* Logo */}
          <Link
            href="/"
            className="ml-15 flex-shrink-0 font-semibold text-2xl tracking-tight"
          >
            <img src="/Merito.svg" alt="Merito Logo" className="h-10 w-auto" />
            <span className="sr-only">Go to homepage</span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="flex-1 hidden md:flex justify-center items-center gap-10"
            aria-label="Main"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  relative text-base font-medium text-foreground/80
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
          <div className="flex items-center gap-4">
            <Link href="/apply" className="hidden md:block">
              <Button variant="foreground" className="relative px-6 py-2">
                Apply
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="
                md:hidden inline-flex h-9 w-9 items-center justify-center
                rounded-md border border-black/10
                hover:bg-muted transition
              "
            >
              <span className="sr-only">Open menu</span>
              <div className="h-4 w-4">
                <div
                  className={cn(
                    "h-0.5 w-4 bg-foreground transition-transform",
                    open && "translate-y-1 rotate-45"
                  )}
                />
                <div
                  className={cn(
                    "mt-1 h-0.5 w-4 bg-foreground transition-opacity",
                    open && "opacity-0"
                  )}
                />
                <div
                  className={cn(
                    "mt-1 h-0.5 w-4 bg-foreground transition-transform",
                    open && "-translate-y-1 -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden mt-4 rounded-xl border bg-white shadow-lg animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/apply" onClick={() => setOpen(false)}>
                <Button className="mt-2 w-full rounded-xl px-6 py-2 text-white">
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
