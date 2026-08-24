import type { Metadata } from "next";
import { ChromeText } from "@/components/ui/ChromeText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SpineStack } from "@/components/SpineStack";
import { AnimatedItem, AnimatedSection } from "@/components/ui/Motion";
import { Eyebrow, GlassTile } from "@/components/ui/Surfaces";
import { Icon } from "@/components/icons";
import { artistLadder, chapters, spines } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding, logo design, website design, marketing, social media, content, manufacturer sourcing, and credit repair & funding — from Bandzclub Creative Studio in Houston.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="mx-auto max-w-[1400px] px-5 pb-16 pt-32 md:px-8 md:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <Eyebrow>Services</Eyebrow>
            <ChromeText
              as="h1"
              className="mt-6 block font-display text-[clamp(2.9rem,10vw,7.5rem)] uppercase leading-[0.84] tracking-[-0.02em]"
            >
              Eight
              <br />
              disciplines.
            </ChromeText>
            <ChromeText
              as="p"
              kinetic
              className="mt-3 block font-display text-[clamp(1.5rem,4.6vw,3.2rem)] uppercase leading-[0.92] tracking-tight"
            >
              One studio.
            </ChromeText>
            <p className="mt-8 max-w-[54ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
              Most studios hand you a logo and wish you luck. We take a brand
              from the first sketch through the storefront, the content that
              fills it, and the credit and capital that keep it open.
            </p>
          </div>

          <div className="lg:pb-2">
            <SpineStack items={spines} />
          </div>
        </div>
      </header>

      {/* ── CHAPTERS ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {chapters.map((c, i) => (
          <AnimatedSection
            key={c.slug}
            id={c.slug}
            as="article"
            className="scroll-mt-28 border-t border-[var(--hairline)] py-14 md:py-20"
          >
            <div className="grid gap-8 lg:grid-cols-[7rem_1fr_1fr] lg:gap-12">
              <AnimatedItem>
                <p className="tabular font-display text-[clamp(2.4rem,6vw,4rem)] leading-none text-[var(--chrome-5)]">
                  {c.index}
                </p>
              </AnimatedItem>

              <AnimatedItem>
                <div className="flex items-start gap-4">
                  <span className="glass-tile grid h-12 w-12 shrink-0 place-items-center rounded-[12px]">
                    <Icon
                      name={c.icon}
                      className="h-6 w-6 text-[var(--chrome-1)]"
                    />
                  </span>
                  <div>
                    <ChromeText
                      as="h2"
                      sweepOnHover
                      className="block font-display text-[clamp(1.75rem,4.6vw,3rem)] uppercase leading-none tracking-tight"
                    >
                      {c.title}
                    </ChromeText>
                    <p className="mt-2 text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--signal)]">
                      From {c.from}
                    </p>
                  </div>
                </div>
                <p className="mt-6 max-w-[52ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
                  {c.lede}
                </p>
              </AnimatedItem>

              <AnimatedItem>
                <h3 className="label-micro">What you get</h3>
                <ul className="mt-5">
                  {c.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 border-b border-[var(--hairline)] py-3 text-[0.8125rem] text-[var(--text-dim)] first:border-t"
                    >
                      <Icon
                        name="check"
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--chrome-2)]"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </AnimatedItem>
            </div>

            {i === chapters.length - 1 && (
              <AnimatedItem className="mt-10">
                <MagneticButton href="/packages" variant="chrome" withArrow>
                  See what it costs
                </MagneticButton>
              </AnimatedItem>
            )}
          </AnimatedSection>
        ))}
      </div>

      {/* ── ARTIST LADDER ────────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)] bg-[linear-gradient(180deg,rgba(255,255,255,0.028),transparent)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <AnimatedItem>
            <Eyebrow>For artists</Eyebrow>
            <ChromeText
              as="h2"
              className="mt-5 block font-display text-[clamp(2.2rem,6.6vw,5rem)] uppercase leading-[0.86] tracking-tight"
            >
              Turn your music
              <br />
              into a brand.
            </ChromeText>
            <p className="mt-6 max-w-[52ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
              From artist to CEO. Build a legacy that lasts — the six steps we
              walk every artist through, in order.
            </p>
          </AnimatedItem>

          <AnimatedItem className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {artistLadder.map((s) => (
              <GlassTile
                key={s.step}
                icon={s.icon}
                label={s.step}
                sub={s.note}
              />
            ))}
          </AnimatedItem>

          <AnimatedItem className="mt-16">
            <MagneticButton href="/contact" variant="signal" withArrow>
              DM &ldquo;{site.dmKeyword}&rdquo; to get started
            </MagneticButton>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
