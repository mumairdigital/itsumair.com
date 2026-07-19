import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { CtaBlock } from "@/components/content/CtaBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const TITLE = "How to Market a Bathroom Remodeling Business: The Complete Guide";
const DESCRIPTION =
  "A complete, honest guide to marketing a bathroom remodeling company: Google Business Profile, reviews, your website, local SEO, lead sources compared, and the aging-in-place opportunity, written for owners in Tampa Bay.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/bathroom-remodeler-marketing/",
});

const TOC = [
  { id: "understanding-how-homeowners-find-you", label: "1. How Homeowners Find You" },
  { id: "google-business-profile", label: "2. Google Business Profile" },
  { id: "reviews", label: "3. Reviews" },
  { id: "your-website", label: "4. Your Website" },
  { id: "local-seo", label: "5. Local SEO" },
  { id: "lead-sources-compared", label: "6. Lead Sources Compared" },
  { id: "aging-in-place", label: "7. The Aging-in-Place Opportunity" },
  { id: "measuring-what-works", label: "8. Measuring What Works" },
];

const LEAD_SOURCES = [
  {
    source: "Shared lead marketplaces",
    cost: "$50–$300+ per shared lead, sold to 3–4 competitors at once",
    pros: "Fast to start, no website or SEO required",
    cons: "You're racing other companies to the phone on every single lead, and you own nothing when you stop paying",
  },
  {
    source: "Google Ads & Local Services Ads",
    cost: "$30–$100+ per click depending on your market",
    pros: "Immediate visibility, good for testing offers and messaging",
    cons: "Traffic stops the moment you stop paying. Rented visibility, not an owned asset",
  },
  {
    source: "Organic search & Map Pack",
    cost: "Time and consistent work, compounding over months",
    pros: "Builds an asset you own, keeps producing leads without an ongoing per-click cost",
    cons: "Slower to start, typically three to six months to see competitive rankings",
  },
  {
    source: "Referrals",
    cost: "Effectively free, but unpredictable",
    pros: "Highest trust, often the easiest close",
    cons: "You can't control volume or timing, so it can't be your only source",
  },
];

const articleSchema = buildArticleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  url: "/bathroom-remodeler-marketing/",
  datePublished: "2026-07-18",
});
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Bathroom Remodeler Marketing" },
]);

export default function BathroomRemodelerMarketingPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Bathroom Remodeler Marketing" }]} />
        </Container>
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-display max-w-xl">
              How to Market a Bathroom Remodeling Business: The Complete Guide
            </h1>
            <p className="text-body-lg mt-5 max-w-lg text-text-secondary">
              Everything a bathroom remodeling company owner needs to know about getting found, trusted, and called,
              written plainly, whether or not you ever hire me.
            </p>
          </div>
          <ResponsiveImage
            src="/images/homepage/hero-graphic.webp"
            alt="Stylized graphic of a map pin and a rising bar chart, representing a bathroom remodeler's Google Maps ranking climbing"
            aspect="aspect-[4/3]"
            priority
          />
        </div>
      </Section>

      {/* Intro + TOC */}
      <Section narrow>
        <div className="flex flex-col gap-4 text-body-lg text-text-secondary">
          <p>
            This guide is for bathroom remodeling company owners, not marketers. If you&apos;ve ever paid an agency
            for &quot;SEO&quot; and gotten a PDF full of jargon back, this is the opposite of that.
          </p>
          <p>
            You&apos;ll get a straight explanation of how homeowners actually find and choose a remodeler in 2026,
            what Google Business Profile, reviews, your website, and local SEO each do for you, an honest comparison
            of every lead source available to you, and a real look at a demand shift most competitors are ignoring.
          </p>
          <p>
            Most marketing advice fails contractors because it&apos;s written for e-commerce or SaaS companies with a
            five-minute buying decision. A bathroom remodel is an $8,000–$25,000 purchase a homeowner researches for
            weeks before calling anyone. Everything below is written for that reality.
          </p>
        </div>

        <Card className="mt-10">
          <p className="text-small font-semibold uppercase tracking-wide text-text-secondary">On this page</p>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2">
            {TOC.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-body font-semibold text-brand-primary hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </Card>
      </Section>

      {/* Part 1 */}
      <Section id="understanding-how-homeowners-find-you" background="surface" narrow>
        <h2 className="text-h2">1. Understanding How Homeowners Find You</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          <p>
            A bathroom remodel is a considered purchase. Unlike an emergency trade, nobody wakes up needing one
            fixed in an hour. Homeowners spend weeks, sometimes months, researching before they call a single
            company. That changes where and how they search.
          </p>
          <p>
            The journey usually starts broad: &quot;bathroom remodel ideas,&quot; walk-in shower photos, cost
            calculators. It narrows over time into local, buyer-intent searches: &quot;bathroom remodeler near
            me,&quot; &quot;walk-in shower installation [city].&quot; By the time someone searches that second kind
            of term, they&apos;re close to calling, which is exactly why showing up for it matters more than almost
            anything else you can do.
          </p>
          <p>
            Most of that late-stage searching happens on a phone, and most of it lands on Google Maps before it
            lands on a website. That&apos;s why the Map Pack, the block of three local results with a map, matters
            more than traditional blue-link rankings for this business. Homeowners click one of those three and
            rarely scroll further.
          </p>
          <p>
            And because the purchase is high-trust and high-ticket, the whole process moves slower and requires more
            proof than lower-trust categories. A homeowner comparing bathroom remodelers is doing the local
            equivalent of comparing contractors for a kitchen renovation, not ordering a pizza. Reviews, photos, and
            a credible website carry more weight here than they would for a $50 purchase.
          </p>
        </div>
      </Section>

      {/* Part 2 */}
      <Section id="google-business-profile" narrow>
        <h2 className="text-h2">2. Google Business Profile</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          <p>
            Google Business Profile is the single highest-leverage asset a bathroom remodeler has, and it&apos;s free.
            It&apos;s what shows up in the Map Pack, it&apos;s often the first thing a homeowner sees, and unlike a
            website, changes to it can show visible movement within weeks instead of months.
          </p>
          <p>
            <strong className="text-text-primary">Categories</strong> decide which searches you&apos;re even eligible
            to show up for. A remodeler listed only under a generic &quot;contractor&quot; category is invisible for
            searches specific to bathroom work. Primary and secondary categories both matter.
          </p>
          <p>
            <strong className="text-text-primary">Services and attributes</strong> tell Google, and homeowners,
            exactly what you do: walk-in shower conversions, full gut remodels, tub-to-shower conversions,
            accessibility work. Vague listings rank for vague searches.
          </p>
          <p>
            <strong className="text-text-primary">Photos</strong> need a strategy, not a one-time upload. Geo-tagged,
            correctly named, and posted on a regular cadence, they signal an active business and give homeowners the
            visual proof this category depends on.
          </p>
          <p>
            <strong className="text-text-primary">Posts</strong> are underused. Weekly posts, a recent project, a
            seasonal offer, keep the profile looking active and give Google fresh content to index.
          </p>
          <p>
            <strong className="text-text-primary">Q&amp;A</strong> is public and editable by anyone, including
            competitors seeding bad-faith questions. Seed it yourself with the real questions homeowners ask, and
            monitor it.
          </p>
          <p>
            <strong className="text-text-primary">The most common mistake</strong> is treating this as a one-time
            setup task instead of an ongoing asset. A profile claimed once in 2022 and never touched since is losing
            ground to competitors actively maintaining theirs every week.
          </p>
        </div>
        <div className="mt-8">
          <Button href="/services/google-business-profile/" variant="secondary">
            See the Google Business Profile Service
          </Button>
        </div>
      </Section>

      <CtaBlock heading="Want Your Google Profile Looked At?">
        Get a free, honest audit of your current Google Business Profile. No obligation.
      </CtaBlock>

      {/* Part 3 */}
      <Section id="reviews" background="surface" narrow>
        <h2 className="text-h2">3. Reviews</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          <p>
            Recency beats volume. A profile with 40 reviews collected steadily over the last six months will
            outperform a competitor with 200 reviews that stopped coming in three years ago. Google&apos;s local
            algorithm weighs recent activity, and homeowners scrolling reviews notice the dates too.
          </p>
          <p>
            How many do you need to compete? Enough to match or beat the top three Map Pack results in your specific
            area, which varies by market. Check what your actual competitors show, not an industry-wide average.
          </p>
          <p>
            Asking without being awkward comes down to timing and simplicity: ask right after the final walkthrough,
            while satisfaction is highest, with a direct link that takes one click. A generic &quot;please review
            us&quot; email sent three weeks later gets ignored.
          </p>
          <p>
            Responding to reviews, including bad ones, matters as much as collecting them. A calm, specific,
            non-defensive response to a negative review often reads better to future customers than the review
            itself. Ignoring it reads as confirmation.
          </p>
          <p className="font-semibold text-text-primary">
            What to never do: buy reviews, incentivize them with discounts, or write fake ones. Google actively
            detects and penalizes this, and it damages the trust this entire purchase category depends on. It is not
            worth the risk, and it is not honest work.
          </p>
        </div>
      </Section>

      {/* Part 4 */}
      <Section id="your-website" narrow>
        <h2 className="text-h2">4. Your Website</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          <p>
            A converting remodeler website does a small number of things well, rather than a large number of things
            poorly. The most important is speed and mobile behavior: your customers browse on their phones, and a
            slow-loading gallery loses them before they see a single project.
          </p>
          <p>
            <strong className="text-text-primary">Before/after galleries</strong> are your strongest sales tool, and
            most sites waste them: unoptimized images, no organization by project type, no captions explaining what
            changed. Organized, fast-loading galleries do more selling than any page of copy.
          </p>
          <p>
            <strong className="text-text-primary">The quote path</strong> should be one obvious next step from any
            page on the site, not a maze. Every extra click between interest and contact loses homeowners who were
            ready to reach out.
          </p>
          <p>
            <strong className="text-text-primary">Financing</strong> visibility changes how a $15,000–$25,000 project
            feels. Showing financing options up front, rather than hiding them behind a phone call, removes a real
            psychological barrier for homeowners who assume they can&apos;t afford the work.
          </p>
          <p>
            <strong className="text-text-primary">Trust signals</strong>, reviews, licensing, years in business, need
            to appear above the fold, not three scrolls down. Homeowners decide whether to keep reading in the first
            few seconds.
          </p>
          <p>
            The most common failures repeat across this industry: heavy unoptimized photos, a phone number buried
            deep in the navigation, no financing information anywhere, weak galleries, and no trust signals visible
            immediately. Fixing these five things alone moves the needle more than most redesigns.
          </p>
        </div>
        <div className="mt-8">
          <Button href="/services/website-design/" variant="secondary">
            See the Website Design Service
          </Button>
        </div>
      </Section>

      {/* Part 5 */}
      <Section id="local-seo" background="surface" narrow>
        <h2 className="text-h2">5. Local SEO</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          <p>
            Local SEO is the structure underneath your Google Business Profile that makes rankings durable rather
            than temporary. It has five parts that matter most for a bathroom remodeler.
          </p>
          <p>
            <strong className="text-text-primary">Service and location page structure.</strong> A dedicated page for
            each real service (walk-in showers, full remodels, tub-to-shower conversions) and each service area you
            actually cover, rather than one page trying to rank for everything at once.
          </p>
          <p>
            <strong className="text-text-primary">On-page basics.</strong> Titles, headings, and content that
            actually match what a homeowner types into Google, written for a person first, not stuffed with
            keywords.
          </p>
          <p>
            <strong className="text-text-primary">Citations and NAP consistency.</strong> Your business name, address,
            and phone number listed identically across directories. Inconsistent NAP data is one of the most common,
            and most fixable, local ranking problems.
          </p>
          <p>
            <strong className="text-text-primary">Local links.</strong> Links from other local or industry-relevant
            sites signal to Google that real local businesses recognize you, which generic backlinks never fully
            replace.
          </p>
          <p>
            <strong className="text-text-primary">Schema markup.</strong> Structured data that tells Google exactly
            what kind of business you are, what you offer, and where you operate, in a format it can read precisely
            instead of inferring.
          </p>
          <p>
            Be honest with yourself about timing: Google Business Profile changes can show in weeks. Competitive
            local rankings from this kind of foundational SEO work typically take three to six months. Anyone
            promising faster isn&apos;t telling you the truth.
          </p>
        </div>
        <div className="mt-8">
          <Button href="/services/local-seo/" variant="secondary">
            See the Local SEO Service
          </Button>
        </div>
      </Section>

      <CtaBlock heading="Want to Know Where You Actually Rank?">
        Get a free visibility audit covering your Google profile, website, and local search standing.
      </CtaBlock>

      {/* Part 6 */}
      <Section id="lead-sources-compared" narrow>
        <h2 className="text-h2">6. Lead Sources Compared</h2>
        <p className="text-body-lg mt-4 text-text-secondary">
          Every bathroom remodeler eventually weighs the same options. Here&apos;s an honest comparison, without a
          thumb on the scale for any one of them.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-body">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-4 text-text-primary">Source</th>
                <th className="py-3 pr-4 text-text-primary">Real cost</th>
                <th className="py-3 pr-4 text-text-primary">Pros</th>
                <th className="py-3 text-text-primary">Cons</th>
              </tr>
            </thead>
            <tbody>
              {LEAD_SOURCES.map((row) => (
                <tr key={row.source} className="border-b border-border align-top">
                  <td className="py-3 pr-4 font-semibold text-text-primary">{row.source}</td>
                  <td className="py-3 pr-4 text-text-secondary">{row.cost}</td>
                  <td className="py-3 pr-4 text-text-secondary">{row.pros}</td>
                  <td className="py-3 text-text-secondary">{row.cons}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-body-lg mt-6 text-text-secondary">
          The shared-lead problem specifically: when a marketplace sells your lead to three or four competitors at
          once, you&apos;re not buying a customer, you&apos;re buying a race to the phone. The company that calls
          back in ten minutes usually wins regardless of who does better work. Organic and Map Pack visibility is the
          only source on this list that becomes an owned asset instead of a recurring rental cost.
        </p>
      </Section>

      {/* Part 7 */}
      <Section id="aging-in-place" background="surface" narrow>
        <h2 className="text-h2">7. The Aging-in-Place Opportunity</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          <p>
            Walk-in showers, grab bars, curbless entries, and other accessibility-focused bathroom work represent a
            demand shift most remodelers are still ignoring. Tampa Bay, with one of the largest concentrations of
            retirees and older homeowners in the country, is a specifically strong market for it.
          </p>
          <p>
            This isn&apos;t a niche within a niche, it&apos;s a growing share of bathroom remodel requests as
            homeowners plan to stay in their homes rather than move into assisted living. Safety and accessibility
            are becoming a standard part of the conversation, not a special request.
          </p>
          <p>
            Positioning for it means dedicated content and service pages around aging-in-place work specifically,
            walk-in shower conversions, barrier-free entries, grab bar installation, rather than burying it as a
            single bullet point on a general services page.
          </p>
          <p className="font-semibold text-text-primary">
            Most competitors ignore this entirely. A remodeler who builds real content and service pages around
            aging-in-place work in Tampa Bay is competing for search terms almost nobody else in the space is
            targeting directly.
          </p>
        </div>
      </Section>

      {/* Part 8 */}
      <Section id="measuring-what-works" narrow>
        <h2 className="text-h2">8. Measuring What Works</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          <p>
            Track calls, not just clicks. Traffic and rankings are leading indicators, but calls and quote requests
            are what actually pay the bills. Call tracking, a unique tracked number tied to your marketing, is the
            single most useful piece of measurement most remodelers skip.
          </p>
          <p>
            A useful report is plain English: what changed, why it changed, and what happened to calls and quote
            requests as a result. If a report is full of unexplained charts and no mention of leads, it isn&apos;t
            actually telling you anything.
          </p>
          <p className="font-semibold text-text-primary">
            Warning signs your agency isn&apos;t working: reports that only show vanity metrics like impressions,
            no mention of actual calls or leads, vague monthly updates that read the same every month, and
            reluctance to explain in plain terms what was actually done.
          </p>
        </div>
      </Section>

      <CtaBlock heading="Want a Report You Can Actually Read?">
        Get a free visibility audit, in plain English, with the specific things worth fixing first.
      </CtaBlock>

      {/* Conclusion */}
      <Section background="surface" narrow>
        <h2 className="text-h2">Where to Go From Here</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          <p>
            None of this requires hiring anyone. Fix your Google Business Profile categories, ask for reviews right
            after the walkthrough, tighten your quote path, and this guide has done its job whether or not we ever
            work together.
          </p>
          <p>
            If you&apos;d rather have someone build and maintain this system for you, that&apos;s exactly what I do,
            for bathroom remodeling companies in Tampa Bay specifically, and nowhere else.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/audit/" size="lg">
            Get My Free Visibility Audit
          </Button>
          <Button href="/services/" variant="secondary" size="lg">
            See All Services
          </Button>
        </div>
        <p className="text-body mt-6 text-text-secondary">
          Or see{" "}
          <Link href="/results/" className="font-semibold text-brand-primary hover:underline">
            real, honestly labeled results
          </Link>{" "}
          and{" "}
          <Link href="/pricing/" className="font-semibold text-brand-primary hover:underline">
            published pricing
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
