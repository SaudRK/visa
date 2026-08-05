import { buildPageMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/contentMap";
import SectionPage from "@/components/SectionPage";

const section = getSection("investing")!;

export const metadata = buildPageMetadata({
  title: "Investing in the US While on a Visa",
  description: section.description,
  path: "/investing",
});

export default function InvestingPage() {
  return <SectionPage section={section} />;
}
