import type { Metadata } from "next";
import { ShieldAlert, SearchCheck, Hammer } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { CtaBlock } from "@/components/content/CtaBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Umair | Local SEO for Bathroom Remodelers",
  description:
    "Umair is a Tampa Bay local SEO specialist who came from the tile and bathroom showroom world. Meet the person behind the search systems.",
  path: "/about/",
});

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About" }]);

const BACKGROUND_ITEMS = [
  {
    icon: ShieldAlert,
    title: "Malware remediation",
    text: "Traced a client's WordPress infection to a malicious database trigger, removed it, and rebuilt the site clean.",
  },
  {
    icon: SearchCheck,
    title: "Indexation recovery",
    text: "Recovered a site's search indexation after a botched migration had quietly dropped it from Google.",
  },
  {
    icon: Hammer,
    title: "Full site rebuilds",
    text: "Rebuilt multiple sites from the ground up on modern frameworks after inheriting broken, unmaintainable WordPress builds.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        </Container>
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <ResponsiveImage
            src="/images/personal/umair-headshot-brand-purple.webp"
            alt="Headshot of Muhammad Umair"
            aspect="aspect-square"
            className="mx-auto w-full max-w-xs"
            priority
          />
          <div>
            <h1 className="text-display">I&apos;m Umair. I Build Search Systems for Bathroom Remodelers.</h1>
            <p className="text-body-lg mt-5 max-w-xl text-text-secondary">
              A local SEO and website specialist who works with exactly one type of business, in exactly one market.
            </p>
          </div>
        </div>
      </Section>

      {/* 2. Why bathrooms */}
      <Section>
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">Why I Only Work With Bathroom Remodelers</h2>
          <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
            <p>
              Before I built websites and search systems, I worked inside the tile and bathroom showroom world. I
              built the product taxonomy for a tile and bathroom e-commerce platform, a tile calculator that helped
              customers estimate real jobs, and the showroom&apos;s entire online buying experience.
            </p>
            <p>
              That means I don&apos;t just know keywords. I know tile finishes, layouts, and fixtures, the same
              vocabulary your customers and your crew use every day.
            </p>
            <p>
              When I write a page about a walk-in shower conversion or set up your Google Business Profile
              categories, I&apos;m not guessing at your business from the outside. I&apos;ve built the systems that
              sell it before.
            </p>
            <p className="font-semibold text-text-primary">
              No generalist agency can copy that. It&apos;s the reason I picked this niche, and I&apos;m not
              diluting it by working with anyone else.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-narrow">
          <ImagePlaceholder label="Photo from Umair's tile and bathroom showroom project work" aspect="aspect-video" />
        </div>
      </Section>

      {/* 3. How I work */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">How I Work</h2>
          <ul className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
            <li>
              <span className="font-semibold text-text-primary">You work directly with me.</span> No account
              managers, no hand-offs to someone you&apos;ve never met.
            </li>
            <li>
              <span className="font-semibold text-text-primary">I build and fix the system myself:</span> the
              website, the Google listing, the technical problems. I don&apos;t just hand you a report and disappear.
            </li>
            <li>
              <span className="font-semibold text-text-primary">Reporting is plain English.</span> If I can&apos;t
              explain what I did and why in a sentence you&apos;d use on a job site, I rewrite it.
            </li>
          </ul>
        </div>
      </Section>

      {/* 4. What I believe */}
      <Section>
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">What I Believe</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-h4">Truth over theatre</h3>
              <p className="text-body mt-2 text-text-secondary">
                I&apos;d rather tell you a result is small and real than promise something big and fake. I&apos;ve
                pulled fabricated testimonials off past projects and replaced them with real ones. That&apos;s not
                going to change.
              </p>
            </div>
            <div>
              <h3 className="text-h4">Systems over quick wins</h3>
              <p className="text-body mt-2 text-text-secondary">
                A ranking that disappears in three months isn&apos;t a win. I build the reviews, technical health,
                and local signals underneath so results hold.
              </p>
            </div>
            <div>
              <h3 className="text-h4">Fix the root cause</h3>
              <p className="text-body mt-2 text-text-secondary">
                If your site is slow because of bad hosting, I fix the hosting. I don&apos;t paper over a problem
                with a workaround that breaks again in six months.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Background and credentials */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">Background</h2>
          <p className="text-body-lg mt-4 text-text-secondary">Some of the technical work behind the marketing:</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {BACKGROUND_ITEMS.map((item) => (
              <div key={item.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-primary-light text-brand-primary">
                  <item.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="text-h4 mt-4">{item.title}</h3>
                <p className="text-body mt-2 text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-body mt-8 text-text-secondary">
            I build on modern tools like Next.js and diagnose problems with Google Search Console and Google
            Business Profile Insights, the same systems your rankings actually live in.
          </p>
          <ResponsiveImage
            src="/images/personal/umair-working-laptop.webp"
            alt="Muhammad Umair working at his laptop"
            aspect="aspect-[1023/1537]"
            className="mx-auto mt-8 w-full max-w-[240px]"
          />
        </div>
      </Section>

      {/* 6. Overseas */}
      <Section>
        <div className="mx-auto max-w-narrow">
          <h2 className="text-h2">Working With Me From Overseas</h2>
          <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
            <p>
              I&apos;m based in Islamabad, Pakistan, and I work with bathroom remodeling companies across Tampa Bay
              every day.
            </p>
            <p>
              Here&apos;s how it works in practice: we talk over WhatsApp, email, or a scheduled call in Eastern
              Time, whichever is easiest for you. I reply within one business day, usually faster.
            </p>
            <p>
              Local SEO work happens inside Google&apos;s systems, not inside a specific office. It&apos;s executed
              remotely by agencies everywhere, including ones based in Tampa. The difference with me isn&apos;t
              geography. It&apos;s that I specialize in one type of business instead of every type, and I do the
              work myself instead of routing it through a team.
            </p>
            <p className="font-semibold text-text-primary">
              I&apos;d rather answer this directly than have you wonder about it and never ask.
            </p>
          </div>
        </div>
      </Section>

      {/* 7. Personal note */}
      <Section background="surface">
        <div className="mx-auto max-w-narrow">
          <p className="text-body-lg text-text-secondary">
            Outside of work, I&apos;m still the person who used to help customers figure out which tile pattern
            would actually work in their space. That instinct, understanding what someone needs before they can put
            it into words, is what I bring to your marketing now.
          </p>
        </div>
      </Section>

      {/* 8. CTA */}
      <CtaBlock heading="Ready to See Where You Stand?">
        Get a free, honest look at your Google visibility. No obligation, no sales pitch.
      </CtaBlock>
    </>
  );
}
