import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, LayoutTemplate } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { ProcessStep } from "@/components/content/ProcessStep";
import { IncludedList } from "@/components/content/IncludedList";
import { WhoItsFor } from "@/components/content/WhoItsFor";
import { ServiceCard } from "@/components/content/ServiceCard";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import { CtaBlock } from "@/components/content/CtaBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Google Business Profile Optimization | Bathroom Remodelers",
  description:
    "Google Business Profile optimization for Tampa Bay bathroom remodelers: categories, photos, posts, and a real-review system. The fastest visible win.",
  path: "/services/google-business-profile/",
});

const FAQS = [
  {
    question: "Do I own my Google Business Profile?",
    answer:
      "Yes, always. I get added as a manager on your existing profile, or help you claim and verify one if you don't have it yet. It stays registered to you, under your ownership, whether we work together or not.",
  },
  {
    question: "How many reviews do I need?",
    answer:
      "It depends on your competitors, not a fixed number. If the top three Map Pack results in your area have 80 to 150 recent reviews, matching volume isn't enough on its own, you also need recency: reviews from the last 90 days matter more than a pile from three years ago.",
  },
  {
    question: "Can you get me reviews?",
    answer:
      "I build the system that makes it easy for real customers to leave one: request timing, follow-up messages, and a simple link. I never buy, fake, or incentivize reviews. Google can and does penalize that, and it's not honest work.",
  },
  {
    question: "What if my profile is suspended?",
    answer:
      "I diagnose the likely cause, whether it's a policy violation, a duplicate listing, or a verification issue, and file the reinstatement request with Google. It isn't instant, but most suspensions are recoverable with the right documentation.",
  },
];

const serviceSchema = buildServiceSchema({
  name: "Google Business Profile Optimization for Bathroom Remodelers",
  description:
    "Google Business Profile optimization for bathroom remodeling companies: category setup, photo strategy, posts, and a compliant review generation system.",
  url: "/services/google-business-profile/",
  serviceType: "Google Business Profile Optimization",
});
const faqSchema = buildFaqSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services/" },
  { name: "Google Business Profile" },
]);

export default function GoogleBusinessProfilePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services/" },
              { label: "Google Business Profile" },
            ]}
          />
        </Container>
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-display max-w-xl">Google Business Profile Optimization for Bathroom Remodelers</h1>
            <p className="text-body-lg mt-5 max-w-lg text-text-secondary">
              The Map Pack is where high-intent homeowners choose who to call. Your Google profile is what decides
              whether that call is you.
            </p>
            <div className="mt-8">
              <Button href="/audit/" size="lg">
                Get My Free Visibility Audit
              </Button>
            </div>
          </div>
          <ResponsiveImage
            src="/images/services/service-gbp.webp"
            alt="Icon of a storefront with a five-star rating badge, representing an optimized Google Business Profile"
            aspect="aspect-square"
            priority
          />
        </div>
      </Section>

      {/* 2. Problem */}
      <Section>
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">Your Google Profile Is Your Storefront. Most Remodelers Ignore It.</h2>
          <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
            <p>
              Most bathroom remodeler profiles are half-filled: the wrong category, no photos beyond a stock logo, no
              posts in months, and reviews that stopped coming in last year. Homeowners see that and read it as a
              company that isn&apos;t active.
            </p>
            <p>
              Meanwhile, the competitor with 150 recent reviews and fresh photos wins the call, not because their work
              is better, but because their profile looks like a business that&apos;s actually operating right now.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. Why GBP matters most */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">Why GBP Matters Most in This Niche</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            A bathroom remodel is a high-ticket, trust-heavy purchase. Homeowners aren&apos;t impulse-clicking, they&apos;re
            comparing. That means reviews and profile quality carry disproportionate weight in this niche compared to
            lower-trust purchases. Proximity, review recency, and profile completeness are what decide the Map Pack,
            and all three are things you can directly influence.
          </p>
        </div>
      </Section>

      {/* 4. What's Included */}
      <Section>
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">What&apos;s Included</h2>
          <div className="mt-8">
            <IncludedList
              items={[
                "Profile audit and claim/verification support",
                "Category optimization (primary and secondary)",
                "Services and products setup",
                "Photo strategy: geo-tagged, correctly named, posted on cadence",
                "Weekly Google Posts",
                "Review generation system",
                "Review response management",
                "Q&A seeding and management",
                "Attributes and business information",
                "Justification snippet optimization",
                "Insights reporting",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 5. Review strategy */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">Reviews Are the Ranking Factor Most Remodelers Underuse</h2>
          <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
            <p>
              Recency matters more than raw volume. A profile with 40 reviews from the last six months outranks one
              with 200 reviews that stopped three years ago.
            </p>
            <p>
              The compliant approach is a system that makes it easy for real customers to leave a review: the right
              timing, a simple link, and a follow-up if they forget.
            </p>
            <p className="font-semibold text-text-primary">No fake reviews, ever. That&apos;s not negotiable.</p>
          </div>
        </div>
      </Section>

      {/* 6. Process */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">How It Works</h2>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <ProcessStep number={1} title="Audit">
            Week 1. I review your current profile: categories, photos, reviews, posts, and completeness.
          </ProcessStep>
          <ProcessStep number={2} title="Foundation">
            Week 2. Categories, services, attributes, and business information get corrected and filled in.
          </ProcessStep>
          <ProcessStep number={3} title="Build">
            Ongoing. Weekly posts, photo cadence, and the review generation system go live.
          </ProcessStep>
          <ProcessStep number={4} title="Report and refine">
            Monthly. Insights reporting shows what&apos;s working, and we adjust from there.
          </ProcessStep>
        </div>
      </Section>

      {/* 7. Proof */}
      <Section background="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">Real Work, Honestly Labeled</h2>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <Card>
            <p className="text-small font-semibold uppercase tracking-wide text-proof-accent">Related work</p>
            <h3 className="text-h4 mt-2">Tile and bathroom showroom platform</h3>
            <p className="text-body mt-2 text-text-secondary">
              Built the product taxonomy, tile calculator, and e-commerce experience for a bathroom and tile
              showroom, the same product world your customers are browsing before they ever open your Google
              profile.
            </p>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button href="/results/" variant="secondary">
            See All Case Studies
          </Button>
        </div>
      </Section>

      {/* 8. Who it's for */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-h2 text-center">Who This Is For</h2>
          <div className="mt-8">
            <WhoItsFor
              goodFit={[
                "Remodelers with an outdated, half-filled, or unclaimed Google profile",
                "Companies that want the fastest visible improvement to their local presence",
                "Owners willing to run a real review-generation system, not shortcuts",
              ]}
              notFit={[
                "Anyone wanting purchased or fake reviews",
                "Businesses outside the Tampa Bay area",
                "Anyone expecting a suspended profile reinstated overnight",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 9. Pricing signal */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow text-center">
          <h2 className="text-h2">Starts at $497/Month</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            GBP optimization is included from the Foundation plan up. Full breakdown on the{" "}
            <Link href="/pricing/" className="font-semibold text-brand-primary hover:underline">
              pricing page
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* 10. FAQ */}
      <Section narrow>
        <h2 className="text-h2 text-center">Common Questions</h2>
        <div className="mt-10">
          <FaqAccordion items={FAQS.map((faq) => ({ question: faq.question, answer: <p>{faq.answer}</p> }))} />
        </div>
      </Section>

      {/* 11. Related services */}
      <Section background="surface">
        <h2 className="text-h2 text-center">Works Well With</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <ServiceCard icon={MapPin} name="Local SEO" href="/services/local-seo/">
            The lasting structure your Google profile rankings need underneath them.
          </ServiceCard>
          <ServiceCard icon={LayoutTemplate} name="Website Design" href="/services/website-design/">
            A site that backs up the trust your profile is building.
          </ServiceCard>
        </div>
      </Section>

      {/* 12. CTA */}
      <CtaBlock heading="Ready to Fix Your Google Profile?">
        Get a free, honest look at your Google Business Profile. No obligation, no sales pitch.
      </CtaBlock>
    </>
  );
}
