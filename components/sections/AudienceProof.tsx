import { Eyebrow, RuleHeading, editorialColors } from "../Brand";

const cards = [
  {
    label: "For the Administrator",
    headline: "An ROI argument that's already been made for you.",
    points: [
      "Recover platform cost in 60–90 days through documentation time alone.",
      "Continuous survey readiness instead of pre-survey scrambles.",
      "One operating layer across multiple facilities, no migration.",
    ],
    quote:
      "We saw the same deficiencies in three surveys in a row. CareCore would have caught all of them, weeks earlier.",
    author: "Administrator · 84-bed facility, North Georgia",
  },
  {
    label: "For the Director of Nursing",
    headline: "Your staff stops carrying the system in their heads.",
    points: [
      "Hours per shift returned to direct resident care.",
      "Handoffs that arrive complete, not 'I'll finish it after lunch.'",
      "Burnout indicators surfaced before they become resignations.",
    ],
    quote:
      "By the second week, two of my charge nurses asked when the rest of the floor would get it.",
    author: "DON · multi-unit SNF, pilot week 3",
  },
  {
    label: "For IT & Operations",
    headline: "Layered, not invasive. RBAC the way you'd build it.",
    points: [
      "Sits alongside your EHR. No data migration, no rip-and-replace.",
      "Role-based access control, end-to-end audit trail, HIPAA-aligned.",
      "Read-only API integration where possible. Reversible at any time.",
    ],
    quote:
      "It's the first vendor in five years that didn't ask me to open something I didn't want to open.",
    author: "IT Director · multi-facility operator",
  },
];

export const AudienceProof = () => (
  <section style={{ background: editorialColors.cream, padding: "96px 32px" }}>
    <div style={{ maxWidth: 1376, margin: "0 auto" }}>
      <RuleHeading>Three Readers · One Argument</RuleHeading>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 56,
          lineHeight: 1.0,
          letterSpacing: "-0.02em",
          color: editorialColors.text,
          margin: 0,
          marginBottom: 56,
          maxWidth: 900,
          textWrap: "balance",
        }}
      >
        Built for the three people who have to agree before anything new gets bought.
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {cards.map((c) => (
          <article
            key={c.label}
            style={{
              background: "#fff",
              border: `1px solid ${editorialColors.border}`,
              padding: 32,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Eyebrow color={editorialColors.gold} style={{ marginBottom: 14 }}>
              {c.label}
            </Eyebrow>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 28,
                lineHeight: 1.1,
                color: editorialColors.text,
                margin: 0,
                marginBottom: 20,
                textWrap: "balance",
              }}
            >
              {c.headline}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: 24 }}>
              {c.points.map((p, i) => (
                <li
                  key={p}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "#2C3340",
                    padding: "10px 0",
                    borderBottom:
                      i < c.points.length - 1 ? `1px solid ${editorialColors.border}` : "none",
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: editorialColors.gold,
                      fontWeight: 700,
                      fontFamily: "var(--font-ui)",
                      flexShrink: 0,
                    }}
                  >
                    —
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div
              style={{
                marginTop: "auto",
                borderLeft: `2px solid ${editorialColors.gold}`,
                paddingLeft: 14,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontStyle: "italic",
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "#2C3340",
                  margin: 0,
                }}
              >
                &ldquo;{c.quote}&rdquo;
              </p>
              <div
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: editorialColors.stone,
                  marginTop: 8,
                }}
              >
                {c.author}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
