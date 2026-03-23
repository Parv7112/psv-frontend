import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel";
import { StatRow } from "@/components/marketing/StatRow";
import { HealthcareChallenges } from "@/components/marketing/HealthcareChallenges";
import { HealthcareRoiCalculator } from "@/components/marketing/HealthcareRoiCalculator";
import { GrowthSection } from "@/components/marketing/GrowthSection";
import { buildMetadata } from "@/lib/seo";
import {
  ArrowRight,
  Activity,
  BarChart3,
  Brain,
  CalendarDays,
  CheckCircle2,
  Clock,
  Database,
  FileText,
  Heart,
  HandCoins,
  Lock,
  MessageSquare,
  Pill,
  ReceiptText,
  ScanText,
  Shield,
  Target,
  Video,
  Users,
  Zap,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Healthcare",
  description:
    "Healthcare software and AI solutions by PSV Enterprises—automation, documentation, patient engagement, and analytics built with security and compliance in mind.",
  canonical: "/industries/healthcare",
  openGraphTitle: "Healthcare Software & AI Solutions",
});

export default function HealthcarePage() {
  return (
    <div className="space-y-16 py-12">
      <PageHero
        breadcrumb={
          <>
            <Link href="/">Home</Link>
            <span className="px-2">›</span>
            <Link href="/industries">Industries</Link>
            <span className="px-2">›</span>
            <span className="text-zinc-300">Healthcare</span>
          </>
        }
        eyebrow={
          <>
            <Heart className="h-4 w-4 text-emerald-400" />
            Healthcare
          </>
        }
        title="Healthcare software & AI solutions that reduce operational friction"
        description="PSV Enterprises helps healthcare teams automate documentation, streamline patient workflows, and unlock insights from clinical and operational data—built with privacy, security, and compliance in mind."
        actions={
          <>
            <ButtonLink href="/lets-talk" variant="primary" className="px-6 py-3">
              Book a consultation <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/work" variant="outlineLight" className="px-6 py-3">
              View work
            </ButtonLink>
          </>
        }
      />

      <section className="relative z-10 -mt-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {[
              "Workflow-first automation (not “AI for AI’s sake”)",
              "Integration-ready (EHR/EMR, messaging, analytics)",
              "Clear milestones, demos, and predictable delivery",
              "Security-minded architecture and data boundaries",
            ].map((t) => (
              <li key={t} className="flex gap-2 rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span className="leading-6">{t}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.08)] sm:p-8">
            <div className="text-sm font-semibold text-slate-900">Your vision. Our execution.</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              Share your requirements and we’ll respond with a clear plan and estimate.
            </div>
            <div className="mt-6">
              <ContactForm source="healthcare-industry" />
            </div>
          </div>
        </div>
      </section>

      <StatRow />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Challenges"
          title="Operational bottlenecks we help healthcare teams remove"
          description="Healthcare teams lose hours to fragmented systems, repetitive coordination, and manual documentation. We build automations that reduce load while improving accuracy and experience."
        />
        <HealthcareChallenges />
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Solutions"
          title="Healthcare solutions we deliver"
          description="We build workflow-first systems that integrate cleanly into your operations."
          right={
            <ButtonLink href="/services/ai" variant="secondary" className="px-5 py-2.5">
              Explore AI services
            </ButtonLink>
          }
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Clinical documentation automation",
              desc: "Capture structured notes, summaries, and follow-ups to reduce clinician burden and improve consistency.",
              icon: <FileText className="h-5 w-5 text-indigo-600" />,
              href: "/services/ai",
              image:
                "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1200&h=800&fit=crop",
            },
            {
              title: "Patient engagement & reminders",
              desc: "Messaging workflows for intake, reminders, medication adherence, and post-visit follow-ups.",
              icon: <MessageSquare className="h-5 w-5 text-emerald-600" />,
              href: "/lets-talk",
              image:
                "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&h=800&fit=crop",
            },
            {
              title: "Data intelligence & analytics",
              desc: "Dashboards, pipelines, and search over clinical and operational data—built for decisions, not noise.",
              icon: <BarChart3 className="h-5 w-5 text-sky-600" />,
              href: "/services/mern",
              image:
                "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop",
            },
          ].map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="relative h-44 w-full bg-slate-200">
                <Image src={s.image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
              <div className="p-7">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-900">{s.title}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</div>
                  </div>
                </div>
                <div className="mt-6">
                  <ButtonLink href={s.href} variant="ghost" className="px-5 py-2.5">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured work"
          title="Example healthcare builds"
          description="A few typical projects we deliver—automation, dashboards, and engagement workflows."
          right={
            <ButtonLink href="/work" variant="secondary" className="px-5 py-2.5">
              View all case studies
            </ButtonLink>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Medication adherence reminders",
              subtitle: "Voice/SMS follow-ups with escalation logic",
              image:
                "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&h=800&fit=crop",
              tags: ["Automation", "Integrations", "Reporting"],
            },
            {
              title: "Appointment booking assistant",
              subtitle: "Triage, specialist routing, and confirmations",
              image:
                "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&h=800&fit=crop",
              tags: ["Chat", "Scheduling", "Multilingual"],
            },
            {
              title: "Patient portal & care workflows",
              subtitle: "Secure access, documents, and post-visit flows",
              image:
                "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&h=800&fit=crop",
              tags: ["Web app", "Security", "UX"],
            },
          ].map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-shadow hover:shadow-[0_12px_26px_rgba(2,6,23,0.08)]"
            >
              <div className="relative h-44 w-full bg-slate-200">
                <Image src={p.image} alt="" fill className="object-cover transition-transform group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
              <div className="p-7">
                <div className="text-lg font-semibold text-slate-900">{p.title}</div>
                <div className="mt-1 text-sm text-slate-600">{p.subtitle}</div>
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
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Deliverables"
          title="Healthcare solutions we deliver"
          description="From automation and data intelligence to patient engagement, we build software that improves operational efficiency and care experience."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <FileText className="h-5 w-5 text-indigo-600" />,
              t: "AI clinical documentation automation",
              d: "Generate structured notes and summaries to reduce clinician effort and improve chart completeness.",
            },
            {
              icon: <MessageSquare className="h-5 w-5 text-emerald-600" />,
              t: "AI-powered patient engagement platforms",
              d: "SMS/email/chat workflows for reminders, follow-ups, and education to keep patients engaged between visits.",
            },
            {
              icon: <Video className="h-5 w-5 text-sky-600" />,
              t: "Telemedicine & virtual care platforms",
              d: "Secure virtual consultations with scheduling, visit summaries, and care continuity workflows.",
            },
            {
              icon: <ScanText className="h-5 w-5 text-amber-600" />,
              t: "Intelligent document processing & OCR",
              d: "Extract key data from notes, lab reports, imaging results, and scanned documents into searchable structures.",
            },
            {
              icon: <CalendarDays className="h-5 w-5 text-violet-600" />,
              t: "Appointment booking & virtual assistants",
              d: "Automate intake, cancellations, and rescheduling to reduce call volume and improve access.",
            },
            {
              icon: <HandCoins className="h-5 w-5 text-rose-600" />,
              t: "AI revenue cycle management automation",
              d: "Improve reimbursement accuracy with validation, claim checks, and reporting to reduce denials and overhead.",
            },
            {
              icon: <Database className="h-5 w-5 text-slate-700" />,
              t: "EHR & EMR solutions",
              d: "Build and modernize systems with interoperable data access and workflow-friendly input patterns.",
            },
            {
              icon: <ReceiptText className="h-5 w-5 text-indigo-600" />,
              t: "Medical billing & practice management software",
              d: "Scheduling, payments, reporting, and operations—built to reduce manual work and improve visibility.",
            },
            {
              icon: <Pill className="h-5 w-5 text-emerald-600" />,
              t: "Pharmacy management & e‑prescription solutions",
              d: "Medication validation, refills, interaction checks, and coordination workflows for safer prescriptions.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
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
          eyebrow="Benefits"
          title="Business outcomes you can measure"
          description="Software should reduce complexity, control cost, and improve care experience."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Built around real workflows", d: "Adoption improves when tools match how teams operate day-to-day." },
            { t: "Reduced administrative load", d: "Automate repetitive work so staff can focus on higher-value tasks." },
            { t: "Higher quality documentation", d: "More consistency and fewer errors across notes and operations." },
            { t: "Cross-platform connectivity", d: "Integrations reduce context switching and duplicate entry." },
            { t: "Optimized operational cost", d: "Fewer bottlenecks, less rework, and faster throughput." },
            { t: "Compliance-aware by design", d: "Permissions, audit trails, and secure data handling patterns." },
          ].map((b) => (
            <div
              key={b.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="text-lg font-semibold text-slate-900">{b.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{b.d}</div>
            </div>
          ))}
        </div>
      </section>

      <HealthcareRoiCalculator />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Who we serve"
          title="Key areas of the healthcare ecosystem"
          description="Solutions adapt to clinical and administrative environments—without forcing a one-size-fits-all approach."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Users className="h-5 w-5 text-indigo-600" />, t: "Hospitals & health systems", d: "High-volume operations with complex coordination." },
            { icon: <Target className="h-5 w-5 text-sky-600" />, t: "Clinics & practices", d: "Scheduling, documentation, billing, and follow-ups." },
            { icon: <Zap className="h-5 w-5 text-emerald-600" />, t: "Labs & imaging centers", d: "Faster report processing and better data access." },
            { icon: <MessageSquare className="h-5 w-5 text-violet-600" />, t: "Virtual care providers", d: "Digital-first experiences and continuity of care." },
            { icon: <BarChart3 className="h-5 w-5 text-amber-600" />, t: "Admin operations", d: "Compliance, reporting, and operational efficiency." },
            { icon: <Heart className="h-5 w-5 text-rose-600" />, t: "Patient engagement", d: "Reminders, education, and proactive follow-ups." },
          ].map((s) => (
            <div
              key={s.t}
              className="flex gap-4 rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                {s.icon}
              </div>
              <div>
                <div className="text-base font-semibold text-slate-900">{s.t}</div>
                <div className="mt-1 text-sm leading-6 text-slate-600">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-slate-950 px-8 py-12 text-center shadow-[0_14px_40px_rgba(2,6,23,0.22)] sm:px-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Deliver better care with smarter software
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          Automate, integrate, and measure outcomes with a workflow-first approach.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/lets-talk" variant="primary" className="px-6 py-3">
            Book a strategic consultation
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" className="px-6 py-3">
            Contact us
          </ButtonLink>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What teams say after shipping with PSV"
          description="Clear communication, steady progress, and production-ready delivery."
        />
        <TestimonialCarousel
          items={[
            {
              quote:
                "The automation reduced manual follow-ups and improved consistency across patient communications.",
              name: "Client",
              role: "Operations Lead",
              industry: "Healthcare",
              avatar: "https://i.pravatar.cc/150?img=12",
            },
            {
              quote:
                "PSV kept scope tight and delivered incrementally—each milestone shipped with QA and clean handover.",
              name: "Client",
              role: "Product Manager",
              industry: "Healthcare",
              avatar: "https://i.pravatar.cc/150?img=32",
            },
            {
              quote:
                "We got a stable, maintainable system with clear documentation and a roadmap for phase two.",
              name: "Client",
              role: "CTO",
              industry: "Health-tech",
              avatar: "https://i.pravatar.cc/150?img=45",
            },
          ]}
        />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently asked questions"
          description="Quick answers about integrations, privacy, and delivery."
        />
        <Accordion
          variant="minimal"
          defaultOpenIndex={0}
          items={[
            {
              question: "Can you integrate with our existing EHR/EMR?",
              answer:
                "Yes. We design integrations around your current workflows—using APIs, webhooks, secure file flows, and role-based access so adoption stays smooth.",
            },
            {
              question: "How do you handle security and sensitive data?",
              answer:
                "We prioritize least-privilege access, careful data boundaries, and auditability. We also align architecture with your compliance requirements from day one.",
            },
            {
              question: "How long does a typical project take?",
              answer:
                "Timelines depend on scope. Many teams start with a focused 2–6 week phase to prove value, then expand into a roadmap with milestone delivery.",
            },
            {
              question: "Can you help with ongoing improvements after launch?",
              answer:
                "Yes. We offer maintenance and ongoing delivery with clear response expectations and a predictable monthly capacity model.",
            },
          ]}
        />
      </section>

      <GrowthSection />

      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Let’s talk"
          title="Tell us what you’re building"
          description="We’ll reply with a clear plan, timeline, and realistic estimate."
          right={
            <ButtonLink href="/services" variant="secondary" className="px-5 py-2.5">
              Explore services
            </ButtonLink>
          }
        />
        <div className="mt-8">
          <ContactForm source="healthcare-bottom" />
        </div>
      </section>
    </div>
  );
}

