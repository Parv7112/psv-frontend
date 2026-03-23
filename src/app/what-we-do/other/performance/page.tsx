import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/marketing/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Performance Optimization",
  description:
    "Performance optimization for frontend, APIs, and databases. Improve Core Web Vitals, reduce latency, and increase reliability with a structured plan.",
  canonical: "/what-we-do/other/performance",
});

export default function PerformancePage() {
  return (
    <div className="space-y-12">
      <PageHero
        eyebrow="Other Services"
        title="Performance Optimization"
        description="Improve speed and reliability across frontend, APIs, and databases with a structured optimization plan."
        actions={
          <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
            Let’s talk <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        }
      />

      <section className="relative z-10 -mt-10 rounded-3xl border border-black/5 bg-white/70 p-8 pt-2 shadow-sm sm:p-12">
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
