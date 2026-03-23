export function StatRow({ variant = "light" }: { variant?: "light" | "dark" }) {
  const stats = [
    { k: "250k+", v: "Hours of experience" },
    { k: "105+", v: "Projects delivered" },
    { k: "96%", v: "Client satisfaction" },
    { k: "25+", v: "Businesses served" },
  ];

  if (variant === "dark") {
    return (
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/20 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.v} className="bg-zinc-950/40 px-4 py-5 text-center backdrop-blur-sm sm:px-6">
            <div className="font-display text-2xl font-bold tracking-tight text-amber-400 sm:text-3xl">{s.k}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-400">{s.v}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.v}
          className="rounded-2xl border-2 border-zinc-900/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/30 hover:shadow-md"
        >
          <div className="font-display text-2xl font-bold tracking-tight text-zinc-900">{s.k}</div>
          <div className="mt-1 text-sm text-zinc-600">{s.v}</div>
        </div>
      ))}
    </div>
  );
}
