import Link from "next/link";

import { MagneticButton } from "@/components/magnetic-button";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="glass-card relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-10">
          <div className="absolute -left-16 top-0 h-44 w-44 rounded-full bg-agency-gold/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

          <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">
            Ready To Build Your Digital Presence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Partner with Arohaa Digital Solutions to launch a premium digital ecosystem that drives trust, visibility, and growth.
          </p>

          <div className="mt-8 flex justify-center">
            <MagneticButton>
              <Button asChild size="lg">
                <Link href="#contact">Start Your Project</Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
