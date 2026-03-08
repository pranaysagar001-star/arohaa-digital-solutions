"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, Elevare Consulting",
    quote:
      "Arohaa Digital Solutions transformed our online image completely. Clients now trust us before the first call."
  },
  {
    name: "Nisha Verma",
    role: "Director, Urban Medica",
    quote:
      "The website and content quality feel truly premium. Their process is fast, strategic, and highly professional."
  },
  {
    name: "Rohan Sethi",
    role: "CEO, Nova Buildworks",
    quote:
      "Their digital strategy gave us a measurable jump in leads and stronger brand authority in our market."
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Client Results"
          title="Trusted by growth-focused business leaders"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <p className="text-sm leading-relaxed text-white/80">â€œ{item.quote}â€</p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <p className="font-medium text-white">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-white/55">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
