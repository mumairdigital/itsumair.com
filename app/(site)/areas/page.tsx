import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { CtaBlock } from "@/components/content/CtaBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { AREAS } from "@/lib/areas-data";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas | Tampa Bay Bathroom Remodeler SEO",
  description:
    "Local SEO for bathroom remodeling companies across Tampa Bay: Tampa, St. Petersburg, Clearwater, Largo, Brandon, and Palm Harbor.",
  path: "/areas/",
});

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Areas" }]);

export default function AreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero */}
      <Section background="surface" className="pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Areas" }]} />
        </Container>
        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h1 className="text-display">Serving Bathroom Remodelers Across Tampa Bay</h1>
          <p className="text-body-lg mt-4 text-text-secondary">
            Six markets, six different housing stories, and one thing in common: bathrooms old enough to remodel and
            homeowners searching Google to find who does it.
          </p>
        </div>
      </Section>

      {/* 2. Why Tampa Bay is distinct */}
      <Section narrow>
        <h2 className="text-h2">Why Tampa Bay Is a Distinct Market</h2>
        <div className="text-body-lg mt-5 flex flex-col gap-4 text-text-secondary">
          <p>
            Florida has one of the highest shares of residents aged 65 and over in the country, and Tampa Bay carries
            an unusually high concentration of 55+ communities on top of that state-wide trend. That single fact
            drives a genuinely different kind of bathroom remodel demand here than in most metros: walk-in showers,
            grab bars, and curbless entries aren&apos;t a niche request, they&apos;re a routine part of the
            conversation.
          </p>
          <p>
            Layered on top of that is housing age. A large share of the metro&apos;s homes were built between the
            1970s and 1990s, and that stock is now reaching, or has already reached, the point where a first or
            second bathroom replacement is overdue. Combine an aging population with an aging housing stock, and you
            get a steady, structural source of bathroom remodel demand that isn&apos;t dependent on a hot real estate
            market to keep going.
          </p>
          <p>
            Tampa Bay is also still growing. New residents keep arriving, existing homeowners are staying in place
            longer given today&apos;s mortgage rates, and both trends point the same direction: more homes, held
            longer, by owners more willing to invest in them rather than move.
          </p>
        </div>
      </Section>

      {/* 3. Location grid */}
      <Section background="surface">
        <h2 className="text-h2 text-center">Where I Focus</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area) => (
            <Card key={area.slug} hoverable as={Link} href={`/areas/${area.slug}/`} className="flex flex-col">
              <h3 className="text-h4">{area.name}</h3>
              <p className="text-body mt-2 flex-1 text-text-secondary">{area.hubHook}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-small font-semibold text-brand-primary">
                See the {area.name} market
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4. Not listed */}
      <Section>
        <div className="mx-auto max-w-narrow text-center">
          <h2 className="text-h2">Don&apos;t See Your City?</h2>
          <p className="text-body-lg mt-4 text-text-secondary">
            I&apos;m building out this list city by city as I take on real local research and clients. If your
            company is elsewhere in Tampa Bay,{" "}
            <Link href="/contact/" className="font-semibold text-brand-primary hover:underline">
              get in touch
            </Link>{" "}
            and we&apos;ll talk about whether it&apos;s a fit.
          </p>
        </div>
      </Section>

      {/* 5. CTA */}
      <CtaBlock heading="Ready to See Where You Stand in Your Market?">
        Get a free, honest look at your visibility in your specific city. No obligation.
      </CtaBlock>
    </>
  );
}
