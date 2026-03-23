import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/marketing/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "DevOps & Deployment",
  description:
    "DevOps and deployment services to ship confidently: environment setup, CI/CD guidance, monitoring-ready architecture, and reliability practices.",
  canonical: "/what-we-do/other/devops",
});

export default function DevopsPage() {
  return (
    <div className="space-y-12">
      <PageHero
        eyebrow="Other Services"
        title="DevOps & Deployment"
        description="Deploy confidently with clear environments, CI/CD guidance, and reliability-minded practices."
        actions={
          <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
            Let’s talk <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        }
      />

      <section className="relative z-10 -mt-10 rounded-3xl border border-black/5 bg-white/70 p-8 pt-2 shadow-sm sm:p-12">
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Environment setup", d: "Clear env configs, secrets management guidance, and runbooks." },
            { t: "CI/CD pipelines", d: "Repeatable builds, tests, and safe releases." },
            { t: "Monitoring-ready", d: "Logging structure and error handling patterns." },
            { t: "Performance basics", d: "Caching, indexing, and operational improvements." },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-900">{c.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{c.d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
