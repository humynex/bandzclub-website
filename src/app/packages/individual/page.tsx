import type { Metadata } from "next";
import { PriceSectionPage } from "@/components/PriceSectionPage";
import { PriceCardGrid } from "@/components/PriceCardGrid";
import { individualServices } from "@/data/packages";

export const metadata: Metadata = {
  title: "Individual Services",
  description:
    "One-off Bandzclub Creative Studio pricing — logo design from $250, brand identity from $500, website design from $1,200, Shopify stores from $1,500.",
};

export default function IndividualServicesPage() {
  return (
    <PriceSectionPage
      currentHref="/packages/individual"
      eyebrow="Individual services"
      title={["Take one", "piece at a time."]}
      lede="Not everybody needs the whole build on day one. These are the same pieces that make up the packages, priced individually so you can start with the one that's costing you money right now."
      intro="Prices marked with a plus are starting points — the final figure depends on scope, and we quote it before anything begins."
      closer="Most people who start here end up needing two or three of these. If that's you, a package works out cheaper — the call is where we work out which."
    >
      <PriceCardGrid
        rows={individualServices}
        icons={{
          "Logo Design": "penNib",
          "Brand Identity": "crown",
          "Website Design": "globe",
          "Shopify Store": "cart",
          "Landing Page": "target",
          "Flyer Design": "diamond",
          "Business Cards": "card",
          "Social Media Graphics": "megaphone",
          "Content Creation": "clapper",
          "Video Editing": "play",
          "YouTube Thumbnail": "youtube",
          "Brand Audit": "chartArrow",
          "Brand Strategy Session": "chat",
        }}
        note="All work includes the source files. You own what you paid for. Prices marked with a plus are starting points and quoted before anything begins."
      />
    </PriceSectionPage>
  );
}
