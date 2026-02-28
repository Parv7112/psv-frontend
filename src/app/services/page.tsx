import Link from "next/link";
import { ArrowRight, Brain, Code2, Smartphone } from "lucide-react";
import { ButtonLink } from "@/components/Button";

const services = [
  {
    href: "/services/mern",
    title: "MERN Stack Development",
    icon: <Code2 className="h-5 w-5 text-sky-600" />,
    desc: "Full‑stack web apps with clean architecture, speed, and maintainability.",
    items: ["Next.js/React UI", "Node/Express APIs", "MongoDB data modeling", "DevOps-ready delivery"],
  },
  {
    href: "/services/ai",
    title: "AI Solutions",
    icon: <Brain className="h-5 w-5 text-violet-600" />,
    desc: "AI features that solve real business problems—securely and reliably.",
    items: ["RAG & knowledge bases", "Chatbots & assistants", "Document automation", "Analytics & insights"],
  },
  {
    href: "/services/mobile",
    title: "Mobile App Development",
    icon: <Smartphone className="h-5 w-5 text-emerald-600" />,
    desc: "Fast, polished apps with great UX and production-grade performance.",
    items: ["iOS & Android", "API integration", "Push notifications", "App store readiness"],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Services
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            PSV Enterprises helps teams go from idea to production with modern
            engineering. Choose a lane—or combine them for a complete product.
            We optimize for business outcomes: speed to launch, stable
            architecture, and a great user experience.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5">
              Request a proposal <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary" className="px-5 py-2.5">
              View work
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl border border-black/5 bg-white/70 p-7 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white ring-1 ring-black/5">
                {s.icon}
              </div>
              <Link
                href={s.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
              >
                Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              {s.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span className="leading-6">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Engagement models
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Choose a model that fits your delivery rhythm. We can flex the
              team size based on timeline and scope.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Fixed scope",
                desc: "Defined milestones with a clear delivery plan.",
                best: "Great for landing pages, small MVPs, and upgrades.",
              },
              {
                title: "Dedicated team",
                desc: "Monthly capacity to build continuously.",
                best: "Great for startups and ongoing product development.",
              },
              {
                title: "Build + maintain",
                desc: "Launch fast, then keep improving with SLAs.",
                best: "Great for production systems with critical users.",
              },
            ].map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">
                  {m.title}
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-600">
                  {m.desc}
                </div>
                <div className="mt-3 text-xs leading-5 text-slate-500">
                  {m.best}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              What you get
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              We don’t just “write code”—we deliver a system your team can
              maintain and grow, with standards that keep you safe in
              production.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              {[
                "Clear requirements and milestone-based roadmap",
                "High-quality UI, responsive layouts, and conversion-friendly pages",
                "Backend APIs with validation, error handling, and security best practices",
                "MongoDB schema design with indexing guidance",
                "Documentation for environments, deployments, and day-2 operations",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span className="leading-6">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-white to-slate-50 p-7 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              Typical timeline (example)
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              {[
                { w: "Week 1", d: "Discovery, architecture, UI direction, backlog" },
                { w: "Week 2", d: "Core features, database models, API foundation" },
                { w: "Week 3", d: "Integrations, polish, QA, performance improvements" },
                { w: "Week 4", d: "Launch readiness, monitoring, deployment support" },
              ].map((t) => (
                <div
                  key={t.w}
                  className="rounded-2xl border border-black/5 bg-white/80 p-4 shadow-sm"
                >
                  <div className="text-xs font-semibold text-slate-500">{t.w}</div>
                  <div className="mt-1 leading-6">{t.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <ButtonLink href="/contact" variant="primary" className="w-full px-5 py-2.5">
                Get an estimate <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              FAQs
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Quick answers about delivery, ownership, and handover.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Who owns the code?",
                a: "You do. We build in your repo (or hand it over) with clean structure and documentation.",
              },
              {
                q: "Do you provide UI/UX too?",
                a: "Yes. We can design from scratch or work with your designer. We prioritize accessibility and modern UI patterns.",
              },
              {
                q: "Can you integrate with third-party tools?",
                a: "Yes—payments, CRMs, analytics, email, maps, auth providers, and custom internal systems.",
              },
              {
                q: "How do we start?",
                a: "Send your requirements via the contact form. We’ll reply with questions, a plan, and a clear estimate.",
              },
            ].map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{f.q}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

