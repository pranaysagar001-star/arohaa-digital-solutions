import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="font-display text-lg text-white">Arohaa Digital Solutions</p>
          <p className="text-sm text-white/60">Premium digital growth partner for modern businesses.</p>
        </div>
        <div className="flex items-center gap-5 text-sm text-white/65">
          <Link href="#services" className="transition hover:text-white">Services</Link>
          <Link href="#portfolio" className="transition hover:text-white">Work</Link>
          <Link href="#contact" className="transition hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
