import Image from "next/image";
import { Eyebrow, editorialColors } from "../Brand";

export const ProductMock = () => (
  <section style={{ background: editorialColors.navy, padding: "96px 32px", color: "#fff" }}>
    <div style={{ maxWidth: 1376, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 48,
          alignItems: "end",
          marginBottom: 40,
        }}
      >
        <div>
          <Eyebrow color={editorialColors.gold} style={{ marginBottom: 16 }}>
            Field Report · The Console
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
              textWrap: "balance",
              maxWidth: 760,
            }}
          >
            Most days nothing dramatic happens. That&apos;s the whole point.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.78)",
              margin: 0,
              maxWidth: 700,
            }}
          >
            CareCore doesn&apos;t put a screen between your staff and their patients. It works in the
            background, surfacing only when a moment matters — and stepping out of the way the rest
            of the time.
          </p>
        </div>
        <div style={{ display: "flex", gap: 32, paddingBottom: 4 }}>
          <Stat value="32%" label="Reduction in late or missed documentation in pilot units." />
          <Stat value="2.4 hrs" label="Returned to direct care per nurse, per shift." />
        </div>
      </div>

      <figure
        style={{
          margin: 0,
          background: editorialColors.navyMid,
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 6,
          overflow: "hidden",
          boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
        }}
      >
        <Image
          src="/images/carecore-console.png"
          alt="CareCore console — Modules, bed census, active alerts, and quick-link tiles for a 80-bed skilled nursing facility"
          width={3848}
          height={1082}
          priority
          sizes="(min-width: 1408px) 1376px, calc(100vw - 64px)"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <figcaption
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            padding: "14px 20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            background: editorialColors.navyDeep,
          }}
        >
          carecore · console · 80-bed SNF demo facility
        </figcaption>
      </figure>
    </div>
  </section>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
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
      {value}
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
      {label}
    </div>
  </div>
);
