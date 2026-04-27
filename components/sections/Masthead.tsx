import Link from "next/link";
import { CareCoreLogoEditorial, editorialColors } from "../Brand";

const navItems: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Platform", href: "/" },
  { label: "Outcomes", href: "/" },
  { label: "Pilot", href: "/pilot" },
  { label: "Insights", href: "/blog" },
  { label: "Compliance", href: "/" },
  { label: "About", href: "/" },
];
const utilityLinks = ["Sign In", "Operator Login", "Contact"];

export const Masthead = () => (
  <header style={{ background: editorialColors.navy }}>
    <div
      style={{
        background: editorialColors.navyDeep,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
        }}
      >
        For Skilled Nursing Operators · HIPAA · SOC 2 Type II
      </span>
      <div style={{ display: "flex", gap: 24 }}>
        {utilityLinks.map((l) => (
          <a
            key={l}
            href="#"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              cursor: "pointer",
            }}
          >
            {l}
          </a>
        ))}
      </div>
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: 72,
        padding: "0 32px",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div style={{ marginRight: 48 }}>
        <CareCoreLogoEditorial height={42} onDark />
      </div>
      <nav style={{ display: "flex", flex: 1, gap: 4 }}>
        {navItems.map((item, i) => (
          <Link
            key={item.label}
            href={item.href}
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: i === 0 ? "#fff" : "rgba(255,255,255,0.6)",
              padding: "0 16px",
              height: 72,
              display: "flex",
              alignItems: "center",
              borderBottom: i === 0 ? `2px solid ${editorialColors.gold}` : "2px solid transparent",
              textDecoration: "none",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/pilot/request"
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          background: editorialColors.gold,
          color: "#fff",
          border: "none",
          padding: "0 22px",
          height: 40,
          borderRadius: 2,
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        Request a Pilot →
      </Link>
    </div>
  </header>
);
