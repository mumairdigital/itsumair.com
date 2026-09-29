import Link from "next/link";
import { NAV_LINKS, SERVICES, CONTACT_EMAIL, BOOKING_HREF, WHATSAPP_HREF, WHATSAPP_DISPLAY } from "@/lib/site";

const col = { display: "flex", flexDirection: "column", gap: 10 } as const;
const head = { fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 4 } as const;
const link = { color: "var(--text-body)", textDecoration: "none", fontSize: 15 } as const;

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-sunken)", marginTop: "var(--section-y-tight)" }}>
      <div className="mu-container" style={{ padding: "var(--space-16) var(--gutter) var(--space-8)" }}>
        <div style={{ display: "grid", gap: 40, gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
          <div style={{ ...col, maxWidth: 320, gap: 14 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, letterSpacing: "-0.03em", color: "var(--text-strong)" }}>
              Muhammad Umair<span style={{ color: "var(--brand)" }}>.</span>
            </span>
            <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
              I help businesses grow online with web design, SEO, digital marketing and AI automation.
            </p>
          </div>
          <nav aria-label="Footer" style={col}>
            <span style={head}>Pages</span>
            <Link href="/" style={link}>Home</Link>
            {NAV_LINKS.map((l) => <Link key={l.href} href={l.href} style={link}>{l.label}</Link>)}
          </nav>
          <div style={col}>
            <span style={head}>Services</span>
            {SERVICES.map((s) => <Link key={s.slug} href={`/services#${s.slug}`} style={link}>{s.title}</Link>)}
          </div>
          <div style={col}>
            <span style={head}>Get in touch</span>
            <a href={`mailto:${CONTACT_EMAIL}`} style={link}>{CONTACT_EMAIL}</a>
            <Link href={BOOKING_HREF} style={link}>Book a free call</Link>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" style={link}>WhatsApp: {WHATSAPP_DISPLAY}</a>
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 20, borderTop: "1px solid var(--border-subtle)", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", color: "var(--text-muted)", fontSize: 13 }}>
          <span>© {new Date().getFullYear()} Muhammad Umair</span>
          <span style={{ display: "flex", gap: 16 }}>
            <Link href="/privacy-policy" style={{ ...link, fontSize: 13, color: "var(--text-muted)" }}>Privacy</Link>
            <Link href="/terms" style={{ ...link, fontSize: 13, color: "var(--text-muted)" }}>Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
