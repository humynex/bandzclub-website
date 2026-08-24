import Link from "next/link";
import { RingLogo } from "@/components/RingLogo";
import { Icon } from "@/components/icons";
import { ChromeText } from "@/components/ui/ChromeText";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--hairline)] bg-[var(--panel)]/40">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            {/* Full BC★ lockup signs off the site; the compact B★ stays the
                icon in the nav and the 3D hero. */}
            <RingLogo size={56} />
            <p className="mt-4 font-display text-[0.6875rem] uppercase tracking-[0.34em] text-[var(--chrome-4)]">
              Creative Studio
            </p>
            <ChromeText
              as="p"
              className="mt-6 font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-[0.95] tracking-tight"
            >
              Let&rsquo;s build your empire.
            </ChromeText>
            <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-[var(--text-dim)]">
              {site.taglines.possibility}
            </p>
            <Link
              href="/book"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[var(--signal)] px-6 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[var(--signal-hi)]"
            >
              <Icon name="chat" className="h-4 w-4" />
              Book a free brand strategy call
            </Link>
          </div>

          <nav aria-label="Footer">
            <h2 className="label-micro">Studio</h2>
            <ul className="mt-5 space-y-3">
              {[
                ...nav,
                { href: "/book", label: "Book a call" },
                { href: "/contact", label: "Contact" },
              ].map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-sm text-[var(--text-dim)] transition-colors duration-200 hover:text-white"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label-micro">Reach us</h2>
            <ul className="mt-5 space-y-4 text-sm text-[var(--text-dim)]">
              <li>
                <a
                  className="flex items-center gap-3 transition-colors duration-200 hover:text-white"
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="instagram" className="h-4 w-4 shrink-0" />
                  {site.instagram}
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 transition-colors duration-200 hover:text-white"
                  href={`mailto:${site.email}`}
                >
                  <Icon name="mail" className="h-4 w-4 shrink-0" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="pin" className="h-4 w-4 shrink-0" />
                Based in {site.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--hairline)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--text-faint)]">
            {site.domain}
          </p>
          <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--text-faint)]">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
