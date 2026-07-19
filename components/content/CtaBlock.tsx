import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

type CtaBlockProps = {
  heading: string;
  children?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CtaBlock({ heading, children, ctaLabel = "Get My Free Visibility Audit", ctaHref = "/audit/" }: CtaBlockProps) {
  return (
    <Section background="brand">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-h2 text-white">{heading}</h2>
        {children && <p className="text-body-lg mt-4 text-white/90">{children}</p>}
        <div className="mt-8 flex justify-center">
          <Button href={ctaHref} size="lg" variant="secondary" className="bg-white text-brand-primary hover:bg-white/90">
            {ctaLabel}
          </Button>
        </div>
        <p className="text-small mt-4 text-white/80">Free. No obligation. 24-hour turnaround.</p>
      </div>
    </Section>
  );
}
