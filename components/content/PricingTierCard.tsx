import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type PricingTierCardProps = {
  name: string;
  price: string;
  period?: string;
  audience: string;
  inclusions: string[];
  featured?: boolean;
};

export function PricingTierCard({ name, price, period = "/month", audience, inclusions, featured = false }: PricingTierCardProps) {
  return (
    <Card
      className={cn("flex flex-col", featured && "border-2 border-brand-primary shadow-card-hover")}
    >
      {featured && (
        <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-primary-light px-3 py-1 text-small font-semibold text-brand-primary">
          Most popular
        </span>
      )}
      <h3 className="text-h3">{name}</h3>
      <p className="mt-3">
        <span className="text-h1">{price}</span>
        <span className="text-body text-text-secondary">{period}</span>
      </p>
      <p className="text-small mt-1 text-text-secondary">Starting at. {audience}</p>
      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {inclusions.map((item) => (
          <li key={item} className="flex items-start gap-2 text-body text-text-primary">
            <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-success" />
            {item}
          </li>
        ))}
      </ul>
      <Button href="/audit/" variant={featured ? "primary" : "secondary"} className="mt-8 justify-center">
        Get My Free Audit
      </Button>
    </Card>
  );
}
