export function StatRow() {
  const stats = [
    { k: "250k+", v: "Hours of Experience" },
    { k: "105+", v: "Projects Delivered" },
    { k: "96%", v: "Client Satisfaction" },
    { k: "25+", v: "Businesses Served" },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.v}
          className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
        >
          <div className="text-2xl font-semibold tracking-tight text-slate-900">
            {s.k}
          </div>
          <div className="mt-1 text-sm text-slate-600">{s.v}</div>
        </div>
      ))}
    </div>
  );
}

