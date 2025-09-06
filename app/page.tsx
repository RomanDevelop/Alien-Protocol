import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Alien Protocol – Building the Intergalactic Future of Web3",
  description: "Alien Protocol is a next-generation intergalactic platform designed to connect communities, empower decentralized governance, and fuel the growth of innovative Web3 ecosystems.",
  openGraph: {
    type: "website",
    url: "https://alien-protocol.org",
    title: "Alien Protocol – Building the Intergalactic Future of Web3",
    description: "Alien Protocol is a next-generation intergalactic platform designed to connect communities, empower decentralized governance, and fuel the growth of innovative Web3 ecosystems.",
    images: [
      {
        url: "https://alien-protocol.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alien Protocol - Intergalactic Web3 Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://alien-protocol.org",
    title: "Alien Protocol – Building the Intergalactic Future of Web3",
    description: "Alien Protocol is a next-generation intergalactic platform designed to connect communities, empower decentralized governance, and fuel the growth of innovative Web3 ecosystems.",
    images: [
      "https://alien-protocol.org/og-image.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
