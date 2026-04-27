import { editorialColors } from "../Brand";

const items = [
  "Late documentation flagged in real time",
  "AI-guided shift handoffs",
  "Continuous survey readiness",
  "Layered on top of your existing EHR",
  "RBAC + HIPAA-aligned audit trail",
  "30-day pilot · no cost · clear success metrics",
];

export const Ticker = () => (
  <div
    style={{
      background: editorialColors.gold,
      color: editorialColors.navy,
      height: 40,
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      borderTop: `1px solid ${editorialColors.goldLight}`,
    }}
  >
    <div
      style={{
        display: "flex",
        gap: 48,
        paddingLeft: 32,
        fontFamily: "var(--font-ui)",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      {[...items, ...items].map((t, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span>{t}</span>
          <span style={{ opacity: 0.5 }}>◆</span>
        </span>
      ))}
    </div>
  </div>
);
