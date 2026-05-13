import type { Metadata } from "next";
import { editorialColors } from "@/components/Brand";
import { AdaptyxNav } from "@/components/adaptyx/Nav";
import { AdaptyxFooter } from "@/components/adaptyx/Footer";
import { MoreProducts } from "@/components/adaptyx/MoreProducts";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Brief } from "@/components/sections/Brief";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductMock } from "@/components/sections/ProductMock";
import { Depth } from "@/components/sections/Depth";
import { AudienceProof } from "@/components/sections/AudienceProof";
import { Pilot } from "@/components/sections/Pilot";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `Adaptyx SNF · CareCore — ${siteConfig.tagline}` },
  description: siteConfig.description,
  alternates: { canonical: "/products/snf" },
  openGraph: {
    type: "website",
    url: "/products/snf",
    title: `Adaptyx SNF — CareCore`,
    description: siteConfig.description,
  },
};

export default function SnfProductPage() {
  return (
    <main style={{ background: editorialColors.cream }}>
      <AdaptyxNav variant="dark" />
      <div className="design-frame">
        <Hero />
        <Ticker />
        <Brief />
        <HowItWorks />
        <ProductMock />
        <Depth />
        <AudienceProof />
        <Pilot />
      </div>
      <MoreProducts excludeId="snf" />
      <AdaptyxFooter />
      <ServiceJsonLd />
    </main>
  );
}
