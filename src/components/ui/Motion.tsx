"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

export const riseIn: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: spring },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

/** Offset kept under the 20px gutter so the pre-reveal state never sits
 *  outside the viewport on a 375px phone. */
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: spring },
};

type SectionProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
};

/** Parent orchestrator. Children must be <AnimatedItem> in the same tree. */
export function AnimatedSection({
  children,
  className = "",
  as = "section",
  id,
}: SectionProps) {
  const M = motion[as as "section"] ?? motion.section;
  return (
    <M
      id={id}
      data-motion=""
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
    >
      {children}
    </M>
  );
}

export function AnimatedItem({
  children,
  className = "",
  variant = riseIn,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: Variants;
  as?: ElementType;
}) {
  const M = motion[as as "div"] ?? motion.div;
  return (
    <M data-motion="" className={className} variants={variant}>
      {children}
    </M>
  );
}
