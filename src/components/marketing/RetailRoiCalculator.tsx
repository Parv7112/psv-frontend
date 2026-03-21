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

export function RetailRoiCalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(120000);
  const [conversionRate, setConversionRate] = useState(1.6);
  const [avgOrderValue, setAvgOrderValue] = useState(55);

  const [conversionLiftPct, setConversionLiftPct] = useState(15);
  const [supportHoursSavedPerWeek, setSupportHoursSavedPerWeek] = useState(20);
  const [supportHourlyCost, setSupportHourlyCost] = useState(18);

  const [annualPlatformCost, setAnnualPlatformCost] = useState(40000);

  const computed = useMemo(() => {
    const visitors = clampNumber(monthlyVisitors, 1, 1_000_000_000);
    const cr = clampNumber(conversionRate, 0, 100) / 100;
    const aov = clampNumber(avgOrderValue, 0, 100000);

    const lift = clampNumber(conversionLiftPct, 0, 200) / 100;
    const hoursSaved = clampNumber(supportHoursSavedPerWeek, 0, 10000);
    const hourly = clampNumber(supportHourlyCost, 0, 500);
    const platform = clampNumber(annualPlatformCost, 0, 50_000_000);

    const baselineOrdersPerMonth = visitors * cr;
    const incrementalOrdersPerMonth = baselineOrdersPerMonth * lift;
    const incrementalRevenuePerYear = incrementalOrdersPerMonth * aov * 12;

    const valueOfSavedSupportTime = hoursSaved * 52 * hourly;

    const totalValue = incrementalRevenuePerYear + valueOfSavedSupportTime;
    const roiPct = platform > 0 ? ((totalValue - platform) / platform) * 100 : 0;

    return {
      incrementalRevenuePerYear,
      valueOfSavedSupportTime,
      totalValue,
      roiPct,
      platform,
    };
  }, [
    monthlyVisitors,
    conversionRate,
    avgOrderValue,
    conversionLiftPct,
    supportHoursSavedPerWeek,
    supportHourlyCost,
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
            Estimate the impact of conversion and ops improvements
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            A directional model. Adjust assumptions to match your business.
          </p>
        </div>
        <Button
          variant="secondary"
          className="md:self-start"
          onClick={() => {
            setMonthlyVisitors(120000);
            setConversionRate(1.6);
            setAvgOrderValue(55);
            setConversionLiftPct(15);
            setSupportHoursSavedPerWeek(20);
            setSupportHourlyCost(18);
            setAnnualPlatformCost(40000);
          }}
        >
          Reset defaults
        </Button>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-7">
          <div className="text-sm font-semibold text-slate-900">Inputs</div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field
              label="Monthly visitors"
              value={monthlyVisitors}
              onChange={setMonthlyVisitors}
              min={1}
            />
            <Field
              label="Conversion rate (%)"
              value={conversionRate}
              onChange={setConversionRate}
              min={0}
              max={100}
              step={0.1}
            />
            <Field
              label="Average order value ($)"
              value={avgOrderValue}
              onChange={setAvgOrderValue}
              min={0}
            />
            <Field
              label="Conversion lift (%)"
              value={conversionLiftPct}
              onChange={setConversionLiftPct}
              min={0}
              max={200}
            />
            <Field
              label="Support hours saved/week"
              value={supportHoursSavedPerWeek}
              onChange={setSupportHoursSavedPerWeek}
              min={0}
              max={10000}
            />
            <Field
              label="Support hourly cost ($)"
              value={supportHourlyCost}
              onChange={setSupportHourlyCost}
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
              label="Incremental revenue (year)"
              value={money(computed.incrementalRevenuePerYear)}
            />
            <Result
              label="Value of saved support time"
              value={money(computed.valueOfSavedSupportTime)}
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

