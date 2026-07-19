import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  /** Narrow reading measure (~720px) for long-form copy: pillar page, blog posts. */
  narrow?: boolean;
  className?: string;
  as?: React.ElementType;
};

export function Container({ children, narrow = false, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-[720px]" : "max-w-[1200px]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
