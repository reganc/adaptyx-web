import type { Metadata } from "next";
import { StubProductPage } from "@/components/adaptyx/StubProductPage";
import { getProduct } from "@/lib/products";

const product = getProduct("signal");

export const metadata: Metadata = {
  title: { absolute: `${product.name} — Cross-domain reasoning & probabilistic forecasting` },
  description: product.tagline,
  alternates: { canonical: product.href },
};

export default function SignalPage() {
  return (
    <StubProductPage
      product={product}
      headlineEm="explains itself."
      headlineRest="Cross-domain reasoning that"
      preview={[
        { k: "Geo-economic cycles", v: "ECM · cliodynamic" },
        { k: "Atmospheric", v: "NWS · NEXRAD · USGS · SWPC" },
        { k: "Market microstructure", v: "adaptive meta-model" },
        { k: "Reasoner", v: "LLM + Qdrant" },
      ]}
      capabilityHints={[
        {
          title: "Cycle analysis for geo-economic regimes",
          body:
            "ECM π-cycle engine plus a cliodynamic model aggregate economic, geopolitical, social, and capital signals into regime attractors. Signal surfaces where the system is now, where it's drifting, and what historical analogs look most like the current configuration.",
        },
        {
          title: "Atmospheric anomalies, in real time",
          body:
            "A unified signal pipeline aggregates NOAA NWS/GFS, NEXRAD radar, USGS seismic, NOAA space-weather, NDBC buoys, and Open-Meteo into one TimescaleDB — with anomaly detection that knows the difference between a weird hour and a regime shift.",
        },
        {
          title: "Adaptive trading meta-model",
          body:
            "Every closed trade is a labeled training example. A meta-model learns: given this signal, in this regime, for this ticker — what's the probability of a win today? It retrains every night, drift-flags decay automatically, and a learning ledger makes today's beliefs legible to a human.",
        },
        {
          title: "Cross-domain coincidence detector",
          body:
            "The reasoning layer correlates signals across atmospheric, geo-economic, market, and your own warehouse data — and surfaces episodes of coincident salience with an LLM-written hypothesis. Probabilistic forecasts, anomaly graphs, and scenario explorers attach to every domain.",
        },
      ]}
    />
  );
}
