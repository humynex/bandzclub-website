import type { Metadata } from "next";
import { Suspense } from "react";
import { ChromeText } from "@/components/ui/ChromeText";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedItem, AnimatedSection } from "@/components/ui/Motion";
import { ChromeRule, Eyebrow } from "@/components/ui/Surfaces";
import { Icon } from "@/components/icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Bandzclub Creative Studio — Houston branding, websites, content, credit repair and funding.",
};

export default function ContactPage() {
  return (
    <>
      <header className="mx-auto max-w-[1400px] px-5 pb-12 pt-32 md:px-8 md:pt-40">
        <Eyebrow>Contact</Eyebrow>
        <ChromeText
          as="h1"
          className="mt-6 block font-display text-[clamp(2.9rem,10vw,7.5rem)] uppercase leading-[0.84] tracking-[-0.02em]"
        >
          Let&rsquo;s build
          <br />
          your brand.
        </ChromeText>
      </header>

      <AnimatedSection className="border-t border-[var(--hairline)]">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          {/* ── The DM panel ─────────────────────────────────── */}
          <AnimatedItem>
            <div className="glass-tile relative flex flex-col gap-5 rounded-[6px] p-8 md:p-10">
              <Icon name="chat" className="h-9 w-9 text-[var(--chrome-1)]" />
              <ChromeText
                as="p"
                className="block font-display text-[clamp(1.7rem,4.6vw,2.6rem)] uppercase leading-[0.92] tracking-tight"
              >
                DM &ldquo;{site.dmKeyword}&rdquo;
              </ChromeText>
              <p className="font-display text-base uppercase tracking-[0.14em] text-[var(--chrome-3)]">
                to get started
              </p>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-3 border border-[var(--hairline-hi)] px-5 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[var(--chrome-1)] transition-colors duration-200 hover:border-white/40 hover:bg-white/[0.05]"
              >
                <Icon name="instagram" className="h-4 w-4" />
                {site.instagram}
              </a>
            </div>

            <ChromeRule className="my-10" />

            <ul className="space-y-6">
              <li>
                <p className="label-micro">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 inline-flex items-center gap-3 text-[0.9375rem] text-[var(--chrome-1)] underline-offset-4 hover:underline"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  {site.email}
                </a>
              </li>
              <li>
                <p className="label-micro">Studio</p>
                <p className="mt-2 flex items-center gap-3 text-[0.9375rem] text-[var(--text-dim)]">
                  <Icon name="pin" className="h-4 w-4" />
                  Based in {site.city}
                </p>
              </li>
              <li>
                <p className="label-micro">Response time</p>
                <p className="mt-2 text-[0.9375rem] text-[var(--text-dim)]">
                  Usually within one business day.
                </p>
              </li>
            </ul>

            <p className="mt-12 font-display text-lg uppercase leading-tight tracking-[0.1em] text-[var(--chrome-2)]">
              {site.taglines.empire}
            </p>
          </AnimatedItem>

          {/* ── The form ─────────────────────────────────────── */}
          <AnimatedItem>
            <h2 className="sr-only">Project enquiry form</h2>
            <Suspense
              fallback={
                <div
                  className="h-[520px] w-full animate-pulse border border-[var(--hairline)] bg-white/[0.02]"
                  aria-hidden="true"
                />
              }
            >
              <ContactForm />
            </Suspense>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
