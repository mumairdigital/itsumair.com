import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** Elevate on hover — use for clickable cards (service, case study, blog). */
  hoverable?: boolean;
  as?: React.ElementType;
  [key: string]: unknown;
};

export function Card({ children, className, hoverable = false, as: Tag = "div", ...rest }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-lg border border-border bg-surface p-6 shadow-card",
        hoverable && "transition-shadow hover:shadow-card-hover",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
