import { Eyebrow, editorialColors } from "../Brand";
import { PilotForm } from "./PilotForm";

const terms: ReadonlyArray<readonly [string, string]> = [
  ["Scope", "1 unit, ~5–15 staff, ~30 beds"],
  ["Duration", "30 days, with a midpoint check-in on day 14"],
  ["Onboarding", "Handled entirely by CareCore — under 30 min per staff session"],
  ["Cost", "$0 — no payment owed during or after the pilot"],
  [
    "Success Metric",
    "Pre-agreed in writing — typically 25%+ reduction in missed/late documentation",
  ],
  ["Termination", "Either party, anytime, in writing. No penalties."],
  ["Data", "Stays your property. No third-party sharing. RBAC + HIPAA-aligned."],
];

export const Pilot = () => (
  <section
    style={{
      background: editorialColors.navy,
      color: "#fff",
      padding: "96px 32px",
      position: "relative",
    }}
  >
    <div style={{ maxWidth: 1376, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <div>
          <Eyebrow color={editorialColors.gold} style={{ marginBottom: 16 }}>
            The Offer · 30-Day Focused Operational Pilot
          </Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 84,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              color: "#fff",
              margin: 0,
              marginBottom: 24,
              textWrap: "balance",
            }}
          >
            One unit. Thirty days. <span style={{ color: editorialColors.gold }}>No cost.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 19,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.78)",
              margin: 0,
              marginBottom: 32,
              maxWidth: 560,
            }}
          >
            We deploy CareCore in one unit of one facility. We agree on success metrics before day
            one. We handle onboarding so your staff isn&apos;t burdened. If we don&apos;t move the
            numbers, you walk away. If we do, we discuss what a rollout looks like.
          </p>
          <PilotForm />
        </div>

        <div
          style={{
            background: editorialColors.navyMid,
            border: "1px solid rgba(255,255,255,0.08)",
            padding: 36,
            borderRadius: 2,
          }}
        >
          <Eyebrow
            color={editorialColors.gold}
            style={{
              marginBottom: 20,
              paddingBottom: 14,
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Pilot Terms · Plain English
          </Eyebrow>
          {terms.map(([k, v]) => (
            <div
              key={k}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: 16,
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
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
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
