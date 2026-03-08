import { CtaSection } from "@/components/sections/cta";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TrustSection } from "@/components/sections/trust";
import { WhyChooseSection } from "@/components/sections/why-choose";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
