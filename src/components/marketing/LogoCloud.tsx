export function LogoCloud({ title, hideTitle }: { title?: string; hideTitle?: boolean } = {}) {
  const logos = ["ClientOne", "ClientTwo", "ClientThree", "ClientFour", "ClientFive", "ClientSix"];
  const heading = title ?? "Trusted by ambitious teams";

  return (
    <div className="rounded-3xl border-2 border-zinc-900/5 bg-white p-6 shadow-xl shadow-zinc-900/5">
      {!hideTitle && (
        <div className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500">{heading}</div>
      )}
      <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 ${hideTitle ? "" : "mt-4"}`}>
        {logos.map((l) => (
          <div
            key={l}
            className="flex items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold tracking-tight text-zinc-500 transition-colors hover:border-amber-400/40 hover:text-zinc-700"
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
