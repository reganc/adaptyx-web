import type { CSSProperties, ReactNode } from "react";

export const editorialColors = {
  navy: "#0C1B33",
  navyDeep: "#07101F",
  navyMid: "#1E2832",
  gold: "#C8922A",
  goldLight: "#DDA84A",
  cream: "#F5F3EF",
  offWhite: "#FAFAF8",
  white: "#FFFFFF",
  border: "#E2DDD6",
  stone: "#6B7280",
  text: "#111111",
  red: "#C0392B",
  success: "#1A6B3C",
} as const;

interface LogoProps {
  height?: number;
  onDark?: boolean;
}

export const CareCoreLogoEditorial = ({ height = 36, onDark = true }: LogoProps) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 10, height }}>
    <div
      style={{
        width: 4,
        height: height * 1.05,
        background: editorialColors.gold,
        flexShrink: 0,
      }}
    />
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: height * 0.72,
          lineHeight: 0.95,
          letterSpacing: "-0.01em",
          color: onDark ? editorialColors.white : editorialColors.navy,
          textTransform: "uppercase",
        }}
      >
        CareCore
      </div>
      <div
        style={{
          fontFamily: "var(--font-ui)",
          fontWeight: 600,
          fontSize: height * 0.22,
          letterSpacing: "0.32em",
          color: editorialColors.gold,
          textTransform: "uppercase",
          marginTop: 2,
        }}
      >
        By Adaptyx
      </div>
    </div>
  </div>
);

interface EyebrowProps {
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
}

export const Eyebrow = ({ children, color = editorialColors.gold, style }: EyebrowProps) => (
  <div
    style={{
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color,
      ...style,
    }}
  >
    {children}
  </div>
);

interface RuleHeadingProps {
  children: ReactNode;
  color?: string;
}

export const RuleHeading = ({ children, color = editorialColors.navy }: RuleHeadingProps) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 20,
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color,
      borderBottom: `2px solid ${color}`,
      paddingBottom: 10,
    }}
  >
    {children}
  </div>
);
