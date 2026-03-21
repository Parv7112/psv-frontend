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

export function HealthcareRoiCalculator() {
  const [providers, setProviders] = useState(10);
  const [patientsPerProviderPerDay, setPatientsPerProviderPerDay] = useState(15);
  const [noShowRate, setNoShowRate] = useState(10);
  const [avgReimbursementPerVisit, setAvgReimbursementPerVisit] = useState(180);
  const [providerHourlyCost, setProviderHourlyCost] = useState(120);
  const [adminHourlyCost, setAdminHourlyCost] = useState(25);

  const [noShowReductionPct, setNoShowReductionPct] = useState(25);
  const [minutesSavedPerVisit, setMinutesSavedPerVisit] = useState(2);
  const [codingUpliftPct, setCodingUpliftPct] = useState(1);
  const [adminHoursSavedPerWeek, setAdminHoursSavedPerWeek] = useState(15);
  const [annualPlatformCost, setAnnualPlatformCost] = useState(40000);

  const workDaysPerYear = 240;

  const computed = useMemo(() => {
    const p = clampNumber(providers, 1, 500);
    const ppd = clampNumber(patientsPerProviderPerDay, 1, 100);
    const ns = clampNumber(noShowRate, 0, 100) / 100;
    const reimb = clampNumber(avgReimbursementPerVisit, 0, 10000);
    const provCost = clampNumber(providerHourlyCost, 0, 2000);
    const admCost = clampNumber(adminHourlyCost, 0, 500);

    const nsReduction = clampNumber(noShowReductionPct, 0, 100) / 100;
    const minsSaved = clampNumber(minutesSavedPerVisit, 0, 30);
    const uplift = clampNumber(codingUpliftPct, 0, 10) / 100;
    const adminHrs = clampNumber(adminHoursSavedPerWeek, 0, 200);
    const platform = clampNumber(annualPlatformCost, 0, 5000000);

    const annualVisits = p * ppd * workDaysPerYear;
    const annualRevenue = annualVisits * reimb;

    const recoveredVisits = annualVisits * ns * nsReduction;
    const revenueFromReducedNoShows = recoveredVisits * reimb;

    const recoveredProviderHours = (annualVisits * minsSaved) / 60;
    const valueOfRecoveredProviderTime = recoveredProviderHours * provCost;

    const revenueUpliftFromAccurateCoding = annualRevenue * uplift;

    const valueOfSavedAdminTime = adminHrs * 52 * admCost;

    const totalValue =
      revenueFromReducedNoShows +
      valueOfRecoveredProviderTime +
      revenueUpliftFromAccurateCoding +
      valueOfSavedAdminTime;

    const roiPct = platform > 0 ? ((totalValue - platform) / platform) * 100 : 0;

    return {
      revenueFromReducedNoShows,
      valueOfRecoveredProviderTime,
      revenueUpliftFromAccurateCoding,
      valueOfSavedAdminTime,
      totalValue,
      roiPct,
    };
  }, [
    providers,
    patientsPerProviderPerDay,
    noShowRate,
    avgReimbursementPerVisit,
    providerHourlyCost,
    adminHourlyCost,
    noShowReductionPct,
    minutesSavedPerVisit,
    codingUpliftPct,
    adminHoursSavedPerWeek,
    annualPlatformCost,
  ]);

  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">ROI calculator</div>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Stop guessing. Calculate your practice&apos;s potential ROI.
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            A directional model to quantify savings and revenue impact from reducing administrative burden and operational inefficiencies.
          </p>
        </div>
        <Button
          variant="secondary"
          className="md:self-start"
          onClick={() => {
            setProviders(10);
            setPatientsPerProviderPerDay(15);
            setNoShowRate(10);
            setAvgReimbursementPerVisit(180);
            setProviderHourlyCost(120);
            setAdminHourlyCost(25);
            setNoShowReductionPct(25);
            setMinutesSavedPerVisit(2);
            setCodingUpliftPct(1);
            setAdminHoursSavedPerWeek(15);
            setAnnualPlatformCost(40000);
          }}
        >
          Reset defaults
        </Button>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-7">
          <div className="text-sm font-semibold text-slate-900">Practice inputs</div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field label="Providers" value={providers} onChange={setProviders} min={1} />
            <Field
              label="Patients per provider/day"
              value={patientsPerProviderPerDay}
              onChange={setPatientsPerProviderPerDay}
              min={1}
            />
            <Field
              label="No-show rate (%)"
              value={noShowRate}
              onChange={setNoShowRate}
              min={0}
              max={100}
            />
            <Field
              label="Avg reimbursement/visit ($)"
              value={avgReimbursementPerVisit}
              onChange={setAvgReimbursementPerVisit}
              min={0}
            />
            <Field
              label="Provider hourly cost ($)"
              value={providerHourlyCost}
              onChange={setProviderHourlyCost}
              min={0}
            />
            <Field
              label="Admin hourly cost ($)"
              value={adminHourlyCost}
              onChange={setAdminHourlyCost}
              min={0}
            />
          </div>

          <div className="mt-7 text-sm font-semibold text-slate-900">Assumptions</div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field
              label="No-show reduction (%)"
              value={noShowReductionPct}
              onChange={setNoShowReductionPct}
              min={0}
              max={100}
            />
            <Field
              label="Minutes saved per visit"
              value={minutesSavedPerVisit}
              onChange={setMinutesSavedPerVisit}
              min={0}
              max={30}
            />
            <Field
              label="Coding uplift (%)"
              value={codingUpliftPct}
              onChange={setCodingUpliftPct}
              min={0}
              max={10}
              step={0.25}
            />
            <Field
              label="Admin hours saved/week"
              value={adminHoursSavedPerWeek}
              onChange={setAdminHoursSavedPerWeek}
              min={0}
              max={200}
            />
            <Field
              label="Annual platform cost ($)"
              value={annualPlatformCost}
              onChange={setAnnualPlatformCost}
              min={0}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-7">
          <div className="text-sm font-semibold text-slate-900">Estimated annual results</div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Result
              label="Revenue from fewer no-shows"
              value={money(computed.revenueFromReducedNoShows)}
            />
            <Result
              label="Value of recovered provider time"
              value={money(computed.valueOfRecoveredProviderTime)}
            />
            <Result
              label="Revenue uplift from coding accuracy"
              value={money(computed.revenueUpliftFromAccurateCoding)}
            />
            <Result label="Value of saved admin time" value={money(computed.valueOfSavedAdminTime)} />
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
              <span>Assumes {money(annualPlatformCost)} yearly cost</span>
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

