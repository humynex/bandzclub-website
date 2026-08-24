import type { ComponentType } from "react";
import { GrindTimeAfter, GrindTimeBefore } from "@/components/work/GrindTimeMark";

/**
 * Before/after pairs for the rotating transformation board.
 *
 * REAL REBRANDS ONLY. Each pair must be work that actually happened — a
 * fabricated "before" is just a straw man, and anyone who recognises the
 * client will know. Add a pair here and the board starts rotating through it
 * automatically; with a single pair it simply doesn't rotate.
 *
 * A pair supplies either vector marks (`Before`/`After` components) or a pair
 * of image paths, so photographed work drops in the same way drawn work does.
 */
export type Transformation = {
  slug: string;
  client: string;
  discipline: string;
  /** One line on what actually changed. */
  note: string;
} & (
  | { Before: ComponentType<{ className?: string }>; After: ComponentType<{ className?: string }> }
  | { beforeSrc: string; afterSrc: string }
);

export const transformations: Transformation[] = [
  {
    slug: "grind-time",
    client: "Grind Time Clothing",
    discipline: "Identity rebrand",
    note: "A circled letter in a system font became a crested chrome identity that stamps onto a hoodie, a hangtag and a profile picture without being redrawn.",
    Before: GrindTimeBefore,
    After: GrindTimeAfter,
  },
];
