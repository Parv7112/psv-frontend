"use client";

import { useMemo, useState } from "react";
import {
  BadgeCheck,
  BookOpen,
  CalendarDays,
  ChartNoAxesCombined,
  GraduationCap,
  Languages,
} from "lucide-react";

type Challenge = {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function EducationChallenges() {
  const items = useMemo<Challenge[]>(
    () => [
      {
        key: "ops",
        title: "Operational overhead",
        description:
          "Manual coordination across admissions, schedules, fees, attendance, and reporting slows teams down. Streamlined workflows and automation reduce repetitive admin work while improving accuracy.",
        icon: <CalendarDays className="h-5 w-5" />,
      },
      {
        key: "learning",
        title: "Fragmented learning experience",
        description:
          "Learners bounce between tools for content, assignments, communication, and progress. A unified platform improves engagement and keeps everyone aligned.",
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        key: "analytics",
        title: "Limited visibility into performance",
        description:
          "Without clean data and dashboards, it’s hard to identify at‑risk learners and what content works. Analytics help track progress, outcomes, and resource utilization.",
        icon: <ChartNoAxesCombined className="h-5 w-5" />,
      },
      {
        key: "integrations",
        title: "Disconnected systems",
        description:
          "CRMs, ERPs, payment gateways, content repositories, and identity providers often live in silos. Integrations reduce duplicate entry and improve data reliability.",
        icon: <BadgeCheck className="h-5 w-5" />,
      },
      {
        key: "scale",
        title: "Scaling across cohorts & campuses",
        description:
          "As you grow, role-based access, multi‑tenant structures, and consistent governance become essential. We design platforms that scale without degrading the experience.",
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        key: "multilingual",
        title: "Multilingual and accessibility needs",
        description:
          "Education platforms must work for diverse audiences. We implement localization-ready UIs and accessibility-minded components for better reach and compliance.",
        icon: <Languages className="h-5 w-5" />,
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
              { k: "Higher engagement", v: "Cleaner learner journeys" },
              { k: "Less admin load", v: "Automation & workflows" },
              { k: "Better outcomes", v: "Data-driven decisions" },
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

