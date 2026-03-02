"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import { LogoCloud } from "@/components/marketing/LogoCloud";
import {
  ArrowRight,
  BarChart3,
  Users,
  Briefcase,
  CheckCircle2,
  Clock,
  Award,
  Shield,
  Layers,
  Code2,
  Settings,
  Rocket,
  Globe,
  Handshake,
  TrendingUp,
  Lock,
  Zap,
  Stethoscope,
  ShoppingCart,
  GraduationCap,
  Truck,
  Landmark,
  Building2,
  MessageSquare,
  Database,
  Smartphone,
  MonitorSmartphone,
  TestTube2,
  GitBranch,
  Server,
  DollarSign,
  CalendarClock,
  UserCheck,
  RefreshCw,
  Lightbulb,
} from "lucide-react";

const accentDot = (
  <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />
);

export default function OffshorePage() {
  const [relatedTab, setRelatedTab] = useState<"all" | "software" | "other">("all");

  const relatedServices = [
    { title: "Custom Software Development", href: "/what-we-do/software/custom", category: "software" as const },
    { title: "Web Application Development", href: "/what-we-do/software/web-app", category: "software" as const },
    { title: "Mobile App Development", href: "/what-we-do/software/mobile", category: "software" as const },
    { title: "ERP Development", href: "/what-we-do/software/erp", category: "software" as const },
    { title: "UI/UX Designing", href: "/what-we-do/other/ui-ux", category: "other" as const },
    { title: "Support and Maintenance", href: "/what-we-do/other/maintenance", category: "other" as const },
  ];

  const relatedFiltered =
    relatedTab === "software"
      ? relatedServices.filter((s) => s.category === "software")
      : relatedTab === "other"
        ? relatedServices.filter((s) => s.category === "other")
        : relatedServices;

  const faqs = [
    {
      question: "What is an Offshore Development Centre (ODC)?",
      answer:
        "An Offshore Development Centre is a dedicated team of software engineers, designers, QA specialists, and project managers that operate as an extension of your in-house team from a different country. You get the talent and capacity of a fully staffed team at a significantly lower cost than hiring locally, with full IP ownership and managerial control.",
    },
    {
      question: "How do you ensure quality when working remotely?",
      answer:
        "We follow ISO-aligned quality processes including code reviews, automated testing pipelines, daily standups, sprint reviews, and dedicated QA engineers on every project. All work is tracked transparently in tools like Jira and Notion, and we provide weekly progress reports with measurable milestones.",
    },
    {
      question: "What time zones do you work across?",
      answer:
        "Our teams are flexible and can overlap significantly with US, European, and Asia-Pacific time zones. For most clients we maintain a 4–6 hour daily overlap window to ensure real-time collaboration and communication without delays.",
    },
    {
      question: "Who owns the intellectual property?",
      answer:
        "You do—100%. All code, designs, documentation, and assets created by our offshore team are fully owned by you from day one. We sign comprehensive NDAs and IP assignment agreements before any work begins.",
    },
    {
      question: "How quickly can you scale a team up or down?",
      answer:
        "We can onboard a new dedicated team member within 1–2 weeks and scale a team from 2 to 10+ engineers within a month. Scaling down is equally flexible with no long-term lock-in—just 30 days notice.",
    },
  ];

  const processSteps = [
    { num: "01", icon: MessageSquare, title: "Discovery Call", desc: "We understand your requirements, tech stack, team structure, and project goals in a focused kick-off session." },
    { num: "02", icon: UserCheck, title: "Team Matching", desc: "We identify and shortlist engineers with the right skills, vetted for both technical proficiency and communication." },
    { num: "03", icon: Users, title: "Interviews & Selection", desc: "You interview and select team members—just as you would for an in-house hire." },
    { num: "04", icon: Settings, title: "Onboarding & Setup", desc: "Team members are fully onboarded into your tools, processes, and codebase within the first week." },
    { num: "05", icon: RefreshCw, title: "Iterative Delivery", desc: "Agile sprints with regular demos, retrospectives, and progress reports so you always know what's happening." },
    { num: "06", icon: TrendingUp, title: "Scale & Optimise", desc: "As your project grows, we scale the team up or down with zero disruption to ongoing delivery." },
  ];

  const testimonials = [
    {
      quote: "Our offshore team from PSV is indistinguishable from our in-house engineers. Same quality, same velocity, at a fraction of the cost. We scaled from 2 to 8 engineers in six weeks.",
      name: "Oliver W.",
      role: "VP Engineering",
      company: "CloudPulse",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
    {
      quote: "PSV set up our ODC in under two weeks. The developers are proactive, communicate brilliantly in English, and have delivered every sprint on time for over a year.",
      name: "Sophie L.",
      role: "CTO",
      company: "NexaRetail",
      avatar: "https://i.pravatar.cc/150?img=44",
    },
    {
      quote: "We needed a dedicated React Native team fast. PSV had three qualified engineers interviewed and started within 10 days. The code quality is excellent.",
      name: "Ravi P.",
      role: "Product Lead",
      company: "LogiFlow",
      avatar: "https://i.pravatar.cc/150?img=57",
    },
  ];

  const blogPosts = [
    {
      tag: "Offshore Dev",
      title: "How to Build and Manage a High-Performance Offshore Development Team",
      snippet: "Best practices for communication, onboarding, and maintaining culture across time zones.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Sep 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Cost Savings",
      title: "Offshore vs Nearshore vs Onshore: A Cost Comparison for 2024",
      snippet: "A data-driven look at the real cost differences between development models.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Aug 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Team Building",
      title: "The 7 Qualities to Look for When Hiring Offshore Engineers",
      snippet: "Technical skill matters—but these seven traits separate great offshore hires from good ones.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Jul 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <div className="space-y-20">
      {/* ─── BREADCRUMBS ─────────────────────────────────────────── */}
      <nav className="text-sm text-slate-600">
        <Link href="/" className="hover:text-slate-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/what-we-do" className="hover:text-slate-900">What we do</Link>
        <span className="mx-2">/</span>
        <Link href="/what-we-do" className="hover:text-slate-900">Other Services</Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-slate-900">Offshore Software Development Company</span>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Other Services</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Offshore Software Development Company
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Build a world-class software team without the overhead. Our Offshore Development Centre
              model gives you dedicated, fully integrated engineers who work as a seamless extension of
              your in-house team—at up to 60% lower cost.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink
                href="/lets-talk"
                variant="dark"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          {/* Right — globe + team visual */}
          <div className="relative flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.08)]">
              <div className="relative h-52 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop"
                  alt="Offshore development team"
                  fill
                  className="object-cover opacity-30 mix-blend-overlay"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
                  <Globe className="h-14 w-14 opacity-80" />
                  <span className="text-sm font-semibold tracking-wide">Global Talent Network</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "100+", label: "Engineers Available" },
                { value: "25+", label: "Tech Stacks" },
                { value: "60%", label: "Cost Savings" },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-xl border border-slate-200/70 bg-white p-3 text-center shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">{value}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT IS OFFSHORE SOFTWARE DEVELOPMENT ───────────────── */}
      <section className="grid gap-10 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_4px_20px_rgba(2,6,23,0.06)] sm:p-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What is Offshore Software Development?{accentDot}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Offshore software development means hiring a skilled development team located in another
            country to build your software products. You retain full control over the work—setting
            priorities, approving designs, and reviewing code—while benefiting from access to a wider
            talent pool, faster hiring, and dramatically reduced operational costs.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            PSV Enterprises operates as your Offshore Development Centre (ODC)—a permanent, dedicated
            team working exclusively on your product, using your tools and processes, aligned to your
            culture and goals.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Dedicated engineers working only on your project",
              "Full IP ownership and NDAs from day one",
              "Time-zone aligned daily overlap for real collaboration",
              "Scale up or down with 30-day notice",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: DollarSign, value: "Up to 60%", label: "Cost Reduction" },
            { icon: CalendarClock, value: "1–2 Weeks", label: "Avg. Onboarding Time" },
            { icon: UserCheck, value: "100%", label: "IP Ownership" },
            { icon: Globe, value: "10+", label: "Countries Served" },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-3 text-xl font-bold text-slate-900">{value}</div>
              <div className="mt-1 text-xs text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OFFSHORE SERVICES WE PROVIDE ────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Offshore Software Development Services We Provide{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We provide dedicated offshore teams across every layer of modern software development.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "Frontend Development",
              desc: "React, Next.js, Vue, Angular—dedicated frontend engineers building pixel-perfect, performant web interfaces.",
            },
            {
              icon: Server,
              title: "Backend Development",
              desc: "Node.js, Python, Go, Java—robust API and server-side engineering teams for scalable, secure applications.",
            },
            {
              icon: Smartphone,
              title: "Mobile App Development",
              desc: "Native iOS (Swift), Android (Kotlin), React Native, and Flutter—full mobile teams for consumer and enterprise apps.",
            },
            {
              icon: MonitorSmartphone,
              title: "Full-Stack Development",
              desc: "End-to-end product teams covering frontend, backend, and DevOps—for complete, independently operating squads.",
            },
            {
              icon: GitBranch,
              title: "DevOps & Cloud",
              desc: "Infrastructure engineers to set up CI/CD pipelines, Kubernetes clusters, and cloud environments on AWS, GCP, or Azure.",
            },
            {
              icon: TestTube2,
              title: "QA & Testing",
              desc: "Dedicated QA engineers for manual, automated, performance, and security testing—integrated directly into your team.",
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

      {/* ─── SCALE TODAY WITH ────────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-8 sm:p-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Scale Today with PSV{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Everything you need to build and run a world-class offshore development team.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Zap, title: "Fast Hiring", desc: "Vetted engineers onboarded in 1–2 weeks, not months." },
            { icon: Layers, title: "Full-Stack Teams", desc: "Cross-functional squads with frontend, backend, mobile, QA, and DevOps." },
            { icon: Shield, title: "IP & NDA Protection", desc: "All agreements signed before work begins. Your code is yours." },
            { icon: Handshake, title: "Transparent Reporting", desc: "Daily standups, sprint demos, and weekly reports keep you in full control." },
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

      {/* ─── FEATURED PROJECTS ────────────────────────────────────── */}
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
          {/* Card 1 */}
          <article className="grid overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.08)] lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-indigo-600 to-sky-500">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=480&fit=crop"
                alt="CloudPulse team"
                fill
                className="object-cover opacity-30 mix-blend-overlay"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-sm">
                  <div className="relative h-36">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop"
                      alt="CloudPulse dashboard"
                      fill
                      className="object-cover"
                      sizes="224px"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">SaaS · 8 Engineers</span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">CloudPulse – Dedicated Engineering Team</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Built and scaled a dedicated ODC team of 8 for a UK-based SaaS company—4 full-stack
                engineers, 2 backend specialists, 1 DevOps engineer, and 1 QA lead. Delivered 3 major
                product releases within the first year.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">React · Node.js · AWS · PostgreSQL · Terraform</p>
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

          {/* Card 2 */}
          <article className="grid overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.08)] lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-500 lg:order-last">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-sm">
                  <div className="relative h-36">
                    <Image
                      src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=350&fit=crop"
                      alt="NexaRetail app"
                      fill
                      className="object-cover"
                      sizes="224px"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">E-Commerce · 5 Engineers</span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">NexaRetail – Mobile + Backend ODC</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Offshore team of 5 for a US retail tech startup—2 React Native engineers, 2 backend
                engineers, and 1 QA specialist. Shipped the MVP to the App Store in 12 weeks and scaled
                to handle 100K+ daily active users.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">React Native · Python · MongoDB · Redis · GCP</p>
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

      {/* ─── DARK CTA BANNER ─────────────────────────────────────── */}
      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
          Scale and Accelerate
        </p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Build Your Dream Offshore Software Team
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Tell us your engineering requirements and we&apos;ll have a shortlist of vetted developers ready
          for interview within 5 business days.
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

      {/* ─── INDUSTRIES WE SERVE ─────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Industries We Serve{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We provide offshore teams to companies across every major industry vertical.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {[
            { icon: Stethoscope, name: "Healthcare" },
            { icon: ShoppingCart, name: "E-Commerce" },
            { icon: GraduationCap, name: "Education" },
            { icon: Truck, name: "Logistics" },
            { icon: Landmark, name: "Finance" },
            { icon: Building2, name: "Enterprise" },
          ].map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="rounded-2xl border border-slate-200/70 bg-white p-6 text-center shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-3 font-semibold text-slate-900">{name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW TO SCALE OFFSHORE ───────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How to Scale Offshore Software Development Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Scaling an offshore team successfully requires the right partner, clear processes, and the
            right engagement model. Here&apos;s how PSV makes it work.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: UserCheck, title: "Define Your Needs", desc: "Clearly document the roles, skills, and seniority levels you need. The more specific you are, the faster we match you." },
            { icon: Database, title: "Choose an Engagement Model", desc: "Dedicated ODC, staff augmentation, or a hybrid team—we'll recommend the best fit for your scale and timeline." },
            { icon: Handshake, title: "Structured Onboarding", desc: "New team members follow a structured first-week plan covering codebase, tools, process, and team introductions." },
            { icon: RefreshCw, title: "Agile Rhythm", desc: "Daily standups, fortnightly sprint reviews, and monthly strategy syncs keep the team aligned and efficient." },
            { icon: BarChart3, title: "Transparent Metrics", desc: "We track velocity, quality metrics, and delivery milestones and share them with you in regular reports." },
            { icon: Lightbulb, title: "Continuous Improvement", desc: "Retrospectives and quarterly reviews ensure the team keeps getting better, faster, and more aligned with your product vision." },
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

      {/* ─── OUR OFFSHORE PROCESS ────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Offshore Software Development Process{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            From first conversation to a fully operating offshore team in as little as two weeks.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => {
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

      {/* ─── WHY CHOOSE US ───────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why Choose Us for Offshore Software Development?{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We&apos;ve helped companies across the US, UK, Europe, and Australia build high-performing
            offshore teams that deliver real results.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Award, title: "Pre-Vetted Talent", desc: "Every engineer passes a multi-stage technical assessment and English communication evaluation before joining our talent network." },
            { icon: Clock, title: "Fast Onboarding", desc: "Engineers can be interviewed within 3 days and productive within their first sprint—no lengthy hiring cycles." },
            { icon: Globe, title: "Time-Zone Flexibility", desc: "We structure teams to provide meaningful daily overlap with your time zone—typically 4–6 hours of real-time collaboration." },
            { icon: TrendingUp, title: "Proven Track Record", desc: "100+ offshore placements with an average engagement length of 18+ months—a sign of teams that truly integrate." },
            { icon: Lock, title: "Security & Compliance", desc: "ISO-aligned security practices, NDAs, and data handling agreements ensure your IP and data are fully protected." },
            { icon: Rocket, title: "No Lock-In Contracts", desc: "Month-to-month engagements with 30-day scaling flexibility. You grow your team when you need to—and scale back when you don't." },
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

      {/* ─── WHY CHOOSE PSV ENTERPRISES ─────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-8 sm:p-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why CHOOSE PSV Enterprises?{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Four reasons companies choose PSV as their long-term offshore development partner.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Handshake, title: "Partner Mindset", desc: "We don't just provide bodies—we provide a partner invested in your product's success and long-term growth." },
            { icon: Award, title: "Senior-Led Teams", desc: "Every team is led by a senior engineer who owns architecture decisions and mentors junior members." },
            { icon: Shield, title: "Zero IP Risk", desc: "Comprehensive legal frameworks ensure all IP, code, and data belong to you with no grey areas." },
            { icon: TrendingUp, title: "Consistent Quality", desc: "Standardised engineering practices, code reviews, and QA processes deliver consistent quality across every sprint." },
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

      {/* ─── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What Our Clients Say{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Engineering leaders who scaled their teams with PSV Enterprises.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
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

      {/* ─── LOGO CLOUD ──────────────────────────────────────────── */}
      <section className="space-y-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
          Let Insights from Our Latest News
        </h2>
        <LogoCloud hideTitle />
      </section>

      {/* ─── BLOG ────────────────────────────────────────────────── */}
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

      {/* ─── OTHER RELATED SERVICES ──────────────────────────────── */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Other Related Services</h2>
        <div className="flex gap-2 border-b border-slate-200">
          {(
            [
              { id: "all" as const, label: "Show All" },
              { id: "software" as const, label: "Software" },
              { id: "other" as const, label: "Other Services" },
            ] as const
          ).map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setRelatedTab(id)}
              className={`border-b-2 px-4 py-2 text-sm font-semibold transition ${relatedTab === id ? "border-lime-500 text-slate-900" : "border-transparent text-slate-600 hover:text-slate-900"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedFiltered.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition hover:border-lime-200 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">Learn more about our {s.title.toLowerCase()} offerings.</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-slate-700">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────── */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Common questions about offshore development, our process, and how we work with your team.
          </p>
        </div>
        <Accordion items={faqs} defaultOpenIndex={0} variant="arrow" />
      </section>

      {/* ─── DISCOVER / CONTACT ──────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Discover how we can help your business grow
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Tell us your team requirements and we&apos;ll have a shortlist of engineers ready within 5
              business days.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "4+", label: "Years of Experience" },
                { icon: Users, value: "100+", label: "Engineers Placed" },
                { icon: BarChart3, value: "10+", label: "Countries Served" },
                { icon: CheckCircle2, value: "40+", label: "Happy Clients" },
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
              <ContactForm source="offshore-development" submitLabel="SEND MESSAGE" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
