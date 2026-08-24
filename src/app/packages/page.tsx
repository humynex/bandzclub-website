import type { Metadata } from "next";
import { ChromeText } from "@/components/ui/ChromeText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PackageRail } from "@/components/PackageRail";
import { AnimatedItem, AnimatedSection } from "@/components/ui/Motion";
import { Eyebrow } from "@/components/ui/Surfaces";
import { Icon } from "@/components/icons";
import {
  packages,
  weBuildBusinesses,
} from "@/data/packages";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description:
    "Bandzclub Creative Studio packages from $499 to $10,000+, individual services, credit repair and funding, add-ons, and monthly growth plans.",
};

export default function PackagesPage() {
  return (
    <>
      <header className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-8 md:pb-16 md:pt-40">
        <Eyebrow>Packages</Eyebrow>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <ChromeText
            as="h1"
            className="block font-display text-[clamp(2.9rem,10vw,7.5rem)] uppercase leading-[0.84] tracking-[-0.02em]"
          >
            Pick your
            <br />
            altitude.
          </ChromeText>
          <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)] lg:pb-4">
            Five tiers, from a first logo to done-for-you business development.
            Every price on this page is the real number — no &ldquo;contact us
            for pricing&rdquo;.
          </p>
        </div>
      </header>

      {/* ── THE FIVE TIERS ───────────────────────────────────── */}
      <section
        aria-label="Package tiers"
        className="mx-auto max-w-[1400px] border-y border-[var(--hairline)] px-5 md:px-8 lg:px-0"
      >
        <PackageRail items={packages} />
      </section>

      {/* Individual services, credit, add-ons and monthly plans used to be
          duplicated here. They each have their own page under the Packages
          dropdown now, so this page stays focused on the five tiers and the
          visitor isn't reading the same price twice. */}

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <AnimatedItem>
            <ChromeText
              as="h2"
              className="block font-display text-[clamp(2.2rem,6.4vw,4.6rem)] uppercase leading-[0.88] tracking-tight"
            >
              We don&rsquo;t just
              <br />
              design brands.
            </ChromeText>
            <ChromeText
              as="p"
              kinetic
              className="mt-3 block font-display text-[clamp(2rem,5.6vw,4rem)] uppercase leading-[0.9] tracking-tight"
            >
              We build businesses.
            </ChromeText>
            <div className="mt-10">
              <MagneticButton href="/contact" variant="signal" withArrow>
                DM &ldquo;{site.dmKeyword}&rdquo; to get started
              </MagneticButton>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <ul className="space-y-0">
              {weBuildBusinesses.map((line) => (
                <li
                  key={line}
                  className="flex items-center gap-4 border-b border-[var(--hairline)] py-5 first:border-t"
                >
                  <Icon
                    name="check"
                    className="h-4 w-4 shrink-0 text-[var(--signal)]"
                  />
                  <span className="font-display text-[clamp(1rem,2.4vw,1.4rem)] uppercase tracking-[0.08em] text-[var(--chrome-1)]">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
