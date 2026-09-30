import { Button } from "@/components/core/Button";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ProofFrame } from "@/components/motion/ProofFrame";
import { GrowBar } from "@/components/site/GrowBar";
import { BeforeAfterSliders } from "@/components/site/BeforeAfterSliders";
import { SLIDER_PROJECTS } from "@/lib/before-after";

type Metric = {
  label: string;
  /** Before/after numbers drive the bar lengths; omit `before` for a single "latest" figure. */
  before?: number;
  after: number;
  beforeText?: string;
  afterText: string;
  note?: string;
};

/**
 * Real before/after pairs only. Every number comes from a screenshot or figure already used in a case study.
 * Keep TWO metric rows per card so the cards stay the same height and line up.
 */
const PAIRS: {
  who: string;
  source: string;
  headline: string;
  headlineLabel: string;
  metrics: [Metric, Metric];
  image: { src: string; alt: string };
  href: string;
}[] = [
  {
    who: "UK home improvement retailer",
    source: "Search Console · last 3 months vs. the 3 before",
    headline: "13×",
    headlineLabel: "more search clicks",
    metrics: [
      { label: "Search clicks", before: 76, after: 990, beforeText: "76", afterText: "990" },
      { label: "Search impressions", before: 1400, after: 27600, beforeText: "1.4K", afterText: "27.6K" },
    ],
    image: { src: "/proof/gsc-compare.webp", alt: "Search Console comparison: clicks up from 76 to 990 and impressions from 1.4K to 27.6K" },
    href: "/work/uk-retailer-ecommerce-and-local-seo",
  },
  {
    who: "UK airport transfer company",
    source: "Search Console · latest 28 days vs. the 28 before",
    headline: "2.7×",
    headlineLabel: "more search impressions",
    metrics: [
      { label: "Search impressions", before: 2970, after: 7990, beforeText: "2.97K", afterText: "7.99K" },
      { label: "Search clicks", after: 98, afterText: "98", note: "in the latest 28 days" },
    ],
    image: { src: "/proof/gsc-after.webp", alt: "Search Console, latest 28 days: 98 clicks and 7.99K impressions" },
    href: "/work/uk-airport-transfer-website-rebuild",
  },
];

const tag: React.CSSProperties = { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)" };
const ROW_H = 118;

function MetricRow({ m }: { m: Metric }) {
  const hasBefore = m.before !== undefined;
  return (
    <div style={{ minHeight: ROW_H, display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
      <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-strong)" }}>{m.label}</span>
      {hasBefore ? (
        <div style={{ display: "grid", gridTemplateColumns: "56px minmax(0,1fr) 64px", alignItems: "center", rowGap: 10, columnGap: 12 }}>
          <span style={tag}>Before</span>
          <GrowBar pct={(m.before! / m.after) * 100} tone="before" />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--text-muted)", textAlign: "right" }}>{m.beforeText}</span>
          <span style={{ ...tag, color: "var(--text-brand)" }}>After</span>
          <GrowBar pct={100} tone="after" delay={150} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--text-brand)", textAlign: "right", letterSpacing: "-.02em" }}>{m.afterText}</span>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 40, letterSpacing: "-.035em", lineHeight: 1, color: "var(--text-brand)" }}>{m.afterText}</span>
          {m.note && <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{m.note}</span>}
        </div>
      )}
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section className="mu-section" id="before-after">
      <div className="mu-container" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        <Reveal>
          <SectionHeader eyebrow="Before and after" title="The starting point, and where it got to" lead="Straight from each client's own Search Console. No made-up numbers." />
        </Reveal>

        <BeforeAfterSliders projects={SLIDER_PROJECTS} />

        <div style={{ display: "grid", gap: "var(--grid-gap)", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", alignItems: "stretch" }}>
          {PAIRS.map((p, i) => (
            <Reveal key={p.who} delay={i * 80} style={{ display: "flex" }}>
              <article style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, padding: 28, background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-sm)" }}>
                {/* Header: who + big headline number */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-strong)" }}>{p.who}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>{p.source}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", flexShrink: 0 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px,4.4vw,56px)", letterSpacing: "-.04em", lineHeight: 1, color: "var(--text-brand)" }}>{p.headline}</span>
                    <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{p.headlineLabel}</span>
                  </div>
                </div>

                {/* Two metric rows, same height in every card so the cards line up */}
                <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--border-subtle)" }}>
                  {p.metrics.map((m, k) => (
                    <div key={m.label} style={{ borderBottom: k === 0 ? "1px solid var(--border-subtle)" : "none" }}>
                      <MetricRow m={m} />
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 16 }}>
                  <ProofFrame src={p.image.src} alt={p.image.alt} ratio="16/9" fit="cover" position="left top" chrome={false} />
                  <div><Button variant="link" iconRight="arrow-right" href={p.href}>Read the case study</Button></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
