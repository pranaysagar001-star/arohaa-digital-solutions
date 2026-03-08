"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { MagneticButton } from "@/components/magnetic-button";
import { Button } from "@/components/ui/button";

const HeroThreeBackground = dynamic(
  () => import("@/components/hero-three-background").then((mod) => mod.HeroThreeBackground),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <HeroThreeBackground />
      <div className="grid-overlay absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-hero-radial" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-agency-soft">
            Premium Digital Agency
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
            Building Powerful Digital Presence For Modern Businesses.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/75 md:text-xl">
            Arohaa Digital Solutions helps businesses grow online through premium websites, creative content, and strategic digital presence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton>
              <Button asChild size="lg">
                <Link href="#contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild size="lg" variant="secondary">
                <Link href="#portfolio">View Our Work</Link>
              </Button>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 hidden h-28 w-[380px] -translate-x-1/2 rounded-full bg-agency-gold/20 blur-[110px] md:block" />
    </section>
  );
}
