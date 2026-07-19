import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/nav";

const LAST_UPDATED = "July 19, 2026";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Umair",
  description: "How itsumair.com collects, uses, and protects the personal data submitted through its forms and booking tool.",
  path: "/privacy-policy/",
});

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Privacy Policy" }]);

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        </Container>
        <div className="mt-6">
          <h1 className="text-display">Privacy Policy</h1>
          <p className="text-body mt-3 text-text-secondary">Last updated: {LAST_UPDATED}</p>
        </div>
      </Section>

      <Section narrow>
        <div className="flex flex-col gap-10 text-body-lg text-text-secondary">
          <div>
            <h2 className="text-h2 text-text-primary">Who This Applies To</h2>
            <p className="mt-3">
              This policy covers itsumair.com, operated by Muhammad Umair. It explains what personal data the site
              collects when you use the audit request form, the contact form, or the booking calendar, and what
              happens to it afterward.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">What Data Is Collected</h2>
            <ul className="mt-3 flex flex-col gap-2">
              <li>Your name and business name</li>
              <li>Your website address, if you provide one</li>
              <li>Your email address and/or phone number</li>
              <li>The details you write about your problem or question</li>
              <li>If you book a call, the name, email, and time zone details needed to schedule it</li>
              <li>Anonymized analytics data (pages viewed, general location, device type) via Google Analytics</li>
            </ul>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">How It&apos;s Collected</h2>
            <p className="mt-3">
              Directly from you, through the audit request form, the contact form, or the booking calendar. Nothing
              is collected passively beyond standard server logs needed to keep the site running securely.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Why It&apos;s Collected</h2>
            <p className="mt-3">
              To respond to your enquiry, prepare and deliver your free visibility audit, schedule a call if you
              request one, and follow up about the work. It is never collected for any other purpose.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Who It&apos;s Shared With</h2>
            <p className="mt-3">Form, booking, and analytics data passes through named third-party tools that process it on my behalf:</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <strong className="text-text-primary">Resend</strong>, which delivers audit and contact form
                submissions to my inbox
              </li>
              <li>
                <strong className="text-text-primary">Cal.com</strong>, which handles call scheduling if you book a
                time
              </li>
              <li>
                <strong className="text-text-primary">Google Analytics</strong>, which measures site traffic. See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-primary hover:underline"
                >
                  Google&apos;s privacy policy
                </a>{" "}
                for how Google handles that data
              </li>
            </ul>
            <p className="mt-3">Your data is never sold, and it is never shared with anyone beyond these named processors and me.</p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">How Long It&apos;s Kept</h2>
            <p className="mt-3">
              Only as long as reasonably needed to respond to you and keep basic business records, generally no
              longer than a few years after our last contact. You can request deletion at any time using the contact
              details below.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">International Data Transfer</h2>
            <p className="mt-3">
              I&apos;m based in Islamabad, Pakistan, and serve clients in the United States. If you&apos;re a US
              visitor, this means the data you submit may be viewed and processed outside the United States, by me
              directly, as part of normal business operations.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Your Rights</h2>
            <p className="mt-3">
              You can ask, at any time, what data I hold about you, request a copy of it, or request that it be
              deleted. If you&apos;re a California resident, this includes the rights described under the CCPA and
              CPRA: the right to know what&apos;s collected, the right to delete it, and the right to opt out of its
              sale. Your data is never sold, so there is nothing to opt out of on that front, but the right still
              applies and I&apos;ll honor any request.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Cookies</h2>
            <p className="mt-3">
              This site does not use advertising cookies. It does use Google Analytics to understand traffic, which
              pages get visited, roughly where from, on what kind of device, aggregated across all visitors rather
              than tied to who you are. If you&apos;d rather not be tracked, most browsers let you block analytics
              scripts directly, or you can install{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-primary hover:underline"
              >
                Google&apos;s opt-out browser add-on
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-text-primary">Questions About Your Data</h2>
            <p className="mt-3">
              Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand-primary hover:underline">
                {CONTACT_EMAIL}
              </a>{" "}
              and I&apos;ll respond directly. See also the{" "}
              <Link href="/contact/" className="font-semibold text-brand-primary hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
