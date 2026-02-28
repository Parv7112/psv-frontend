import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function EcommercePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Software Development"
          title="E‑commerce Platforms"
          description="Build fast storefronts and operational systems: catalog, search, checkout, order workflows, and integrations."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Catalog & search", d: "Performance-aware search, filters, and product discovery." },
            { t: "Checkout & payments", d: "Integrate payment gateways and reduce drop-offs." },
            { t: "Order operations", d: "Tracking, refunds, inventory, and customer support workflows." },
            { t: "Analytics", d: "Measure conversion and optimize funnels." },
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

