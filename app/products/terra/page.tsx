import type { Metadata } from "next";
import { StubProductPage } from "@/components/adaptyx/StubProductPage";
import { getProduct } from "@/lib/products";

const product = getProduct("terra");

export const metadata: Metadata = {
  title: { absolute: `${product.name} — A regenerative land intelligence engine` },
  description: product.tagline,
  alternates: { canonical: product.href },
};

export default function TerraPage() {
  return (
    <StubProductPage
      product={product}
      headlineEm="optimizes for decades, not seasons."
      headlineRest="A land intelligence engine that"
      preview={[
        { k: "Land understanding", v: "SSURGO · NDVI · DEM" },
        { k: "Climate model", v: "CMIP6 · SSP2-4.5/3-7.0" },
        { k: "Biology layer", v: "microbiome" },
        { k: "Trajectory", v: "5 / 10 / 30 yr" },
      ]}
      capabilityHints={[
        {
          title: "Land understanding from a polygon",
          body:
            "Draw a boundary on a map. Terra ingests USDA SSURGO soils, NOAA climate, NASA NDVI, and topography — and builds an opinionated picture of the soil, water, slope, microclimate, and recent history of that exact piece of ground.",
        },
        {
          title: "Soil biology as a first-class input",
          body:
            "Most ag tools treat soil like dirt. Terra models the living system — mycorrhizal compatibility per crop, nitrogen-fixer pairings, tillage penalties on hyphal networks, and inoculation suggestions when the biome looks depleted. The recommendations change accordingly.",
        },
        {
          title: "Climate trajectory mode",
          body:
            "A 30-year orchard planted for today's USDA zone will fail in tomorrow's. Terra pulls CMIP6 climate projections under multiple scenarios and sites perennials for the climate they'll mature into — with a drift view showing what the plot looks like in 2040, 2055, 2070.",
        },
        {
          title: "Action engine + holistic grazing",
          body:
            "Beyond the long-horizon plan, Terra surfaces the one action that matters this week given the season and conditions. For mixed operations, paddock sizing and recovery time use Savory-style holistic grazing rules grounded in satellite-validated forage.",
        },
      ]}
    />
  );
}
