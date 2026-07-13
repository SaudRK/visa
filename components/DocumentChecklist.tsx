"use client";

import { useState } from "react";
import type { DocumentItem } from "@/lib/types";

interface DocumentChecklistProps {
  documents: DocumentItem[];
}

export default function DocumentChecklist({ documents }: DocumentChecklistProps) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div>
      <div className="mb-4 flex items-end justify-between gap-4">
        <p className="text-sm text-muted">
          Check items off as you gather them. Progress stays on this device only.
        </p>
        <p className="shrink-0 font-mono text-sm text-sea">
          {done}/{documents.length} ready
        </p>
      </div>

      <ul className="border border-line">
        {documents.map((doc, index) => {
          const isChecked = Boolean(checked[index]);
          return (
            <li key={doc.item} className="border-b border-line last:border-b-0">
              <label
                className={`flex cursor-pointer gap-4 p-4 transition-colors ${
                  isChecked ? "bg-sea-soft" : "bg-surface hover:bg-bg"
                }`}
              >
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-[var(--color-sea)]"
                  checked={isChecked}
                  onChange={() =>
                    setChecked((prev) => ({ ...prev, [index]: !prev[index] }))
                  }
                />
                <span>
                  <span
                    className={`block font-semibold ${
                      isChecked ? "text-sea line-through decoration-sea/40" : "text-ink"
                    }`}
                  >
                    {doc.item}
                  </span>
                  <span className="mt-1 block text-sm text-muted leading-relaxed">
                    {doc.why}
                  </span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
