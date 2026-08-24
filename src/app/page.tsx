import Link from "next/link";
import { ChromeStage } from "@/components/hero/ChromeStage";
import { ChromeText } from "@/components/ui/ChromeText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Marquee } from "@/components/Marquee";
import { SpineStack } from "@/components/SpineStack";
import { Proof } from "@/components/funnel/Proof";
import {
  AnimatedItem,
  AnimatedSection,
  slideFromLeft,
} from "@/components/ui/Motion";
import { ChromeRule, Eyebrow } from "@/components/ui/Surfaces";
import { Icon } from "@/components/icons";
import { TransformationBoard } from "@/components/work/TransformationBoard";
import {
  callSteps,
  funnelHero,
  problems,
  problemsEyebrow,
  problemsKicker,
  solutions,
} from "@/data/funnel";
import { spines } from "@/data/services";
import { packages } from "@/data/packages";
import { partnership, site } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* ═══ 1. HERO ═══════════════════════════════════════════ */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-[72px]">
        <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-6 lg:py-0">
          <div className="order-2 lg:order-1">
            <Eyebrow>{site.city} &middot; Creative Studio</Eyebrow>

            <h1 className="mt-6">
              <span className="sr-only">
                {funnelHero.headline.join(" ")}
              </span>
              <ChromeText
                as="span"
                className="block font-display text-[clamp(2.3rem,6.6vw,5rem)] uppercase leading-[0.88] tracking-[-0.015em]"
              >
                {funnelHero.headline[0]}
              </ChromeText>
              <ChromeText
                as="span"
                kinetic
                className="mt-2 block font-display text-[clamp(2.3rem,6.6vw,5rem)] uppercase leading-[0.88] tracking-[-0.015em]"
              >
                {funnelHero.headline[1]}
              </ChromeText>
            </h1>

            <p className="mt-8 max-w-[52ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)] md:text-base">
              {funnelHero.sub}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton href="/book" variant="signal" withArrow>
                {funnelHero.cta}
              </MagneticButton>
            </div>
            <p className="mt-4 text-[0.8125rem] text-[var(--text-faint)]">
              {funnelHero.ctaSub}
            </p>

            <div className="mt-10 flex items-center gap-4">
              <ChromeRule className="w-14" />
              <p className="text-[0.625rem] uppercase tracking-[0.24em] text-[var(--text-faint)]">
                {partnership.partners[0]} &times; {partnership.partners[1]}
              </p>
            </div>
          </div>

          <div className="order-1 h-[40vh] min-h-[270px] lg:order-2 lg:h-[78vh]">
            <ChromeStage />
          </div>
        </div>
      </section>

      <div className="relative border-y border-[var(--hairline)] bg-[linear-gradient(180deg,#0a0b0c,#101215,#0a0b0c)] py-5">
        <Marquee text={`${site.taglines.primary} ★ `} />
      </div>

      {/* ═══ 2. THE PROBLEM ════════════════════════════════════ */}
      <AnimatedSection className="relative">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <AnimatedItem>
            <Eyebrow>{problemsEyebrow}</Eyebrow>
            <ChromeText
              as="h2"
              className="mt-5 block max-w-[16ch] font-display text-[clamp(2.2rem,6.6vw,4.8rem)] uppercase leading-[0.88] tracking-tight"
            >
              You&rsquo;re not short on hustle.
            </ChromeText>
            <p className="mt-6 max-w-[50ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
              You&rsquo;re short on the four things underneath every business
              that outgrows its owner.
            </p>
          </AnimatedItem>

          <ol className="mt-14 grid gap-px bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <AnimatedItem key={p.label}>
                <li className="signal-card flex h-full flex-col bg-[var(--void)] p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="signal-tile grid h-11 w-11 place-items-center rounded-[11px]">
                      <Icon
                        name={p.icon}
                        className="h-5 w-5 text-[var(--signal)]"
                      />
                    </span>
                    <span className="tabular font-display text-2xl leading-none text-[var(--chrome-6)]">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-6 font-display text-[0.7rem] uppercase tracking-[0.22em] text-[var(--signal)]">
                    {p.label}
                  </p>
                  <h3 className="mt-2 font-display text-[clamp(1.2rem,2.4vw,1.6rem)] uppercase leading-[1.04] tracking-tight text-[var(--chrome-1)]">
                    {p.line}
                  </h3>
                  <p className="mt-4 text-[0.875rem] leading-relaxed text-[var(--text-dim)]">
                    {p.detail}
                  </p>
                </li>
              </AnimatedItem>
            ))}
          </ol>

          <AnimatedItem className="mt-12 flex flex-col gap-1">
            <ChromeRule className="mb-5 w-full max-w-[420px]" />
            <p className="font-display text-[clamp(1.1rem,2.6vw,1.7rem)] uppercase leading-tight tracking-tight text-[var(--chrome-2)]">
              {problemsKicker[0]}
            </p>
            <p className="font-display text-[clamp(1.1rem,2.6vw,1.7rem)] uppercase leading-tight tracking-tight text-[var(--signal)]">
              {problemsKicker[1]}
            </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ═══ 3. THE SOLUTION ═══════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-[var(--hairline)] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>What we do about it</Eyebrow>
            <ChromeText
              as="h2"
              className="mt-5 block font-display text-[clamp(2.2rem,6.2vw,4.6rem)] uppercase leading-[0.88] tracking-tight"
            >
              We don&rsquo;t just
              <br />
              design brands.
            </ChromeText>
            <ChromeText
              as="p"
              kinetic
              className="mt-3 block font-display text-[clamp(2rem,5.4vw,4rem)] uppercase leading-[0.9] tracking-tight"
            >
              We build businesses.
            </ChromeText>

            <p className="mt-7 max-w-[50ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
              Design gets you noticed. Credit and funding get you built.
              Bandzclub does both under one roof — the mark on your door and the
              capital behind it.
            </p>

            <ul className="mt-9 grid gap-5">
              {solutions.map((s) => (
                <li key={s.name} className="flex gap-4">
                  <span className="glass-tile mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-[11px]">
                    <Icon
                      name={s.icon}
                      className="h-5 w-5 text-[var(--chrome-1)]"
                    />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.0625rem] uppercase tracking-[0.08em] text-[var(--chrome-1)]">
                      {s.name}
                    </h3>
                    <p className="mt-1 max-w-[44ch] text-[0.875rem] leading-relaxed text-[var(--text-faint)]">
                      {s.line}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <MagneticButton href="/services" variant="ghost" withArrow>
                All services in detail
              </MagneticButton>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start lg:pt-4">
            <SpineStack items={spines} />
            <p className="mt-7 max-w-[44ch] text-sm leading-relaxed text-[var(--text-faint)]">
              Eight disciplines, one studio. Take one, or hand us the whole
              stack and stop coordinating four freelancers who have never spoken
              to each other.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 4. PORTFOLIO ══════════════════════════════════════ */}
      <AnimatedSection className="relative border-t border-[var(--hairline)] py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-end lg:gap-16">
            <AnimatedItem variant={slideFromLeft}>
              <Eyebrow>Before &amp; after</Eyebrow>
              <ChromeText
                as="h2"
                className="mt-5 block font-display text-[clamp(2.1rem,5.4vw,4rem)] uppercase leading-[0.9] tracking-tight"
              >
                Grind Time
                <br />
                Clothing
              </ChromeText>
              <p className="mt-6 max-w-[46ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
                A circled letter in a system font became a crested chrome
                identity, an apparel brand system, and a storefront that reads
                the same on a laptop and a phone.
              </p>
              <p className="mt-6 font-display text-lg uppercase tracking-[0.12em] text-[var(--chrome-2)]">
                Built different. Made to grind.
              </p>
              <div className="mt-8">
                <MagneticButton href="/work" variant="ghost" withArrow>
                  See the full case study
                </MagneticButton>
              </div>
            </AnimatedItem>

            <AnimatedItem>
              <TransformationBoard />
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 5. PROOF (renders only when real proof exists) ════ */}
      <Proof />

      {/* ═══ 6. PACKAGES ═══════════════════════════════════════ */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
          <AnimatedItem className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <Eyebrow>Where to start</Eyebrow>
              <ChromeText
                as="h2"
                className="mt-5 block font-display text-[clamp(2.2rem,6.2vw,4.6rem)] uppercase leading-[0.88] tracking-tight"
              >
                Pick your
                <br />
                altitude.
              </ChromeText>
            </div>
            <p className="max-w-[44ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)] lg:pb-3">
              Real numbers, published. If you&rsquo;re not sure which one fits,
              that&rsquo;s exactly what the call is for.
            </p>
          </AnimatedItem>

          <AnimatedItem className="mt-12 grid gap-px border-y border-[var(--hairline)] bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-5">
            {packages.map((p) => (
              <Link
                key={p.slug}
                href="/packages"
                className="group relative flex flex-col bg-[var(--void)] p-6 transition-colors duration-300 hover:bg-white/[0.035]"
                style={
                  p.popular
                    ? {
                        background:
                          "linear-gradient(180deg,rgba(228,38,44,0.1),var(--void) 46%)",
                      }
                    : undefined
                }
              >
                <Icon
                  name={p.crest}
                  className="h-6 w-6 text-[var(--chrome-1)] transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="mt-5 font-display text-[1.05rem] uppercase leading-tight tracking-tight text-[var(--chrome-1)]">
                  {p.name}
                  <span className="block text-[var(--chrome-3)]">{p.sub}</span>
                </h3>
                <p className="tabular mt-4 font-display text-[1.9rem] leading-none text-white">
                  {p.price}
                </p>
                <p className="mt-3 flex-1 text-[0.6875rem] uppercase leading-snug tracking-[0.1em] text-[var(--text-faint)]">
                  {p.priceNote}
                </p>
                {p.popular && (
                  <span className="mt-4 inline-flex w-fit bg-[var(--signal)] px-2 py-1 text-[0.5rem] font-bold uppercase tracking-[0.18em] text-white">
                    Most popular
                  </span>
                )}
              </Link>
            ))}
          </AnimatedItem>

          <AnimatedItem className="mt-10">
            <MagneticButton href="/packages" variant="chrome" withArrow>
              Compare everything
            </MagneticButton>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ═══ 7. BOOK THE CALL ══════════════════════════════════ */}
      <AnimatedSection className="relative overflow-hidden border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <AnimatedItem className="text-center">
            <ChromeText
              as="h2"
              className="block font-display text-[clamp(2.4rem,8vw,6.2rem)] uppercase leading-[0.86] tracking-tight"
            >
              Stop waiting.
            </ChromeText>
            <ChromeText
              as="p"
              kinetic
              className="mt-2 block font-display text-[clamp(2.4rem,8vw,6.2rem)] uppercase leading-[0.86] tracking-tight"
            >
              Start building.
            </ChromeText>
          </AnimatedItem>

          <AnimatedItem className="mx-auto mt-16 grid max-w-[980px] gap-px bg-[var(--hairline)] md:grid-cols-3">
            {callSteps.map((s) => (
              <div key={s.n} className="bg-[var(--void)] p-7">
                <span className="tabular font-display text-xl leading-none text-[var(--chrome-5)]">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-base uppercase tracking-[0.08em] text-[var(--chrome-1)]">
                  {s.t}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-[var(--text-dim)]">
                  {s.d}
                </p>
              </div>
            ))}
          </AnimatedItem>

          <AnimatedItem className="mt-14 flex flex-col items-center gap-4">
            <MagneticButton href="/book" variant="signal" withArrow>
              {funnelHero.cta}
            </MagneticButton>
            <Link
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.75rem] font-medium uppercase tracking-[0.18em] text-[var(--text-faint)] underline-offset-8 transition-colors duration-200 hover:text-white hover:underline"
            >
              Or DM &ldquo;{site.dmKeyword}&rdquo; on Instagram
            </Link>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
