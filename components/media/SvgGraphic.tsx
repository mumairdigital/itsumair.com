import { cn } from "@/lib/utils";

type SvgGraphicProps = {
  src: string;
  alt: string;
  aspect?: string;
  rounded?: string;
  className?: string;
};

/**
 * For hand-authored vector graphics (public/images/**\/*.svg). Renders a plain
 * <img>, bypassing next/image's raster optimizer — which 400s on local SVGs
 * unless images.dangerouslyAllowSVG is set — since a vector needs no srcset.
 */
export function SvgGraphic({ src, alt, aspect = "aspect-[4/3]", rounded = "rounded-lg", className }: SvgGraphicProps) {
  return (
    <div className={cn("relative overflow-hidden", aspect, rounded, className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
}
