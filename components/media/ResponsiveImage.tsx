import Image from "next/image";
import { cn } from "@/lib/utils";

type ResponsiveImageProps = {
  src: string;
  /** Descriptive alt text — this is a real, meaningful image, never empty. */
  alt: string;
  aspect?: string;
  rounded?: string;
  className?: string;
  sizes?: string;
  /** Set true for the page's LCP element (first hero image) so it loads eagerly. */
  priority?: boolean;
};

/**
 * Real-image counterpart to ImagePlaceholder, same prop shape (label -> alt) so a
 * swap is a near 1:1 edit once the matching asset exists in public/images/.
 */
export function ResponsiveImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
  rounded = "rounded-lg",
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: ResponsiveImageProps) {
  return (
    <div className={cn("relative overflow-hidden", aspect, rounded, className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
