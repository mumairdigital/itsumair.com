import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionBackground = "default" | "surface" | "brand";

type SectionProps = {
  children: React.ReactNode;
  background?: SectionBackground;
  /** Wrap children in a Container. Set false when the section supplies its own. */
  container?: boolean;
  narrow?: boolean;
  className?: string;
  id?: string;
};

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-background",
  surface: "bg-surface",
  brand: "bg-brand-primary text-white",
};

export function Section({
  children,
  background = "default",
  container = true,
  narrow = false,
  className,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-24 lg:py-32", backgroundClasses[background], className)}>
      {container ? <Container narrow={narrow}>{children}</Container> : children}
    </section>
  );
}
