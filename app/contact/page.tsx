import type { Metadata } from "next";
import { Icon } from "@/components/core/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Button } from "@/components/core/Button";
import { CONTACT_EMAIL, BOOKING_HREF, WHATSAPP_HREF, WHATSAPP_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free call or send a message. I'll look at your site and tell you honestly where the biggest opportunity is.",
};

const STEPS = [
  "You tell me a little about your business and goal.",
  "I look at your site and search presence.",
  "I reply with an honest view of where the biggest opportunity is.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let&apos;s talk about <span style={{ color: "var(--brand)" }}>your goals.</span></>} lead="Send a message and I'll get back to you personally." />
      <section style={{ paddingBottom: "var(--section-y-tight)" }}>
        <div className="mu-container" style={{ display: "grid", gap: "clamp(32px,5vw,80px)", alignItems: "start", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))" }}>
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={120} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <span className="mu-eyebrow">Prefer to talk?</span>
              <Button iconRight="arrow-right" href={BOOKING_HREF}>Book a free 30-minute call</Button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", padding: 24, borderRadius: "var(--radius-card)", background: "var(--brand-subtle)", border: "1px solid var(--border-subtle)" }}>
              <span className="mu-eyebrow">Urgent enquiry?</span>
              <p style={{ color: "var(--text-body)" }}>Message or call me on WhatsApp for anything that can&apos;t wait: a site that&apos;s down, a hacked page, or a time-sensitive launch.</p>
              <Button variant="secondary" iconLeft="message-circle" href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">WhatsApp {WHATSAPP_DISPLAY}</Button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span className="mu-eyebrow">Email</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mu-h3" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                {CONTACT_EMAIL} <Icon name="arrow-up-right" size={20} />
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <span className="mu-eyebrow">What happens next</span>
              <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10, color: "var(--text-body)" }}>
                {STEPS.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
