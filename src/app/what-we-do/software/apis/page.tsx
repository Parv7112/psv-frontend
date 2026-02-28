import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export default function ApiDevelopmentPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Software Development"
          title="API Development"
          description="Secure REST APIs with validation, error handling, logging, and integration-ready design."
          right={
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Let’s talk
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Validation & schema", d: "Well-defined request/response contracts." },
            { t: "Security patterns", d: "Auth, CORS hardening, and safe defaults." },
            { t: "Observability", d: "Logging and monitoring-friendly architecture." },
            { t: "Integrations", d: "Third-party APIs, webhooks, and event flows." },
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

