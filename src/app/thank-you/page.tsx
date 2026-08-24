import type { Metadata } from "next";
import Link from "next/link";
import { ChromeText } from "@/components/ui/ChromeText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedItem, AnimatedSection } from "@/components/ui/Motion";
import { ChromeRule, Eyebrow } from "@/components/ui/Surfaces";
import { Icon } from "@/components/icons";
import { Emblem } from "@/components/Emblem";
import { channelUrl, episodes } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Application received",
  description: "Your brand strategy call application is in.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <header className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-8 md:pt-40">
        <AnimatedSection>
          <AnimatedItem>
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[var(--signal)]">
              <Icon name="check" className="h-7 w-7 text-white" />
            </span>
            <Eyebrow className="mt-8">Application received</Eyebrow>
            <ChromeText
              as="h1"
              className="mt-6 block font-display text-[clamp(2.6rem,9vw,6.6rem)] uppercase leading-[0.86] tracking-[-0.02em]"
            >
              You&rsquo;re in.
            </ChromeText>
            <p className="mt-8 max-w-[54ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)] md:text-base">
              We read every application. Expect a reply within one business day
              with times for your call — check your spam folder if it
              hasn&rsquo;t landed, and add{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--chrome-1)] underline underline-offset-4"
              >
                {site.email}
              </a>{" "}
              to your contacts.
            </p>
          </AnimatedItem>
        </AnimatedSection>
      </header>

      {/* ── WHILE YOU WAIT ───────────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
          <AnimatedItem>
            <ChromeText
              as="h2"
              className="block font-display text-[clamp(1.9rem,5.4vw,3.6rem)] uppercase leading-[0.9] tracking-tight"
            >
              While you wait.
            </ChromeText>
            <p className="mt-5 max-w-[50ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
              Come see how we think. Everything we know about branding, credit
              and building a business is on the channel, free.
            </p>
          </AnimatedItem>

          <AnimatedItem className="mt-12 grid gap-px bg-[var(--hairline)] md:grid-cols-3">
            {episodes.map((ep) => (
              <Link
                key={ep.slug}
                href="/content"
                className="group flex flex-col bg-[var(--void)] p-7 transition-colors duration-300 hover:bg-white/[0.035]"
              >
                <p className="label-micro">{ep.kicker}</p>
                <h3 className="mt-4 flex-1 font-display text-[clamp(1.1rem,2.6vw,1.5rem)] uppercase leading-tight tracking-tight text-[var(--chrome-1)]">
                  {ep.title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--text-faint)] transition-colors duration-200 group-hover:text-white">
                  Watch
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </AnimatedItem>

          <AnimatedItem className="mt-12 flex flex-wrap gap-3">
            <MagneticButton href={channelUrl} variant="signal" withArrow>
              Subscribe on YouTube
            </MagneticButton>
            <MagneticButton href={site.instagramUrl} variant="ghost">
              Follow {site.instagram}
            </MagneticButton>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* ── KEEP LOOKING AROUND ──────────────────────────────── */}
      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
          <AnimatedItem className="flex flex-col items-center gap-8 text-center">
            <Emblem className="h-12 w-auto" title="Bandzclub" />
            <ChromeRule className="w-40" />
            <p className="font-display text-lg uppercase tracking-[0.12em] text-[var(--chrome-2)]">
              {site.taglines.empire}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <MagneticButton href="/work" variant="ghost">
                See the work
              </MagneticButton>
              <MagneticButton href="/packages" variant="ghost">
                Browse packages
              </MagneticButton>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
