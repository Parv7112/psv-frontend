import { ButtonLink } from "@/components/Button";
import { Brain, FileText, MessageSquare, Search } from "lucide-react";

export default function AiServicePage() {
  return (
    <div className="space-y-10">
      <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/10">
          <Brain className="h-4 w-4 text-violet-600" />
          AI Solutions
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Practical AI that improves speed, quality, and decision-making
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          We ship AI features that are reliable in production: assistants,
          document workflows, knowledge search, and analytics—built with safety
          and observability.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5">
            Talk to an AI engineer
          </ButtonLink>
          <ButtonLink href="/services" variant="ghost" className="px-5 py-2.5">
            Back to services
          </ButtonLink>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            icon: <MessageSquare className="h-5 w-5 text-violet-600" />,
            title: "Chatbots & assistants",
            desc: "Support assistants, internal copilots, and task automation with guardrails.",
          },
          {
            icon: <Search className="h-5 w-5 text-sky-600" />,
            title: "RAG & enterprise search",
            desc: "Private knowledge bases for docs, PDFs, policies, and structured data.",
          },
          {
            icon: <FileText className="h-5 w-5 text-emerald-600" />,
            title: "Document automation",
            desc: "Extraction, classification, summarization, and workflow integrations.",
          },
          {
            icon: <Brain className="h-5 w-5 text-violet-600" />,
            title: "Analytics & insights",
            desc: "Dashboards and decision tools using clean data pipelines and evaluation.",
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

