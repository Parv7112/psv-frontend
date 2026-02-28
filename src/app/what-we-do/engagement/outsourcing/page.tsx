import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function OutsourcingPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Engagement Models"
          title="Software Outsourcing"
          description="We take end-to-end ownership—scope to launch—so you can focus on business outcomes."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Project ownership", d: "Single accountable team responsible for delivery." },
            { t: "Milestone planning", d: "Clear scope, estimates, and weekly demos." },
            { t: "Quality standards", d: "Validation, maintainability, and secure defaults." },
            { t: "Handover-ready", d: "Documentation and structure for long-term ownership." },
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

