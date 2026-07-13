import SectionHeading from "./SectionHeading";
import DocumentChecklist from "./DocumentChecklist";
import type { DocumentItem } from "@/lib/types";

interface DocumentsSectionProps {
  documents: DocumentItem[];
}

export default function DocumentsSection({ documents }: DocumentsSectionProps) {
  return (
    <section aria-labelledby="documents-heading">
      <SectionHeading
        id="documents-heading"
        eyebrow="Paperwork"
        title="Document checklist"
        description="Tap each item as you collect it. Every document includes why officers usually want it."
      />
      <DocumentChecklist documents={documents} />
    </section>
  );
}
