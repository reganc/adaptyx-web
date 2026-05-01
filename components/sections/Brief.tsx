import { Eyebrow, editorialColors } from "../Brand";

const briefs = [
  {
    label: "01 · The Pattern",
    headline: "Fragmented software is the problem. Not the cure.",
    body:
      "Most facilities run a different vendor for charting, billing, scheduling, and family messaging. Data doesn't reconcile. Compliance signals get lost in the seams. Staff carry the integration in their heads, shift after shift.",
  },
  {
    label: "02 · The Cost",
    headline: "Compliance failures rarely arrive as surprises.",
    body:
      "By the time a survey turns up a deficiency, it has been visible in the workflow for weeks. The signal was there. The system just didn't connect it. CareCore connects it — across clinical, financial, and operational data, in real time.",
  },
  {
    label: "03 · The Platform",
    headline: "One platform. One source of truth. One floor.",
    body:
      "CareCore replaces the patchwork with a unified, real-time platform — clinical, billing, staffing, compliance, and interoperability under one roof. Built cloud-native from the ground up, designed for the way modern post-acute care actually works.",
  },
];

export const Brief = () => (
  <section style={{ background: editorialColors.cream, padding: "96px 32px" }}>
    <div style={{ maxWidth: 1376, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 48,
          paddingBottom: 16,
          borderBottom: `2px solid ${editorialColors.navy}`,
        }}
      >
        <div>
          <Eyebrow color={editorialColors.navy} style={{ marginBottom: 12 }}>
            The Brief
          </Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 56,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: editorialColors.text,
              margin: 0,
            }}
          >
            Why post-acute needs a real platform.
          </h2>
        </div>
        <Eyebrow color={editorialColors.stone}>April 2026 · Post-Acute Operating System</Eyebrow>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
        {briefs.map((b) => (
          <article key={b.label}>
            <Eyebrow color={editorialColors.gold} style={{ marginBottom: 14 }}>
              {b.label}
            </Eyebrow>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 30,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: editorialColors.text,
                margin: 0,
                marginBottom: 16,
                textWrap: "balance",
              }}
            >
              {b.headline}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                lineHeight: 1.7,
                color: "#2C3340",
                margin: 0,
              }}
            >
              {b.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
