import { buildPageMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/contentMap";
import SectionPage from "@/components/SectionPage";

const section = getSection("banking")!;

export const metadata = buildPageMetadata({
  title: "Banking & Credit for Immigrants",
  description: section.description,
  path: "/banking",
});

export default function BankingPage() {
  return <SectionPage section={section} />;
}
