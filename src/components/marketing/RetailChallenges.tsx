"use client";

import { useMemo, useState } from "react";
import {
  BadgeDollarSign,
  BarChart3,
  Boxes,
  CreditCard,
  Headset,
  Search,
} from "lucide-react";

type Challenge = {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function RetailChallenges() {
  const items = useMemo<Challenge[]>(
    () => [
      {
        key: "conversion",
        title: "Conversion & checkout drop-offs",
        description:
          "Slow pages, confusing flows, and friction at checkout reduce revenue. We optimize UX, performance, and payment flows to improve conversion without sacrificing reliability.",
        icon: <CreditCard className="h-5 w-5" />,
      },
      {
        key: "catalog",
        title: "Catalog & search quality",
        description:
          "Product discovery depends on fast search, relevant ranking, and clean filters. We build performance-aware search and data models that scale with your catalog.",
        icon: <Search className="h-5 w-5" />,
      },
      {
        key: "inventory",
        title: "Inventory & order operations",
        description:
          "Inconsistent stock, manual updates, and fragmented tooling cause delays and refunds. We automate workflows across inventory, fulfillment, and returns.",
        icon: <Boxes className="h-5 w-5" />,
      },
      {
        key: "support",
        title: "Customer support load",
        description:
          "Status queries and repetitive issues drain support bandwidth. Self-serve portals, proactive notifications, and workflow automation reduce tickets and improve satisfaction.",
        icon: <Headset className="h-5 w-5" />,
      },
      {
        key: "analytics",
        title: "Limited visibility into performance",
        description:
          "Without clean data, it’s hard to understand funnel drop-offs, campaign performance, and LTV. Dashboards and pipelines provide decision-grade reporting.",
        icon: <BarChart3 className="h-5 w-5" />,
      },
      {
        key: "pricing",
        title: "Pricing & margins pressure",
        description:
          "Margin is won in operations: better workflows, fewer errors, and faster cycles. We help reduce operational cost while improving reliability and speed.",
        icon: <BadgeDollarSign className="h-5 w-5" />,
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
              { k: "Faster funnels", v: "Performance-first UX" },
              { k: "Cleaner ops", v: "Automation & integrations" },
              { k: "Higher revenue", v: "Conversion + retention" },
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

