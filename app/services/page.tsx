import type { Metadata } from "next";
import { Icon } from "@/components/core/Icon";
import { Button } from "@/components/core/Button";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Web design, SEO and local SEO, digital marketing, and AI automation for businesses that want more customers and less busywork.",
};

const DETAIL: Record<string, { included: string[]; fit: string }> = {
  "web-design": {
    included: ["A fast, mobile-first site built on Next.js", "Clear structure and copy focused on enquiries", "On-page SEO and analytics set up from day one", "Handover you can actually manage"],
    fit: "Your site is slow, dated, or doesn't turn visitors into calls and enquiries.",
  },
  seo: {
    included: ["Audit of your site and search presence", "Keyword and page plan for the searches that matter", "Google Business Profile optimisation and posting", "Monthly reporting from your own Search Console"],
    fit: "You want to be found for what you sell, in your area and beyond.",
  },
  marketing: {
    included: ["A simple plan tied to one clear goal", "Content and campaigns that support your search work", "Tracking so you can see what brings enquiries", "Honest reporting, including what didn't work"],
    fit: "You have a decent site but not enough of the right people finding it.",
  },
  "ai-automation": {
    included: ["A review of the repetitive tasks eating your week", "Automations for follow-ups, quotes and data entry", "AI assistants trained on your own information", "Testing before anything talks to a customer"],
    fit: "Your team spends hours on tasks a well-built workflow could handle.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Four ways I help you <span style={{ color: "var(--brand)" }}>grow.</span></>} lead="Pick one, or combine them. Every project starts with a clear goal and ends with numbers you can check." />
      <section style={{ paddingBottom: "var(--section-y-tight)" }}>
        <div className="mu-container" style={{ display: "flex", flexDirection: "column" }}>
          {SERVICES.map((s) => {
            const d = DETAIL[s.slug];
            return (
              <Reveal key={s.slug}>
                <div id={s.slug} style={{ scrollMarginTop: 96, display: "grid", gap: "clamp(24px,4vw,64px)", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", padding: "48px 0", borderTop: "1px solid var(--border-subtle)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
                    <span style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--brand-subtle)", color: "var(--text-brand)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name={s.icon} size={24} />
                    </span>
                    <h2 className="mu-h2">{s.title}</h2>
                    <p className="mu-lead">{s.body}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: 15 }}><strong style={{ color: "var(--text-strong)" }}>A good fit if:</strong> {d.fit}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <span className="mu-eyebrow">What&apos;s included</span>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                      {d.included.map((t) => (
                        <li key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "var(--text-body)" }}>
                          <Icon name="check" size={20} color="var(--brand)" style={{ marginTop: 2 }} />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
          <div style={{ paddingTop: 16 }}><Button variant="secondary" iconRight="arrow-right" href="/work">See results from real projects</Button></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
