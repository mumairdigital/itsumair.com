import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Accessible description of the real image this will become, e.g. "Umair headshot". */
  label: string;
  aspect?: string;
  rounded?: string;
  className?: string;
};

/**
 * Brand-tinted placeholder for images not yet sourced (06-assets/asset-requirements-and-image-list.md).
 * Swapping in the real asset later is a one-line change: replace this with next/image.
 */
export function ImagePlaceholder({ label, aspect = "aspect-[4/3]", rounded = "rounded-lg", className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("flex items-center justify-center bg-brand-primary-light text-brand-primary", aspect, rounded, className)}
    >
      <ImageIcon aria-hidden="true" className="h-10 w-10 opacity-50" />
    </div>
  );
}
