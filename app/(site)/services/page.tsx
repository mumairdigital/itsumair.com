import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Star, LayoutTemplate, ShieldCheck, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/content/ServiceCard";
import { CtaBlock } from "@/components/content/CtaBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services | Local SEO, GBP, Websites for Bathroom Remodelers",
  description:
    "Local SEO, Google Business Profile optimization, website design, and website maintenance, built as one system for Tampa Bay bathroom remodeling companies.",
  path: "/services/",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services" },
]);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        </Container>
        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h1 className="text-display">Marketing Services for Bathroom Remodeling Companies</h1>
          <p className="text-body-lg mt-4 text-text-secondary">
            Four services, one system: get found on Google, look credible when homeowners click through, and stay
            fast and secure once you&apos;re live. I build all of it myself.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/audit/" size="lg">
              Get My Free Visibility Audit
            </Button>
          </div>
        </div>
      </Section>

      {/* 2. Service grid */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={MapPin} name="Local SEO" href="/services/local-seo/">
            Get your bathroom remodeling company into the Map Pack for the searches that turn into jobs.
          </ServiceCard>
          <ServiceCard icon={Star} name="Google Business Profile" href="/services/google-business-profile/">
            A complete, optimized listing with a system for real reviews, not gimmicks. The fastest visible win.
          </ServiceCard>
          <ServiceCard icon={LayoutTemplate} name="Website Design" href="/services/website-design/">
            A website built to turn visitors into calls, not just look good.
          </ServiceCard>
          <ServiceCard icon={ShieldCheck} name="Website Maintenance" href="/services/website-maintenance/">
            Keep your site fast, secure, and up to date, without lifting a finger.
          </ServiceCard>
        </div>
      </Section>

      {/* 3. How they work together */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">Why These Four, and Not a Menu of Twenty</h2>
          <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
            <p>
              Most agencies sell a long menu of tactics. Bathroom remodelers don&apos;t need twenty tactics, they need
              the handful that actually move the phone: a Google Business Profile that wins the Map Pack, local SEO
              underneath it that holds those rankings, a website that turns the click into a quote request, and
              maintenance so none of it quietly breaks.
            </p>
            <p>
              Google Business Profile is usually the fastest visible win. Local SEO is what makes it durable. Website
              design is what a homeowner sees the moment they click through, and maintenance is what keeps that first
              impression from decaying six months later. Skip one, and the other three work harder for less.
            </p>
          </div>
          <div className="mt-6">
            <Button href="/bathroom-remodeler-marketing/" variant="secondary">
              Read the Complete Marketing Guide
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* 4. Pricing signal */}
      <Section>
        <div className="mx-auto max-w-narrow text-center">
          <h2 className="text-h2">Published Pricing, No Sales Call Required</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            Monthly plans start at $497, and website projects start at $2,497. Every price is published on the{" "}
            <Link href="/pricing/" className="font-semibold text-brand-primary hover:underline">
              pricing page
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* 5. CTA */}
      <CtaBlock heading="Not Sure Which Service You Need?">
        Get a free visibility audit. I&apos;ll tell you honestly what&apos;s actually holding you back.
      </CtaBlock>
    </>
  );
}
