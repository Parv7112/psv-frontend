import { ButtonLink } from "@/components/Button";
import { Code2, Database, Server, ShieldCheck } from "lucide-react";

export default function MernServicePage() {
  return (
    <div className="space-y-10">
      <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/10">
          <Code2 className="h-4 w-4 text-sky-600" />
          MERN Stack Development
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Full‑stack web apps that scale with your business
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          We build modern platforms using Next.js/React, Node/Express, and
          MongoDB—focused on performance, security, and long-term
          maintainability.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5">
            Request a quote
          </ButtonLink>
          <ButtonLink href="/services" variant="ghost" className="px-5 py-2.5">
            Back to services
          </ButtonLink>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            icon: <Server className="h-5 w-5 text-sky-600" />,
            title: "APIs & architecture",
            desc: "REST APIs, clean layering, validations, and observability-friendly services.",
          },
          {
            icon: <Database className="h-5 w-5 text-emerald-600" />,
            title: "MongoDB modeling",
            desc: "Schema design, indexing strategy, and query performance improvements.",
          },
          {
            icon: <ShieldCheck className="h-5 w-5 text-violet-600" />,
            title: "Security-first",
            desc: "Auth patterns, CORS, helmet, rate limiting guidance, and secure defaults.",
          },
          {
            icon: <Code2 className="h-5 w-5 text-sky-600" />,
            title: "Modern UI & performance",
            desc: "Responsive UI, SEO, fast loads, and clean component systems.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-3xl border border-black/5 bg-white/70 p-7 shadow-sm"
          >
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white ring-1 ring-black/5">
              {c.icon}
            </div>
            <div className="mt-4 text-lg font-semibold text-slate-900">{c.title}</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

