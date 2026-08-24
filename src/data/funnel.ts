import type { IconName } from "@/components/icons";

export const funnelHero = {
  headline: ["We build brands that", "get noticed & make money."],
  sub: "Branding, websites, content, and the credit and funding to back it — built for entrepreneurs who are done looking small.",
  cta: "Book a free brand strategy call",
  ctaSub: "20 minutes. No pitch deck. We'll tell you what we'd fix first.",
};

/**
 * The Problem — Bandzclub's own four failures, transcribed from the
 * "Why Most Brands Fail & How To Avoid It" graphic. Using the studio's real
 * language rather than something invented keeps the site and the feed saying
 * the same thing, which is the whole point of a brand.
 */
export const problemsEyebrow = "Why most brands fail";
export const problemsKicker = [
  "Build a brand that lasts.",
  "Build a brand that makes money.",
];

export const problems = [
  {
    label: "No strategy",
    line: "You don't have a system.",
    detail:
      "No funnel, no follow-up, no credit, no capital. Every sale starts from zero because there's nothing underneath it holding the business up.",
    icon: "target" as IconName,
  },
  {
    label: "No identity",
    line: "Your brand looks average.",
    detail:
      "A logo somebody made in an afternoon, colours that change on every flyer, and a feed that looks like seven different companies. People price you by how you look before you ever open your mouth.",
    icon: "penNib" as IconName,
  },
  {
    label: "No message",
    line: "Nobody can tell what you do.",
    detail:
      "You post, it gets seen, and nothing happens. No hook, no offer, no reason to act today — so it scrolls past people who would have bought.",
    icon: "megaphone" as IconName,
  },
  {
    label: "No results",
    line: "The work isn't paying you back.",
    detail:
      "Money goes out on flyers, ads and rebrands, and nothing measurable comes back. Without numbers on it you're guessing, and guessing is expensive.",
    icon: "chartArrow" as IconName,
  },
];

/** The Solution — the seven things we actually do about it. */
export const solutions = [
  {
    name: "Branding",
    icon: "crown" as IconName,
    line: "One identity, decided on purpose, with rules that keep it consistent.",
  },
  {
    name: "Logo Design",
    icon: "penNib" as IconName,
    line: "A mark that holds at billboard size and at favicon size. You own the files.",
  },
  {
    name: "Websites",
    icon: "globe" as IconName,
    line: "Custom sites and stores that load fast and turn traffic into enquiries.",
  },
  {
    name: "Social Media Content",
    icon: "clapper" as IconName,
    line: "Graphics, video and thumbnails that look like one brand, not seven.",
  },
  {
    name: "Marketing Strategy",
    icon: "chartArrow" as IconName,
    line: "A plan with dates on it, reviewed monthly instead of guessed at.",
  },
  {
    name: "Credit Repair & Funding",
    icon: "shield" as IconName,
    line: "Personal credit repaired, business credit built, capital lined up.",
  },
  {
    name: "Business Setup",
    icon: "box" as IconName,
    line: "LLC and structure guidance so the business exists properly on paper.",
  },
];

/** What the call actually is — kills the "is this a sales trap" objection. */
export const callSteps = [
  {
    n: "01",
    t: "Tell us where you are",
    d: "A short application. What you're building, what's not working, what you've already tried.",
  },
  {
    n: "02",
    t: "We look before we talk",
    d: "We go through your brand, your site and your socials first, so the call isn't spent gathering basics.",
  },
  {
    n: "03",
    t: "You leave with a direction",
    d: "The one thing we'd fix first and what it would take. Whether you hire us or not.",
  },
];
