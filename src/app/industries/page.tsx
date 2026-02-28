import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Package,
  ShoppingBag,
  Truck,
  Wrench,
} from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    icon: <HeartPulse className="h-4 w-4 text-emerald-600" />,
    desc: "Secure workflows, role-based access, and data-aware UX for clinics and health-tech products.",
    examples: ["Patient reminders", "Operational dashboards", "Document automation"],
  },
  {
    name: "Education",
    icon: <GraduationCap className="h-4 w-4 text-sky-600" />,
    desc: "Platforms that scale: content delivery, student management, and analytics.",
    examples: ["Learning portals", "Admin tools", "Progress tracking"],
  },
  {
    name: "Finance",
    icon: <Landmark className="h-4 w-4 text-indigo-600" />,
    desc: "Reliable systems with audit-friendly patterns and careful data handling.",
    examples: ["Dashboards", "Reporting tools", "Automation workflows"],
  },
  {
    name: "Retail / E‑commerce",
    icon: <ShoppingBag className="h-4 w-4 text-violet-600" />,
    desc: "Customer experiences that convert with fast performance and clean integrations.",
    examples: ["Catalog + search", "Order tracking", "Mobile apps"],
  },
  {
    name: "Logistics",
    icon: <Truck className="h-4 w-4 text-slate-700" />,
    desc: "Visibility and automation across operations—reduce manual work and improve accuracy.",
    examples: ["Invoice processing", "Fleet dashboards", "Integrations"],
  },
  {
    name: "Manufacturing",
    icon: <Wrench className="h-4 w-4 text-slate-700" />,
    desc: "Systems that streamline sales, operations, and internal workflows with measurable ROI.",
    examples: ["Lead automation", "Production dashboards", "Data pipelines"],
  },
  {
    name: "Real Estate",
    icon: <Building2 className="h-4 w-4 text-sky-600" />,
    desc: "Lead funnels, CRM-style tools, and portals that improve speed-to-close.",
    examples: ["Listing portals", "Sales dashboards", "Automations"],
  },
  {
    name: "B2B Services",
    icon: <Package className="h-4 w-4 text-emerald-600" />,
    desc: "Internal tools and customer dashboards that reduce support load and improve service quality.",
    examples: ["Admin consoles", "Customer portals", "AI assistants"],
  },
];

export default function IndustriesPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Industries"
          title="Serving software solutions across industries"
          description="We tailor modern engineering to domain needs—balancing security, UX, compliance, and speed to delivery."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {industries.map((i) => (
          <div
            key={i.name}
            className="rounded-3xl border border-black/5 bg-white/70 p-7 shadow-sm"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white ring-1 ring-black/5">
                {i.icon}
              </span>
              {i.name}
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{i.desc}</p>
            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Common use cases
              </div>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {i.examples.map((e) => (
                  <li key={e} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span className="leading-6">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-black/5 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="How we help"
          title="From requirements to launch, with measurable outcomes"
          description="We start by understanding your goals, then propose a roadmap that prioritizes impact and reduces risk."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Discovery", d: "Goals, constraints, success metrics, scope." },
            { t: "Architecture", d: "Data models, APIs, and scalable structure." },
            { t: "Delivery", d: "Weekly cycles, demos, QA, and polish." },
            { t: "Support", d: "Monitoring guidance and post-launch improvements." },
          ].map((s) => (
            <div
              key={s.t}
              className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-900">{s.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{s.d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

