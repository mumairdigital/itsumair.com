import { Button } from "@/components/core/Button";
import { PageHero } from "@/components/site/PageHero";

export default function NotFound() {
  return (
    <PageHero eyebrow="Error 404" title={<>That page <span style={{ color: "var(--brand)" }}>isn&apos;t here.</span></>} lead="The link may be old or mistyped. These are good places to pick up from.">
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button size="lg" href="/">Go to the homepage</Button>
        <Button size="lg" variant="secondary" href="/work">See the work</Button>
        <Button size="lg" variant="secondary" href="/contact">Contact me</Button>
      </div>
    </PageHero>
  );
}
