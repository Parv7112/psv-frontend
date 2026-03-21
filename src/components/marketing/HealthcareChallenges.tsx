"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  ClipboardList,
  FileSearch,
  HandCoins,
  MessageSquareText,
} from "lucide-react";

type Challenge = {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function HealthcareChallenges() {
  const items = useMemo<Challenge[]>(
    () => [
      {
        key: "docs",
        title: "Documentation & note burden",
        description:
          "Clinicians lose hours to EMR navigation and repetitive documentation. Automating structured note creation and summaries reduces burnout while improving consistency and chart completeness.",
        icon: <ClipboardList className="h-5 w-5" />,
      },
      {
        key: "scheduling",
        title: "Scheduling & call overload",
        description:
          "Appointment requests, reschedules, and reminder calls consume staff time. Digital intake, automated reminders, and self-serve scheduling reduce no-shows and improve patient experience.",
        icon: <CalendarDays className="h-5 w-5" />,
      },
      {
        key: "rcm",
        title: "Revenue cycle inefficiency",
        description:
          "Inconsistent data capture leads to claim errors, denials, and slow reimbursement. Validation, workflow automation, and reporting can improve accuracy and reduce rework across billing operations.",
        icon: <HandCoins className="h-5 w-5" />,
      },
      {
        key: "docs-unstructured",
        title: "Unstructured documents",
        description:
          "PDFs, scans, and free-text notes hide critical information. Intelligent extraction and routing make documents searchable and actionable without manual data entry.",
        icon: <FileSearch className="h-5 w-5" />,
      },
      {
        key: "engagement",
        title: "Limited patient engagement",
        description:
          "Between visits, patients need guidance and follow-ups. Messaging workflows and assistants can improve adherence, reduce missed appointments, and keep care plans on track.",
        icon: <MessageSquareText className="h-5 w-5" />,
      },
    ],
    []
  );

  const [active, setActive] = useState(items[0]!.key);
  const current = items.find((i) => i.key === active) ?? items[0]!;

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="space-y-3">
          {items.map((c) => {
            const selected = c.key === active;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(c.key)}
                className={[
                  "flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition",
                  selected
                    ? "border-slate-300 bg-white shadow-sm"
                    : "border-slate-200/70 bg-white/70 hover:bg-white",
                ].join(" ")}
                aria-pressed={selected}
              >
                <span
                  className={[
                    "grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1",
                    selected
                      ? "bg-slate-900 text-white ring-slate-900"
                      : "bg-slate-50 text-slate-700 ring-slate-200",
                  ].join(" ")}
                >
                  {c.icon}
                </span>
                <span className="text-sm font-semibold text-slate-900">{c.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-10">
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-900 text-white">
              {current.icon}
            </span>
            <div>
              <div className="text-lg font-semibold text-slate-900 sm:text-xl">
                {current.title}
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                {current.description}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Less manual work", v: "Automation-first workflows" },
              { k: "Better accuracy", v: "Validations & guardrails" },
              { k: "Faster operations", v: "Integrated routing & tools" },
            ].map((m) => (
              <div
                key={m.k}
                className="rounded-2xl border border-slate-200/70 bg-slate-50/60 p-4"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {m.k}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

