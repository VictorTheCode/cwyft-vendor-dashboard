import { ChevronDownIcon } from "@/components/icons";
import { faqs } from "@/constants/support";

export function FaqList() {
  return (
    <section>
      <h2 className="text-sm font-semibold text-navy">
        Frequently Asked Questions
      </h2>
      <p className="mb-2 text-[11px] text-gray-500">
        Quick answers to common questions
      </p>

      <div className="divide-y divide-border rounded-2xl border border-border bg-white">
        {faqs.map((f) => (
          <details key={f.question} className="group px-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-xs font-medium text-navy [&::-webkit-details-marker]:hidden">
              {f.question}
              <span className="shrink-0 text-gray-500 transition group-open:rotate-180">
                <ChevronDownIcon />
              </span>
            </summary>
            <p className="pb-4 text-xs leading-relaxed text-gray-600">
              {f.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
