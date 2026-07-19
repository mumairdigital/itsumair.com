import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FOOTER_COMPANY_LINKS, FOOTER_LEGAL_LINKS, FOOTER_SERVICE_LINKS, AREA_LINKS, CONTACT_EMAIL } from "@/lib/nav";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
            <Link href="/" className="text-h4 font-bold text-text-primary">
              itsumair<span className="text-brand-primary">.com</span>
            </Link>
            <p className="text-small text-text-secondary">
              Local SEO and website specialist for bathroom remodeling companies in Tampa Bay, FL.
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-small font-semibold text-brand-primary hover:underline"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Message on WhatsApp
            </a>
          </div>

          <div>
            <h2 className="text-small font-semibold uppercase tracking-wide text-text-secondary">Services</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body text-text-primary hover:text-brand-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-small font-semibold uppercase tracking-wide text-text-secondary">Company</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body text-text-primary hover:text-brand-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-small font-semibold uppercase tracking-wide text-text-secondary">Areas We Serve</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {AREA_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body text-text-primary hover:text-brand-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 flex items-center gap-2 text-small text-text-secondary hover:text-brand-primary"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-text-secondary">
            &copy; {year} Muhammad Umair. Tampa Bay, FL.
          </p>
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
  );
}
