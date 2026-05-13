import type { Metadata } from "next";
import { StubProductPage } from "@/components/adaptyx/StubProductPage";
import { getProduct } from "@/lib/products";

const product = getProduct("build");

export const metadata: Metadata = {
  title: { absolute: `${product.name} — AI-assisted home design and construction` },
  description: product.tagline,
  alternates: { canonical: product.href },
};

export default function BuildPage() {
  return (
    <StubProductPage
      product={product}
      headlineEm="that actually understands homes."
      headlineRest="An AI design studio"
      preview={[
        { k: "Floor plan editor", v: "2D + 3D" },
        { k: "Code rules", v: "IRC 2024" },
        { k: "Render", v: "Cycles · OptiX" },
        { k: "Pricing", v: "ZIP-keyed" },
      ]}
      capabilityHints={[
        {
          title: "Natural-language home editing",
          body:
            "Sketch a floor plan or ask in plain English — \"add a 12×14 bedroom to the south side with a closet on the west wall.\" Build proposes a change to the BIM-lite graph, you approve, the floor plan and 3D view update together.",
        },
        {
          title: "Photoreal 3D, in seconds",
          body:
            "Every save renders a real-time 3D preview, with Blender Cycles + OptiX standing by for higher-fidelity stills when you want to step inside the room. No external CAD seat, no plugin chain, no render farm.",
        },
        {
          title: "Building code, lived not linked",
          body:
            "An IRC 2024 ruleset (plus jurisdictional overlays) runs against the design continuously — egress, stairs, headers, smoke/CO placement, IECC envelope. Every finding cites the section; ambiguous answers carry a \"needs human review\" flag.",
        },
        {
          title: "Energy, HVAC, and price, simulated",
          body:
            "EnergyPlus and Radiance run on the geometry you draw, not on assumptions. HVAC sizing, daylight, and a regional cost estimate keyed to your county all update as the design evolves — so trade-offs are visible while there's still time to change them.",
        },
      ]}
    />
  );
}
