import type { Metadata } from "next";
import { ChromeText } from "@/components/ui/ChromeText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedItem, AnimatedSection } from "@/components/ui/Motion";
import { Eyebrow, PlaqueFrame } from "@/components/ui/Surfaces";
import { Icon } from "@/components/icons";
import { Emblem } from "@/components/Emblem";
import { ChannelBrowser } from "@/components/content/ChannelBrowser";
import { channelUrl, episodes } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Content",
  description:
    "The Bandzclub Creative Studio channel — branding, business and the road from artist to CEO.",
};

export default function ContentPage() {
  return (
    <>
      <header className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-8 md:pt-40">
        <Eyebrow>
          <span className="inline-flex items-center gap-2">
            <Icon name="youtube" className="h-4 w-4 text-[var(--signal)]" />
            The channel
          </span>
        </Eyebrow>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <ChromeText
            as="h1"
            className="block font-display text-[clamp(2.9rem,10vw,7.5rem)] uppercase leading-[0.84] tracking-[-0.02em]"
          >
            Watch us
            <br />
            build it.
          </ChromeText>
          <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)] lg:pb-4">
            Everything we know about branding, credit and building a business,
            given away for free. Take it and run.
          </p>
        </div>
      </header>

      {/* ── THE CHANNEL ──────────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
          <AnimatedItem>
            <ChannelBrowser episodes={episodes} />
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ── SUBSCRIBE BAR ────────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
          <AnimatedItem>
            <div className="glass-tile mx-auto flex max-w-[900px] flex-col items-center gap-8 rounded-[6px] px-6 py-12 text-center md:px-12">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--chrome-2)]">
                <span className="inline-flex items-center gap-2.5">
                  <Icon name="check" className="h-4 w-4" /> Like
                </span>
                <span aria-hidden="true" className="text-[var(--chrome-5)]">
                  |
                </span>
                <span className="inline-flex items-center gap-2.5">
                  <Icon name="chat" className="h-4 w-4" /> Comment
                </span>
                <span aria-hidden="true" className="text-[var(--chrome-5)]">
                  |
                </span>
                <span className="inline-flex items-center gap-2.5 text-white">
                  <Icon name="youtube" className="h-4 w-4 text-[var(--signal)]" />
                  Subscribe
                </span>
              </div>

              <ChromeText
                as="p"
                className="block font-display text-[clamp(1.6rem,5vw,3.2rem)] uppercase leading-[0.92] tracking-tight"
              >
                {site.taglines.urgency}
              </ChromeText>

              <div className="flex flex-wrap justify-center gap-3">
                <MagneticButton
                  href={channelUrl}
                  variant="signal"
                  withArrow
                >
                  Subscribe on YouTube
                </MagneticButton>
                <MagneticButton href="/contact" variant="ghost">
                  Work with us
                </MagneticButton>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
