/**
 * REAL CLIENT PROOF ONLY.
 *
 * Nothing in this file is invented — no placeholder names, no made-up
 * percentages, no stock headshots. Fake proof is worse than no proof: one
 * prospect who recognises a fabricated review is a lost deal, and in some
 * jurisdictions invented testimonials are illegal.
 *
 * Every entry below is transcribed from a graphic Bandzclub actually
 * published. Source file is noted per entry so it can be verified later.
 *
 * Add a real entry and it appears on the funnel automatically. Empty the
 * array and the section disappears rather than showing filler.
 *
 * For `youtubeId`, use the 11-character ID from the video URL.
 */

export type Testimonial = {
  quote: string;
  /** Their handle or name, exactly as they're credited publicly. */
  name: string;
  /** How they're described — "Artist / Entrepreneur", not a job title we made up. */
  role: string;
  /** 1–5, only if they actually gave a rating. */
  stars?: number;
  /** Optional: a video review. */
  youtubeId?: string;
  /** Where this quote came from, so it stays auditable. */
  source: string;
};

export type ClientResult = {
  /** e.g. "Rebrand + storefront" */
  what: string;
  /** e.g. "Grind Time Clothing" */
  who: string;
  /** The outcome, in their words or your numbers. Only real figures. */
  outcome: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Bandzclub took our idea and turned it into a real brand that's making money.",
    name: "@KingGB",
    role: "Artist / Entrepreneur",
    stars: 5,
    source: "Client testimonial graphic, @bandzclub.studio",
  },
];

export const clientResults: ClientResult[] = [];

/**
 * Names for the "trusted by" row. INTENTIONALLY EMPTY.
 *
 * The studio's own mockup shows a row reading Awful Lot of Cough Syrup, GB,
 * Hustle Dept., BC Sports, 777 and Money Team — but a name inside a design
 * mockup is not confirmation that the work happened. The founder is
 * confirming which are real clients; until then this stays empty and the
 * section does not render. Do not populate it from the mockup.
 */
export const trustedBy: string[] = [];
