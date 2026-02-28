import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function PerformancePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Other Services"
          title="Performance Optimization"
          description="Improve speed and reliability across frontend, APIs, and databases with a structured optimization plan."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Frontend performance", d: "Reduce load time, improve Core Web Vitals, and optimize bundles." },
            { t: "API latency", d: "Fix slow endpoints with profiling and better query patterns." },
            { t: "MongoDB tuning", d: "Indexes, schema tweaks, and query improvements." },
            { t: "Observability", d: "Track latency, errors, and bottlenecks over time." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{c.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{c.d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

