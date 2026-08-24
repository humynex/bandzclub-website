import type { Metadata } from "next";
import { ChromeText } from "@/components/ui/ChromeText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MeetTheOwner } from "@/components/about/MeetTheOwner";
import { OwnerGallery } from "@/components/about/OwnerGallery";
import { AnimatedItem, AnimatedSection } from "@/components/ui/Motion";
import { ChromeRule, Eyebrow } from "@/components/ui/Surfaces";
import { hasOwner, owner } from "@/data/owner";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Meet The Owner",
  description:
    "The person behind Bandzclub Creative Studio — who you actually work with.",
};

export default function OwnerPage() {
  return (
    <>
      <header className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-8 md:pt-40">
        <Eyebrow>Meet the owner</Eyebrow>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <ChromeText
            as="h1"
            className="block font-display text-[clamp(2.6rem,9vw,6.4rem)] uppercase leading-[0.86] tracking-[-0.02em]"
          >
            You&rsquo;re not
            <br />
            hiring a robot.
          </ChromeText>
          <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)] lg:pb-4">
            One person answers your messages, runs your build and picks up the
            call. Here&rsquo;s who that is.
          </p>
        </div>
      </header>

      <MeetTheOwner />
      <OwnerGallery />

      {/* Until the real details are in, say so plainly rather than filling the
          page with a stock portrait and a bio nobody wrote. */}
      {!hasOwner && (
        <AnimatedSection className="border-t border-[var(--hairline)]">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
            <AnimatedItem className="max-w-[62ch]">
              <ChromeRule className="w-40" />
              <h2 className="mt-8 font-display text-[clamp(1.5rem,4vw,2.4rem)] uppercase leading-tight tracking-tight text-[var(--chrome-1)]">
                This page is waiting on him.
              </h2>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
                The photographs are in, but the written introduction is
                still missing. Rather than invent one, this page stays honest
                until his own words are on file.
              </p>
              <p className="mt-5 text-[0.875rem] leading-relaxed text-[var(--text-faint)]">
                Send three short paragraphs &mdash; what he did before this,
                why he started the studio, and who he most likes working with
                &mdash; and this page fills itself in.
              </p>
              <div className="mt-10">
                <MagneticButton href="/book" variant="signal" withArrow>
                  Book a call and meet him directly
                </MagneticButton>
              </div>
            </AnimatedItem>
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
          <AnimatedItem className="mx-auto max-w-[720px] text-center">
            <ChromeText
              as="h2"
              className="block font-display text-[clamp(2rem,6vw,4rem)] uppercase leading-[0.9] tracking-tight"
            >
              {site.taglines.empire}
            </ChromeText>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <MagneticButton href="/book" variant="signal" withArrow>
                Book a free brand strategy call
              </MagneticButton>
              <MagneticButton href="/work" variant="ghost">
                See the work
              </MagneticButton>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
