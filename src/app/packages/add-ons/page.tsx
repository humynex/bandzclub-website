import type { Metadata } from "next";
import { PriceSectionPage } from "@/components/PriceSectionPage";
import { PriceCardGrid } from "@/components/PriceCardGrid";
import { addOns } from "@/data/packages";

export const metadata: Metadata = {
  title: "Add-Ons",
  description:
    "Bandzclub Creative Studio add-on services — AI automation setup $500, SEO optimization $550, email marketing $400, Google Business setup $250.",
};

export default function AddOnsPage() {
  return (
    <PriceSectionPage
      currentHref="/packages/add-ons"
      eyebrow="Add-ons"
      title={["Bolt these", "onto anything."]}
      lede="The pieces that make a finished brand work harder — automation that answers while you sleep, search setup so people can find you, and email that keeps the list warm."
      intro="Add-ons attach to any package or to work we've already delivered. Nothing here requires starting over."
      closer="Add-ons are worth the most once the brand and site are live. If yours aren't yet, start with a package and we'll sequence these after."
    >
      <PriceCardGrid
        rows={addOns}
        icons={{
          "AI Automation Setup": "rocket",
          "Email Marketing": "mail",
          "Google Business Setup": "pin",
          "SEO Optimization": "growth",
        }}
        note="Social media management starts at $750/month. Business funding preparation and credit consultation are quoted per case."
      />
    </PriceSectionPage>
  );
}
