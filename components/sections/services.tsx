"use client";

import { Globe, Laptop, Clapperboard, Camera, Film, Youtube, Instagram, Search } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    title: "Online Business Setup",
    description: "Complete digital presence creation and strategic foundations for serious growth.",
    icon: Globe,
    tags: ["Brand Presence", "Strategy", "Launch"]
  },
  {
    title: "Online Platform Management",
    description: "Consistent channel growth with optimized management for social and local search visibility.",
    icon: Instagram,
    tags: ["Instagram", "YouTube", "Google Business Profile"],
    extras: [Youtube, Search]
  },
  {
    title: "Premium Website Development",
    description: "Custom high-performance websites built for trust, conversion, and premium positioning.",
    icon: Laptop,
    tags: ["Custom Design", "SEO", "Performance"]
  },
  {
    title: "Creative Editing Suite",
    description: "Elite post-production services crafted to make every visual asset stand out.",
    icon: Clapperboard,
    tags: ["Video Editing", "Photo Editing", "Thumbnail Design", "Reel Editing"],
    extras: [Camera, Film]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="What We Deliver"
          title="Premium digital services engineered for serious business growth"
          description="Every service is built to strengthen your digital brand, increase trust, and drive measurable business outcomes."
        />

        <AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group glass-card relative overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:border-agency-gold/50 hover:shadow-glow"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-agency-gold/15 blur-3xl transition group-hover:bg-agency-gold/30" />
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-agency-gold/30 bg-agency-gold/10 p-3">
                    <service.icon className="h-5 w-5 text-agency-soft" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-medium text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {service.extras ? (
                      <div className="mt-4 flex gap-2 text-white/60">
                        {service.extras.map((Icon, i) => (
                          <Icon key={i} className="h-4 w-4" />
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
