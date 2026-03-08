"use client";

import Image from "next/image";
import { useState } from "react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Luxury Business Website",
    category: "Website Project",
    image: "/images/work/project1.jpg",
    description: "A premium conversion-focused website crafted for a modern service brand."
  },
  {
    title: "Creative Social Campaign",
    category: "Social Media Design",
    image: "/images/work/project2.jpg",
    description: "High-performing visual campaign for multi-platform digital growth."
  },
  {
    title: "Video Editing Showcase",
    category: "Video Editing",
    image: "/images/work/project3.jpg",
    description: "Premium editing and pacing built to maximize retention and trust."
  }
];

export function PortfolioSection() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Luxury digital experiences built for standout brands"
          description="A showcase of website builds, social assets, and premium editing outcomes."
        />

        <AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <Dialog key={project.title}>
                <DialogTrigger asChild>
                  <button
                    onClick={() => setActive(project)}
                    className="group glass-card relative overflow-hidden rounded-2xl text-left"
                  >
                    <div className="relative h-72">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-xs uppercase tracking-[0.16em] text-agency-soft">{project.category}</p>
                        <h3 className="mt-2 font-display text-xl text-white">{project.title}</h3>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{active.title}</DialogTitle>
                    <DialogDescription>{active.category}</DialogDescription>
                  </DialogHeader>
                  <div className="relative h-[320px] overflow-hidden rounded-xl">
                    <Image src={active.image} alt={active.title} fill className="object-cover" sizes="90vw" />
                  </div>
                  <p className="text-sm text-white/75">{active.description}</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
