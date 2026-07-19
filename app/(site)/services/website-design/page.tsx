import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, MapPin, Images, Smartphone, MousePointerClick, DollarSign } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { ProblemCard } from "@/components/content/ProblemCard";
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
  title: "Bathroom Remodeler Website Design | Tampa Bay",
  description:
    "Fast, mobile-first websites for Tampa Bay bathroom remodeling companies, built to turn visitors into quote requests, not just look good.",
  path: "/services/website-design/",
});

const FAQS = [
  {
    question: "I already have a website. Do I need a new one?",
    answer:
      "Not necessarily. If the bones are solid, slow load times, a buried phone number, or a weak gallery can often be fixed without a full rebuild. I'll tell you honestly which one your site needs. Recommending against a full rebuild when you don't need one is part of the job.",
  },
  {
    question: "Do I own the website?",
    answer:
      "Yes. The domain, the code, and the hosting are all yours. If we ever part ways, you keep everything I built, no held-hostage assets.",
  },
  {
    question: "Can I edit it myself?",
    answer:
      "The site is built on modern, fast code rather than a bloated page builder, which is part of what makes it quick to load. That means larger structural changes go through me, but small edits, like updated photos or price tweaks, are covered under the maintenance plan, so you're never stuck waiting weeks for a one-line change.",
  },
  {
    question: "How long does a website take?",
    answer:
      "A typical build runs four to six weeks: discovery and content gathering in week one, design in weeks two and three, build and testing in weeks four and five, and launch in week six. Larger sites with more service and location pages take longer.",
  },
];

const serviceSchema = buildServiceSchema({
  name: "Website Design for Bathroom Remodeling Companies",
  description:
    "Custom, mobile-first website design for bathroom remodeling companies, built to convert visitors into quote requests with SEO structure built in.",
  url: "/services/website-design/",
  serviceType: "Website Design",
});
const faqSchema = buildFaqSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services/" },
  { name: "Website Design" },
]);

export default function WebsiteDesignPage() {
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
              { label: "Website Design" },
            ]}
          />
        </Container>
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-display max-w-xl">Websites for Bathroom Remodeling Companies That Actually Get Calls</h1>
            <p className="text-body-lg mt-5 max-w-lg text-text-secondary">
              Fast, mobile, and built to turn visitors into quote requests, not just look good sitting there.
            </p>
            <div className="mt-8">
              <Button href="/audit/" size="lg">
                Get My Free Visibility Audit
              </Button>
            </div>
          </div>
          <ResponsiveImage
            src="/images/services/service-website-design.webp"
            alt="Icon of a browser window with a page layout, representing custom website design"
            aspect="aspect-square"
            priority
          />
        </div>
      </Section>

      {/* 2. Problem */}
      <Section>
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">You Sell Beautiful Bathrooms From an Ugly Website</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            You run a visual, high-trust business, and most remodeler websites represent it with a slow, dated site
            that undersells the work. The specific failures show up the same way every time:
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            "Heavy, unoptimized photos that take forever to load on a phone",
            "A phone number buried three clicks deep",
            "No financing information anywhere on the site",
            "Weak, unorganized before/after galleries",
            "No trust signals, like reviews or licensing, above the fold",
          ].map((failure) => (
            <p key={failure} className="text-body text-text-secondary">
              — {failure}
            </p>
          ))}
        </div>
      </Section>

      {/* 3. What makes a remodeler website convert */}
      <Section background="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">What Makes a Remodeler Website Convert</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProblemCard icon={Images} heading="Before/after galleries done right">
            Organized by project type, fast to load, and easy to browse on a phone.
          </ProblemCard>
          <ProblemCard icon={Smartphone} heading="Fast on mobile">
            Your customers browse on their phones. A site that loads slow loses them before they see your work.
          </ProblemCard>
          <ProblemCard icon={MousePointerClick} heading="A clear quote path">
            One obvious next step from any page, not a maze before someone can reach you.
          </ProblemCard>
          <ProblemCard icon={DollarSign} heading="Financing visibility">
            A $15,000 project feels different when financing is visible up front, not hidden behind a phone call.
          </ProblemCard>
          <ProblemCard icon={ShieldCheck} heading="Trust signals above the fold">
            Reviews and credibility markers where a homeowner sees them in the first three seconds.
          </ProblemCard>
          <ProblemCard icon={MapPin} heading="SEO structure built in">
            Service and location pages structured to support the search rankings that bring the traffic in the
            first place.
          </ProblemCard>
        </div>
      </Section>

      {/* 4. What's Included */}
      <Section>
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">What&apos;s Included</h2>
          <div className="mt-8">
            <IncludedList
              items={[
                "Custom design on brand",
                "Mobile-first build",
                "Conversion-focused layout and CTA structure",
                "Before/after gallery system",
                "Quote request flow",
                "Service and location page architecture",
                "On-page SEO built in",
                "Schema markup",
                "Speed and Core Web Vitals optimization",
                "Analytics and conversion tracking",
                "Training on how to use it",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 5. The showroom advantage */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">I Come From the Bathroom Product World</h2>
          <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
            <p>
              Before building websites, I built the product taxonomy, tile calculator, and e-commerce experience for a
              tile and bathroom showroom. I know tile finishes, layouts, and fixtures, the same vocabulary your
              customers use when they&apos;re deciding whether to call you.
            </p>
            <p>
              That&apos;s the differentiator no generalist agency can copy. When I organize your gallery by project
              type or write a quote form that asks the right questions, I&apos;m working from the product world your
              business actually lives in, not guessing at it from the outside.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-narrow">
          <ImagePlaceholder label="Screenshot from Umair's tile and bathroom showroom e-commerce project" aspect="aspect-video" />
        </div>
      </Section>

      {/* 6. Process */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">How It Works</h2>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <ProcessStep number={1} title="Discovery">
            Week 1. Content, photos, and goals gathered so the design fits your business, not a template.
          </ProcessStep>
          <ProcessStep number={2} title="Design">
            Weeks 2–3. A custom layout built around your galleries, your service areas, and your quote path.
          </ProcessStep>
          <ProcessStep number={3} title="Build">
            Weeks 4–5. The site is built, tested on real phones, and checked against Core Web Vitals.
          </ProcessStep>
          <ProcessStep number={4} title="Launch">
            Week 6. Site goes live, analytics are wired up, and you get a walkthrough of how to use it.
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
              showroom, the strongest visual proof I have in this exact product world while I build out bathroom
              remodeler before/after case studies.
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
                "Remodelers whose current site loads slow or looks dated on a phone",
                "Companies with strong before/after work that a weak gallery is hiding",
                "Owners who want a site built to support SEO, not fight it",
              ]}
              notFit={[
                "Anyone wanting a rebuild when a smaller fix would do the job",
                "Businesses outside the Tampa Bay area",
                "Anyone expecting a finished site in under two weeks",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 9. Pricing signal */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow text-center">
          <h2 className="text-h2">Projects Start at $2,497</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            The price moves up based on complexity, page count, and whether it&apos;s a rebuild or a fresh build. Full
            breakdown on the{" "}
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
          <ServiceCard icon={ShieldCheck} name="Website Maintenance" href="/services/website-maintenance/">
            Keep the new site fast, secure, and up to date after launch.
          </ServiceCard>
          <ServiceCard icon={MapPin} name="Local SEO" href="/services/local-seo/">
            Turn the site&apos;s SEO structure into actual Map Pack rankings.
          </ServiceCard>
        </div>
      </Section>

      {/* 12. CTA */}
      <CtaBlock heading="Ready for a Website That Gets Calls?">
        Get a free, honest look at what your current site is costing you. No obligation, no sales pitch.
      </CtaBlock>
    </>
  );
}
