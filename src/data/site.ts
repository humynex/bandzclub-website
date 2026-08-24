export const site = {
  name: "Bandzclub Creative Studio",
  shortName: "Bandzclub",
  domain: "bandzclub.com",
  url: "https://bandzclub.com",
  email: "info@bandzclub.com",
  instagram: "@bandzclub.studio",
  instagramUrl: "https://instagram.com/bandzclub.studio",
  city: "Houston, TX",
  dmKeyword: "BRAND",
  taglines: {
    primary: "Brand it. Build it. Blow up.",
    manifesto: "We don't just design brands. We build businesses.",
    possibility: "Your brand. Our creativity. Endless possibilities.",
    empire: "Let's build your brand. Let's build your empire.",
    urgency: "Stop waiting. Start building.",
  },
  intro:
    "At Bandzclub Creative Studio, we help entrepreneurs stand out, build trust, and turn their vision into a powerful brand that attracts customers and drives sales.",
} as const;

export const partnership = {
  eyebrow: "Official Partnership",
  partners: ["Humynex", "Creditpreneurs"],
  line: "Stronger together. Limitless together.",
} as const;

export const outcomes = [
  { label: "Build Trust", icon: "audience" },
  { label: "Increase Sales", icon: "growth" },
  { label: "Stand Out Online", icon: "target" },
  { label: "Grow Your Brand", icon: "money" },
] as const;

export const promises = [
  "Professional Designs",
  "Powerful Brands",
  "More Customers",
  "More Sales",
  "More Growth",
] as const;

/**
 * Everything priced lives under /packages, so a visitor comparing money is
 * never bounced between two branches of the site. The dropdown exposes the
 * whole price list at once rather than hiding four pages behind one link.
 */
export type NavChild = { href: string; label: string; blurb: string };
export type NavItem = {
  href: string;
  label: string;
  children?: readonly NavChild[];
};

export const packagesChildren = [
  {
    href: "/packages",
    label: "Brand Packages",
    blurb: "The five tiers, $499 to $10,000+",
  },
  {
    href: "/packages/individual",
    label: "Individual Services",
    blurb: "One-off pricing, logo to full site",
  },
  {
    href: "/packages/credit",
    label: "Credit Repair & Funding",
    blurb: "Personal and business credit, capital",
  },
  {
    href: "/packages/add-ons",
    label: "Add-Ons",
    blurb: "Automation, email, SEO, Google",
  },
  {
    href: "/packages/monthly",
    label: "Monthly Growth Plans",
    blurb: "Retainers from $997/month",
  },
] as const;

export const nav: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages", children: packagesChildren },
  { href: "/work", label: "Work" },
  { href: "/content", label: "Content" },
  { href: "/about", label: "About" },
  { href: "/owner", label: "Meet The Owner" },
] as const;
