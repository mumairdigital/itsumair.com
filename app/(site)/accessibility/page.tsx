import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/nav";

const LAST_REVIEWED = "July 18, 2026";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility Statement | Umair",
  description: "itsumair.com's commitment to WCAG 2.1 AA accessibility, the measures taken, and how to report a problem.",
  path: "/accessibility/",
});

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Accessibility" }]);

export default function AccessibilityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Accessibility" }]} />
        </Container>
        <div className="mt-6">
          <h1 className="text-display">Accessibility Statement</h1>
          <p className="text-body mt-3 text-text-secondary">Last reviewed: {LAST_REVIEWED}</p>
        </div>
      </Section>

      <Section narrow>
        <div className="flex flex-col gap-10 text-body-lg text-text-secondary">
          <div>
            <h2 className="text-h2 text-text-primary">Our Commitment</h2>
            <p className="mt-3">
              A meaningful share of the people searching for a bathroom remodeler are older adults, often reading on
              a phone, sometimes outdoors, sometimes with limited vision or dexterity. Building this site
              accessibly isn&apos;t a checkbox, it&apos;s the same audience the whole site is written for.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Standard Targeted</h2>
            <p className="mt-3">
              This site targets <strong className="text-text-primary">WCAG 2.1 Level AA</strong> conformance across
              every page template.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Measures Taken</h2>
            <ul className="mt-3 flex flex-col gap-2">
              <li>A skip-to-content link as the first focusable element on every page</li>
              <li>Semantic HTML, proper heading order, and one H1 per page</li>
              <li>Visible focus states on every interactive element</li>
              <li>Text and interactive elements checked against WCAG AA contrast minimums</li>
              <li>Descriptive alt text on meaningful images, and empty alt on decorative ones</li>
              <li>Form fields with visible, correctly associated labels, and errors described in text</li>
              <li>Minimum 44&times;44px tap targets and 16px body text throughout</li>
              <li>A responsive layout that supports 200% zoom and works with browser text-size increases</li>
            </ul>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Known Limitations</h2>
            <p className="mt-3">
              The booking calendar and WhatsApp links on this site are provided by third-party tools (Cal.com and
              WhatsApp) whose own accessibility is outside my direct control. Accessibility work here is ongoing, and
              this statement will be updated as improvements continue.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Reporting a Problem</h2>
            <p className="mt-3">
              If you run into an accessibility barrier anywhere on this site, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand-primary hover:underline">
                {CONTACT_EMAIL}
              </a>{" "}
              with the page and a description of the issue. I reply within one business day and will work to fix
              genuine barriers directly.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
