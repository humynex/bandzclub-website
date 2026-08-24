"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Icon } from "@/components/icons";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "signal" | "chrome" | "ghost";
  className?: string;
  withArrow?: boolean;
  disabled?: boolean;
};

const surfaces = {
  signal:
    "bg-[var(--signal)] text-white border-transparent hover:bg-[var(--signal-hi)] shadow-[inset_0_1px_0_rgb(255_255_255/0.32),0_16px_34px_-20px_var(--signal)]",
  chrome:
    "bg-[linear-gradient(178deg,#f2f5f8_0%,#c3cad2_44%,#7d858d_52%,#dfe5ea_100%)] text-[#0b0c0d] border-transparent shadow-[inset_0_1px_0_rgb(255_255_255/0.85),0_16px_34px_-22px_rgb(0_0_0/0.95)]",
  ghost:
    "bg-transparent text-[var(--text)] border-[var(--hairline-hi)] hover:border-white/40 hover:bg-white/[0.04]",
} as const;

/**
 * Cursor-attracted CTA. Motion values only — putting pointer position in
 * React state re-renders on every mousemove and collapses on mobile.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "signal",
  className = "",
  withArrow = false,
  disabled = false,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 18, mass: 0.4 });
  const y = useSpring(my, { stiffness: 200, damping: 18, mass: 0.4 });
  const labelX = useTransform(x, (v) => v * 0.35);
  const labelY = useTransform(y, (v) => v * 0.35);

  function track(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  }

  function release() {
    mx.set(0);
    my.set(0);
  }

  const shell =
    "relative inline-flex items-center justify-center gap-2.5 rounded-full border px-7 py-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.16em] transition-colors duration-200 active:scale-[0.98] disabled:opacity-45 disabled:pointer-events-none";

  const inner = (
    <motion.span
      style={{ x: labelX, y: labelY }}
      className="pointer-events-none inline-flex items-center gap-2.5"
    >
      {children}
      {withArrow && <Icon name="arrow" className="h-4 w-4" />}
    </motion.span>
  );

  return (
    <motion.span
      ref={ref}
      style={{ x, y }}
      onMouseMove={track}
      onMouseLeave={release}
      className="inline-block"
    >
      {href ? (
        <Link
          href={href}
          className={`${shell} ${surfaces[variant]} ${className}`}
        >
          {inner}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={`${shell} ${surfaces[variant]} ${className}`}
        >
          {inner}
        </button>
      )}
    </motion.span>
  );
}
