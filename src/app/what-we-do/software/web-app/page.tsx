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
  Globe,
  ShieldCheck,
  Zap,
  Users,
  Rocket,
  Code2,
  Layout,
  Smartphone,
  Server,
  Settings,
  TrendingUp,
  Award,
  Lightbulb,
  Clock,
  CheckCircle2,
  Handshake,
  Lock,
  Monitor,
  Briefcase,
  MessageSquare,
  PencilRuler,
  Search,
  Shield,
  Layers,
  RefreshCw,
} from "lucide-react";

const accentDot = (
  <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />
);

export default function WebAppPage() {
  const [relatedTab, setRelatedTab] = useState<"all" | "software" | "other">("all");

  const relatedServices = [
    { title: "Custom Software Development", href: "/what-we-do/software/custom", category: "software" as const },
    { title: "ERP Development", href: "/what-we-do/software/erp", category: "software" as const },
    { title: "Mobile Application Development", href: "/what-we-do/software/mobile", category: "software" as const },
    { title: "Website Development", href: "/what-we-do/software/website", category: "software" as const },
    { title: "API Development", href: "/what-we-do/software/apis", category: "software" as const },
    { title: "SaaS & Dashboards", href: "/what-we-do/software/saas", category: "software" as const },
    { title: "UI/UX Design", href: "/what-we-do/software/ui-ux", category: "software" as const },
    { title: "DevOps & Deployment", href: "/what-we-do/other/devops", category: "other" as const },
  ];

  const relatedFiltered =
    relatedTab === "software"
      ? relatedServices.filter((s) => s.category === "software")
      : relatedTab === "other"
        ? relatedServices.filter((s) => s.category === "other")
        : relatedServices;

  const faqs = [
    {
      question: "What is web application development?",
      answer:
        "Web application development is the process of building dynamic, interactive software that runs in a web browser. It covers everything from frontend UI to backend APIs, databases, and deployment—resulting in applications accessible from any device.",
    },
    {
      question: "How long does it take to build a web application?",
      answer:
        "A focused MVP web app typically takes 8–14 weeks. Larger platforms with multiple integrations and user roles can take 4–9 months. We work in agile sprints so you see working software early and can adjust priorities.",
    },
    {
      question: "What technologies do you use for web app development?",
      answer:
        "We primarily use React and Next.js for frontends, Node.js or Python for backends, PostgreSQL or MongoDB for databases, and AWS/GCP for cloud infrastructure. We choose the right stack for your scale and team.",
    },
    {
      question: "Can you build a Progressive Web App (PWA)?",
      answer:
        "Yes. We build PWAs that work offline, load fast, and can be installed on mobile devices—giving you web-app flexibility with a near-native user experience.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Absolutely. We offer SLA-backed support packages covering monitoring, bug fixes, security patches, and feature updates so your web application stays healthy in production.",
    },
  ];

  const processSteps = [
    { num: "01", icon: MessageSquare, title: "Discovery & Requirements", desc: "Define user journeys, technical requirements, and success metrics with your stakeholders." },
    { num: "02", icon: PencilRuler, title: "UI/UX Design", desc: "Wireframes, design system, and interactive prototypes validated before development begins." },
    { num: "03", icon: Code2, title: "Frontend Development", desc: "Pixel-perfect, responsive UI built with React/Next.js and your design system." },
    { num: "04", icon: Server, title: "Backend & APIs", desc: "Secure, scalable APIs and database schema designed for your data model." },
    { num: "05", icon: Search, title: "QA & Testing", desc: "End-to-end, performance, and security testing across devices and browsers." },
    { num: "06", icon: Rocket, title: "Deployment & Launch", desc: "CI/CD pipeline, infrastructure provisioning, and a monitored production launch." },
  ];

  const testimonials = [
    {
      quote: "PSV built our web platform from scratch. It's fast, looks great, and our users love it. The team was proactive and communicated clearly throughout.",
      name: "Arjun P.",
      role: "Founder",
      company: "EdTech Startup",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      quote: "We replaced our legacy portal with a modern Next.js web app. Performance improved 10x and our support tickets dropped significantly.",
      name: "Lisa T.",
      role: "VP Product",
      company: "FinTech Company",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      quote: "From design to deployment the process was smooth and on-schedule. The web app handles thousands of concurrent users without issues.",
      name: "Marcus W.",
      role: "CTO",
      company: "Logistics Platform",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
  ];

  const blogPosts = [
    {
      tag: "Web App",
      title: "React vs Next.js: Choosing the Right Framework for Your Web App",
      snippet: "A practical comparison to help you decide between a SPA and a full-stack Next.js application.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Jul 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Performance",
      title: "Web Application Performance Optimisation in 2024",
      snippet: "Core Web Vitals, lazy loading, edge deployment, and the techniques that matter most.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Jun 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Architecture",
      title: "Designing Scalable Web Application Architecture",
      snippet: "Patterns and decisions that let your web app grow from hundreds to millions of users.",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "May 2024",
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
        <Link href="/what-we-do" className="hover:text-slate-900">Software Development</Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-slate-900">Web Application Development Company</span>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Software Development
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Web Application Development Company
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We design and build powerful, scalable web applications that run beautifully in any browser.
              From SaaS platforms and dashboards to customer portals and marketplaces, we deliver
              production-ready software with great UX and solid engineering under the hood.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href="/lets-talk"
                variant="dark"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          {/* Dashboard mockup / visual */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 p-6 shadow-[0_4px_20px_rgba(2,6,23,0.08)]">
            <div className="relative h-56 overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-lg sm:h-64">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=480&fit=crop"
                alt="Web application dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay label */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-lime-400" />
                Live Web Application
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { label: "Performance", value: "99/100" },
                { label: "Uptime", value: "99.9%" },
                { label: "Load time", value: "< 1s" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl border border-slate-200/70 bg-white p-3 text-center shadow-sm">
                  <div className="text-sm font-bold text-slate-900">{value}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{label}</div>
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
          {["DashFlow", "MarketNest", "ConnectHub", "ReportIQ", "TalentOS", "LoanTrack"].map((name, i, arr) => (
            <span key={name} className="inline-flex items-center gap-4">
              <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">{name}</Link>
              {i < arr.length - 1 && <span className="text-slate-300">|</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ─── WEB APP DEVELOPMENT SERVICES FOR THE PRODUCT ───────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Web Application Development Services for the Product{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We cover every layer of modern web application development—from UI design to backend
            infrastructure—so your product launches with confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Layout,
              title: "Frontend Development",
              items: [
                "React & Next.js applications",
                "Responsive, accessible UI",
                "Design system implementation",
                "Component-driven development",
              ],
            },
            {
              icon: Server,
              title: "Backend & API Development",
              items: [
                "RESTful & GraphQL APIs",
                "Authentication & authorisation",
                "Real-time with WebSockets",
                "Third-party integrations",
              ],
            },
            {
              icon: Monitor,
              title: "Progressive Web Apps",
              items: [
                "Offline-first capability",
                "Install on any device",
                "Push notifications",
                "Near-native performance",
              ],
            },
          ].map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── LAUNCH TO PROGRESS – numbered steps ─────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Launch to Progress{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Our development lifecycle is designed to take your idea from concept to a live, production-grade
            web application—with clear milestones and measurable progress at every step.
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

      {/* ─── FEATURED PROJECTS – 2 large horizontal cards ────────── */}
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
            <div className="relative min-h-[260px] bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=480&fit=crop"
                alt="DashFlow Analytics Platform"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-transparent" />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  SaaS Dashboard
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">DashFlow Analytics Platform</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Real-time analytics web app with custom charting, role-based dashboards, and automated
                reporting. Reduced reporting time by 75% for the client&apos;s operations team.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Next.js · Node.js · PostgreSQL · Chart.js</p>
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
            <div className="relative min-h-[260px] bg-slate-100 lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=480&fit=crop"
                alt="MarketNest Marketplace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur-sm">
                  Marketplace
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">MarketNest B2B Marketplace</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Multi-vendor B2B marketplace with buyer/seller portals, dynamic pricing, and Stripe
                Connect payouts. Onboarded 500+ vendors in the first quarter after launch.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">React · Express · MongoDB · Stripe</p>
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

      {/* ─── SCALE TO WITNESS – 4-item grid ──────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Scale to Witness with Web Application Development{accentDot}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-slate-600">
          We build web applications designed to scale—from your first users to your millionth—with
          architecture that supports growth and partnerships that last.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Zap, label: "High Performance", desc: "Sub-second load times and smooth interactions, even under heavy traffic." },
            { icon: Layers, label: "Modular Architecture", desc: "Component-driven, service-oriented design that lets you extend without rewrites." },
            { icon: RefreshCw, label: "Continuous Delivery", desc: "Automated CI/CD so you ship features weekly, not monthly." },
            { icon: Globe, label: "Global Reach", desc: "CDN-backed, edge-optimised deployment for fast load times worldwide." },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">{label}</h3>
              <p className="text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DARK CTA BANNER ─────────────────────────────────────── */}
      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-center sm:py-18">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
          It&apos;s Time to Start Your Web App Project
        </p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Ready to Build Your Web Application with Us?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Tell us your goals and we&apos;ll help you design and launch a web application that scales.
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

      {/* ─── HOW WEB APP DEVELOPMENT SERVICES WORK ───────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How Web Application Development Services Work for You{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We handle every layer of your web application—so you get a single, accountable partner from
            first wireframe to production monitoring.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Settings, title: "Requirement Analysis", desc: "We map your business processes to technical requirements, so the software fits your workflows—not the other way around." },
            { icon: TrendingUp, title: "Scalable Cloud Infrastructure", desc: "AWS, GCP, or Azure setups with auto-scaling, load balancing, and cost controls baked in from day one." },
            { icon: ShieldCheck, title: "Security & Compliance", desc: "OWASP best practices, data encryption, auth frameworks, and audit-ready logs built into every project." },
            { icon: Smartphone, title: "Mobile-First & Responsive", desc: "Every web app we build is fully responsive across phones, tablets, and desktops—no separate mobile build needed." },
            { icon: BarChart3, title: "Analytics & Observability", desc: "Real-time dashboards, error tracking, and performance monitoring so you always know how your app is performing." },
            { icon: Zap, title: "Optimised Performance", desc: "Core Web Vitals optimisation, code splitting, and edge caching for fast initial loads and smooth interactions." },
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

      {/* ─── WHY CHOOSE US ───────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why Choose Us for Web Application Development Services?{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We combine product thinking with engineering rigour to build web applications that users
            love and businesses rely on.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Handshake, title: "Full-Stack Expertise", desc: "Frontend, backend, DevOps, and design—one team with the full skill set to own your project end to end." },
            { icon: Lightbulb, title: "Product-First Thinking", desc: "We consider user experience, business goals, and technical constraints together—not in silos." },
            { icon: Clock, title: "On-Time Delivery", desc: "Agile sprints, transparent planning, and realistic estimates so you can count on delivery dates." },
            { icon: Award, title: "Quality Engineering", desc: "Code reviews, automated tests, and CI/CD pipelines ensure maintainable, production-grade software." },
            { icon: Users, title: "Collaborative Process", desc: "Weekly demos, Slack-based communication, and shared visibility into every sprint." },
            { icon: Shield, title: "Security by Default", desc: "Auth, rate limiting, input validation, and dependency audits built into every project from the start." },
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

      {/* ─── BENEFITS ────────────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            The Benefits of Investing in Web Application Development Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A well-built web application delivers operational efficiency, user satisfaction, and a
            foundation for long-term growth.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: TrendingUp, title: "Accelerated Business Growth", desc: "Streamlined workflows, new revenue channels, and digital presence that attracts and retains customers." },
            { icon: Lock, title: "Reduced Operational Costs", desc: "Automation and self-service capabilities reduce manual effort and dependency on expensive legacy tools." },
            { icon: Award, title: "Improved User Experience", desc: "Fast, intuitive web apps increase adoption, reduce support load, and build brand trust." },
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

      {/* ─── TESTIMONIALS – 3-grid cards ─────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What Our Clients Say{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Hear from teams that shipped web applications with PSV Enterprises.
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

      {/* ─── TRUSTED BY / LOGO CLOUD ─────────────────────────────── */}
      <section className="space-y-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
          Get a Slight View Over Our Latest Work
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

      {/* ─── FAQ ─────────────────────────────────────────────────── */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Common questions about web application development, our process, and what to expect.
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
              Tell us about your web application idea and we&apos;ll help you shape it into a production-ready
              product.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "200+", label: "Web Apps Delivered" },
                { icon: Users, value: "100+", label: "Happy Clients" },
                { icon: BarChart3, value: "50+", label: "Engineers & Designers" },
                { icon: CheckCircle2, value: "8+", label: "Years of Experience" },
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
              <ContactForm source="web-app-development" submitLabel="SEND MESSAGE" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
