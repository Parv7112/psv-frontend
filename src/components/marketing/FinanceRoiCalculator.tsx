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

export function FinanceRoiCalculator() {
  const [monthlyTransactions, setMonthlyTransactions] = useState(18000);
  const [avgValuePerTransaction, setAvgValuePerTransaction] = useState(120);
  const [manualReviewRate, setManualReviewRate] = useState(12);
  const [reviewReductionPct, setReviewReductionPct] = useState(25);
  const [opsHoursSavedPerWeek, setOpsHoursSavedPerWeek] = useState(30);
  const [opsHourlyCost, setOpsHourlyCost] = useState(28);
  const [annualPlatformCost, setAnnualPlatformCost] = useState(50000);

  const computed = useMemo(() => {
    const tx = clampNumber(monthlyTransactions, 1, 1_000_000_000);
    const value = clampNumber(avgValuePerTransaction, 0, 1_000_000);
    const review = clampNumber(manualReviewRate, 0, 100) / 100;
    const reduction = clampNumber(reviewReductionPct, 0, 100) / 100;
    const hours = clampNumber(opsHoursSavedPerWeek, 0, 10000);
    const hourly = clampNumber(opsHourlyCost, 0, 1000);
    const platform = clampNumber(annualPlatformCost, 0, 50_000_000);

    const annualVolume = tx * value * 12;
    const valueOfReviewReduction = annualVolume * review * reduction * 0.02;
    const valueOfSavedOpsTime = hours * 52 * hourly;
    const totalValue = valueOfReviewReduction + valueOfSavedOpsTime;
    const roiPct = platform > 0 ? ((totalValue - platform) / platform) * 100 : 0;

    return {
      valueOfReviewReduction,
      valueOfSavedOpsTime,
      totalValue,
      roiPct,
      platform,
    };
  }, [
    monthlyTransactions,
    avgValuePerTransaction,
    manualReviewRate,
    reviewReductionPct,
    opsHoursSavedPerWeek,
    opsHourlyCost,
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
            Estimate the impact of automation and reporting improvements
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            A directional model to quantify reduced review effort and operational savings.
          </p>
        </div>
        <Button
          variant="secondary"
          className="md:self-start"
          onClick={() => {
            setMonthlyTransactions(18000);
            setAvgValuePerTransaction(120);
            setManualReviewRate(12);
            setReviewReductionPct(25);
            setOpsHoursSavedPerWeek(30);
            setOpsHourlyCost(28);
            setAnnualPlatformCost(50000);
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
              label="Monthly transactions"
              value={monthlyTransactions}
              onChange={setMonthlyTransactions}
              min={1}
            />
            <Field
              label="Average value/transaction ($)"
              value={avgValuePerTransaction}
              onChange={setAvgValuePerTransaction}
              min={0}
            />
            <Field
              label="Manual review rate (%)"
              value={manualReviewRate}
              onChange={setManualReviewRate}
              min={0}
              max={100}
            />
            <Field
              label="Review reduction (%)"
              value={reviewReductionPct}
              onChange={setReviewReductionPct}
              min={0}
              max={100}
            />
            <Field
              label="Ops hours saved/week"
              value={opsHoursSavedPerWeek}
              onChange={setOpsHoursSavedPerWeek}
              min={0}
              max={10000}
            />
            <Field
              label="Ops hourly cost ($)"
              value={opsHourlyCost}
              onChange={setOpsHourlyCost}
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
              label="Value from less manual review"
              value={money(computed.valueOfReviewReduction)}
            />
            <Result
              label="Value of saved ops time"
              value={money(computed.valueOfSavedOpsTime)}
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

