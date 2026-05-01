import { editorialColors } from "../Brand";

const items = [
  "Cloud-native, all-in-one platform",
  "MDS 3.0 + PDPM optimization",
  "Native HL7 v2 + FHIR R4 + SMART on FHIR",
  "Integrated 837I billing + ERA processing",
  "AI-powered clinical assistant with voice queries",
  "PBJ + QAPI + Five-Star simulator built in",
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
