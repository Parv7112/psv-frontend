import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function GenerativeAiPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="AI Development"
          title="Generative AI Development"
          description="Ship generative AI features with practical UX, safety constraints, and production-ready monitoring."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Content generation", d: "Drafts, summaries, and structured outputs for business workflows." },
            { t: "Prompt design", d: "Reliable templates with clear constraints and formatting." },
            { t: "Human review", d: "Approvals and feedback loops for high-stakes content." },
            { t: "Quality tracking", d: "Measure outcomes and continuously improve." },
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

