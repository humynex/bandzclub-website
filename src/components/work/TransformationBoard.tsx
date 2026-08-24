"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlaqueFrame } from "@/components/ui/Surfaces";
import { transformations } from "@/data/transformations";

/** How long each pair holds before the board advances. */
const ROTATE_MS = 60_000;

function Face({
  item,
  side,
  className,
}: {
  item: (typeof transformations)[number];
  side: "before" | "after";
  className?: string;
}) {
  if ("Before" in item) {
    const C = side === "before" ? item.Before : item.After;
    return <C className={className} />;
  }
  return (
    <Image
      src={side === "before" ? item.beforeSrc : item.afterSrc}
      alt={`${item.client} — ${side}`}
      fill
      sizes="(min-width:1024px) 60vw, 100vw"
      className={`object-cover ${className ?? ""}`}
    />
  );
}

/**
 * Draggable before/after reveal that rotates through every real
 * transformation on file. The divider is a real range input, so it is
 * keyboard and screen-reader operable — dragging is the enhancement, not the
 * only way in.
 *
 * Rotation pauses on hover, on focus, and whenever the visitor has moved the
 * slider themselves: yanking the image out from under someone mid-compare is
 * the kind of detail that makes a site feel like it's fighting you.
 */
export function TransformationBoard() {
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState(52);
  const [held, setHeld] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const item = transformations[index];
  const many = transformations.length > 1;

  const setFromClientX = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(98, Math.max(2, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const go = useCallback((next: number) => {
    setIndex(next);
    setPos(52); // reset the reveal so each pair is introduced the same way
  }, []);

  useEffect(() => {
    if (!many || held) return;
    const t = window.setTimeout(
      () => go((index + 1) % transformations.length),
      ROTATE_MS,
    );
    return () => clearTimeout(t);
  }, [index, held, many, go]);

  return (
    <figure
      className="m-0"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      <PlaqueFrame>
        <div
          ref={box}
          className="relative aspect-[16/10] w-full touch-pan-y select-none overflow-hidden"
          onPointerDown={(e) => {
            dragging.current = true;
            setHeld(true);
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
            setFromClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (dragging.current) setFromClientX(e.clientX);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
          onPointerCancel={() => {
            dragging.current = false;
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={item.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Face item={item} side="after" className="absolute inset-0" />
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              >
                <Face item={item} side="before" className="absolute inset-0" />
              </div>
            </motion.div>
          </AnimatePresence>

          <span className="pointer-events-none absolute left-3 top-3 rounded-sm border border-white/15 bg-black/55 px-2.5 py-1 text-[0.5625rem] font-semibold uppercase tracking-[0.22em] text-[var(--chrome-2)] backdrop-blur-sm">
            Before
          </span>
          <span className="pointer-events-none absolute right-3 top-3 rounded-sm border border-[var(--signal)]/40 bg-black/55 px-2.5 py-1 text-[0.5625rem] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
            After
          </span>

          <div
            className="pointer-events-none absolute inset-y-0 w-px"
            style={{
              left: `${pos}%`,
              background:
                "linear-gradient(180deg,transparent,#ffffff 12%,#c9d1d9 50%,#ffffff 88%,transparent)",
              boxShadow: "0 0 14px rgba(210,225,240,0.55)",
            }}
          >
            <span
              className="absolute top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
              style={{
                background:
                  "linear-gradient(178deg,#f4f7fa,#b9c1c9 46%,#6e757d 52%,#e2e8ee)",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M9.5 7.5 5.5 12l4 4.5M14.5 7.5l4 4.5-4 4.5"
                  fill="none"
                  stroke="#14171a"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <label className="sr-only" htmlFor="tx-reveal">
            Reveal the {item.client} rebrand
          </label>
          <input
            id="tx-reveal"
            type="range"
            min={2}
            max={98}
            value={pos}
            onChange={(e) => {
              setPos(Number(e.target.value));
              setHeld(true);
            }}
            className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
            aria-valuetext={`${Math.round(pos)}% original logo shown`}
          />
        </div>
      </PlaqueFrame>

      <figcaption className="mt-4">
        <div className="flex items-center justify-between gap-4 text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--text-faint)]">
          <span>
            {item.client} &middot; {item.discipline}
          </span>
          <span className="hidden sm:inline">Drag to compare</span>
        </div>
        <p className="mt-3 max-w-[54ch] text-[0.875rem] leading-relaxed text-[var(--text-dim)]">
          {item.note}
        </p>

        {many && (
          <div className="mt-5 flex items-center gap-2" role="tablist">
            {transformations.map((t, i) => (
              <button
                key={t.slug}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show ${t.client}`}
                onClick={() => go(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-[var(--signal)]"
                    : "w-4 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </figcaption>
    </figure>
  );
}
