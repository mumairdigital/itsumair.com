import { Check } from "lucide-react";

type IncludedListProps = {
  items: string[];
};

export function IncludedList({ items }: IncludedListProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-body text-text-primary">
          <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-success" />
          {item}
        </li>
      ))}
    </ul>
  );
}
