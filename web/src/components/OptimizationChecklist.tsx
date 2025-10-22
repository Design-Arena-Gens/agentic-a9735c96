'use client';

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const checklistItems = [
  "Your hook addresses a real customer pain in the first line.",
  "Visual focal point clearly shows the product or transformation.",
  "Copy highlights one primary benefit and supporting proof.",
  "Brand elements (logo, colors, type) are consistent with the funnel.",
  "You have at least two variations ready for testing.",
  "UTM parameters or tracking pixels are configured.",
];

const OptimizationChecklist = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const toggleItem = (item: string) =>
    setChecked((prev) =>
      prev.includes(item) ? prev.filter((value) => value !== item) : [...prev, item],
    );

  return (
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-7 text-slate-100 shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
            Launch checklist
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Make sure your ad is bulletproof
          </h3>
        </div>
        <CheckCircle2 className="h-10 w-10 text-orange-300" />
      </div>
      <ul className="mt-6 space-y-3">
        {checklistItems.map((item) => {
          const isChecked = checked.includes(item);
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => toggleItem(item)}
                className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                  isChecked
                    ? "border-orange-400 bg-white/10 text-orange-100"
                    : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                <span
                  className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    isChecked
                      ? "border-orange-300 bg-orange-300 text-slate-900"
                      : "border-slate-500 text-slate-400"
                  }`}
                >
                  {isChecked ? "✓" : ""}
                </span>
                <span className="text-sm leading-6">{item}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OptimizationChecklist;
