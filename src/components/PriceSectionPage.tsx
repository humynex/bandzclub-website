import Link from "next/link";
import { ChromeText } from "@/components/ui/ChromeText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedItem, AnimatedSection } from "@/components/ui/Motion";
import { ChromeRule, Eyebrow } from "@/components/ui/Surfaces";
import { Icon } from "@/components/icons";
import { packagesChildren } from "@/data/site";

/**
 * One template for every priced page, so Individual Services, Credit Repair,
 * Add-Ons and Monthly Plans are visibly the same product rather than four
 * pages that drifted apart. Each is laid out as its own small funnel:
 * frame the problem, show the price, then ask for the call.
 */
export function PriceSectionPage({
  eyebrow,
  title,
  lede,
  intro,
  children,
  closer,
  currentHref,
}: {
  eyebrow: string;
  /** Two lines — the second one carries the kinetic chrome treatment. */
  title: [string, string];
  lede: string;
  /** The one-sentence reason this list exists. */
  intro: string;
  children: React.ReactNode;
  closer: string;
  currentHref: string;
}) {
  const siblings = packagesChildren.filter((c) => c.href !== currentHref);

  return (
    <>
      {/* ── 1. FRAME ─────────────────────────────────────────── */}
      <AnimatedSection className="relative">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-[136px] md:px-8 md:pb-20 md:pt-[168px]">
          <AnimatedItem>
            <Eyebrow>{eyebrow}</Eyebrow>
            {/* Each line gets its own block wrapper: ChromeText renders an
                inline-block stack, so a `block` class on it alone leaves the
                two lines running together on one line. */}
            <h1 className="mt-5">
              <span className="sr-only">{title.join(" ")}</span>
              <span aria-hidden className="block">
                <ChromeText
                  as="span"
                  className="font-display text-[clamp(2.3rem,7vw,5.2rem)] uppercase leading-[0.88] tracking-tight"
                >
                  {title[0]}
                </ChromeText>
              </span>
              <span aria-hidden className="mt-1 block">
                <ChromeText
                  as="span"
                  kinetic
                  className="font-display text-[clamp(2.3rem,7vw,5.2rem)] uppercase leading-[0.88] tracking-tight"
                >
                  {title[1]}
                </ChromeText>
              </span>
            </h1>
            <p className="mt-7 max-w-[54ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)] md:text-base">
              {lede}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <ChromeRule className="w-14" />
              <p className="max-w-[46ch] text-[0.8125rem] leading-relaxed text-[var(--text-faint)]">
                {intro}
              </p>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ── 2. THE PRICES ────────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
          <AnimatedItem>{children}</AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ── 3. THE ASK ───────────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
          <AnimatedItem className="mx-auto max-w-[720px] text-center">
            <ChromeText
              as="h2"
              className="block font-display text-[clamp(2rem,6vw,4rem)] uppercase leading-[0.9] tracking-tight"
            >
              Not sure which
              <br />
              one you need?
            </ChromeText>
            <p className="mx-auto mt-6 max-w-[46ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
              {closer}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <MagneticButton href="/book" variant="signal" withArrow>
                Book a free brand strategy call
              </MagneticButton>
              <MagneticButton href="/packages" variant="ghost">
                See the packages
              </MagneticButton>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ── 4. THE REST OF THE PRICE LIST ────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
          <AnimatedItem>
            <Eyebrow>Also priced</Eyebrow>
            <ul className="mt-8 grid gap-px bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-4">
              {siblings.map((s) => (
                <li key={s.href} className="bg-[var(--void)]">
                  <Link
                    href={s.href}
                    className="signal-card group flex h-full flex-col p-6"
                  >
                    <span className="font-display text-[0.9375rem] uppercase tracking-[0.08em] text-[var(--chrome-1)]">
                      {s.label}
                    </span>
                    <span className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-[var(--text-faint)]">
                      {s.blurb}
                    </span>
                    <Icon
                      name="arrow"
                      className="mt-5 h-4 w-4 text-[var(--signal)] transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
