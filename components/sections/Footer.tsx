import Link from "next/link";
import { CareCoreLogoEditorial, Eyebrow, editorialColors } from "../Brand";

type Col = readonly [string, ReadonlyArray<{ label: string; href: string }>];

const columns: ReadonlyArray<Col> = [
  [
    "Platform",
    [
      { label: "Overview", href: "/platform" },
      { label: "Clinical & Operational", href: "/platform/clinical-operational" },
      { label: "Revenue Cycle", href: "/platform/revenue-cycle" },
      { label: "Interoperability", href: "/platform/interoperability" },
      { label: "Workforce, Compliance & Quality", href: "/platform/workforce-compliance-quality" },
    ],
  ],
  [
    "For You",
    [
      { label: "Pilot Program", href: "/pilot" },
      { label: "Request a Pilot", href: "/pilot/request" },
      { label: "Connected Experience", href: "/platform/connected-experience" },
      { label: "Intelligent Care", href: "/platform/intelligent-care" },
    ],
  ],
  [
    "Company",
    [
      { label: "Insights", href: "/blog" },
      { label: "RSS Feed", href: "/feed.xml" },
      { label: "Contact", href: "mailto:regan@chorlog.com" },
    ],
  ],
];

export const Footer = () => (
  <footer
    style={{
      background: editorialColors.navyDeep,
      color: "rgba(255,255,255,0.7)",
      padding: "56px 32px 32px",
    }}
  >
    <div style={{ maxWidth: 1376, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 40,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div>
          <Link
            href="/"
            aria-label="CareCore home"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <CareCoreLogoEditorial height={40} onDark />
          </Link>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              fontSize: 14,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.55)",
              margin: 0,
              marginTop: 20,
              maxWidth: 320,
            }}
          >
            A modern operating system for skilled nursing. Built by Adaptyx for operators who refuse
            to lose another nurse to paperwork.
          </p>
        </div>
        {columns.map(([title, links]) => (
          <div key={title}>
            <Eyebrow color={editorialColors.gold} style={{ marginBottom: 16 }}>
              {title}
            </Eyebrow>
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.65)",
                  padding: "6px 0",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 24,
          fontFamily: "var(--font-ui)",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        <span>© 2026 Adaptyx, Inc. All rights reserved.</span>
        <span>HIPAA-Aligned · SOC 2 Type II · RBAC</span>
      </div>
    </div>
  </footer>
);
