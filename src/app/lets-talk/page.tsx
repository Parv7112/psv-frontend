import { ContactForm } from "@/components/ContactForm";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function LetsTalkPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Let’s talk"
          title="Let’s understand your needs"
          description="Share your goals and requirements. We’ll respond with a clear plan, timeline, and estimate."
          right={
            <ButtonLink href="/services" variant="secondary" className="px-5 py-2.5">
              Explore services
            </ButtonLink>
          }
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                What happens after you submit
              </div>
              <ol className="mt-4 space-y-2 text-sm text-slate-600">
                {[
                  "We review your requirements and clarify questions.",
                  "We propose a roadmap with milestones and an estimate.",
                  "If needed, we schedule a short call to finalize scope.",
                  "We start with a clear delivery cadence and weekly demos.",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span className="leading-6">{i}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 text-sm font-semibold text-slate-900">
                Prefer a full contact page?
              </div>
              <div className="mt-3">
                <ButtonLink href="/contact" variant="secondary" className="px-5 py-2.5">
                  Open contact page
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm source="lets-talk" />
          </div>
        </div>
      </section>
    </div>
  );
}

