import type { Metadata, Viewport } from "next";
import { Anton, Chivo } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Atmosphere } from "@/components/ui/Atmosphere";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { site } from "@/data/site";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.taglines.primary}`,
    template: `%s — ${site.shortName}`,
  },
  description: site.intro,
  keywords: [
    "branding studio Houston",
    "logo design",
    "website design",
    "business credit repair",
    "business funding",
    "creative studio",
  ],
  openGraph: {
    title: `${site.name} — ${site.taglines.primary}`,
    description: site.taglines.manifesto,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#060607",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${chivo.variable}`}>
      <head>
        {/*
          Do NOT mutate <html> from an inline script here. React 19 diffs the
          root element on hydration — className *and* unknown attributes alike
          — and any pre-hydration mutation is reported as a root mismatch that
          it refuses to patch. Hydration is abandoned, no event handler on the
          page attaches, and forms silently degrade to native submits. A
          `no-js` class was tried and removed for exactly this reason.

          The scroll-reveal safety net is <noscript> plus the reduced-motion
          rule in globals.css. Neither touches the DOM before hydration.
        */}
        <noscript>
          <style>{`[data-motion],[data-motion] *{opacity:1!important;transform:none!important}.page-curtain{display:none}`}</style>
        </noscript>
      </head>
      <body className="min-h-[100dvh] antialiased">
        <SmoothScroll />
        <Atmosphere />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
