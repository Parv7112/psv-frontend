import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel";
import { StatRow } from "@/components/marketing/StatRow";
import { EducationChallenges } from "@/components/marketing/EducationChallenges";
import { EducationRoiCalculator } from "@/components/marketing/EducationRoiCalculator";
import { GrowthSection } from "@/components/marketing/GrowthSection";
import { buildMetadata } from "@/lib/seo";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Layers,
  Lock,
  MessageSquare,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Education",
  description:
    "Education software solutions by PSV Enterprises—learning platforms, student portals, automation, and analytics built for scale and great UX.",
  canonical: "/industries/education",
  openGraphTitle: "Education Software Development",
});

export default function EducationPage() {
  return (
    <div className="space-y-16 py-12">
      <PageHero
        breadcrumb={
          <>
            <Link href="/">Home</Link>
            <span className="px-2">›</span>
            <Link href="/industries">Industries</Link>
            <span className="px-2">›</span>
            <span className="text-zinc-300">Education</span>
          </>
        }
        eyebrow={
          <>
            <GraduationCap className="h-4 w-4 text-indigo-400" />
            Education
          </>
        }
        title="Education platforms that improve engagement and outcomes"
        description="PSV Enterprises builds modern education software—learning platforms, portals, and analytics—so institutions can deliver better experiences while reducing operational load."
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
              "Student-first UX with accessibility in mind",
              "Dashboards, reporting, and outcomes tracking",
              "Automation for admissions, fees, attendance, and comms",
              "Integration-ready (SSO, payments, LMS tools)",
            ].map((t) => (
              <li key={t} className="flex gap-2 rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                <span className="leading-6">{t}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.08)] sm:p-8">
            <div className="text-sm font-semibold text-slate-900">Tell us what you’re building.</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              Share your requirements and we’ll respond with a clear plan and estimate.
            </div>
            <div className="mt-6">
              <ContactForm source="education-industry" />
            </div>
          </div>
        </div>
      </section>

      <StatRow />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Challenges"
          title="Common bottlenecks in education operations and delivery"
          description="We help institutions simplify workflows, improve learner experiences, and make decisions with better data."
        />
        <EducationChallenges />
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Solutions"
          title="Education solutions we deliver"
          description="Modular platforms and workflows that fit your institution’s needs."
          right={
            <ButtonLink href="/services" variant="secondary" className="px-5 py-2.5">
              Explore services
            </ButtonLink>
          }
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Learning platforms (LMS-style)",
              desc: "Content delivery, assignments, grading, progress tracking, and role-based access.",
              icon: <BookOpen className="h-5 w-5 text-indigo-600" />,
              href: "/lets-talk",
              image:
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop",
            },
            {
              title: "Student portals & admin dashboards",
              desc: "Admissions, attendance, fees, documents, and communication in one place.",
              icon: <Layers className="h-5 w-5 text-sky-600" />,
              href: "/lets-talk",
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
            },
            {
              title: "Analytics & reporting",
              desc: "Dashboards for outcomes, utilization, cohort performance, and at-risk learners.",
              icon: <BarChart3 className="h-5 w-5 text-emerald-600" />,
              href: "/services/mern",
              image:
                "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&h=800&fit=crop",
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
          eyebrow="Case studies"
          title="A few education builds we deliver"
          description="Examples of platforms and workflows we build for institutions and edtech teams."
          right={
            <ButtonLink href="/work" variant="secondary" className="px-5 py-2.5">
              View all case studies
            </ButtonLink>
          }
        />

        <div className="space-y-6">
          {[
            {
              tag: "Education",
              title: "Student portal with admissions & fee workflows",
              desc: "A unified portal for applications, document collection, fee payments, and communication—built with role-based access.",
              stack: ["Next.js", "APIs", "Payments", "RBAC"],
              image:
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop",
            },
            {
              tag: "EdTech",
              title: "LMS-style learning experience platform",
              desc: "Course delivery, assignments, grading, progress tracking, and learner dashboards with a modular content model.",
              stack: ["React", "Dashboards", "Analytics", "Content"],
              image:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
            },
            {
              tag: "Education Ops",
              title: "Attendance, scheduling & reporting automation",
              desc: "Workflow automation for schedules, attendance, notifications, and admin reporting to reduce manual coordination.",
              stack: ["Automation", "Integrations", "Reporting", "Notifications"],
              image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
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
          title="Why modern education teams invest in better platforms"
          description="Reduce complexity, improve engagement, and measure outcomes with confidence."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Higher learner engagement", d: "Cleaner journeys and communication keep learners on track." },
            { t: "Reduced admin workload", d: "Automation reduces repetitive coordination and data entry." },
            { t: "Better outcomes visibility", d: "Dashboards reveal what works and who needs support." },
            { t: "Scalable governance", d: "Roles, permissions, and data boundaries designed for growth." },
            { t: "Integration-ready stack", d: "SSO, payments, content libraries, and external tools." },
            { t: "Security-first delivery", d: "Sensitive data handled with safe defaults and auditability." },
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

      <EducationRoiCalculator />

      <section className="rounded-3xl bg-slate-950 px-8 py-12 text-center shadow-[0_14px_40px_rgba(2,6,23,0.22)] sm:px-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Build a platform learners love
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          Modernize delivery, automate operations, and measure outcomes with a structured roadmap.
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
          title="Our education software development process"
          description="A milestone-based approach that keeps delivery predictable and quality high."
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {[
            {
              t: "Discovery",
              d: "Clarify goals, users, constraints, and rollout plan.",
              icon: <Sparkles className="h-5 w-5 text-indigo-600" />,
            },
            {
              t: "Design",
              d: "Information architecture, UX flows, and component system.",
              icon: <Layers className="h-5 w-5 text-sky-600" />,
            },
            {
              t: "Build",
              d: "Implement features with QA, performance checks, and security-minded defaults.",
              icon: <ClipboardList className="h-5 w-5 text-emerald-600" />,
            },
            {
              t: "Launch & support",
              d: "Deploy, monitor, and iterate with ongoing improvements.",
              icon: <Lock className="h-5 w-5 text-rose-600" />,
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
                "The portal reduced administrative back-and-forth and made it easier for learners to stay on track.",
              name: "Client",
              role: "Program Manager",
              industry: "Education",
              avatar: "https://i.pravatar.cc/150?img=11",
            },
            {
              quote:
                "We shipped in milestones with clear progress and a stable platform our team can maintain.",
              name: "Client",
              role: "Operations Lead",
              industry: "EdTech",
              avatar: "https://i.pravatar.cc/150?img=21",
            },
            {
              quote:
                "Dashboards gave leadership clarity on outcomes and helped us improve engagement week over week.",
              name: "Client",
              role: "Director",
              industry: "Education",
              avatar: "https://i.pravatar.cc/150?img=33",
            },
          ]}
        />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Latest buzz"
          title="Get insights from our latest articles"
          description="Short, practical reads on product delivery, UX, and building systems that scale."
          right={
            <ButtonLink href="/company" variant="secondary" className="px-5 py-2.5">
              View all
            </ButtonLink>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              category: "Education",
              read: "10 min read",
              title: "Reducing admin load with workflow automation",
              excerpt:
                "Where teams lose time in admissions, attendance, and reporting—and how to fix it with practical automation.",
              date: "Feb 2026",
              tint: "from-indigo-600/15 to-sky-500/10",
            },
            {
              category: "Product",
              read: "12 min read",
              title: "Designing portals users actually adopt",
              excerpt:
                "Information architecture and UX patterns that reduce confusion and improve completion rates.",
              date: "Jan 2026",
              tint: "from-emerald-600/15 to-indigo-600/10",
            },
            {
              category: "Engineering",
              read: "9 min read",
              title: "Scaling multi-tenant education platforms",
              excerpt:
                "A pragmatic guide to roles, data boundaries, and performance when you grow across cohorts and campuses.",
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
          description="Quick answers about delivery, integrations, and security."
        />
        <Accordion
          variant="minimal"
          defaultOpenIndex={0}
          items={[
            {
              question: "Can you integrate with our existing tools (SSO, payments, LMS)?",
              answer:
                "Yes. We routinely integrate with identity providers, payment gateways, and external learning/content tools using APIs and secure workflows.",
            },
            {
              question: "Can you support multiple roles (students, teachers, admins)?",
              answer:
                "Yes. We design role-based access and dashboards so each audience sees the right tools and data.",
            },
            {
              question: "Can the platform handle scale (cohorts, campuses, multi-tenancy)?",
              answer:
                "Yes. We can model multi-tenant data boundaries and performance-aware architecture so growth doesn’t degrade UX.",
            },
            {
              question: "Do you provide ongoing support after launch?",
              answer:
                "Yes. We offer maintenance and continuous improvements with a predictable monthly capacity model.",
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
          <ContactForm source="education-bottom" />
        </div>
      </section>
    </div>
  );
}

