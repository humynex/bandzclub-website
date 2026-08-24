import type { Metadata } from "next";
import { PriceSectionPage } from "@/components/PriceSectionPage";
import { Icon } from "@/components/icons";
import { monthlyPlans } from "@/data/packages";

export const metadata: Metadata = {
  title: "Monthly Growth Plans",
  description:
    "Bandzclub Creative Studio retainers — Growth $997/month, Scale $1,997/month, Empire $4,997/month. Ongoing content, strategy and brand management.",
};

export default function MonthlyPage() {
  return (
    <PriceSectionPage
      currentHref="/packages/monthly"
      eyebrow="Monthly growth plans"
      title={["A brand isn't", "a one-off."]}
      lede="A launch gets you looking right. Staying in front of people is what actually compounds — consistent content, updates that ship, and someone reviewing the numbers with you every month."
      intro="Retainers run month to month. No lock-in — if it stops earning its keep, stop it."
      closer="Which plan fits depends on how much you post and how fast you're moving. The call sorts that in ten minutes."
    >
      <ul className="grid gap-px bg-[var(--hairline)] lg:grid-cols-3">
        {monthlyPlans.map((p, i) => (
          <li
            key={p.name}
            className="signal-card flex flex-col bg-[var(--void)] p-7 md:p-8"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-[1.5rem] uppercase tracking-tight text-[var(--chrome-1)]">
                {p.name}
              </h3>
              <span className="tabular font-display text-sm text-[var(--chrome-6)]">
                0{i + 1}
              </span>
            </div>

            <p className="tabular mt-5 font-display text-[2.4rem] leading-none text-white">
              {p.price}
              <span className="ml-1 text-[0.9rem] tracking-[0.06em] text-[var(--text-faint)]">
                {p.cadence}
              </span>
            </p>

            <ul className="mt-7 flex-1 space-y-3 border-t border-[var(--hairline)] pt-6">
              {p.includes.map((f) => (
                <li key={f} className="flex gap-3">
                  <Icon
                    name="check"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--signal)]"
                  />
                  <span className="text-[0.875rem] leading-relaxed text-[var(--text-dim)]">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </PriceSectionPage>
  );
}
