import { CASE_STUDIES } from "@/lib/case-studies-data";

export type WorkKind = "Web" | "SEO" | "Automation";

/** Card fields layered on top of the case-study data. Anonymous clients, real numbers only. */
const META: Record<string, { client: string; tag: string; kinds: WorkKind[]; stat: string; statLabel: string; title: string }> = {
  "uk-retailer-ecommerce-and-local-seo": { client: "UK home improvement retailer", tag: "SEO & local SEO", kinds: ["SEO"], stat: "13×", statLabel: "more search clicks, plus 1,116 calls", title: "An online store built, then found on Google" },
  "uk-airport-transfer-website-rebuild": { client: "UK airport transfers", tag: "Web design & SEO", kinds: ["Web", "SEO"], stat: "2.7×", statLabel: "search impressions in 28 days", title: "A full Next.js rebuild with SEO-ready route pages" },
  "video-studio-website-and-booking": { client: "Video editing studio", tag: "Web design", kinds: ["Web"], stat: "Custom", statLabel: "build with booking built in", title: "A studio site built from scratch, with booking built in" },
  "us-plumbing-lead-automation": { client: "US plumbing company", tag: "AI automation", kinds: ["Automation"], stat: "n8n", statLabel: "from first enquiry to review request", title: "Leads, emergencies and bookings, handled by one workflow" },
  "wordpress-malware-recovery": { client: "Small business", tag: "Web design", kinds: ["Web"], stat: "Clean", statLabel: "verified before handoff", title: "A hacked WordPress site traced to one database trigger, and rebuilt" },
};

export const WORK = CASE_STUDIES.map((c) => ({
  slug: c.slug,
  cover: c.images?.[0],
  ...META[c.slug],
}));

export const WORK_FILTERS = ["All", "Web", "SEO", "Automation"];
