import { ChromeText } from "@/components/ui/ChromeText";
import { AnimatedItem } from "@/components/ui/Motion";
import { Eyebrow, PlaqueFrame } from "@/components/ui/Surfaces";
import { Icon } from "@/components/icons";
import { clientResults, testimonials } from "@/data/testimonials";

/**
 * Renders client proof only when there is real proof to render. With an empty
 * data file this collapses to nothing rather than showing an empty row or,
 * worse, invented reviews.
 */
export function Proof() {
  if (!testimonials.length && !clientResults.length) return null;

  return (
    <section className="border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
        <AnimatedItem>
          <Eyebrow>What clients say</Eyebrow>
          <ChromeText
            as="h2"
            className="mt-5 block font-display text-[clamp(2.1rem,6.2vw,4.4rem)] uppercase leading-[0.88] tracking-tight"
          >
            Don&rsquo;t take
            <br />
            our word.
          </ChromeText>
        </AnimatedItem>

        {clientResults.length > 0 && (
          <AnimatedItem className="mt-14 grid gap-px bg-[var(--hairline)] md:grid-cols-3">
            {clientResults.map((r) => (
              <div key={r.who + r.what} className="bg-[var(--void)] p-7">
                <p className="label-micro">{r.what}</p>
                <p className="mt-4 font-display text-[clamp(1.2rem,2.6vw,1.7rem)] uppercase leading-tight tracking-tight text-[var(--chrome-1)]">
                  {r.who}
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
                  {r.outcome}
                </p>
              </div>
            ))}
          </AnimatedItem>
        )}

        {testimonials.length > 0 && (
          <AnimatedItem
            className={
              testimonials.length === 1
                ? "mt-14"
                : "mt-14 grid gap-8 lg:grid-cols-2"
            }
          >
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className={testimonials.length === 1 ? "m-0 max-w-[860px]" : "m-0"}
              >
                {t.youtubeId && (
                  <PlaqueFrame className="mb-6">
                    <div className="relative aspect-video">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}`}
                        title={`${t.name} — ${t.role}`}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </PlaqueFrame>
                )}
                <blockquote className="edge-light relative overflow-hidden bg-[linear-gradient(168deg,rgba(255,255,255,0.045),rgba(0,0,0,0.28))] p-7 md:p-10">
                  {/* the red hairline that runs through every Bandzclub graphic */}
                  <span aria-hidden className="signal-rule absolute inset-x-0 top-0" />

                  {typeof t.stars === "number" && (
                    <div
                      className="flex gap-1.5"
                      role="img"
                      aria-label={`${t.stars} out of 5 stars`}
                    >
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Icon
                          key={i}
                          name="starFilled"
                          className="h-4 w-4 text-[var(--signal)]"
                        />
                      ))}
                    </div>
                  )}

                  <p className="mt-6 font-display text-[clamp(1.35rem,3.4vw,2.15rem)] uppercase leading-[1.12] tracking-tight text-[var(--chrome-1)]">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <figcaption className="mt-7 border-t border-[var(--hairline)] pt-5">
                    <span className="block font-display text-base uppercase tracking-[0.1em] text-white">
                      {t.name}
                    </span>
                    <span className="mt-1 block text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--text-faint)]">
                      {t.role}
                    </span>
                  </figcaption>
                </blockquote>
              </figure>
            ))}
          </AnimatedItem>
        )}
      </div>
    </section>
  );
}
