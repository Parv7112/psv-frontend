import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import { LogoCloud } from "@/components/marketing/LogoCloud";
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  Briefcase,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Headphones,
  LayoutGrid,
  MessageSquare,
  Network,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const lorem =
  "Lorem ipsum dolor sit amet consectetur. Sed in id pellentesque feugiat tristique vitae facilisis. Magna sit in diam lectus at. Velit eget donec ultrices facilisis. Eget dictumst turpis risus sed eu ipsum morbi. Volutpat viverra facilisi nibh eget. Semper morbi in.";

const loremShort =
  "Lorem ipsum dolor sit amet consectetur. Sed in id pellentesque feugiat tristique vitae facilisis. Magna sit in diam lectus at. Velit eget donec ultrices facilisis.";

export default function AiAgentsPage() {
  const workflowSteps = [
    {
      icon: <LayoutGrid className="h-5 w-5 text-slate-700" />,
      title: "AI Agent Design",
      desc: loremShort,
    },
    {
      icon: <Cpu className="h-5 w-5 text-slate-700" />,
      title: "LLM Selection & Fine Tuning",
      desc: loremShort,
    },
    {
      icon: <Wrench className="h-5 w-5 text-slate-700" />,
      title: "Tooling & Integration",
      desc: loremShort,
    },
  ];

  const benefits = [
    { icon: <Zap className="h-5 w-5 text-indigo-600" />, title: "Enhanced Productivity", desc: loremShort },
    { icon: <Settings className="h-5 w-5 text-sky-600" />, title: "Cost Reduction", desc: loremShort },
    { icon: <Headphones className="h-5 w-5 text-emerald-600" />, title: "Improved Customer Experience", desc: loremShort },
    { icon: <Search className="h-5 w-5 text-violet-600" />, title: "Better Decision Making", desc: loremShort },
    { icon: <GitBranch className="h-5 w-5 text-amber-600" />, title: "Automation at Scale", desc: loremShort },
    { icon: <ShieldCheck className="h-5 w-5 text-rose-600" />, title: "Security & Compliance", desc: loremShort },
  ];

  const agentTypes = [
    { icon: <MessageSquare className="h-5 w-5 text-indigo-600" />, title: "Customer Service Agents", desc: loremShort },
    { icon: <BarChart3 className="h-5 w-5 text-sky-600" />, title: "Data Analysis Agents", desc: loremShort },
    { icon: <TrendingUp className="h-5 w-5 text-emerald-600" />, title: "Marketing Automation Agents", desc: loremShort },
    { icon: <Wrench className="h-5 w-5 text-violet-600" />, title: "IT Support Agents", desc: loremShort },
  ];

  const whyPsv = [
    { icon: <Brain className="h-5 w-5 text-indigo-600" />, title: "Expertise & Innovation", desc: loremShort },
    { icon: <Target className="h-5 w-5 text-sky-600" />, title: "Client-Centric Approach", desc: loremShort },
    { icon: <Users className="h-5 w-5 text-emerald-600" />, title: "Robust Development Process", desc: loremShort },
    { icon: <Globe className="h-5 w-5 text-violet-600" />, title: "Global Delivery", desc: loremShort },
    { icon: <Award className="h-5 w-5 text-amber-600" />, title: "Proven Track Record", desc: loremShort },
  ];

  const keyBenefits = [
    { icon: <Settings className="h-5 w-5 text-indigo-600" />, title: "Customized Solutions", desc: loremShort },
    { icon: <Target className="h-5 w-5 text-sky-600" />, title: "Expert Guidance", desc: loremShort },
    { icon: <GitBranch className="h-5 w-5 text-emerald-600" />, title: "Seamless Integration", desc: loremShort },
    { icon: <ShieldCheck className="h-5 w-5 text-violet-600" />, title: "Ongoing Support", desc: loremShort },
    { icon: <TrendingUp className="h-5 w-5 text-amber-600" />, title: "Measurable Outcomes", desc: loremShort },
  ];

  const techIcons = [
    MessageSquare,
    Brain,
    Database,
    Cloud,
    Network,
    Zap,
    BarChart3,
    Cpu,
    ShieldCheck,
    GitBranch,
    LayoutGrid,
    Wrench,
  ];

  const faqs = [
    { question: "What is an AI Agent?", answer: lorem },
    { question: "How long does AI Agent development take?", answer: lorem },
    { question: "What industries can benefit from AI Agents?", answer: lorem },
    { question: "Can AI Agents integrate with existing systems?", answer: lorem },
    { question: "What support is offered after deployment?", answer: lorem },
    { question: "What is the cost of AI Agent development?", answer: lorem },
    { question: "What are AI agents and how do they work?", answer: lorem },
    { question: "How can AI agents benefit my business?", answer: lorem },
    { question: "What are the key features of effective AI agents?", answer: lorem },
  ];

  const relatedServices = [
    { label: "AI Agent Development", href: "/what-we-do/ai/agents" },
    { label: "R&D Development", href: "/what-we-do/ai" },
    { label: "AI Automation Development", href: "/what-we-do/ai/automation" },
    { label: "Chatbot Development", href: "/what-we-do/ai/chatbots" },
    { label: "AI Consulting", href: "/what-we-do/ai/consulting" },
  ];

  const blogCards = [
    { tag: "Trending", title: "AI Agent Development Services - Automation - Whole Cycle - Botman.", excerpt: "AI agents perceive environments, make decisions, and mimic human intelligence.", author: "Parv Garg", date: "21 May 2024", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=320&fit=crop", authorAvatar: "https://i.pravatar.cc/150?img=12" },
    { tag: "AI", title: "AI Agent Development Services - Automation - Whole Cycle - Botman.", excerpt: "AI agents perceive environments, make decisions, and mimic human intelligence.", author: "Parv Garg", date: "21 May 2024", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=320&fit=crop", authorAvatar: "https://i.pravatar.cc/150?img=12" },
    { tag: "AI AGENTS FOR HOSPITALITY", title: "AI Agents for Hospitality.", excerpt: "AI agents perceive environments, make decisions, and mimic human intelligence.", author: "Parv Garg", date: "21 May 2024", image: "https://images.unsplash.com/photo-1531746795393-6c60a77edea9?w=600&h=320&fit=crop", authorAvatar: "https://i.pravatar.cc/150?img=12" },
  ];

  const featuredProjects = [
    { name: "Trendzix", icon: "📈", href: "/our-work" },
    { name: "Teeze Time", icon: "👕", href: "/our-work" },
    { name: "Leagolabs", icon: "🔄", href: "/our-work" },
    { name: "MyBOI", icon: "⚡", href: "/our-work" },
    { name: "Pivova", icon: "☁️", href: "/our-work" },
    { name: "Kilo homes", icon: "🏠", href: "/our-work" },
  ];

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              AI Development
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              AI Agents Development Company
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
              {loremShort}
            </p>
            <div className="mt-8">
              <ButtonLink href="/lets-talk" variant="dark" className="px-6 py-3">
                Get Started
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
            <h3 className="text-lg font-semibold text-slate-900">What is an AI Agent?</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["Task Definition", "Memory", "Planning", "Tools", "Execution", "Reflection"].map((label, i) => (
                <div key={label} className="flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-3 py-2.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-600">
                    {[<Target key="t" className="h-4 w-4" />, <Brain key="b" className="h-4 w-4" />, <LayoutGrid key="l" className="h-4 w-4" />, <Wrench key="w" className="h-4 w-4" />, <Zap key="z" className="h-4 w-4" />, <CheckCircle2 key="c" className="h-4 w-4" />][i]}
                  </span>
                  <span className="text-sm font-medium text-slate-800">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects strip */}
      <section className="rounded-2xl border border-slate-200/70 bg-slate-50/60 px-6 py-6">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
          {featuredProjects.map((p) => (
            <Link key={p.name} href={p.href} className="group flex flex-col items-center gap-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200/70 bg-white text-xl shadow-sm transition group-hover:border-indigo-200 group-hover:shadow">
                {p.icon}
              </span>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-indigo-600">{p.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* AI Agent Development Workflow */}
      <section className="space-y-8">
        <SectionHeading
          title="AI Agent Development Workflow at PSV Enterprises"
          description={lorem}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {workflowSteps.map((s) => (
            <div key={s.title} className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Building the Future of AI */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Building the Future of AI with PSV Enterprises Experts
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{lorem}</p>
            <div className="mt-8">
              <ButtonLink href="/lets-talk" variant="dark" className="px-6 py-3">
                Get Started
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
            <h3 className="text-sm font-semibold text-slate-700">Data-Driven</h3>
            <div className="mt-4 flex h-40 items-end justify-between gap-2">
              {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-indigo-500/80" style={{ height: `${h}%` }} />
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500">Performance over time</p>
          </div>
        </div>
      </section>

      {/* How To Incorporate AI Agents */}
      <section className="space-y-8">
        <SectionHeading
          title="How To Incorporate AI Agents Into Your Business"
          description={lorem}
        />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">AI Agent Consulting</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{loremShort}</p>
                <ButtonLink href="/lets-talk" variant="dark" className="mt-4 px-5 py-2.5">
                  Get Started
                </ButtonLink>
              </div>
              <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">Custom AI Agent Development</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{loremShort}</p>
                <ButtonLink href="/lets-talk" variant="dark" className="mt-4 px-5 py-2.5">
                  Get Started
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200/70 bg-slate-800 p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="h-2 w-3/4 rounded bg-slate-600" />
              <div className="h-2 w-full rounded bg-slate-600" />
              <div className="h-2 w-1/2 rounded bg-slate-600" />
              <div className="mt-4 flex gap-2">
                <div className="h-8 flex-1 rounded border border-slate-600 bg-slate-700/50" />
                <div className="h-8 flex-1 rounded border border-slate-600 bg-slate-700/50" />
              </div>
              <div className="flex justify-end pt-4">
                <span className="rounded bg-slate-600 px-3 py-1.5 text-slate-200">Submit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="rounded-3xl bg-slate-900 px-8 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Ready to Elevate Your Business with AI Agents?
        </h2>
        <p className="mt-3 text-slate-300">Contact us today for a consultation!</p>
        <div className="mt-8">
          <ButtonLink href="/lets-talk" variant="primary" className="px-6 py-3">
            Get Started
          </ButtonLink>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="space-y-8">
        <SectionHeading
          title="Benefits & Features"
          description={lorem}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50">{b.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Our Range of AI Agents */}
      <section className="space-y-8">
        <SectionHeading
          title="Explore Our Range of AI Agents"
          description={lorem}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {agentTypes.map((a) => (
            <div key={a.title} className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50">{a.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI For The Enterprise */}
      <section className="space-y-8">
        <SectionHeading
          title="AI For The Enterprise"
          description={lorem}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
            <h3 className="text-lg font-semibold text-slate-900">Scalable Solutions</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{loremShort}</p>
            <Link href="/what-we-do/ai" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-indigo-600">
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
            <h3 className="text-lg font-semibold text-slate-900">Security & Compliance</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{loremShort}</p>
            <Link href="/what-we-do/ai" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-indigo-600">
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why PSV for AI Agent Development */}
      <section className="space-y-8">
        <SectionHeading
          title="Why PSV Enterprises for AI Agent Development"
          description={lorem}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyPsv.map((w) => (
            <div key={w.title} className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50">{w.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{w.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8">
        <SectionHeading
          title="Frequently Asked Questions"
          description={lorem}
        />
        <Accordion items={faqs} defaultOpenIndex={0} variant="minimal" />
      </section>

      {/* Ready to Revolutionize - icon grid */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Ready to Revolutionize Your Business with AI Agents?
        </h2>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-6">
          {techIcons.map((Icon, i) => (
            <div key={i} className="grid h-14 w-14 place-items-center rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:h-16 sm:w-16">
              <Icon className="h-6 w-6 text-slate-600 sm:h-7 sm:w-7" />
            </div>
          ))}
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          What Our Clients Say
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {[
            { quote: loremShort, name: "John Doe", role: "CEO, Tech Solutions", avatar: "https://i.pravatar.cc/150?img=1" },
            { quote: loremShort, name: "Jane Smith", role: "CTO, Innovate Inc", avatar: "https://i.pravatar.cc/150?img=5" },
            { quote: loremShort, name: "Alex Johnson", role: "Product Lead, DataFlow", avatar: "https://i.pravatar.cc/150?img=9" },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200/70 bg-slate-50 p-6">
              <p className="text-sm leading-6 text-slate-600">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <Image src={t.avatar} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Benefits of AI Agent Development with Professional Services */}
      <section className="space-y-8">
        <SectionHeading
          title="Key Benefits of AI Agent Development with Professional Services"
          description={lorem}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keyBenefits.map((b) => (
            <div key={b.title} className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50">{b.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Clients We Serve */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Our Clients We Serve
        </h2>
        <LogoCloud />
      </section>

      {/* Get Insights from Our Latest Buzz */}
      <section className="space-y-8">
        <SectionHeading
          title="Get Insights from Our Latest Buzz"
          description="From our latest blog posts to news and updates, we keep you informed."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {blogCards.map((card, i) => (
            <article key={i} className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="relative h-40 w-full bg-slate-200">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                  {card.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <Image src={card.authorAvatar} alt="" width={24} height={24} className="h-6 w-6 rounded-full object-cover" />
                  <span className="font-medium text-slate-700">{card.author}</span>
                  <span>·</span>
                  <span>{card.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center">
          <ButtonLink href="/blog" variant="dark" className="inline-flex items-center gap-2 px-6 py-3">
            View All <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </section>

      {/* Other Related Services */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Other Related Services</h2>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          {relatedServices.map((s, i) => (
            <span key={s.href} className="flex items-center gap-2">
              <Link href={s.href} className="font-medium text-slate-700 hover:text-indigo-600">
                {s.label}
              </Link>
              {i < relatedServices.length - 1 && <span className="text-slate-400">›</span>}
            </span>
          ))}
        </div>
      </section>

      {/* Discover how we can help */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Discover how we can help your business grow
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              At PSV Enterprises, we specialize in crafting cutting-edge AI agent solutions that transform your business operations and elevate customer experiences. Our team of experts combines deep industry knowledge with technical prowess to develop intelligent agents tailored to your unique needs.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Briefcase, k: "4+", v: "Years in Business" },
                { icon: Users, k: "4+", v: "Happy Clients" },
                { icon: Settings, k: "8+", v: "Projects Done" },
                { icon: MessageSquare, k: "4+", v: "Consultants/Experts" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
                  <s.icon className="h-5 w-5 text-slate-600" />
                  <div className="mt-2 text-2xl font-semibold text-slate-900">{s.k}</div>
                  <div className="mt-1 text-sm text-slate-600">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-8">
            <div className="text-sm font-semibold text-slate-900">
              Let&apos;s talk to understand your needs and provide you a solution.
            </div>
            <div className="mt-6">
              <ContactForm source="ai-agents" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
