import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Portfolio } from "@/components/site/Portfolio";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in web design, SEO, local SEO and technical recovery, with the real numbers behind each result.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero eyebrow="Work" title={<>Results you can <span style={{ color: "var(--brand)" }}>check.</span></>} lead="Each project started with a business goal. Clients are kept anonymous; the numbers come straight from their own dashboards." />
      <Portfolio showAllLink={false} />
      <CtaBand />
    </>
  );
}
