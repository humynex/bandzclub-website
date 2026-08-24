/**
 * Content pillars taken from the studio's own thumbnails. `youtubeId` is left
 * blank on purpose — no invented video IDs, view counts or dates. Drop the
 * real 11-character IDs in and the cards become live embeds automatically.
 */
export type Episode = {
  slug: string;
  title: string;
  kicker: string;
  blurb: string;
  points: string[];
  youtubeId?: string;
  /**
   * The real published thumbnail, where one exists. Episodes without one fall
   * back to a generated chrome card rather than a stock image.
   */
  thumb?: string;
};

export const channelUrl = "https://youtube.com/@bandzclub";

export const episodes: Episode[] = [
  {
    slug: "why-brands-fail",
    title: "Why Most Brands Fail & How To Avoid It",
    kicker: "Brand strategy",
    blurb:
      "The four holes that sink most brands before they get going — and what to put in place instead.",
    points: ["No strategy", "No identity", "No message", "No results"],
    thumb: "/content/why-brands-fail.png",
  },
  {
    slug: "three-things-to-win",
    title: "3 Things Every Brand Needs To Win",
    kicker: "Brand strategy",
    blurb:
      "Strip it back to the three things that decide whether a brand gets picked or scrolled past.",
    points: ["A clear identity", "A reason to care", "A way to buy"],
    thumb: "/content/three-things-every-brand.png",
  },
  {
    slug: "start-your-brand",
    title: "Start Your Brand With Bandzclub",
    kicker: "Getting started",
    blurb:
      "What the studio actually does, end to end — branding, website, content, marketing and strategy.",
    points: ["Branding", "Website", "Content", "Marketing", "Strategy"],
    thumb: "/content/start-your-brand.png",
  },
  {
    slug: "stop-waiting",
    title: "Stop Waiting. Start Building.",
    kicker: "Mindset",
    blurb:
      "The five things that separate the people who talk about starting from the people who have already started.",
    points: [
      "Mindset Shift",
      "Take Action",
      "Build Daily Discipline",
      "Create Value",
      "Achieve Freedom",
    ],
  },
  {
    slug: "music-into-a-brand",
    title: "How To Turn Your Music Into A Brand",
    kicker: "For artists",
    blurb:
      "From artist to CEO. Build a legacy that lasts — identity, audience, branding, growth, income, legacy.",
    points: [
      "Identity — define who you are",
      "Audience — build a fanbase",
      "Branding — create a distinct look",
      "Growth — scale your reach",
      "Income — multiple streams",
      "Legacy — build something bigger than music",
    ],
  },
  {
    slug: "inside-the-studio",
    title: "Inside Bandzclub Creative Studio",
    kicker: "The studio",
    blurb:
      "What actually happens between the first call and the finished brand — and why credit and funding sit in the same room as the design.",
    points: [
      "Branding",
      "Logo Design",
      "Website Design",
      "Marketing",
      "Social Media",
      "Content Creation",
    ],
  },
];
