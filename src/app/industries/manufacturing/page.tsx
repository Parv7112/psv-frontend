import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel";
import { StatRow } from "@/components/marketing/StatRow";
import { ManufacturingChallenges } from "@/components/marketing/ManufacturingChallenges";
import { ManufacturingRoiCalculator } from "@/components/marketing/ManufacturingRoiCalculator";
import { GrowthSection } from "@/components/marketing/GrowthSection";
import { buildMetadata } from "@/lib/seo";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  ClipboardList,
  Factory,
  Gauge,
  GitBranch,
  Layers,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Manufacturing",
  description:
    "Manufacturing software solutions by PSV Enterprises—operations dashboards, workflow automation, ERP-style systems, and analytics built for speed and reliability.",
  canonical: "/industries/manufacturing",
  openGraphTitle: "Manufacturing Software Development",
});

export default function ManufacturingPage() {
  return (
    <div className="space-y-16 py-12">
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-orange-50 via-white to-slate-50 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span className="text-slate-300">›</span>
          <Link href="/industries" className="hover:text-slate-700">
            Industries
          </Link>
          <span className="text-slate-300">›</span>
          <span className="text-slate-700">Manufacturing</span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              <Factory className="h-4 w-4 text-orange-600" />
              Manufacturing
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Manufacturing software that improves visibility and operational flow
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
              PSV Enterprises builds internal tools, dashboards, and workflow automation for
              manufacturing teams—designed to reduce manual work, improve traceability, and support
              decision-making across operations.
            </p>

            <ul className="mt-7 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {[
                "Production, inventory, and workflow dashboards",
                "Automation for repetitive operational tasks",
                "Integrations across ERP, CRM, and internal tools",
                "Scalable role-based systems for growing operations",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-2 rounded-2xl border border-slate-200/70 bg-white/70 p-4"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
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
              <ContactForm source="manufacturing-industry" />
            </div>
          </div>
        </div>
      </section>

      <StatRow />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Challenges"
          title="Common bottlenecks in manufacturing operations"
          description="We help manufacturing teams reduce friction, improve visibility, and streamline execution."
        />
        <ManufacturingChallenges />
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Solutions"
          title="Manufacturing solutions we deliver"
          description="From internal tools to ops dashboards and automation."
          right={
            <ButtonLink href="/what-we-do/software/erp" variant="secondary" className="px-5 py-2.5">
              Explore ERP systems
            </ButtonLink>
          }
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Operations dashboards",
              desc: "Track production, inventory, dispatch, and KPIs in a single operational view.",
              icon: <Gauge className="h-5 w-5 text-indigo-600" />,
              href: "/lets-talk",
              image:
                "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&h=800&fit=crop",
            },
            {
              title: "Workflow automation",
              desc: "Automate repetitive approvals, routing, reporting, and manual handoffs across teams.",
              icon: <Wrench className="h-5 w-5 text-sky-600" />,
              href: "/lets-talk",
              image:
                "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&h=800&fit=crop",
            },
            {
              title: "ERP-style internal systems",
              desc: "Role-based systems for inventory, procurement, scheduling, and operational reporting.",
              icon: <Layers className="h-5 w-5 text-emerald-600" />,
              href: "/what-we-do/software/erp",
              image:
                "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=800&fit=crop",
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
          title="Additional manufacturing capabilities"
          description="Supporting systems that make operations more predictable and easier to scale."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Boxes className="h-5 w-5 text-indigo-600" />,
              t: "Inventory workflows",
              d: "Stock visibility, movement tracking, and role-based controls to reduce mismatches.",
            },
            {
              icon: <GitBranch className="h-5 w-5 text-sky-600" />,
              t: "System integrations",
              d: "Connect ERP, CRM, finance, and internal workflows to reduce duplicate work.",
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-emerald-600" />,
              t: "Production reporting",
              d: "Dashboards for throughput, bottlenecks, downtime, and operational KPIs.",
            },
            {
              icon: <PackageCheck className="h-5 w-5 text-violet-600" />,
              t: "Order & dispatch flows",
              d: "Track progress from sales handoff to delivery with cleaner coordination and status visibility.",
            },
            {
              icon: <Factory className="h-5 w-5 text-amber-600" />,
              t: "Multi-line / multi-unit scaling",
              d: "Consistent workflows and governance across plants, units, or production lines.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5 text-rose-600" />,
              t: "Quality & traceability",
              d: "Audit-friendly process tracking with structured records and workflow history.",
            },
            {
              icon: <Users className="h-5 w-5 text-slate-700" />,
              t: "Role-based team workflows",
              d: "Operator, manager, admin, and leadership views designed around real responsibilities.",
            },
            {
              icon: <Wrench className="h-5 w-5 text-indigo-600" />,
              t: "Maintenance request systems",
              d: "Structured issue capture, routing, status tracking, and resolution logs for operational support.",
            },
            {
              icon: <Factory className="h-5 w-5 text-emerald-600" />,
              t: "Plant performance reporting",
              d: "Consistent dashboards and exports across units to support comparisons and planning.",
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
          title="A few manufacturing builds we deliver"
          description="Examples of dashboards, workflow systems, and operational tooling we ship."
          right={
            <ButtonLink href="/work" variant="secondary" className="px-5 py-2.5">
              View all case studies
            </ButtonLink>
          }
        />

        <div className="space-y-6">
          {[
            {
              tag: "Operations",
              title: "Production visibility dashboard",
              desc: "Real-time KPI dashboards for throughput, exceptions, and line-level reporting to support better decisions.",
              stack: ["Dashboards", "APIs", "Reporting", "RBAC"],
              image:
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=800&fit=crop",
            },
            {
              tag: "Workflow",
              title: "Inventory and dispatch management system",
              desc: "Role-based workflows for stock, movement, dispatch, and operational approvals across teams.",
              stack: ["Inventory", "Workflow", "Integrations", "Notifications"],
              image:
                "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop",
            },
            {
              tag: "Analytics",
              title: "Operational performance reporting",
              desc: "Decision-grade analytics for downtime, bottlenecks, productivity, and trend visibility.",
              stack: ["Analytics", "Pipelines", "KPIs", "Exports"],
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
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
          description="Software should improve throughput, reduce waste, and make operations easier to manage."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Better operational visibility", d: "Dashboards reveal bottlenecks and support faster decisions." },
            { t: "Reduced manual coordination", d: "Automation lowers repetitive work and error-prone handoffs." },
            { t: "Cleaner inventory workflows", d: "Better stock visibility reduces mismatches and delays." },
            { t: "More reliable reporting", d: "Leadership gets clearer performance and utilization insights." },
            { t: "Scalable internal systems", d: "Role-based tools support more teams, units, and complexity." },
            { t: "Audit-friendly operations", d: "Structured workflows improve accountability and traceability." },
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

      <ManufacturingRoiCalculator />

      <section className="rounded-3xl bg-slate-950 px-8 py-12 text-center shadow-[0_14px_40px_rgba(2,6,23,0.22)] sm:px-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Improve operations with better systems and visibility
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          Reduce manual friction, track performance, and scale workflows with a structured roadmap.
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
          title="Our manufacturing software development process"
          description="A milestone-based approach that keeps delivery predictable and quality high."
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {[
            {
              t: "Discovery",
              d: "Clarify workflows, KPIs, stakeholders, and integration requirements.",
              icon: <Sparkles className="h-5 w-5 text-indigo-600" />,
            },
            {
              t: "Design",
              d: "Map roles, dashboards, user flows, and information architecture.",
              icon: <Layers className="h-5 w-5 text-sky-600" />,
            },
            {
              t: "Build",
              d: "Implement features with QA, validation, and reliability-minded patterns.",
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
          eyebrow="Why PSV"
          title="Why teams choose PSV for manufacturing software delivery"
          description="A practical combination of operational awareness, scalable engineering, and clear execution."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Operations-aware design",
              d: "We map workflows around how production, inventory, and reporting actually work on the ground.",
            },
            {
              t: "Scalable internal systems",
              d: "Role-based architecture and clean data models support more complexity without chaos.",
            },
            {
              t: "Clear reporting focus",
              d: "Dashboards are built to support action, not just display numbers.",
            },
            {
              t: "Integration-first mindset",
              d: "We reduce duplicate work by connecting the tools your teams already rely on.",
            },
            {
              t: "Reliable delivery cadence",
              d: "Milestones, demos, and written updates keep stakeholders aligned throughout the project.",
            },
            {
              t: "Maintainable implementation",
              d: "Your team gets systems that are easier to extend, own, and operate over time.",
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
                "The dashboards gave operations leaders clarity on bottlenecks and helped the team act faster.",
              name: "Client",
              role: "Operations Lead",
              industry: "Manufacturing",
              avatar: "https://i.pravatar.cc/150?img=16",
            },
            {
              quote:
                "Workflow automation reduced repetitive coordination and made internal handoffs much smoother.",
              name: "Client",
              role: "Plant Manager",
              industry: "Manufacturing",
              avatar: "https://i.pravatar.cc/150?img=29",
            },
            {
              quote:
                "We got a maintainable internal system with the right reporting and role-based visibility.",
              name: "Client",
              role: "Director",
              industry: "Industrial Operations",
              avatar: "https://i.pravatar.cc/150?img=38",
            },
          ]}
        />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Latest buzz"
          title="Get insights from our latest articles"
          description="Short, practical reads on operations, dashboards, and workflow automation."
          right={
            <ButtonLink href="/company" variant="secondary" className="px-5 py-2.5">
              View all
            </ButtonLink>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              category: "Operations",
              read: "10 min read",
              title: "Building dashboards teams actually use",
              excerpt:
                "A practical guide to operational reporting that highlights bottlenecks instead of creating more noise.",
              date: "Feb 2026",
              tint: "from-indigo-600/15 to-sky-500/10",
            },
            {
              category: "Workflow",
              read: "12 min read",
              title: "Reducing manual handoffs in manufacturing",
              excerpt:
                "How process automation improves coordination and reduces repetitive admin work across teams.",
              date: "Jan 2026",
              tint: "from-emerald-600/15 to-indigo-600/10",
            },
            {
              category: "Engineering",
              read: "9 min read",
              title: "Designing scalable internal systems",
              excerpt:
                "A pragmatic approach to roles, permissions, integrations, and architecture for growing operations.",
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
          description="Quick answers about delivery, integrations, and scale."
        />
        <Accordion
          variant="minimal"
          defaultOpenIndex={0}
          items={[
            {
              question: "Can you integrate with our ERP, CRM, or existing internal tools?",
              answer:
                "Yes. We connect systems using APIs, webhooks, and structured workflows so data moves more cleanly across departments without duplicate entry.",
            },
            {
              question: "Can you support multiple plants, units, or role types?",
              answer:
                "Yes. We design role-based access and scalable architecture so different units and stakeholders can work within the same system safely.",
            },
            {
              question: "Do you build dashboards and reporting too?",
              answer:
                "Yes. We create operational dashboards and analytics views that help teams monitor throughput, bottlenecks, and key performance metrics.",
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
          <ContactForm source="manufacturing-bottom" />
        </div>
      </section>
    </div>
  );
}

