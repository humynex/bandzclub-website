import type { PriceRow } from "@/data/packages";
import { Icon, type IconName } from "@/components/icons";

/**
 * Dotted-leader price list — the spec-sheet treatment from the flyer, where
 * the name and the figure are tied together by a rule rather than boxed into
 * a card. Figures use tabular numerals so the column stays aligned.
 */
export function PriceList({
  title,
  icon,
  rows,
  note,
}: {
  title: string;
  icon?: IconName;
  rows: PriceRow[];
  note?: string;
}) {
  return (
    <section className="edge-light bg-[linear-gradient(168deg,rgba(255,255,255,0.045),rgba(0,0,0,0.28))] p-6 md:p-8">
      <h3 className="flex items-center gap-3 font-display text-[0.9375rem] uppercase tracking-[0.28em] text-[var(--chrome-1)]">
        {icon && <Icon name={icon} className="h-5 w-5 text-[var(--chrome-2)]" />}
        {title}
      </h3>

      <dl className="mt-7 space-y-0">
        {rows.map((r) => (
          <div
            key={r.name}
            className="group flex items-baseline gap-2 border-b border-[var(--hairline)] py-3 last:border-b-0"
          >
            <dt className="text-[0.8125rem] uppercase tracking-[0.1em] text-[var(--text-dim)] transition-colors duration-200 group-hover:text-white">
              {r.name}
            </dt>
            <span
              aria-hidden="true"
              className="min-w-6 flex-1 translate-y-[-3px] border-b border-dotted border-[var(--chrome-5)]"
            />
            <dd className="tabular shrink-0 text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-[var(--chrome-1)]">
              {r.price}
            </dd>
          </div>
        ))}
      </dl>

      {note && (
        <p className="mt-6 text-xs leading-relaxed text-[var(--text-faint)]">
          {note}
        </p>
      )}
    </section>
  );
}
