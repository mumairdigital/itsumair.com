import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/core/Icon";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ProofFrame } from "@/components/motion/ProofFrame";
import { BeforeAfterSliders } from "@/components/site/BeforeAfterSliders";
import { SLIDER_PROJECTS } from "@/lib/before-after";

/**
 * Real before/after pairs only. Every number comes from a screenshot or figure already used in a case study.
 * Add a pair when there is a genuine screenshot behind it.
 */
const PAIRS = [
  {
    who: "UK home improvement retailer",
    source: "Search Console · last 3 months vs. the 3 before",
    metrics: [
      { label: "Search clicks", before: "76", after: "990", delta: "13×" },
      { label: "Search impressions", before: "1.4K", after: "27.6K", delta: "~20×" },
    ],
    image: { src: "/proof/gsc-compare.webp", alt: "Search Console comparison: clicks up from 76 to 990 and impressions from 1.4K to 27.6K" },
    href: "/work/uk-retailer-ecommerce-and-local-seo",
  },
  {
    who: "UK airport transfer company",
    source: "Search Console · latest 28 days vs. the 28 before",
    metrics: [{ label: "Search impressions", before: "2.97K", after: "7.99K", delta: "2.7×" }],
    image: { src: "/proof/gsc-after.webp", alt: "Search Console, latest 28 days: 98 clicks and 7.99K impressions" },
    href: "/work/uk-airport-transfer-website-rebuild",
  },
];

export function BeforeAfter() {
  return (
    <section className="mu-section" id="before-after">
      <div className="mu-container" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        <Reveal>
          <SectionHeader eyebrow="Before and after" title="The starting point, and where it got to" lead="Straight from each client's own Search Console. No made-up numbers." />
        </Reveal>
        <BeforeAfterSliders projects={SLIDER_PROJECTS} />
        <div style={{ display: "grid", gap: "var(--grid-gap)", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))" }}>
          {PAIRS.map((p, i) => (
            <Reveal key={p.who} delay={i * 80} style={{ display: "flex" }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, padding: 28, background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-card)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-strong)" }}>{p.who}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>{p.source}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {p.metrics.map((m) => (
                    <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{m.label}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px,3vw,40px)", letterSpacing: "-.03em", color: "var(--text-faint)", lineHeight: 1 }}>{m.before}</span>
                        <Icon name="arrow-right" size={22} color="var(--text-muted)" />
                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px,4vw,52px)", letterSpacing: "-.04em", color: "var(--text-brand)", lineHeight: 1 }}>{m.after}</span>
                        <Badge tone="success">{m.delta}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <ProofFrame src={p.image.src} alt={p.image.alt} ratio="16/9" fit="cover" position="left top" chrome={false} />
                <div><Button variant="link" iconRight="arrow-right" href={p.href}>Read the case study</Button></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
