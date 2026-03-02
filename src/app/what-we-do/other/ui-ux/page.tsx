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
  Lightbulb,
  Clock,
  Award,
  Shield,
  Layers,
  PencilRuler,
  MousePointer2,
  Search,
  FlaskConical,
  Palette,
  MonitorSmartphone,
  Accessibility,
  LayoutDashboard,
  Handshake,
  TrendingUp,
  Lock,
  Stethoscope,
  ShoppingCart,
  GraduationCap,
  Truck,
  Landmark,
  Building2,
  MessageSquare,
  Settings,
  Rocket,
  Eye,
  Zap,
} from "lucide-react";

const accentDot = (
  <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />
);

export default function UiUxPage() {
  const [relatedTab, setRelatedTab] = useState<"all" | "software" | "other">("all");

  const relatedServices = [
    { title: "Custom Software Development", href: "/what-we-do/software/custom", category: "software" as const },
    { title: "Web Application Development", href: "/what-we-do/software/web-app", category: "software" as const },
    { title: "Mobile App Development", href: "/what-we-do/software/mobile", category: "software" as const },
    { title: "Website Development", href: "/what-we-do/software/website", category: "software" as const },
    { title: "Offshore Development Centre", href: "/what-we-do/other/offshore", category: "other" as const },
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
      question: "What is UI/UX design and why does it matter?",
      answer:
        "UI (User Interface) design focuses on the visual layout—buttons, colours, typography, and components. UX (User Experience) design focuses on the entire end-to-end journey a user takes through your product. Together they determine whether users find your product easy, enjoyable, and worth returning to. Good UI/UX directly impacts conversion rates, retention, and customer satisfaction.",
    },
    {
      question: "What is your UI/UX design process?",
      answer:
        "We follow a research-first, iterative process: Discovery & Research → User Personas & Journey Mapping → Information Architecture → Wireframing → Visual Design → Interactive Prototyping → Usability Testing → Handoff. We work in close collaboration with your team at every step.",
    },
    {
      question: "Do you design for both web and mobile?",
      answer:
        "Yes. We design responsive web interfaces, native iOS apps, native Android apps, and cross-platform mobile apps. Each design is tailored to the platform's guidelines (Apple HIG for iOS, Material Design for Android) while maintaining your brand identity.",
    },
    {
      question: "What tools do you use for design and prototyping?",
      answer:
        "Our primary tools are Figma for design and prototyping, FigJam for workshops and user journey mapping, and Maze or UserTesting for usability research. We deliver fully annotated design files and developer-ready component libraries.",
    },
    {
      question: "Can you redesign an existing product?",
      answer:
        "Absolutely. We start with a UX audit of your current product—identifying pain points, drop-off points, and accessibility issues—then propose a phased redesign roadmap that minimises disruption while improving the experience significantly.",
    },
  ];

  const processSteps = [
    { num: "01", icon: Search, title: "Discovery & Research", desc: "Stakeholder interviews, competitor analysis, and user research to define the problem space." },
    { num: "02", icon: Users, title: "User Personas & Journey Maps", desc: "Build empathy-driven personas and map the end-to-end user journey to surface pain points." },
    { num: "03", icon: Layers, title: "Information Architecture", desc: "Define the content hierarchy, navigation structure, and interaction model." },
    { num: "04", icon: PencilRuler, title: "Wireframing", desc: "Low-fidelity wireframes to validate layout and flow before committing to visual design." },
    { num: "05", icon: Palette, title: "Visual Design", desc: "High-fidelity UI with your brand system—colours, typography, components, and motion." },
    { num: "06", icon: FlaskConical, title: "Prototype & Test", desc: "Interactive prototypes tested with real users to validate before development handoff." },
  ];

  const testimonials = [
    {
      quote: "PSV redesigned our SaaS dashboard and reduced support tickets by 35%. The research phase alone surfaced issues we'd been ignoring for two years.",
      name: "Meera K.",
      role: "Product Manager",
      company: "DataHive",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
      quote: "Their Figma handoff was the cleanest I've ever received. Every component annotated, every state covered. Development went faster than any previous project.",
      name: "James R.",
      role: "Engineering Lead",
      company: "FlowStack",
      avatar: "https://i.pravatar.cc/150?img=52",
    },
  ];

  const blogPosts = [
    {
      tag: "UX Design",
      title: "The 10 UX Heuristics Every Product Team Should Know",
      snippet: "Nielsen's 10 usability heuristics remain the gold standard for evaluating interface quality.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Sep 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "UI Design",
      title: "Design Tokens: The Foundation of a Scalable Design System",
      snippet: "How to structure colour, spacing, and typography tokens that scale across products.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Aug 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Research",
      title: "5 User Research Methods That Fit Any Budget",
      snippet: "From guerrilla testing to moderated sessions—how to pick the right method for your stage.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop",
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
        <span className="font-semibold text-slate-900">UI/UX Design &amp; Development Services</span>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Other Services</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              UI/UX Design &amp; Development Services
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We create user interfaces and experiences that are intuitive, beautiful, and built around
              real user needs. From research and wireframing to pixel-perfect visual design and
              developer-ready prototypes, we deliver design that drives results.
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

          {/* Right — design mockup visual */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_4px_20px_rgba(2,6,23,0.08)]">
            {/* Mock browser frame */}
            <div className="rounded-xl bg-slate-100 p-3">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop"
                  alt="UI/UX design work"
                  fill
                  className="object-cover opacity-50 mix-blend-overlay"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <Palette className="h-10 w-10 opacity-80" />
                  <span className="mt-2 text-sm font-semibold tracking-wide">Design System</span>
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: "Screens", value: "200+" },
                { label: "Components", value: "500+" },
                { label: "Satisfaction", value: "98%" },
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
          {["DataHive Dashboard", "FlowStack SaaS", "NovaCorp Site", "MediBook App", "EduKids Platform", "ShopSnap Mobile"].map((name, i, arr) => (
            <span key={name} className="inline-flex items-center gap-4">
              <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">{name}</Link>
              {i < arr.length - 1 && <span className="text-slate-300">|</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ─── UI/UX DESIGN SERVICES WE PROVIDE ───────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            UI/UX Design Services We Provide{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A full spectrum of design services—from early-stage research to design system delivery—
            tailored to your product stage and business goals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Search,
              title: "User Research & UX Audit",
              desc: "In-depth interviews, surveys, heuristic evaluations, and analytics reviews to understand your users and find friction points.",
            },
            {
              icon: PencilRuler,
              title: "UX Strategy & Wireframing",
              desc: "Clickable low-fidelity wireframes and journey maps that define structure, navigation, and interaction flows before visual design.",
            },
            {
              icon: Palette,
              title: "UI Visual Design",
              desc: "High-fidelity screens with cohesive visual language—colours, typography, icons, spacing, and motion design.",
            },
            {
              icon: MousePointer2,
              title: "Interactive Prototyping",
              desc: "Figma prototypes that feel like real products—used for stakeholder demos, user testing, and developer alignment.",
            },
            {
              icon: Accessibility,
              title: "Design System Creation",
              desc: "Scalable component libraries and design tokens that keep your product consistent across every screen and team.",
            },
            {
              icon: MonitorSmartphone,
              title: "Responsive & Mobile Design",
              desc: "Designs that look and feel perfect on every device—desktop, tablet, and native iOS/Android interfaces.",
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

      {/* ─── WHY BEGIN WITH US ────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why to Begin with Us for UI/UX Designing Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We combine analytical rigour with creative craft to deliver designs that users love and
            businesses can measure.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Users, title: "User-Centred Approach", desc: "Every design decision is grounded in research and validated with real users before development starts." },
            { icon: Lightbulb, title: "Research-First Process", desc: "We invest in understanding the problem deeply before proposing solutions—this saves rework and speeds delivery." },
            { icon: Award, title: "Pixel-Perfect Execution", desc: "Our designs are not just beautiful—they're implementation-ready with annotated specs and component libraries." },
            { icon: Clock, title: "Fast Turnaround", desc: "Streamlined processes and tooling (Figma, FigJam) mean designs move quickly without sacrificing quality." },
            { icon: Handshake, title: "Collaborative Partnership", desc: "We work as an extension of your team—sharing progress daily, incorporating feedback in real time." },
            { icon: TrendingUp, title: "Measurable Impact", desc: "We define design KPIs upfront and measure success by real outcomes—conversion, task completion, and NPS." },
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
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=480&fit=crop"
                alt="DataHive Dashboard"
                fill
                className="object-cover opacity-40 mix-blend-overlay"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-sm">
                  <div className="relative h-36">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop"
                      alt="Dashboard UI"
                      fill
                      className="object-cover"
                      sizes="224px"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">SaaS Dashboard</span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">DataHive – Analytics Dashboard Redesign</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Full UX audit and redesign of a B2B analytics platform. Reduced average time-on-task
                by 40%, increased trial-to-paid conversion by 28%, and cut support tickets by 35%
                within the first quarter post-launch.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Figma · User Research · Design System · Usability Testing</p>
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
                      src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=350&fit=crop"
                      alt="Mobile app design"
                      fill
                      className="object-cover"
                      sizes="224px"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">Mobile App</span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">MediBook – Healthcare App Design</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                End-to-end UX/UI design for a patient-facing healthcare app covering appointment
                booking, video consultations, and medical records. Designed to WCAG AA accessibility
                standards with a 4.8-star App Store rating on launch.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Figma · Accessibility · iOS & Android Design · Prototyping</p>
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
          Transform Your Vision with Expertise
        </p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Let&apos;s Build the Perfect UI/UX Bridge
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Share your product idea and we&apos;ll design an experience your users will love and your team
          can build with confidence.
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
            We design for products across every vertical—bringing domain empathy and industry-specific
            UX knowledge to every engagement.
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

      {/* ─── KEY PRINCIPLES ──────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Key Principles for UI/UX in Business Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            The foundational design principles we apply to every engagement.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Eye, title: "Clarity Over Complexity", desc: "Remove cognitive load. Every screen should communicate one primary action clearly." },
            { icon: Accessibility, title: "Accessibility by Default", desc: "WCAG AA compliance, sufficient colour contrast, keyboard navigation, and screen-reader support built in from day one." },
            { icon: Zap, title: "Performance-Aware Design", desc: "Designs optimised for fast load times—lean assets, efficient animations, and lazy-load-friendly layouts." },
            { icon: Layers, title: "Scalable Design Systems", desc: "Atomic component libraries that scale with your product and keep every screen consistent." },
            { icon: LayoutDashboard, title: "Data-Driven Iteration", desc: "We use analytics and usability data to continuously improve designs after launch." },
            { icon: Shield, title: "Trust & Security Signalling", desc: "Design patterns that communicate security, reliability, and brand trust to users at every touchpoint." },
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

      {/* ─── OUR UI/UX DESIGNING PROCESS ─────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our UI/UX Designing Process{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A structured, proven approach from first brief to developer-ready design.
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
            Why Choose Us for UI/UX Designing Services?{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We don&apos;t just make things look good—we make them work better for the people who use them.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Briefcase, title: "Full-Service Design", desc: "Research, UX, UI, prototyping, testing, and handoff—all under one roof with no handoff gaps." },
            { icon: Users, title: "Dedicated Design Team", desc: "A senior designer, UX researcher, and design system specialist assigned to your project." },
            { icon: Rocket, title: "Rapid Delivery", desc: "First wireframes within the first week. Visual designs in the third. Prototype by end of week four." },
            { icon: Settings, title: "Developer Collaboration", desc: "We work alongside your engineering team to ensure every design translates perfectly into code." },
            { icon: Award, title: "Proven Track Record", desc: "60+ products designed, with an average of 35% improvement in key UX metrics post-launch." },
            { icon: Lock, title: "IP Protection", desc: "All design files, assets, and documentation are fully owned by you from day one." },
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

      {/* ─── OUR PORTFOLIO ────────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Portfolio for UI/UX Designing Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A snapshot of the work we&apos;ve done across industries and product types.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&fit=crop", label: "Analytics Dashboard" },
            { src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=360&fit=crop", label: "Mobile Fitness App" },
            { src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=360&fit=crop", label: "Design System" },
            { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=360&fit=crop", label: "Healthcare Portal" },
            { src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=360&fit=crop", label: "E-commerce Redesign" },
            { src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=360&fit=crop", label: "SaaS Onboarding" },
          ].map(({ src, label }) => (
            <div key={label} className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="relative h-48">
                <Image src={src} alt={label} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-4">
                <span className="font-semibold text-slate-900">{label}</span>
              </div>
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
            Product leaders who transformed their user experience with PSV Enterprises.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
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
            Common questions about UI/UX design, our process, and deliverables.
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
              Tell us about your product and we&apos;ll design an experience your users will love.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "4+", label: "Years of Experience" },
                { icon: Users, value: "60+", label: "Products Designed" },
                { icon: BarChart3, value: "6+", label: "Countries Served" },
                { icon: CheckCircle2, value: "35+", label: "Happy Clients" },
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
              <ContactForm source="ui-ux-design" submitLabel="SEND MESSAGE" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
