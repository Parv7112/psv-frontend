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
  CheckCircle2,
  Clock,
  Crown,
  DollarSign,
  Handshake,
  Layers,
  Lock,
  MessageSquare,
  MonitorCheck,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

const accentDot = (
  <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />
);

type RelatedTab = "all" | "engagement" | "software" | "other";

export default function DedicatedTeamPage() {
  const [relatedTab, setRelatedTab] = useState<RelatedTab>("all");

  const relatedServices = useMemo(
    () => [
      { title: "Dedicated Team", href: "/what-we-do/engagement/dedicated-team", category: "engagement" as const },
      { title: "Software Outsourcing", href: "/what-we-do/engagement/outsourcing", category: "engagement" as const },
      { title: "Staff Augmentation", href: "/what-we-do/engagement/staff-augmentation", category: "engagement" as const },
      { title: "Custom Software Development", href: "/what-we-do/software/custom", category: "software" as const },
      { title: "Web Application Development", href: "/what-we-do/software/web-app", category: "software" as const },
      { title: "Mobile App Development", href: "/what-we-do/software/mobile", category: "software" as const },
      { title: "UI/UX Designing", href: "/what-we-do/other/ui-ux", category: "other" as const },
      { title: "Support and Maintenance", href: "/what-we-do/other/maintenance", category: "other" as const },
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
      question: "What is a dedicated team engagement model?",
      answer:
        "A dedicated team model gives you a long-term product squad (engineers, QA, designers, PM) that works exclusively on your roadmap. Unlike project outsourcing, the team stays aligned with your business context and continuously improves velocity over time.",
    },
    {
      question: "How is it different from staff augmentation?",
      answer:
        "Staff augmentation adds individual contributors to your existing team. A dedicated team gives you an autonomous delivery unit with its own execution rhythm, while still aligned to your priorities and governance.",
    },
    {
      question: "Can we scale the dedicated team over time?",
      answer:
        "Yes. We can start with a small core team and expand by role (frontend, backend, QA, DevOps, product design) as your roadmap grows.",
    },
    {
      question: "Who owns IP and source code?",
      answer:
        "You own 100% of all code, designs, and deliverables. IP assignment and NDA are in place from day one.",
    },
    {
      question: "How do you report progress and quality?",
      answer:
        "We run sprint ceremonies, weekly demos, and transparent KPI reporting (velocity, cycle time, defects, release health) so you always know current status and risks.",
    },
  ];

  const blogPosts = [
    {
      tag: "Dedicated Team",
      title: "When to Choose a Dedicated Team Over Freelancers",
      snippet: "Signals that your product needs long-term team continuity, not ad-hoc execution.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Sep 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Delivery",
      title: "How Dedicated Teams Improve Predictability and Speed",
      snippet: "A practical look at roadmap planning, sprint discipline, and quality ownership.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Aug 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Scaling",
      title: "Scaling Product Teams Without Breaking Culture",
      snippet: "How to grow cross-functional capacity while keeping communication and standards strong.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Jul 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <div className="space-y-20">
      <nav className="text-sm text-slate-600">
        <Link href="/" className="hover:text-slate-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/what-we-do" className="hover:text-slate-900">What we do</Link>
        <span className="mx-2">/</span>
        <Link href="/what-we-do" className="hover:text-slate-900">Engagement Models</Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-slate-900">Dedicated Team</span>
      </nav>

      <section className="rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Engagement Models</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Dedicated Team Engagement Model
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Build long-term product momentum with a dedicated team that works only on your roadmap.
              Get stable velocity, better domain understanding, and continuous delivery without repeated onboarding.
            </p>
            <div className="mt-8">
              <ButtonLink href="/lets-talk" variant="dark" className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide">
                Get Started <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_4px_20px_rgba(2,6,23,0.08)]">
            <div className="relative h-52 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&h=500&fit=crop"
                alt="Dedicated team collaboration"
                fill
                className="object-cover opacity-30 mix-blend-overlay"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
                <Crown className="h-14 w-14 opacity-80" />
                <span className="text-sm font-semibold tracking-wide">Team Continuity</span>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: "Avg tenure", value: "12+ mo" },
                { label: "Sprint rhythm", value: "Weekly" },
                { label: "Velocity gain", value: "Up to 35%" },
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

      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why to Hire Your Team in Dedicated Development Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Dedicated teams outperform fragmented delivery when roadmap complexity and product ownership matter.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Users, title: "Stable Product Context", desc: "Team members retain domain knowledge and reduce repetitive onboarding overhead." },
            { icon: Rocket, title: "Predictable Delivery", desc: "Consistent sprint cadence and measurable throughput make planning more reliable." },
            { icon: ShieldCheck, title: "Quality Ownership", desc: "Shared standards for architecture, testing, and review improve quality over time." },
            { icon: Handshake, title: "True Collaboration", desc: "Works like your in-house team with daily alignment and direct stakeholder communication." },
            { icon: DollarSign, title: "Cost Efficiency at Scale", desc: "Lower total cost compared to frequent rehiring, onboarding, and context switching." },
            { icon: Lock, title: "Security & Governance", desc: "Controlled access, compliance practices, and full IP ownership from day one." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Skilled Team Engagement Services We Provide{accentDot}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Layers, title: "Cross-Functional Squads", desc: "Frontend, backend, QA, and PM in one aligned team structure." },
            { icon: Search, title: "Product Discovery Support", desc: "Roadmap shaping, user stories, and technical planning for each release cycle." },
            { icon: Settings, title: "Engineering Delivery", desc: "Build and ship features with standards, code review, and robust CI pipelines." },
            { icon: MonitorCheck, title: "Quality & Testing", desc: "Automated and manual QA across regressions, acceptance, and release criteria." },
            { icon: MessageSquare, title: "Transparent Reporting", desc: "Daily updates, sprint reviews, and KPI dashboards for complete visibility." },
            { icon: Clock, title: "Long-Term Team Continuity", desc: "Dedicated members stay aligned with your roadmap for consistent progress." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Impact of Your Team in Your Global Business Model{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A dedicated team strengthens delivery quality, accelerates roadmap execution, and builds
            sustainable product knowledge over time.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BarChart3, title: "Faster Releases", desc: "Improved sprint throughput and shorter release cycles." },
            { icon: Users, title: "Stronger Ownership", desc: "Engineers stay close to your product context and goals." },
            { icon: ShieldCheck, title: "Better Quality", desc: "Consistent standards reduce regressions and rework." },
            { icon: DollarSign, title: "Lower Delivery Cost", desc: "Efficient scaling versus repeated hiring and churn." },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200/70 bg-white p-6 text-center shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            See What Sets Us Apart{accentDot}
          </h2>
        </div>
        <div className="overflow-x-auto rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.06)]">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50 text-left text-sm font-semibold text-slate-700">
              <div className="px-6 py-4">Criteria</div>
              <div className="px-6 py-4">Freelancers</div>
              <div className="px-6 py-4 bg-lime-50/60 text-slate-900">Dedicated Team</div>
              <div className="px-6 py-4">Outsourcing</div>
            </div>
            {[
              { label: "Long-term continuity", f: "Low", d: "High", o: "Medium" },
              { label: "Roadmap ownership", f: "Low", d: "High", o: "Medium" },
              { label: "Scalability", f: "Medium", d: "High", o: "High" },
              { label: "Knowledge retention", f: "Low", d: "High", o: "Medium" },
              { label: "Predictable output", f: "Low", d: "High", o: "High" },
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-4 border-t border-slate-200 text-sm">
                <div className="px-6 py-4 font-medium text-slate-900">{row.label}</div>
                <div className="px-6 py-4">{row.f}</div>
                <div className="px-6 py-4 bg-lime-50/30 font-semibold text-slate-900">{row.d}</div>
                <div className="px-6 py-4">{row.o}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">Build Product Momentum</p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Power Your Vision with Our Expert Dedicated Team
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Create a high-performing team that stays aligned with your roadmap and continuously delivers value.
        </p>
        <div className="mt-8">
          <Link href="/lets-talk" className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold text-slate-900 hover:bg-lime-300">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Dedicated Team Process for Long-Term Success{accentDot}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { num: "01", icon: Search, title: "Discovery & Team Blueprint", desc: "Define goals, roles, skill mix, and cadence." },
            { num: "02", icon: Users, title: "Team Formation", desc: "Select and onboard dedicated resources aligned to your stack." },
            { num: "03", icon: Settings, title: "Workflow Setup", desc: "Integrate with your tools, conventions, and release process." },
            { num: "04", icon: MonitorCheck, title: "Iterative Delivery", desc: "Sprint-based implementation with demos and quality gates." },
            { num: "05", icon: BarChart3, title: "Performance Tracking", desc: "Review KPIs and continuously optimise team effectiveness." },
            { num: "06", icon: Rocket, title: "Scale & Evolve", desc: "Expand team capacity as roadmap and complexity increase." },
          ].map((step) => {
            const StepIcon = step.icon;
            return (
              <div key={step.num} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
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

      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Key Benefits of Dedicated Development Team Model{accentDot}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Clock,
              title: "Consistent Velocity",
              desc: "A stable team drives predictable delivery and clearer sprint planning over long-term roadmaps.",
            },
            {
              icon: Users,
              title: "Deep Product Knowledge",
              desc: "Continuous context retention improves decision quality and reduces onboarding friction.",
            },
            {
              icon: Lock,
              title: "Reliable Governance",
              desc: "Dedicated operating model with transparent reporting, secure access, and measurable KPIs.",
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

      <section className="rounded-2xl border border-slate-200/70 bg-slate-50/60 px-6 py-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Featured projects</p>
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

      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Featured Projects</h2>
          <ButtonLink href="/our-work" variant="secondary" className="rounded-lg border-2 border-slate-900 px-5 py-2.5 font-bold uppercase tracking-wide text-slate-900 hover:bg-slate-50">
            View All Projects
          </ButtonLink>
        </div>
        <div className="grid gap-8">
          <article className="grid overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.08)] lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-indigo-600 to-sky-500">
              <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=520&fit=crop" alt="SaaS dashboard" fill className="object-cover opacity-30 mix-blend-overlay" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">SaaS Team</span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">DataHive – Long-Term Product Squad</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Dedicated team of 6 supporting roadmap execution for analytics workflows, performance optimisation, and multi-tenant architecture evolution.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Next.js · Node.js · PostgreSQL · AWS</p>
              <div className="mt-6">
                <Link href="/our-work" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.08)] lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-500 lg:order-last">
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=520&fit=crop" alt="Team collaboration" fill className="object-cover opacity-25 mix-blend-overlay" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">E-commerce Team</span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">NexaRetail – Dedicated Commerce Team</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Team extension for checkout, catalog performance, and release reliability. Improved conversion flow and reduced regression defects across releases.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">React · Node.js · MongoDB · Redis</p>
              <div className="mt-6">
                <Link href="/our-work" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">What Our Clients Say{accentDot}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { quote: "The dedicated team model gave us continuity we never had before. Velocity became predictable within two sprints.", name: "Lina M.", role: "Product Director", company: "FlowStack", avatar: "https://i.pravatar.cc/150?img=21" },
            { quote: "PSV’s team feels like our own. Strong engineering discipline, proactive communication, and excellent ownership.", name: "Rohan K.", role: "CTO", company: "DataHive", avatar: "https://i.pravatar.cc/150?img=32" },
            { quote: "We scaled from 4 to 9 engineers without losing quality. Their onboarding and process maturity are top-notch.", name: "Elena P.", role: "VP Engineering", company: "NexaRetail", avatar: "https://i.pravatar.cc/150?img=49" },
          ].map((t) => (
            <div key={t.name} className="flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm italic leading-7 text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <Image src={t.avatar} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">Get a Slight View Over Our Latest Work</h2>
        <LogoCloud hideTitle />
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Explore Our Blog{accentDot}</h2>
          <ButtonLink href="/blog" variant="secondary" className="rounded-lg border-2 border-slate-900 px-5 py-2.5 font-bold uppercase tracking-wide text-slate-900 hover:bg-slate-50">
            View All Blogs
          </ButtonLink>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="relative h-44 bg-slate-200">
                <Image src={post.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">{post.tag}</span>
                <h3 className="mt-3 font-bold text-slate-900">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{post.snippet}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <Image src={post.avatar} alt="" width={24} height={24} className="h-6 w-6 rounded-full object-cover" />
                  <span className="font-medium text-slate-700">{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

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
                relatedTab === id ? "border-lime-500 text-slate-900" : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedFiltered.map((s) => (
            <Link key={s.href} href={s.href} className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition hover:border-lime-200 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">Learn more about our {s.title.toLowerCase()} offerings.</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-slate-700">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Frequently Asked Questions{accentDot}</h2>
        </div>
        <Accordion items={faqs} defaultOpenIndex={0} variant="arrow" />
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Discover how we can help your business grow
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Share your roadmap and capacity goals. We’ll propose the right dedicated team setup for long-term product success.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "4+", label: "Years of Experience" },
                { icon: Users, value: "120+", label: "Engineers Available" },
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
              <ContactForm source="dedicated-team" submitLabel="SEND MESSAGE" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

