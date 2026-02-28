import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function SaasPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Software Development"
          title="SaaS & Dashboards"
          description="Build multi-tenant platforms, admin panels, and internal tools that scale with your organization."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Multi-tenancy", d: "Role-based access and tenant-aware data boundaries." },
            { t: "Dashboards", d: "Fast tables, filters, search, and analytics." },
            { t: "Billing-ready design", d: "Integrations and structure that support growth." },
            { t: "Maintainable UI", d: "Reusable components and clean UX patterns." },
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

