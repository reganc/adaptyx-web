import { Eyebrow, editorialColors } from "../Brand";

const briefs = [
  {
    label: "01 · The Pattern",
    headline: "Software didn't fix the problem. It is the problem.",
    body:
      "EHRs were built to record what happened, not to prevent what shouldn't. Every shift, the same gaps reappear: late charting, missed reassessments, MDS items that drift past their window. Staff aren't lazy — they're outnumbered by their own task list.",
  },
  {
    label: "02 · The Cost",
    headline: "Compliance failures rarely arrive as surprises.",
    body:
      "By the time a survey turns up a deficiency, it has been visible in the workflow for weeks. The signal was there. The system just didn't watch for it. CareCore watches — continuously, quietly, and without adding work.",
  },
  {
    label: "03 · The Layer",
    headline: "Not another EHR. The system that makes yours work.",
    body:
      "CareCore observes the patterns inside your existing platform, learns how each user works, and intervenes the moment a task is at risk of being missed. Your nurses keep their workflow. The platform keeps their pace.",
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
            What's actually breaking on the floor.
          </h2>
        </div>
        <Eyebrow color={editorialColors.stone}>April 2026 · Operational Intelligence</Eyebrow>
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
