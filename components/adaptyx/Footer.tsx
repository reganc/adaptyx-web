import Link from "next/link";
import { products } from "@/lib/products";
import { AdaptyxMark } from "./ProductIcon";

const h5: React.CSSProperties = {
  fontFamily: "var(--font-ui)",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.45)",
  margin: "0 0 16px",
};

const link: React.CSSProperties = {
  fontFamily: "var(--font-ui)",
  fontSize: 14,
  color: "rgba(255,255,255,0.7)",
  padding: "6px 0",
  display: "block",
  textDecoration: "none",
};

export const AdaptyxFooter = () => (
  <footer
    style={{
      background: "var(--color-navy-deep)",
      color: "rgba(255,255,255,0.6)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 48,
          padding: "64px 0 40px",
        }}
      >
        <div>
          <Link href="/" style={{ color: "#fff", marginBottom: 16, display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <AdaptyxMark size={22} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18, letterSpacing: "-0.01em", textTransform: "uppercase" }}>
              Adaptyx Labs
            </span>
          </Link>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              maxWidth: "42ch",
              color: "rgba(255,255,255,0.55)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            An applied-AI product studio building vertical software for the industries that run the physical world.
          </p>
        </div>

        <div>
          <h5 style={h5}>Products</h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {products.map((p) => (
              <li key={p.id}>
                <Link href={p.href} style={link}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 style={h5}>Company</h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li><Link href="/pilot" style={link}>Pilot program</Link></li>
          </ul>
        </div>

        <div>
          <h5 style={h5}>Connect</h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li><a href="mailto:hello@adaptyx.labs" style={link}>hello@adaptyx.labs</a></li>
            <li><Link href="/#contact" style={link}>Request a demo</Link></li>
          </ul>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "22px 0",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.03em",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        <span>© 2026 Adaptyx Labs, Inc.</span>
        <span>adaptyx.labs · HIPAA · SOC 2 · v2026.5</span>
      </div>
    </div>
  </footer>
);
