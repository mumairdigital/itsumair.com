import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description: "I'm Muhammad Umair. I work directly with business owners on web design, SEO, digital marketing and AI automation.",
};

const PRINCIPLES = [
  { title: "Direct access", body: "You work with me, not an account manager. What you ask for is what I build." },
  { title: "Numbers you can check", body: "I only report results you can see in your own Search Console, Business Profile and analytics." },
  { title: "Honest about what didn't move", body: "If something didn't work, I'll say so and tell you what I'd change." },
  { title: "Built to last", body: "Fast, clean, well-structured work that's easy to maintain and doesn't need constant patching." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title={<>Hi, I&apos;m <span style={{ color: "var(--brand)" }}>Umair.</span></>} lead="I help businesses grow online with web design, SEO and local SEO, digital marketing, and AI automation." />
      <section className="mu-section">
        <div className="mu-container" style={{ display: "grid", gap: "clamp(32px,5vw,72px)", alignItems: "start", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))" }}>
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/portrait.webp" alt="Portrait of Muhammad Umair" width={640} height={800} style={{ width: "100%", maxWidth: 440, aspectRatio: "4/5", objectFit: "cover", borderRadius: "var(--radius-xl)" }} />
          </Reveal>
          <Reveal delay={120} style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: "var(--measure)" }}>
            <p className="mu-lead">I build websites that convert, grow search visibility, and automate the repetitive work that slows a business down.</p>
            <p>I work directly with business owners, so you talk to the person building your site and running your SEO. Projects start with a clear business goal, not a design brief, and finish with results you can verify yourself.</p>
            <p>That includes the unglamorous work too: rebuilding slow sites, recovering hacked ones, and fixing the technical problems that quietly hold rankings back.</p>
          </Reveal>
        </div>
      </section>
      <section className="mu-section">
        <div className="mu-container" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <Reveal><h2 className="mu-h2">How I work</h2></Reveal>
          <div className="mu-grid-3" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))" }}>
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 80} style={{ display: "flex", flexDirection: "column", gap: 10, borderTop: "1.5px solid var(--border-strong)", paddingTop: 20 }}>
                <h3 className="mu-h3" style={{ fontSize: 22 }}>{p.title}</h3>
                <p style={{ color: "var(--text-body)" }}>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
