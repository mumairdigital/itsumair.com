import type { Metadata } from "next";
import { Mail, MessageCircle, CalendarClock, MapPin } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { LeadForm } from "@/components/forms/LeadForm";
import { CalEmbed } from "@/components/booking/CalEmbed";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { CONTACT_EMAIL } from "@/lib/nav";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildContactPageSchema, buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Contact | Local SEO for Bathroom Remodelers",
  description: "Talk to Umair about your bathroom remodeling company's local SEO. I reply within one business day.",
  path: "/contact/",
});

const contactPageSchema = buildContactPageSchema("/contact/");
const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact" }]);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        </Container>
        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h1 className="text-display">Let&apos;s Talk</h1>
          <p className="text-body-lg mt-4 text-text-secondary">I reply within one business day.</p>
        </div>
      </Section>

      {/* 2. Two-path layout */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Card>
            <h2 className="text-h3">Send Me a Message</h2>
            <div className="mt-5">
              <LeadForm source="contact" />
            </div>
          </Card>

          <div className="flex flex-col gap-6">
            <h2 className="text-h3">Reach Me Directly</h2>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 text-body text-text-primary hover:text-brand-primary">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-primary-light text-brand-primary">
                <Mail aria-hidden="true" className="h-5 w-5" />
              </span>
              {CONTACT_EMAIL}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-body text-text-primary hover:text-brand-primary"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-primary-light text-brand-primary">
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
              </span>
              WhatsApp, if you&apos;d rather message than fill in a form
            </a>
            <div className="flex items-center gap-4 text-body text-text-primary">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-primary-light text-brand-primary">
                <CalendarClock aria-hidden="true" className="h-5 w-5" />
              </span>
              Based in Islamabad, available for calls and messages that fit an Eastern Time schedule
            </div>
            <div className="flex items-center gap-4 text-body text-text-primary">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-primary-light text-brand-primary">
                <MapPin aria-hidden="true" className="h-5 w-5" />
              </span>
              Serving bathroom remodeling companies across Tampa Bay, FL
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Booking */}
      <Section background="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">Book a 20-Minute Visibility Review</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            No pitch, just a look at your current visibility together. Pick a time that works, timezone detected
            automatically.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <CalEmbed />
        </div>
      </Section>

      {/* 4. What happens next */}
      <Section>
        <h2 className="text-h2 text-center">What Happens Next</h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
          <div>
            <p className="text-h3 text-brand-primary">1</p>
            <p className="text-body mt-2 text-text-secondary">You send a message or book a call.</p>
          </div>
          <div>
            <p className="text-h3 text-brand-primary">2</p>
            <p className="text-body mt-2 text-text-secondary">I reply within one business day, usually faster.</p>
          </div>
          <div>
            <p className="text-h3 text-brand-primary">3</p>
            <p className="text-body mt-2 text-text-secondary">We talk about what&apos;s actually happening with your visibility.</p>
          </div>
        </div>
      </Section>

      {/* 5. Short FAQ */}
      <Section background="surface" narrow>
        <h2 className="text-h2 text-center">A Few Quick Questions</h2>
        <div className="mt-10">
          <FaqAccordion
            items={[
              {
                question: "How fast will you respond?",
                answer: <p>I reply within one business day, usually faster.</p>,
              },
              {
                question: "What does the call cover?",
                answer: (
                  <p>
                    Just a look at your current visibility: your Google ranking, your reviews, and what&apos;s
                    working. No pitch, no pressure.
                  </p>
                ),
              },
              {
                question: "Does this cost anything?",
                answer: <p>No. The call and the audit are both free.</p>,
              },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
