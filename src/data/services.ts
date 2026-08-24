import type { IconName } from "@/components/icons";

/** The book-spine stack from the flyers — the studio's signature motif. */
export const spines = [
  "Branding",
  "Logo Design",
  "Website Design",
  "Marketing",
  "Social Media",
  "Content Creation",
  "Strategy",
] as const;

export type ServiceChapter = {
  slug: string;
  index: string;
  title: string;
  lede: string;
  icon: IconName;
  deliverables: string[];
  from: string;
};

export const chapters: ServiceChapter[] = [
  {
    slug: "branding",
    index: "01",
    title: "Branding",
    lede: "The whole identity, decided on purpose — not assembled from whatever looked good that week. Name, mark, palette, type, voice, and the rules that keep it consistent everywhere it shows up.",
    icon: "crown",
    deliverables: [
      "Brand consultation",
      "Colour palette & font selection",
      "Brand style guide",
      "Social profile kit",
      "Brand audit",
    ],
    from: "$500+",
  },
  {
    slug: "logo-design",
    index: "02",
    title: "Logo Design",
    lede: "A mark that holds up at billboard scale and at favicon scale. Delivered as a full suite — primary, stacked, icon-only, one-colour — with the source files, so you own it outright.",
    icon: "penNib",
    deliverables: [
      "Primary + secondary lockups",
      "Icon and submark",
      "Monochrome and reversed versions",
      "Vector source files",
    ],
    from: "$250+",
  },
  {
    slug: "website-design",
    index: "03",
    title: "Website Design",
    lede: "Custom-built sites and stores that load fast, read clearly on a phone, and turn traffic into enquiries. No page-builder templates with your logo dropped in the corner.",
    icon: "globe",
    deliverables: [
      "Custom website design & build",
      "Shopify store setup",
      "Landing pages & sales funnels",
      "SEO setup",
    ],
    from: "$1,200+",
  },
  {
    slug: "marketing",
    index: "04",
    title: "Marketing Strategy",
    lede: "A plan with dates on it. What you post, where you spend, what you say, and how you tell whether it worked — reviewed every month instead of guessed at.",
    icon: "chartArrow",
    deliverables: [
      "Marketing strategy & content calendar",
      "Paid ads setup",
      "Email marketing",
      "Monthly marketing plan",
    ],
    from: "$500+",
  },
  {
    slug: "social-media",
    index: "05",
    title: "Social Media Strategy",
    lede: "Feeds that look like one brand instead of seven. Graphics, hooks, posting cadence, and management if you'd rather hand the whole thing over.",
    icon: "megaphone",
    deliverables: [
      "Social media kit",
      "Graphics from $35 each",
      "Posting cadence & hooks",
      "Full management from $750/month",
    ],
    from: "$35+",
  },
  {
    slug: "content",
    index: "06",
    title: "Content Creation",
    lede: "Video, thumbnails, commercials, flyers, business cards. The material that makes a small operation look like an established one.",
    icon: "clapper",
    deliverables: [
      "Video editing & commercials",
      "YouTube thumbnails",
      "Flyer design",
      "Business cards",
    ],
    from: "$75+",
  },
  {
    slug: "sourcing",
    index: "07",
    title: "Manufacturer Sourcing",
    lede: "For product and apparel brands: finding the people who will actually make the thing, at a quality and a unit cost that leaves you a margin.",
    icon: "box",
    deliverables: [
      "Supplier identification",
      "Sample coordination",
      "Cost and margin review",
      "Production-ready artwork",
    ],
    from: "Custom quote",
  },
  {
    slug: "credit-funding",
    index: "08",
    title: "Credit Repair & Funding",
    lede: "This is the part no other design studio offers. A brand gets you noticed; capital gets you built. We repair personal credit, stand up business credit, and position you in front of a funding partner network.",
    icon: "shield",
    deliverables: [
      "Personal credit repair from $499",
      "Business credit setup — $999",
      "Funding readiness assessment — $299",
      "Access to funding partner network",
      "Credit monitoring & guidance — $99/month",
    ],
    from: "$149+",
  },
];

/** "How to turn your music into a brand" — from artist to CEO. */
export const artistLadder = [
  { step: "Identity", note: "Define who you are", icon: "mic" as IconName },
  { step: "Audience", note: "Build a fanbase", icon: "audience" as IconName },
  { step: "Branding", note: "Create a distinct look", icon: "crown" as IconName },
  { step: "Growth", note: "Scale your reach", icon: "chartArrow" as IconName },
  { step: "Income", note: "Multiple streams", icon: "dollar" as IconName },
  {
    step: "Legacy",
    note: "Build something bigger than music",
    icon: "clapper" as IconName,
  },
];

/** "Stop waiting. Start building." */
export const buildLadder = [
  { step: "Mindset Shift", icon: "ladder" as IconName },
  { step: "Take Action", icon: "target" as IconName },
  { step: "Build Daily Discipline", icon: "brick" as IconName },
  { step: "Create Value", icon: "chartArrow" as IconName },
  { step: "Achieve Freedom", icon: "trophy" as IconName },
];
