"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/core/Button";
import { IconButton } from "@/components/core/IconButton";
import { NAV_LINKS, BOOKING_HREF } from "@/lib/site";

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = React.useState(false);

  const toggleTheme = () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("mu-theme", next); } catch {}
  };

  const isOn = (href: string) => path === href || path.startsWith(href + "/");

  return (
    <header style={{ position: "sticky", top: 0, zIndex: "var(--z-sticky)" as string, background: "color-mix(in oklab, var(--bg-page) 88%, transparent)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto", padding: "0 var(--gutter)", height: 68, display: "flex", alignItems: "center", gap: 24 }}>
        <Link href="/" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, letterSpacing: "-0.03em", color: "var(--text-strong)", textDecoration: "none", whiteSpace: "nowrap" }}>
          Muhammad Umair<span style={{ color: "var(--brand)" }}>.</span>
        </Link>
        <nav aria-label="Main" className="mu-nav-links" style={{ gap: 4, marginLeft: "auto" }}>
          {NAV_LINKS.map((l) => {
            const on = isOn(l.href);
            return (
              <Link key={l.href} href={l.href} aria-current={on ? "page" : undefined} style={{ padding: "8px 12px", borderRadius: "var(--radius-sm)", fontSize: 14, fontWeight: 500, color: on ? "var(--text-strong)" : "var(--text-muted)", background: on ? "var(--surface-muted)" : "transparent", textDecoration: "none" }}>
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginLeft: "auto" }} className="mu-nav-actions">
          <IconButton icon="sun-moon" label="Toggle theme" onClick={toggleTheme} />
          <span className="mu-nav-links"><Button size="sm" iconRight="arrow-right" href={BOOKING_HREF}>Book a call</Button></span>
          <span className="mu-nav-toggle"><IconButton icon={open ? "x" : "menu"} label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} /></span>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" style={{ borderTop: "1px solid var(--border-subtle)", padding: "12px var(--gutter) 20px", display: "flex", flexDirection: "column", gap: 4, background: "var(--bg-page)" }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ padding: "12px 8px", fontSize: 18, fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-strong)", textDecoration: "none" }}>{l.label}</Link>
          ))}
          <div style={{ marginTop: 12 }}><Button fullWidth iconRight="arrow-right" href={BOOKING_HREF}>Book a call</Button></div>
        </nav>
      )}
    </header>
  );
}
