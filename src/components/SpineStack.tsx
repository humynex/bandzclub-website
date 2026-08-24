"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * The stack of book spines from the flyers — the studio's signature motif.
 * Spines fan in on scroll and slide out under the cursor, catching a chrome
 * edge-light. Only the hovered index lives in state; every visual change is
 * a transform, so hovering never re-lays-out the stack.
 */
export function SpineStack({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [hot, setHot] = useState<number | null>(null);

  return (
    <ul
      ref={ref}
      className={`relative flex flex-col gap-[6px] ${className}`}
      onMouseLeave={() => setHot(null)}
    >
      {items.map((label, i) => {
        const active = hot === i;
        return (
          <motion.li
            key={label}
            data-motion=""
            // Rises rather than sliding in from the right: an off-screen
            // x-offset pushes past the viewport edge on narrow phones.
            initial={{ opacity: 0, y: 22, rotateZ: -1.4 }}
            animate={
              inView
                ? { opacity: 1, y: 0, rotateZ: 0 }
                : { opacity: 0, y: 22, rotateZ: -1.4 }
            }
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 20,
              delay: 0.05 * i,
            }}
            onMouseEnter={() => setHot(i)}
            style={{ zIndex: items.length - i }}
          >
            <motion.div
              animate={{ x: active ? 22 : 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative flex h-[52px] items-center overflow-hidden rounded-[3px] pl-6 pr-5 md:h-[58px] md:pl-8"
              style={{
                background:
                  "linear-gradient(177deg,#2c3036 0%,#171a1d 26%,#0e1012 52%,#1c2024 78%,#0a0b0c 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.9), 0 10px 22px -14px rgba(0,0,0,1)",
              }}
            >
              {/* Page-block edge on the left, like the flyer's book stack. */}
              <span
                aria-hidden="true"
                className="absolute inset-y-[3px] left-0 w-[10px] rounded-l-[3px]"
                style={{
                  background:
                    "repeating-linear-gradient(180deg,#8f979f 0px,#8f979f 1px,#3b4046 1px,#3b4046 2.4px)",
                  opacity: 0.55,
                }}
              />
              {/* Edge-light that ignites on hover. */}
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-[3px]"
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.22 }}
                style={{
                  boxShadow:
                    "inset 0 0 0 1px rgba(255,255,255,0.42), inset 0 1px 0 rgba(255,255,255,0.75)",
                }}
              />
              <motion.span
                aria-hidden="true"
                className="absolute inset-y-0 w-16 -skew-x-[18deg]"
                animate={{ x: active ? "26rem" : "-6rem", opacity: active ? 0.5 : 0 }}
                transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background:
                    "linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)",
                }}
              />
              <span
                className="relative font-display text-[0.9375rem] uppercase tracking-[0.2em] transition-colors duration-200 md:text-[1.0625rem]"
                style={{
                  color: active ? "#ffffff" : "#aab2ba",
                  textShadow: active
                    ? "0 1px 0 rgba(0,0,0,0.9), 0 0 18px rgba(210,225,240,0.45)"
                    : "0 1px 0 rgba(0,0,0,0.9)",
                }}
              >
                {label}
              </span>
            </motion.div>
          </motion.li>
        );
      })}
    </ul>
  );
}
