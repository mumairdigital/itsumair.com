import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md text-body font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-primary text-white hover:bg-brand-primary-hover",
  secondary:
    "border border-border bg-transparent text-text-primary hover:bg-brand-primary-light hover:border-brand-primary",
  ghost: "text-text-primary hover:bg-brand-primary-light",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-small",
  md: "px-5 py-3",
  lg: "px-6 py-3.5 text-body-lg",
};

export function Button({ variant = "primary", size = "md", loading = false, className, children, ...props }: ButtonProps) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);
  const content = (
    <>
      {loading && <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />}
      {children}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const { disabled, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} disabled={disabled || loading} aria-busy={loading} {...buttonProps}>
      {content}
    </button>
  );
}
