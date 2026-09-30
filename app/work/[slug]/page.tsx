import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { Stat } from "@/components/layout/Stat";
import { Reveal } from "@/components/motion/Reveal";
import { ProofFrame } from "@/components/motion/ProofFrame";
import { CtaBand } from "@/components/site/CtaBand";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies-data";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  return c ? { title: c.metaTitle.replace(/ \| Case Study$/, ""), description: c.metaDescription } : {};
}

const block = { display: "flex", flexDirection: "column", gap: 16 } as const;

function List({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10, color: "var(--text-body)" }}>
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c) notFound();
  const idx = CASE_STUDIES.findIndex((x) => x.slug === slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  return (
    <>
      <section style={{ padding: "clamp(40px,6vw,88px) 0 var(--section-y-tight)" }}>
        <div className="mu-container" style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
          <Link href="/work" style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>← All work</Link>
          <Reveal><Badge tone="brand">{c.tag}</Badge></Reveal>
          <Reveal delay={80}><h1 className="mu-h1" style={{ maxWidth: 940, fontSize: "clamp(34px,4.6vw,60px)" }}>{c.title}</h1></Reveal>
          <Reveal delay={160} style={{ display: "flex", flexWrap: "wrap", gap: "12px 32px", paddingTop: 8 }}>
            {c.snapshot.map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)" }}>{s.label}</span>
                <span style={{ fontSize: 15, color: "var(--text-strong)", fontWeight: 500 }}>{s.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "0 0 var(--section-y-tight)" }} aria-label="Headline results">
        <div className="mu-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
          {c.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} style={{ padding: "32px 24px", borderLeft: i ? "1px solid var(--border-subtle)" : "none" }}>
              <Stat value={s.value} label={s.label} size="lg" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mu-section">
        <div className="mu-container" style={{ maxWidth: "var(--container-md)", display: "flex", flexDirection: "column", gap: 56 }}>
          <Reveal style={block}>
            <span className="mu-eyebrow">The challenge</span>
            {c.problem.map((p) => <p key={p} className="mu-lead">{p}</p>)}
            <List items={c.auditFindings} />
          </Reveal>
          <Reveal style={block}>
            <span className="mu-eyebrow">What I did</span>
            <List items={c.whatIDid} />
          </Reveal>
          <Reveal style={block}>
            <span className="mu-eyebrow">The outcome</span>
            {c.results.map((r) => <p key={r} style={{ color: "var(--text-body)" }}>{r}</p>)}
          </Reveal>
        </div>
      </section>

      {c.images && (
        <section className="mu-section" aria-label="Proof screenshots">
          <div className="mu-container" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <span className="mu-eyebrow">{c.images.every((i) => i.kind === "diagram") ? "The process" : "The proof"}</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "var(--grid-gap)" }}>
              {c.images.map((img, i) => (
                <Reveal key={img.src} delay={(i % 2) * 80}>
                  <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    <ProofFrame src={img.src} alt={img.alt} ratio="16/10" chrome={img.kind !== "diagram"} fit="cover" position="left top" />
                    {img.caption && <figcaption style={{ fontSize: 14, color: "var(--text-muted)" }}>{img.caption}</figcaption>}
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mu-section">
        <div className="mu-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="mu-eyebrow" style={{ color: "var(--text-muted)" }}>Next case study</span>
            <Link href={`/work/${next.slug}`} className="mu-h3" style={{ textDecoration: "none", maxWidth: 640 }}>{next.title}</Link>
          </div>
          <Button variant="secondary" iconRight="arrow-right" href={`/work/${next.slug}`}>Read it</Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
