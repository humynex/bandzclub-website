"use client";

import { useCallback, useRef, useState } from "react";
import { PlaqueFrame } from "@/components/ui/Surfaces";
import { GrindTimeAfter, GrindTimeBefore } from "./GrindTimeMark";

/**
 * Draggable before/after reveal in a platinum plaque frame. The divider is a
 * real slider input so it is keyboard and screen-reader operable — dragging
 * is the enhancement, not the only way in.
 */
export function GrindTimeBoard() {
  const [pos, setPos] = useState(52);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(98, Math.max(2, next)));
  }, []);

  return (
    <figure className="m-0">
      <PlaqueFrame>
        <div
          ref={box}
          className="relative aspect-[16/10] w-full touch-pan-y select-none overflow-hidden"
          onPointerDown={(e) => {
            dragging.current = true;
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
          <GrindTimeAfter className="absolute inset-0" />

          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <GrindTimeBefore className="absolute inset-0" />
          </div>

          {/* labels */}
          <span className="pointer-events-none absolute left-3 top-3 rounded-sm border border-white/15 bg-black/55 px-2.5 py-1 text-[0.5625rem] font-semibold uppercase tracking-[0.22em] text-[var(--chrome-2)] backdrop-blur-sm">
            Before
          </span>
          <span className="pointer-events-none absolute right-3 top-3 rounded-sm border border-white/15 bg-black/55 px-2.5 py-1 text-[0.5625rem] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
            After
          </span>

          {/* chrome divider */}
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

          <label className="sr-only" htmlFor="gt-reveal">
            Reveal the Grind Time Clothing rebrand
          </label>
          <input
            id="gt-reveal"
            type="range"
            min={2}
            max={98}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
            aria-valuetext={`${Math.round(pos)}% original logo shown`}
          />
        </div>
      </PlaqueFrame>
      <figcaption className="mt-4 flex items-center justify-between text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--text-faint)]">
        <span>Grind Time Clothing &middot; identity rebrand</span>
        <span className="hidden sm:inline">Drag to compare</span>
      </figcaption>
    </figure>
  );
}
