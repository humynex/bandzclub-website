/**
 * MEET THE OWNER — REAL DETAILS ONLY.
 *
 * Ships empty on purpose. The whole point of this section is proving there's
 * a person behind the studio, so an invented name or a written-for-him bio
 * would defeat it exactly. The section does not render until `name` and
 * `bio` are both filled in.
 *
 * To turn it on:
 *   1. Drop a real photo in /public/about/ (a clean portrait, not a composite
 *      flyer — the flyer images are graphics, not photographs).
 *   2. Fill in name, role, bio and optionally the facts below.
 *
 * `bio` should be in his own words. If you're not sure what to write, the
 * strongest version answers three things: what he did before this, why he
 * started the studio, and who he most likes working with.
 */

export type Owner = {
  name: string;
  role: string;
  /** Two or three short paragraphs, first person. */
  bio: string[];
  /** Primary portrait, path under /public. */
  photo?: string;
  /** Supporting shots from the same shoot, used in the gallery strip. */
  gallery?: { src: string; alt: string }[];
  /** Optional pull quote — something he'd actually say. */
  quote?: string;
  /** Short verifiable facts. Leave empty rather than padding it out. */
  facts?: { label: string; value: string }[];
};

export const owner: Owner = {
  name: "CEO Shock",
  role: "Founder — Bandzclub & Bandzclub Creative Studio",

  // Supplied by him, kept in his own words and his own voice. Not rewritten.
  bio: [
    "Born November 17, 1992, in Philadelphia, CEO Shock is an entrepreneur, creative visionary, and founder of Bandzclub and Bandzclub Creative Studio. After relocating to Houston, Texas, he began a new chapter focused on expanding his vision and helping entrepreneurs transform ideas into profitable brands.",
    "Through Bandzclub Creative Studio, his mission is to provide the branding, creative direction, strategy, content, websites, and business development needed to turn a vision into something people can see, understand, connect with, and buy from.",
  ],

  quote: "Philadelphia built the hunger. Houston represents the expansion.",

  facts: [
    { label: "From", value: "Philadelphia, PA" },
    { label: "Based", value: "Houston, TX" },
    { label: "Founded", value: "Bandzclub · Bandzclub Creative Studio" },
    { label: "The mission", value: "Build brands, businesses and legacies" },
  ],

  photo: "/owner/portrait.jpg",
  gallery: [
    { src: "/owner/standing.jpg", alt: "CEO Shock photographed on location" },
    { src: "/owner/walking.jpg", alt: "CEO Shock walking through the venue" },
  ],
};

/** The written introduction renders only once there's a real person to name. */
export const hasOwner = Boolean(owner.name && owner.bio.length);

/** Photos can carry the section on their own before the words arrive. */
export const hasOwnerPhotos = Boolean(owner.photo);
