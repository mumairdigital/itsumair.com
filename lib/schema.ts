import { AREA_LINKS, CONTACT_EMAIL } from "@/lib/nav";

export const SITE_URL = "https://itsumair.com";

const PERSON_ID = `${SITE_URL}/#person`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const PROVIDER = {
  "@type": "Person",
  name: "Muhammad Umair",
  url: SITE_URL,
} as const;

const AREA_SERVED = AREA_LINKS.map((area) => ({ "@type": "City", name: area.label }));

/**
 * Site-wide Person + ProfessionalService + WebSite entities (schema-specification.md).
 * Deliberately omits image/logo/sameAs/telephone/PostalAddress: no real headshot, logo,
 * verified social profile URLs, or published phone number exist yet, and no Tampa
 * physical address exists at all (see local-seo-entity-plan.md — fabricating one would
 * violate Google's guidelines and this project's own "never fabricate" rule).
 */
export function buildSiteEntitiesSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Muhammad Umair",
        alternateName: "Umair",
        jobTitle: "Local SEO Specialist",
        url: SITE_URL,
        email: `mailto:${CONTACT_EMAIL}`,
        description:
          "Local SEO and website specialist working exclusively with bathroom remodeling companies in Tampa Bay, FL.",
        knowsAbout: ["Local SEO", "Google Business Profile Optimization", "Website Design", "Bathroom Remodeling Marketing"],
        worksFor: { "@id": BUSINESS_ID },
      },
      {
        "@type": "ProfessionalService",
        "@id": BUSINESS_ID,
        name: "itsumair.com",
        url: SITE_URL,
        email: `mailto:${CONTACT_EMAIL}`,
        description:
          "Local SEO, Google Business Profile optimization, website design, and website maintenance for bathroom remodeling companies in Tampa Bay, FL.",
        areaServed: AREA_SERVED,
        serviceType: ["Local SEO", "Google Business Profile Optimization", "Website Design", "Website Maintenance"],
        priceRange: "$497–$2,497+",
        founder: { "@id": PERSON_ID },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: "itsumair.com",
        url: SITE_URL,
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };
}

type ServiceOffer = {
  name: string;
  price: string;
  priceCurrency?: string;
};

type ServiceSchemaInput = {
  name: string;
  description: string;
  url: string;
  serviceType: string | string[];
  /** Restrict areaServed to a single city, e.g. for a location page. Defaults to all Tampa Bay cities. */
  areaServed?: string[];
  /** Only ever real, published prices (schema-specification.md: "offers only where a real published price exists"). */
  offers?: ServiceOffer[];
};

export function buildServiceSchema({ name, description, url, serviceType, areaServed, offers }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: PROVIDER,
    areaServed: areaServed ? areaServed.map((cityName) => ({ "@type": "City", name: cityName })) : AREA_SERVED,
    url: `${SITE_URL}${url}`,
    ...(offers
      ? {
          offers: offers.map((offer) => ({
            "@type": "Offer",
            name: offer.name,
            price: offer.price,
            priceCurrency: offer.priceCurrency ?? "USD",
          })),
        }
      : {}),
  };
}

export function buildContactPageSchema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact",
    url: `${SITE_URL}${url}`,
    about: { "@id": PERSON_ID },
  };
}

export type FaqSchemaItem = {
  question: string;
  answer: string;
};

export function buildFaqSchema(items: FaqSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type BreadcrumbSchemaItem = {
  name: string;
  url?: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: `${SITE_URL}${item.url}` } : {}),
    })),
  };
}

type ArticleSchemaInput = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
};

export function buildArticleSchema({ headline, description, url, datePublished, dateModified }: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: { "@type": "Person", name: "Muhammad Umair" },
    publisher: { "@type": "Person", name: "Muhammad Umair" },
    datePublished,
    dateModified: dateModified ?? datePublished,
    mainEntityOfPage: `${SITE_URL}${url}`,
  };
}
