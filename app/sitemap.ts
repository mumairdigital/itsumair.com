import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/schema";
import { AREAS } from "@/lib/areas-data";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { BLOG_POSTS } from "@/lib/blog-data";

const LAST_MODIFIED = new Date("2026-07-18");

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/bathroom-remodeler-marketing/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/results/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/areas/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about/`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/pricing/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact/`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/audit/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/blog/`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/privacy-policy/`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms/`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/accessibility/`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    "local-seo",
    "google-business-profile",
    "website-design",
    "website-maintenance",
  ].map((slug) => ({
    url: `${SITE_URL}/services/${slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const areaPages: MetadataRoute.Sitemap = AREAS.map((area) => ({
    url: `${SITE_URL}/areas/${area.slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.map((study) => ({
    url: `${SITE_URL}/results/${study.slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...corePages, ...servicePages, ...areaPages, ...caseStudyPages, ...blogPages];
}
