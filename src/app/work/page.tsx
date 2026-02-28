import { ButtonLink } from "@/components/Button";

const caseStudies = [
  {
    title: "MERN SaaS Platform",
    subtitle: "Multi-tenant dashboard + billing-ready architecture",
    highlights: [
      "Role-based access with clean permissions model",
      "Fast search & filters with optimized queries",
      "MongoDB indexing and schema design improvements",
      "Deployment-ready structure and environment setup",
    ],
    details: {
      challenge:
        "A growing product needed a scalable full-stack foundation to ship features quickly while keeping performance stable.",
      solution:
        "We designed a clean API layer, improved data modeling, and built a dashboard UI with reusable components and predictable patterns.",
      outcomes: [
        "Faster feature delivery with a structured codebase",
        "Improved query performance via indexing guidance",
        "Cleaner onboarding for new developers with documentation",
      ],
      stack: ["Next.js", "Node.js", "Express", "MongoDB", "Mongoose"],
    },
  },
  {
    title: "AI Document Assistant",
    subtitle: "Knowledge search + workflow automation",
    highlights: [
      "Knowledge search over internal PDFs and docs",
      "Secure data boundaries and controlled access",
      "Human-in-the-loop review workflow for safety",
      "Usage analytics for continuous improvement",
    ],
    details: {
      challenge:
        "Teams were spending hours locating answers across scattered documentation and repetitive ticket workflows.",
      solution:
        "We implemented an AI-assisted workflow with retrieval, guardrails, and evaluation-friendly instrumentation.",
      outcomes: [
        "Reduced time-to-answer for support and operations",
        "Safer AI outputs with review flows and validation",
        "Better visibility into adoption via analytics",
      ],
      stack: ["Node.js", "APIs", "Private knowledge base", "Evaluation metrics"],
    },
  },
  {
    title: "Mobile Customer App",
    subtitle: "High-performance app with real-time updates",
    highlights: [
      "Smooth UX and reliable navigation flows",
      "Push notifications and event-driven updates",
      "Backend/API integration with robust error handling",
      "Release readiness for app store submission",
    ],
    details: {
      challenge:
        "A customer-facing app required responsive performance and reliable updates while integrating with existing backend systems.",
      solution:
        "We designed clean screens, integrated APIs, and built for reliability with edge-case handling and performance awareness.",
      outcomes: [
        "Better user experience with faster interactions",
        "Improved reliability through defensive API handling",
        "Launch-ready build with clear release checklist",
      ],
      stack: ["Mobile app", "Backend APIs", "Notifications", "Analytics"],
    },
  },
];

export default function WorkPage() {
  return (
    <div className="space-y-12">
      <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Work
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          A snapshot of what we build—modern products with strong engineering
          fundamentals and a premium user experience.
        </p>
        <div className="mt-7">
          <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5">
            Discuss your project
          </ButtonLink>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.map((c) => (
          <div
            key={c.title}
            className="rounded-3xl border border-black/5 bg-white/70 p-7 shadow-sm"
          >
            <div className="text-lg font-semibold text-slate-900">{c.title}</div>
            <div className="mt-1 text-sm text-slate-500">{c.subtitle}</div>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              {c.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span className="leading-6">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-3 border-t border-black/5 pt-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Challenge
                </div>
                <div className="mt-1 text-sm leading-6 text-slate-600">
                  {c.details.challenge}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Solution
                </div>
                <div className="mt-1 text-sm leading-6 text-slate-600">
                  {c.details.solution}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Outcomes
                </div>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  {c.details.outcomes.map((o) => (
                    <li key={o} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span className="leading-6">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Stack
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {c.details.stack.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              How we measure success
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              We align on metrics early so delivery stays focused on business
              outcomes—not just output.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Speed to ship",
                desc: "Weekly milestones, reduced cycle time, and predictable releases.",
              },
              {
                title: "Reliability",
                desc: "Fewer regressions, better error handling, and safer deployments.",
              },
              {
                title: "Performance",
                desc: "Fast pages, efficient queries, and improved user experience.",
              },
              {
                title: "Maintainability",
                desc: "Clean architecture and documentation for long-term ownership.",
              },
            ].map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{m.title}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm sm:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Want results like these?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Share your goals and timeline. We’ll propose a roadmap with clear
              milestones and an estimate.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5">
              Start a project
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" className="px-5 py-2.5">
              Explore services
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

