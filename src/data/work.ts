/**
 * Case studies backed by real artwork the studio produced. Every image here
 * came from the founder's own files — nothing is stock and nothing is a
 * mockup of work that didn't happen.
 *
 * `family` separates the two brands that share the Bandzclub name:
 *   "studio"   — Bandzclub Creative Studio, the agency (chrome / red / black)
 *   "label"    — Bandzclub, the streetwear label (sunburst / graffiti)
 * They are deliberately never mixed in the same row: blending a $499 tee
 * brand into a $10,000 agency pitch flattens both.
 */

export type CaseFamily = "studio" | "label";

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  blurb: string;
  family: CaseFamily;
  src: string;
  /** Intrinsic size, so next/image can reserve space and avoid layout shift. */
  width: number;
  height: number;
  /** Tailwind aspect utility for the frame. */
  aspect: string;
  discipline: string[];
};

export const studioCases: CaseStudy[] = [
  {
    slug: "brand-website-development",
    title: "Brand + Website Development",
    kicker: "Recent project",
    blurb:
      "A full identity and site build taken from strategy through launch — desktop and mobile designed together rather than the phone version being an afterthought.",
    family: "studio",
    src: "/work/brand-website-development.png",
    width: 1402,
    height: 1122,
    aspect: "aspect-[1402/1122]",
    discipline: ["Strategy", "Design", "Development", "Launch"],
  },
  {
    slug: "wordmark-range",
    title: "Wordmark Range",
    kicker: "Identity",
    blurb:
      "Ten directions for a single name — brush, bubble, tribal, script, sticker — drawn so the client can see the personality change before committing to one.",
    family: "studio",
    src: "/work/wordmark-sheet.png",
    width: 1024,
    height: 1024,
    aspect: "aspect-square",
    discipline: ["Logo design", "Lettering"],
  },
  {
    slug: "creature-illustration",
    title: "Creature Illustration",
    kicker: "Illustration",
    blurb:
      "Original character artwork delivered twice over: a rendered version for screen, and a flat cut-ready vector for print, patches and decals.",
    family: "studio",
    src: "/work/shark-render.png",
    width: 1536,
    height: 1024,
    aspect: "aspect-[3/2]",
    discipline: ["Illustration", "Mascot", "Vector"],
  },
];

export const labelCases: CaseStudy[] = [
  {
    slug: "streetwear-lookbook",
    title: "Lookbook",
    kicker: "Bandzclub — the label",
    blurb:
      "Campaign imagery for the apparel line: chrome thorn crest, sunburst mark, and a tee-and-trackpant system shot as a group so the pieces read as a uniform.",
    family: "label",
    src: "/work/streetwear-lookbook.png",
    width: 1024,
    height: 1536,
    aspect: "aspect-[2/3]",
    discipline: ["Art direction", "Apparel", "Campaign"],
  },
  {
    slug: "streetwear-capsule",
    title: "Capsule Drop",
    kicker: "Bandzclub — the label",
    blurb:
      "Product-led styling on a chrome mannequin — graphic tee, sideline-printed pants and outerwear laid out so each piece can be sold on its own.",
    family: "label",
    src: "/work/streetwear-capsule.png",
    width: 1024,
    height: 1536,
    aspect: "aspect-[2/3]",
    discipline: ["Product design", "Photography direction"],
  },
  {
    slug: "jersey-concept",
    title: "Jersey Concept",
    kicker: "Bandzclub — the label",
    blurb:
      "Illustrated concept art for a baseball-jersey drop, worked up as artwork first so the cut, the number and the placement could be judged before sampling.",
    family: "label",
    src: "/work/jersey-concept.jpg",
    width: 1080,
    height: 1080,
    aspect: "aspect-square",
    discipline: ["Concept art", "Apparel graphics"],
  },
];
