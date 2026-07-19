import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { StatBlock } from "@/components/content/StatBlock";
import { ServiceCard } from "@/components/content/ServiceCard";
import { CtaBlock } from "@/components/content/CtaBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies-data";
import { MapPin, Star, LayoutTemplate, ShieldCheck, type LucideIcon } from "lucide-react";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "/services/local-seo/": MapPin,
  "/services/google-business-profile/": Star,
  "/services/website-design/": LayoutTemplate,
  "/services/website-maintenance/": ShieldCheck,
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return pageMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/results/${study.slug}/`,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const articleSchema = buildArticleSchema({
    headline: study.title,
    description: study.metaDescription,
    url: `/results/${study.slug}/`,
    datePublished: "2026-07-18",
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Results", url: "/results/" },
    { name: study.title },
  ]);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Results", href: "/results/" }, { label: study.title }]} />
        </Container>
        <div className="mt-6">
          <p className="text-small font-semibold uppercase tracking-wide text-proof-accent">{study.tag}</p>
          <h1 className="text-display mt-2 max-w-3xl">{study.title}</h1>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {study.stats.map((stat) => (
              <StatBlock key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
          <ImagePlaceholder label={`Hero graphic for the case study: ${study.title}`} aspect="aspect-[4/3]" />
        </div>
      </Section>

      {/* 2. Client snapshot */}
      <Section narrow>
        <h2 className="text-h2">Snapshot</h2>
        <Card className="mt-6">
          <dl className="grid gap-4 sm:grid-cols-2">
            {study.snapshot.map((item) => (
              <div key={item.label}>
                <dt className="text-small font-semibold uppercase tracking-wide text-text-secondary">{item.label}</dt>
                <dd className="text-body mt-1 text-text-primary">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </Section>

      {/* 3. The problem */}
      <Section background="surface" narrow>
        <h2 className="text-h2">The Problem</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          {study.problem.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* 4. What the audit found */}
      <Section narrow>
        <h2 className="text-h2">What the Audit Found</h2>
        <ul className="text-body-lg mt-5 flex flex-col gap-3 text-text-secondary">
          {study.auditFindings.map((finding, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
              {finding}
            </li>
          ))}
        </ul>
      </Section>

      {/* 5. What I did */}
      <Section background="surface" narrow>
        <h2 className="text-h2">What I Did</h2>
        <ul className="text-body-lg mt-5 flex flex-col gap-3 text-text-secondary">
          {study.whatIDid.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
              {item}
            </li>
          ))}
        </ul>
        <div className={`mt-8 grid gap-6 ${study.images && study.images.length > 1 ? "sm:grid-cols-2" : ""}`}>
          {study.images ? (
            study.images.map((image) => (
              <ResponsiveImage key={image.src} src={image.src} alt={image.alt} aspect="aspect-video" />
            ))
          ) : (
            <ImagePlaceholder label={`Before and after screenshots for: ${study.title}`} aspect="aspect-video" />
          )}
        </div>
      </Section>

      {/* 6. Results */}
      <Section narrow>
        <h2 className="text-h2">The Results</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          {study.results.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* 8. Services used */}
      <Section background="surface">
        <h2 className="text-h2 text-center">Services Used</h2>
        <div
          className={`mt-10 grid gap-6 ${
            study.servicesUsed.length === 1
              ? "max-w-md mx-auto"
              : study.servicesUsed.length === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {study.servicesUsed.map((service) => {
            const Icon = SERVICE_ICONS[service.href] ?? LayoutTemplate;
            return (
              <ServiceCard key={service.href} icon={Icon} name={service.name} href={service.href}>
                See how this service works for bathroom remodeling companies today.
              </ServiceCard>
            );
          })}
        </div>
      </Section>

      {/* 9. CTA */}
      <CtaBlock heading="Want Real Work Like This on Your Site?">
        Get a free, honest visibility audit. No obligation, no sales pitch.
      </CtaBlock>
    </>
  );
}
