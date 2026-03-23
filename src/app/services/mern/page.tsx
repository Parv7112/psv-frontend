import { ArrowRight, Code2, Database, Server, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/marketing/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "MERN Stack Development",
  description:
    "Full-stack MERN development services using Next.js/React, Node/Express, and MongoDB—focused on performance, security, and maintainable architecture.",
  canonical: "/services/mern",
});

export default function MernServicePage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow={
          <>
            <Code2 className="h-4 w-4 text-sky-400" />
            MERN Stack Development
          </>
        }
        title="Full‑stack web apps that scale with your business"
        description="We build modern platforms using Next.js/React, Node/Express, and MongoDB—focused on performance, security, and long-term maintainability."
        actions={
          <>
            <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5">
              Request a quote <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/services" variant="outlineLight" className="px-5 py-2.5">
              Back to services
            </ButtonLink>
          </>
        }
      />

      <div className="relative z-10 -mt-10 grid gap-6 pt-2 md:grid-cols-2">
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

