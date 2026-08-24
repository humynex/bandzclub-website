import type { IconName } from "@/components/icons";

export type Package = {
  slug: string;
  name: string;
  sub: string;
  price: string;
  priceNote: string;
  crest: IconName;
  popular?: boolean;
  includes: string[];
};

/** Transcribed verbatim from the Bandzclub packages flyer. */
export const packages: Package[] = [
  {
    slug: "starter",
    name: "Starter",
    sub: "Brand Package",
    price: "$499",
    priceNote: "Perfect for startups",
    crest: "star",
    includes: [
      "Brand Consultation",
      "Professional Logo Design",
      "Color Palette",
      "Font Selection",
      "Brand Style Guide",
      "Social Profile Kit",
      "2 Revisions",
    ],
  },
  {
    slug: "business-builder",
    name: "Business",
    sub: "Builder",
    price: "$999",
    priceNote: "Build your foundation",
    crest: "star",
    popular: true,
    includes: [
      "Everything in Starter",
      "Premium Logo Suite",
      "Business Card Design",
      "Flyer Design",
      "Social Media Kit",
      "Brand Strategy Session",
      "Credit Analysis",
      "Funding Readiness Assessment",
      "5 Revisions",
    ],
  },
  {
    slug: "business-launch",
    name: "Business",
    sub: "Launch",
    price: "$2,999",
    priceNote: "Launch your business the right way",
    crest: "starFilled",
    includes: [
      "Everything in Builder",
      "Complete Brand Identity",
      "Professional Website",
      "10 Custom Graphics",
      "Marketing Strategy",
      "Content Calendar",
      "Business Credit Consultation",
      "Personal Credit Repair Plan",
      "Business Funding Roadmap",
      "LLC & Business Structure Guidance",
      "Priority Support",
    ],
  },
  {
    slug: "elite-growth",
    name: "Elite",
    sub: "Growth",
    price: "$5,999",
    priceNote: "Brand + funding + growth",
    crest: "diamond",
    includes: [
      "Everything in Launch",
      "Sales Funnel",
      "SEO Setup",
      "Video Commercial",
      "Monthly Marketing Plan",
      "Complete Credit Repair Program",
      "Business Credit Building",
      "Funding Preparation",
      "Access to Funding Partner Network",
      "Business Growth Coaching",
      "Priority Support",
    ],
  },
  {
    slug: "ceo-empire",
    name: "CEO",
    sub: "Empire",
    price: "$10,000+",
    priceNote: "Done-for-you business development",
    crest: "crown",
    includes: [
      "Everything in Elite",
      "Unlimited Design Support",
      "Business Consulting",
      "Weekly Strategy Calls",
      "Paid Ads Setup",
      "Team Systems & Automation",
      "VIP Credit Repair",
      "Business Credit Setup",
      "Funding Strategy",
      "Funding Application Assistance",
      "Investor-Ready Brand Assets",
      "Dedicated Account Manager",
    ],
  },
];

export type PriceRow = {
  name: string;
  price: string;
  /** What the buyer actually receives. Deliverables, not adjectives. */
  what?: string;
};

export const individualServices: PriceRow[] = [
  {
    name: "Logo Design",
    price: "$250+",
    what: "A primary mark plus stacked and icon versions, in vector and PNG, that hold at billboard size and at favicon size.",
  },
  {
    name: "Brand Identity",
    price: "$500+",
    what: "Logo suite, colour palette, type choices and a style guide so everything you publish afterwards matches.",
  },
  {
    name: "Website Design",
    price: "$1,200+",
    what: "A custom multi-page site designed and built mobile-first, with your copy laid in and contact forms wired up.",
  },
  {
    name: "Shopify Store",
    price: "$1,500+",
    what: "A working storefront with products loaded, payments and shipping configured, ready to take orders on day one.",
  },
  {
    name: "Landing Page",
    price: "$500+",
    what: "One focused page built to convert a single offer, with the form and tracking connected.",
  },
  {
    name: "Flyer Design",
    price: "$100+",
    what: "Print and social sizes of the same flyer, export-ready, with one round of revisions.",
  },
  {
    name: "Business Cards",
    price: "$75+",
    what: "Front and back card design set up to print specification, ready to send to any printer.",
  },
  {
    name: "Social Media Graphics",
    price: "$35 each",
    what: "One finished post or story graphic in your brand's system — priced per graphic, no minimum.",
  },
  {
    name: "Content Creation",
    price: "Starting at $500",
    what: "A batch of posts, graphics and captions planned together so your feed reads as one brand.",
  },
  {
    name: "Video Editing",
    price: "$150+",
    what: "Cuts, captions, colour and sound on your footage, delivered in the sizes each platform wants.",
  },
  {
    name: "YouTube Thumbnail",
    price: "$75",
    what: "One thumbnail built to be legible at phone size, where most people decide whether to click.",
  },
  {
    name: "Brand Audit",
    price: "$199",
    what: "A written review of your brand, site and socials naming what's costing you money and what to fix first.",
  },
  {
    name: "Brand Strategy Session",
    price: "$250/hr",
    what: "A working call on positioning, offer and direction, with the notes and next steps written up afterwards.",
  },
];

export const creditServices: PriceRow[] = [
  {
    name: "Credit Repair Consultation",
    price: "$149",
    what: "We read your report with you, explain what's actually dragging the score, and lay out the order to tackle it.",
  },
  {
    name: "Personal Credit Repair",
    price: "Starting at $499",
    what: "Disputes drafted and filed on inaccurate items, tracked across all three bureaus until they resolve.",
  },
  {
    name: "Business Credit Setup",
    price: "$999",
    what: "Your business set up to hold credit in its own name — entity details, listings and starter tradelines.",
  },
  {
    name: "Funding Readiness Assessment",
    price: "$299",
    what: "An honest read on what you'd be approved for today, and precisely what's standing between you and more.",
  },
  {
    name: "Business Funding Strategy Session",
    price: "$499",
    what: "A working session on which funding routes suit your business, in what order, and what each one asks for.",
  },
  {
    name: "Funding Application Assistance",
    price: "Custom quote",
    what: "We prepare and package the application so it goes in complete rather than getting declined on paperwork.",
  },
  {
    name: "Credit Monitoring & Guidance",
    price: "$99/month",
    what: "Ongoing watch on your file with a monthly check-in on what moved and what to do next.",
  },
];

export const addOns: PriceRow[] = [
  {
    name: "AI Automation Setup",
    price: "$500",
    what: "An assistant that answers enquiries, books calls and follows up while you're working or asleep.",
  },
  {
    name: "Email Marketing",
    price: "$400",
    what: "Your list set up with a welcome sequence and a reusable template, so sending doesn't start from scratch.",
  },
  {
    name: "Google Business Setup",
    price: "$250",
    what: "Your Google profile claimed, filled out and verified so you show up when people search locally.",
  },
  {
    name: "SEO Optimization",
    price: "$550",
    what: "Titles, structure, speed and descriptions fixed across the site so search can actually read it.",
  },
  {
    name: "Social Media Management",
    price: "Starting at $750/month",
    what: "We run the accounts — planning, designing, scheduling and posting on a set rhythm.",
  },
  {
    name: "Business Funding Preparation",
    price: "Custom quote",
    what: "Documents, figures and file cleaned up in advance so applications go in strong.",
  },
  {
    name: "Credit & Funding Consultation",
    price: "Custom quote",
    what: "A tailored session for complicated situations that don't fit the standard packages.",
  },
];

export type MonthlyPlan = {
  name: string;
  price: string;
  cadence: string;
  includes: string[];
};

export const monthlyPlans: MonthlyPlan[] = [
  {
    name: "Growth",
    price: "$997",
    cadence: "/month",
    includes: [
      "8 Social Posts",
      "2 Flyers",
      "Monthly Strategy Call",
      "Email Support",
    ],
  },
  {
    name: "Scale",
    price: "$1,997",
    cadence: "/month",
    includes: [
      "20 Social Posts",
      "Website Updates",
      "Marketing Strategy",
      "Video Editing",
      "Quarterly Credit & Funding Review",
      "Priority Support",
    ],
  },
  {
    name: "Empire",
    price: "$4,997",
    cadence: "/month",
    includes: [
      "Unlimited Design Requests",
      "Weekly Meetings",
      "Content Production",
      "Marketing Campaigns",
      "Brand Management",
      "Ongoing Credit Optimization",
      "Funding Strategy Reviews",
    ],
  },
];

/** The closing block on the packages flyer. */
export const weBuildBusinesses = [
  "Build Your Brand",
  "Fix Your Credit",
  "Position You For Funding",
  "Create Premium Content",
  "Grow Your Business",
];
