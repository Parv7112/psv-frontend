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
  Search,
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
  Shield,
  Monitor,
  Palette,
  MousePointer,
  FileText,
  Landmark,
  Stethoscope,
  GraduationCap,
  ShoppingCart,
  Truck,
  Hotel,
} from "lucide-react";

const accentDot = (
  <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />
);

export default function WebsitePage() {
  const [relatedTab, setRelatedTab] = useState<"all" | "software" | "other">("all");

  const relatedServices = [
    { title: "Custom Software Development", href: "/what-we-do/software/custom", category: "software" as const },
    { title: "Web Application Development", href: "/what-we-do/software/web-app", category: "software" as const },
    { title: "ERP Development", href: "/what-we-do/software/erp", category: "software" as const },
    { title: "Mobile Application Development", href: "/what-we-do/software/mobile", category: "software" as const },
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
      question: "What is website development?",
      answer:
        "Website development covers the design, build, and deployment of websites—from simple brochure sites and landing pages to complex multi-language portals and headless CMS platforms. It includes everything from UI design and frontend coding to hosting, SEO, and performance optimisation.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "A clean landing page or brochure website typically takes 3–6 weeks. A larger corporate site with a CMS, multiple sections, and integrations usually takes 6–12 weeks. Custom portal sites can run longer depending on functionality.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes—every website we build is fully responsive. We design and test across phones, tablets, and desktops to ensure a consistent, high-quality experience on all screen sizes.",
    },
    {
      question: "Do you handle SEO as part of website development?",
      answer:
        "We implement technical SEO best practices including semantic HTML, metadata, structured data, sitemap, page speed optimisation, and Core Web Vitals compliance. Ongoing content SEO can be handled by your team or by our content partners.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Absolutely. We handle full redesigns—improving visual design, UX, performance, and CMS—while preserving SEO equity and minimising disruption to your existing traffic.",
    },
  ];

  const processSteps = [
    { num: "01", icon: MessageSquare, title: "Discovery & Goals", desc: "Define your audience, key objectives, sitemap, and success metrics before design begins." },
    { num: "02", icon: PencilRuler, title: "Design & Wireframing", desc: "Page layouts, brand application, and interactive prototypes reviewed and approved before dev." },
    { num: "03", icon: Code2, title: "Frontend Development", desc: "Pixel-perfect, responsive implementation built with Next.js or your preferred CMS." },
    { num: "04", icon: Settings, title: "CMS Integration", desc: "Connect a headless CMS (Contentful, Sanity, Strapi) or traditional CMS so your team can update content." },
    { num: "05", icon: Search, title: "QA & Performance", desc: "Cross-browser testing, Core Web Vitals, accessibility audit, and SEO review before launch." },
    { num: "06", icon: Rocket, title: "Launch & Handover", desc: "Go-live, domain configuration, analytics setup, and team training to manage the site." },
  ];

  const testimonials = [
    {
      quote: "PSV redesigned our entire corporate website in 5 weeks. Traffic increased 40% within 3 months of launch and our bounce rate dropped significantly.",
      name: "Nina A.",
      role: "Marketing Director",
      company: "B2B Tech Co.",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
      quote: "The team delivered a beautifully crafted website that perfectly represents our brand. The CMS makes it easy for our team to update content without any technical help.",
      name: "Tom R.",
      role: "CEO",
      company: "Professional Services",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    {
      quote: "Fast, stunning, and perfectly SEO-optimised. We started ranking for key terms within 6 weeks of launch. Brilliant work.",
      name: "Sana K.",
      role: "Head of Digital",
      company: "eCommerce Brand",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
  ];

  const blogPosts = [
    {
      tag: "Website",
      title: "Why Your Business Website Is Your Most Valuable Digital Asset",
      snippet: "How a well-built website generates leads, builds trust, and sets you apart from competitors.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Aug 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "SEO",
      title: "Core Web Vitals: Why They Matter for Your Website's Google Ranking",
      snippet: "LCP, CLS, INP—what they mean, how to measure them, and how to fix them.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=240&fit=crop",
      author: "PSV Team",
      date: "Jul 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Design",
      title: "Headless CMS vs Traditional CMS: Which Is Right for Your Website?",
      snippet: "Comparing Contentful, Sanity, WordPress, and Strapi to help you choose the best CMS.",
      image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=240&fit=crop",
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
        <span className="font-semibold text-slate-900">Website Development Company</span>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Software Development
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Website Development Company
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We design and develop websites that are fast, beautiful, and built to convert. From
              corporate brochure sites and landing pages to CMS-powered portals and eCommerce storefronts,
              we craft digital presences that reflect your brand and drive measurable results.
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

          {/* Website browser mockup */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(2,6,23,0.08)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-slate-400 ring-1 ring-slate-200">
                https://yourwebsite.com
              </div>
            </div>
            {/* Hero section mockup */}
            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-indigo-600 to-sky-500">
              <Image
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop"
                alt="Website preview"
                fill
                className="object-cover opacity-40 mix-blend-overlay"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                <div className="h-4 w-40 rounded-full bg-white/50" />
                <div className="h-3 w-56 rounded-full bg-white/30" />
                <div className="mt-2 h-8 w-28 rounded-lg bg-white/80" />
              </div>
            </div>
            {/* Metrics row */}
            <div className="grid grid-cols-1 gap-px bg-slate-100 sm:grid-cols-3">
              {[
                { label: "Page Speed", value: "98/100" },
                { label: "SEO Score", value: "100/100" },
                { label: "Accessibility", value: "AAA" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white p-3 text-center">
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
          {["NovaCorp Site", "LuxeStay Hotels", "GreenLeaf Organics", "TalentFirst", "MedCare Clinic", "UrbanEstate"].map((name, i, arr) => (
            <span key={name} className="inline-flex items-center gap-4">
              <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">{name}</Link>
              {i < arr.length - 1 && <span className="text-slate-300">|</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ─── WEBSITE DEVELOPMENT SERVICES FOR THE PRODUCT ───────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Website Development Services for the Product{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Whether you need a stunning marketing site, a content-rich portal, or a high-converting
            landing page, we have the design and engineering skills to deliver it.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Palette,
              title: "Corporate & Brand Websites",
              items: [
                "Brand-aligned UI design",
                "Multi-page responsive layouts",
                "Headless or traditional CMS",
                "Lead capture & contact forms",
              ],
            },
            {
              icon: MousePointer,
              title: "Landing Pages & Funnels",
              items: [
                "Conversion-optimised design",
                "A/B testing ready structure",
                "Fast load & Core Web Vitals",
                "Analytics & heatmap integration",
              ],
            },
            {
              icon: FileText,
              title: "Portals & Content Sites",
              items: [
                "Blog, news & knowledge bases",
                "Membership & gated content",
                "Multi-language / i18n support",
                "Advanced search & filtering",
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
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=480&fit=crop"
                alt="NovaCorp Corporate Website"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-transparent" />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Corporate Website
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">NovaCorp Corporate Website</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                A full corporate website redesign for a B2B tech company—new brand identity, Headless CMS
                (Sanity), and a 98/100 Lighthouse score. Organic search traffic grew 40% in 90 days.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Next.js · Sanity CMS · Vercel · Tailwind CSS</p>
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
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=480&fit=crop"
                alt="LuxeStay Hotels Website"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur-sm">
                  Hospitality Website
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-slate-900">LuxeStay Hotels & Resorts</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Luxury hotel brand website with immersive hero video, booking widget integration, and a
                multi-property content architecture. Direct bookings increased 28% after launch.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Next.js · Contentful CMS · Cloudinary · Stripe</p>
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
            We build websites for businesses across every sector—from professional services and retail to
            healthcare, hospitality, and education.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {[
            { icon: Landmark, name: "Finance" },
            { icon: Stethoscope, name: "Healthcare" },
            { icon: GraduationCap, name: "Education" },
            { icon: ShoppingCart, name: "Retail" },
            { icon: Hotel, name: "Hospitality" },
            { icon: Truck, name: "Logistics" },
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
          Start Your Online Story with a Spectacular Website
        </p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Ready to Build a Website That Represents Your Business?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Tell us your goals and we&apos;ll design and build a website that drives traffic, builds trust, and
          converts visitors into customers.
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

      {/* ─── OUR WEBSITE DEVELOPMENT PROCESS ────────────────────── */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Website Development Process{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            From the first brief to launch day—a clear, collaborative process that keeps your project on
            time and on brand.
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
            Why Choose Us for Website Development?{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We combine design craft with engineering rigour to build websites that look stunning, load
            fast, and perform long after launch.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Palette, title: "Design-Led Approach", desc: "Beautiful, brand-consistent design is at the heart of every website we build—not an afterthought." },
            { icon: Zap, title: "Performance by Default", desc: "We optimise for Core Web Vitals, image compression, and edge delivery from day one." },
            { icon: Search, title: "SEO-Ready Architecture", desc: "Semantic HTML, structured data, sitemap, metadata, and page speed all handled at build time." },
            { icon: Monitor, title: "CMS You Can Manage", desc: "We connect a CMS that your non-technical team can confidently use to update content without devs." },
            { icon: Shield, title: "Secure & Reliable", desc: "HTTPS, modern headers, regular dependency updates, and hosting on Vercel/AWS/Cloudflare." },
            { icon: Users, title: "Collaborative Process", desc: "Regular design reviews, content-first thinking, and a single point of contact throughout." },
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
            Key Benefits of Investing in Website Development Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A professionally built website is the foundation of your digital presence and your most
            effective sales and credibility tool.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: TrendingUp,
              title: "Stronger Online Presence",
              desc: "A fast, well-optimised website ranks higher in search results, drives more organic traffic, and builds credibility with every visitor.",
            },
            {
              icon: Award,
              title: "Improved Conversions",
              desc: "Conversion-focused design, clear CTAs, and fast load times turn more visitors into leads, customers, and brand advocates.",
            },
            {
              icon: Lock,
              title: "Scalable & Future-Proof",
              desc: "Built on modern frameworks with a decoupled CMS, your website grows with your business and stays easy to maintain long term.",
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
            Hear from business owners and marketing leaders who launched with PSV Enterprises.
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
                <Image
                  src={t.avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
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
          Get a Remarkable View Over Our Latest Work
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
            Common questions about website development, our process, and what to expect.
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
              Tell us about your website project and we&apos;ll help you build a digital presence that stands
              out, performs, and converts.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "150+", label: "Websites Delivered" },
                { icon: Users, value: "100+", label: "Happy Clients" },
                { icon: BarChart3, value: "40+", label: "Designers & Developers" },
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
              <ContactForm source="website-development" submitLabel="SEND MESSAGE" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
