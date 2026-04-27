import { Eyebrow, editorialColors } from "../Brand";

const rows = [
  {
    who: "M. Alvarez, RN",
    dot: editorialColors.success,
    note: "On track · 11 of 12 charted",
    status: "ok" as const,
    time: "now",
  },
  {
    who: "K. Park, LPN",
    dot: editorialColors.gold,
    note: "MDS window closes 16:45 — prompt sent",
    status: "watch" as const,
    time: "2m",
  },
  {
    who: "D. Rivers, CNA",
    dot: editorialColors.red,
    note: "ADL chart overdue 18m · escalated to charge",
    status: "alert" as const,
    time: "18m",
  },
  {
    who: "S. Nguyen, RN",
    dot: editorialColors.success,
    note: "Wound reassessment complete",
    status: "ok" as const,
    time: "5m",
  },
  {
    who: "J. Patel, RN",
    dot: editorialColors.gold,
    note: "Pattern: late lunch charting — soft nudge queued for 15:00",
    status: "watch" as const,
    time: "predicted",
  },
];

export const ProductMock = () => (
  <section style={{ background: editorialColors.navy, padding: "96px 32px", color: "#fff" }}>
    <div
      style={{
        maxWidth: 1376,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1.3fr",
        gap: 64,
        alignItems: "center",
      }}
    >
      <div>
        <Eyebrow color={editorialColors.gold} style={{ marginBottom: 16 }}>
          Field Report · Unit 4B, 14:32
        </Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 56,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "#fff",
            margin: 0,
            marginBottom: 20,
          }}
        >
          Most days nothing dramatic happens. That's the whole point.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.78)",
            margin: 0,
            marginBottom: 28,
          }}
        >
          CareCore doesn't put a screen between your staff and their patients. It works in the
          background, surfacing only when a moment matters — and stepping out of the way the rest
          of the time.
        </p>
        <div style={{ display: "flex", gap: 32 }}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 44,
                color: editorialColors.gold,
                lineHeight: 1,
              }}
            >
              32%
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: 14,
                color: "rgba(255,255,255,0.7)",
                marginTop: 6,
                maxWidth: 200,
              }}
            >
              Reduction in late or missed documentation in pilot units.
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 44,
                color: editorialColors.gold,
                lineHeight: 1,
              }}
            >
              2.4 hrs
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: 14,
                color: "rgba(255,255,255,0.7)",
                marginTop: 6,
                maxWidth: 200,
              }}
            >
              Returned to direct care per nurse, per shift.
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: editorialColors.navyMid,
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            background: editorialColors.navyDeep,
            padding: "12px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 5, background: editorialColors.red }} />
            <div style={{ width: 10, height: 10, borderRadius: 5, background: editorialColors.gold }} />
            <div style={{ width: 10, height: 10, borderRadius: 5, background: editorialColors.success }} />
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
            carecore · floor view · unit 4B
          </div>
          <div style={{ width: 60 }} />
        </div>
        <div style={{ padding: 24 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
              paddingBottom: 12,
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Eyebrow color="rgba(255,255,255,0.55)">Active Watch · 6 staff · 38 residents</Eyebrow>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: editorialColors.gold }}>
              ● live
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.who}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: 14,
                alignItems: "center",
                padding: "14px 0",
                borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  background: row.dot,
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  {row.who}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.65)",
                    marginTop: 2,
                  }}
                >
                  {row.note}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: row.status === "alert" ? editorialColors.red : "rgba(255,255,255,0.5)",
                  letterSpacing: "0.04em",
                }}
              >
                {row.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
