import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

type ProblemCardProps = {
  icon: LucideIcon;
  heading: string;
  children: React.ReactNode;
};

export function ProblemCard({ icon: Icon, heading, children }: ProblemCardProps) {
  return (
    <Card>
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-primary-light text-brand-primary">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="text-h4 mt-4">{heading}</h3>
      <p className="text-body mt-2 text-text-secondary">{children}</p>
    </Card>
  );
}
