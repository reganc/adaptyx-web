import type { Metadata } from "next";
import Link from "next/link";
import { editorialColors, Eyebrow } from "@/components/Brand";
import { Masthead } from "@/components/sections/Masthead";
import { Footer } from "@/components/sections/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllPostMeta } from "@/lib/blog";

const title = "Insights";
const description =
  "Field notes from skilled-nursing pilots: documentation, operations, compliance, and what actually moves the numbers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", url: "/blog", title, description },
  twitter: { title, description },
};

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(iso));

export default function BlogIndex() {
  const posts = getAllPostMeta();

  return (
    <main className="design-frame" style={{ background: editorialColors.cream }}>
      <Masthead />

      <section
        style={{
          background: editorialColors.navy,
          color: "#fff",
          padding: "96px 32px 80px",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Eyebrow color={editorialColors.gold} style={{ marginBottom: 16 }}>
            Insights · Field Notes
          </Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 84,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              margin: 0,
              marginBottom: 24,
              textWrap: "balance",
            }}
          >
            What we&apos;re learning <span style={{ color: editorialColors.gold }}>in the field.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 19,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.78)",
              margin: 0,
              maxWidth: 640,
            }}
          >
            Operational analysis from skilled-nursing pilots — what breaks, what
            fixes it, and what the numbers actually look like.
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "80px 32px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {posts.length === 0 ? (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                color: editorialColors.stone ?? "#666",
              }}
            >
              First post coming soon.
            </p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {posts.map((post, i) => (
                <li
                  key={post.slug}
                  style={{
                    paddingTop: i === 0 ? 0 : 32,
                    paddingBottom: 32,
                    borderBottom:
                      i < posts.length - 1
                        ? "1px solid rgba(12,27,51,0.08)"
                        : "none",
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
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
                        marginBottom: 12,
                      }}
                    >
                      {formatDate(post.date)}
                      {post.tags.length > 0
                        ? ` · ${post.tags.slice(0, 2).join(" · ")}`
                        : ""}
                    </div>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: 36,
                        lineHeight: 1.1,
                        letterSpacing: "-0.015em",
                        color: editorialColors.navy,
                        margin: 0,
                        marginBottom: 12,
                        textWrap: "balance",
                      }}
                    >
                      {post.title}
                    </h2>
                    {post.description && (
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 17,
                          lineHeight: 1.6,
                          color: "#444",
                          margin: 0,
                          maxWidth: 720,
                        }}
                      >
                        {post.description}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Footer />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
        ]}
      />
    </main>
  );
}
