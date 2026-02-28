import Link from "next/link";
import { ArrowRight, Brain, Code2, Smartphone } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";

const services = [
  {
    href: "/services/ai",
    title: "AI Development",
    icon: <Brain className="h-5 w-5 text-violet-600" />,
    desc: "Intelligent solutions that automate operations, unlock insights, and improve decision-making.",
    items: ["RAG & private search", "Assistants & chatbots", "Workflow automation", "Analytics & evaluation"],
  },
  {
    href: "/services/mern",
    title: "Custom Web Apps (MERN)",
    icon: <Code2 className="h-5 w-5 text-sky-600" />,
    desc: "Production-ready web apps with clean architecture, great UX, and maintainable code.",
    items: ["Next.js/React UI", "Node/Express APIs", "MongoDB modeling", "Performance & SEO"],
  },
  {
    href: "/services/mobile",
    title: "Mobile App Development",
    icon: <Smartphone className="h-5 w-5 text-emerald-600" />,
    desc: "High-performance mobile apps that feel premium and ship reliably.",
    items: ["iOS/Android builds", "Push notifications", "API integrations", "Launch readiness"],
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            What we do
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            PSV Enterprises delivers end-to-end product engineering across MERN,
            AI, and mobile. We help you move from idea to launch with a clear
            roadmap, weekly delivery, and quality standards that hold up in
            production.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/lets-talk" variant="primary" className="px-5 py-2.5">
              Talk to our experts <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/our-work" variant="secondary" className="px-5 py-2.5">
              Explore case studies
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Services"
          title="Software and development services"
          description="Choose a lane—or combine them for a complete product roadmap."
          right={
            <ButtonLink href="/services" variant="secondary" className="px-5 py-2.5">
              View service pages
            </ButtonLink>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
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
                  Know more <ArrowRight className="h-4 w-4" />
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
        </div>
      </section>

      <section className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <SectionHeading
          eyebrow="Engagement models"
          title="Ways to work with us"
          description="Pick a collaboration model that fits your timeline and team structure."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Software outsourcing",
              desc: "End-to-end ownership from scope to launch.",
              bullets: ["Milestone-based delivery", "Single accountable team", "Cost-efficient scaling"],
            },
            {
              title: "Dedicated team",
              desc: "Full-time capacity aligned to your roadmap.",
              bullets: ["Monthly capacity", "Direct collaboration", "Flexible team structure"],
            },
            {
              title: "Staff augmentation",
              desc: "Add specialists to accelerate execution.",
              bullets: ["Quick ramp-up", "Specialized expertise", "Integrates with your team"],
            },
          ].map((m) => (
            <div
              key={m.title}
              className="rounded-3xl border border-black/5 bg-white/80 p-7 shadow-sm"
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
    </div>
  );
}

