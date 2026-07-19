import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

type ServiceCardProps = {
  icon: LucideIcon;
  name: string;
  href: string;
  children: React.ReactNode;
};

export function ServiceCard({ icon: Icon, name, href, children }: ServiceCardProps) {
  return (
    <Card hoverable as={Link} href={href} className="flex flex-col">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-primary-light text-brand-primary">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="text-h4 mt-4">{name}</h3>
      <p className="text-body mt-2 flex-1 text-text-secondary">{children}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-small font-semibold text-brand-primary">
        See how it works
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </span>
    </Card>
  );
}
