"use client";
import React from "react";
import { Button } from "@/components/core/Button";
import { Input } from "@/components/forms/Input";
import { WHATSAPP_HREF } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState("");
  const [f, setF] = React.useState({ name: "", email: "", site: "", message: "", company: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" style={{ padding: 32, borderRadius: "var(--radius-card)", background: "var(--success-subtle)", color: "var(--success-text)", display: "flex", flexDirection: "column", gap: 8 }}>
        <h2 className="mu-h3" style={{ color: "var(--success-text)" }}>Message sent</h2>
        <p>Thanks, {f.name.split(" ")[0]}. I&apos;ll reply to {f.email} personally. If it&apos;s urgent, message me on <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Input label="Your name" value={f.name} onChange={set("name")} required autoComplete="name" maxLength={100} />
      <Input label="Email" type="email" value={f.email} onChange={set("email")} required autoComplete="email" maxLength={200} />
      <Input label="Your website (optional)" value={f.site} onChange={set("site")} placeholder="https://" maxLength={200} />
      <Input label="How can I help?" multiline rows={5} value={f.message} onChange={set("message")} required maxLength={4000} hint="A sentence or two about your goal is plenty." />
      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}>
        <label>Company<input tabIndex={-1} autoComplete="off" value={f.company} onChange={set("company")} /></label>
      </div>
      {status === "error" && <p role="alert" style={{ color: "var(--danger-text)", fontSize: 14 }}>{error}</p>}
      <div><Button type="submit" size="lg" iconRight="arrow-right" loading={status === "sending"}>Send message</Button></div>
    </form>
  );
}
