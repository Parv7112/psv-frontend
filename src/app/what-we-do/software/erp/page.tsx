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
  Server,
  Settings,
  TrendingUp,
  Award,
  Lightbulb,
  Clock,
  CheckCircle2,
  Handshake,
  Lock,
  Briefcase,
  MessageSquare,
  PencilRuler,
  Search,
  Shield,
  Layers,
  Database,
  Factory,
  Landmark,
  Stethoscope,
  GraduationCap,
  ShoppingCart,
  Truck,
  Package,
  RefreshCw,
  GitBranch,
  FileBarChart,
} from "lucide-react";

const accentDot = (
  <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />
);

export default function ErpPage() {
  const [relatedTab, setRelatedTab] = useState<"all" | "software" | "other">("all");

  const relatedServices = [
    { title: "Custom Software Development", href: "/what-we-do/software/custom", category: "software" as const },
    { title: "Web Application Development", href: "/what-we-do/software/web-app", category: "software" as const },
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
      question: "What is ERP software development?",
      answer:
        "ERP (Enterprise Resource Planning) software development involves building integrated systems that unify business processes—finance, HR, supply chain, inventory, manufacturing, and more—into a single platform with real-time data and reporting.",
    },
    {
      question: "Should I build a custom ERP or buy an off-the-shelf solution?",
      answer:
        "Off-the-shelf ERPs like SAP or Odoo work well for standard processes. Custom ERP development is best when your workflows are unique, you need deep integrations, or licensing costs of commercial ERPs outweigh a bespoke build at your scale.",
    },
    {
      question: "How long does ERP development take?",
      answer:
        "A modular ERP MVP covering core finance, HR, and inventory typically takes 3–6 months. A full enterprise ERP with multiple departments and integrations can take 9–18 months. We deliver in phases so each module goes live incrementally.",
    },
    {
      question: "Can you integrate our ERP with existing tools?",
      answer:
        "Yes. We integrate ERP systems with CRMs (Salesforce, HubSpot), accounting tools (QuickBooks, Xero), e-commerce platforms, payment gateways, and government portals via REST/GraphQL APIs or EDI.",
    },
    {
      question: "What happens after the ERP is live?",
      answer:
        "We provide user training, post-launch support, and SLA-backed maintenance. We can also add new modules, upgrade integrations, or optimise performance as your business evolves.",
    },
  ];

  const processSteps = [
    { num: "01", icon: MessageSquare, title: "Business Analysis", desc: "Map every department's workflows, data flows, and pain points before a single line of code is written." },
    { num: "02", icon: Layout, title: "System Architecture", desc: "Design a modular, scalable ERP architecture with clear data models and integration points." },
    { num: "03", icon: PencilRuler, title: "UI/UX Design", desc: "Role-based dashboards and intuitive forms that minimise training time and drive adoption." },
    { num: "04", icon: Code2, title: "Module Development", desc: "Iterative builds per module—Finance, HR, Supply Chain, CRM—with demo reviews at each milestone." },
    { num: "05", icon: Search, title: "Testing & Data Migration", desc: "End-to-end testing, UAT, and careful migration of legacy data to the new system." },
    { num: "06", icon: Rocket, title: "Go-Live & Support", desc: "Phased rollout, user training, hypercare support, and SLA-backed maintenance post-launch." },
  ];

  const testimonials = [
    {
      quote: "PSV replaced our patchwork of spreadsheets and legacy tools with a single ERP. We now have real-time visibility across all departments and our month-end close is 70% faster.",
      name: "Ravi S.",
      role: "CFO",
      company: "Manufacturing Group",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      quote: "The custom ERP they built handles our multi-warehouse inventory seamlessly. Stock accuracy jumped to 99.8% within the first quarter of go-live.",
      name: "Karen L.",
      role: "VP Operations",
      company: "Retail Chain",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
      quote: "Their team understood the complexity of our HR and payroll requirements. The ERP works exactly as we need it—and the team has been responsive long after launch.",
      name: "Daniel M.",
      role: "Head of HR",
      company: "Staffing Company",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
  ];

  const blogPosts = [
    {
      tag: "ERP",
      title: "Custom ERP vs Off-the-Shelf: Which Is Right for Your Business?",
      snippet: "A practical guide to choosing between SAP, Odoo, and a fully bespoke ERP solution.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Aug 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Integration",
      title: "Integrating ERP with Your CRM and E-Commerce Stack",
      snippet: "How to connect your ERP to Salesforce, Shopify, and payment gateways for a unified data flow.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Jul 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Supply Chain",
      title: "Building a Supply Chain Module for Your ERP",
      snippet: "Key features and data models for procurement, inventory, and supplier management.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Jun 2024",
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
        <span className="font-semibold text-slate-900">ERP Software Development Company</span>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Software Development
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              ERP Software Development Company
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We design and build custom ERP systems that unify your business—finance, HR, supply chain,
              inventory, and operations—in one scalable platform. Replace fragmented tools and spreadsheets
              with real-time data, automated workflows, and role-based dashboards built for your exact
              processes.
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

          {/* ERP dashboard visual */}
          <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_4px_20px_rgba(2,6,23,0.08)]">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">ERP Overview</span>
              <span className="rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-semibold text-lime-700">Live</span>
            </div>
            {/* Mock chart bars */}
            <div className="flex h-28 items-end gap-2">
              {[40, 65, 50, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: i % 3 === 0 ? "#6366f1" : i % 3 === 1 ? "#a5b4fc" : "#e0e7ff",
                  }}
                />
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { icon: BarChart3, label: "Revenue", value: "↑ 24%" },
                { icon: Package, label: "Inventory", value: "99.8%" },
                { icon: Users, label: "Staff", value: "340" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl bg-slate-50 p-3 text-center">
                  <Icon className="mx-auto h-4 w-4 text-slate-500" />
                  <div className="mt-1 text-sm font-bold text-slate-900">{value}</div>
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
          {["FactoryCore ERP", "RetailSync", "MediLedger", "AgriFlow", "SchoolOS", "LogiTrack"].map((name, i, arr) => (
            <span key={name} className="inline-flex items-center gap-4">
              <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">{name}</Link>
              {i < arr.length - 1 && <span className="text-slate-300">|</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ─── ERP SOFTWARE DEVELOPMENT SERVICES FOR THE PRODUCT ──── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            ERP Software Development Services for the Product{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We build every core ERP module—from financial management and HR to supply chain and
            analytics—so your entire operation runs from a single, connected platform.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Landmark,
              title: "Finance & Accounting",
              items: [
                "General ledger & chart of accounts",
                "Accounts payable & receivable",
                "Budgeting & forecasting",
                "Multi-currency & tax compliance",
              ],
            },
            {
              icon: Package,
              title: "Inventory & Supply Chain",
              items: [
                "Real-time stock tracking",
                "Purchase order management",
                "Supplier & vendor portals",
                "Demand forecasting",
              ],
            },
            {
              icon: Users,
              title: "HR & Payroll",
              items: [
                "Employee records & onboarding",
                "Attendance & leave management",
                "Payroll processing & compliance",
                "Performance review workflows",
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
                alt="FactoryCore ERP"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-transparent" />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Manufacturing ERP
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">FactoryCore Manufacturing ERP</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                End-to-end ERP for a mid-size manufacturer covering production planning, BOM management,
                quality control, and finance. Reduced production cycle time by 35% and cut reporting
                overhead by 60%.
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

          {/* Card 2 */}
          <article className="grid overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.08)] lg:grid-cols-2">
            <div className="relative min-h-[260px] bg-slate-100 lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=480&fit=crop"
                alt="RetailSync ERP"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur-sm">
                  Retail ERP
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">RetailSync Multi-Location ERP</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Unified ERP for a retail chain with 40+ stores—covering POS integration, centralised
                inventory, supplier management, and HR. Stock accuracy reached 99.8% and the month-end
                close was reduced from 5 days to 1 day.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Next.js · Python · MongoDB · Azure</p>
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
            We deliver ERP solutions tailored to the workflows and compliance requirements of each industry.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {[
            { icon: Factory, name: "Manufacturing" },
            { icon: ShoppingCart, name: "Retail" },
            { icon: Stethoscope, name: "Healthcare" },
            { icon: GraduationCap, name: "Education" },
            { icon: Truck, name: "Logistics" },
            { icon: Landmark, name: "Finance" },
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
      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-center sm:py-18">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
          It&apos;s Time to Build the Right ERP System Together
        </p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Ready to Unify Your Business with a Custom ERP?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Tell us your operational challenges and we&apos;ll design an ERP that fits your workflows perfectly.
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

      {/* ─── OUR ERP DEVELOPMENT PROCESS ────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our ERP Software Development Process{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A structured, phased approach that minimises disruption and delivers each module on schedule.
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

      {/* ─── ABOUT OUR ERP DEVELOPMENT APPROACH ─────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            About Our ERP Development Approach{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We build ERPs that are modular, integration-ready, and designed for the long term—not just for
            go-live.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Layers, title: "Modular by Design", desc: "Each module is independent and can be deployed and upgraded separately without affecting others." },
            { icon: GitBranch, title: "Integration-First", desc: "Built with open APIs so your ERP connects to CRMs, e-commerce, banking, and government portals." },
            { icon: FileBarChart, title: "Real-Time Reporting", desc: "Embedded BI dashboards give managers live visibility into every KPI without exporting to Excel." },
            { icon: RefreshCw, title: "Continuous Improvement", desc: "Post-launch roadmaps and sprint-based feature delivery so the ERP grows with your business." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why Choose Us for ERP Software Development?{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We combine deep domain knowledge with full-stack engineering to deliver ERPs that your
            teams actually use.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Handshake, title: "Domain Expertise", desc: "Experience across manufacturing, retail, healthcare, logistics, and finance ERP implementations." },
            { icon: Lightbulb, title: "Phased Delivery", desc: "We go live module by module, so you see ROI early and avoid big-bang migrations." },
            { icon: Clock, title: "Change Management Support", desc: "Training, documentation, and user adoption support built into every engagement." },
            { icon: Award, title: "Data Migration Experience", desc: "Battle-tested processes for migrating clean, validated data from legacy systems and spreadsheets." },
            { icon: Users, title: "Long-Term Partnership", desc: "We stick around post-launch—adding modules, optimising performance, and supporting growth." },
            { icon: ShieldCheck, title: "Security & Compliance", desc: "Role-based access, audit trails, data encryption, and compliance with industry regulations." },
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
            The Benefits of Investing in ERP Software Development Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A well-implemented ERP pays dividends in efficiency, accuracy, and strategic decision-making.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: TrendingUp, title: "Operational Efficiency", desc: "Automated workflows across departments eliminate duplicate data entry, manual errors, and siloed tools." },
            { icon: Lock, title: "Improved Data Accuracy", desc: "A single source of truth for all business data means consistent, reliable reporting and fewer discrepancies." },
            { icon: Award, title: "Faster Decision-Making", desc: "Real-time dashboards and reports give leadership the live data they need to act quickly and confidently." },
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
            Hear from operations and finance leaders who've transformed their businesses with our ERP solutions.
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
            Common questions about ERP development, our approach, and what to expect.
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
              Share your ERP requirements and we&apos;ll map out a phased implementation plan that delivers
              value from the first module go-live.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "50+", label: "ERP Projects Delivered" },
                { icon: Users, value: "80+", label: "Happy Clients" },
                { icon: BarChart3, value: "40+", label: "Engineers & Architects" },
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
              <ContactForm source="erp-development" submitLabel="SEND MESSAGE" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
