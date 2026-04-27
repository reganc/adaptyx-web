import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { editorialColors, Eyebrow } from "@/components/Brand";
import { Masthead } from "@/components/sections/Masthead";
import { Footer } from "@/components/sections/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { getAllPostMeta, getPostBySlug, getPostSlugs } from "@/lib/blog";
import "../blog.css";

type Params = { slug: string };

export const dynamicParams = false;

export const generateStaticParams = (): Array<Params> =>
  getPostSlugs().map((slug) => ({ slug }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: [...post.tags],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
};

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(iso));

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/opengraph-image`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    inLanguage: "en-US",
  };

  const others = getAllPostMeta()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <main className="design-frame" style={{ background: editorialColors.cream }}>
      <Masthead />

      <article>
        <header
          style={{
            background: editorialColors.navy,
            color: "#fff",
            padding: "80px 32px",
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <Eyebrow color={editorialColors.gold} style={{ marginBottom: 16 }}>
              {formatDate(post.date)} · {post.readingMinutes} min read
            </Eyebrow>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 56,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
                marginBottom: 16,
                textWrap: "balance",
              }}
            >
              {post.title}
            </h1>
            {post.description && (
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 19,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.78)",
                  margin: 0,
                }}
              >
                {post.description}
              </p>
            )}
            <div
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                marginTop: 28,
              }}
            >
              By {post.author}
            </div>
          </div>
        </header>

        <section style={{ background: "#fff", padding: "64px 32px 80px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </section>
      </article>

      {others.length > 0 && (
        <section
          style={{
            background: editorialColors.cream,
            padding: "64px 32px",
            borderTop: "1px solid rgba(12,27,51,0.08)",
          }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Eyebrow color={editorialColors.navy} style={{ marginBottom: 24 }}>
              More Insights
            </Eyebrow>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
            >
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  style={{
                    display: "block",
                    background: "#fff",
                    border: "1px solid rgba(12,27,51,0.1)",
                    padding: 24,
                    borderRadius: 2,
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
                      marginBottom: 10,
                    }}
                  >
                    {formatDate(p.date)}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 22,
                      lineHeight: 1.15,
                      color: editorialColors.navy,
                      margin: 0,
                      textWrap: "balance",
                    }}
                  >
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </main>
  );
}
