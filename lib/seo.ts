import type { Metadata } from "next";

type PageMetadataInput = {
  /** Plain page title, no site suffix — the root layout's template appends " | itsumair.com". */
  title: string;
  description: string;
  /** Path with leading and trailing slash, e.g. "/services/local-seo/". */
  path: string;
};

/** Real 1200x630 OG card (itsumair-website-project/images/homepage/og-fallback.webp). */
export const DEFAULT_OG_IMAGE = {
  url: "/images/homepage/og-fallback.webp",
  width: 1200,
  height: 630,
  alt: "itsumair.com — Local SEO for Bathroom Remodelers in Tampa Bay",
};

/** Canonical + OpenGraph + Twitter card metadata, consistent across every page (metadata-master.md). */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const ogTitle = `${title} | itsumair.com`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: "itsumair.com",
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
