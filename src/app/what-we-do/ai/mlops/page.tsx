import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function MlopsPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="AI Development"
          title="MLOps Development"
          description="Operationalize ML and AI systems: deployments, monitoring, cost control, and reliable iteration."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Deployment pipelines", d: "Versioning, environments, and controlled releases." },
            { t: "Monitoring", d: "Track latency, errors, drift, and quality metrics." },
            { t: "Cost governance", d: "Usage tracking and optimization across models and tools." },
            { t: "Security", d: "Secrets management and safe access patterns." },
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

