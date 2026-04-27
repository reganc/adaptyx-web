import Link from "next/link";
import { Eyebrow, editorialColors } from "../Brand";
import {
  platformDomains,
  totalFeatureCount,
} from "@/lib/platform";

export const Depth = () => {
  const total = totalFeatureCount();

  return (
    <section
      style={{
        background: editorialColors.cream,
        padding: "96px 32px",
        borderTop: "1px solid rgba(12,27,51,0.08)",
      }}
    >
      <div style={{ maxWidth: 1376, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 64,
            alignItems: "end",
            marginBottom: 56,
          }}
        >
          <div>
            <Eyebrow color={editorialColors.gold} style={{ marginBottom: 16 }}>
              Volume I · The Platform
            </Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 84,
                lineHeight: 0.95,
                letterSpacing: "-0.025em",
                color: editorialColors.navy,
                margin: 0,
                textWrap: "balance",
              }}
            >
              Twelve domains.{" "}
              <span style={{ color: editorialColors.gold, fontStyle: "italic" }}>
                One operating layer.
              </span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 19,
              lineHeight: 1.6,
              color: "#333",
              margin: 0,
              maxWidth: 600,
              justifySelf: "end",
            }}
          >
            Most "AI for senior care" pitches are one thin feature in search of
            a buyer. CareCore is the opposite — a full operating layer with{" "}
            <strong style={{ color: editorialColors.navy }}>
              {total}+ shipped features
            </strong>{" "}
            across the surface of skilled-nursing operations.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "rgba(12,27,51,0.08)",
            border: "1px solid rgba(12,27,51,0.08)",
          }}
        >
          {platformDomains.map((d, i) => (
            <Link
              key={d.slug}
              href={`/platform/${d.slug}`}
              style={{
                background: "#fff",
                padding: "28px 28px 24px",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: editorialColors.gold,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 26,
                  lineHeight: 1.1,
                  color: editorialColors.navy,
                  letterSpacing: "-0.015em",
                }}
              >
                {d.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontStyle: "italic",
                  fontSize: 14,
                  lineHeight: 1.45,
                  color: "#555",
                }}
              >
                {d.tagline}
              </span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Link
            href="/platform"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: editorialColors.navy,
              color: "#fff",
              padding: "0 36px",
              height: 56,
              borderRadius: 2,
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            Explore the Full Platform →
          </Link>
        </div>
      </div>
    </section>
  );
};
