import type { Metadata } from "next";
import Link from "next/link";
import { MapPinOff, Repeat, TrendingDown, MapPin, Star, LayoutTemplate, ShieldCheck } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { SvgGraphic } from "@/components/media/SvgGraphic";
import { ProblemCard } from "@/components/content/ProblemCard";
import { ProcessStep } from "@/components/content/ProcessStep";
import { ServiceCard } from "@/components/content/ServiceCard";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { AREA_LINKS, CONTACT_EMAIL } from "@/lib/nav";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Local SEO for Bathroom Remodelers | Tampa Bay",
  description:
    "Free local SEO audit for Tampa Bay bathroom remodeling companies. I fix your Google listing, website, and search visibility myself.",
  path: "/",
});

// Plain-text mirror of the visible FAQ below, for FAQPage schema (question text must match exactly).
const faqSchema = buildFaqSchema([
  {
    question: "How much does this cost?",
    answer:
      "Monthly plans start at $497 a month, and website builds start at $2,497. Every price is \"starting at\" because the real number depends on your site's condition and how competitive your area is. Full pricing is on the pricing page.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Google Business Profile improvements often show up in a few weeks. Ranking higher for competitive local searches usually takes three to six months. I won't tell you it happens faster than that. Anyone promising overnight rankings isn't being straight with you.",
  },
  {
    question: "Do I have to sign a long contract?",
    answer: "No. There are no long-term contracts. Everything runs month to month, and you can cancel anytime.",
  },
  {
    question: "How is this different from the last agency that took my money?",
    answer:
      "Most agencies work with every kind of business and understand none of them deeply. I only work with bathroom remodeling companies, and I build the work myself: website, Google listing, technical fixes. Not just a report telling you what someone else should do.",
  },
  {
    question: "You're not based in Tampa. How does that work?",
    answer:
      "I'm based in Islamabad and work with bathroom remodeling companies across Tampa Bay every day. We talk over WhatsApp, email, or a scheduled call in Eastern Time, whatever's easiest for you. Local SEO work happens inside Google's systems, not in a specific office, so it is executed remotely by agencies everywhere, including ones based in Tampa. The only difference is I specialize in one type of business instead of every type.",
  },
  {
    question: "Do I own the website?",
    answer: "Yes. The domain, the code, and the hosting are yours. If we ever part ways, you keep everything I built.",
  },
]);

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-display max-w-xl">Local SEO for Bathroom Remodeling Companies in Tampa Bay</h1>
            <p className="text-body-lg mt-5 max-w-lg text-text-secondary">
              I help bathroom remodelers get found by homeowners ready to buy, by fixing the website, the Google
              listing, and the local search system underneath.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/audit/" size="lg">
                Get My Free Visibility Audit
              </Button>
              <Button href="/results/" variant="ghost" size="lg">
                See Results
              </Button>
            </div>
            <p className="text-small mt-4 text-text-secondary">Free. No obligation. 24-hour turnaround.</p>
          </div>
          <ResponsiveImage
            src="/images/homepage/hero-graphic.webp"
            alt="Stylized graphic of a map pin and a rising bar chart, representing a bathroom remodeler's Google Maps ranking climbing"
            aspect="aspect-[4/3]"
            priority
          />
        </div>
      </Section>

      {/* 3. Problem */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">You&apos;re Great at Bathrooms. But Are Homeowners Finding You?</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            You do great work. But if a homeowner searches for a remodeler tonight and your competitor shows up
            first, that job goes to them instead of you.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProblemCard icon={MapPinOff} heading="You're invisible on Google Maps">
            Homeowners searching for a remodeler right now see your competitor first, not you.
          </ProblemCard>
          <ProblemCard icon={Repeat} heading="You're renting leads">
            Angi and HomeAdvisor sell the same lead to three other companies. You race them to the phone.
          </ProblemCard>
          <ProblemCard icon={TrendingDown} heading="Your website doesn't sell">
            Traffic shows up in your analytics. The phone still doesn&apos;t ring.
          </ProblemCard>
        </div>
      </Section>

      {/* 4. Solution / process */}
      <Section background="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">How I Get Bathroom Remodelers Into the Map Pack</h2>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <ProcessStep number={1} title="Audit">
            I find exactly what&apos;s broken: your Google listing, your website, your technical setup.
          </ProcessStep>
          <ProcessStep number={2} title="Fix">
            I fix the website, the Google Business Profile, and the technical problems myself.
          </ProcessStep>
          <ProcessStep number={3} title="Build">
            I build reviews, local content, and the search signals that move you up the Map Pack.
          </ProcessStep>
          <ProcessStep number={4} title="Report">
            You get a plain-English monthly report. No jargon, no dashboards you need a translator for.
          </ProcessStep>
        </div>
        <div className="mt-10 text-center">
          <Button href="/audit/">Get My Free Visibility Audit</Button>
        </div>
      </Section>

      {/* 5. Services */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">What I Do</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={MapPin} name="Local SEO" href="/services/local-seo/">
            Get your bathroom remodeling company into the Map Pack for the searches that turn into jobs.
          </ServiceCard>
          <ServiceCard icon={Star} name="Google Business Profile" href="/services/google-business-profile/">
            A complete, optimized listing with a system for real reviews, not gimmicks.
          </ServiceCard>
          <ServiceCard icon={LayoutTemplate} name="Website Design" href="/services/website-design/">
            A website built to turn visitors into calls, not just look good.
          </ServiceCard>
          <ServiceCard icon={ShieldCheck} name="Website Maintenance" href="/services/website-maintenance/">
            Keep your site fast, secure, and up to date, without lifting a finger.
          </ServiceCard>
        </div>
      </Section>

      {/* 6. Proof */}
      <Section background="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">Real Work, Honestly Labeled</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            I don&apos;t have a wall of Tampa bathroom-remodeler case studies yet. Here&apos;s the real, related
            work I have done, described plainly instead of dressed up.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Card>
            <p className="text-small font-semibold uppercase tracking-wide text-proof-accent">Related work</p>
            <h3 className="text-h4 mt-2">Full site rebuild and malware recovery</h3>
            <p className="text-body mt-2 text-text-secondary">
              A client&apos;s WordPress site was hacked through a database trigger. I traced the infection, rebuilt
              the site clean, and recovered its search rankings.
            </p>
          </Card>
          <Card>
            <p className="text-small font-semibold uppercase tracking-wide text-proof-accent">Related work</p>
            <h3 className="text-h4 mt-2">Tile and bathroom showroom platform</h3>
            <p className="text-body mt-2 text-text-secondary">
              Built the product taxonomy, tile calculator, and e-commerce experience for a bathroom and tile
              showroom, the same product world Tampa remodelers work in every day.
            </p>
          </Card>
        </div>
        <div className="mt-10 text-center">
          <Button href="/results/" variant="secondary">
            See All Case Studies
          </Button>
        </div>
      </Section>

      {/* 7. Why specialist */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h2">Why I Only Work With Bathroom Remodelers</h2>
            <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
              <p>
                Most agencies work with every kind of local business and understand none of them deeply. I made a
                different bet: one type of business, one market, done properly.
              </p>
              <p>
                Before this, I came from the tile and bathroom showroom world. I built product taxonomies, a tile
                calculator, and showroom e-commerce for that industry.
              </p>
              <p className="font-semibold text-text-primary">
                That means I understand the product, not just the marketing. I can talk tile, layouts, fixtures, and
                finishes with you like a peer, not a vendor reading off a script.
              </p>
            </div>
          </div>
          <SvgGraphic
            src="/images/homepage/showroom-expertise.svg"
            alt="Graphic of a tile swatch grid next to a calculator, representing tile and bathroom showroom product expertise"
            aspect="aspect-[4/3]"
          />
        </div>
      </Section>

      {/* 8. Founder */}
      <Section background="surface">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <ResponsiveImage
            src="/images/personal/umair-headshot-brand-purple.webp"
            alt="Headshot of Muhammad Umair"
            aspect="aspect-square"
            className="mx-auto w-full max-w-xs"
          />
          <div>
            <h2 className="text-h2">Hi, I&apos;m Umair</h2>
            <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
              <p>
                I&apos;m a local SEO and website specialist. I work with one type of business: bathroom remodeling
                companies in Tampa Bay.
              </p>
              <p>
                I don&apos;t hand your work off to a team of account managers. When you work with me, you talk to
                me, and I&apos;m the one doing the work.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/about/" variant="secondary">
                More About Me
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 10. Service areas */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">Serving Bathroom Remodelers Across Tampa Bay</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            I work with bathroom remodeling companies across the Tampa Bay area, including these markets.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREA_LINKS.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="rounded-lg border border-border bg-surface p-5 text-center text-body font-semibold text-text-primary transition-colors hover:border-brand-primary hover:text-brand-primary"
            >
              {area.label}
            </Link>
          ))}
        </div>
      </Section>

      {/* 11. FAQ */}
      <Section background="surface" narrow>
        <div className="text-center">
          <h2 className="text-h2">Questions Remodelers Ask Me</h2>
        </div>
        <div className="mt-10">
          <FaqAccordion
            items={[
              {
                question: "How much does this cost?",
                answer: (
                  <p>
                    Monthly plans start at $497 a month, and website builds start at $2,497. Every price is
                    &quot;starting at&quot; because the real number depends on your site&apos;s condition and how
                    competitive your area is. Full pricing is on the{" "}
                    <Link href="/pricing/" className="font-semibold text-brand-primary hover:underline">
                      pricing page
                    </Link>
                    .
                  </p>
                ),
              },
              {
                question: "How long until I see results?",
                answer: (
                  <p>
                    Google Business Profile improvements often show up in a few weeks. Ranking higher for
                    competitive local searches usually takes three to six months. I won&apos;t tell you it happens
                    faster than that. Anyone promising overnight rankings isn&apos;t being straight with you.
                  </p>
                ),
              },
              {
                question: "Do I have to sign a long contract?",
                answer: <p>No. There are no long-term contracts. Everything runs month to month, and you can cancel anytime.</p>,
              },
              {
                question: "How is this different from the last agency that took my money?",
                answer: (
                  <p>
                    Most agencies work with every kind of business and understand none of them deeply. I only work
                    with bathroom remodeling companies, and I build the work myself: website, Google listing,
                    technical fixes. Not just a report telling you what someone else should do.
                  </p>
                ),
              },
              {
                question: "You're not based in Tampa. How does that work?",
                answer: (
                  <p>
                    I&apos;m based in Islamabad and work with bathroom remodeling companies across Tampa Bay every
                    day. We talk over WhatsApp, email, or a scheduled call in Eastern Time, whatever&apos;s easiest
                    for you. Local SEO work happens inside Google&apos;s systems, not in a specific office, so it is
                    executed remotely by agencies everywhere, including ones based in Tampa. The only difference is I
                    specialize in one type of business instead of every type.
                  </p>
                ),
              },
              {
                question: "Do I own the website?",
                answer: <p>Yes. The domain, the code, and the hosting are yours. If we ever part ways, you keep everything I built.</p>,
              },
            ]}
          />
        </div>
      </Section>

      {/* 12. Final CTA */}
      <Section background="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 text-white">Let&apos;s Find Out Why Homeowners Aren&apos;t Calling You</h2>
          <p className="text-body-lg mt-4 text-white/90">
            Get a free, honest look at your Google visibility. No obligation, no sales pitch, just the numbers.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/audit/" size="lg" variant="secondary" className="bg-white text-brand-primary hover:bg-white/90">
              Get My Free Visibility Audit
            </Button>
          </div>
          <div className="mt-6 flex flex-col items-center gap-2 text-body text-white/90 sm:flex-row sm:justify-center sm:gap-6">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
              Message on WhatsApp
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold hover:underline">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
