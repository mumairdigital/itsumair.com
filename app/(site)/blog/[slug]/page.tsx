import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { CtaBlock } from "@/components/content/CtaBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog-data";
import { WhyHomeownersCantFindYouOnGoogle } from "@/components/blog/posts/WhyHomeownersCantFindYouOnGoogle";
import type { ComponentType } from "react";

const POST_CONTENT: Record<string, ComponentType> = {
  "why-homeowners-cant-find-you-on-google": WhyHomeownersCantFindYouOnGoogle,
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}/`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  const Content = POST_CONTENT[slug];
  if (!post || !Content) notFound();

  const articleSchema = buildArticleSchema({
    headline: post.title,
    description: post.metaDescription,
    url: `/blog/${post.slug}/`,
    datePublished: post.publishedDate,
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog/" },
    { name: post.title },
  ]);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: post.title }]} />
        </Container>
        <div className="mt-6 max-w-3xl">
          <p className="text-small font-semibold uppercase tracking-wide text-brand-primary">{post.category}</p>
          <h1 className="text-display mt-2">{post.title}</h1>
          <p className="text-body mt-4 text-text-secondary">
            By Muhammad Umair &middot; {new Date(post.publishedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} &middot; {post.readTime}
          </p>
        </div>
        <div className="mt-8 max-w-3xl">
          {post.heroImage ? (
            <ResponsiveImage src={post.heroImage.src} alt={post.heroImage.alt} aspect="aspect-[2816/1536]" priority />
          ) : (
            <ImagePlaceholder label={`Featured graphic for the blog post: ${post.title}`} aspect="aspect-video" />
          )}
        </div>
      </Section>

      {/* Body */}
      <Section narrow>
        <Card className="mb-2">
          <p className="text-small font-semibold uppercase tracking-wide text-text-secondary">Key takeaways</p>
          <ul className="mt-4 flex flex-col gap-3">
            {post.keyTakeaways.map((takeaway) => (
              <li key={takeaway} className="flex items-start gap-3 text-body text-text-primary">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                {takeaway}
              </li>
            ))}
          </ul>
        </Card>

        <article className="mt-10">
          <Content />
        </article>

        {/* Author bio */}
        <Card className="mt-12">
          <div className="flex items-start gap-4">
            <ResponsiveImage
              src="/images/personal/umair-headshot-brand-purple.webp"
              alt="Headshot of Muhammad Umair"
              aspect="aspect-square"
              className="w-16 shrink-0"
            />
            <div>
              <p className="text-h4">Muhammad Umair</p>
              <p className="text-body mt-1 text-text-secondary">
                Local SEO and website specialist working exclusively with bathroom remodeling companies in Tampa
                Bay.
              </p>
              <Link href="/about/" className="mt-3 inline-block font-semibold text-brand-primary hover:underline">
                More about Umair
              </Link>
            </div>
          </div>
        </Card>
      </Section>

      <CtaBlock heading="Ready to Check Your Own Visibility?">
        Get a free, honest visibility audit. No obligation, no sales pitch.
      </CtaBlock>
    </>
  );
}
