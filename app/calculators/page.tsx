import { buildPageMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/contentMap";
import SectionPage from "@/components/SectionPage";

const section = getSection("calculators")!;

export const metadata = buildPageMetadata({
  title: "Free Financial Calculators for Immigrants",
  description: section.description,
  path: "/calculators",
});

export default function CalculatorsPage() {
  return <SectionPage section={section} />;
}
