import type { Metadata } from "next";
import Link from "next/link";
import { AdaptyxNav } from "@/components/adaptyx/Nav";
import { AdaptyxFooter } from "@/components/adaptyx/Footer";
import { CTABlock } from "@/components/adaptyx/CTABlock";
import { SecHead, Eyebrow } from "@/components/adaptyx/SecHead";
import { ProductIcon } from "@/components/adaptyx/ProductIcon";
import { products } from "@/lib/products";
import { ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Adaptyx Labs — Applied AI for the industries that run the physical world",
  },
  description:
    "Adaptyx Labs is an applied-AI product studio building flagship vertical software for skilled nursing, assisted living, construction, regenerative agriculture, and predictive analytics.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <main style={{ background: "var(--color-cream)" }}>
      <AdaptyxNav variant="dark" />
      <Hero />
      <ProductsSection />
      <StackSection />
      <CTABlock
        eyebrow="Talk to a product team"
        heading="Pick a product. We'll bring the operator and the engineer."
        body="Every Adaptyx demo is co-led by the engineers who built the product and the operator who shaped it. Tell us which vertical, and we'll route you to the right team within two business days."
      />
      <AdaptyxFooter />
      <ServiceJsonLd />
    </main>
  );
}

const Hero = () => (
  <header
    style={{
      position: "relative",
      background: "var(--color-navy-deep)",
      color: "#fff",
      overflow: "hidden",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 80%)",
      }}
    />
    <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "120px 32px 0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 80,
          alignItems: "end",
          marginBottom: 80,
        }}
      >
        <div>
          <Eyebrow onDark>Adaptyx Labs · Applied AI Product Studio</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 7.5vw, 116px)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.028em",
              margin: "24px 0 0",
              color: "#fff",
              textWrap: "balance",
            }}
          >
            Vertical software for the industries the{" "}
            <em style={{ fontStyle: "normal", color: "var(--color-gold-light)" }}>cloud era forgot</em>.
          </h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, paddingBottom: 18 }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 19,
              lineHeight: 1.55,
              maxWidth: "48ch",
              color: "rgba(255,255,255,0.78)",
              margin: 0,
            }}
          >
            Adaptyx builds flagship AI-native software for the industries that run the physical world — skilled
            nursing, assisted living, construction, regenerative agriculture, and the analytics that tie them
            together. One studio, five products, all engineered with modern AI at the core.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Btn href="#products" primary>Explore products →</Btn>
            <Btn href="#contact">Request a demo</Btn>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.12)",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: 14,
          }}
        >
          Flagship products
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 18,
            fontFamily: "var(--font-display)",
            fontSize: "clamp(15px, 1.35vw, 19px)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            alignItems: "center",
          }}
        >
          {products.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                opacity: 0.85,
                color: "#fff",
                textDecoration: "none",
                minWidth: 0,
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9.5,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  border: "1px solid rgba(200,146,42,0.4)",
                  padding: "2px 6px",
                  borderRadius: 2,
                  fontWeight: 500,
                  flexShrink: 0,
                }}
              >
                {p.vertical.split(" ")[0]}
              </span>
              {p.name}
            </Link>
          ))}
        </div>
      </div>

      <div
        style={{
          padding: "56px 0 96px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}
      >
        <HeroStat k="Founded" v="2024" d="Atlanta & San Francisco. Operator-led, AI-native from day one." />
        <HeroStat k="Flagship products" v="5" d="Shipping across senior care, construction, agriculture, and analytics." />
        <HeroStat k="Customers" v="140+" d="Facilities, jobsites, farms, and analytics teams across North America." />
        <HeroStat k="AI throughput" v="4.2B" d="Inference operations per month across the Adaptyx product stack." />
      </div>
    </div>
  </header>
);

const HeroStat = ({ k, v, d }: { k: string; v: string; d: string }) => (
  <div>
    <div
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.5)",
        marginBottom: 10,
      }}
    >
      {k}
    </div>
    <div
      style={{
        fontFamily: "var(--font-display)",
        fontSize: 30,
        fontWeight: 700,
        letterSpacing: "-0.015em",
        lineHeight: 1,
        marginBottom: 8,
      }}
    >
      {v}
    </div>
    <div style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.7, maxWidth: "28ch" }}>{d}</div>
  </div>
);

const Btn = ({ href, primary = false, children }: { href: string; primary?: boolean; children: React.ReactNode }) => (
  <Link
    href={href}
    style={{
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      padding: "14px 22px",
      borderRadius: 2,
      border: primary ? "1px solid var(--color-gold)" : "1px solid currentColor",
      background: primary ? "var(--color-gold)" : "transparent",
      color: primary ? "#07101F" : "inherit",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
    }}
  >
    {children}
  </Link>
);

const ProductsSection = () => (
  <section id="products" style={{ background: "var(--color-cream)", padding: "120px 32px" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <SecHead
        index="§ 01 — Products"
        eyebrow="Five flagships. One studio."
        heading={<>AI-native software, built for the work itself.</>}
        lede="Every Adaptyx product is engineered from day one with modern AI at the core — not retrofit onto legacy code. Pick the vertical, then dive deep into how we built it."
      />
      <div style={{ display: "grid", gap: 16 }}>
        {products.map((p, i) => (
          <Link
            key={p.id}
            href={p.href}
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr 1.2fr 180px",
              gap: 40,
              padding: "36px 40px",
              background: "#fff",
              border: "1px solid var(--color-border)",
              borderRadius: 2,
              alignItems: "center",
              position: "relative",
              textDecoration: "none",
              color: "#111",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--color-stone)",
                }}
              >
                P0{i + 1}
              </div>
              <div
                style={{
                  width: 56,
                  height: 56,
                  border: "1px solid var(--color-border)",
                  borderRadius: 2,
                  background: "var(--color-off-white)",
                  color: "var(--color-navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ProductIcon id={p.id} size={28} />
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 10.5,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-gold-dark)",
                  marginBottom: 6,
                }}
              >
                {p.vertical}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 30,
                  fontWeight: 800,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                {p.name}
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10.5,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--color-stone)",
                  marginTop: 8,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background:
                      p.stage === "live"
                        ? "var(--color-success)"
                        : p.stage === "beta"
                          ? "var(--color-gold)"
                          : "var(--color-stone)",
                    marginRight: 6,
                  }}
                />
                {p.stageLabel}
              </div>
            </div>

            <div style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.55, opacity: 0.82, maxWidth: "56ch", margin: 0 }}>
              {p.tagline}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  marginTop: 12,
                  color: "var(--color-gold-dark)",
                }}
              >
                <span
                  style={{
                    background: "var(--color-gold)",
                    color: "#07101F",
                    padding: "2px 6px",
                    borderRadius: 2,
                    fontWeight: 700,
                    fontSize: 9.5,
                    letterSpacing: "0.08em",
                  }}
                >
                  AI
                </span>
                {p.ai}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  padding: "12px 18px",
                  border: "1px solid var(--color-navy)",
                  color: "var(--color-navy)",
                  borderRadius: 2,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Explore <span aria-hidden>→</span>
              </span>
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-stone)",
                }}
              >
                {p.certs}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const StackSection = () => (
  <section
    id="research"
    style={{ background: "var(--color-navy)", color: "#fff", padding: "120px 32px" }}
  >
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <SecHead
        onDark
        index="§ 02 — The Stack"
        eyebrow="Modern AI, vertically applied"
        heading={<>The same foundation, five times the leverage.</>}
        lede="Generative reasoning, multimodal perception, and probabilistic forecasting — wired into the actual surfaces operators work in. No AI feature stickers. The AI is the product."
      />
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 64, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <StackPoint num="01" title="Frontier + fine-tuned models, routed per task" body="Adaptyx's gateway routes each call to the right model for the job — frontier for open reasoning, distilled fine-tunes for high-volume clinical, scheduling, and forecasting tasks." />
          <StackPoint num="02" title="Multimodal perception across documents, vision, and sensors" body="From MDS forms and submittal PDFs to jobsite cameras and soil-probe time series — every product reads the inputs operators already produce, no manual data entry to power the AI." />
          <StackPoint num="03" title="Probabilistic forecasting, with explainability built in" body="Every Adaptyx prediction ships with the inputs, the model version, and a confidence band. Operators can trust it, audit it, and override it — and the system learns from the overrides." />
          <StackPoint num="04" title="Privacy and compliance as a platform feature" body="HIPAA, SOC 2, and per-customer data scoping aren't bolted on. They're the substrate every product is written against — which is how a SNF, a job-trailer, and a farm operator all run on the same stack." />
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 2,
            aspectRatio: "1 / 1",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <StackLayer label="Products · SNF / ALF / Build / Terra / Signal" tag="surface" highlighted />
            <StackLayer label="Vertical orchestration layer" tag="routing" pulse />
            <StackLayer label="Model gateway · frontier + fine-tuned" tag="inference" />
            <StackLayer label="Multimodal perception · docs / vision / sensors" tag="input" />
            <StackLayer label="Probabilistic forecasting engine" tag="predict" />
            <StackLayer label="Privacy plane · HIPAA / SOC 2 / per-tenant" tag="trust" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StackPoint = ({ num, title, body }: { num: string; title: string; body: string }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "48px 1fr",
      gap: 20,
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,0.12)",
    }}
  >
    <div
      style={{
        fontFamily: "var(--font-display)",
        fontSize: 32,
        fontWeight: 900,
        color: "var(--color-gold)",
        letterSpacing: "-0.02em",
        lineHeight: 1,
      }}
    >
      {num}
    </div>
    <div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "-0.005em",
          margin: "0 0 8px",
          color: "#fff",
        }}
      >
        {title}
      </h3>
      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15.5, lineHeight: 1.55, margin: 0, maxWidth: "46ch" }}>
        {body}
      </p>
    </div>
  </div>
);

const StackLayer = ({
  label,
  tag,
  highlighted = false,
  pulse = false,
}: {
  label: string;
  tag: string;
  highlighted?: boolean;
  pulse?: boolean;
}) => (
  <div
    style={{
      flex: 1,
      border: `1px solid ${highlighted ? "rgba(200,146,42,0.3)" : "rgba(255,255,255,0.1)"}`,
      background: highlighted ? "rgba(200,146,42,0.08)" : "rgba(255,255,255,0.02)",
      borderRadius: 2,
      padding: "14px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.05em",
      color: highlighted ? "var(--color-gold-light)" : "rgba(255,255,255,0.65)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <span>{label}</span>
    <span
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: 10,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        opacity: 0.55,
      }}
    >
      {tag}
    </span>
    {pulse ? (
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "30%",
          background: "linear-gradient(90deg, transparent, rgba(200,146,42,0.18), transparent)",
          animation: "adxSlide 3.4s linear infinite",
        }}
      />
    ) : null}
  </div>
);

