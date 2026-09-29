import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/site";

/** Site-wide structured data: the business and the website. Only facts that are already on the site. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        url: SITE_URL,
        email: CONTACT_EMAIL,
        image: `${SITE_URL}/opengraph-image`,
        description: "Web design, SEO and local SEO, digital marketing, and AI automation for businesses.",
        serviceType: ["Web design", "SEO", "Local SEO", "Digital marketing", "AI automation"],
        founder: { "@type": "Person", name: SITE_NAME, url: `${SITE_URL}/about` },
      },
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, publisher: { "@id": `${SITE_URL}/#business` } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
