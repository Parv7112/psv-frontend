"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    <section className="relative overflow-hidden rounded-[2rem] border-2 border-zinc-900/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-8 shadow-2xl ring-1 ring-white/10 sm:p-12">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            Voices
          </div>
          <h2 className="font-display mt-4 max-w-md text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Trusted by teams who ship
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
            Swipe or use arrows—every engagement is built on clarity and delivery you can measure.
          </p>
        </div>

        <div className="flex gap-2 self-end lg:self-start">
          <button
            type="button"
            onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
            className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:border-amber-500/40 hover:bg-white/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setIdx((i) => (i + 1) % items.length)}
            className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:border-amber-500/40 hover:bg-white/10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10">
        <Quote className="absolute right-6 top-6 h-10 w-10 text-amber-500/25 sm:h-14 sm:w-14" aria-hidden />
        <blockquote
          key={idx}
          className="animate-hero-enter relative pr-4 text-lg font-medium leading-relaxed text-zinc-100 sm:text-xl md:pr-20"
        >
          “{current.quote}”
        </blockquote>
        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
          {current.avatar ? (
            <Image
              src={current.avatar}
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded-2xl object-cover ring-2 ring-amber-500/30"
            />
          ) : (
            <div className="h-14 w-14 rounded-2xl bg-zinc-700" />
          )}
          <div>
            <div className="font-display text-lg font-bold text-white">{current.name}</div>
            <div className="mt-0.5 text-sm text-zinc-400">
              {current.role}
              <span className="mx-2 text-zinc-600">·</span>
              {current.industry}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            className={[
              "h-2 rounded-full transition-all duration-300",
              i === idx ? "w-8 bg-amber-400" : "w-2 bg-zinc-600 hover:bg-zinc-500",
            ].join(" ")}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
