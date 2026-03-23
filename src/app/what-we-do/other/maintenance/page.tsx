"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/marketing/PageHero";
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
  Settings,
  Rocket,
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
  Bug,
  RefreshCw,
  ActivitySquare,
  LifeBuoy,
  MonitorCheck,
  GitMerge,
  CloudCog,
  Wrench,
  AlertCircle,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";

const accentDot = (
  <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />
);

export default function MaintenancePage() {
  const [relatedTab, setRelatedTab] = useState<"all" | "software" | "other">("all");

  const relatedServices = [
    { title: "Custom Software Development", href: "/what-we-do/software/custom", category: "software" as const },
    { title: "Web Application Development", href: "/what-we-do/software/web-app", category: "software" as const },
    { title: "Mobile App Development", href: "/what-we-do/software/mobile", category: "software" as const },
    { title: "ERP Development", href: "/what-we-do/software/erp", category: "software" as const },
    { title: "UI/UX Designing", href: "/what-we-do/other/ui-ux", category: "other" as const },
    { title: "Offshore Development Centre", href: "/what-we-do/other/offshore", category: "other" as const },
  ];

  const relatedFiltered =
    relatedTab === "software"
      ? relatedServices.filter((s) => s.category === "software")
      : relatedTab === "other"
        ? relatedServices.filter((s) => s.category === "other")
        : relatedServices;

  const faqs = [
    {
      question: "What is included in your software support and maintenance services?",
      answer:
        "Our support and maintenance services include bug fixing, performance monitoring, security patching, OS and dependency updates, feature enhancements, database optimisation, and 24/7 uptime monitoring. We tailor the scope to your product and SLA requirements.",
    },
    {
      question: "Do you support software built by other teams?",
      answer:
        "Yes. We regularly take over maintenance of applications built by other agencies or internal teams. We start with a thorough codebase audit to understand the architecture, document undocumented areas, and create a maintenance plan before making any changes.",
    },
    {
      question: "What SLA response times do you offer?",
      answer:
        "Our standard SLA tiers are: Critical issues (P1) — 1-hour response, 4-hour resolution. High priority (P2) — 4-hour response, 8-hour resolution. Medium priority (P3) — 24-hour response. Low priority (P4) — 72-hour response. Custom SLAs are available for enterprise clients.",
    },
    {
      question: "How do you handle emergency production issues?",
      answer:
        "We maintain an on-call rotation for production emergencies. Critical issues are escalated immediately via our monitoring stack (alerts routed through PagerDuty or Slack). Our team assesses, hot-fixes, and deploys resolutions with a full post-mortem and root cause analysis delivered within 24 hours.",
    },
    {
      question: "Can you add new features while also maintaining the existing system?",
      answer:
        "Absolutely. Most of our maintenance clients also use our team for incremental feature development. We prioritise stability first—ensuring no regression from new features—and use feature flags and staged rollouts to minimise risk.",
    },
  ];

  const processSteps = [
    { num: "01", icon: ActivitySquare, title: "Codebase Audit", desc: "We review your existing codebase, infrastructure, and documentation to understand the current state and risks." },
    { num: "02", icon: AlertCircle, title: "Issue Triage & Backlog", desc: "Existing bugs, technical debt, and enhancement requests are catalogued, prioritised, and planned into sprints." },
    { num: "03", icon: MonitorCheck, title: "Monitoring Setup", desc: "We configure uptime monitoring, error tracking, and alerting so issues are caught before users report them." },
    { num: "04", icon: Wrench, title: "Ongoing Fixes & Updates", desc: "Bugs are fixed, dependencies updated, and security patches applied on a continuous, scheduled basis." },
    { num: "05", icon: GitMerge, title: "Feature Enhancements", desc: "Incremental improvements and new features are developed and deployed safely using CI/CD pipelines." },
    { num: "06", icon: BarChart3, title: "Reporting & Review", desc: "Monthly reports cover incidents resolved, uptime metrics, performance improvements, and planned work." },
  ];

  const testimonials = [
    {
      quote: "PSV took over maintenance of our legacy CRM and reduced production incidents by 70% in the first three months. They treat it like their own product.",
      name: "Nathan G.",
      role: "Head of Technology",
      company: "SalesPath",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    {
      quote: "We've had zero downtime incidents since PSV took over our infrastructure monitoring. Their SLA response time is consistently under 30 minutes for critical issues.",
      name: "Priya M.",
      role: "CTO",
      company: "BookingGrid",
      avatar: "https://i.pravatar.cc/150?img=49",
    },
    {
      quote: "The monthly reports are incredibly detailed. We know exactly what was fixed, what was deployed, and what's coming next. Total transparency.",
      name: "Lucas B.",
      role: "Product Director",
      company: "FinTrack",
      avatar: "https://i.pravatar.cc/150?img=60",
    },
  ];

  const blogPosts = [
    {
      tag: "Maintenance",
      title: "Why Software Maintenance Is the Most Underrated Engineering Investment",
      snippet: "The hidden cost of ignored technical debt—and how proactive maintenance saves money long-term.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Oct 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "DevOps",
      title: "Building a Zero-Downtime Deployment Pipeline for Production Apps",
      snippet: "A practical guide to blue-green deployments, canary releases, and feature flags.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Sep 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Security",
      title: "The 5 Most Common Security Vulnerabilities Found in Production Web Apps",
      snippet: "Real patterns from security audits and how to eliminate them from your codebase.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Aug 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <div className="space-y-20">
      <PageHero
        breadcrumb={
          <nav className="text-sm">
            <Link href="/">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/what-we-do">What we do</Link>
            <span className="mx-2">/</span>
            <Link href="/what-we-do">Other Services</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">Support and Maintenance Services</span>
          </nav>
        }
        eyebrow="Other Services"
        title="Support and Maintenance Services"
        description="Keep your software running at peak performance. We provide proactive monitoring, rapid bug fixing, security patching, performance optimisation, and feature enhancements—so your product stays reliable, secure, and competitive."
        actions={
          <ButtonLink
            href="/lets-talk"
            variant="primary"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        }
      />

      <section className="relative z-10 -mt-10 rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 pt-2 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="relative mx-auto max-w-xl">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_4px_20px_rgba(2,6,23,0.08)]">
            <div className="rounded-xl bg-slate-100 p-3">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-0.5 text-xs font-medium text-slate-600 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  System Monitoring
                </span>
              </div>
              <div className="relative h-44 overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop"
                  alt="System monitoring dashboard"
                  fill
                  className="object-cover opacity-20"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Mock uptime bars */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
                  <div className="w-full">
                    <div className="mb-1 flex justify-between text-xs text-slate-400">
                      <span>API Server</span>
                      <span className="text-emerald-400">99.99% uptime</span>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className={`h-4 flex-1 rounded-sm ${i === 11 ? "bg-amber-400" : "bg-emerald-500"}`} />
                      ))}
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mb-1 flex justify-between text-xs text-slate-400">
                      <span>Web App</span>
                      <span className="text-emerald-400">100% uptime</span>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="h-4 flex-1 rounded-sm bg-emerald-500" />
                      ))}
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mb-1 flex justify-between text-xs text-slate-400">
                      <span>Database</span>
                      <span className="text-emerald-400">99.97% uptime</span>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className={`h-4 flex-1 rounded-sm ${i === 23 ? "bg-red-400" : "bg-emerald-500"}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: "Avg Response", value: "<1hr" },
                { label: "Uptime SLA", value: "99.9%" },
                { label: "Issues Fixed", value: "500+" },
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
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Featured projects</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {["SalesPath CRM", "BookingGrid Platform", "FinTrack Dashboard", "MediBook App", "LogiFlow API", "EduKids Portal"].map((name, i, arr) => (
            <span key={name} className="inline-flex items-center gap-4">
              <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">{name}</Link>
              {i < arr.length - 1 && <span className="text-slate-300">|</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ─── SUPPORT AND MAINTENANCE SERVICES WE PROVIDE ─────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Support and Maintenance Services We Provide{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Comprehensive post-launch support covering every aspect of keeping your software healthy,
            secure, and continuously improving.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: MonitorCheck,
              title: "24/7 Uptime Monitoring",
              desc: "Round-the-clock monitoring of your servers, APIs, and databases with instant alerting and on-call response for critical incidents.",
            },
            {
              icon: Bug,
              title: "Bug Fixing & Hotfixes",
              desc: "Rapid identification and resolution of production bugs with SLA-backed response times and thorough root cause analysis.",
            },
            {
              icon: Shield,
              title: "Security Patching",
              desc: "Regular dependency audits, CVE monitoring, and proactive patching to keep your application protected from known vulnerabilities.",
            },
            {
              icon: RefreshCw,
              title: "Dependency & OS Updates",
              desc: "Scheduled updates for frameworks, libraries, and runtime environments to prevent breaking changes and maintain compatibility.",
            },
            {
              icon: Zap,
              title: "Performance Optimisation",
              desc: "Database query tuning, caching strategy improvements, and frontend performance audits to keep response times fast.",
            },
            {
              icon: CloudCog,
              title: "Infrastructure Management",
              desc: "Cloud infrastructure monitoring, cost optimisation, scaling configuration, and backup management across AWS, GCP, and Azure.",
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=480&fit=crop"
                alt="SalesPath CRM"
                fill
                className="object-cover opacity-30 mix-blend-overlay"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-sm">
                  <div className="relative h-36">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop"
                      alt="CRM dashboard"
                      fill
                      className="object-cover"
                      sizes="224px"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">CRM Platform</span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">SalesPath CRM – Ongoing Maintenance</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Took over full maintenance of a legacy CRM platform with significant technical debt.
                Resolved 140+ open bugs within the first quarter, reduced page load time by 55%, and
                achieved 99.97% uptime with proactive monitoring.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Node.js · React · PostgreSQL · Redis · AWS</p>
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
            <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-violet-600 to-purple-500 lg:order-last">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-sm">
                  <div className="relative h-36">
                    <Image
                      src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=350&fit=crop"
                      alt="Booking platform monitoring"
                      fill
                      className="object-cover"
                      sizes="224px"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">Booking Platform</span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">BookingGrid – Platform Reliability Retainer</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Continuous support and infrastructure management for a high-traffic booking platform
                processing 50K+ transactions daily. Zero critical incidents in 18 months of
                engagement, with monthly performance reports and quarterly architecture reviews.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Python · Django · MySQL · Celery · GCP</p>
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

      {/* ─── INDUSTRIES WE SERVE ─────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Industries We Serve{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We maintain and support software across every major industry—from fintech and healthcare to
            e-commerce and logistics.
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

      {/* ─── DARK CTA BANNER ─────────────────────────────────────── */}
      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
          Your Business Needs Reliable Support
        </p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          New Maintenance Needs in Your Business, Report!
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Tell us about your application and we&apos;ll set up a maintenance plan that keeps it running
          at 99.9%+ uptime with rapid response to every incident.
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

      {/* ─── OUR SUPPORT AND MAINTENANCE PROCESS ─────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Support and Maintenance Service Process{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A structured approach from initial audit to continuous, reliable operations.
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
            Why Shortlisted for Support and Maintenance Services?{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We&apos;re not just reactive—we&apos;re proactive. We prevent issues before they affect your users.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Clock, title: "SLA-Backed Response", desc: "Guaranteed response times for every severity level with formal SLA agreements and penalty clauses for critical violations." },
            { icon: MonitorCheck, title: "Proactive Monitoring", desc: "We catch issues before users do—24/7 monitoring with anomaly detection, alert thresholds, and on-call rotations." },
            { icon: Shield, title: "Security-First", desc: "Regular security audits, dependency vulnerability scanning, and rapid patching keep your system protected year-round." },
            { icon: Lightbulb, title: "Deep Product Knowledge", desc: "We invest time understanding your product's business logic and architecture—so we fix problems without creating new ones." },
            { icon: Handshake, title: "Transparent Communication", desc: "Monthly reports, incident post-mortems, and a dedicated Slack channel mean you always know the status of your system." },
            { icon: TrendingUp, title: "Continuous Improvement", desc: "We don't just maintain the status quo—we identify and implement incremental improvements that make your product better every quarter." },
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

      {/* ─── KEY BENEFITS ────────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Key Benefits of Utilising Support and Maintenance Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A well-maintained system is faster, safer, and more cost-effective to operate than one
            that&apos;s left to accumulate debt.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Rocket,
              title: "Reduced Downtime",
              desc: "Proactive monitoring and rapid incident response mean fewer outages and significantly less lost revenue from system failures.",
            },
            {
              icon: Lock,
              title: "Lower Long-Term Costs",
              desc: "Fixing small issues before they become big ones is dramatically cheaper. Proactive maintenance reduces total cost of ownership by up to 40%.",
            },
            {
              icon: HeartHandshake,
              title: "Better User Experience",
              desc: "Faster, more reliable, and consistently bug-free software leads directly to higher user satisfaction, retention, and conversion rates.",
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

      {/* ─── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What Our Clients Say{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Technology leaders who trust PSV Enterprises to keep their software running.
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
          Get Insights from Our Latest News
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
            Common questions about our support and maintenance services, SLAs, and process.
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
              Tell us about your software and we&apos;ll put together a maintenance plan that fits your
              business and budget.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "4+", label: "Years of Experience" },
                { icon: Users, value: "50+", label: "Apps Maintained" },
                { icon: BarChart3, value: "99.9%", label: "Avg Uptime Delivered" },
                { icon: CheckCircle2, value: "500+", label: "Issues Resolved" },
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
              <ContactForm source="support-maintenance" submitLabel="SEND MESSAGE" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
