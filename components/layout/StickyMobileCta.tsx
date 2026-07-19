"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 flex gap-3 border-t border-border bg-surface p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-card-hover transition-transform duration-200 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <Button href={getWhatsAppUrl()} variant="secondary" target="_blank" rel="noopener noreferrer" className="flex-1 justify-center">
        <MessageCircle aria-hidden="true" className="h-4 w-4" />
        WhatsApp
      </Button>
      <Button href="/audit/" className="flex-1 justify-center">
        Free Audit
      </Button>
    </div>
  );
}
