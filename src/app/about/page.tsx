import type { Metadata } from "next";
import { ChromeText } from "@/components/ui/ChromeText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedItem, AnimatedSection } from "@/components/ui/Motion";
import { ChromeRule, Eyebrow, GlassTile } from "@/components/ui/Surfaces";
import { Emblem } from "@/components/Emblem";
import { MeetTheOwner } from "@/components/about/MeetTheOwner";
import { Icon } from "@/components/icons";
import { outcomes, partnership, promises, site } from "@/data/site";
import { buildLadder } from "@/data/services";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bandzclub Creative Studio is a Houston branding and business-development studio — design, content, credit repair and funding under one roof.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── EDITORIAL OPENER ─────────────────────────────────── */}
      <header className="relative overflow-hidden pt-32 md:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-25"
          style={{
            background:
              "repeating-linear-gradient(90deg,transparent 0 58px,rgba(150,175,200,0.16) 58px 60px,transparent 60px 128px)",
            maskImage: "linear-gradient(180deg,#000,transparent 78%)",
            WebkitMaskImage: "linear-gradient(180deg,#000,transparent 78%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 pb-16 md:px-8">
          <Eyebrow>Based in {site.city}</Eyebrow>
          <ChromeText
            as="h1"
            className="mt-6 block font-display text-[clamp(2.6rem,9.4vw,7rem)] uppercase leading-[0.84] tracking-[-0.02em]"
          >
            We don&rsquo;t just
            <br />
            design brands.
          </ChromeText>
          <ChromeText
            as="p"
            kinetic
            className="mt-3 block font-display text-[clamp(2.3rem,8.4vw,6.2rem)] uppercase leading-[0.86] tracking-tight"
          >
            We build businesses.
          </ChromeText>
        </div>
      </header>

      {/* ── THE STUDIO ───────────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <AnimatedItem>
            <Emblem className="h-16 w-auto" title="Bandzclub" />
            <ChromeRule className="mt-8 w-full max-w-[280px]" />
            <p className="mt-8 text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
              {site.intro}
            </p>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
              Most people who come to us are not short on ambition. They are
              short on a brand that matches it, and short on the credit to fund
              it. Bandzclub handles both — which is the reason we exist rather
              than being one more design shop.
            </p>
            <p className="mt-8 font-display text-lg uppercase tracking-[0.12em] text-[var(--chrome-2)]">
              {site.taglines.empire}
            </p>
          </AnimatedItem>

          <AnimatedItem>
            <h2 className="label-micro">What you get from us</h2>
            <ul className="mt-6">
              {promises.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-4 border-b border-[var(--hairline)] py-5 first:border-t"
                >
                  <Icon
                    name="check"
                    className="h-4 w-4 shrink-0 text-[var(--chrome-1)]"
                  />
                  <span className="font-display text-[clamp(1.05rem,2.6vw,1.6rem)] uppercase tracking-[0.07em] text-[var(--chrome-1)]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm italic text-[var(--text-faint)]">
              {site.taglines.possibility}
            </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ── MEET THE OWNER (renders once real details exist) ─── */}
      <MeetTheOwner />

      {/* ── THE LADDER ───────────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)] bg-[linear-gradient(180deg,rgba(255,255,255,0.028),transparent)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
          <AnimatedItem>
            <Eyebrow>How it actually happens</Eyebrow>
            <ChromeText
              as="h2"
              className="mt-5 block font-display text-[clamp(2.1rem,6.4vw,4.6rem)] uppercase leading-[0.88] tracking-tight"
            >
              Stop waiting.
            </ChromeText>
            <ChromeText
              as="p"
              kinetic
              className="mt-2 block font-display text-[clamp(2.1rem,6.4vw,4.6rem)] uppercase leading-[0.88] tracking-tight"
            >
              Start building.
            </ChromeText>
          </AnimatedItem>

          <AnimatedItem className="mt-14 flex flex-wrap justify-between gap-x-6 gap-y-12">
            {buildLadder.map((s) => (
              <GlassTile key={s.step} icon={s.icon} label={s.step} />
            ))}
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ── PARTNERSHIP ──────────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
          <AnimatedItem className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="label-micro !tracking-[0.34em]">
                {partnership.eyebrow}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <ChromeText
                  as="span"
                  className="font-display text-[clamp(1.6rem,5vw,3rem)] uppercase tracking-[0.08em]"
                >
                  {partnership.partners[0]}
                </ChromeText>
                <span
                  className="font-display text-2xl text-[var(--signal)]"
                  aria-hidden="true"
                >
                  &times;
                </span>
                <ChromeText
                  as="span"
                  className="font-display text-[clamp(1.6rem,5vw,3rem)] uppercase tracking-[0.08em]"
                >
                  {partnership.partners[1]}
                </ChromeText>
              </div>
              <p className="mt-6 font-display text-[0.9375rem] uppercase tracking-[0.16em] text-[var(--chrome-2)]">
                {partnership.line}
              </p>
            </div>
            <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
              Humynex builds the digital side — custom sites, automations and
              apps. Creditpreneurs handles credit and funding. Together with
              Bandzclub that covers the three things a new business actually
              needs: something to show, somewhere to sell, and the capital to
              stock it.
            </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ── OUTCOMES + CTA ───────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
          <AnimatedItem className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {outcomes.map((o) => (
              <GlassTile key={o.label} icon={o.icon} label={o.label} />
            ))}
          </AnimatedItem>
          <AnimatedItem className="mt-16 flex flex-wrap items-center gap-3">
            <MagneticButton href="/contact" variant="signal" withArrow>
              DM &ldquo;{site.dmKeyword}&rdquo; to get started
            </MagneticButton>
            <MagneticButton href="/work" variant="ghost">
              See the work
            </MagneticButton>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
