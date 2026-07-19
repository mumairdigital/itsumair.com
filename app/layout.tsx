import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SkipLink } from "@/components/layout/SkipLink";
import { Analytics } from "@/components/analytics/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSiteEntitiesSchema, SITE_URL } from "@/lib/schema";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import "./globals.css";

const siteEntitiesSchema = buildSiteEntitiesSchema();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "Local SEO and website specialist working exclusively with bathroom remodeling companies in Tampa Bay, FL.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Local SEO for Bathroom Remodelers in Tampa Bay | itsumair.com",
    template: "%s | itsumair.com",
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: "/images/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/images/brand/apple-touch-icon.png" }],
  },
  openGraph: {
    siteName: "itsumair.com",
    type: "website",
    locale: "en_US",
    title: "Local SEO for Bathroom Remodelers in Tampa Bay | itsumair.com",
    description: SITE_DESCRIPTION,
    url: "/",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO for Bathroom Remodelers in Tampa Bay | itsumair.com",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={siteEntitiesSchema} />
        <SkipLink />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
