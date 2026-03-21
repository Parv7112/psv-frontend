"use client";

import { ContactForm } from "@/components/ContactForm";

export function GrowthSection() {
  const stats = [
    { k: "4+", v: "Years Of Experience" },
    { k: "8+", v: "Projects Delivered" },
    { k: "4+", v: "Happy Clients" },
    { k: "Global", v: "Delivery" },
  ];

  return (
    <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Discover
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Discover how we can help your business grow
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Connect with our experts and elevate your business performance with reliable delivery,
            clear communication, and production-ready engineering.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-slate-200/70 bg-slate-50/60 p-5"
              >
                <div className="text-2xl font-semibold tracking-tight text-slate-900">
                  {s.k}
                </div>
                <div className="mt-1 text-sm text-slate-600">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-8">
          <div className="text-sm font-semibold text-slate-900">
            Let’s understand your needs—we’re here to support you with the right solution.
          </div>
          <div className="mt-6">
            <ContactForm source="healthcare-growth" />
          </div>
        </div>
      </div>
    </section>
  );
}

