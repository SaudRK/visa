import { buildPageMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/contentMap";
import SectionPage from "@/components/SectionPage";

const section = getSection("taxes")!;

export const metadata = buildPageMetadata({
  title: "Taxes for Immigrants & Visa Holders",
  description: section.description,
  path: "/taxes",
});

export default function TaxesPage() {
  return <SectionPage section={section} />;
}
