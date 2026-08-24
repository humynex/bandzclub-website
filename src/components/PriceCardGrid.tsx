import Link from "next/link";
import type { PriceRow } from "@/data/packages";
import { Icon, type IconName } from "@/components/icons";

/**
 * The package-card treatment applied to single services, so every priced page
 * on the site is laid out the same way: bordered column, icon, name, figure,
 * then the action. The dotted price list this replaces read as a menu; cards
 * read as things you can choose, which is the job of the page.
 */
export function PriceCardGrid({
  rows,
  icons,
  cta = "Choose",
  ctaHref = "/book",
  note,
}: {
  rows: PriceRow[];
  /** Per-row icon, keyed by row name. Falls back to a neutral mark. */
  icons?: Record<string, IconName>;
  cta?: string;
  ctaHref?: string;
  note?: string;
}) {
  return (
    <>
      <ul className="grid gap-px bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rows.map((r) => (
          <li
            key={r.name}
            className="signal-card group flex flex-col bg-[var(--void)] p-6 md:p-7"
          >
            <Icon
              name={icons?.[r.name] ?? "sparkle"}
              className="h-6 w-6 text-[var(--chrome-1)] transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="mt-6 font-display text-[1.05rem] uppercase leading-tight tracking-tight text-[var(--chrome-1)]">
              {r.name}
            </h3>

            <p className="tabular mt-4 font-display text-[1.9rem] leading-none text-white">
              {r.price}
            </p>

            {r.what && (
              <p className="mt-5 border-t border-[var(--hairline)] pt-5 text-[0.875rem] leading-relaxed text-[var(--text-dim)]">
                {r.what}
              </p>
            )}

            <div className="flex-1" />

            <Link
              href={ctaHref}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--hairline)] px-5 py-2.5 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-[var(--chrome-1)] transition-colors duration-200 group-hover:border-[var(--signal)] group-hover:bg-[var(--signal)] group-hover:text-white"
            >
              {cta}
              <Icon name="arrow" className="h-3 w-3" />
            </Link>
          </li>
        ))}
      </ul>

      {note && (
        <p className="mt-6 max-w-[70ch] text-[0.8125rem] leading-relaxed text-[var(--text-faint)]">
          {note}
        </p>
      )}
    </>
  );
}
