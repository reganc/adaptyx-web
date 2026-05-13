import Link from "next/link";
import { AdaptyxNav } from "@/components/adaptyx/Nav";
import { AdaptyxFooter } from "@/components/adaptyx/Footer";
import { CTABlock } from "@/components/adaptyx/CTABlock";
import { MoreProducts } from "@/components/adaptyx/MoreProducts";
import { Eyebrow } from "@/components/adaptyx/SecHead";
import { ProductIcon } from "@/components/adaptyx/ProductIcon";
import type { Product } from "@/lib/products";

type Props = {
  product: Product;
  headlineEm: string;
  headlineRest: string;
  preview: ReadonlyArray<{ k: string; v: string }>;
  capabilityHints: ReadonlyArray<{ title: string; body: string }>;
};

export const StubProductPage = ({ product, headlineEm, headlineRest, preview, capabilityHints }: Props) => (
  <main style={{ background: "var(--color-cream)" }}>
    <AdaptyxNav variant="dark" />
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
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "96px 32px 88px",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 72,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.5)",
              marginBottom: 14,
              textTransform: "uppercase",
            }}
          >
            <Link href="/" style={{ color: "inherit" }}>Adaptyx Labs</Link> · Products · {product.name}
          </div>
          <Eyebrow onDark>{product.vertical}</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 6.5vw, 92px)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              margin: "16px 0 24px",
              color: "#fff",
              textWrap: "balance",
            }}
          >
            {headlineRest}{" "}
            <em style={{ fontStyle: "normal", color: "var(--color-gold-light)" }}>{headlineEm}</em>
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.78)",
              maxWidth: "52ch",
              margin: "0 0 32px",
            }}
          >
            {product.tagline}
          </p>
          <Link
            href="#contact"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 22px",
              background: "var(--color-gold)",
              color: "#07101F",
              borderRadius: 2,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Book a demo <span aria-hidden>→</span>
          </Link>
        </div>

        <div
          style={{
            position: "relative",
            border: "1px solid rgba(255,255,255,0.12)",
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(200,146,42,0.12), transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
            borderRadius: 2,
            padding: 32,
            minHeight: 360,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              color: "var(--color-gold-light)",
              opacity: 0.7,
              display: "inline-flex",
              gap: 12,
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <ProductIcon id={product.id} size={28} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              adaptyx.{product.id}
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {preview.map((p) => (
              <div
                key={p.k}
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: 2,
                  padding: 14,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: 6,
                  }}
                >
                  {p.k}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#fff" }}>
                  {p.v}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 24,
              fontFamily: "var(--font-mono)",
              fontSize: 10.5,
              letterSpacing: "0.05em",
              opacity: 0.55,
            }}
          >
            {product.ai}
          </div>
        </div>
      </div>
    </header>

    <section
      id="capabilities"
      style={{ background: "var(--color-navy)", color: "#fff", padding: "120px 32px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            gap: 48,
            marginBottom: 64,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.1em",
              color: "var(--color-gold-light)",
              paddingTop: 8,
              borderTop: "2px solid rgba(255,255,255,0.5)",
              maxWidth: 140,
              textTransform: "uppercase",
              height: "fit-content",
            }}
          >
            § 01 — Capabilities
          </div>
          <div>
            <Eyebrow onDark>What&apos;s inside</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(40px, 5.5vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                margin: "18px 0 0",
                maxWidth: "22ch",
                color: "#fff",
              }}
            >
              Inside {product.name}.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 20, lineHeight: 1.55, margin: "20px 0 0", maxWidth: "60ch" }}>
              A full product page is in the works. In the meantime, here&apos;s what {product.name} does today, in
              broad strokes — currently {product.stageLabel.toLowerCase()}. Book a walkthrough for the full tour.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {capabilityHints.map((c, i) => (
            <div
              key={c.title}
              style={{
                padding: "48px 40px",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
                borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  margin: "0 0 12px",
                  color: "#fff",
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", margin: 0, maxWidth: "48ch", lineHeight: 1.55 }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABlock
      eyebrow={`${product.name} · ${product.stageLabel}`}
      heading={`Book a walkthrough of ${product.name}.`}
      body="Every Adaptyx demo is co-led by the engineers who built the product and the operator who shaped it. Tell us what you're trying to solve, and we'll route you to the right team."
      contactLine={`${product.id}@adaptyx.labs · ${product.certs.toLowerCase()}`}
      submitLabel="Book a demo"
    />
    <MoreProducts excludeId={product.id} />
    <AdaptyxFooter />
  </main>
);
