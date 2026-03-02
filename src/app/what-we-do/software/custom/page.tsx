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
  FileText,
  MessageSquare,
  Send,
  Settings,
  User,
  ShieldCheck,
  MessageCircle,
  PencilRuler,
  Code2,
  Rocket,
  Shield,
  Search,
  Handshake,
  Lightbulb,
  Cog,
  TrendingUp,
  Lock,
  Briefcase,
  Users,
  Award,
  Landmark,
  Stethoscope,
  GraduationCap,
  ShoppingCart,
  Truck,
  Car,
  CheckCircle2,
  Globe,
  Zap,
  Database,
} from "lucide-react";

const accentDot = (
  <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />
);

export default function CustomSoftwarePage() {
  const [query, setQuery] = useState("");
  const [relatedTab, setRelatedTab] = useState<"all" | "software" | "other">("all");

  const relatedServices = [
    { title: "Custom Software Development", href: "/what-we-do/software/custom", category: "software" as const },
    { title: "ERP Development", href: "/what-we-do/software/erp", category: "software" as const },
    { title: "Mobile Application Development", href: "/what-we-do/software/mobile", category: "software" as const },
    { title: "Web Application Development", href: "/what-we-do/software/web-app", category: "software" as const },
    { title: "Website Development", href: "/what-we-do/software/website", category: "software" as const },
    { title: "API Development", href: "/what-we-do/software/apis", category: "software" as const },
    { title: "SaaS & Dashboards", href: "/what-we-do/software/saas", category: "software" as const },
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
      question: "What is custom software development?",
      answer:
        "Custom software development is the design, build, and deployment of tailored applications that fit your exact business processes, workflows, and goals—rather than adapting to off-the-shelf products.",
    },
    {
      question: "How long does a typical custom software project take?",
      answer:
        "Timelines vary by scope. A focused MVP might take 8–12 weeks; larger enterprise systems can run 6–12 months. We work in agile sprints so you see value early and can adjust priorities.",
    },
    {
      question: "Do you work with existing systems?",
      answer:
        "Yes. We integrate with your current ERP, CRM, databases, and APIs. We can modernize legacy systems or build new modules that work alongside them.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern stacks including React, Next.js, Node.js, and cloud platforms (AWS, Azure, GCP). We choose technologies that match your scale, team, and long-term maintainability.",
    },
  ];

  const processSteps = [
    { num: "01", icon: MessageCircle, title: "Discovery & Planning", desc: "We align on goals, scope, and success metrics with your team before writing code." },
    { num: "02", icon: PencilRuler, title: "Design & Prototyping", desc: "Wireframes, UX flows, and prototypes so you can validate the experience early." },
    { num: "03", icon: Code2, title: "Development", desc: "Iterative builds in sprints with regular demos and feedback loops." },
    { num: "04", icon: Search, title: "Quality Assurance", desc: "Rigorous testing—functional, performance, and security—before launch." },
    { num: "05", icon: Rocket, title: "Deployment", desc: "Smooth rollout to production with documentation and handover." },
    { num: "06", icon: Shield, title: "Maintenance & Support", desc: "Ongoing updates, monitoring, and support to keep your system running at its best." },
  ];

  const industries = [
    { icon: Landmark, name: "Finance" },
    { icon: Stethoscope, name: "Healthcare" },
    { icon: GraduationCap, name: "Education" },
    { icon: ShoppingCart, name: "Retail" },
    { icon: Truck, name: "Logistics" },
    { icon: Car, name: "Automotive" },
  ];

  const testimonials = [
    {
      quote:
        "PSV delivered a custom platform that replaced our legacy systems. The team was responsive, and the result has transformed how we operate.",
      name: "Sarah K.",
      role: "COO",
      company: "Manufacturing Co.",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      quote:
        "From discovery to launch, the process was transparent and collaborative. We now have a scalable product that our users love.",
      name: "James M.",
      role: "Product Director",
      company: "SaaS Platform",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      quote:
        "They understood our compliance requirements and built a secure, audit-ready solution. Highly recommend for enterprise projects.",
      name: "Priya L.",
      role: "CTO",
      company: "Healthcare Tech",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
  ];

  const blogPosts = [
    {
      tag: "Custom Software",
      title: "When to Choose Custom Software Over Off-the-Shelf",
      snippet: "How to decide between bespoke solutions and off-the-shelf products for your business.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Jul 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Enterprise",
      title: "Building Scalable Enterprise Applications",
      snippet: "Architecture and practices for applications that grow with your organization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Jun 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Integration",
      title: "Integrating Legacy Systems with Modern APIs",
      snippet: "Connect older systems to new platforms without big-bang rewrites.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "May 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Breadcrumbs */}
      <nav className="text-sm text-slate-600">
        <Link href="/" className="hover:text-slate-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/what-we-do" className="hover:text-slate-900">What we do</Link>
        <span className="mx-2">/</span>
        <Link href="/what-we-do" className="hover:text-slate-900">Software Development</Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-slate-900">Custom Software Development Company</span>
      </nav>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Software Development
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Custom Software Development Company
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We build tailored software that fits your business—not the other way around. From web and
              mobile applications to enterprise systems and integrations, we deliver scalable, secure
              solutions that drive efficiency and growth.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="/lets-talk"
                variant="dark"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          {/* Ask card */}
          <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_4px_20px_rgba(2,6,23,0.08)]">
            <h2 className="text-lg font-semibold text-slate-900">Ask about Custom Software Development</h2>
            <div className="mt-5 space-y-4">
              {[
                { icon: BarChart3, label: "Business Process Automation" },
                { icon: FileText, label: "Enterprise Portals & Dashboards" },
                { icon: MessageSquare, label: "System Integration & APIs" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-2 rounded-xl border border-slate-200 bg-slate-50/80 p-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your query..."
                className="min-w-0 flex-1 border-0 bg-transparent px-2 py-1.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
              />
              <button
                type="button"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white hover:bg-slate-800"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS STRIP ──────────────────────────────── */}
      <section className="rounded-2xl border border-slate-200/70 bg-slate-50/60 px-6 py-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Featured projects</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {["Workflow Pro", "VendorHub", "CarePortal", "DataSync", "RetailOS", "FinanceHub"].map((name, i, arr) => (
            <span key={name} className="inline-flex items-center gap-4">
              <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">{name}</Link>
              {i < arr.length - 1 && <span className="text-slate-300">|</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ─── IT'S OUR PASSION – 3 feature columns ─────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            It&apos;s Our Passion to Assist Development Businesses for Their Benefits{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We combine deep engineering expertise with business insight to create software that works
            exactly the way you need it to—reliable, scalable, and built to last.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Faster Time to Market",
              items: [
                "Agile delivery in 2-week sprints",
                "Working software from day one",
                "Rapid prototyping & validation",
                "Continuous feedback loops",
              ],
            },
            {
              icon: Database,
              title: "Robust & Scalable Architecture",
              items: [
                "Cloud-native infrastructure",
                "Microservices where appropriate",
                "Performance-first engineering",
                "Horizontal scalability built in",
              ],
            },
            {
              icon: Globe,
              title: "End-to-End Ownership",
              items: [
                "Discovery through deployment",
                "Full-stack development teams",
                "Ongoing maintenance & SLAs",
                "Transparent communication",
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

      {/* ─── PROBLEMS OUR SOFTWARE SOLVES ─────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Problems Our Custom Software Solutions Solve{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We address the most common pain points businesses face with legacy systems, scale, user
            experience, and compliance.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { icon: Settings, title: "Legacy Systems & Integration", desc: "Modernize or integrate with existing systems so data flows seamlessly and your team works in one connected environment." },
            { icon: TrendingUp, title: "Scalability & Performance", desc: "Build for growth from day one—architecture and tech choices that handle increased load and users without rewrites." },
            { icon: User, title: "Outdated User Experience", desc: "Replace clunky interfaces with intuitive, responsive designs that your teams and customers actually enjoy using." },
            { icon: ShieldCheck, title: "Security & Compliance", desc: "Security and compliance built in: access control, encryption, audit trails, and adherence to industry standards." },
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

      {/* ─── FEATURED PROJECTS – large horizontal cards ───────────── */}
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
        <p className="max-w-2xl text-base text-slate-600">
          A selection of custom software projects we&apos;ve delivered—from B2B SaaS to eCommerce and
          enterprise tools.
        </p>

        <div className="grid gap-8">
          {/* Project card 1 */}
          <article className="grid overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.08)] lg:grid-cols-2">
            <div className="relative min-h-[260px] bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=480&fit=crop"
                alt="Enterprise Workflow Platform"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-transparent" />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  B2B SaaS
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">Enterprise Workflow Platform</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Custom platform for managing approvals, workflows, and reporting across departments.
                Reduced process cycle time by 60% and eliminated manual handoffs.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">React · Node.js · PostgreSQL · AWS</p>
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

          {/* Project card 2 */}
          <article className="grid overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.08)] lg:grid-cols-2">
            <div className="relative min-h-[260px] bg-slate-100 lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=480&fit=crop"
                alt="Multi-Vendor Marketplace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur-sm">
                  eCommerce
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">Multi-Vendor Marketplace</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Scalable marketplace with vendor dashboards, payments, and order management. Onboarded
                300+ vendors in 90 days post-launch.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Next.js · Stripe · MongoDB · AWS</p>
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

      {/* ─── INDUSTRIES WE SERVE ──────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Industries We Serve with Custom Software Development{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We deliver tailored solutions across sectors—from finance and healthcare to retail, logistics,
            and more.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {industries.map(({ icon: Icon, name }) => (
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

      {/* ─── RELATIONSHIPS THAT LAST – 4-item strip ───────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Relationships That Last with Custom Software Development{accentDot}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-slate-600">
          We don&apos;t just ship code—we build long-term partnerships focused on outcomes, trust, and
          continuous improvement.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Handshake, label: "Transparent Communication", desc: "Weekly updates, demos, and honest status reporting every step of the way." },
            { icon: Lightbulb, label: "Collaborative Process", desc: "Your team is involved from kickoff to launch—no surprises, full visibility." },
            { icon: Award, label: "Quality at Every Stage", desc: "Code reviews, testing, and design QA built into every sprint." },
            { icon: Globe, label: "Post-Launch Support", desc: "SLAs, monitoring, and a dedicated support contact after go-live." },
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

      {/* ─── DARK CTA BANNER ──────────────────────────────────────── */}
      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-center sm:py-18">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
          Start Building Your Custom Software Today
        </p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Ready to Discuss Your Project with Us?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Tell us your goals and we&apos;ll help you turn them into a custom solution that scales.
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

      {/* ─── PROCESS ──────────────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Custom Software Development Process{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            From discovery to deployment and beyond—a proven process that keeps projects on track and
            aligned with your vision.
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

      {/* ─── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why Choose Us for Custom Software Development Services?{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We combine technical excellence with a focus on your business outcomes and long-term success.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Handshake, title: "Expertise & Experience", desc: "Seasoned developers and architects who have delivered custom software across industries and scales." },
            { icon: Lightbulb, title: "Agile Methodology", desc: "Iterative delivery with regular demos and feedback so you stay in control and see progress every sprint." },
            { icon: Cog, title: "Client-Centric Approach", desc: "Your goals and constraints drive our decisions—we build what you need, not what we prefer." },
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

      {/* ─── BENEFITS ─────────────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            The Benefits of Investing in Custom Software Development Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Custom software pays off in efficiency, security, and competitive advantage.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: TrendingUp, title: "Increased Efficiency & Productivity", desc: "Workflows and automation tailored to your processes reduce manual work and errors, freeing your team for higher-value work." },
            { icon: Lock, title: "Enhanced Security", desc: "Security designed for your data and compliance needs—access control, encryption, and audit trails built in from the start." },
            { icon: Award, title: "Competitive Advantage", desc: "Unique capabilities that differentiate you in the market and adapt as your business and industry evolve." },
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

      {/* ─── TESTIMONIALS – 3-grid cards ──────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What Our Clients Say{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Hear from teams that have partnered with us for custom software development.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm italic leading-7 text-slate-700">&ldquo;{t.quote}&rdquo;</p>
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

      {/* ─── TRUSTED BY INDUSTRY LEADERS ──────────────────────────── */}
      <section className="space-y-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
          Trusted by Industry Leaders
        </h2>
        <LogoCloud hideTitle />
      </section>

      {/* ─── BLOG ─────────────────────────────────────────────────── */}
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

      {/* ─── OTHER RELATED SERVICES ───────────────────────────────── */}
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

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Common questions about custom software development, our process, and what to expect.
          </p>
        </div>
        <Accordion items={faqs} defaultOpenIndex={0} variant="arrow" />
      </section>

      {/* ─── DISCOVER / CONTACT ───────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Discover how we can help
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Share your project idea and we&apos;ll help you shape it into a custom solution that delivers
              real business value.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "250+", label: "Projects Delivered" },
                { icon: Users, value: "500+", label: "Global Clientele Served" },
                { icon: BarChart3, value: "150+", label: "Engineers & Developers" },
                { icon: CheckCircle2, value: "15+", label: "Years of Experience" },
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
              <ContactForm source="custom-software" submitLabel="SEND MESSAGE" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
