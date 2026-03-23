import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  right,
  dark,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  right?: ReactNode;
  /** Use on dark band sections */
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <div
            className={
              dark
                ? "inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-amber-300 ring-1 ring-white/20"
                : "inline-flex items-center rounded-full bg-zinc-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-amber-400"
            }
          >
            {eyebrow}
          </div>
        ) : null}
        <h2
          className={[
            "font-display text-3xl font-bold tracking-tight sm:text-4xl",
            eyebrow ? "mt-4" : "mt-0",
            dark ? "text-white" : "text-zinc-900",
          ].join(" ")}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={
              dark
                ? "mt-4 text-base leading-relaxed text-zinc-400"
                : "mt-4 text-base leading-relaxed text-zinc-600"
            }
          >
            {description}
          </p>
        ) : null}
      </div>
      {right ? <div className="shrink-0 md:pb-1">{right}</div> : null}
    </div>
  );
}
