import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { JsonLd } from "@/components/site/JsonLd";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const SITE_URL = "https://itsumair.com";
const DESCRIPTION =
  "I help businesses grow online with web design, SEO and local SEO, digital marketing, and AI automation. See the results.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Muhammad Umair | Web design, SEO & AI automation", template: "%s | Muhammad Umair" },
  description: DESCRIPTION,
  alternates: { canonical: "./" },
  openGraph: { siteName: "Muhammad Umair", type: "website", locale: "en_US", url: "/", description: DESCRIPTION },
  twitter: { card: "summary_large_image" },
};

/** Sets data-theme before paint: saved choice first, then the OS preference. */
const themeScript = `try{var t=localStorage.getItem('mu-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <JsonLd />
        <a href="#main" className="mu-skip">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
