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
    </main>
  );
}
