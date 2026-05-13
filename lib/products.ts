export type ProductId = "snf" | "alf" | "build" | "terra" | "signal";
export type ProductStage = "live" | "beta" | "preview";

export type Product = {
  id: ProductId;
  name: string;
  vertical: string;
  href: string;
  tagline: string;
  ai: string;
  stage: ProductStage;
  stageLabel: string;
  certs: string;
};

export const products: ReadonlyArray<Product> = [
  {
    id: "snf",
    name: "Adaptyx SNF",
    vertical: "Skilled Nursing",
    href: "/products/snf",
    tagline:
      "The clinical operating system for skilled nursing — AI-authored care plans, MDS-aligned assessments, fall and rehospitalization prediction, and staffing optimization built around what nurses, DONs, and administrators actually do each shift.",
    ai: "care-plan generation · fall-risk model · staffing engine",
    stage: "live",
    stageLabel: "Generally available",
    certs: "CMS-certified · HIPAA",
  },
  {
    id: "alf",
    name: "Adaptyx ALF",
    vertical: "Assisted Living",
    href: "/products/alf",
    tagline:
      "Resident-centered software for assisted living communities. ADL tracking, medication management, wellness intelligence, and a family portal that finally gives loved ones a real window into care.",
    ai: "wellness anomaly detection · eMAR · family AI updates",
    stage: "live",
    stageLabel: "Generally available",
    certs: "HIPAA · SOC 2",
  },
  {
    id: "build",
    name: "Adaptyx Build",
    vertical: "Home Design & Construction",
    href: "/products/build",
    tagline:
      "An AI-assisted home design and construction studio. Draw a floor plan, see it photoreal in seconds, check it against IRC 2024 building code, model energy and HVAC, and price it against your region — all in one tool, with an AI that actually understands homes.",
    ai: "natural-language editing · code compliance · photoreal rendering",
    stage: "beta",
    stageLabel: "Beta · early access",
    certs: "Web · 3D viewport · GPU render",
  },
  {
    id: "terra",
    name: "Adaptyx Terra",
    vertical: "Regenerative Agriculture",
    href: "/products/terra",
    tagline:
      "A regenerative land intelligence engine. Draw a polygon on a map and Terra returns a multi-decade plan for soil, crops, livestock, water, and carbon — optimizing for the long-term vitality of the land, not just this season's yield.",
    ai: "soil microbiome model · climate trajectory · holistic grazing",
    stage: "beta",
    stageLabel: "Beta · select operations",
    certs: "USDA-aligned · MRV ready",
  },
  {
    id: "signal",
    name: "Adaptyx Signal",
    vertical: "Cross-Domain Intelligence",
    href: "/products/signal",
    tagline:
      "A cross-domain reasoning layer that fuses geo-economic cycles, atmospheric anomalies, market microstructure, and your own warehouse data — then surfaces coincident salience across them. Probabilistic forecasts, anomaly graphs, and an LLM reasoner that explains the pattern.",
    ai: "cliodynamic cycles · weather anomalies · adaptive trading meta-model",
    stage: "beta",
    stageLabel: "Beta · invite only",
    certs: "Warehouse-native · TimescaleDB · Qdrant",
  },
];

export const getProduct = (id: ProductId): Product => {
  const p = products.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown product id: ${id}`);
  return p;
};

export const otherProducts = (excludeId: ProductId): ReadonlyArray<Product> =>
  products.filter((p) => p.id !== excludeId);
