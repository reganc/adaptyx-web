import type { ReactNode } from "react";

export const SecHead = ({
  index,
  eyebrow,
  heading,
  lede,
  onDark = false,
}: {
  index: string;
  eyebrow: string;
  heading: ReactNode;
  lede?: ReactNode;
  onDark?: boolean;
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      gap: 48,
      marginBottom: 64,
    }}
  >
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.1em",
        color: onDark ? "var(--color-gold-light)" : "var(--color-stone)",
        paddingTop: 8,
        borderTop: `2px solid ${onDark ? "rgba(255,255,255,0.5)" : "#111"}`,
        maxWidth: 140,
        textTransform: "uppercase",
        height: "fit-content",
      }}
    >
      {index}
    </div>
    <div>
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(40px, 5.5vw, 72px)",
          lineHeight: 0.98,
          letterSpacing: "-0.02em",
          margin: "18px 0 0",
          maxWidth: "22ch",
          color: onDark ? "#fff" : "#111",
          textWrap: "balance",
        }}
      >
        {heading}
      </h2>
      {lede ? (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 20,
            lineHeight: 1.55,
            maxWidth: "60ch",
            margin: "20px 0 0",
            color: onDark ? "rgba(255,255,255,0.78)" : "#111",
            opacity: onDark ? 1 : 0.82,
          }}
        >
          {lede}
        </p>
      ) : null}
    </div>
  </div>
);

export const Eyebrow = ({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) => (
  <div
    style={{
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: onDark ? "var(--color-gold-light)" : "var(--color-gold)",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
    }}
  >
    <span style={{ display: "inline-block", width: 28, height: 1, background: "currentColor" }} />
    {children}
  </div>
);
