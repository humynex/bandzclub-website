/**
 * The storefront shown on a laptop with the phone version alongside — the
 * device composition from the flyer, built as markup rather than a flat image
 * so it stays sharp and reflows on small screens.
 */

function Storefront({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full w-full flex-col bg-[#0a0b0c]">
      <div className="flex items-center justify-between border-b border-white/10 px-[4%] py-[2.4%]">
        <span className="font-display text-[clamp(0.4rem,1.4cqw,0.75rem)] uppercase tracking-[0.16em] text-[#dfe5ea]">
          Grind Time
        </span>
        {!compact && (
          <span className="flex gap-[1.4em] text-[clamp(0.32rem,0.9cqw,0.5rem)] uppercase tracking-[0.18em] text-[#8d949b]">
            <span>Shop</span>
            <span>About</span>
            <span>Contact</span>
          </span>
        )}
      </div>

      <div className="relative flex flex-1 items-center px-[6%]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-[46%]"
          style={{
            background:
              "radial-gradient(60% 60% at 60% 45%, rgba(190,205,220,0.22), transparent 70%)",
          }}
        />
        <div className="relative">
          <p className="font-display text-[clamp(0.7rem,3cqw,1.9rem)] uppercase leading-[0.92] tracking-tight text-white">
            Built different.
            <br />
            Made to grind.
          </p>
          <span className="mt-[6%] inline-block border border-white/70 px-[1.1em] py-[0.5em] text-[clamp(0.3rem,0.95cqw,0.55rem)] font-semibold uppercase tracking-[0.2em] text-white">
            Shop now
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[2%] px-[4%] pb-[4%]">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="aspect-[3/4] rounded-[2px] border border-white/[0.08]"
            style={{
              background:
                "linear-gradient(165deg,#1a1d20,#101214 60%,#0a0b0c), radial-gradient(50% 40% at 50% 34%, rgba(200,215,230,0.14), transparent 70%)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function GrindTimeSite() {
  return (
    <figure className="m-0">
      <div className="flex items-end gap-4 md:gap-8">
        {/* Laptop */}
        <div className="min-w-0 flex-1">
          <div
            className="rounded-[10px] p-[0.7%] pb-0"
            style={{
              background:
                "linear-gradient(160deg,#cdd5dd,#7c848c 40%,#3a3f45 62%,#aab2ba)",
              boxShadow: "0 40px 80px -50px rgba(0,0,0,1)",
            }}
          >
            <div
              className="overflow-hidden rounded-[6px] border border-black/70"
              style={{ containerType: "inline-size" }}
            >
              <div className="aspect-[16/10]">
                <Storefront />
              </div>
            </div>
          </div>
          <div
            className="mx-auto h-[9px] w-[112%] max-w-none -translate-x-[5.3%] rounded-b-[9px]"
            style={{
              background:
                "linear-gradient(180deg,#b6bec6,#6e757d 46%,#2c3136)",
            }}
          />
        </div>

        {/* Phone */}
        <div className="hidden w-[19%] shrink-0 sm:block">
          <div
            className="rounded-[16px] p-[3%]"
            style={{
              background:
                "linear-gradient(160deg,#c8d0d8,#767d85 44%,#33383d 66%,#a3abb3)",
              boxShadow: "0 30px 60px -40px rgba(0,0,0,1)",
            }}
          >
            <div
              className="overflow-hidden rounded-[11px] border border-black/70"
              style={{ containerType: "inline-size" }}
            >
              <div className="aspect-[9/17]">
                <Storefront compact />
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-5 text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--text-faint)]">
        Grind Time Clothing &middot; storefront, desktop and mobile
      </figcaption>
    </figure>
  );
}
