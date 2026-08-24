import type { Metadata } from "next";
import { ChromeText } from "@/components/ui/ChromeText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GrindTimeBoard } from "@/components/work/GrindTimeBoard";
import { GrindTimeSite } from "@/components/work/GrindTimeSite";
import { CaseGrid } from "@/components/work/CaseGrid";
import { labelCases, studioCases } from "@/data/work";
import { AnimatedItem, AnimatedSection } from "@/components/ui/Motion";
import { ChromeRule, Eyebrow } from "@/components/ui/Surfaces";
import { Icon } from "@/components/icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected Bandzclub Creative Studio work, including the Grind Time Clothing identity rebrand and storefront.",
};

const scope = [
  { label: "Logo & crest", icon: "penNib" },
  { label: "Brand identity", icon: "crown" },
  { label: "Apparel system", icon: "box" },
  { label: "Storefront", icon: "cart" },
  { label: "Social kit", icon: "megaphone" },
] as const;

const moves = [
  {
    n: "01",
    t: "Found the real problem",
    d: "The old mark was a circled letter set in a system font. It read as a placeholder, so buyers treated the whole label as one.",
  },
  {
    n: "02",
    t: "Built a crest, not a logo",
    d: "A crown over a shield gives the brand something to stamp on a hoodie, a hangtag, a hem label and a profile picture without redrawing it each time.",
  },
  {
    n: "03",
    t: "Gave it somewhere to sell",
    d: "A storefront where the product photography carries the page, sized so the phone version is the one that converts.",
  },
];

export default function WorkPage() {
  return (
    <>
      <header className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-8 md:pt-40">
        <Eyebrow>Selected work</Eyebrow>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <ChromeText
            as="h1"
            className="block font-display text-[clamp(2.9rem,10vw,7.5rem)] uppercase leading-[0.84] tracking-[-0.02em]"
          >
            Before,
            <br />
            and after.
          </ChromeText>
          <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)] lg:pb-4">
            One brand at a time, taken from something a template could have made
            to something nobody else owns.
          </p>
        </div>
      </header>

      {/* ── CASE STUDY: GRIND TIME ───────────────────────────── */}
      <AnimatedSection
        as="article"
        className="border-t border-[var(--hairline)]"
      >
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
          <AnimatedItem className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="label-micro">Case study 01 &middot; Apparel</p>
              <ChromeText
                as="h2"
                className="mt-4 block font-display text-[clamp(2.2rem,6.4vw,4.6rem)] uppercase leading-[0.88] tracking-tight"
              >
                Grind Time Clothing
              </ChromeText>
            </div>
            <p className="font-display text-[clamp(0.9rem,2vw,1.25rem)] uppercase tracking-[0.14em] text-[var(--chrome-3)]">
              Built different. Made to grind.
            </p>
          </AnimatedItem>

          <AnimatedItem className="mt-12">
            <GrindTimeBoard />
          </AnimatedItem>

          <AnimatedItem className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <h3 className="label-micro">Scope</h3>
              <ul className="mt-6 space-y-0">
                {scope.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center gap-4 border-b border-[var(--hairline)] py-4 first:border-t"
                  >
                    <Icon
                      name={s.icon}
                      className="h-5 w-5 shrink-0 text-[var(--chrome-2)]"
                    />
                    <span className="text-[0.875rem] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="label-micro">How it went</h3>
              <ol className="mt-6 space-y-8">
                {moves.map((m) => (
                  <li key={m.n} className="flex gap-5">
                    <span className="tabular font-display text-xl leading-none text-[var(--chrome-5)]">
                      {m.n}
                    </span>
                    <div>
                      <h4 className="font-display text-base uppercase tracking-[0.08em] text-[var(--chrome-1)]">
                        {m.t}
                      </h4>
                      <p className="mt-2 max-w-[50ch] text-[0.875rem] leading-relaxed text-[var(--text-dim)]">
                        {m.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </AnimatedItem>

          <AnimatedItem className="mt-16">
            <GrindTimeSite />
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ── STUDIO WORK ──────────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <AnimatedItem className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <ChromeText
                as="h2"
                className="mt-5 block font-display text-[clamp(2.1rem,6vw,4.4rem)] uppercase leading-[0.88] tracking-tight"
              >
                Brands we
                <br />
                built.
              </ChromeText>
            </div>
            <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)] lg:pb-3">
              Identity, sites, illustration. Every piece below was drawn for a
              real project — no template skins, no stock.
            </p>
          </AnimatedItem>

          <AnimatedItem className="mt-14">
            <CaseGrid cases={studioCases} />
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ── THE LABEL ────────────────────────────────────────────
          Kept in its own section on purpose. Bandzclub the streetwear
          label runs a different palette and a different audience to
          Bandzclub Creative Studio; interleaving them would weaken both. */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <AnimatedItem className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <Eyebrow>In-house</Eyebrow>
              <ChromeText
                as="h2"
                className="mt-5 block font-display text-[clamp(2.1rem,6vw,4.4rem)] uppercase leading-[0.88] tracking-tight"
              >
                Bandzclub,
                <br />
                the label.
              </ChromeText>
            </div>
            <p className="max-w-[48ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)] lg:pb-3">
              We run our own apparel brand — crest, campaign, product and
              concept art. It&rsquo;s the proof we&rsquo;ll do for a clothing
              client what we already did for ourselves.
            </p>
          </AnimatedItem>

          <AnimatedItem className="mt-14">
            <CaseGrid cases={labelCases} />
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ── NEXT ─────────────────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <AnimatedItem className="mx-auto max-w-[720px] text-center">
            <ChromeRule className="mx-auto w-40" />
            <ChromeText
              as="h2"
              className="mt-10 block font-display text-[clamp(2rem,6vw,4.2rem)] uppercase leading-[0.9] tracking-tight"
            >
              Your brand
              <br />
              could be next.
            </ChromeText>
            <p className="mx-auto mt-6 max-w-[46ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
              {site.taglines.possibility}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <MagneticButton href="/contact" variant="signal" withArrow>
                Start a project
              </MagneticButton>
              <MagneticButton href="/packages" variant="ghost">
                See packages
              </MagneticButton>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
