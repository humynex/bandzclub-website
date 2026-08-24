import Image from "next/image";
import type { CaseStudy } from "@/data/work";

/**
 * Image-led case cards. The frame does the styling so artwork of very
 * different temperatures (chrome mockups next to a cyan illustration) still
 * sits in one system: same plaque edge, same hairline, same caption rhythm.
 *
 * Hover lifts on transform only — no width/height animation, no layout shift.
 */
export function CaseGrid({
  cases,
  columns = 3,
}: {
  cases: CaseStudy[];
  columns?: 2 | 3;
}) {
  return (
    <ul
      className={`grid gap-8 ${
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {cases.map((c, i) => (
        <li key={c.slug} className="group m-0 flex flex-col">
          <div className="case-frame relative overflow-hidden">
            <div className={`relative ${c.aspect} w-full`}>
              <Image
                src={c.src}
                alt={`${c.title} — ${c.blurb}`}
                width={c.width}
                height={c.height}
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                priority={i === 0}
              />
            </div>
            {/* keeps light artwork from blowing out against the void */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(0,0,0,0.55))]"
            />
          </div>

          <div className="mt-5 flex flex-1 flex-col">
            <p className="text-[0.625rem] uppercase tracking-[0.22em] text-[var(--signal)]">
              {c.kicker}
            </p>
            <h3 className="mt-2 font-display text-[1.35rem] uppercase leading-tight tracking-tight text-[var(--chrome-1)]">
              {c.title}
            </h3>
            <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-[var(--text-dim)]">
              {c.blurb}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 border-t border-[var(--hairline)] pt-4">
              {c.discipline.map((d) => (
                <li
                  key={d}
                  className="text-[0.625rem] uppercase tracking-[0.16em] text-[var(--text-faint)]"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
