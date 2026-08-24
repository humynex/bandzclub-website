import type { Metadata } from "next";
import { PriceSectionPage } from "@/components/PriceSectionPage";
import { PriceCardGrid } from "@/components/PriceCardGrid";
import { creditServices } from "@/data/packages";

export const metadata: Metadata = {
  title: "Credit Repair & Funding",
  description:
    "Bandzclub Creative Studio credit and funding services — consultation $149, personal credit repair from $499, business credit setup $999, funding readiness assessment $299.",
};

export default function CreditPage() {
  return (
    <PriceSectionPage
      currentHref="/packages/credit"
      eyebrow="Credit repair & funding"
      title={["Fix the credit.", "Get the capital."]}
      lede="Design gets you taken seriously. Credit and funding are what let you act on it — stock, staff, equipment, ad spend. We handle both under one roof so the two halves of the plan actually line up."
      intro="Credit work runs alongside the design build, not after it, so you're funded around the time the brand goes live."
      closer="Credit and funding move on their own timeline, so the earlier this starts the better. The call covers where your file is now and what's realistic."
    >
      <PriceCardGrid
        rows={creditServices}
        icons={{
          "Credit Repair Consultation": "chat",
          "Personal Credit Repair": "shield",
          "Business Credit Setup": "box",
          "Funding Readiness Assessment": "target",
          "Business Funding Strategy Session": "chartArrow",
          "Funding Application Assistance": "check",
          "Credit Monitoring & Guidance": "growth",
        }}
        note="We do not promise a score or a specific approval amount — anyone who does is guessing. You get the work, the strategy and honest expectations."
      />
    </PriceSectionPage>
  );
}
