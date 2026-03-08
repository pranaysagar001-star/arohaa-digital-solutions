"use client";

import { CheckCircle2, Brush, Zap, TrendingUp } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

const points = [
  { title: "Premium Quality Work", description: "Every deliverable reflects luxury-level standards and attention to detail.", icon: CheckCircle2 },
  { title: "Creative Strategy", description: "Design and content decisions are guided by business outcomes, not guesswork.", icon: Brush },
  { title: "Fast Execution", description: "High-speed production systems keep your momentum strong and consistent.", icon: Zap },
  { title: "Business Growth Focus", description: "We build for visibility, trust, lead quality, and long-term market positioning.", icon: TrendingUp }
];

export function WhyChooseSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Why Arohaa Digital Solutions"
          title="Built to make your business look elite and perform at scale"
        />

        <AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {points.map((point) => (
              <div key={point.title} className="glass-card rounded-2xl p-6">
                <point.icon className="h-6 w-6 text-agency-soft" />
                <h3 className="mt-4 font-display text-2xl text-white">{point.title}</h3>
                <p className="mt-2 text-sm text-white/70">{point.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
