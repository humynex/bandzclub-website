"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/icons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { Package } from "@/data/packages";

/**
 * Five vault doors. On desktop every tier stays open and readable side by
 * side — hiding prices behind an interaction costs conversions. On mobile the
 * same data becomes a disclosure list so the page does not run to ten screens.
 */
export function PackageRail({ items }: { items: Package[] }) {
  const [open, setOpen] = useState<string | null>(items[1]?.slug ?? null);

  return (
    <>
      {/* ── Desktop: dense five-column rail ─────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-5">
        {items.map((p, i) => (
          <motion.article
            key={p.slug}
            data-motion=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: i * 0.05,
            }}
            className="group relative flex flex-col border-l border-[var(--hairline)] px-6 pb-8 pt-9 transition-colors duration-300 last:border-r hover:bg-white/[0.03]"
            style={
              p.popular
                ? {
                    background:
                      "linear-gradient(180deg,rgba(228,38,44,0.09),transparent 42%)",
                  }
                : undefined
            }
          >
            {p.popular && (
              <span className="absolute -top-px left-0 right-0 h-px bg-[var(--signal)]" />
            )}

            <Icon
              name={p.crest}
              className="h-8 w-8 text-[var(--chrome-1)] transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="mt-6 font-display text-2xl uppercase leading-[0.95] tracking-tight text-[var(--chrome-1)]">
              {p.name}
              <span className="block text-[var(--chrome-3)]">{p.sub}</span>
            </h3>

            <p className="tabular mt-5 font-display text-[2.5rem] leading-none text-white">
              {p.price}
            </p>
            <p className="mt-3 min-h-[2.5rem] text-[0.6875rem] uppercase leading-snug tracking-[0.12em] text-[var(--text-faint)]">
              {p.priceNote}
            </p>

            {p.popular && (
              <p className="mt-1 inline-flex w-fit items-center gap-2 bg-[var(--signal)] px-2.5 py-1 text-[0.5625rem] font-bold uppercase tracking-[0.2em] text-white">
                Most popular
              </p>
            )}

            <ul className="mt-7 flex-1 space-y-2.5 border-t border-[var(--hairline)] pt-6">
              {p.includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[0.75rem] leading-snug text-[var(--text-dim)]"
                >
                  <Icon
                    name="check"
                    className="mt-[3px] h-3 w-3 shrink-0 text-[var(--chrome-2)]"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <MagneticButton
                href={`/contact?package=${p.slug}`}
                variant={p.popular ? "signal" : "ghost"}
                className="!px-5 !py-2.5 !text-[0.625rem]"
              >
                Choose
              </MagneticButton>
            </div>
          </motion.article>
        ))}
      </div>

      {/* ── Mobile / tablet: disclosure list ────────────────── */}
      <div className="lg:hidden">
        {items.map((p) => {
          const isOpen = open === p.slug;
          return (
            <article
              key={p.slug}
              className="border-b border-[var(--hairline)] first:border-t"
              style={
                p.popular
                  ? {
                      background:
                        "linear-gradient(90deg,rgba(228,38,44,0.08),transparent 60%)",
                    }
                  : undefined
              }
            >
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : p.slug)}
                  aria-expanded={isOpen}
                  aria-controls={`pkg-${p.slug}`}
                  className="flex w-full items-center gap-4 px-1 py-6 text-left"
                >
                  <Icon
                    name={p.crest}
                    className="h-6 w-6 shrink-0 text-[var(--chrome-1)]"
                  />
                  <span className="flex-1">
                    <span className="block font-display text-lg uppercase leading-tight tracking-tight text-[var(--chrome-1)]">
                      {p.name} {p.sub}
                    </span>
                    <span className="mt-1 block text-[0.625rem] uppercase tracking-[0.14em] text-[var(--text-faint)]">
                      {p.priceNote}
                    </span>
                  </span>
                  <span className="tabular font-display text-2xl text-white">
                    {p.price}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="shrink-0 text-[var(--text-faint)]"
                  >
                    <Icon name="arrow" className="h-4 w-4" />
                  </motion.span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`pkg-${p.slug}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-1 pb-8">
                      {p.popular && (
                        <p className="mb-4 inline-flex bg-[var(--signal)] px-2.5 py-1 text-[0.5625rem] font-bold uppercase tracking-[0.2em] text-white">
                          Most popular
                        </p>
                      )}
                      <ul className="space-y-2.5">
                        {p.includes.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 text-[0.8125rem] leading-snug text-[var(--text-dim)]"
                          >
                            <Icon
                              name="check"
                              className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[var(--chrome-2)]"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7">
                        <MagneticButton
                          href={`/contact?package=${p.slug}`}
                          variant={p.popular ? "signal" : "chrome"}
                          withArrow
                        >
                          Choose {p.name} {p.sub}
                        </MagneticButton>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </>
  );
}
