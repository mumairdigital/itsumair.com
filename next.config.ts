import type { NextConfig } from "next";

/**
 * 301s from the previous site's URLs, so old links and Google results land somewhere useful.
 * (Trailing-slash variants are handled by Next's own redirect.)
 */
const OLD_SITE_REDIRECTS = [
  { source: "/services/:path+", destination: "/services" },
  { source: "/results", destination: "/work" },
  { source: "/results/:path*", destination: "/work" },
  { source: "/pricing", destination: "/services" },
  { source: "/areas", destination: "/services" },
  { source: "/areas/:path*", destination: "/services" },
  { source: "/blog", destination: "/work" },
  { source: "/blog/:path*", destination: "/work" },
  { source: "/bathroom-remodeler-marketing", destination: "/services" },
  { source: "/audit", destination: "/contact" },
  { source: "/accessibility", destination: "/" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return OLD_SITE_REDIRECTS.map((r) => ({ ...r, permanent: true }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
