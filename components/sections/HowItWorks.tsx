import { Eyebrow, editorialColors } from "../Brand";

const steps = [
  {
    n: "I.",
    title: "Observe",
    kicker: "Pattern recognition, per user.",
    body:
      "CareCore reads the cadence of each nurse, CNA, and admin — when they chart, where they slow, what they miss most. No new logins, no separate workflow. Just attention.",
  },
  {
    n: "II.",
    title: "Anticipate",
    kicker: "Catch drift before it becomes deficiency.",
    body:
      "An MDS window closing in 3 hours. A wound reassessment overdue by 22 minutes. A handoff note left blank. CareCore sees these forming and knows whose hands they need to land in.",
  },
  {
    n: "III.",
    title: "Intervene",
    kicker: "A nudge in the right place. That's all.",
    body:
      "The right person, the right channel, the right moment — by SMS, by their phone, by a quiet prompt inside their existing tool. Nothing escalates if nothing slipped. Most days, nobody notices the system worked.",
  },
];

export const HowItWorks = () => (
  <section
    style={{
      background: editorialColors.offWhite,
      padding: "96px 32px",
      borderTop: `1px solid ${editorialColors.border}`,
      borderBottom: `1px solid ${editorialColors.border}`,
    }}
  >
    <div style={{ maxWidth: 1376, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <Eyebrow color={editorialColors.gold} style={{ marginBottom: 14 }}>
          The Loop · How CareCore Works
        </Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 64,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: editorialColors.text,
            margin: 0,
            maxWidth: 900,
            marginInline: "auto",
            textWrap: "balance",
          }}
        >
          Quiet by design. Relentless by definition.
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          borderTop: `2px solid ${editorialColors.navy}`,
          borderBottom: `2px solid ${editorialColors.navy}`,
        }}
      >
        {steps.map((s, i) => (
          <div
            key={s.n}
            style={{
              padding: "40px 32px",
              borderRight: i < 2 ? `1px solid ${editorialColors.border}` : "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 80,
                lineHeight: 1,
                color: editorialColors.gold,
                marginBottom: 16,
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 36,
                color: editorialColors.text,
                letterSpacing: "-0.01em",
                marginBottom: 8,
              }}
            >
              {s.title}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: 16,
                color: editorialColors.gold,
                marginBottom: 16,
              }}
            >
              {s.kicker}
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "#2C3340",
                margin: 0,
              }}
            >
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
