import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function DevopsPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Other Services"
          title="DevOps & Deployment"
          description="Deploy confidently with clear environments, CI/CD guidance, and reliability-minded practices."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
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

