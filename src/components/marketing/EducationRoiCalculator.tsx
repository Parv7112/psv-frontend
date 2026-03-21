"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";

function clampNumber(n: number, min: number, max: number) {
  if (Number.isNaN(n)) return min;
  return Math.min(max, Math.max(min, n));
}

function money(n: number) {
  const safe = Number.isFinite(n) ? n : 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(safe);
}

export function EducationRoiCalculator() {
  const [students, setStudents] = useState(1500);
  const [avgFeePerStudent, setAvgFeePerStudent] = useState(400);
  const [dropoutRate, setDropoutRate] = useState(8);
  const [retentionImprovementPct, setRetentionImprovementPct] = useState(20);

  const [staffHoursSavedPerWeek, setStaffHoursSavedPerWeek] = useState(30);
  const [adminHourlyCost, setAdminHourlyCost] = useState(18);

  const [annualPlatformCost, setAnnualPlatformCost] = useState(30000);

  const computed = useMemo(() => {
    const s = clampNumber(students, 1, 5_000_000);
    const fee = clampNumber(avgFeePerStudent, 0, 100_000);
    const drop = clampNumber(dropoutRate, 0, 100) / 100;
    const retentionUp = clampNumber(retentionImprovementPct, 0, 100) / 100;

    const hrs = clampNumber(staffHoursSavedPerWeek, 0, 10_000);
    const adminCost = clampNumber(adminHourlyCost, 0, 500);
    const platform = clampNumber(annualPlatformCost, 0, 50_000_000);

    const annualRevenue = s * fee;
    const retainedStudents = s * drop * retentionUp;
    const revenueFromImprovedRetention = retainedStudents * fee;

    const valueOfSavedAdminTime = hrs * 52 * adminCost;

    const totalValue = revenueFromImprovedRetention + valueOfSavedAdminTime;
    const roiPct = platform > 0 ? ((totalValue - platform) / platform) * 100 : 0;

    return {
      revenueFromImprovedRetention,
      valueOfSavedAdminTime,
      totalValue,
      roiPct,
      platform,
    };
  }, [
    students,
    avgFeePerStudent,
    dropoutRate,
    retentionImprovementPct,
    staffHoursSavedPerWeek,
    adminHourlyCost,
    annualPlatformCost,
  ]);

  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            ROI calculator
          </div>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Estimate the value of operational improvements
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            A directional model. Adjust inputs to match your institution and delivery model.
          </p>
        </div>
        <Button
          variant="secondary"
          className="md:self-start"
          onClick={() => {
            setStudents(1500);
            setAvgFeePerStudent(400);
            setDropoutRate(8);
            setRetentionImprovementPct(20);
            setStaffHoursSavedPerWeek(30);
            setAdminHourlyCost(18);
            setAnnualPlatformCost(30000);
          }}
        >
          Reset defaults
        </Button>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-7">
          <div className="text-sm font-semibold text-slate-900">Inputs</div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field label="Students" value={students} onChange={setStudents} min={1} />
            <Field
              label="Average fee per student ($/year)"
              value={avgFeePerStudent}
              onChange={setAvgFeePerStudent}
              min={0}
            />
            <Field
              label="Dropout rate (%)"
              value={dropoutRate}
              onChange={setDropoutRate}
              min={0}
              max={100}
            />
            <Field
              label="Retention improvement (%)"
              value={retentionImprovementPct}
              onChange={setRetentionImprovementPct}
              min={0}
              max={100}
            />
            <Field
              label="Staff hours saved/week"
              value={staffHoursSavedPerWeek}
              onChange={setStaffHoursSavedPerWeek}
              min={0}
              max={10000}
            />
            <Field
              label="Admin hourly cost ($)"
              value={adminHourlyCost}
              onChange={setAdminHourlyCost}
              min={0}
            />
            <div className="sm:col-span-2">
              <Field
                label="Annual platform cost ($)"
                value={annualPlatformCost}
                onChange={setAnnualPlatformCost}
                min={0}
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-7">
          <div className="text-sm font-semibold text-slate-900">Estimated annual results</div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Result
              label="Revenue from improved retention"
              value={money(computed.revenueFromImprovedRetention)}
            />
            <Result
              label="Value of saved staff time"
              value={money(computed.valueOfSavedAdminTime)}
            />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Total estimated annual value
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              {money(computed.totalValue)}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Estimated ROI:</span>
              <span>{Math.round(computed.roiPct).toLocaleString()}%</span>
              <span className="text-slate-400">•</span>
              <span>Assumes {money(computed.platform)} yearly cost</span>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="primary" className="w-full" onClick={() => (window.location.href = "/lets-talk")}>
              Book a consultation to review your ROI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max?: number;
  step?: number;
}) {
  return (
    <label className="block">
      <div className="text-xs font-semibold text-slate-600">{label}</div>
      <input
        type="number"
        inputMode="decimal"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(e.currentTarget.value === "" ? 0 : Number(e.currentTarget.value))}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200"
      />
    </label>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 text-xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}

