import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function DedicatedTeamPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Engagement Models"
          title="Dedicated Team"
          description="Hire full-time resources aligned to your roadmap with flexible scaling and direct collaboration."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Monthly capacity", d: "Predictable delivery with a weekly cadence." },
            { t: "Direct collaboration", d: "Work closely with your stakeholders and team." },
            { t: "Flexible scaling", d: "Add or reduce capacity as needs change." },
            { t: "Long-term ownership", d: "Build a sustainable product foundation." },
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

