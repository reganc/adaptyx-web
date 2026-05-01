import { siteConfig } from "@/lib/site";

const JsonLd = ({ data }: { data: object }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export const OrganizationJsonLd = () => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.legalName,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/opengraph-image`,
      description: siteConfig.description,
      brand: {
        "@type": "Brand",
        name: siteConfig.shortName,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        availableLanguage: ["en"],
      },
    }}
  />
);

export const WebSiteJsonLd = () => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en-US",
    }}
  />
);

export const ServiceJsonLd = () => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: siteConfig.shortName,
      provider: {
        "@type": "Organization",
        name: siteConfig.legalName,
        url: siteConfig.url,
      },
      serviceType: "Cloud-native EHR and operating system for skilled nursing facilities",
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Skilled Nursing Facility Operators",
      },
      description: siteConfig.description,
      url: siteConfig.url,
    }}
  />
);

export const OfferPilotJsonLd = () => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "Offer",
      name: "30-Day Operational Pilot",
      description:
        "A 30-day, no-cost pilot of CareCore in one unit of one skilled nursing facility, with success metrics agreed in writing before day one.",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/pilot`,
      seller: {
        "@type": "Organization",
        name: siteConfig.legalName,
        url: siteConfig.url,
      },
    }}
  />
);

export const BreadcrumbJsonLd = ({
  items,
}: {
  items: ReadonlyArray<{ name: string; path: string }>;
}) => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${siteConfig.url}${item.path}`,
      })),
    }}
  />
);
