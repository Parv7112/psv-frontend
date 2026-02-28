"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({
  items,
  defaultOpenIndex = 0,
  variant = "card",
}: {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
  variant?: "card" | "minimal" | "arrow";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const useArrow = variant === "arrow";

  return (
    <div
      className={
        variant === "minimal" || useArrow
          ? "divide-y divide-slate-200/70 rounded-2xl border border-slate-200/70 bg-white shadow-[0_10px_30px_rgba(2,6,23,0.05)]"
          : "divide-y divide-slate-200/70 rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
      }
    >
      {items.map((item, idx) => {
        const open = openIndex === idx;
        return (
          <button
            key={item.question}
            type="button"
            onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
            className="w-full text-left focus:outline-none"
            aria-expanded={open}
          >
            <div
              className={
                variant === "minimal" || useArrow
                  ? "flex items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50"
                  : "flex items-center justify-between gap-6 px-6 py-5"
              }
            >
              <div className="text-sm font-semibold text-slate-900 sm:text-base">
                {item.question}
              </div>
              {useArrow ? (
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`}
                />
              ) : variant === "minimal" ? (
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-slate-700 ring-1 ring-slate-200">
                  <span className="text-xl leading-none">{open ? "–" : "+"}</span>
                </span>
              ) : (
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-50 text-slate-900 ring-1 ring-slate-200">
                  <span className="text-lg leading-none">{open ? "–" : "+"}</span>
                </div>
              )}
            </div>
            {open ? (
              <div className={variant === "minimal" || useArrow ? "px-6 pb-6" : "px-6 pb-6"}>
                <p className="max-w-4xl text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </div>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

