import Image from "next/image";
import { AnimatedItem, AnimatedSection } from "@/components/ui/Motion";
import { ChromeRule, Eyebrow } from "@/components/ui/Surfaces";
import { PlaqueFrame } from "@/components/ui/Surfaces";
import { hasOwner, hasOwnerPhotos, owner } from "@/data/owner";

/**
 * The photographs, on their own.
 *
 * The written introduction needs a name and a bio in his own words, which we
 * don't have yet. The pictures we DO have — so rather than hold the whole
 * section back, the portraits run now and the words drop in above them later.
 * A face is most of what "you're not hiring a robot" was asking for.
 */
export function OwnerGallery() {
  if (!hasOwnerPhotos) return null;

  return (
    <AnimatedSection className="border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        {/* When the bio is live, MeetTheOwner carries the heading instead. */}
        {!hasOwner && (
          <AnimatedItem className="mb-12 max-w-[60ch]">
            <Eyebrow>The founder</Eyebrow>
            <ChromeRule className="mt-6 w-40" />
          </AnimatedItem>
        )}

        <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr] lg:gap-6">
          <AnimatedItem>
            <PlaqueFrame>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={owner.photo!}
                  alt="The founder of Bandzclub Creative Studio"
                  fill
                  priority
                  sizes="(min-width:1024px) 55vw, 100vw"
                  className="object-cover"
                />
                {/* The red rim from the logo, thrown across the portrait. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_10%_0%,transparent_45%,rgb(225_6_0/0.22))]"
                />
              </div>
            </PlaqueFrame>
          </AnimatedItem>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {owner.gallery?.map((g) => (
              <AnimatedItem key={g.src}>
                <PlaqueFrame>
                  <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-[16/11]">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(min-width:1024px) 34vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_90%_0%,transparent_50%,rgb(225_6_0/0.18))]"
                    />
                  </div>
                </PlaqueFrame>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
