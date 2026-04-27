import type { Metadata } from "next";
import { editorialColors } from "@/components/Brand";
import { Masthead } from "@/components/sections/Masthead";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Brief } from "@/components/sections/Brief";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductMock } from "@/components/sections/ProductMock";
import { AudienceProof } from "@/components/sections/AudienceProof";
import { Pilot } from "@/components/sections/Pilot";
import { Footer } from "@/components/sections/Footer";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function Page() {
  return (
    <main className="design-frame" style={{ background: editorialColors.cream }}>
      <Masthead />
      <Hero />
      <Ticker />
      <Brief />
      <HowItWorks />
      <ProductMock />
      <AudienceProof />
      <Pilot />
      <Footer />
      <ServiceJsonLd />
    </main>
  );
}
