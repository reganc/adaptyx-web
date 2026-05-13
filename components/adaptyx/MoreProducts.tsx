import Link from "next/link";
import type { ProductId } from "@/lib/products";
import { otherProducts } from "@/lib/products";
import { ProductIcon } from "./ProductIcon";
import { SecHead } from "./SecHead";

export const MoreProducts = ({ excludeId }: { excludeId: ProductId }) => (
  <section style={{ background: "var(--color-cream)", padding: "80px 32px" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <SecHead
        index="§ 05 — Other products"
        eyebrow="Adaptyx Labs · The studio"
        heading={<>Same studio, four more flagships.</>}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }}
      >
        {otherProducts(excludeId).map((p) => (
          <Link
            key={p.id}
            href={p.href}
            style={{
              display: "block",
              padding: 24,
              border: "1px solid var(--color-border)",
              borderRadius: 2,
              background: "var(--color-off-white)",
              transition: "all 200ms ease-out",
              textDecoration: "none",
              color: "#111",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-gold-dark)",
                marginBottom: 14,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  border: "1px solid var(--color-border)",
                  borderRadius: 2,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                  color: "var(--color-navy)",
                }}
              >
                <ProductIcon id={p.id} size={14} />
              </span>
              {p.vertical}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
                marginBottom: 6,
              }}
            >
              {p.name}
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 14, opacity: 0.7, lineHeight: 1.5 }}>
              {p.tagline.split(". ")[0]}.
            </div>
            <div
              style={{
                marginTop: 14,
                fontFamily: "var(--font-ui)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "var(--color-gold-dark)",
              }}
            >
              Explore →
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
