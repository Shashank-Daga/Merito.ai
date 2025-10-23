"use client"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/customers", label: "Customers" },
    { href: "/insights", label: "Insights" },
    { href: "/our-people", label: "Our People" },
  ]

  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 py-4 md:py-5">
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0 font-semibold text-xl tracking-tight">
            <span className="text-[#EC2229]">M</span>erito
            <span className="sr-only">Go to homepage</span>
          </Link>

          <nav className="flex-1 hidden justify-center items-center gap-8 md:flex" aria-label="Main">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/apply" className="hidden md:block">
              <Button className="text-white rounded-xl px-6 py-2">
                Apply
              </Button>
            </Link>

            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-muted"
            >
              <span className="sr-only">Open menu</span>
              <div className="h-4 w-4">
                <div className={cn("h-0.5 w-4 bg-foreground transition", open && "translate-y-1 rotate-45")}></div>
                <div className={cn("mt-1 h-0.5 w-4 bg-foreground transition", open && "opacity-0")}></div>
                <div className={cn("mt-1 h-0.5 w-4 bg-foreground transition", open && "-translate-y-1 -rotate-45")}></div>
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="mt-3 grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/apply">
                <Button className="text-white rounded-xl px-6 py-2">
                  Apply
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
