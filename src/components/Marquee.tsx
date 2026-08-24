"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
  wrap,
} from "framer-motion";

/**
 * Kinetic band. Base speed is constant; scroll velocity pushes it faster and
 * flips direction when you scroll up. Everything runs on motion values so the
 * component never re-renders while it moves.
 */
export function Marquee({
  text,
  baseSpeed = 3.2,
  className = "",
}: {
  text: string;
  baseSpeed?: number;
  className?: string;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smooth = useSpring(scrollVelocity, { damping: 50, stiffness: 380 });
  const factor = useTransform(smooth, [-1400, 0, 1400], [-4, 1, 4], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const dir = useRef(1);
  const shell = useRef<HTMLDivElement>(null);
  const live = useRef(true);

  // Don't burn a frame budget scrolling text nobody can see.
  useEffect(() => {
    const el = shell.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        live.current = e.isIntersecting;
      },
      { rootMargin: "80px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!live.current) return;
    let move = dir.current * baseSpeed * (delta / 1000);
    const f = factor.get();
    dir.current = f < 0 ? -1 : 1;
    move += dir.current * move * Math.abs(f);
    baseX.set(baseX.get() + move);
  });

  return (
    <div
      ref={shell}
      className={`relative flex overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden="true"
    >
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="chrome-stack shrink-0 px-6 font-display text-[clamp(2.25rem,7vw,5.5rem)] uppercase leading-none tracking-tight"
          >
            <span className="chrome-face">{text}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
