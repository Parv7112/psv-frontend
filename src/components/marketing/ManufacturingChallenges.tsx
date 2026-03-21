"use client";

import { useMemo, useState } from "react";
import {
  Boxes,
  Factory,
  Gauge,
  GitBranch,
  ShieldCheck,
  Wrench,
} from "lucide-react";

type Challenge = {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function ManufacturingChallenges() {
  const items = useMemo<Challenge[]>(
    () => [
      {
        key: "visibility",
        title: "Low operational visibility",
        description:
          "When production, inventory, and dispatch data live in separate systems, leadership loses real-time visibility. Centralized dashboards improve throughput planning and response time.",
        icon: <Gauge className="h-5 w-5" />,
      },
      {
        key: "manual",
        title: "Manual process bottlenecks",
        description:
          "Teams waste hours on repetitive reporting, coordination, and spreadsheet-driven workflows. Automation reduces delay, rework, and human error across operations.",
        icon: <Wrench className="h-5 w-5" />,
      },
      {
        key: "inventory",
        title: "Inventory & supply-chain friction",
        description:
          "Stock mismatches and disconnected order flows create delays and waste. Better systems help align inventory, procurement, and fulfillment with demand.",
        icon: <Boxes className="h-5 w-5" />,
      },
      {
        key: "integration",
        title: "Disconnected tools and data",
        description:
          "ERP, CRM, finance, and plant-floor workflows often don’t talk to each other. Integrations reduce duplicate entry and improve reliability across teams.",
        icon: <GitBranch className="h-5 w-5" />,
      },
      {
        key: "quality",
        title: "Quality and compliance pressure",
        description:
          "Without structured workflows and audit trails, quality issues become harder to detect and resolve. Better systems improve traceability and accountability.",
        icon: <ShieldCheck className="h-5 w-5" />,
      },
      {
        key: "scale",
        title: "Scaling operations across plants or lines",
        description:
          "As output grows, systems must stay consistent across units, locations, and roles. Scalable architecture supports clean governance and predictable operations.",
        icon: <Factory className="h-5 w-5" />,
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
              { k: "Better throughput", v: "Cleaner operations" },
              { k: "Less rework", v: "Automated workflows" },
              { k: "More visibility", v: "Decision-grade dashboards" },
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

