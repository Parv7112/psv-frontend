"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import { LogoCloud } from "@/components/marketing/LogoCloud";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Check,
  CheckCircle2,
  Clock,
  DollarSign,
  Handshake,
  Layers,
  Lightbulb,
  Lock,
  MessageSquare,
  MonitorCheck,
  Rocket,
  Settings,
  Shield,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";

const accentDot = (
  <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />
);

type RelatedTab = "all" | "engagement" | "software" | "other";

function YesNo({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
      <Check className="h-3.5 w-3.5" />
      Yes
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
      <X className="h-3.5 w-3.5" />
      No
    </span>
  );
}

export default function OutsourcingPage() {
  const [relatedTab, setRelatedTab] = useState<RelatedTab>("all");

  const relatedServices = useMemo(
    () => [
      {
        title: "Software Outsourcing",
        href: "/what-we-do/engagement/outsourcing",
        category: "engagement" as const,
      },
      {
        title: "Dedicated Team",
        href: "/what-we-do/engagement/dedicated-team",
        category: "engagement" as const,
      },
      {
        title: "Staff Augmentation",
        href: "/what-we-do/engagement/staff-augmentation",
        category: "engagement" as const,
      },
      {
        title: "Custom Software Development",
        href: "/what-we-do/software/custom",
        category: "software" as const,
      },
      {
        title: "Web Application Development",
        href: "/what-we-do/software/web-app",
        category: "software" as const,
      },
      {
        title: "Mobile App Development",
        href: "/what-we-do/software/mobile",
        category: "software" as const,
      },
      {
        title: "UI/UX Designing",
        href: "/what-we-do/other/ui-ux",
        category: "other" as const,
      },
      {
        title: "Support and Maintenance",
        href: "/what-we-do/other/maintenance",
        category: "other" as const,
      },
    ],
    []
  );

  const relatedFiltered =
    relatedTab === "engagement"
      ? relatedServices.filter((s) => s.category === "engagement")
      : relatedTab === "software"
        ? relatedServices.filter((s) => s.category === "software")
        : relatedTab === "other"
          ? relatedServices.filter((s) => s.category === "other")
          : relatedServices;

  const faqs = [
    {
      question: "What is software outsourcing?",
      answer:
        "Software outsourcing is an engagement model where an external team takes end-to-end responsibility for delivering your software (or a defined module) — including planning, design, development, QA, and deployment. You get predictable delivery without the overhead of building and managing a full in-house team.",
    },
    {
      question: "How is outsourcing different from staff augmentation?",
      answer:
        "In staff augmentation, you add individual engineers to your team and you manage day-to-day execution. In software outsourcing, PSV owns delivery for a defined scope — we manage the team, process, QA, and release cadence while you stay focused on outcomes and priorities.",
    },
    {
      question: "How do you estimate timelines and cost?",
      answer:
        "We begin with discovery to define requirements, risks, and technical assumptions, then provide a phased plan (MVP → v1 → scale) with milestone-based estimates. Pricing can be fixed-scope (for well-defined work) or monthly retainers (for evolving roadmaps).",
    },
    {
      question: "Will I own the source code and IP?",
      answer:
        "Yes. You own 100% of the source code, designs, and documentation produced for your project. We sign NDA and IP assignment agreements before work begins.",
    },
    {
      question: "How do you communicate and report progress?",
      answer:
        "We run agile sprints with weekly demos, shared Jira/Linear boards, and a dedicated Slack channel. You receive weekly status reports covering progress, risks, next steps, and measurable outputs (PRs, releases, test coverage, and incident metrics where applicable).",
    },
  ];

  const blogPosts = [
    {
      tag: "Outsourcing",
      title: "How to Outsource Software Development Without Losing Control",
      snippet: "A practical framework for scope, metrics, and governance that keeps delivery predictable.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Sep 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Delivery",
      title: "Sprints, Demos, and QA: Our Delivery System Explained",
      snippet: "What happens every week to ensure quality, speed, and transparency for outsourced projects.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Aug 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Cost",
      title: "Build vs Buy vs Outsource: A Cost Model for Product Teams",
      snippet: "How to evaluate hiring, agencies, and outsourcing using real operating costs and risk.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Jul 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <div className="space-y-20">
      {/* ─── BREADCRUMBS ─────────────────────────────────────────── */}
      <nav className="text-sm text-slate-600">
        <Link href="/" className="hover:text-slate-900">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/what-we-do" className="hover:text-slate-900">
          What we do
        </Link>
        <span className="mx-2">/</span>
        <Link href="/what-we-do" className="hover:text-slate-900">
          Engagement Models
        </Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-slate-900">Software Outsourcing</span>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Engagement Models
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Software Outsourcing Company
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Outsource with confidence. We take end-to-end ownership of your product delivery—strategy,
              design, development, QA, and releases—so you can focus on business outcomes while we ship
              reliable software, fast.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="/lets-talk"
                variant="dark"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_4px_20px_rgba(2,6,23,0.08)]">
            <div className="relative h-52 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&h=500&fit=crop"
                alt="Outsourcing team collaboration"
                fill
                className="object-cover opacity-30 mix-blend-overlay"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
                <Handshake className="h-14 w-14 opacity-80" />
                <span className="text-sm font-semibold tracking-wide">Delivery Ownership</span>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: "Projects", value: "150+" },
                { label: "Avg NPS", value: "9.2" },
                { label: "On-time", value: "95%" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg bg-slate-50 p-2.5 text-center">
                  <div className="text-lg font-bold text-slate-900">{value}</div>
                  <div className="text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS STRIP ─────────────────────────────── */}
      <section className="rounded-2xl border border-slate-200/70 bg-slate-50/60 px-6 py-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Featured projects
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {["DataHive", "NexaRetail", "FlowStack", "SalesPath", "BookingGrid", "FinTrack"].map(
            (name, i, arr) => (
              <span key={name} className="inline-flex items-center gap-4">
                <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">
                  {name}
                </Link>
                {i < arr.length - 1 && <span className="text-slate-300">|</span>}
              </span>
            )
          )}
        </div>
      </section>

      {/* ─── WHY TO BEGIN ────────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why to Begin with Us for Outsourcing Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A delivery system built for predictable outcomes—quality engineering, fast iterations, and
            complete transparency.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Quality-First Delivery",
              desc: "Code reviews, automated testing, QA cycles, and release checklists baked into every sprint.",
            },
            {
              icon: Clock,
              title: "On-Time Milestones",
              desc: "Realistic planning with milestone tracking and early risk surfacing—no surprises at the end.",
            },
            {
              icon: DollarSign,
              title: "Cost Predictability",
              desc: "Clear scope boundaries, transparent estimates, and flexible engagement options aligned to your roadmap.",
            },
            {
              icon: MessageSquare,
              title: "Transparent Communication",
              desc: "Dedicated Slack channel, weekly demos, and documented decisions so you always know what’s happening.",
            },
            {
              icon: Layers,
              title: "Product Thinking",
              desc: "We help shape requirements, simplify flows, and prioritize what matters—beyond just writing code.",
            },
            {
              icon: Lock,
              title: "Security & IP Protection",
              desc: "NDA + IP assignment, access controls, and secure delivery practices across environments and repos.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OUTSOURCING SERVICES WE PROVIDE ─────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Outsourcing Services We Provide{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            End-to-end delivery capabilities—covering product design, engineering, quality, and
            operations—so your outsourced team can ship independently.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Lightbulb,
              title: "Product Discovery",
              desc: "Requirements, user flows, technical assumptions, and a milestone plan that keeps delivery predictable.",
            },
            {
              icon: Layers,
              title: "UI/UX & Design Systems",
              desc: "Figma prototypes, component libraries, and design tokens for scalable, consistent product experiences.",
            },
            {
              icon: Settings,
              title: "Full-Stack Engineering",
              desc: "Frontend + backend implementation with code standards, reviews, and CI from day one.",
            },
            {
              icon: MonitorCheck,
              title: "QA & Release Management",
              desc: "Test strategy, regression checks, staging demos, and production release checklists every sprint.",
            },
            {
              icon: Shield,
              title: "Security & Compliance",
              desc: "Secure defaults, dependency audits, access controls, and privacy-by-design patterns for real-world deployments.",
            },
            {
              icon: Rocket,
              title: "DevOps & Reliability",
              desc: "Deployments, monitoring, incident response processes, and performance tuning to keep systems healthy at scale.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OUTSOURCING COMPARISON TABLE ───────────────────────── */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Learn How Outsourcing Will Drive Your Business{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Compare common delivery models and see why managed software outsourcing is often the most
            balanced option for speed, cost, and control.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.06)]">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50 text-left text-sm font-semibold text-slate-700">
              <div className="px-6 py-4">Criteria</div>
              <div className="px-6 py-4">Freelancers</div>
              <div className="px-6 py-4 bg-lime-50/60 text-slate-900">Outsourcing (PSV)</div>
              <div className="px-6 py-4">In-house Team</div>
            </div>

            {[
              { label: "Delivery Ownership", f: false, o: true, i: true },
              { label: "Speed to Start", f: true, o: true, i: false },
              { label: "Quality Assurance", f: false, o: true, i: true },
              { label: "Cost Predictability", f: false, o: true, i: false },
              { label: "Scalability", f: false, o: true, i: true },
              { label: "Process & Reporting", f: false, o: true, i: true },
              { label: "Long-term Continuity", f: false, o: true, i: true },
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-4 border-t border-slate-200 text-sm">
                <div className="px-6 py-4 font-medium text-slate-900">{row.label}</div>
                <div className="px-6 py-4">
                  <YesNo ok={row.f} />
                </div>
                <div className="px-6 py-4 bg-lime-50/30">
                  <YesNo ok={row.o} />
                </div>
                <div className="px-6 py-4">
                  <YesNo ok={row.i} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DARK CTA BANNER ─────────────────────────────────────── */}
      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
          Ready to Move Faster?
        </p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Build Your Product with an Outsourced Delivery Team
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Get a dedicated delivery squad with predictable sprints, quality gates, and transparent
          reporting—so you can ship confidently every week.
        </p>
        <div className="mt-8">
          <Link
            href="/lets-talk"
            className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold text-slate-900 hover:bg-lime-300"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ─── OUTSOURCING PROCESS ─────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Outsourcing Service Process{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A clear operating model that keeps delivery predictable, quality high, and communication
            simple.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              num: "01",
              icon: MessageSquare,
              title: "Discovery & Scope",
              desc: "Clarify requirements, success metrics, and risks; confirm assumptions and technical approach.",
            },
            {
              num: "02",
              icon: Layers,
              title: "Solution & Plan",
              desc: "Architecture, sprint plan, release milestones, and a delivery cadence aligned with your goals.",
            },
            {
              num: "03",
              icon: Settings,
              title: "Team Setup",
              desc: "Right-sized team with PM + engineers + QA; tools integrated into your workflow (Slack/Jira/Git).",
            },
            {
              num: "04",
              icon: MonitorCheck,
              title: "Build + QA",
              desc: "Feature development with code reviews, automated testing, manual QA, and staging demos every sprint.",
            },
            {
              num: "05",
              icon: Rocket,
              title: "Release & Iterate",
              desc: "Safe deployments with checklists and rollback plans; feedback loops to refine and improve quickly.",
            },
            {
              num: "06",
              icon: BarChart3,
              title: "Measure & Improve",
              desc: "KPIs, performance metrics, and monthly health reviews to continuously improve delivery outcomes.",
            },
          ].map((step) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.num}
                className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <StepIcon className="h-6 w-6" />
                </div>
                <span className="mt-3 block text-2xl font-bold text-slate-300">{step.num}</span>
                <h3 className="mt-2 font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── KEY BENEFITS ───────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Key Benefits of Utilising Outsourcing Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Outsourcing works best when you optimise for delivery outcomes—speed, quality, and
            predictable costs—without sacrificing ownership.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Clock,
              title: "Faster Time-to-Market",
              desc: "Start quickly with a ready delivery team and ship in weekly sprints—without waiting months to hire.",
            },
            {
              icon: DollarSign,
              title: "Lower Operating Costs",
              desc: "Reduce overhead and hiring costs while retaining high engineering standards and consistent output.",
            },
            {
              icon: ShieldCheck,
              title: "Quality + Reliability",
              desc: "Built-in QA cycles, automated testing, and release processes reduce regressions and production incidents.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ───────────────────────────────────── */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Featured Projects
          </h2>
          <ButtonLink
            href="/our-work"
            variant="secondary"
            className="rounded-lg border-2 border-slate-900 px-5 py-2.5 font-bold uppercase tracking-wide text-slate-900 hover:bg-slate-50"
          >
            View All Projects
          </ButtonLink>
        </div>
        <div className="grid gap-8">
          <article className="grid overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.08)] lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-indigo-600 to-sky-500">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=520&fit=crop"
                alt="Analytics platform"
                fill
                className="object-cover opacity-30 mix-blend-overlay"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  SaaS Platform
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">DataHive – Product Delivery Squad</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Outsourced delivery team for a B2B analytics product. Shipped a redesigned onboarding
                flow, role-based dashboards, and performance improvements while maintaining a weekly
                release cadence.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">
                Next.js · Node.js · PostgreSQL · AWS · CI/CD
              </p>
              <div className="mt-6">
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.08)] lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-500 lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=520&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover opacity-25 mix-blend-overlay"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  E-Commerce
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">NexaRetail – Multi-Stream Delivery</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Outsourced squad delivering mobile + backend streams in parallel. Implemented
                checkout improvements, search and filtering, and reliability upgrades with continuous
                monitoring and QA gates.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">
                React Native · Node.js · MongoDB · Redis · GCP
              </p>
              <div className="mt-6">
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ─── WHAT OUR CLIENTS SAY ───────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What Our Clients Say{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Founders and engineering leaders who outsourced delivery to PSV Enterprises.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "PSV runs our delivery like a well-oiled machine. Weekly demos, clear estimates, and excellent QA—our roadmap finally feels predictable.",
              name: "Amir H.",
              role: "CEO",
              company: "FlowStack",
              avatar: "https://i.pravatar.cc/150?img=22",
            },
            {
              quote:
                "We outsourced a full module and it shipped faster than any internal project we’ve run. Communication is crisp and decisions are documented.",
              name: "Sarah P.",
              role: "Product Lead",
              company: "DataHive",
              avatar: "https://i.pravatar.cc/150?img=41",
            },
            {
              quote:
                "The handoff quality is excellent. Clean PRs, tests, and release notes. PSV feels like an extension of our engineering org.",
              name: "Daniel K.",
              role: "VP Engineering",
              company: "NexaRetail",
              avatar: "https://i.pravatar.cc/150?img=36",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm italic leading-7 text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── LOGO CLOUD ─────────────────────────────────────────── */}
      <section className="space-y-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
          Get a Slight View Over Our Latest Work
        </h2>
        <LogoCloud hideTitle />
      </section>

      {/* ─── BLOG ───────────────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Explore Our Blog{accentDot}
          </h2>
          <ButtonLink
            href="/blog"
            variant="secondary"
            className="rounded-lg border-2 border-slate-900 px-5 py-2.5 font-bold uppercase tracking-wide text-slate-900 hover:bg-slate-50"
          >
            View All Blogs
          </ButtonLink>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="relative h-44 bg-slate-200">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                  {post.tag}
                </span>
                <h3 className="mt-3 font-bold text-slate-900">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{post.snippet}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <Image
                    src={post.avatar}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <span className="font-medium text-slate-700">{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── OTHER RELATED SERVICES ─────────────────────────────── */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Other Related Services</h2>
        <div className="flex gap-2 border-b border-slate-200">
          {(
            [
              { id: "all" as const, label: "Show All" },
              { id: "engagement" as const, label: "Engagement" },
              { id: "software" as const, label: "Software" },
              { id: "other" as const, label: "Other Services" },
            ] as const
          ).map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setRelatedTab(id)}
              className={`border-b-2 px-4 py-2 text-sm font-semibold transition ${
                relatedTab === id
                  ? "border-lime-500 text-slate-900"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedFiltered.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition hover:border-lime-200 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">
                Learn more about our {s.title.toLowerCase()} offerings.
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-slate-700">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────────── */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Common questions about software outsourcing, delivery, and ownership.
          </p>
        </div>
        <Accordion items={faqs} defaultOpenIndex={0} variant="arrow" />
      </section>

      {/* ─── DISCOVER / CONTACT ─────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Discover how we can help your business grow
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Share your goals and constraints. We’ll propose a delivery plan that fits your timeline
              and budget, with clear milestones and measurable outputs.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "4+", label: "Years of Experience" },
                { icon: Users, value: "150+", label: "Projects Delivered" },
                { icon: BarChart3, value: "10+", label: "Countries Served" },
                { icon: CheckCircle2, value: "95%", label: "On-Time Milestones" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">{value}</div>
                    <div className="mt-0.5 text-sm text-slate-600">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-slate-900">Let&apos;s listen to your project idea!</p>
            <div className="mt-6">
              <ContactForm source="software-outsourcing" submitLabel="SEND MESSAGE" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
