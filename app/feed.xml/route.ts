import { siteConfig } from "@/lib/site";
import { getAllPostMeta, getPostBySlug } from "@/lib/blog";

export const dynamic = "force-static";
export const revalidate = false;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]!,
  );

const cdata = (s: string) => `<![CDATA[${s.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;

export async function GET() {
  const posts = await Promise.all(
    getAllPostMeta().map((m) => getPostBySlug(m.slug)),
  );
  const published = posts.filter(<T,>(p: T | null): p is T => p !== null);

  const lastBuildDate = new Date(
    published[0]?.date ?? new Date().toISOString(),
  ).toUTCString();

  const items = published
    .map((post) => {
      const url = `${siteConfig.url}/blog/${post.slug}`;
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator>${cdata(post.author)}</dc:creator>
      <description>${cdata(post.description)}</description>
      <content:encoded>${cdata(post.contentHtml)}</content:encoded>${post.tags
        .map((t) => `\n      <category>${escape(t)}</category>`)
        .join("")}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(siteConfig.name)} — Insights</title>
    <link>${siteConfig.url}/blog</link>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escape(siteConfig.description)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Next.js</generator>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, must-revalidate",
    },
  });
}
