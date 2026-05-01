import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { editorialColors, Eyebrow } from "@/components/Brand";
import { Masthead } from "@/components/sections/Masthead";
import { Footer } from "@/components/sections/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import {
  domainFeatureCount,
  getDomainBySlug,
  getDomainSlugs,
  platformDomains,
} from "@/lib/platform";

type Params = { slug: string };

export const dynamicParams = false;

export const generateStaticParams = (): Array<Params> =>
  getDomainSlugs().map((slug) => ({ slug }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const domain = getDomainBySlug(slug);
  if (!domain) return {};
  const url = `/platform/${domain.slug}`;
  return {
    title: domain.name,
    description: domain.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${domain.name} — CareCore by Adaptyx`,
      description: domain.summary,
    },
    twitter: { title: domain.name, description: domain.summary },
  };
};

const sectionLabel = (i: number) => String(i + 1).padStart(2, "0");

export default async function DomainPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const domain = getDomainBySlug(slug);
  if (!domain) notFound();

  const others = platformDomains.filter((d) => d.slug !== domain.slug);
  const totalFeatures = domainFeatureCount(domain);
  const index = platformDomains.findIndex((d) => d.slug === domain.slug);
  const prev = index > 0 ? platformDomains[index - 1] : null;
  const next =
    index < platformDomains.length - 1 ? platformDomains[index + 1] : null;

  return (
    <main className="design-frame" style={{ background: editorialColors.cream }}>
      <Masthead />

      <section
        style={{
          background: editorialColors.navy,
          color: "#fff",
          padding: "80px 32px 64px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.55)",
              marginBottom: 16,
            }}
          >
            <Link
              href="/platform"
              style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
            >
              ← The Platform
            </Link>
            <span style={{ margin: "0 12px", opacity: 0.5 }}>·</span>
            <span style={{ color: editorialColors.gold }}>
              Pillar {String(index + 1).padStart(2, "0")} of{" "}
              {String(platformDomains.length).padStart(2, "0")}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 96,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              margin: 0,
              marginBottom: 16,
              textWrap: "balance",
              maxWidth: 1000,
            }}
          >
            {domain.name}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              fontSize: 24,
              lineHeight: 1.45,
              color: editorialColors.gold,
              margin: 0,
              marginBottom: 24,
              maxWidth: 800,
            }}
          >
            {domain.tagline}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.78)",
              margin: 0,
              maxWidth: 760,
            }}
          >
            {domain.summary}
          </p>

          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 40,
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.14)",
              flexWrap: "wrap",
            }}
          >
            <DomainStat
              label="Sections"
              value={String(domain.sections.length)}
            />
            <DomainStat label="Features" value={String(totalFeatures)} />
            <DomainStat label="Highlights" value={String(domain.highlights.length)} />
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "64px 32px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: 56,
          }}
        >
          <aside style={{ position: "sticky", top: 32, alignSelf: "start" }}>
            <Eyebrow color={editorialColors.gold} style={{ marginBottom: 16 }}>
              On this page
            </Eyebrow>
            <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {domain.sections.map((s, i) => (
                <li
                  key={s.heading}
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: editorialColors.navy,
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(12,27,51,0.08)",
                  }}
                >
                  <a
                    href={`#section-${i}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <span style={{ color: editorialColors.gold, marginRight: 8 }}>
                      {sectionLabel(i)}
                    </span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div>
            {domain.sections.map((section, i) => (
              <section
                key={section.heading}
                id={`section-${i}`}
                style={{
                  marginBottom: 56,
                  scrollMarginTop: 32,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 16,
                    marginBottom: 24,
                    paddingBottom: 16,
                    borderBottom: `2px solid ${editorialColors.gold}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: 24,
                      color: editorialColors.gold,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {sectionLabel(i)}
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 32,
                      lineHeight: 1.1,
                      letterSpacing: "-0.018em",
                      color: editorialColors.navy,
                      margin: 0,
                    }}
                  >
                    {section.heading}
                  </h2>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {section.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr",
                        gap: 16,
                        padding: "14px 0",
                        borderBottom: "1px solid rgba(12,27,51,0.06)",
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          marginTop: 8,
                          background: editorialColors.gold,
                          borderRadius: 0,
                          transform: "rotate(45deg)",
                        }}
                        aria-hidden
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 16,
                          lineHeight: 1.55,
                          color: "#222",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: editorialColors.cream,
          padding: "56px 32px",
          borderTop: "1px solid rgba(12,27,51,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            gap: 24,
          }}
        >
          {prev ? (
            <DomainNavLink
              direction="prev"
              label="Previous Pillar"
              name={prev.name}
              href={`/platform/${prev.slug}`}
            />
          ) : (
            <div style={{ flex: 1 }} />
          )}
          {next ? (
            <DomainNavLink
              direction="next"
              label="Next Pillar"
              name={next.name}
              href={`/platform/${next.slug}`}
            />
          ) : (
            <div style={{ flex: 1 }} />
          )}
        </div>
      </section>

      <section
        style={{
          background: editorialColors.navy,
          color: "#fff",
          padding: "80px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <Eyebrow color={editorialColors.gold} style={{ marginBottom: 16 }}>
              Want this in your unit?
            </Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 52,
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                margin: 0,
                marginBottom: 16,
                textWrap: "balance",
              }}
            >
              Run a 30-day pilot.{" "}
              <span style={{ color: editorialColors.gold, fontStyle: "italic" }}>
                One unit. No cost.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.78)",
                margin: 0,
              }}
            >
              We deploy CareCore in one unit, agree on a measurable success
              metric before day one, and walk if we don&apos;t move it.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link
              href="/pilot/request"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                background: editorialColors.gold,
                color: "#fff",
                padding: "0 32px",
                height: 56,
                borderRadius: 2,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              Request Your Pilot →
            </Link>
            <Link
              href="/pilot"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#fff",
                padding: "0 32px",
                height: 56,
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.4)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              Read Pilot Terms
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#fff",
          padding: "64px 32px",
          borderTop: "1px solid rgba(12,27,51,0.08)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Eyebrow color={editorialColors.navy} style={{ marginBottom: 24 }}>
            Other Pillars
          </Eyebrow>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "rgba(12,27,51,0.08)",
              border: "1px solid rgba(12,27,51,0.08)",
            }}
          >
            {others.slice(0, 6).map((d) => (
              <Link
                key={d.slug}
                href={`/platform/${d.slug}`}
                style={{
                  background: "#fff",
                  padding: 24,
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    color: editorialColors.gold,
                    marginBottom: 8,
                  }}
                >
                  {domainFeatureCount(d).toString().padStart(2, "0")} Features
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 22,
                    color: editorialColors.navy,
                    marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {d.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontStyle: "italic",
                    color: "#555",
                  }}
                >
                  {d.tagline}
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link
              href="/platform"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: editorialColors.navy,
                textDecoration: "none",
                borderBottom: `2px solid ${editorialColors.gold}`,
                paddingBottom: 4,
              }}
            >
              See all {platformDomains.length} pillars →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
          { name: domain.name, path: `/platform/${domain.slug}` },
        ]}
      />
    </main>
  );
}

const DomainStat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 40,
        lineHeight: 1,
        color: "#fff",
        letterSpacing: "-0.02em",
      }}
    >
      {value}
    </div>
    <div
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: editorialColors.gold,
        marginTop: 6,
      }}
    >
      {label}
    </div>
  </div>
);

const DomainNavLink = ({
  direction,
  label,
  name,
  href,
}: {
  direction: "prev" | "next";
  label: string;
  name: string;
  href: string;
}) => (
  <Link
    href={href}
    style={{
      flex: 1,
      background: "#fff",
      border: "1px solid rgba(12,27,51,0.1)",
      padding: "24px 28px",
      textDecoration: "none",
      color: "inherit",
      textAlign: direction === "prev" ? "left" : "right",
      borderRadius: 2,
    }}
  >
    <div
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: editorialColors.gold,
        marginBottom: 6,
      }}
    >
      {direction === "prev" ? "← " : ""}
      {label}
      {direction === "next" ? " →" : ""}
    </div>
    <div
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 22,
        lineHeight: 1.1,
        color: editorialColors.navy,
        letterSpacing: "-0.01em",
      }}
    >
      {name}
    </div>
  </Link>
);
