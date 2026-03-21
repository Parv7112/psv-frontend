import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Product Discovery",
  description:
    "Product discovery services to clarify scope, define an MVP, and build a milestone-based roadmap that reduces delivery risk.",
  canonical: "/what-we-do/other/discovery",
});

export default function DiscoveryPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Other Services"
          title="Product Discovery"
          description="Clarify scope, define MVP, and create a milestone roadmap that aligns stakeholders and reduces risk."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Goals & constraints", d: "Understand users, workflows, and success metrics." },
            { t: "MVP definition", d: "Prioritize must-haves and reduce time-to-value." },
            { t: "Architecture plan", d: "Define data models, APIs, and key integrations." },
            { t: "Delivery roadmap", d: "Milestones with estimates and weekly cadence." },
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

