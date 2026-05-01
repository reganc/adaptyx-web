import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  keywords: [
    "skilled nursing EHR",
    "SNF software",
    "post-acute operating system",
    "nursing home platform",
    "long-term care EHR",
    "MDS 3.0 PDPM",
    "FHIR R4 SMART on FHIR",
    "PBJ QAPI Five-Star",
    "CareCore",
    "Adaptyx",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "Healthcare Technology",
};

export const viewport: Viewport = {
  themeColor: "#0C1B33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${siteConfig.name} — Insights`}
          href="/feed.xml"
        />
        {children}
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </body>
    </html>
  );
}
