import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function UiUxPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Software Development"
          title="UI/UX & Frontend Engineering"
          description="Modern UI, accessible components, and conversion-focused design systems for web products."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
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

