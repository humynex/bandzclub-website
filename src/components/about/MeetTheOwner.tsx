import Image from "next/image";
import { ChromeText } from "@/components/ui/ChromeText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedItem, AnimatedSection } from "@/components/ui/Motion";
import { ChromeRule, Eyebrow, PlaqueFrame } from "@/components/ui/Surfaces";
import { hasOwner, owner } from "@/data/owner";

/**
 * Renders only when there is a real person on file. An empty "meet the owner"
 * with a silhouette and lorem bio does the opposite of what it's for.
 */
export function MeetTheOwner() {
  if (!hasOwner) return null;

  return (
    <AnimatedSection className="border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <AnimatedItem>
            {owner.photo ? (
              <PlaqueFrame>
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={owner.photo}
                    alt={`${owner.name}, ${owner.role}`}
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(0,0,0,0.6))]"
                  />
                </div>
              </PlaqueFrame>
            ) : (
              <div className="case-frame grid aspect-[4/5] place-items-center p-8 text-center">
                <p className="text-[0.8125rem] leading-relaxed text-[var(--text-faint)]">
                  Add a portrait at{" "}
                  <code className="text-[var(--chrome-3)]">
                    /public/about/
                  </code>{" "}
                  and set <code className="text-[var(--chrome-3)]">photo</code>{" "}
                  in <code className="text-[var(--chrome-3)]">owner.ts</code>.
                </p>
              </div>
            )}
          </AnimatedItem>

          <AnimatedItem>
            <Eyebrow>Meet the owner</Eyebrow>
            <ChromeText
              as="h2"
              className="mt-5 block font-display text-[clamp(2.2rem,6vw,4.4rem)] uppercase leading-[0.9] tracking-tight"
            >
              {owner.name}
            </ChromeText>
            <p className="mt-3 font-display text-[0.75rem] uppercase tracking-[0.24em] text-[var(--signal)]">
              {owner.role}
            </p>

            <ChromeRule className="mt-8 w-full max-w-[380px]" />

            <div className="mt-8 space-y-5">
              {owner.bio.map((para) => (
                <p
                  key={para.slice(0, 32)}
                  className="max-w-[58ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]"
                >
                  {para}
                </p>
              ))}
            </div>

            {owner.quote && (
              <blockquote className="edge-light relative mt-10 overflow-hidden bg-[linear-gradient(168deg,rgba(255,255,255,0.045),rgba(0,0,0,0.28))] p-7">
                <span aria-hidden className="signal-rule absolute inset-x-0 top-0" />
                <p className="font-display text-[clamp(1.15rem,2.6vw,1.6rem)] uppercase leading-[1.15] tracking-tight text-[var(--chrome-1)]">
                  &ldquo;{owner.quote}&rdquo;
                </p>
              </blockquote>
            )}

            {owner.facts && owner.facts.length > 0 && (
              <dl className="mt-10 grid gap-px bg-[var(--hairline)] sm:grid-cols-3">
                {owner.facts.map((f) => (
                  <div key={f.label} className="bg-[var(--void)] p-5">
                    <dt className="text-[0.625rem] uppercase tracking-[0.2em] text-[var(--text-faint)]">
                      {f.label}
                    </dt>
                    <dd className="mt-2 font-display text-[1.15rem] uppercase tracking-tight text-[var(--chrome-1)]">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-10">
              <MagneticButton href="/book" variant="signal" withArrow>
                Talk to {owner.name.split(" ")[0]} directly
              </MagneticButton>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
