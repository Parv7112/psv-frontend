"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, List } from "lucide-react";

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function BlogToc({
  items,
  showMobile = true,
  showDesktop = true,
}: {
  items: TocItem[];
  showMobile?: boolean;
  showDesktop?: boolean;
}) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;

    const headingElements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headingElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.3, 0.6],
      }
    );

    headingElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const activeItemText = useMemo(
    () => items.find((item) => item.id === activeId)?.text ?? items[0]?.text ?? "Jump to section",
    [activeId, items]
  );

  function scrollToHeading(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    // Keep heading comfortably below sticky header.
    const top = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
    setOpenMobile(false);
  }

  if (items.length === 0) return null;

  return (
    <>
      {showMobile ? (
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:hidden">
        <button
          type="button"
          onClick={() => setOpenMobile((prev) => !prev)}
          className="flex w-full items-center justify-between gap-3 text-left"
        >
          <span className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <List className="h-4 w-4 text-slate-700" />
            In this Article
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-slate-500">
            {activeItemText}
            <ChevronDown className={["h-4 w-4 transition-transform", openMobile ? "rotate-180" : ""].join(" ")} />
          </span>
        </button>

        {openMobile ? (
          <div className="mt-4 max-h-72 overflow-y-auto border-t border-slate-100 pt-4">
            <nav className="space-y-2">
              {items.map((item) => (
                <button
                  key={`m-${item.id}`}
                  type="button"
                  onClick={() => scrollToHeading(item.id)}
                  className={[
                    "block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                    item.level === 3 ? "pl-7" : "",
                    activeId === item.id
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                  ].join(" ")}
                >
                  {item.text}
                </button>
              ))}
            </nav>
          </div>
        ) : null}
        </div>
      ) : null}

      {showDesktop ? (
        <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
          <div className="max-h-[72vh] overflow-y-auto rounded-2xl border border-slate-200/80 bg-transparent p-4">
            <h2 className="mb-3 text-[30px] font-bold tracking-tight text-slate-900">In this Article</h2>
            <div className="mb-3 h-px w-full bg-gradient-to-r from-slate-200 via-slate-200 to-transparent" />
            <nav className="space-y-1 border-l border-slate-200/90 pl-2">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToHeading(item.id)}
                  className={[
                    "group flex w-full items-start gap-2 rounded-r-lg px-2 py-1.5 text-left transition-all",
                    item.level === 3 ? "pl-5" : "",
                    activeId === item.id
                      ? "bg-slate-900 text-white shadow-sm ring-1 ring-slate-800"
                      : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full transition-colors",
                      activeId === item.id ? "bg-amber-300" : "bg-slate-300 group-hover:bg-slate-400",
                    ].join(" ")}
                  />
                  <span className="min-w-0 flex-1">
                    <span
                      className={[
                        "block whitespace-normal break-words text-[15px] leading-[1.45]",
                        item.level === 3 ? "text-[14px]" : "font-medium",
                        activeId === item.id ? "font-semibold" : "",
                      ].join(" ")}
                    >
                      {item.text}
                    </span>
                  </span>
                  {activeId === item.id ? (
                    <span className="mt-[2px] text-[11px] font-semibold uppercase tracking-wide text-amber-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  ) : null}
                </button>
              ))}
            </nav>
          </div>
        </aside>
      ) : null}
    </>
  );
}

