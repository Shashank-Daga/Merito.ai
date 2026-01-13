"use client";

import { Button } from "@/components/ui/button";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onBookCall: () => void;
}

export function Hero({ onBookCall }: HeroProps) {
  useRevealAnimation({ stagger: true });

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-secondary">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient + Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />

      {/* Subtle Tech Glow */}
      <div className="pointer-events-none absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-6 md:px-12 w-full">
        <div className="max-w-xl">
          <h1
            className="reveal-element text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            <span className="relative text-[#EC2229]">Expedite</span> Hiring
          </h1>

          <p className="reveal-element mt-5 text-white/90 leading-relaxed text-xl md:text-xl">
            Human expertise meets intelligent technology to <br /> expedite
            hiring and <br /> connect the right talent with the right role.
          </p>

          <div className="reveal-element mt-8 flex items-center gap-4">
            <Button
              size="lg"
              variant="foreground"
              onClick={onBookCall}
              className="
                relative overflow-hidden
                px-10 py-6 text-lg
                after:absolute after:inset-0
                after:bg-white/10 after:opacity-0
              "
            >
              Book a Discovery Call
              <ArrowUpRight className="!w-5 !h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
