import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Headphones,
  Languages,
  Lock,
  Mic,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  Workflow,
} from "lucide-react";

export default function AiChatbotsPage() {
  const faqs = [
    {
      question: "Can your chatbot handle voice interactions?",
      answer:
        "Yes. We can add voice input/output using speech-to-text and text-to-speech, with fallback to chat when voice isn’t available. The same knowledge base and guardrails apply across both modes.",
    },
    {
      question: "Can your chatbot integrate with our existing systems?",
      answer:
        "Yes. We integrate with CRMs, ticketing tools, databases, internal APIs, and webhooks. We design tool access with permissions, rate limits, and audit logs to keep operations safe.",
    },
    {
      question: "Can your chatbots support multiple languages?",
      answer:
        "Yes. We can support multilingual chat and configure language detection, translation layers, and localized responses while maintaining the same accuracy and policies.",
    },
    {
      question: "How long does it take to build a custom AI chatbot?",
      answer:
        "A focused MVP can be delivered in 2–4 weeks depending on data readiness, integrations, and required workflows. We usually start with a scoped pilot, then expand capabilities iteratively.",
    },
    {
      question: "What industries can use AI chatbots effectively?",
      answer:
        "Most industries benefit: SaaS support, education portals, healthcare operations, finance workflows, retail post‑purchase support, and internal helpdesks—especially where repetitive questions exist.",
    },
    {
      question:
        "Can the chatbot integrate with CRM / ERP / other business tools?",
      answer:
        "Yes. We can connect to systems like CRMs, ERPs, spreadsheets, email, and custom internal apps using APIs, webhooks, and secure credentials management.",
    },
    {
      question: "Do you build chatbots using GPT and other LLMs?",
      answer:
        "Yes. We can use popular LLM providers and choose the best approach for your constraints—private data boundaries, latency, and cost. We add guardrails and evaluations to improve reliability.",
    },
    {
      question: "Can the bot talk to users and understand multiple languages?",
      answer:
        "Yes. For voice and multilingual experiences, we can combine speech and language components with the same backend knowledge retrieval and safety policies.",
    },
    {
      question: "What level of security do you provide?",
      answer:
        "We implement secure access patterns: role-based retrieval, least-privilege tool access, secrets handling, logging, and safe error responses. We can also support NDA-based delivery and secure deployment guidance.",
    },
  ];

  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              AI Development
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              AI Chatbot Development
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
              Build helpful, safe, and reliable chat experiences for support,
              sales, and internal operations—grounded in your data and optimized
              for measurable business outcomes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/lets-talk" variant="primary" className="px-6 py-3">
                Talk to our experts <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/our-work" variant="secondary" className="px-6 py-3">
                Explore our work
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <Bot className="h-4 w-4 text-indigo-600" />,
                  t: "Knowledge‑grounded answers",
                  d: "Private search (RAG) over your docs and data.",
                },
                {
                  icon: <Lock className="h-4 w-4 text-sky-600" />,
                  t: "Guardrails & moderation",
                  d: "Safer outputs with policies and refusal behavior.",
                },
                {
                  icon: <Headphones className="h-4 w-4 text-emerald-600" />,
                  t: "Human handoff",
                  d: "Escalate to agents with context and tracking.",
                },
                {
                  icon: <Workflow className="h-4 w-4 text-violet-600" />,
                  t: "Tool integrations",
                  d: "Connect CRM, ERP, ticketing, and internal APIs.",
                },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    {c.icon}
                    {c.t}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">
                    {c.d}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { k: "2–4 weeks", v: "MVP delivery" },
                { k: "Weekly", v: "demos & updates" },
                { k: "Secure", v: "by default" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
                >
                  <div className="font-semibold text-slate-900">{s.k}</div>
                  <div className="text-xs text-slate-500">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Chatbots designed for real-world business workflows"
          description="We focus on accuracy, safety, and measurable results—not just a demo. Your bot can answer questions, take actions, and route requests reliably."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
              t: "Secure knowledge access",
              d: "Role-aware retrieval, least-privilege tool access, and safe data boundaries.",
            },
            {
              icon: <Mic className="h-5 w-5 text-sky-600" />,
              t: "Voice-ready experiences",
              d: "Add voice input/output with the same guardrails and knowledge base.",
            },
            {
              icon: <Languages className="h-5 w-5 text-violet-600" />,
              t: "Multi-language support",
              d: "Localized UX and multilingual responses with consistent policies and accuracy.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white ring-1 ring-slate-200">
                {c.icon}
              </div>
              <div className="mt-4 text-base font-semibold text-slate-900">{c.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="What we build"
          title="AI chatbot development services"
          description="From support to sales to internal operations, we design chatbots that handle real workflows—securely and reliably."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              t: "Customer support chatbots",
              d: "Deflect repetitive tickets, find answers fast, and route complex issues to humans with context.",
            },
            {
              t: "Sales & lead qualification",
              d: "Capture intent, qualify leads, and automate follow-ups with your CRM and email tooling.",
            },
            {
              t: "Internal helpdesk assistant",
              d: "IT/HR assistants that answer policy questions, create tickets, and guide onboarding workflows.",
            },
            {
              t: "Appointment & scheduling bots",
              d: "Book meetings, send reminders, and sync calendars while maintaining secure access.",
            },
            {
              t: "Knowledge base Q&A",
              d: "Private search over docs, PDFs, and wikis using RAG with access controls and evaluation.",
            },
            {
              t: "Workflow automation bots",
              d: "Agents that take action: update tools, trigger approvals, and automate repetitive tasks.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="text-base font-semibold text-slate-900">{c.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Benefits"
          title="Why businesses adopt AI chatbots"
          description="Practical outcomes that reduce cost and improve experience—without sacrificing safety."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: <Timer className="h-5 w-5 text-indigo-600" />,
              t: "Faster response times",
              d: "Instant answers for common questions and faster handoffs for complex cases.",
            },
            {
              icon: <Users className="h-5 w-5 text-sky-600" />,
              t: "Lower support load",
              d: "Deflect repetitive tickets and keep your team focused on high-value work.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
              t: "Safer, controlled outputs",
              d: "Guardrails, policies, and evaluation to improve reliability over time.",
            },
          ].map((b) => (
            <div
              key={b.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white ring-1 ring-slate-200">
                {b.icon}
              </div>
              <div className="mt-4 text-base font-semibold text-slate-900">{b.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{b.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Process"
          title="How we deliver chatbot projects"
          description="A simple, proven roadmap: ship a reliable MVP first, then scale capabilities with weekly iterations."
        />
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            {
              t: "Discovery",
              d: "Use-cases, success metrics, data sources, and access constraints.",
            },
            {
              t: "Knowledge + tools",
              d: "RAG ingestion, tool integrations, and permissions model.",
            },
            {
              t: "Guardrails + QA",
              d: "Policies, refusal rules, evaluation set, and monitoring signals.",
            },
            {
              t: "Launch + iterate",
              d: "Pilot rollout, analytics, improvements, and new workflows.",
            },
          ].map((s, idx) => (
            <div
              key={s.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Step {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 text-base font-semibold text-slate-900">{s.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools and platforms we work with"
          description="We integrate into your existing ecosystem and choose the best fit for your constraints."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {[
            "OpenAI / LLMs",
            "RAG & Vector DB",
            "Node.js / APIs",
            "MongoDB",
            "CRMs (Sales)",
            "Ticketing (Support)",
            "Email / Calendars",
            "Auth / SSO",
            "Analytics",
            "Webhooks",
            "Cloud deploy",
            "Monitoring",
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-center text-xs font-semibold text-slate-700 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured projects"
          title="What we’ve built in adjacent workflows"
          description="A few examples of the outcomes we optimize for: automation, accuracy, and time savings."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              t: "Support assistant",
              d: "Private doc search with guardrails and agent handoff for faster resolution.",
            },
            {
              t: "Sales automation",
              d: "Lead qualification and follow-ups integrated with CRM and email workflows.",
            },
            {
              t: "Operations copilot",
              d: "Task automation with approvals, audit trails, and analytics.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <PanelsTopLeft className="h-4 w-4 text-indigo-600" />
                {c.t}
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{c.d}</div>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Outcome-focused delivery
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently asked questions"
          description="Quick answers about integrations, timelines, multilingual support, and security."
        />
        <Accordion items={faqs} defaultOpenIndex={0} variant="minimal" />
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Discover how we can help your business grow
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              If you’re exploring chatbots for the first time or need to improve
              an existing one, we can help you design a bot that answers
              correctly, integrates safely, and drives measurable outcomes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { k: "6+", v: "Years of experience" },
                { k: "17+", v: "Skilled professionals" },
                { k: "46+", v: "Projects delivered" },
                { k: "23+", v: "Global clientele served" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
                >
                  <div className="text-2xl font-semibold text-slate-900">{s.k}</div>
                  <div className="mt-1 text-sm text-slate-600">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-8">
            <div className="text-sm font-semibold text-slate-900">
              Let’s listen to what you’ve got and provide you a solution.
            </div>
            <div className="mt-6">
              <ContactForm source="ai-chatbots" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

