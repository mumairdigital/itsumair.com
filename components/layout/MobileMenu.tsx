"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/nav";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden">
      <div className="flex items-center justify-between border-b border-border px-4 py-5">
        <Link href="/" onClick={onClose} className="text-h4 font-bold text-text-primary">
          itsumair<span className="text-brand-primary">.com</span>
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-md text-text-primary"
        >
          <X aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-6">
        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              {link.children ? (
                <div>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((value) => !value)}
                    aria-expanded={servicesOpen}
                    className="flex min-h-11 w-full items-center justify-between py-3 text-h4 text-text-primary"
                  >
                    {link.label}
                    <ChevronDown aria-hidden="true" className={cn("h-5 w-5 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  {servicesOpen && (
                    <ul className="flex flex-col gap-1 border-l border-border pl-4">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} onClick={onClose} className="block min-h-11 py-3 text-body text-text-secondary">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link href={link.href} onClick={onClose} className="block min-h-11 py-3 text-h4 text-text-primary">
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-3 border-t border-border px-4 py-5">
        <Button href="/audit/" onClick={onClose} className="w-full justify-center">
          Free Audit
        </Button>
        <Button href={getWhatsAppUrl()} variant="secondary" target="_blank" rel="noopener noreferrer" className="w-full justify-center">
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
}
