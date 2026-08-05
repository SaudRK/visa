import { buildPageMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/contentMap";
import SectionPage from "@/components/SectionPage";

const section = getSection("visa-guides")!;

export const metadata = buildPageMetadata({
  title: "Money Guides by US Visa Status",
  description: section.description,
  path: "/visa-guides",
});

export default function VisaGuidesPage() {
  return <SectionPage section={section} />;
}
