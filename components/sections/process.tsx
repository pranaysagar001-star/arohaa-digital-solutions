"use client";

import { motion } from "framer-motion";
import { Lightbulb, Wrench, Gauge, Rocket } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const items = [
  {
    title: "Strategy",
    description: "Deep discovery and positioning to align your digital assets with revenue goals.",
    icon: Lightbulb
  },
  {
    title: "Setup",
    description: "We build your premium web and content infrastructure with exacting quality standards.",
    icon: Wrench
  },
  {
    title: "Optimize",
    description: "Continuous refinements on design, SEO, content, and funnel touchpoints.",
    icon: Gauge
  },
  {
    title: "Scale",
    description: "Data-backed growth execution to expand brand authority and qualified opportunities.",
    icon: Rocket
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Our Workflow"
          title="A proven process designed for speed, clarity, and growth"
          description="From strategy to scale, each stage is engineered to create long-term digital momentum."
        />

        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-agency-gold/50 to-transparent md:block" />
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.15 }}
              className="glass-card relative rounded-2xl p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-agency-gold/40 bg-agency-gold/10">
                <item.icon className="h-5 w-5 text-agency-soft" />
              </div>
              <h3 className="font-display text-2xl text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
