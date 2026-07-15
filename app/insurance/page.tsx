import { buildPageMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/contentMap";
import SectionPage from "@/components/SectionPage";

const section = getSection("insurance")!;

export const metadata = buildPageMetadata({
  title: "Insurance for Visa Holders & Immigrants",
  description: section.description,
  path: "/insurance",
});

export default function InsurancePage() {
  return <SectionPage section={section} />;
}
