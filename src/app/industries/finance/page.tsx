import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel";
import { StatRow } from "@/components/marketing/StatRow";
import { FinanceChallenges } from "@/components/marketing/FinanceChallenges";
import { FinanceRoiCalculator } from "@/components/marketing/FinanceRoiCalculator";
import { GrowthSection } from "@/components/marketing/GrowthSection";
import { buildMetadata } from "@/lib/seo";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  FileSearch,
  Landmark,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Finance",
  description:
    "Finance software solutions by PSV Enterprises—dashboards, automation, secure internal systems, and reporting built for accuracy and operational control.",
  canonical: "/industries/finance",
  openGraphTitle: "Finance Software Development",
});

export default function FinancePage() {
  return (
    <div className="space-y-16 py-12">
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span className="text-slate-300">›</span>
          <Link href="/industries" className="hover:text-slate-700">
            Industries
          </Link>
          <span className="text-slate-300">›</span>
          <span className="text-slate-700">Finance</span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              <Landmark className="h-4 w-4 text-emerald-600" />
              Finance
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Finance software that improves control, reporting, and operational efficiency
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
              PSV Enterprises builds secure internal systems, dashboards, and automation for finance teams
              so they can reduce manual work, improve visibility, and operate with stronger controls.
            </p>

            <ul className="mt-7 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {[
                "Decision-grade reporting and dashboards",
                "Automation for repetitive finance workflows",
                "Integration-ready systems for existing tools",
                "Security-minded, role-based access patterns",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-2 rounded-2xl border border-slate-200/70 bg-white/70 p-4"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="leading-6">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/lets-talk" variant="primary" className="px-6 py-3">
                Book a consultation <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary" className="px-6 py-3">
                View work
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.08)] sm:p-8">
            <div className="text-sm font-semibold text-slate-900">Tell us what you’re building.</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              Share your requirements and we’ll respond with a clear plan and estimate.
            </div>
            <div className="mt-6">
              <ContactForm source="finance-industry" />
            </div>
          </div>
        </div>
      </section>

      <StatRow />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Challenges"
          title="Common bottlenecks in finance operations"
          description="We help finance teams reduce manual friction, improve reporting, and strengthen operational control."
        />
        <FinanceChallenges />
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Solutions"
          title="Finance solutions we deliver"
          description="From dashboards and reporting systems to automation and internal workflows."
          right={
            <ButtonLink href="/services/mern" variant="secondary" className="px-5 py-2.5">
              Explore software services
            </ButtonLink>
          }
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Financial dashboards & reporting",
              desc: "Operational and leadership views for performance, trends, and decision-making.",
              icon: <BarChart3 className="h-5 w-5 text-indigo-600" />,
              href: "/lets-talk",
              image:
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=800&fit=crop",
            },
            {
              title: "Workflow automation",
              desc: "Automate recurring approvals, reconciliation steps, and coordination across departments.",
              icon: <WalletCards className="h-5 w-5 text-sky-600" />,
              href: "/lets-talk",
              image:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
            },
            {
              title: "Secure internal systems",
              desc: "Role-based access, structured records, and operational controls designed for sensitive workflows.",
              icon: <Lock className="h-5 w-5 text-emerald-600" />,
              href: "/lets-talk",
              image:
                "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1200&h=800&fit=crop",
            },
          ].map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="relative h-44 w-full bg-slate-200">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
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
          eyebrow="Capabilities"
          title="Additional finance capabilities"
          description="Operational tooling that improves speed, structure, and accountability."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <FileSearch className="h-5 w-5 text-indigo-600" />,
              t: "Document and record workflows",
              d: "Searchable, structured records for statements, invoices, and internal approvals.",
            },
            {
              icon: <Layers className="h-5 w-5 text-sky-600" />,
              t: "Internal portals and dashboards",
              d: "Role-based systems for teams, approvers, and leadership to work from the same source of truth.",
            },
            {
              icon: <WalletCards className="h-5 w-5 text-emerald-600" />,
              t: "Finance operations automation",
              d: "Recurring workflows, checks, and operational handoffs with fewer manual touchpoints.",
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-violet-600" />,
              t: "KPI and trend analytics",
              d: "Track health, utilization, variance, and operational metrics with cleaner dashboards.",
            },
            {
              icon: <Landmark className="h-5 w-5 text-amber-600" />,
              t: "System integrations",
              d: "Connect finance workflows to CRMs, ERPs, data pipelines, and internal platforms.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5 text-rose-600" />,
              t: "Controls & traceability",
              d: "Least-privilege access, auditability, and workflow history for sensitive operations.",
            },
            {
              icon: <Users className="h-5 w-5 text-slate-700" />,
              t: "Role-based team workflows",
              d: "Distinct workflows for operators, reviewers, approvers, managers, and leadership views.",
            },
            {
              icon: <Lock className="h-5 w-5 text-indigo-600" />,
              t: "Secure internal access patterns",
              d: "Sensitive operations protected with permissions, segmentation, and safe defaults.",
            },
            {
              icon: <FileSearch className="h-5 w-5 text-emerald-600" />,
              t: "Searchable document operations",
              d: "Make records, statements, and internal finance documents easier to locate and action.",
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
          eyebrow="Case studies"
          title="A few finance builds we deliver"
          description="Examples of reporting, workflow systems, and secure internal tools we ship."
          right={
            <ButtonLink href="/work" variant="secondary" className="px-5 py-2.5">
              View all case studies
            </ButtonLink>
          }
        />

        <div className="space-y-6">
          {[
            {
              tag: "Reporting",
              title: "Finance KPI dashboard",
              desc: "Leadership reporting for trends, variance, and operational performance with clean role-based views.",
              stack: ["Dashboards", "KPIs", "Analytics", "RBAC"],
              image:
                "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=1200&h=800&fit=crop",
            },
            {
              tag: "Workflow",
              title: "Approval and reconciliation system",
              desc: "Automated handoffs and structured workflows to reduce repetitive coordination and manual tracking.",
              stack: ["Automation", "Workflows", "Notifications", "Audit trail"],
              image:
                "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&h=800&fit=crop",
            },
            {
              tag: "Operations",
              title: "Secure internal operations portal",
              desc: "A role-based system for teams to manage records, tasks, and reporting in a controlled environment.",
              stack: ["Security", "Portals", "Records", "Integrations"],
              image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop",
            },
          ].map((c) => (
            <article
              key={c.title}
              className="grid gap-6 overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)] lg:grid-cols-12"
            >
              <div className="p-7 lg:col-span-6">
                <div className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                  {c.tag}
                </div>
                <div className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
                  {c.title}
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{c.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <ButtonLink href="/work" variant="dark" className="px-5 py-2.5">
                    Read full case study <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>

              <div className="relative min-h-56 bg-slate-200 lg:col-span-6">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Benefits"
          title="Business outcomes you can measure"
          description="Software should improve controls, visibility, and team efficiency."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Better operational control", d: "Role-based workflows and structured systems reduce process drift." },
            { t: "Faster reporting", d: "Dashboards reduce lag between data and decision-making." },
            { t: "Lower manual effort", d: "Automation reduces repetitive operational and approval work." },
            { t: "More reliable records", d: "Structured data and searchable documents improve accuracy and access." },
            { t: "Stronger traceability", d: "Audit-friendly workflows support accountability and compliance posture." },
            { t: "Scalable internal systems", d: "Architecture that supports more teams, roles, and complexity over time." },
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

      <FinanceRoiCalculator />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Why PSV"
          title="Why teams choose PSV for finance software delivery"
          description="A practical combination of controls-aware design, scalable engineering, and clear execution."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Controls-aware implementation",
              d: "We design systems with traceability, access boundaries, and operational accountability in mind.",
            },
            {
              t: "Decision-grade reporting",
              d: "Dashboards focus on clarity and actionability instead of simply exposing raw data.",
            },
            {
              t: "Integration-first mindset",
              d: "We reduce duplicate work by connecting the systems your teams already rely on.",
            },
            {
              t: "Reliable delivery cadence",
              d: "Milestones, demos, and written updates keep stakeholders aligned and in control.",
            },
          ].map((m) => (
            <div
              key={m.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="text-base font-semibold text-slate-900">{m.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{m.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-slate-950 px-8 py-12 text-center shadow-[0_14px_40px_rgba(2,6,23,0.22)] sm:px-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Improve control with better finance systems and reporting
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          Reduce manual effort, strengthen controls, and give teams better visibility with a structured roadmap.
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
          eyebrow="Process"
          title="Our finance software development process"
          description="A milestone-based approach that keeps delivery predictable and quality high."
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {[
            {
              t: "Discovery",
              d: "Clarify workflows, controls, stakeholders, and reporting needs.",
              icon: <Sparkles className="h-5 w-5 text-indigo-600" />,
            },
            {
              t: "Design",
              d: "Map roles, dashboards, information architecture, and system boundaries.",
              icon: <Layers className="h-5 w-5 text-sky-600" />,
            },
            {
              t: "Build",
              d: "Implement features with QA, validations, and security-minded patterns.",
              icon: <ClipboardList className="h-5 w-5 text-emerald-600" />,
            },
            {
              t: "Launch & iterate",
              d: "Deploy, train teams, monitor usage, and improve with ongoing milestones.",
              icon: <BarChart3 className="h-5 w-5 text-rose-600" />,
            },
          ].map((s) => (
            <div
              key={s.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                {s.icon}
              </div>
              <div className="mt-4 text-base font-semibold text-slate-900">{s.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{s.d}</div>
            </div>
          ))}
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
                "The reporting dashboards gave leadership faster visibility and reduced time spent compiling updates manually.",
              name: "Client",
              role: "Finance Lead",
              industry: "Finance",
              avatar: "https://i.pravatar.cc/150?img=13",
            },
            {
              quote:
                "Workflow automation reduced repetitive approvals and made coordination across teams much smoother.",
              name: "Client",
              role: "Operations Manager",
              industry: "Financial Services",
              avatar: "https://i.pravatar.cc/150?img=24",
            },
            {
              quote:
                "We got a secure internal platform with clear role-based access and a roadmap for future improvements.",
              name: "Client",
              role: "Director",
              industry: "Finance",
              avatar: "https://i.pravatar.cc/150?img=36",
            },
          ]}
        />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Latest buzz"
          title="Get insights from our latest articles"
          description="Short, practical reads on reporting, controls, and workflow automation."
          right={
            <ButtonLink href="/company" variant="secondary" className="px-5 py-2.5">
              View all
            </ButtonLink>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              category: "Reporting",
              read: "10 min read",
              title: "Building dashboards finance teams actually use",
              excerpt:
                "A practical approach to reporting views that help teams act faster instead of manually compiling updates.",
              date: "Feb 2026",
              tint: "from-indigo-600/15 to-sky-500/10",
            },
            {
              category: "Workflow",
              read: "12 min read",
              title: "Reducing approval bottlenecks with automation",
              excerpt:
                "How workflow automation improves speed, consistency, and visibility across internal finance operations.",
              date: "Jan 2026",
              tint: "from-emerald-600/15 to-indigo-600/10",
            },
            {
              category: "Engineering",
              read: "9 min read",
              title: "Designing secure internal finance systems",
              excerpt:
                "A pragmatic guide to access controls, auditability, and architecture for sensitive operational workflows.",
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
              <div className="mt-4 text-xs text-slate-500">{b.date}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently asked questions"
          description="Quick answers about delivery, integrations, and controls."
        />
        <Accordion
          variant="minimal"
          defaultOpenIndex={0}
          items={[
            {
              question: "Can you integrate with our ERP, CRM, or finance tools?",
              answer:
                "Yes. We connect systems using APIs, structured workflows, and secure data boundaries so teams can work from cleaner, more reliable data.",
            },
            {
              question: "Can you build role-based internal systems for different stakeholders?",
              answer:
                "Yes. We design access patterns and workflows for operators, reviewers, approvers, managers, and leadership views.",
            },
            {
              question: "Do you provide dashboards and reporting too?",
              answer:
                "Yes. We build decision-grade dashboards and KPI reporting that reduce manual compilation and support faster decisions.",
            },
            {
              question: "Do you provide ongoing support after launch?",
              answer:
                "Yes. We offer maintenance and ongoing development with a predictable monthly capacity model and clear response expectations.",
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
          <ContactForm source="finance-bottom" />
        </div>
      </section>
    </div>
  );
}

