import type { Metadata } from "next";
import Link from "next/link";
import { Search, Star, Gauge, ListChecks, MapPinned } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { LeadForm } from "@/components/forms/LeadForm";
import { CalEmbed } from "@/components/booking/CalEmbed";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema, buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Free SEO Audit for Bathroom Remodelers | Tampa Bay",
  description:
    "Get a free visibility audit for your bathroom remodeling company: Map Pack position, review gap, Google Business Profile score, and your top 3 fixes.",
  path: "/audit/",
});

const DELIVERABLES = [
  { icon: MapPinned, text: "Your current Map Pack position for the terms that matter" },
  { icon: Star, text: "How your review count compares to your top 3 competitors" },
  { icon: Search, text: "Your Google Business Profile completeness score" },
  { icon: Gauge, text: "Your website speed and mobile check" },
  { icon: ListChecks, text: "The top 3 things to fix, in priority order" },
];

const AUDIT_FAQS = [
  {
    question: "Is the audit really free?",
    answer: "Yes, no catch. I do it because when people see their own numbers, most want to talk about fixing them. That's how conversations start.",
  },
  {
    question: "How long does the audit take?",
    answer: "You'll have it within one business day of submitting the form.",
  },
  {
    question: "What do you do with my information?",
    answer: "I use it to build your audit and follow up with you. I never sell or share it. Full details are in the privacy policy.",
  },
];

const serviceSchema = buildServiceSchema({
  name: "Free Visibility Audit for Bathroom Remodelers",
  description:
    "A free Map Pack position, Google Business Profile, and website visibility audit for bathroom remodeling companies in Tampa Bay.",
  url: "/audit/",
  serviceType: "Local SEO Audit",
});
const faqSchema = buildFaqSchema(AUDIT_FAQS);

export default function AuditPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-display max-w-lg">Free Visibility Audit for Tampa Bay Bathroom Remodelers</h1>
            <p className="text-body-lg mt-5 max-w-lg text-text-secondary">
              I&apos;ll check your Google Maps ranking, your review count, your website, and send you the top 3
              fixes, no strings attached.
            </p>
            <p className="text-small mt-4 text-text-secondary">Free. No obligation. 24-hour turnaround.</p>
          </div>
          <Card>
            <h2 className="text-h4">Get your free audit</h2>
            <div className="mt-5">
              <LeadForm source="audit" />
            </div>
          </Card>
        </div>
      </Section>

      {/* 2. What you get */}
      <Section>
        <h2 className="text-h2 text-center">What You&apos;ll Get</h2>
        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4">
          {DELIVERABLES.map((item) => (
            <div key={item.text} className="flex items-center gap-4 rounded-lg border border-border bg-surface p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-primary-light text-brand-primary">
                <item.icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="text-body text-text-primary">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-body text-text-secondary">
          Delivered as a short PDF or video walkthrough within one business day.
        </p>
      </Section>

      {/* 3. Sample audit preview */}
      <Section background="surface">
        <h2 className="text-h2 text-center">Here&apos;s What It Looks Like</h2>
        <div className="mx-auto mt-10 max-w-3xl">
          <ImagePlaceholder label="Sample screenshot of a completed visibility audit report" aspect="aspect-video" />
        </div>
      </Section>

      {/* 4. What it costs */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">What Does It Cost?</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            Nothing. I run these audits for free because when a business owner sees their own numbers, most want to
            talk about fixing them. That&apos;s honestly how conversations start, and it&apos;s a better first step
            than a cold sales pitch.
          </p>
        </div>
      </Section>

      {/* 5. What happens next */}
      <Section background="surface">
        <h2 className="text-h2 text-center">What Happens Next</h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
          <div>
            <p className="text-h3 text-brand-primary">1</p>
            <p className="text-body mt-2 text-text-secondary">You fill in the form. Takes about two minutes.</p>
          </div>
          <div>
            <p className="text-h3 text-brand-primary">2</p>
            <p className="text-body mt-2 text-text-secondary">I run the audit and send it to you within one business day.</p>
          </div>
          <div>
            <p className="text-h3 text-brand-primary">3</p>
            <p className="text-body mt-2 text-text-secondary">
              If it&apos;s useful, we talk. If not, keep the audit either way.
            </p>
          </div>
        </div>
      </Section>

      {/* 5.5 Or book directly */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">Ready to Talk Now?</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            If you&apos;d rather not wait on a follow-up, book a 20-minute visibility review directly. Same free
            audit, just a live conversation instead of a form.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <CalEmbed />
        </div>
      </Section>

      {/* 6. Who this is for */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">Who This Is For</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            This audit is built for bathroom remodeling companies already operating in the Tampa Bay area. If
            that&apos;s you, fill in the form below and I&apos;ll get started.
          </p>
        </div>
      </Section>

      {/* 7. Form repeated */}
      <Section background="surface">
        <Card className="mx-auto max-w-xl">
          <h2 className="text-h3 text-center">Get Your Free Visibility Audit</h2>
          <div className="mt-5">
            <LeadForm source="audit" />
          </div>
        </Card>
      </Section>

      {/* 8. FAQ */}
      <Section narrow>
        <h2 className="text-h2 text-center">Questions About the Audit</h2>
        <div className="mt-10">
          <FaqAccordion
            items={AUDIT_FAQS.map((faq) => ({
              question: faq.question,
              answer:
                faq.question === "What do you do with my information?" ? (
                  <p>
                    I use it to build your audit and follow up with you. I never sell or share it. Full details are
                    in the{" "}
                    <Link href="/privacy-policy/" className="font-semibold text-brand-primary hover:underline">
                      privacy policy
                    </Link>
                    .
                  </p>
                ) : (
                  <p>{faq.answer}</p>
                ),
            }))}
          />
        </div>
      </Section>
    </>
  );
}
