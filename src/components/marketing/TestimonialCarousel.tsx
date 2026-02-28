"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  industry: string;
  avatar?: string;
};

export function TestimonialCarousel({
  items: itemsProp,
}: {
  items?: TestimonialItem[];
} = {}) {
  const defaultItems: TestimonialItem[] = useMemo(
    () => [
      {
        quote:
          "PSV was punctual and delivered our requirements efficiently, with clear milestones and strong communication.",
        name: "Client",
        role: "Founder",
        industry: "Education",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        quote:
          "They suggested improvements beyond what we asked. The result was faster, cleaner, and easier to maintain.",
        name: "Client",
        role: "Delivery Manager",
        industry: "Logistics",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      {
        quote:
          "Great work ethic and high-quality delivery. The system is stable in production and the UX feels premium.",
        name: "Client",
        role: "Product Owner",
        industry: "Technology",
        avatar: "https://i.pravatar.cc/150?img=9",
      },
    ],
    []
  );
  const items = itemsProp ?? defaultItems;

  const [idx, setIdx] = useState(0);
  const current = items[idx]!;

  return (
    <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            What our clients say
          </div>
          <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            Real feedback from real teams
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
            className="grid h-10 w-10 place-items-center rounded-xl bg-white text-slate-900 ring-1 ring-black/10 hover:bg-slate-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setIdx((i) => (i + 1) % items.length)}
            className="grid h-10 w-10 place-items-center rounded-xl bg-white text-slate-900 ring-1 ring-black/10 hover:bg-slate-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
        <div className="text-base leading-7 text-slate-700">“{current.quote}”</div>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
          {current.avatar ? (
            <Image
              src={current.avatar}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-slate-300" />
          )}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-semibold text-slate-900">{current.name}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-600">{current.role}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-600">{current.industry}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            className={[
              "h-2 w-2 rounded-full",
              i === idx ? "bg-indigo-600" : "bg-slate-300",
            ].join(" ")}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

