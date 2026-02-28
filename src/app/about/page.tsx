import { ButtonLink } from "@/components/Button";

const values = [
  {
    title: "Clarity",
    desc: "We communicate early, often, and with measurable milestones.",
  },
  {
    title: "Ownership",
    desc: "We treat your product like our own—quality and reliability matter.",
  },
  {
    title: "Speed with discipline",
    desc: "We move fast without breaking fundamentals: security, tests, and maintainable code.",
  },
  {
    title: "Modern craft",
    desc: "From UI/UX to API design, we sweat the details that users feel.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          About PSV Enterprises
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
          PSV Enterprises is an IT services company focused on building modern
          digital products. We specialize in MERN stack development, AI solutions,
          and mobile app development—helping businesses turn ideas into reliable,
          scalable software.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Product thinking", v: "We focus on outcomes, not just tickets." },
            { k: "Engineering quality", v: "Clean structure, validations, and stability." },
            { k: "Weekly delivery", v: "A cadence that keeps you in control." },
          ].map((m) => (
            <div
              key={m.k}
              className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-900">{m.k}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{m.v}</div>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5">
            Work with us
          </ButtonLink>
          <ButtonLink href="/services" variant="ghost" className="px-5 py-2.5">
            View services
          </ButtonLink>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-3xl border border-black/5 bg-white/70 p-7 shadow-sm"
          >
            <div className="text-lg font-semibold text-slate-900">{v.title}</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">{v.desc}</div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm sm:p-12">
        <h2 className="text-xl font-semibold text-slate-900">How we work</h2>
        <ol className="mt-4 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
          {[
            { title: "Discovery", desc: "We clarify goals, users, constraints, and scope." },
            { title: "Design", desc: "We craft flows, UI, and a developer-friendly component system." },
            { title: "Build", desc: "We implement features with performance, security, and quality checks." },
            { title: "Launch", desc: "We ship, monitor, and iterate with a weekly delivery cadence." },
          ].map((s) => (
            <li
              key={s.title}
              className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm"
            >
              <div className="font-semibold text-slate-900">{s.title}</div>
              <div className="mt-1 leading-6">{s.desc}</div>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              What makes PSV different
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              You get a team that understands product constraints—deadlines,
              customer expectations, and long-term maintenance. We keep work
              transparent with weekly demos and clear milestones.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Clear communication",
                desc: "Frequent updates, written summaries, and shared priorities.",
              },
              {
                title: "Clean architecture",
                desc: "Maintainable code, predictable patterns, and sensible abstractions.",
              },
              {
                title: "Security best practices",
                desc: "Validation, hardening guidance, and safe defaults from day one.",
              },
              {
                title: "Performance mindset",
                desc: "Fast UI, efficient queries, and reliability improvements early.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{c.title}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              FAQs
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              A few quick answers about collaboration, handover, and support.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Can you work with our internal team?",
                a: "Yes. We collaborate with in-house developers, designers, and stakeholders. We can integrate into your process or propose a lightweight weekly cadence.",
              },
              {
                q: "Do you provide documentation?",
                a: "Yes. You’ll get environment instructions, key architecture notes, and a handover checklist so your team can own the system confidently.",
              },
              {
                q: "Do you support ongoing improvements?",
                a: "Yes. Many clients retain us for performance improvements, new features, and maintenance with predictable monthly capacity.",
              },
              {
                q: "What industries do you work with?",
                a: "We’re industry-agnostic: SaaS, services, e-commerce, internal tools, education, and more. We adapt to domain requirements quickly.",
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
      </div>
    </div>
  );
}

