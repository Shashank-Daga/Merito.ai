import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-primary text-balance">Merito</h3>
            <p className="mt-2 text-sm text-foreground/70 text-pretty">
              We connect great companies with exceptional talent—faster.
            </p>
          </div>

          <nav aria-label="Footer" className="grid gap-2">
            <Link className="text-sm hover:underline" href="/about">
              About
            </Link>
            <Link className="text-sm hover:underline" href="/process">
              Process
            </Link>
            <Link className="text-sm hover:underline" href="/talent">
              Talent
            </Link>
          </nav>

          <div className="md:text-right">
            <p className="text-sm text-foreground/70">
              © {new Date().getFullYear()} Merito. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
