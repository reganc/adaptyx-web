import type { Metadata } from "next";
import Link from "next/link";
import { editorialColors, Eyebrow } from "@/components/Brand";
import { Masthead } from "@/components/sections/Masthead";
import { Footer } from "@/components/sections/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import {
  platformDomains,
  domainFeatureCount,
  totalFeatureCount,
} from "@/lib/platform";

const title = "Platform";
const description =
  "The full surface of CareCore — twelve capability domains spanning clinical care, pharmacy, quality, compliance, workforce, family, operations, AI, and the platform underneath.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/platform" },
  openGraph: { type: "website", url: "/platform", title, description },
  twitter: { title, description },
};

const domainNumber = (i: number) => String(i + 1).padStart(2, "0");

export default function PlatformPage() {
  const total = totalFeatureCount();

  return (
    <main className="design-frame" style={{ background: editorialColors.cream }}>
      <Masthead />

      <section
        style={{
          background: editorialColors.navy,
          color: "#fff",
          padding: "96px 32px 72px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Eyebrow color={editorialColors.gold} style={{ marginBottom: 16 }}>
            The Platform · Volume I
          </Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 96,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              margin: 0,
              marginBottom: 28,
              maxWidth: 1100,
              textWrap: "balance",
            }}
          >
            Twelve capability domains.{" "}
            <span style={{ color: editorialColors.gold, fontStyle: "italic" }}>
              One operating layer.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 21,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.78)",
              margin: 0,
              maxWidth: 760,
            }}
          >
            CareCore covers the surface of skilled-nursing operations end to
            end. Below is the full topology — pick a domain to drill in, or
            scan the highlights to feel the depth.
          </p>

          <div
            style={{
              display: "flex",
              gap: 56,
              marginTop: 48,
              paddingTop: 32,
              borderTop: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <Stat label="Capability Domains" value={String(platformDomains.length)} />
            <Stat label="Features Shipped" value={String(total)} />
            <Stat
              label="Survey-Impact Wins"
              value="MDS · Wound · Pain"
              small
            />
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "72px 32px 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1,
              background: "rgba(12,27,51,0.08)",
              border: "1px solid rgba(12,27,51,0.08)",
            }}
          >
            {platformDomains.map((domain, i) => (
              <Link
                key={domain.slug}
                href={`/platform/${domain.slug}`}
                style={{
                  display: "block",
                  background: "#fff",
                  padding: "36px 36px 32px",
                  textDecoration: "none",
                  color: "inherit",
                  position: "relative",
                  transition: "background 120ms",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      color: editorialColors.gold,
                    }}
                  >
                    {domainNumber(i)} ·{" "}
                    {domainFeatureCount(domain).toString().padStart(2, "0")}{" "}
                    Features
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      color: editorialColors.navy,
                      opacity: 0.45,
                    }}
                  >
                    Read →
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 36,
                    lineHeight: 1.05,
                    letterSpacing: "-0.018em",
                    color: editorialColors.navy,
                    margin: 0,
                    marginBottom: 12,
                    textWrap: "balance",
                  }}
                >
                  {domain.name}
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontStyle: "italic",
                    fontSize: 17,
                    lineHeight: 1.5,
                    color: editorialColors.gold,
                    margin: 0,
                    marginBottom: 20,
                  }}
                >
                  {domain.tagline}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    paddingTop: 16,
                    borderTop: "1px solid rgba(12,27,51,0.08)",
                  }}
                >
                  {domain.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        lineHeight: 1.5,
                        color: "#333",
                        padding: "6px 0",
                        paddingLeft: 18,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 12,
                          width: 8,
                          height: 1,
                          background: editorialColors.gold,
                        }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: editorialColors.cream,
          padding: "80px 32px",
          borderTop: "1px solid rgba(12,27,51,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Eyebrow color={editorialColors.navy} style={{ marginBottom: 20 }}>
            See it in your unit
          </Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 56,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: editorialColors.navy,
              margin: 0,
              marginBottom: 20,
              textWrap: "balance",
            }}
          >
            The fastest way to evaluate depth is{" "}
            <span style={{ color: editorialColors.gold, fontStyle: "italic" }}>
              thirty days in one unit.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              lineHeight: 1.6,
              color: "#444",
              margin: 0,
              marginBottom: 32,
            }}
          >
            We agree on a measurable target before day one. If we don&apos;t
            move it, you walk.
          </p>
          <Link
            href="/pilot/request"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: editorialColors.navy,
              color: "#fff",
              padding: "0 36px",
              height: 60,
              borderRadius: 2,
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            Request Your Pilot →
          </Link>
        </div>
      </section>

      <Footer />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
        ]}
      />
    </main>
  );
}

const Stat = ({
  label,
  value,
  small,
}: {
  label: string;
  value: string;
  small?: boolean;
}) => (
  <div>
    <div
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: small ? 28 : 56,
        lineHeight: 1,
        color: "#fff",
        letterSpacing: "-0.02em",
      }}
    >
      {value}
    </div>
    <div
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: editorialColors.gold,
        marginTop: 8,
      }}
    >
      {label}
    </div>
  </div>
);
