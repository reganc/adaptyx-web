import { ImageResponse } from "next/og";

export const alt = "CareCore by Adaptyx — The operating layer for skilled nursing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0C1B33",
          color: "#fff",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C8922A",
          }}
        >
          <span>CareCore by Adaptyx</span>
        </div>

        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 0.96,
              letterSpacing: "-0.025em",
              maxWidth: 1040,
            }}
          >
            <span style={{ marginRight: 24 }}>The AI operating layer for</span>
            <span style={{ color: "#C8922A", fontStyle: "italic" }}>
              skilled nursing.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 700,
              lineHeight: 1.35,
            }}
          >
            Documentation, tasks, and compliance — kept on track shift after shift.
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#C8922A",
            }}
          >
            adaptyxai.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
