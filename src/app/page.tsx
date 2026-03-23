import Link from "next/link";
import type { Metadata } from "next";
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
import { GradientHighlight, PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    images: [{ url: "/logo.png", alt: "PSV Enterprises" }],
  },
  twitter: {
    images: ["/logo.png"],
  },
};

export default function Home() {
  return (
    <div className="space-y-24 pb-8">
      <PageHero
        size="home"
        eyebrow={
          <>
            <Sparkles className="h-4 w-4 text-amber-400" />
            MERN · AI · Mobile
          </>
        }
        title={
          <>
            Build products that <GradientHighlight>scale</GradientHighlight> and ship fast
          </>
        }
        description="PSV Enterprises delivers modern web platforms, AI workflows, and mobile apps—with architecture you can trust and UX your users feel."
        actions={
          <>
            <ButtonLink
              href="/lets-talk"
              variant="primary"
              className="px-8 py-3.5 text-base shadow-[0_0_40px_-6px_rgba(245,158,11,0.55)]"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/our-work" variant="outlineLight" className="px-8 py-3.5 text-base">
              See our work
            </ButtonLink>
          </>
        }
        footer={<StatRow variant="dark" />}
      />

      {/* Overlap intro */}
      <div className="relative z-10 -mt-10 space-y-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center rounded-3xl border-2 border-zinc-900/5 bg-white p-8 shadow-xl shadow-zinc-900/5">
            <p className="font-display text-xl font-bold text-zinc-900 sm:text-2xl">
              Trusted by founders &amp; product teams who need velocity without chaos.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              We embed with your roadmap—clear milestones, weekly demos, and documentation your
              team can run with.
            </p>
            <div className="mt-8">
              <ButtonLink href="/company" variant="secondary" className="px-6 py-3">
                About PSV
              </ButtonLink>
            </div>
          </div>
          <LogoCloud />
        </div>
      </div>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="What we build"
          description="End-to-end delivery across AI, MERN, and mobile—structured for speed and long-term maintainability."
          right={
            <ButtonLink href="/what-we-do" variant="primary" className="px-6 py-3">
              All services <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          }
        />

        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
          {[
            {
              href: "/services/ai",
              icon: <Brain className="h-7 w-7 text-amber-500" />,
              title: "AI Development",
              desc: "Assistants, RAG, agents, automation—with guardrails and evaluation.",
              chips: ["RAG", "Agents", "Automation"],
              span: "lg:col-span-5",
            },
            {
              href: "/services/mern",
              icon: <Code2 className="h-7 w-7 text-amber-500" />,
              title: "Software (MERN)",
              desc: "APIs, dashboards, SaaS foundations—clean models and scalable UI.",
              chips: ["Next.js", "Node", "MongoDB"],
              span: "lg:col-span-4",
            },
            {
              href: "/services/mobile",
              icon: <Smartphone className="h-7 w-7 text-amber-500" />,
              title: "Mobile apps",
              desc: "Performance, push, integrations—ready for store submission.",
              chips: ["iOS/Android", "Analytics"],
              span: "lg:col-span-3",
            },
          ].map((s) => (
            <div
              key={s.title}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border-2 border-zinc-900/5 bg-white p-8 shadow-lg shadow-zinc-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/25 hover:shadow-2xl ${s.span}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-zinc-950 text-white shadow-md">
                  {s.icon}
                </div>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1 text-sm font-bold text-zinc-900 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="font-display mt-6 text-xl font-bold text-zinc-900">{s.title}</div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-bold text-zinc-700"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Work"
          title="Selected outcomes"
          description="Automation, AI, and platforms we’ve shipped—built for reliability and measurable impact."
          right={
            <ButtonLink href="/our-work" variant="secondary" className="px-6 py-3">
              Case studies
            </ButtonLink>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Sales workflow automation",
              industry: "Manufacturing",
              desc: "Follow-ups and tracking that cut response time and manual overhead.",
              tags: ["Automation", "Integrations"],
            },
            {
              title: "AI document assistant",
              industry: "Healthcare",
              desc: "Private search over documents with review flows and analytics.",
              tags: ["RAG", "Safety"],
            },
            {
              title: "Invoice processing system",
              industry: "Logistics",
              desc: "Structured pipelines that scale accuracy and reduce manual work.",
              tags: ["Pipelines", "Automation"],
            },
          ].map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border-2 border-zinc-900/5 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/20 hover:shadow-2xl"
            >
              <div className="font-display text-5xl font-extrabold tabular-nums text-zinc-100 transition-colors group-hover:text-amber-400/30">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-wider text-amber-600">{p.industry}</div>
              <h3 className="font-display mt-2 text-lg font-bold text-zinc-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/our-work"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-zinc-900 underline decoration-amber-400/50 underline-offset-4 hover:decoration-amber-500"
              >
                Details <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Process"
          title="How we deliver"
          description="A delivery rhythm you can plan around—clear scope, visible progress, production-grade quality."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <LayoutGrid className="h-6 w-6" />, title: "Discovery", desc: "Goals, constraints, and a milestone plan." },
            { icon: <Code2 className="h-6 w-6" />, title: "Build", desc: "Iterative shipping with demos and reviews." },
            { icon: <ShieldCheck className="h-6 w-6" />, title: "Harden", desc: "Testing, security defaults, launch readiness." },
            { icon: <FileText className="h-6 w-6" />, title: "Handover", desc: "Docs and patterns your team can own." },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border-2 border-dashed border-zinc-300/80 bg-zinc-50/80 p-6 transition-all hover:border-amber-400/50 hover:bg-white"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-zinc-950 text-amber-400">{s.icon}</div>
              <div className="font-display mt-4 text-base font-bold text-zinc-900">{s.title}</div>
              <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-10 shadow-2xl sm:p-14">
        <SectionHeading
          dark
          eyebrow="AI"
          title="Operational AI that pays off"
          description="Workflows, assistants, and automation grounded in your data—with measurable ROI."
          right={
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/lets-talk" variant="primary" className="px-6 py-3">
                Plan an AI build
              </ButtonLink>
              <ButtonLink href="/services/ai" variant="outlineLight" className="px-6 py-3">
                AI services
              </ButtonLink>
            </div>
          }
        />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Sectors"
          title="Industries"
          description="Domain-aware engineering—same rigor, adapted to your constraints."
          right={
            <ButtonLink href="/industries" variant="secondary" className="px-6 py-3">
              Explore
            </ButtonLink>
          }
        />
        <div className="flex flex-wrap gap-3">
          {[
            { name: "Healthcare", icon: <HeartPulse className="h-5 w-5" /> },
            { name: "Education", icon: <GraduationCap className="h-5 w-5" /> },
            { name: "Finance", icon: <Landmark className="h-5 w-5" /> },
            { name: "Retail", icon: <LayoutGrid className="h-5 w-5" /> },
            { name: "Manufacturing", icon: <Wrench className="h-5 w-5" /> },
          ].map((i) => (
            <div
              key={i.name}
              className="flex items-center gap-3 rounded-2xl border-2 border-zinc-900/5 bg-white px-5 py-3 font-display font-bold text-zinc-900 shadow-md transition-all hover:-translate-y-0.5 hover:border-amber-400/40"
            >
              <span className="text-amber-500">{i.icon}</span>
              {i.name}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Why PSV"
          title="What partners get"
          description="Outcomes and engineering discipline—so you’re not refactoring regret in six months."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Cross-domain expertise",
            "End-to-end delivery",
            "Security-minded defaults",
            "Business-first AI",
            "Scalable code quality",
            "Clear communication",
          ].map((title) => (
            <div
              key={title}
              className="rounded-3xl border-2 border-zinc-900/5 bg-white p-7 shadow-md transition-all hover:shadow-xl"
            >
              <div className="font-display text-lg font-bold text-zinc-900">{title}</div>
              <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
              <p className="mt-4 text-sm text-zinc-600">
                Practical execution, documentation, and ownership-ready handover.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Engagement"
          title="Ways to work together"
          description="Pick a model that matches your roadmap and team structure."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: "Outsourcing", desc: "End-to-end ownership with milestones.", bullets: ["Scope & delivery", "Specialist team", "Predictable cost"] },
            { title: "Dedicated team", desc: "Monthly capacity for continuous product work.", bullets: ["Embedded rhythm", "Direct collaboration", "Flexible scale"] },
            { title: "Staff augmentation", desc: "Experts who ramp fast on your stack.", bullets: ["On-demand skills", "Quick onboarding", "Your process"] },
          ].map((m) => (
            <div key={m.title} className="rounded-3xl bg-zinc-950 p-8 text-white ring-1 ring-white/10">
              <div className="font-display text-xl font-bold">{m.title}</div>
              <p className="mt-2 text-sm text-zinc-400">{m.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                {m.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-amber-400">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <TestimonialCarousel />

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Insights"
          title="From the blog"
          description="Short reads on shipping, AI, and sustainable engineering."
          right={
            <ButtonLink href="/company" variant="secondary" className="px-6 py-3">
              View all
            </ButtonLink>
          }
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: "AI automation in enterprise workflows", excerpt: "Find high-leverage workflows and ship safely.", tint: "from-amber-500/20 to-orange-600/10" },
            { title: "Practical RAG in production", excerpt: "Retrieval, access control, and evaluation loops.", tint: "from-zinc-800/40 to-zinc-950/20" },
            { title: "Weekly shipping without quality debt", excerpt: "Cadence, reviews, and maintainable code.", tint: "from-amber-400/15 to-yellow-500/10" },
          ].map((b) => (
            <article
              key={b.title}
              className="overflow-hidden rounded-3xl border-2 border-zinc-900/5 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className={`h-32 bg-gradient-to-br ${b.tint}`} />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-zinc-900">{b.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{b.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-bold text-amber-600">Read →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] border-2 border-zinc-900/5 bg-white p-8 shadow-2xl sm:p-12">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what you’re building"
          description="We’ll reply with a clear plan, timeline, and estimate."
          right={
            <ButtonLink href="/contact" variant="secondary" className="px-6 py-3">
              Contact page
            </ButtonLink>
          }
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-zinc-950 p-8 text-white">
              <div className="font-display text-lg font-bold">What you get</div>
              <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                {[
                  "Roadmap + estimate aligned to goals",
                  "Weekly demos and written updates",
                  "Security-first patterns",
                  "Ownership-ready delivery",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber-400">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink href="/what-we-do" variant="outlineLight" className="px-6 py-3">
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
