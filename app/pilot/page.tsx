import type { Metadata } from "next";
import Link from "next/link";
import { editorialColors, Eyebrow } from "@/components/Brand";
import { Masthead } from "@/components/sections/Masthead";
import { Footer } from "@/components/sections/Footer";
import { pilotTerms } from "@/components/sections/pilotTerms";
import {
  BreadcrumbJsonLd,
  OfferPilotJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";

const title = "30-Day Pilot Program";
const description =
  "How the CareCore 30-day operational pilot works: scope, duration, success metrics, what we ask of you, and what we provide. No cost, no commitment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pilot" },
  openGraph: {
    type: "website",
    url: "/pilot",
    title,
    description,
  },
  twitter: { title, description },
};

const sections: ReadonlyArray<{ heading: string; body: string }> = [
  {
    heading: "Why a focused pilot",
    body: "Skilled-nursing operators don't have time for vendor demos that drag for months. The 30-day pilot exists so we can prove measurable impact in one unit before any conversation about budget, rollout, or commitment. If we don't move the numbers we agreed on, you walk.",
  },
  {
    heading: "What we measure",
    body: "Before day one we agree, in writing, on a single primary success metric. Typically a 25%+ reduction in missed or late documentation in the pilot unit, measured against your last 30 days. Secondary metrics may include staff time-on-task, call-light response time, and shift handoff completeness.",
  },
  {
    heading: "What we ask of you",
    body: "One unit (roughly 30 beds, 5–15 staff). A single operational sponsor we can reach during business hours. A baseline snapshot of the unit's last 30 days of documentation timing so we can measure change. That's it — no IT integration project, no procurement cycle.",
  },
  {
    heading: "What we provide",
    body: "All onboarding, training, configuration, and support during the pilot. Sessions are under 30 minutes per staff member. We monitor adoption daily and intervene if we see drop-off. A written readout at day 14 and day 30.",
  },
];

export default function PilotPage() {
  return (
    <main className="design-frame" style={{ background: editorialColors.cream }}>
      <Masthead />

      <section
        style={{
          background: editorialColors.navy,
          color: "#fff",
          padding: "96px 32px 80px",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Eyebrow color={editorialColors.gold} style={{ marginBottom: 16 }}>
            The Offer · 30-Day Focused Operational Pilot
          </Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 84,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              margin: 0,
              marginBottom: 24,
              textWrap: "balance",
            }}
          >
            One unit. Thirty days.{" "}
            <span style={{ color: editorialColors.gold }}>No cost.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 19,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.78)",
              margin: 0,
              marginBottom: 32,
              maxWidth: 640,
            }}
          >
            We deploy CareCore in one unit of one facility. We agree on success
            metrics before day one. We handle onboarding so your staff isn&apos;t
            burdened. If we don&apos;t move the numbers, you walk away. If we do,
            we discuss what a rollout looks like.
          </p>
          <Link
            href="/pilot/request"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: editorialColors.gold,
              color: "#fff",
              border: "none",
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

      <section style={{ background: "#fff", padding: "80px 32px" }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
          }}
        >
          {sections.map(({ heading, body }) => (
            <div key={heading}>
              <Eyebrow color={editorialColors.gold} style={{ marginBottom: 12 }}>
                {heading}
              </Eyebrow>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: editorialColors.navy,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: editorialColors.cream,
          padding: "80px 32px",
          borderTop: "1px solid rgba(12,27,51,0.08)",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Eyebrow color={editorialColors.navy} style={{ marginBottom: 24 }}>
            Pilot Terms · Plain English
          </Eyebrow>
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(12,27,51,0.1)",
              borderRadius: 2,
              padding: 36,
            }}
          >
            {pilotTerms.map(([k, v], i) => (
              <div
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: 16,
                  padding: "14px 0",
                  borderBottom:
                    i < pilotTerms.length - 1
                      ? "1px solid rgba(12,27,51,0.08)"
                      : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: editorialColors.gold,
                  }}
                >
                  {k}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: editorialColors.navy,
                  }}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, textAlign: "center" }}>
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
        </div>
      </section>

      <Footer />
      <ServiceJsonLd />
      <OfferPilotJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Pilot Program", path: "/pilot" },
        ]}
      />
    </main>
  );
}
