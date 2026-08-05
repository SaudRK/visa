import { buildPageMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/contentMap";
import SectionPage from "@/components/SectionPage";

const section = getSection("send-money")!;

export const metadata = buildPageMetadata({
  title: "How to Send Money Home From the USA",
  description: section.description,
  path: "/send-money",
});

export default function SendMoneyPage() {
  return <SectionPage section={section} />;
}
