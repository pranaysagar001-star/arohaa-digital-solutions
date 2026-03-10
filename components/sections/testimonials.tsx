"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";

const testimonials = [
  {
    name: "Srinivas",
    role: "Founder, Srinu Dance Studio",
    quote:
      "Before Arohaa Digital Solutions stepped in, nobody could find us online. They didn’t just build a site; they gave Srinu Dance Studio a digital identity that actually captures the energy of our classes. Our visibility has exploded, and we’re finally seeing the student turnout reflect the hard work we put into our choreography."
  },
  {
    name: "Asif MD",
    role: "Founder, Taj Bakery",
    quote:
      "Arohaa Digital Solutions turned our digital presence into a true growth engine for Taj Bakery. Their innovative strategies didn't just build a platform; they directly boosted our revenue and streamlined our entire operation. If you’re looking to scale your business with a team that delivers real results, I highly recommend them."
  },
  {
    name: "Manasvi Yadala",
    role: "CEO, Raasiii",
    quote:
      "Arohaa Digital Solutions delivered an exceptional web platform for Raasii, seamlessly translating our vision into a high-performance digital reality. Their commitment to technical excellence and brand alignment is evident in every detail of the final product. We highly recommend their services to any organization seeking a sophisticated and user-centric online presence."
  },
  {
    name: "Srinath",
    role: "Director, Rainbow Colour Lab",
    quote:
      "Before we partnered with Arohaa Digital Solutions, Rainbow Colour Lab didn't have much of a footprint online. They took our reputation for quality and translated it into a professional, high-impact digital presence that actually drives business. Our reach has grown tremendously, and we’re finally being seen by the wider audience we deserve."
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
              <p className="text-sm leading-relaxed text-white/80">{item.quote}</p>
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
