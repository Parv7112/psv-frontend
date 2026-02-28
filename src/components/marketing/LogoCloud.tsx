export function LogoCloud() {
  const logos = ["ClientOne", "ClientTwo", "ClientThree", "ClientFour", "ClientFive", "ClientSix"];

  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        Trusted by ambitious teams
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((l) => (
          <div
            key={l}
            className="flex items-center justify-center rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm font-semibold tracking-tight text-slate-500"
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

