import Link from "next/link";
import { Eyebrow, editorialColors } from "../Brand";

export const Hero = () => (
  <section
    style={{
      background: editorialColors.navy,
      color: "#fff",
      padding: "64px 32px 80px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.04,
        backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
        backgroundSize: "3px 3px",
        pointerEvents: "none",
      }}
    />

    <div style={{ maxWidth: 1376, margin: "0 auto", position: "relative" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 16,
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          marginBottom: 32,
        }}
      >
        <Eyebrow color="rgba(255,255,255,0.55)">
          Volume I · A Modern Operating System for Skilled Nursing
        </Eyebrow>
        <Eyebrow color={editorialColors.gold}>Now Accepting Pilots — Spring 2026</Eyebrow>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 56,
          alignItems: "end",
        }}
      >
        <div>
          <Eyebrow color={editorialColors.gold} style={{ marginBottom: 24 }}>
            CareCore · The Platform · Issue 01
          </Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 124,
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
              color: "#fff",
              margin: 0,
              textWrap: "balance",
            }}
          >
            A modern operating system for{" "}
            <span style={{ color: editorialColors.gold, fontStyle: "italic", fontWeight: 700 }}>
              skilled nursing.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 22,
              lineHeight: 1.5,
              fontWeight: 400,
              color: "rgba(255,255,255,0.78)",
              marginTop: 28,
              maxWidth: 640,
            }}
          >
            CareCore is a fully integrated, cloud-native platform that powers every aspect of
            skilled nursing — clinical care, compliance, billing, staffing, and interoperability —
            replacing fragmented legacy systems with one real-time platform.
          </p>

          <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
            <Link
              href="/pilot/request"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: editorialColors.gold,
                color: "#fff",
                border: "none",
                padding: "0 28px",
                height: 52,
                borderRadius: 2,
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              Request a 30-Day Pilot →
            </Link>
            <button
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.35)",
                padding: "0 28px",
                height: 52,
                borderRadius: 2,
              }}
            >
              See How It Works
            </button>
          </div>
        </div>

        <aside style={{ borderLeft: `1px solid ${editorialColors.gold}`, paddingLeft: 28 }}>
          <Eyebrow color={editorialColors.gold} style={{ marginBottom: 18 }}>
            One Platform · Six Pillars
          </Eyebrow>
          {[
            {
              big: "6",
              color: "#fff",
              body:
                "Pillars — clinical, revenue cycle, interoperability, connected experience, workforce/compliance/quality, and intelligent care.",
            },
            {
              big: "150+",
              color: "#fff",
              body:
                "Shipped capabilities under one cloud-native chart, billing engine, and analytics layer.",
            },
            {
              big: "30 days",
              color: editorialColors.gold,
              body:
                "To prove measurable impact in one unit. No cost. No long-term commitment.",
            },
          ].map((stat, i) => (
            <div key={stat.big} style={{ marginBottom: i < 2 ? 28 : 0 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 56,
                  lineHeight: 1,
                  color: stat.color,
                }}
              >
                {stat.big}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.7)",
                  marginTop: 6,
                }}
              >
                {stat.body}
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  </section>
);
