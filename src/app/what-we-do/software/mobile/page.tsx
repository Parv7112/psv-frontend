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
  ShieldCheck,
  Zap,
  Users,
  Rocket,
  Code2,
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
  Smartphone,
  Tablet,
  Globe,
  Bell,
  Landmark,
  Stethoscope,
  GraduationCap,
  ShoppingCart,
  Truck,
  Gamepad2,
  RefreshCw,
  MonitorSmartphone,
  CloudUpload,
} from "lucide-react";

const accentDot = (
  <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />
);

export default function MobilePage() {
  const [relatedTab, setRelatedTab] = useState<"all" | "software" | "other">("all");

  const relatedServices = [
    { title: "Custom Software Development", href: "/what-we-do/software/custom", category: "software" as const },
    { title: "Web Application Development", href: "/what-we-do/software/web-app", category: "software" as const },
    { title: "ERP Development", href: "/what-we-do/software/erp", category: "software" as const },
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
      question: "What is mobile app development?",
      answer:
        "Mobile app development is the process of designing and building applications for iOS and Android devices. It covers native app development (Swift/Kotlin), cross-platform development (React Native/Flutter), UI/UX design, backend integration, and App Store/Play Store deployment.",
    },
    {
      question: "Should I build a native app or a cross-platform app?",
      answer:
        "Native apps (Swift for iOS, Kotlin for Android) offer the best performance and platform-specific UX. Cross-platform frameworks like React Native and Flutter share up to 95% of code and are ideal when you need to ship on both platforms quickly with a shared codebase. We'll help you choose based on your budget, timeline, and performance requirements.",
    },
    {
      question: "How long does mobile app development take?",
      answer:
        "A focused MVP mobile app typically takes 10–16 weeks. A full-featured app with backend services, third-party integrations, and both iOS/Android builds can take 4–8 months. We deliver in iterative sprints so you can test and provide feedback throughout.",
    },
    {
      question: "How do you handle App Store and Google Play submission?",
      answer:
        "We handle the full submission process—creating your developer accounts if needed, preparing screenshots, metadata, and compliance documentation, and managing the review process for both the Apple App Store and Google Play Store.",
    },
    {
      question: "Do you provide post-launch support and updates?",
      answer:
        "Yes. We provide SLA-backed maintenance plans covering OS updates, bug fixes, performance monitoring, and feature additions. Mobile OS updates (iOS/Android) can break apps, so ongoing maintenance is critical.",
    },
  ];

  const processSteps = [
    { num: "01", icon: MessageSquare, title: "Discovery & Strategy", desc: "Define your target users, core features, monetisation model, and technical architecture." },
    { num: "02", icon: PencilRuler, title: "UI/UX Design", desc: "Platform-native designs with interactive prototypes reviewed and validated before development." },
    { num: "03", icon: Code2, title: "App Development", desc: "Iterative builds across iOS and Android with regular demo builds delivered for testing." },
    { num: "04", icon: Settings, title: "Backend & API Integration", desc: "Secure, scalable APIs, push notifications, auth, and third-party service integrations." },
    { num: "05", icon: Search, title: "QA & Testing", desc: "Functional, performance, and device-compatibility testing across real devices and simulators." },
    { num: "06", icon: Rocket, title: "Launch & Support", desc: "App Store / Play Store submission, production monitoring, and post-launch maintenance." },
  ];

  const testimonials = [
    {
      quote: "PSV delivered our iOS and Android apps on time and within budget. The UX is intuitive and our users gave it 4.8 stars on launch week.",
      name: "Arya S.",
      role: "Founder",
      company: "FitTrack",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      quote: "We needed a React Native app fast. PSV built and shipped it in 10 weeks with clean code we can maintain ourselves. Outstanding work.",
      name: "Chris M.",
      role: "CTO",
      company: "LogiMove",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
  ];

  const blogPosts = [
    {
      tag: "Mobile Dev",
      title: "React Native vs Flutter: Choosing the Right Cross-Platform Framework",
      snippet: "A practical comparison of the two leading cross-platform frameworks for 2024.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Aug 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "iOS",
      title: "SwiftUI vs UIKit: What Should You Use for Your Next iOS App?",
      snippet: "How to decide between Apple's two UI frameworks for your next native iOS project.",
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Jul 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "UX Design",
      title: "Mobile UX Patterns That Drive App Retention and Engagement",
      snippet: "The design decisions that separate apps users return to from apps they delete.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=240&fit=crop",
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
        <span className="font-semibold text-slate-900">Mobile App Development Company</span>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Software Development
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Mobile App Development Company
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We build high-performance iOS and Android apps that users love. From consumer apps and
              enterprise mobility solutions to React Native MVPs and cross-platform platforms, we
              deliver polished, production-ready mobile products on time.
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

          {/* Phone mockups visual */}
          <div className="flex items-end justify-center gap-4">
            {/* Tall phone mockup */}
            <div className="relative w-36 overflow-hidden rounded-[2rem] border-4 border-slate-800 bg-slate-800 shadow-2xl">
              <div className="absolute left-1/2 top-0 h-5 w-16 -translate-x-1/2 rounded-b-xl bg-slate-800 z-10" />
              <div className="relative h-[280px] overflow-hidden rounded-[1.6rem] bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop"
                  alt="Mobile app"
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>
            </div>
            {/* Slightly shorter second phone */}
            <div className="relative mb-6 w-32 overflow-hidden rounded-[2rem] border-4 border-slate-700 bg-slate-700 shadow-xl">
              <div className="absolute left-1/2 top-0 h-4 w-12 -translate-x-1/2 rounded-b-xl bg-slate-700 z-10" />
              <div className="relative h-[240px] overflow-hidden rounded-[1.6rem] bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=500&fit=crop"
                  alt="Mobile app UI"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
            </div>
            {/* Stats card */}
            <div className="mb-2 flex flex-col gap-2">
              {[
                { icon: BarChart3, label: "App Rating", value: "4.9★" },
                { icon: Users, label: "Users", value: "1M+" },
                { icon: Globe, label: "Platforms", value: "iOS+Android" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-slate-500" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{value}</div>
                      <div className="text-xs text-slate-500">{label}</div>
                    </div>
                  </div>
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
          {["FitTrack", "LogiMove", "MediBook", "ShopSnap", "EduKids", "RideNow"].map((name, i, arr) => (
            <span key={name} className="inline-flex items-center gap-4">
              <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">{name}</Link>
              {i < arr.length - 1 && <span className="text-slate-300">|</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ─── MOBILE APP DEVELOPMENT SERVICES WE PROVIDE ─────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Mobile App Development Services We Provide{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Whether you need a native iOS/Android app, a cross-platform solution, or an enterprise
            mobility platform, we have the skills and experience to deliver it.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Smartphone,
              title: "iOS App Development",
              desc: "Native Swift/SwiftUI apps built to Apple's Human Interface Guidelines—fast, beautiful, and App Store ready.",
            },
            {
              icon: Tablet,
              title: "Android App Development",
              desc: "Native Kotlin apps with Material Design 3, optimised across the Android device ecosystem.",
            },
            {
              icon: MonitorSmartphone,
              title: "React Native Apps",
              desc: "Shared codebase for iOS and Android—faster to build and maintain while delivering near-native performance.",
            },
            {
              icon: RefreshCw,
              title: "Cross-Platform (Flutter)",
              desc: "Dart-powered apps with a single codebase and pixel-perfect UI across iOS, Android, and web.",
            },
            {
              icon: Bell,
              title: "Enterprise Mobile Apps",
              desc: "Secure, MDM-compatible apps for field teams, logistics, and internal operations with offline support.",
            },
            {
              icon: CloudUpload,
              title: "App Modernisation",
              desc: "Redesign and re-engineer legacy apps for modern OS versions, new form factors, and improved performance.",
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

      {/* ─── FEATURED PROJECTS – 3 large cards with device frames ── */}
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
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=480&fit=crop"
                alt="FitTrack App"
                fill
                className="object-cover opacity-30 mix-blend-overlay"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Phone mockup centred on gradient */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 overflow-hidden rounded-[1.8rem] border-4 border-white/30 bg-white/10 shadow-2xl backdrop-blur-sm">
                  <div className="relative h-56">
                    <Image
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop"
                      alt="FitTrack screen"
                      fill
                      className="object-cover rounded-[1.4rem]"
                      sizes="128px"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Health & Fitness
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">FitTrack – Fitness & Wellness App</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Cross-platform fitness app with workout tracking, nutrition logging, wearable
                integrations, and a social challenges feature. 4.9 stars on the App Store with 500K+
                downloads in the first quarter.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">React Native · Node.js · Firebase · HealthKit / Google Fit</p>
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
                <div className="w-32 overflow-hidden rounded-[1.8rem] border-4 border-white/30 bg-white/10 shadow-2xl backdrop-blur-sm">
                  <div className="relative h-56">
                    <Image
                      src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=600&fit=crop"
                      alt="LogiMove screen"
                      fill
                      className="object-cover rounded-[1.4rem]"
                      sizes="128px"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Logistics
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">LogiMove – Delivery Driver App</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Native Android field operations app for a last-mile delivery company. Features include
                real-time route optimisation, barcode scanning, proof-of-delivery capture, and offline
                sync. Reduced delivery time by 22%.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Kotlin (Android) · REST APIs · Google Maps SDK · SQLite offline</p>
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

          {/* Card 3 */}
          <article className="grid overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.08)] lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-violet-600 to-purple-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 overflow-hidden rounded-[1.8rem] border-4 border-white/30 bg-white/10 shadow-2xl backdrop-blur-sm">
                  <div className="relative h-56">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=600&fit=crop"
                      alt="MediBook screen"
                      fill
                      className="object-cover rounded-[1.4rem]"
                      sizes="128px"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Healthcare
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">MediBook – Doctor Appointment App</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                iOS and Android patient-facing app for booking appointments, video consultations, and
                viewing medical records. HIPAA-compliant with end-to-end encrypted messaging and e-prescriptions.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Flutter · Django · WebRTC · HIPAA-compliant cloud</p>
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
            We build mobile apps for businesses across every industry—from healthcare and logistics to
            retail, education, and entertainment.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {[
            { icon: Stethoscope, name: "Healthcare" },
            { icon: ShoppingCart, name: "Retail" },
            { icon: GraduationCap, name: "Education" },
            { icon: Truck, name: "Logistics" },
            { icon: Landmark, name: "Finance" },
            { icon: Gamepad2, name: "Gaming" },
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
          Position is Ready
        </p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Let&apos;s Build Your Dream Mobile App Together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Tell us your app idea and we&apos;ll help you design, build, and launch it on the App Store and
          Google Play.
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

      {/* ─── OUR MOBILE APP DEVELOPMENT PROCESS ─────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Mobile App Development Process{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A structured, iterative process that takes you from idea to App Store in confident steps.
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
            Why Developers Choose Us for Mobile App Development{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We combine deep mobile engineering expertise with a product mindset to ship apps your users
            love and your business can scale.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Handshake, title: "Full-Cycle Development", desc: "Strategy, design, engineering, QA, launch, and post-launch support—all under one roof." },
            { icon: Lightbulb, title: "User-Centred Design", desc: "We design for the end user first. Every interaction is validated with prototypes before development starts." },
            { icon: Clock, title: "On-Time Delivery", desc: "Transparent planning, realistic estimates, and sprint-based delivery you can track in real time." },
            { icon: Award, title: "Platform Expertise", desc: "Native iOS (Swift), native Android (Kotlin), React Native, and Flutter engineers on staff." },
            { icon: Users, title: "Post-Launch Growth", desc: "App analytics, crash monitoring, and feature roadmaps to continuously improve after go-live." },
            { icon: Shield, title: "Security & Compliance", desc: "GDPR, HIPAA, and PCI-DSS compliance, encrypted storage, and secure API design by default." },
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
            Key Benefits of Investing in Mobile App Development{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A well-built mobile app strengthens customer relationships, opens new revenue channels, and
            gives your business a competitive edge.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: TrendingUp,
              title: "Increased Customer Engagement",
              desc: "Push notifications, personalised experiences, and seamless UX drive daily active usage and long-term retention.",
            },
            {
              icon: Lock,
              title: "New Revenue Streams",
              desc: "In-app purchases, subscriptions, and digital services turn your mobile app into a direct revenue channel.",
            },
            {
              icon: Award,
              title: "Stronger Brand Loyalty",
              desc: "A polished, fast app builds trust and keeps your brand at the top of users' minds and home screens.",
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
            Founders and product leaders who shipped their mobile apps with PSV Enterprises.
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

      {/* ─── LOGO CLOUD / LATEST WORK ────────────────────────────── */}
      <section className="space-y-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
          Get Help from Our Latest News
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            Common questions about mobile app development, platforms, and timelines.
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
              Share your app idea and we&apos;ll help you build a mobile experience your users will love.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "4+", label: "Years of Experience" },
                { icon: Users, value: "70+", label: "Apps Delivered" },
                { icon: BarChart3, value: "6+", label: "Countries Served" },
                { icon: CheckCircle2, value: "30+", label: "Happy Clients" },
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
              <ContactForm source="mobile-app-development" submitLabel="SEND MESSAGE" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
