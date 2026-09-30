import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/core/Icon";
import { Avatar } from "@/components/core/Avatar";
import { Card } from "@/components/layout/Card";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { HeroWall } from "@/components/site/HeroWall";
import { ClientStrip } from "@/components/site/ClientStrip";
import { Portfolio } from "@/components/site/Portfolio";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CtaBand } from "@/components/site/CtaBand";
import { SERVICES, BOOKING_HREF } from "@/lib/site";

const RESULTS = [
  { value: 13, decimals: 0, prefix: "", suffix: "×", label: "more search clicks", note: "UK home improvement retailer · Search Console, 3 months vs. previous 3" },
  { value: 1116, decimals: 0, prefix: "", suffix: "", label: "calls from Google Business Profile", note: "UK home improvement retailer · Apr–Sept 2026" },
  { value: 4265, decimals: 0, prefix: "", suffix: "", label: "Business Profile interactions", note: "UK home improvement retailer · Apr–Sept 2026" },
  { value: 2.7, decimals: 1, prefix: "", suffix: "×", label: "search impressions in 28 days", note: "UK airport transfer company · Search Console" },
];

const STEPS = [
  { title: "Audit", body: "I look at your site, search presence and processes to find what's holding growth back." },
  { title: "Build", body: "I design and build the fixes: a faster site, better pages, cleaner tracking, or an automation." },
  { title: "Prove", body: "I show you the results in your own Search Console, Business Profile and analytics." },
];

export default function Home() {
  return (
    <>
      {/* Hero — proof wall (option A) */}
      <section style={{ padding: "clamp(32px,5vw,72px) 0 var(--section-y-tight)", overflow: "hidden" }}>
        <div className="mu-container mu-hero-split" style={{ display: "grid", gap: "clamp(32px,4vw,64px)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28, alignItems: "flex-start" }}>
            <Reveal><Badge tone="brand" dot>Web design · SEO · AI automation</Badge></Reveal>
            <Reveal delay={80}>
              <h1 className="mu-display" style={{ fontSize: "clamp(44px,5.8vw,88px)" }}>
                More customers.<br /><span style={{ color: "var(--brand)" }}>Less busywork.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mu-lead" style={{ maxWidth: 560 }}>
                I build websites that convert, grow your search visibility, and automate the repetitive work. Here&apos;s the proof.
              </p>
            </Reveal>
            <Reveal delay={240} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button size="lg" iconRight="arrow-right" href={BOOKING_HREF}>Book a free call</Button>
              <Button size="lg" variant="secondary" href="/work">See the work</Button>
            </Reveal>
          </div>
          <HeroWall />
        </div>
      </section>

      <ClientStrip />

      {/* Results band */}
      <section style={{ padding: "0 0 var(--section-y-tight)" }} aria-label="Results">
        <div className="mu-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
            {RESULTS.map((r, i) => (
              <Reveal key={r.label} delay={i * 80} style={{ padding: "32px 24px", borderLeft: i ? "1px solid var(--border-subtle)" : "none", display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(38px,4vw,56px)", letterSpacing: "-.04em", lineHeight: 1, color: "var(--text-strong)" }}>
                  <CountUp value={r.value} decimals={r.decimals} prefix={r.prefix} suffix={r.suffix} />
                </span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-strong)" }}>{r.label}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>{r.note}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mu-section" id="services">
        <div className="mu-container" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <Reveal><SectionHeader eyebrow="Services" title="Four ways I help you grow" lead="Pick one, or combine them. Every project starts with a clear goal and ends with numbers you can check." /></Reveal>
          <div className="mu-grid-3" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))" }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 80} style={{ display: "flex" }}>
                <Card href={`/services#${s.slug}`} padding="md" style={{ flex: 1 }}>
                  <span style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--brand-subtle)", color: "var(--text-brand)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={s.icon} size={24} />
                  </span>
                  <h3 className="mu-h3" style={{ fontSize: 22 }}>{s.title}</h3>
                  <p style={{ color: "var(--text-body)", fontSize: 15 }}>{s.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />

      <BeforeAfter />

      {/* Process */}
      <section className="mu-section">
        <div className="mu-container" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <Reveal><SectionHeader eyebrow="How I work" title="Simple process, visible results" /></Reveal>
          <div className="mu-grid-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} style={{ display: "flex", flexDirection: "column", gap: 12, borderTop: "1.5px solid var(--border-strong)", paddingTop: 20 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-brand)", letterSpacing: "var(--tracking-caps)" }}>0{i + 1}</span>
                <h3 className="mu-h3" style={{ fontSize: 24 }}>{s.title}</h3>
                <p style={{ color: "var(--text-body)" }}>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mu-section">
        <div className="mu-container" style={{ display: "grid", gap: "clamp(32px,5vw,72px)", alignItems: "center", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))" }}>
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/portrait.webp" alt="Portrait of Muhammad Umair" width={640} height={800} style={{ width: "100%", maxWidth: 440, aspectRatio: "4/5", objectFit: "cover", borderRadius: "var(--radius-xl)" }} />
          </Reveal>
          <Reveal delay={120} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionHeader eyebrow="About" title="Hi, I'm Umair." />
            <p className="mu-lead">I work directly with business owners: no account managers, no hand-offs. You talk to the person building your site and running your SEO.</p>
            <p style={{ color: "var(--text-body)" }}>I only report numbers I can show you in your own dashboards, and I&apos;ll tell you plainly when something didn&apos;t move.</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Avatar src="/brand/portrait.webp" name="Muhammad Umair" size={48} />
              <Button variant="link" iconRight="arrow-right" href="/about">More about me</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
