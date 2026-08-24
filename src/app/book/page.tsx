import type { Metadata } from "next";
import { Suspense } from "react";
import { ChromeText } from "@/components/ui/ChromeText";
import { BookingForm } from "@/components/BookingForm";
import { AnimatedItem, AnimatedSection } from "@/components/ui/Motion";
import { ChromeRule, Eyebrow } from "@/components/ui/Surfaces";
import { Icon } from "@/components/icons";
import { callSteps } from "@/data/funnel";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Free Brand Strategy Call",
  description:
    "Twenty minutes with Bandzclub Creative Studio. We'll look at your brand first and tell you the one thing we'd fix — whether you hire us or not.",
};

export default function BookPage() {
  return (
    <>
      <header className="mx-auto max-w-[1400px] px-5 pb-12 pt-32 md:px-8 md:pt-40">
        <Eyebrow>Free brand strategy call</Eyebrow>
        <ChromeText
          as="h1"
          className="mt-6 block font-display text-[clamp(2.5rem,8.4vw,6.2rem)] uppercase leading-[0.86] tracking-[-0.02em]"
        >
          Twenty minutes.
        </ChromeText>
        <ChromeText
          as="p"
          kinetic
          className="mt-2 block font-display text-[clamp(2rem,6.4vw,4.6rem)] uppercase leading-[0.9] tracking-tight"
        >
          No pitch deck.
        </ChromeText>
        <p className="mt-8 max-w-[54ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)] md:text-base">
          We go through your brand, your site and your socials before we speak,
          so the call isn&rsquo;t spent gathering basics. You leave with the one
          thing we&rsquo;d fix first — whether you hire us or not.
        </p>
      </header>

      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <AnimatedItem>
            <h2 className="label-micro">How it works</h2>
            <ol className="mt-7 space-y-8">
              {callSteps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="tabular font-display text-xl leading-none text-[var(--chrome-5)]">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-base uppercase tracking-[0.08em] text-[var(--chrome-1)]">
                      {s.t}
                    </h3>
                    <p className="mt-2 max-w-[42ch] text-[0.875rem] leading-relaxed text-[var(--text-dim)]">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <ChromeRule className="my-10" />

            <div className="glass-tile flex flex-col gap-4 rounded-[6px] p-7">
              <Icon name="chat" className="h-7 w-7 text-[var(--chrome-1)]" />
              <p className="font-display text-lg uppercase leading-tight tracking-[0.08em] text-[var(--chrome-1)]">
                Rather just message us?
              </p>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 border border-[var(--hairline-hi)] px-5 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[var(--chrome-1)] transition-colors duration-200 hover:border-white/40 hover:bg-white/[0.05]"
              >
                <Icon name="instagram" className="h-4 w-4" />
                DM &ldquo;{site.dmKeyword}&rdquo; &middot; {site.instagram}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 text-[0.875rem] text-[var(--text-dim)] underline-offset-4 hover:text-white hover:underline"
              >
                <Icon name="mail" className="h-4 w-4" />
                {site.email}
              </a>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <h2 className="sr-only">Strategy call application</h2>
            <Suspense
              fallback={
                <div
                  className="h-[620px] w-full animate-pulse border border-[var(--hairline)] bg-white/[0.02]"
                  aria-hidden="true"
                />
              }
            >
              <BookingForm />
            </Suspense>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
