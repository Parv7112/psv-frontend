"use client";

const DEFAULT_ITEMS = [
  "Next.js",
  "Node.js",
  "MongoDB",
  "TypeScript",
  "React",
  "AI & RAG",
  "REST APIs",
  "AWS",
  "Tailwind",
  "Mobile",
  "MERN",
  "Product design",
];

type TechMarqueeProps = {
  items?: string[];
  variant?: "dark" | "light";
};

export function TechMarquee({ items = DEFAULT_ITEMS, variant = "dark" }: TechMarqueeProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={[
        "group relative overflow-hidden border-y py-3",
        isDark ? "border-zinc-800/80 bg-zinc-950" : "border-zinc-200/80 bg-white/80",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32",
          isDark ? "bg-gradient-to-r from-zinc-950" : "bg-gradient-to-r from-[#ebe8e3]",
        ].join(" ")}
      />
      <div
        className={[
          "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32",
          isDark ? "bg-gradient-to-l from-zinc-950" : "bg-gradient-to-l from-[#ebe8e3]",
        ].join(" ")}
      />
      <div className="animate-marquee-scroll flex w-max gap-8 px-4 md:gap-12 md:px-8">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-8 md:gap-12">
            {items.map((label) => (
              <span
                key={`${dup}-${label}`}
                className={[
                  "flex items-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] md:text-sm",
                  isDark ? "text-zinc-500" : "text-zinc-600",
                ].join(" ")}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
