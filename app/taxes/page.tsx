import { buildPageMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/contentMap";
import SectionPage from "@/components/SectionPage";

const section = getSection("taxes")!;

export const metadata = buildPageMetadata({
  title: "US Taxes for Visa Holders & Immigrants",
  description: section.description,
  path: "/taxes",
});

export default function TaxesPage() {
  return <SectionPage section={section} />;
}
