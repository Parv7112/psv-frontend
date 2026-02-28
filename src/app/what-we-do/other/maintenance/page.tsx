import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function MaintenancePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Other Services"
          title="Maintenance & Support"
          description="Keep your product stable and improving with ongoing support, fixes, and roadmap execution."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Bug fixes", d: "Fast turnaround on production issues with clear communication." },
            { t: "Enhancements", d: "Ongoing product development with predictable capacity." },
            { t: "Security updates", d: "Hardening guidance and dependency upgrades." },
            { t: "Operational support", d: "Monitoring, incident response, and improvements." },
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

