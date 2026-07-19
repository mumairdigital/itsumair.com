export type BlogCategory = "Get Found" | "Convert More" | "Business of Remodeling" | "Teardowns";

export const BLOG_CATEGORIES: BlogCategory[] = ["Get Found", "Convert More", "Business of Remodeling", "Teardowns"];

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: BlogCategory;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  keyTakeaways: string[];
  /** Real hero image path, e.g. "/images/blog/[slug]/hero.webp". Omit to fall back to ImagePlaceholder. */
  heroImage?: { src: string; alt: string };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-homeowners-cant-find-you-on-google",
    title: "Why Homeowners Can't Find You on Google",
    metaTitle: "Why Homeowners Can't Find You on Google",
    metaDescription:
      "Why most bathroom remodelers are invisible in the Google Map Pack, the 3 factors that actually decide it, and what to check and fix first.",
    category: "Get Found",
    excerpt:
      "Most bathroom remodelers who think they have a marketing problem actually have a visibility problem. Here's what decides the Map Pack, the 5 most common reasons remodelers don't show up in it, and what to check first.",
    readTime: "7 min read",
    publishedDate: "2026-07-18",
    heroImage: {
      src: "/images/blog/why-homeowners-cant-find-you-on-google/hero.webp",
      alt: "Isometric graphic of a smartphone showing a search results screen next to a glowing map pin, illustrating a homeowner's search for a local business",
    },
    keyTakeaways: [
      "The Map Pack, not the blue links below it, is where most local remodeling jobs get decided",
      "Three factors control it: relevance, distance, and prominence, and prominence is the one most remodelers ignore",
      "Five specific, checkable mistakes account for most invisible profiles",
      "You can check your own position in about five minutes, without any paid tool",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
