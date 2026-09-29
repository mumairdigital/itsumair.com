import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies-data";

const BASE = "https://itsumair.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/services", "/about", "/book", "/contact", "/privacy-policy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${BASE}${p}` })),
    ...CASE_STUDIES.map((c) => ({ url: `${BASE}/work/${c.slug}` })),
  ];
}
