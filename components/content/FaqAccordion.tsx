export type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="flex flex-col divide-y divide-border rounded-lg border border-border bg-surface">
      {items.map((item) => (
        <details key={item.question} className="group px-5 py-4 open:pb-5 first:rounded-t-lg last:rounded-b-lg">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-h4 [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
            {item.question}
            <span aria-hidden="true" className="shrink-0 text-h3 font-normal text-brand-primary transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="text-body mt-3 text-text-secondary">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
