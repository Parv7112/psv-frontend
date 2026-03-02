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
  Code2,
  DollarSign,
  Handshake,
  Layers,
  Lightbulb,
  Lock,
  MessageSquare,
  MonitorCheck,
  Rocket,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";

const accentDot = (
  <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />
);

type RelatedTab = "all" | "engagement" | "software" | "other";

export default function StaffAugmentationPage() {
  const [relatedTab, setRelatedTab] = useState<RelatedTab>("all");

  const relatedServices = useMemo(
    () => [
      {
        title: "Staff Augmentation",
        href: "/what-we-do/engagement/staff-augmentation",
        category: "engagement" as const,
      },
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
      question: "What is staff augmentation?",
      answer:
        "Staff augmentation is a flexible engagement model where we add vetted engineers to your existing team. You retain full control of delivery and priorities while we provide the right talent to fill gaps in skills, capacity, or speed.",
    },
    {
      question: "How quickly can you provide developers?",
      answer:
        "Typically 3–10 business days depending on role and seniority. For common stacks (React, Node.js, React Native) we can share profiles within 48–72 hours.",
    },
    {
      question: "Can I interview and select developers?",
      answer:
        "Yes. You interview every candidate and only start with developers you approve—just like hiring internally, but faster.",
    },
    {
      question: "Do you work in my time zone?",
      answer:
        "We structure overlap hours to match your team. Most clients get 4–6 hours of daily real-time overlap and asynchronous collaboration outside that window.",
    },
    {
      question: "What if a developer isn’t a fit?",
      answer:
        "If a resource isn’t working out, we replace them quickly. Our goal is long-term continuity with minimal disruption to your team.",
    },
  ];

  const blogPosts = [
    {
      tag: "Hiring",
      title: "Staff Augmentation vs Outsourcing: Which Model Fits Your Roadmap?",
      snippet: "A decision framework for speed, control, cost, and delivery accountability.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Sep 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Team Scaling",
      title: "How to Ramp Up Engineering Capacity Without Slowing Down",
      snippet: "Onboarding checklists, pairing, and tooling that keep your team productive while scaling.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Aug 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Process",
      title: "A Playbook for Working With Augmented Engineers",
      snippet: "How to manage communication, quality, and delivery with mixed in-house + augmented teams.",
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
        <span className="font-semibold text-slate-900">Staff Augmentation</span>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Engagement Models
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Staff Augmentation Services for Software Teams
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Extend your team with vetted engineers—fast. Our staff augmentation model helps you fill
              critical skill gaps, scale delivery capacity, and keep your roadmap moving without the
              delays of traditional hiring.
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
                alt="Team augmentation"
                fill
                className="object-cover opacity-30 mix-blend-overlay"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
                <Users className="h-14 w-14 opacity-80" />
                <span className="text-sm font-semibold tracking-wide">On-demand Talent</span>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: "Profiles", value: "48–72h" },
                { label: "Onboarding", value: "1–2w" },
                { label: "Retention", value: "Long-term" },
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

      {/* ─── WHY BEGIN ───────────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why to Begin with Us for Staff Augmentation Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Add capacity without adding complexity. We help you scale engineering output while keeping
            quality and culture intact.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Search,
              title: "Seamless Staffing",
              desc: "Vetted talent matching your stack and seniority—shared fast with transparent screening notes.",
            },
            {
              icon: Layers,
              title: "Flexibility and Support",
              desc: "Scale up or down as your roadmap evolves, backed by account support and fast replacement if needed.",
            },
            {
              icon: Briefcase,
              title: "Focus on Core Competencies",
              desc: "Your in-house team stays focused on critical work while augmented engineers handle targeted initiatives.",
            },
            {
              icon: ShieldCheck,
              title: "Domain Expertise",
              desc: "Engineers with experience in SaaS, fintech, healthcare, logistics, and e-commerce product delivery.",
            },
            {
              icon: Clock,
              title: "Faster Hiring Cycles",
              desc: "Skip lengthy recruitment cycles—interview curated profiles and start within weeks.",
            },
            {
              icon: Lock,
              title: "Security & IP Protection",
              desc: "NDA + IP assignment, access controls, and secure delivery practices aligned to your standards.",
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

      {/* ─── SERVICES GRID ───────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Staff Augmentation Services We Provide{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Choose individual specialists or small pods to join your team and deliver within your
            process.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "MERN & Full-Stack Developers",
              desc: "React/Next.js + Node/Express + Mongo/Postgres engineers to ship features end-to-end.",
            },
            {
              icon: Layers,
              title: "Frontend Developers",
              desc: "React, Next.js, Vue—pixel-perfect UI with performance-first implementation.",
            },
            {
              icon: Settings,
              title: "Backend & API Engineers",
              desc: "Node.js, Python, Java—secure APIs, data modeling, integrations, and system design.",
            },
            {
              icon: MonitorCheck,
              title: "QA & Automation",
              desc: "Manual + automated testing, regression suites, and release confidence improvements.",
            },
            {
              icon: Shield,
              title: "DevOps Engineers",
              desc: "CI/CD, monitoring, infra-as-code, and cloud cost optimisation for reliable delivery.",
            },
            {
              icon: Lightbulb,
              title: "AI/ML Engineers",
              desc: "RAG, LLM apps, MLOps, and ML pipelines for production-ready AI features.",
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

      {/* ─── COMPARISON TABLE ───────────────────────────────────── */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Learn How Staff Augmentation Will Drive Your Business{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Staff augmentation is ideal when you want to keep control of delivery while scaling team
            capacity quickly.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.06)]">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50 text-left text-sm font-semibold text-slate-700">
              <div className="px-6 py-4">Criteria</div>
              <div className="px-6 py-4">Freelancers</div>
              <div className="px-6 py-4 bg-lime-50/60 text-slate-900">Staff Augmentation</div>
              <div className="px-6 py-4">Outsourcing</div>
            </div>
            {[
              {
                label: "You manage priorities",
                f: true,
                s: true,
                o: false,
              },
              {
                label: "Fast team scaling",
                f: false,
                s: true,
                o: true,
              },
              {
                label: "Quality & governance",
                f: false,
                s: true,
                o: true,
              },
              {
                label: "Cost predictability",
                f: false,
                s: true,
                o: true,
              },
              {
                label: "Long-term continuity",
                f: false,
                s: true,
                o: true,
              },
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-4 border-t border-slate-200 text-sm">
                <div className="px-6 py-4 font-medium text-slate-900">{row.label}</div>
                <div className="px-6 py-4">{row.f ? "✓" : "—"}</div>
                <div className="px-6 py-4 bg-lime-50/30">{row.s ? "✓" : "—"}</div>
                <div className="px-6 py-4">{row.o ? "✓" : "—"}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DARK CTA BANNER ─────────────────────────────────────── */}
      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
          Scale Your Team On Demand
        </p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Add Engineers Without Slowing Delivery
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Get vetted developers ready to integrate into your codebase, tooling, and sprint cadence.
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

      {/* ─── PROCESS ─────────────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Staff Augmentation Service Process{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            From first call to fully onboarded engineers in a structured, predictable flow.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              num: "01",
              icon: MessageSquare,
              title: "Requirements Call",
              desc: "Define roles, stack, seniority, overlap hours, and success criteria.",
            },
            {
              num: "02",
              icon: Search,
              title: "Profile Shortlist",
              desc: "We share vetted candidates with technical notes and availability.",
            },
            {
              num: "03",
              icon: Users,
              title: "Interviews",
              desc: "You interview and approve the engineers you want on your team.",
            },
            {
              num: "04",
              icon: Settings,
              title: "Onboarding",
              desc: "Access, environments, conventions, and pairing so the engineer is productive quickly.",
            },
            {
              num: "05",
              icon: ShieldCheck,
              title: "Quality Alignment",
              desc: "Code review expectations, testing strategy, and delivery rituals aligned to your standards.",
            },
            {
              num: "06",
              icon: Rocket,
              title: "Scale & Support",
              desc: "Scale capacity as needed with ongoing support and fast replacements if required.",
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

      {/* ─── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What Our Clients Say{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Teams that scaled engineering capacity with PSV staff augmentation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "We needed two React engineers fast. PSV shared profiles in 48 hours and both engineers were productive in their first sprint.",
              name: "Anita S.",
              role: "Engineering Manager",
              company: "FlowStack",
              avatar: "https://i.pravatar.cc/150?img=31",
            },
            {
              quote:
                "The augmented backend engineer integrated smoothly into our process and improved our API performance by 30% within the first month.",
              name: "Mark T.",
              role: "CTO",
              company: "DataHive",
              avatar: "https://i.pravatar.cc/150?img=45",
            },
            {
              quote:
                "Great communication, great code quality, and flexible scaling. We ramped from 1 to 4 engineers over a quarter with no disruption.",
              name: "Rohit P.",
              role: "Product Lead",
              company: "NexaRetail",
              avatar: "https://i.pravatar.cc/150?img=57",
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
            Common questions about staff augmentation, onboarding, and collaboration.
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
              Tell us what roles you need and we’ll share vetted profiles quickly—so you can start
              shipping without delays.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "4+", label: "Years of Experience" },
                { icon: Users, value: "100+", label: "Engineers Available" },
                { icon: BarChart3, value: "10+", label: "Countries Served" },
                { icon: CheckCircle2, value: "95%", label: "On-Time Delivery Support" },
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
              <ContactForm source="staff-augmentation" submitLabel="SEND MESSAGE" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
