"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container mt-4">
        <div className="glass-card flex h-16 items-center justify-between rounded-2xl px-4 md:px-6">
          <Link href="#top" className="font-display text-lg font-semibold tracking-wide text-white">
            Arohaa <span className="gold-text">Digital</span> Solutions
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/75 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="default">
              <Link href="#contact">Start Your Project</Link>
            </Button>
          </div>

          <button className="p-2 text-white md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="container md:hidden"
          >
            <div className="glass-card mt-2 rounded-2xl p-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild size="default" className="mt-2">
                  <Link href="#contact" onClick={() => setOpen(false)}>
                    Start Your Project
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
