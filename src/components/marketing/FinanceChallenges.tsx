"use client";

import { useMemo, useState } from "react";
import {
  BarChart3,
  FileSearch,
  Landmark,
  Lock,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

type Challenge = {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function FinanceChallenges() {
  const items = useMemo<Challenge[]>(
    () => [
      {
        key: "ops",
        title: "Manual finance operations",
        description:
          "Spreadsheet-heavy workflows and repetitive coordination slow teams down. Workflow automation reduces manual effort across reconciliation, approvals, and reporting.",
        icon: <WalletCards className="h-5 w-5" />,
      },
      {
        key: "visibility",
        title: "Limited reporting visibility",
        description:
          "Without clean dashboards and structured pipelines, it’s hard to understand financial performance in time to act. Better reporting supports quicker decisions.",
        icon: <BarChart3 className="h-5 w-5" />,
      },
      {
        key: "compliance",
        title: "Compliance & audit pressure",
        description:
          "Financial workflows need clear controls, traceability, and role-based access. Systems should support audit readiness rather than add risk.",
        icon: <ShieldCheck className="h-5 w-5" />,
      },
      {
        key: "data",
        title: "Disconnected systems and data",
        description:
          "CRMs, ERPs, banking tools, and internal systems often don’t align. Integrations reduce duplicate entry and improve reliability across departments.",
        icon: <Landmark className="h-5 w-5" />,
      },
      {
        key: "security",
        title: "Security and access complexity",
        description:
          "Sensitive financial data requires least-privilege access, secure workflows, and strong operational controls from day one.",
        icon: <Lock className="h-5 w-5" />,
      },
      {
        key: "documents",
        title: "Document and record friction",
        description:
          "Invoices, statements, and internal records become bottlenecks when they stay unstructured. Better systems make them searchable and actionable.",
        icon: <FileSearch className="h-5 w-5" />,
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
              { k: "Better controls", v: "Role-based workflows" },
              { k: "Faster reporting", v: "Decision-grade dashboards" },
              { k: "Lower friction", v: "Automation & integrations" },
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

