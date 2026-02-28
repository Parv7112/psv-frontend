import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function StaffAugmentationPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Engagement Models"
          title="Staff Augmentation"
          description="Add specialists to boost your team’s velocity—frontend, backend, AI, or mobile—on demand."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Quick ramp-up", d: "Onboard fast with clear goals and tasks." },
            { t: "Specialized skills", d: "Bring in expertise for specific bottlenecks." },
            { t: "Team integration", d: "Work in your process and tools with minimal friction." },
            { t: "Flexible commitment", d: "Scale up or down based on roadmap needs." },
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

