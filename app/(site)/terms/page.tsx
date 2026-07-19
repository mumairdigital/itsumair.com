import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/nav";

const LAST_UPDATED = "July 18, 2026";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service | Umair",
  description: "The terms governing use of itsumair.com and the services described on it.",
  path: "/terms/",
});

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Terms" }]);

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
        </Container>
        <div className="mt-6">
          <h1 className="text-display">Terms of Service</h1>
          <p className="text-body mt-3 text-text-secondary">Last updated: {LAST_UPDATED}</p>
        </div>
      </Section>

      <Section narrow>
        <div className="flex flex-col gap-10 text-body-lg text-text-secondary">
          <div>
            <h2 className="text-h2 text-text-primary">Who Operates This Site</h2>
            <p className="mt-3">
              itsumair.com is operated by Muhammad Umair, an independent local SEO and website specialist serving
              bathroom remodeling companies in Tampa Bay, FL. Using this site or its forms means you agree to these
              terms.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Acceptable Use</h2>
            <p className="mt-3">
              Use this site for its intended purpose: learning about the services offered, requesting an audit, and
              getting in touch. Don&apos;t attempt to scrape, attack, disrupt, or gain unauthorized access to any part
              of the site or the tools it connects to.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Intellectual Property</h2>
            <p className="mt-3">
              The content on this site, writing, design, and graphics, belongs to Muhammad Umair unless otherwise
              noted. Don&apos;t reproduce or republish it without permission.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">No Guaranteed Results</h2>
            <p className="mt-3">
              Nothing on this site is a guarantee of specific search rankings, Google Business Profile positions, or
              business outcomes. Search algorithms are controlled by Google, not by me, and any provider claiming
              guaranteed rankings isn&apos;t being honest with you. Case studies and results described on this site
              reflect real, specific work under real, specific conditions, and are not a promise of similar results
              for any other business.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Limitation of Liability</h2>
            <p className="mt-3">
              This site and its content are provided as-is. To the fullest extent permitted by law, Muhammad Umair
              isn&apos;t liable for indirect, incidental, or consequential damages arising from your use of the site
              or reliance on its content. Nothing here limits liability that can&apos;t be limited under applicable
              law.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Third-Party Links</h2>
            <p className="mt-3">
              This site links to third-party tools and services, including Formspree, Cal.com, WhatsApp, and Google.
              I&apos;m not responsible for the content, availability, or practices of those third-party services.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Governing Law</h2>
            <p className="mt-3">
              These terms are governed by the laws of the State of Florida, without regard to its conflict of law
              principles, given that Florida is where the services described on this site are provided.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Changes to These Terms</h2>
            <p className="mt-3">
              These terms may be updated from time to time. The &quot;last updated&quot; date at the top of this page
              will always reflect the most recent change.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
