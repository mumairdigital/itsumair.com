"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NAV_LINKS } from "@/lib/nav";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
        <Container>
          <div className={cn("flex items-center justify-between transition-[padding] duration-200", scrolled ? "py-3" : "py-5")}>
            <Link href="/" className="text-h4 font-bold text-text-primary">
              itsumair<span className="text-brand-primary">.com</span>
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <NavDropdown key={link.href} link={link} />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="whitespace-nowrap rounded-md px-1 py-2 text-body font-medium text-text-primary hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button href={getWhatsAppUrl()} variant="secondary" size="sm" target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button href="/audit/" size="sm">
                Free Audit
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-md text-text-primary lg:hidden"
            >
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
