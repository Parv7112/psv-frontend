import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Code2,
  FileText,
  GraduationCap,
  HeartPulse,
  Landmark,
  LayoutGrid,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { StatRow } from "@/components/marketing/StatRow";
import { LogoCloud } from "@/components/marketing/LogoCloud";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.08)] sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(99,102,241,0.10)_0%,rgba(255,255,255,0)_60%),radial-gradient(55%_45%_at_0%_0%,rgba(14,165,233,0.08)_0%,rgba(255,255,255,0)_55%)]" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            Building future‑ready digital products
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Transforming businesses with modern MERN, AI, and mobile solutions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
            PSV Enterprises helps teams ship high-quality software faster: web platforms,
            AI automation, and mobile apps—built with reliable architecture and clean UX.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/lets-talk" variant="primary" className="px-6 py-3">
              Talk to our experts <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/our-work" variant="secondary" className="px-6 py-3">
              Explore our work
            </ButtonLink>
          </div>
        </div>

        <div className="relative mt-10 space-y-6">
          <StatRow />
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Trusted by leading startups and growing teams
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We collaborate with ambitious founders and product teams to build solutions
                that reduce manual work, unlock insights, and improve decision‑making.
              </p>
              <div className="mt-5">
                <ButtonLink href="/company" variant="secondary" className="px-5 py-2.5">
                  Know more about us
                </ButtonLink>
              </div>
            </div>
            <LogoCloud />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="What we do"
          title="Our software and development services"
          description="End-to-end delivery across MERN, AI, and mobile—optimized for speed, reliability, and long-term maintainability."
          right={
            <ButtonLink href="/what-we-do" variant="primary" className="px-5 py-2.5">
              View all services <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              href: "/services/ai",
              icon: <Brain className="h-5 w-5 text-violet-600" />,
              title: "AI Development",
              desc: "AI assistants, RAG search, automation workflows, and analytics—built with guardrails.",
              chips: ["RAG", "Agents", "Automation", "Evaluation"],
            },
            {
              href: "/services/mern",
              icon: <Code2 className="h-5 w-5 text-sky-600" />,
              title: "Software Development",
              desc: "MERN stack web apps with clean APIs, scalable data models, and modern UI/UX.",
              chips: ["Next.js", "Node.js", "MongoDB", "APIs"],
            },
            {
              href: "/services/mobile",
              icon: <Smartphone className="h-5 w-5 text-emerald-600" />,
              title: "Mobile App Development",
              desc: "High-performance mobile experiences with integrations, notifications, and launch readiness.",
              chips: ["iOS/Android", "Push", "Integrations", "Analytics"],
            },
          ].map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-shadow hover:shadow-[0_12px_26px_rgba(2,6,23,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white ring-1 ring-slate-200">
                  {s.icon}
                </div>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
                >
                  Know more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-4 text-lg font-semibold text-slate-900">{s.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured projects"
          title="Our track record reflects our delivery"
          description="A snapshot of systems we build: automation tools, AI workflows, dashboards, and high-performance apps."
          right={
            <ButtonLink href="/our-work" variant="secondary" className="px-5 py-2.5">
              View all case studies
            </ButtonLink>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Sales workflow automation tool",
              industry: "Manufacturing",
              desc: "Automates follow-ups and tracking to reduce lead response time and operational overhead.",
              tags: ["Automation", "Integrations", "Dashboards"],
            },
            {
              title: "AI document assistant",
              industry: "Healthcare",
              desc: "Knowledge search over internal documents with guardrails, review flows, and analytics.",
              tags: ["RAG", "Safety", "Analytics"],
            },
            {
              title: "Smart invoice processing system",
              industry: "Logistics",
              desc: "Structured processing workflow that reduces manual effort and improves accuracy at scale.",
              tags: ["Pipelines", "OCR-ready", "Automation"],
            },
          ].map((p) => (
            <div
              key={p.title}
              className="group rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-shadow hover:shadow-[0_12px_26px_rgba(2,6,23,0.08)]"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {p.industry}
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-900">{p.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{p.desc}</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
                >
                  Read full case study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Roadmap"
          title="A structured, delivery-first process"
          description="We combine strategic planning with agile execution to ship production-ready systems."
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {[
            {
              icon: <LayoutGrid className="h-5 w-5 text-sky-600" />,
              title: "Requirement analysis",
              desc: "Understand needs, define scope, and gather specifications.",
            },
            {
              icon: <Code2 className="h-5 w-5 text-indigo-600" />,
              title: "Development & design",
              desc: "Build iteratively with UI/UX and continuous improvement.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
              title: "Testing & deployment",
              desc: "Quality checks, bug fixes, and launch support.",
            },
            {
              icon: <FileText className="h-5 w-5 text-violet-600" />,
              title: "Support & maintenance",
              desc: "Updates, fixes, and enhancements post‑launch.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white ring-1 ring-slate-200">
                {s.icon}
              </div>
              <div className="mt-4 text-base font-semibold text-slate-900">{s.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-900/20 bg-gradient-to-br from-slate-950 to-slate-900 p-8 shadow-[0_14px_40px_rgba(2,6,23,0.22)] sm:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Build smarter
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Streamline your operations with custom AI solutions
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
              Make AI a practical part of your business with workflows that reduce manual effort
              and produce measurable outcomes.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/lets-talk" variant="primary" className="px-6 py-3">
              Build your AI solution <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/services/ai" variant="secondary" className="px-6 py-3">
              Explore AI services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Industries"
          title="Serving software solutions across industries"
          description="We build domain-aware products that balance UX, reliability, security, and speed."
          right={
            <ButtonLink href="/industries" variant="secondary" className="px-5 py-2.5">
              View industries
            </ButtonLink>
          }
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { name: "Healthcare", icon: <HeartPulse className="h-4 w-4 text-emerald-600" /> },
            { name: "Education", icon: <GraduationCap className="h-4 w-4 text-sky-600" /> },
            { name: "Finance", icon: <Landmark className="h-4 w-4 text-indigo-600" /> },
            { name: "Retail", icon: <LayoutGrid className="h-4 w-4 text-violet-600" /> },
            { name: "Manufacturing", icon: <Wrench className="h-4 w-4 text-slate-700" /> },
          ].map((i) => (
            <div
              key={i.name}
              className="flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              {i.icon}
              {i.name}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Why choose PSV"
          title="Why teams choose PSV Enterprises"
          description="We focus on business outcomes and long-term maintainability—not short-term hacks."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Cross-domain expertise",
              desc: "We adapt quickly to new industries and workflows.",
            },
            {
              title: "End-to-end delivery",
              desc: "Discovery, design, engineering, and launch support in one team.",
            },
            {
              title: "Security & compliance mindset",
              desc: "Validation, safe defaults, and thoughtful data boundaries.",
            },
            {
              title: "Business-first AI strategy",
              desc: "We align AI solutions to measurable ROI and operational impact.",
            },
            {
              title: "Scalable quality",
              desc: "Readable, modular code that your team can own and extend.",
            },
            {
              title: "Clear communication",
              desc: "Weekly delivery cadence with demos and written updates.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="text-base font-semibold text-slate-900">{c.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Engagement models"
          title="Smart engagement models for scalable partnerships"
          description="Choose a model that fits your delivery rhythm and team structure."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Software outsourcing",
              desc: "End‑to‑end project ownership with clear milestones.",
              bullets: ["Project ownership", "Specialized expertise", "Cost-efficient scaling"],
            },
            {
              title: "Dedicated team",
              desc: "Monthly capacity for continuous product development.",
              bullets: ["Full-time resources", "Direct collaboration", "Flexible scaling"],
            },
            {
              title: "Staff augmentation",
              desc: "Add experts to accelerate your existing team.",
              bullets: ["On-demand specialists", "Quick ramp-up", "Seamless integration"],
            },
          ].map((m) => (
            <div
              key={m.title}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="text-lg font-semibold text-slate-900">{m.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{m.desc}</div>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {m.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span className="leading-6">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <TestimonialCarousel />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Latest buzz"
          title="Get insights from our latest articles"
          description="Short, practical reads on engineering, AI automation, and product delivery."
          right={
            <ButtonLink href="/company" variant="secondary" className="px-5 py-2.5">
              View all
            </ButtonLink>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              category: "AI & Technology",
              read: "15 min read",
              title: "How AI automation transforms enterprise workflows",
              excerpt:
                "Teams lose hours to repetitive tasks. Here’s how to identify workflows worth automating and ship safely.",
              author: "PSV Team",
              date: "Feb 2026",
              tint: "from-indigo-600/15 to-sky-500/10",
            },
            {
              category: "AI & Operations",
              read: "12 min read",
              title: "Practical RAG: private search over your documents",
              excerpt:
                "A production-focused guide to retrieval pipelines, access controls, and evaluation.",
              author: "PSV Team",
              date: "Feb 2026",
              tint: "from-emerald-600/15 to-indigo-600/10",
            },
            {
              category: "Engineering",
              read: "10 min read",
              title: "Shipping weekly without breaking quality",
              excerpt:
                "A lightweight process for predictable delivery, stable releases, and maintainable code.",
              author: "PSV Team",
              date: "Jan 2026",
              tint: "from-violet-600/15 to-sky-500/10",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="group rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-shadow hover:shadow-[0_12px_26px_rgba(2,6,23,0.08)]"
            >
              <div className={`h-28 rounded-2xl bg-gradient-to-br ${b.tint} ring-1 ring-slate-200`} />
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <span>{b.category}</span>
                <span className="text-slate-300">•</span>
                <span>{b.read}</span>
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-900">{b.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{b.excerpt}</div>
              <div className="mt-4 text-xs text-slate-500">
                {b.author} • {b.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Let’s talk"
          title="Let’s understand your needs"
          description="Tell us what you’re building. We’ll reply with a clear plan, timeline, and estimate."
          right={
            <ButtonLink href="/contact" variant="secondary" className="px-5 py-2.5">
              Open contact page
            </ButtonLink>
          }
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="text-sm font-semibold text-slate-900">What you’ll get</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {[
                  "A milestone-based roadmap and estimate",
                  "Weekly delivery cadence and demos",
                  "Security-first patterns and clean architecture",
                  "Ownership-ready code and documentation",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span className="leading-6">{i}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ButtonLink href="/what-we-do" variant="secondary" className="px-5 py-2.5">
                  Browse services
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm source="home" />
          </div>
        </div>
      </section>
    </div>
  );
}
