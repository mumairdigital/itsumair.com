import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingTierCard } from "@/components/content/PricingTierCard";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import { CtaBlock } from "@/components/content/CtaBlock";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Pricing | Local SEO for Bathroom Remodelers",
  description: "Straightforward, published pricing for local SEO, Google Business Profile, and website work for Tampa Bay bathroom remodelers.",
  path: "/pricing/",
});

const PRICING_FAQS = [
  {
    question: "Do I have to sign a long contract?",
    answer: "No. Everything is month to month. No 12-month contracts, no early termination fees.",
  },
  {
    question: "What if it doesn't work?",
    answer:
      "We look at what the data actually shows every month. If something isn't working, we change it. If you want to stop, you can, no long-term lock-in holding you in.",
  },
  {
    question: "Can I cancel?",
    answer: "Yes, anytime. There's no fine print making that hard.",
  },
  {
    question: "Do you require ad spend on top?",
    answer:
      "No. Everything here builds your own assets: your website, your Google listing, your reviews. You own them. Ad spend rents visibility. This builds it.",
  },
  {
    question: "Who will I actually talk to?",
    answer: "Me, always. No account managers, no rotating point of contact.",
  },
];

const serviceSchema = buildServiceSchema({
  name: "Local SEO and Website Pricing for Bathroom Remodelers",
  description: "Published monthly plans and website project pricing for bathroom remodeling companies in Tampa Bay.",
  url: "/pricing/",
  serviceType: ["Local SEO", "Google Business Profile Optimization", "Website Design", "Website Maintenance"],
  offers: [
    { name: "Foundation plan", price: "497" },
    { name: "Growth plan", price: "897" },
    { name: "Full System plan", price: "1497" },
    { name: "Website project", price: "2497" },
    { name: "Maintenance plan", price: "147" },
  ],
});
const faqSchema = buildFaqSchema(PRICING_FAQS);
const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Pricing" }]);

export default function PricingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
        </Container>
        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h1 className="text-display">Straightforward Pricing. No Long Contracts.</h1>
          <p className="text-body-lg mt-4 text-text-secondary">
            Real numbers, published up front, no discovery call required just to hear a price.
          </p>
        </div>
      </Section>

      {/* 2. Why I publish pricing */}
      <Section>
        <div className="mx-auto max-w-narrow text-center">
          <h2 className="text-h2">Why I Show My Prices</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            You quote your jobs. I quote mine. Hiding a price behind a sales call wastes both our time, and
            contractors read it as a trick. Here&apos;s exactly what things start at.
          </p>
        </div>
      </Section>

      {/* 3. Monthly plans */}
      <Section background="surface">
        <h2 className="text-h2 text-center">Monthly Plans</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <PricingTierCard
            name="Foundation"
            price="$497"
            audience="For remodelers just getting their Google presence in order."
            inclusions={[
              "Google Business Profile optimization and management",
              "Review generation system",
              "Basic local SEO (Map Pack fundamentals)",
              "Monthly report",
            ]}
          />
          <PricingTierCard
            name="Growth"
            price="$897"
            audience="The typical fit for an established remodeler ready to compete for rankings."
            featured
            inclusions={[
              "Everything in Foundation",
              "Ongoing local SEO: on-page, citations, content",
              "Competitor tracking",
              "Monthly strategy call",
            ]}
          />
          <PricingTierCard
            name="Full System"
            price="$1,497"
            audience="For remodelers who want the website handled too."
            inclusions={[
              "Everything in Growth",
              "Website updates and maintenance included",
              "Advanced content: blog and service pages",
              "Priority turnaround",
            ]}
          />
        </div>
      </Section>

      {/* 4. Website design pricing */}
      <Section>
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">Websites</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            A custom website build or rebuild starts at <strong className="text-text-primary">$2,497</strong>. The
            price moves up based on site complexity, number of pages, and whether it&apos;s a rebuild or a fresh
            build.
          </p>
          <p className="text-body-lg mt-4 text-text-secondary">
            If you&apos;re not on the Full System plan, maintenance starts at{" "}
            <strong className="text-text-primary">$147 a month</strong>: updates, security, uptime monitoring, and
            small content changes.
          </p>
        </div>
      </Section>

      {/* 5. What affects your price */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">What Affects Your Price</h2>
          <ul className="text-body-lg mt-5 flex flex-col gap-3 text-text-secondary">
            <li>The condition of your current website and Google listing</li>
            <li>How competitive local search is in your service area</li>
            <li>How many service areas you cover</li>
            <li>Your current review volume</li>
            <li>How much needs fixing before we can start building</li>
          </ul>
        </div>
      </Section>

      {/* 6. What's not included */}
      <Section>
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">What&apos;s Not Included</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            Ad spend, third-party tool subscriptions, photography, and anything outside the agreed scope. If it
            comes up, I&apos;ll tell you before it costs you anything.
          </p>
        </div>
      </Section>

      {/* 7. ROI framing */}
      <Section background="brand">
        <div className="mx-auto max-w-narrow text-center">
          <h2 className="text-h2 text-white">What This Is Worth to You</h2>
          <p className="text-body-lg mt-4 text-white/90">
            A single bathroom remodel averages $15,000 or more. The Growth plan runs $897 a month, or $10,764 a
            year. If it helps you close just one extra job a quarter, it has paid for itself more than five times
            over.
          </p>
          <p className="text-body-lg mt-4 font-semibold text-white">
            Think of it as the cheapest lead source you have, not a marketing expense.
          </p>
        </div>
      </Section>

      {/* 8. FAQ */}
      <Section narrow>
        <h2 className="text-h2 text-center">Pricing Questions</h2>
        <div className="mt-10">
          <FaqAccordion items={PRICING_FAQS.map((faq) => ({ question: faq.question, answer: <p>{faq.answer}</p> }))} />
        </div>
      </Section>

      {/* 9. CTA */}
      <CtaBlock heading="Not Sure Which Plan Fits?">
        Start with a free audit. I&apos;ll tell you honestly what you actually need.
      </CtaBlock>
    </>
  );
}
