import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { FOOTER_LEGAL_LINKS } from "@/lib/nav";

// Reduced nav per copy-briefs/audit-landing.md: this is the primary conversion
// URL sent in outreach. No full nav, no exits — logo + WhatsApp only.
export default function AuditLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="border-b border-border bg-surface">
        <Container>
          <div className="flex items-center justify-between py-5">
            <Link href="/" className="text-h4 font-bold text-text-primary">
              itsumair<span className="text-brand-primary">.com</span>
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-body font-medium text-brand-primary hover:underline"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </Container>
      </header>

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-surface py-8">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-small text-text-secondary">&copy; {year} Muhammad Umair.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-small text-text-secondary hover:text-brand-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}
