"use client";

import { useEffect, useState } from "react";

import { AnimatedSection } from "@/components/animated-section";

const stats = [
  { label: "Businesses Served", value: 180, suffix: "+" },
  { label: "Projects Delivered", value: 420, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 1200;
    const step = () => {
      frame += 16;
      const progress = Math.min(frame / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value]);

  return (
    <span className="font-display text-4xl font-semibold text-white md:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export function TrustSection() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <Counter value={item.value} suffix={item.suffix} />
                <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
