import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { CtaBlock } from "@/components/content/CtaBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CASE_STUDIES } from "@/lib/case-studies-data";

export const metadata: Metadata = pageMetadata({
  title: "Results and Case Studies | Umair",
  description:
    "Real, honestly labeled work: no fabricated bathroom-remodeler case studies yet, so here's the genuine related work behind the specialty.",
  path: "/results/",
});

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Results" }]);

export default function ResultsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Results" }]} />
        </Container>
        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h1 className="text-display">Results</h1>
          <p className="text-body-lg mt-4 text-text-secondary">
            There are no Tampa bathroom-remodeler case studies to show yet, that&apos;s the honest truth of a
            specialty this new. Rather than dress up unrelated numbers as remodeler results, here&apos;s the real
            work behind the specialty, labeled plainly for what it is.
          </p>
        </div>
      </Section>

      {/* 2. Case study grid */}
      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <Card key={study.slug} hoverable as={Link} href={`/results/${study.slug}/`} className="flex flex-col">
              {study.images?.[0] ? (
                <ResponsiveImage src={study.images[0].src} alt={study.images[0].alt} aspect="aspect-video" />
              ) : (
                <ImagePlaceholder label={`Illustrative graphic for the case study: ${study.title}`} aspect="aspect-video" />
              )}
              <p className="text-small mt-5 font-semibold uppercase tracking-wide text-proof-accent">{study.tag}</p>
              <h2 className="text-h4 mt-2">{study.title}</h2>
              <p className="text-body mt-2 flex-1 text-text-secondary">{study.hubExcerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-small font-semibold text-brand-primary">
                Read the case study
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </Card>
          ))}
        </div>
      </Section>

      {/* 3. CTA */}
      <CtaBlock heading="Want to Be the Next Real Case Study?">
        Get a free visibility audit, and if we work together, your results get documented honestly, numbers included.
      </CtaBlock>
    </>
  );
}
