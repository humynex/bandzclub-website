"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useInView } from "framer-motion";

type Props = {
  children: ReactNode;
  /** Rendered element. Use a heading tag where the hierarchy calls for one. */
  as?: ElementType;
  className?: string;
  /** Skewed + brush-striated variant — the italic slash lines on the flyers. */
  kinetic?: boolean;
  /** Fire the specular sweep when the text scrolls into view. */
  sweepOnView?: boolean;
  /** Fire the specular sweep on hover instead. */
  sweepOnHover?: boolean;
};

/**
 * Three stacked layers make the metal read: a dark extruded side offset
 * down-right, the polished face, and a travelling specular bar masked to the
 * glyphs. The face gradient's hard flip at ~49-51% is the horizon line — that
 * step is what separates chrome from a grey gradient.
 */
export function ChromeText({
  children,
  as: As = "span",
  className = "",
  kinetic = false,
  sweepOnView = true,
  sweepOnHover = false,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  // The tag is caller-chosen; narrowing it to one intrinsic element keeps the
  // ref and children types resolvable without a generic component signature.
  const Tag = As as "span";

  return (
    <Tag
      ref={ref}
      className={`chrome-stack ${kinetic ? "chrome-kinetic" : ""} ${className}`}
      data-swept={sweepOnView && inView ? "true" : "false"}
      data-hover-sweep={sweepOnHover ? "true" : "false"}
    >
      <span className="chrome-extrude" aria-hidden="true">
        {children}
      </span>
      <span className="chrome-face">{children}</span>
      <span className="chrome-sweep" aria-hidden="true">
        {children}
      </span>
    </Tag>
  );
}
