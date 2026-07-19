import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/Card";

type WhoItsForProps = {
  goodFit: string[];
  notFit: string[];
};

export function WhoItsFor({ goodFit, notFit }: WhoItsForProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <Card>
        <h3 className="text-h4">Good Fit</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {goodFit.map((item) => (
            <li key={item} className="flex items-start gap-3 text-body text-text-secondary">
              <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              {item}
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <h3 className="text-h4">Not a Fit</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {notFit.map((item) => (
            <li key={item} className="flex items-start gap-3 text-body text-text-secondary">
              <X aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-error" />
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
