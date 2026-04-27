import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPostMeta } from "@/lib/blog";
import { getDomainSlugs } from "@/lib/platform";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPostMeta().map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  const domains = getDomainSlugs().map((slug) => ({
    url: `${siteConfig.url}/platform/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/platform`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...domains,
    {
      url: `${siteConfig.url}/pilot`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/pilot/request`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts,
  ];
}
