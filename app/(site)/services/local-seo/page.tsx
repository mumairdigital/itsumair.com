import type { Metadata } from "next";
import Link from "next/link";
import { Star, LayoutTemplate } from "lucide-react";
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
  title: "Local SEO for Bathroom Remodelers | Tampa Bay",
  description:
    "Local SEO built for bathroom remodeling companies in Tampa Bay: Map Pack rankings, citations, and on-page work that turns searches into quote requests.",
  path: "/services/local-seo/",
});

const FAQS = [
  {
    question: "How much does local SEO cost?",
    answer:
      "Local SEO is included starting in the Foundation plan at $497 a month. The exact scope depends on how competitive your service area is and the condition of your current site. Full pricing is published on the pricing page.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Google Business Profile changes can show up within weeks. Ranking for competitive local searches typically takes three to six months. I won't tell you it happens faster than that, anyone who does isn't being straight with you.",
  },
  {
    question: "How is this different from the last agency that took my money?",
    answer:
      "I only work with bathroom remodeling companies, and I build the work myself: the website, the Google listing, the technical fixes. Not just a report telling you what someone else should do.",
  },
  {
    question: "Do you guarantee rankings?",
    answer:
      "No, and anyone who guarantees a specific ranking is not being honest with you. Google doesn't sell guaranteed placement, and no agency controls its algorithm. What I can guarantee is the work: a real audit, real fixes, and a monthly report showing exactly what moved and what didn't.",
  },
  {
    question: "What's the Map Pack and why does it matter?",
    answer:
      "The Map Pack is the block of three local businesses with a map that Google shows above the regular search results for searches like \"bathroom remodeler near me.\" Most homeowners click one of those three and never scroll further, so being in it is worth more than ranking well below it.",
  },
];

const serviceSchema = buildServiceSchema({
  name: "Local SEO for Bathroom Remodeling Companies",
  description:
    "Local SEO service for bathroom remodeling companies, covering Google Business Profile optimization, on-page SEO, citations, and Map Pack rankings.",
  url: "/services/local-seo/",
  serviceType: "Local SEO",
});
const faqSchema = buildFaqSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services/" },
  { name: "Local SEO" },
]);

export default function LocalSeoPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: "Local SEO" }]}
          />
        </Container>
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-display max-w-xl">Local SEO for Bathroom Remodeling Companies</h1>
            <p className="text-body-lg mt-5 max-w-lg text-text-secondary">
              When a Tampa homeowner searches for a bathroom remodeler tonight, this is the work that decides whether
              they find you or your competitor.
            </p>
            <div className="mt-8">
              <Button href="/audit/" size="lg">
                Get My Free Visibility Audit
              </Button>
            </div>
          </div>
          <ResponsiveImage
            src="/images/services/service-local-seo.webp"
            alt="Icon of a map pin with a magnifying glass, representing local SEO and Google Maps search"
            aspect="aspect-square"
            priority
          />
        </div>
      </Section>

      {/* 2. Problem */}
      <Section>
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">Ranking Below Your Competition Costs You Jobs</h2>
          <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
            <p>
              A bathroom remodel isn&apos;t a $50 lead, it&apos;s a job worth $8,000 to $25,000. When your listing
              sits below three competitors for even a month, you&apos;re not losing a little traffic, you&apos;re
              losing jobs worth tens of thousands of dollars to someone else.
            </p>
            <p>
              Most bathroom remodelers treat this as a marketing problem they&apos;ll get to eventually. It isn&apos;t.
              It&apos;s a revenue problem happening right now, every time a homeowner searches and calls the company
              that shows up first instead of the one that does better work.
            </p>
            <p>
              The fix isn&apos;t a single trick. It&apos;s a foundation: an optimized Google listing, a website
              structured around the searches homeowners actually use, real citations, and reviews, built and
              maintained as a system instead of a one-time project.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. What's Included */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">What&apos;s Included</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            Specificity is the selling point here. Not &quot;ongoing optimization,&quot; the actual work.
          </p>
          <div className="mt-8">
            <IncludedList
              items={[
                "Full local search audit",
                "Google Business Profile optimization",
                "Service and location page structure",
                "On-page optimization for buyer-intent terms",
                "Local citation building and NAP consistency",
                "Review generation system setup",
                "Local link building",
                "Schema markup",
                "Monthly reporting in plain English",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 4. Process + 5. Timeline */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">How It Works</h2>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <ProcessStep number={1} title="Audit">
            Week 1. I find exactly what&apos;s broken across your Google listing, website, and technical setup.
          </ProcessStep>
          <ProcessStep number={2} title="Foundation fixes">
            Weeks 2–4. I fix the structural problems: listing accuracy, site structure, technical errors.
          </ProcessStep>
          <ProcessStep number={3} title="Build">
            Months 2–6. Citations, on-page content, local links, and reviews get built out steadily.
          </ProcessStep>
          <ProcessStep number={4} title="Report and refine">
            Ongoing. A plain-English monthly report, and adjustments based on what the data shows.
          </ProcessStep>
        </div>
        <p className="text-body mt-10 text-center text-text-secondary">
          Honest timeline: Google Business Profile changes can show up in weeks. Competitive local rankings typically
          take three to six months. Anyone promising faster isn&apos;t being straight with you.
        </p>
      </Section>

      {/* 6. Proof */}
      <Section background="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">Real Work, Honestly Labeled</h2>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <Card>
            <p className="text-small font-semibold uppercase tracking-wide text-proof-accent">Related work</p>
            <h3 className="text-h4 mt-2">Recovering lost search visibility</h3>
            <p className="text-body mt-2 text-text-secondary">
              A client&apos;s site quietly dropped out of Google&apos;s index after a botched migration. I traced the
              cause, fixed it, and recovered the site&apos;s indexation and rankings, the same diagnostic work behind
              every local SEO audit I run.
            </p>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button href="/results/" variant="secondary">
            See All Case Studies
          </Button>
        </div>
      </Section>

      {/* 7. Who it's for */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-h2 text-center">Who This Is For</h2>
          <div className="mt-8">
            <WhoItsFor
              goodFit={[
                "Established bathroom remodelers in Tampa Bay wanting long-term visibility",
                "Companies ready to invest months, not days, in durable rankings",
                "Owners who want an honest monthly report, not a dashboard of vanity metrics",
              ]}
              notFit={[
                "Anyone wanting guaranteed rankings",
                "Anyone expecting results inside 30 days",
                "Businesses outside the Tampa Bay area",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 8. Pricing signal */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow text-center">
          <h2 className="text-h2">Starts at $497/Month</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            Local SEO is included from the Foundation plan up. See the full breakdown on the{" "}
            <Link href="/pricing/" className="font-semibold text-brand-primary hover:underline">
              pricing page
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* 9. FAQ */}
      <Section narrow>
        <h2 className="text-h2 text-center">Common Questions</h2>
        <div className="mt-10">
          <FaqAccordion items={FAQS.map((faq) => ({ question: faq.question, answer: <p>{faq.answer}</p> }))} />
        </div>
      </Section>

      {/* 10. Related services */}
      <Section background="surface">
        <h2 className="text-h2 text-center">Works Well With</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <ServiceCard icon={Star} name="Google Business Profile" href="/services/google-business-profile/">
            The fastest visible win, and the foundation local SEO builds on.
          </ServiceCard>
          <ServiceCard icon={LayoutTemplate} name="Website Design" href="/services/website-design/">
            A site structured to convert the traffic local SEO sends your way.
          </ServiceCard>
        </div>
      </Section>

      {/* 11. CTA */}
      <CtaBlock heading="Ready to See Where You Rank?">
        Get a free, honest look at your local search visibility. No obligation, no sales pitch.
      </CtaBlock>
    </>
  );
}
