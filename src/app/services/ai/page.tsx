import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/marketing/PageHero";
import { Brain, FileText, MessageSquare, Search } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Solutions",
  description:
    "Practical AI solutions for production: assistants, RAG search, document workflows, and analytics—built with safety, reliability, and observability.",
  canonical: "/services/ai",
});

export default function AiServicePage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow={
          <>
            <Brain className="h-4 w-4 text-violet-400" />
            AI Solutions
          </>
        }
        title="Practical AI that improves speed, quality, and decision-making"
        description="We ship AI features that are reliable in production: assistants, document workflows, knowledge search, and analytics—built with safety and observability."
        actions={
          <>
            <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5">
              Talk to an AI engineer <ArrowRight className="h-4 w-4" />
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

