import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/marketing/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "E‑commerce Platforms",
  description:
    "E-commerce development for fast storefronts and operational systems: catalog, search, checkout, order workflows, and integrations.",
  canonical: "/what-we-do/software/ecommerce",
});

export default function EcommercePage() {
  return (
    <div className="space-y-12">
      <PageHero
        eyebrow="Software Development"
        title="E‑commerce Platforms"
        description="Build fast storefronts and operational systems: catalog, search, checkout, order workflows, and integrations."
        actions={
          <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
            Let’s talk <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        }
      />

      <section className="relative z-10 -mt-10 rounded-3xl border border-black/5 bg-white/70 p-8 pt-2 shadow-sm sm:p-12">
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
