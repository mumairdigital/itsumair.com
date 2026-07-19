import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, LayoutTemplate, FileWarning, Gauge, ShieldOff, HardHat } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { ProblemCard } from "@/components/content/ProblemCard";
import { IncludedList } from "@/components/content/IncludedList";
import { WhoItsFor } from "@/components/content/WhoItsFor";
import { PricingTierCard } from "@/components/content/PricingTierCard";
import { ServiceCard } from "@/components/content/ServiceCard";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import { CtaBlock } from "@/components/content/CtaBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website Maintenance for Remodeling Companies | Tampa Bay",
  description:
    "Website maintenance for Tampa Bay bathroom remodeling companies: updates, security, malware protection, and monthly form testing so leads never go missing.",
  path: "/services/website-maintenance/",
});

const FAQS = [
  {
    question: "What does maintenance actually include?",
    answer:
      "A concrete list, not vague ongoing support: software and plugin updates, security monitoring, malware scanning, daily backups with a tested restore, uptime and speed monitoring, monthly form testing, small content edits, and a monthly report.",
  },
  {
    question: "What happens if my site gets hacked?",
    answer:
      "I've handled this directly, including tracing a client's infection to a malicious database trigger that was silently generating thousands of spam pages. I find the root cause, remove it, rebuild what's needed, and verify the site is clean before handing it back.",
  },
  {
    question: "Do I need maintenance if my site is new?",
    answer:
      "Yes, just as much as an older site. A new site still runs on software that goes stale, and a quote form can silently stop sending on day one just as easily as on day 500. The risk isn't the site's age, it's whether anyone is watching it.",
  },
];

const serviceSchema = buildServiceSchema({
  name: "Website Maintenance for Bathroom Remodeling Companies",
  description:
    "Website maintenance for bathroom remodeling companies: security monitoring, malware protection, backups, uptime monitoring, and monthly form testing.",
  url: "/services/website-maintenance/",
  serviceType: "Website Maintenance",
});
const faqSchema = buildFaqSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services/" },
  { name: "Website Maintenance" },
]);

export default function WebsiteMaintenancePage() {
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
              { label: "Website Maintenance" },
            ]}
          />
        </Container>
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-display max-w-xl">Website Maintenance for Bathroom Remodeling Companies</h1>
            <p className="text-body-lg mt-5 max-w-lg text-text-secondary">
              Your website is a business asset that generates quote requests. Treat it like one, not like something
              you build once and forget.
            </p>
            <div className="mt-8">
              <Button href="/audit/" size="lg">
                Get My Free Visibility Audit
              </Button>
            </div>
          </div>
          <ResponsiveImage
            src="/images/services/service-website-maintenance.webp"
            alt="Icon of a shield with a gear, representing ongoing website security and maintenance"
            aspect="aspect-square"
            priority
          />
        </div>
      </Section>

      {/* 2. Problem */}
      <Section>
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">A Website You Ignore Is a Website That Breaks</h2>
          <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
            <p>
              Plugins go stale. Sites get hacked. Speed quietly decays as software falls behind. And the most
              powerful example: quote forms silently stop sending, and nobody notices until months of leads are
              already gone.
            </p>
            <p>
              Many contractors have lost months of leads to a broken form and never knew, because nothing about a
              broken form looks broken. The page loads fine. The button still says &quot;Submit.&quot; The emails
              just never arrive.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. Real story */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">A Real Malware Case</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            A client&apos;s WordPress site was infected through a malicious database trigger, quietly generating
            thousands of spam pages that Google was indexing under their domain. I traced the infection to its root
            cause inside the database, removed it, rebuilt the affected parts of the site clean, and verified the
            fix held. That&apos;s genuine, rare experience most agencies offering &quot;maintenance&quot; have never
            actually had to use.
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
                "Software, plugin, and dependency updates",
                "Security monitoring and hardening",
                "Malware scanning and removal",
                "Daily backups with tested restore",
                "Uptime monitoring",
                "Speed and Core Web Vitals monitoring",
                "Broken link checks",
                "Form testing (monthly, confirms leads are arriving)",
                "Small content edits",
                "Monthly report",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 5. What it prevents */}
      <Section background="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">What It Prevents</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ProblemCard icon={FileWarning} heading="Lost leads">
            From a broken form nobody noticed until the damage was already done.
          </ProblemCard>
          <ProblemCard icon={Gauge} heading="Ranking loss">
            From speed decay as your software quietly falls behind.
          </ProblemCard>
          <ProblemCard icon={ShieldOff} heading="Reputation damage">
            From a hacked site serving spam or malware to your own visitors.
          </ProblemCard>
          <ProblemCard icon={HardHat} heading="Emergency rebuild costs">
            The kind that cost far more than the maintenance that would have prevented them.
          </ProblemCard>
        </div>
      </Section>

      {/* Who it's for */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-h2 text-center">Who This Is For</h2>
          <div className="mt-8">
            <WhoItsFor
              goodFit={[
                "Any bathroom remodeler whose website generates quote requests",
                "Owners who want to know before a form quietly breaks, not after",
                "Sites currently running on outdated plugins or unmonitored hosting",
              ]}
              notFit={[
                "Static brochure sites with no forms, leads, or business dependency",
                "Businesses outside the Tampa Bay area",
                "Anyone wanting a one-time fix instead of ongoing monitoring",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 6. Plans */}
      <Section background="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">Plans</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            Maintenance starts at $147 a month on its own, or is included at no extra cost inside the Full System
            plan.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-md">
          <PricingTierCard
            name="Maintenance"
            price="$147"
            audience="For any bathroom remodeler with a live website generating leads."
            inclusions={[
              "Updates, security, and malware monitoring",
              "Daily backups with tested restore",
              "Monthly form testing",
              "Monthly report",
            ]}
          />
        </div>
        <p className="text-body mt-6 text-center text-text-secondary">
          See the{" "}
          <Link href="/pricing/" className="font-semibold text-brand-primary hover:underline">
            full pricing page
          </Link>{" "}
          for how this fits with the monthly SEO plans.
        </p>
      </Section>

      {/* 7. FAQ */}
      <Section narrow>
        <h2 className="text-h2 text-center">Common Questions</h2>
        <div className="mt-10">
          <FaqAccordion items={FAQS.map((faq) => ({ question: faq.question, answer: <p>{faq.answer}</p> }))} />
        </div>
      </Section>

      {/* 8. Related services */}
      <Section background="surface">
        <h2 className="text-h2 text-center">Works Well With</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <ServiceCard icon={LayoutTemplate} name="Website Design" href="/services/website-design/">
            The site worth protecting once it&apos;s built to convert.
          </ServiceCard>
          <ServiceCard icon={MapPin} name="Local SEO" href="/services/local-seo/">
            Rankings a hacked or slow site can quietly undo.
          </ServiceCard>
        </div>
      </Section>

      {/* 9. CTA */}
      <CtaBlock heading="Is Your Website Actually Being Watched?">
        Get a free, honest look at your site&apos;s health. No obligation, no sales pitch.
      </CtaBlock>
    </>
  );
}
