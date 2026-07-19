import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Star, LayoutTemplate, ShieldCheck } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { ServiceCard } from "@/components/content/ServiceCard";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import { CtaBlock } from "@/components/content/CtaBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { AREAS, getAreaBySlug } from "@/lib/areas-data";

type PageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return AREAS.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const area = getAreaBySlug(city);
  if (!area) return {};

  return pageMetadata({
    title: area.metaTitle,
    description: `Local SEO and Google Business Profile work for bathroom remodeling companies serving ${area.name}, FL. ${area.hubHook} Get a free visibility audit.`,
    path: `/areas/${area.slug}/`,
  });
}

export default async function AreaPage({ params }: PageProps) {
  const { city } = await params;
  const area = getAreaBySlug(city);
  if (!area) notFound();

  const nearbyAreas = area.nearby.map((slug) => getAreaBySlug(slug)).filter((a): a is NonNullable<typeof a> => Boolean(a));

  const serviceSchema = buildServiceSchema({
    name: `Local SEO for Bathroom Remodelers in ${area.name}, FL`,
    description: `Local SEO and Google Business Profile optimization for bathroom remodeling companies serving ${area.name}, Florida.`,
    url: `/areas/${area.slug}/`,
    serviceType: "Local SEO",
    areaServed: [area.name],
  });
  const faqSchema = buildFaqSchema(area.faqs);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Areas", url: "/areas/" },
    { name: area.name },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Areas", href: "/areas/" }, { label: area.name }]} />
        </Container>
        <Container>
          <ResponsiveImage
            src="/images/locations/location-header-template.webp"
            alt={`Stylized map and skyline graphic representing bathroom remodeler SEO in ${area.name}, FL`}
            aspect="aspect-[3712/1152]"
            className="mt-6"
            priority
          />
        </Container>
        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h1 className="text-display">Local SEO for Bathroom Remodelers in {area.name}, FL</h1>
          <p className="text-body-lg mt-4 text-text-secondary">{area.heroFact}</p>
          <div className="mt-8 flex justify-center">
            <Button href="/audit/" size="lg">
              Get My Free Visibility Audit
            </Button>
          </div>
        </div>
      </Section>

      {/* 2. Market snapshot */}
      <Section narrow>
        <h2 className="text-h2">The {area.name} Bathroom Remodeling Market</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          {area.marketSnapshot.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* 3. Competitive picture */}
      <Section background="surface" narrow>
        <h2 className="text-h2">What It Takes to Rank in {area.name}</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          {area.competitivePicture.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* 4. Neighborhoods */}
      <Section narrow>
        <h2 className="text-h2">Neighborhoods and Areas I Cover</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {area.neighborhoods.map((neighborhood) => (
            <span
              key={neighborhood}
              className="rounded-full border border-border bg-surface px-4 py-2 text-body text-text-primary"
            >
              {neighborhood}
            </span>
          ))}
        </div>
      </Section>

      {/* 5. Relevant proof */}
      <Section background="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">Real Work, Honestly Labeled</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            I don&apos;t have a {area.name} bathroom-remodeler case study yet. Here&apos;s the real, related work I
            have, described plainly rather than dressed up.
          </p>
        </div>
        <div className="mt-8 text-center">
          <Button href="/results/" variant="secondary">
            See All Case Studies
          </Button>
        </div>
      </Section>

      {/* 6. Services */}
      <Section>
        <h2 className="text-h2 text-center">Services for {area.name} Remodelers</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={MapPin} name="Local SEO" href="/services/local-seo/">
            Map Pack rankings for the searches homeowners in {area.name} actually use.
          </ServiceCard>
          <ServiceCard icon={Star} name="Google Business Profile" href="/services/google-business-profile/">
            The fastest visible win for a {area.name} listing.
          </ServiceCard>
          <ServiceCard icon={LayoutTemplate} name="Website Design" href="/services/website-design/">
            A site built to convert {area.name} homeowners into quote requests.
          </ServiceCard>
          <ServiceCard icon={ShieldCheck} name="Website Maintenance" href="/services/website-maintenance/">
            Keep it fast, secure, and generating leads.
          </ServiceCard>
        </div>
      </Section>

      {/* 7. City FAQ */}
      <Section background="surface" narrow>
        <h2 className="text-h2 text-center">{area.name} Questions</h2>
        <div className="mt-10">
          <FaqAccordion items={area.faqs.map((faq) => ({ question: faq.question, answer: <p>{faq.answer}</p> }))} />
        </div>
      </Section>

      {/* 8. Nearby areas */}
      {nearbyAreas.length > 0 && (
        <Section>
          <h2 className="text-h2 text-center">Nearby Areas</h2>
          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            {nearbyAreas.map((nearby) => (
              <Card key={nearby.slug} hoverable as={Link} href={`/areas/${nearby.slug}/`}>
                <h3 className="text-h4">{nearby.name}</h3>
                <p className="text-body mt-2 text-text-secondary">{nearby.hubHook}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* 9. CTA */}
      <CtaBlock heading={`Ready to Show Up in ${area.name}?`}>
        Get a free, honest look at your visibility in {area.name}. No obligation, no sales pitch.
      </CtaBlock>
    </>
  );
}
