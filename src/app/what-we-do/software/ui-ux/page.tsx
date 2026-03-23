import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/marketing/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "UI/UX & Frontend Engineering",
  description:
    "UI/UX and frontend engineering services: modern, accessible components and conversion-focused design systems for web products.",
  canonical: "/what-we-do/software/ui-ux",
});

export default function UiUxPage() {
  return (
    <div className="space-y-12">
      <PageHero
        eyebrow="Software Development"
        title="UI/UX & Frontend Engineering"
        description="Modern UI, accessible components, and conversion-focused design systems for web products."
        actions={
          <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
            Let’s talk <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        }
      />

      <section className="relative z-10 -mt-10 rounded-3xl border border-black/5 bg-white/70 p-8 pt-2 shadow-sm sm:p-12">
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Design systems", d: "Reusable components for consistent UI at speed." },
            { t: "Accessibility", d: "Better UX with keyboard navigation and proper semantics." },
            { t: "Performance", d: "Fast pages, optimized bundles, and great Core Web Vitals." },
            { t: "Conversion", d: "Landing pages that tell a clear story and drive action." },
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
