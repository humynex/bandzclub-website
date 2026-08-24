"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { RingLogo } from "@/components/RingLogo";
import { nav, site } from "@/data/site";
import { Icon } from "@/components/icons";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  /** href of the desktop dropdown currently open, or null. */
  const [menu, setMenu] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    const next = v > 24;
    if (next !== lifted) setLifted(next);
  });

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  // Escape closes the dropdown without moving focus off the trigger.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          lifted
            ? "border-b border-[var(--hairline)] bg-[rgb(6_6_7/0.72)] backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 md:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={`${site.name} — home`}
          >
            <RingLogo size={38} priority />
            <span className="hidden leading-none sm:block">
              <span className="block text-[0.8125rem] font-semibold uppercase tracking-[0.22em] text-[var(--chrome-1)]">
                Bandzclub
              </span>
              <span className="mt-1 block text-[0.5625rem] uppercase tracking-[0.34em] text-[var(--text-faint)]">
                Creative Studio
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              const trigger = (
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  aria-expanded={item.children ? menu === item.href : undefined}
                  className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.75rem] font-medium uppercase tracking-[0.16em] transition-colors duration-200 ${
                    active
                      ? "text-white"
                      : "text-[var(--text-faint)] hover:text-[var(--chrome-1)]"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <Icon
                      name="arrow"
                      className={`h-3 w-3 rotate-90 transition-transform duration-300 ${
                        menu === item.href ? "-rotate-90" : ""
                      }`}
                    />
                  )}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-px h-px bg-[linear-gradient(90deg,transparent,var(--chrome-0),transparent)]"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                </Link>
              );

              if (!item.children) {
                return <div key={item.href}>{trigger}</div>;
              }

              return (
                // Hover opens it; focus-within keeps it open for keyboard and
                // screen-reader users, who never fire a mouseenter.
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMenu(item.href)}
                  onMouseLeave={() => setMenu(null)}
                  onFocus={() => setMenu(item.href)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node))
                      setMenu(null);
                  }}
                >
                  {trigger}
                  <AnimatePresence>
                    {menu === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4, transition: { duration: 0.14 } }}
                        transition={{ type: "spring", stiffness: 340, damping: 30 }}
                        className="absolute left-1/2 top-full z-10 w-[320px] -translate-x-1/2 pt-3"
                      >
                        <div className="nav-menu overflow-hidden rounded-[14px] p-1.5">
                          <span
                            aria-hidden
                            className="signal-rule absolute inset-x-0 top-0"
                          />
                          {item.children.map((child) => {
                            const on = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                aria-current={on ? "page" : undefined}
                                className={`group/item block rounded-[10px] px-4 py-3 transition-colors duration-200 ${
                                  on ? "bg-white/[0.06]" : "hover:bg-white/[0.045]"
                                }`}
                              >
                                <span className="flex items-center justify-between gap-3">
                                  <span className="font-display text-[0.8125rem] uppercase tracking-[0.1em] text-[var(--chrome-1)]">
                                    {child.label}
                                  </span>
                                  <Icon
                                    name="arrow"
                                    className="h-3 w-3 shrink-0 text-[var(--text-faint)] transition-transform duration-300 group-hover/item:translate-x-1"
                                  />
                                </span>
                                <span className="mt-1 block text-[0.6875rem] leading-snug tracking-wide text-[var(--text-faint)]">
                                  {child.blurb}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="hidden rounded-full bg-[var(--signal)] px-5 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[var(--signal-hi)] sm:inline-block"
            >
              Book a call
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center rounded-full border border-[var(--hairline)] text-[var(--chrome-1)] lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <motion.span
                  className="absolute inset-x-0 top-0 h-px bg-current"
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                />
                <motion.span
                  className="absolute inset-x-0 top-1.5 h-px bg-current"
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="absolute inset-x-0 bottom-0 h-px bg-current"
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="border-b border-[var(--hairline)] bg-[rgb(6_6_7/0.97)] backdrop-blur-2xl lg:hidden"
          >
            <nav
              className="mx-auto max-w-[1400px] px-5 pb-8 pt-2"
              aria-label="Mobile"
            >
              {[
                ...nav,
                { href: "/book", label: "Book a call" },
                { href: "/contact", label: "Contact" },
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, type: "spring", stiffness: 200, damping: 22 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between border-b border-[var(--hairline)] py-4 font-display text-2xl uppercase tracking-wide text-[var(--chrome-1)]"
                  >
                    {item.label}
                    <Icon name="arrow" className="h-4 w-4 text-[var(--text-faint)]" />
                  </Link>
                  {/* Sub-pages are listed inline rather than behind an accordion
                      — one tap to any price list instead of two. */}
                  {"children" in item && item.children && (
                    <div className="border-b border-[var(--hairline)] pb-3 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between py-2.5 text-[0.8125rem] uppercase tracking-[0.14em] text-[var(--text-faint)]"
                        >
                          {child.label}
                          <Icon
                            name="arrow"
                            className="h-3 w-3 text-[var(--chrome-5)]"
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
