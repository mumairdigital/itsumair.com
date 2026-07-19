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
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";

export const metadata: Metadata = pageMetadata({
  title: "Blog | Marketing for Bathroom Remodelers",
  description:
    "Marketing advice for bathroom remodeling company owners: getting found on Google, converting more website visitors, and running the business side of leads.",
  path: "/blog/",
});

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog" }]);

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        </Container>
        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h1 className="text-display">Marketing Advice for Bathroom Remodelers</h1>
          <p className="text-body-lg mt-4 text-text-secondary">
            Written for bathroom remodeling company owners, not homeowners. No fluff, no generic marketing advice
            copied from a template.
          </p>
        </div>
      </Section>

      {/* 2. Category labels */}
      <Section>
        <div className="flex flex-wrap justify-center gap-3">
          {BLOG_CATEGORIES.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border bg-surface px-4 py-2 text-small font-semibold text-text-secondary"
            >
              {category}
            </span>
          ))}
        </div>

        {/* 3. Post grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Card key={post.slug} hoverable as={Link} href={`/blog/${post.slug}/`} className="flex flex-col">
              {post.heroImage ? (
                <ResponsiveImage src={post.heroImage.src} alt={post.heroImage.alt} aspect="aspect-video" />
              ) : (
                <ImagePlaceholder label={`Featured graphic for the blog post: ${post.title}`} aspect="aspect-video" />
              )}
              <p className="text-small mt-5 font-semibold uppercase tracking-wide text-brand-primary">{post.category}</p>
              <h2 className="text-h4 mt-2">{post.title}</h2>
              <p className="text-body mt-2 flex-1 text-text-secondary">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-small text-text-secondary">{post.readTime}</span>
                <span className="inline-flex items-center gap-1.5 text-small font-semibold text-brand-primary">
                  Read
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4. CTA */}
      <CtaBlock heading="Want This Checked on Your Own Business?">
        Get a free, honest visibility audit. No obligation, no sales pitch.
      </CtaBlock>
    </>
  );
}
