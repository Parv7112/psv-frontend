"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Send,
  Settings,
  Search,
  Cpu,
  FileText,
  Clock,
  Handshake,
  Lightbulb,
  MessageSquare,
  TrendingUp,
  Layout,
  Wrench,
  Rocket,
  Award,
  Users,
  ShieldCheck,
  Globe,
  Video,
  Box,
  FlaskConical,
  Settings2,
  CheckCircle2,
} from "lucide-react";

const accentDot = <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />;

export default function GenerativeAiPage() {
  const [query, setQuery] = useState("");
  const [relatedTab, setRelatedTab] = useState<"all" | "ai" | "cloud">("all");

  const relatedServices = [
    { title: "Generative AI", href: "/what-we-do/ai/generative", category: "ai" as const },
    { title: "AI Chatbots", href: "/what-we-do/ai/chatbots", category: "ai" as const },
    { title: "AI Agents", href: "/what-we-do/ai/agents", category: "ai" as const },
    { title: "AI Consulting", href: "/what-we-do/ai/consulting", category: "ai" as const },
    { title: "RAG Development", href: "/what-we-do/ai/rag", category: "ai" as const },
    { title: "MCP Server", href: "/what-we-do/ai/mcp", category: "ai" as const },
    { title: "Software Development", href: "/what-we-do/software/apis", category: "cloud" as const },
    { title: "Cloud & DevOps", href: "/what-we-do/other/devops", category: "cloud" as const },
  ];
  const relatedFiltered = relatedTab === "ai" ? relatedServices.filter((s) => s.category === "ai") : relatedTab === "cloud" ? relatedServices.filter((s) => s.category === "cloud") : relatedServices;

  const faqs = [
    { question: "What is Generative AI development?", answer: "Generative AI development involves building systems that create new content—text, images, code, or other outputs—using models like LLMs and diffusion models. We design and implement solutions with guardrails, evaluation, and production monitoring." },
    { question: "How can Generative AI benefit my business?", answer: "Generative AI can automate content creation, personalize customer experiences, accelerate R&D, and improve decision support. We help you identify high-ROI use cases and deploy them safely." },
    { question: "What technologies do you use for Generative AI?", answer: "We use leading LLM APIs and open-source models, RAG and vector databases, fine-tuning pipelines, and evaluation frameworks. We choose the right stack for your data, latency, and cost requirements." },
    { question: "Do you ensure responsible and ethical AI?", answer: "Yes. We implement content policies, safety checks, transparency, and human-in-the-loop where needed. We can support compliance and governance requirements." },
  ];

  const clientLogos = ["Google", "Microsoft", "Amazon", "IBM", "Adobe", "Oracle", "Nvidia", "Intel", "Salesforce", "SAP", "Meta", "Accenture"];

  return (
    <div className="space-y-20">
      {/* Breadcrumbs */}
      <nav className="text-sm text-slate-600">
        <Link href="/" className="hover:text-slate-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/what-we-do" className="hover:text-slate-900">What we do</Link>
        <span className="mx-2">/</span>
        <Link href="/what-we-do/ai" className="hover:text-slate-900">AI</Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-slate-900">Generative AI</span>
      </nav>

      {/* Hero */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">AI & ML</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Research And Development Company
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We design and build AI-powered solutions that drive innovation and efficiency. From Generative AI to predictive models, we help businesses harness the full potential of machine learning to transform operations and deliver measurable outcomes.
            </p>
            <div className="mt-8">
              <ButtonLink href="/lets-talk" variant="dark" className="rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide">
                Get Started
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_4px_20px_rgba(2,6,23,0.08)]">
            <h2 className="text-lg font-semibold text-slate-900">Ask about Generative AI</h2>
            <div className="mt-5 space-y-4">
              {[
                { icon: BarChart3, label: "Data Analytics" },
                { icon: FileText, label: "Content Creation" },
                { icon: Users, label: "Customer Support" },
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
                placeholder="Type your query here..."
                className="min-w-0 flex-1 border-0 bg-transparent px-2 py-1.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
              />
              <button type="button" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white hover:bg-slate-800">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects strip */}
      <section className="rounded-2xl border border-slate-200/70 bg-slate-50/60 px-6 py-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Featured projects</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">Trendzix</Link>
          <span className="text-slate-300">|</span>
          <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">Teeze Time</Link>
          <span className="text-slate-300">|</span>
          <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">ContentGen AI</Link>
          <span className="text-slate-300">|</span>
          <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">PredictIQ</Link>
          <span className="text-slate-300">|</span>
          <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">Smart Assist</Link>
          <span className="text-slate-300">|</span>
          <Link href="/our-work" className="font-medium text-slate-800 hover:text-indigo-600">DataFlow Pro</Link>
        </div>
      </section>

      {/* How AI Powered Systems Work */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How AI Powered Systems Work{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            AI and Generative AI systems rely on data pipelines, model training, and seamless deployment. We build solutions that combine predictive models with generative capabilities to automate and enhance your workflows.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Settings, title: "Data Collection & Preprocessing", desc: "We gather and clean your data, ensuring quality and consistency for training. Structured and unstructured data are prepared for model ingestion." },
            { icon: Search, title: "Model Training & Optimization", desc: "Models are trained and tuned for accuracy and performance. We use state-of-the-art frameworks and best practices for Generative AI and ML." },
            { icon: Cpu, title: "Deployment & Integration", desc: "Trained models are deployed into your infrastructure with APIs, monitoring, and continuous improvement pipelines." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problems Our AI Powered Solutions Solve */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Problems Our AI Powered Solutions Solve{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            From inefficient processes to limited scalability, we address real business challenges with AI and Generative AI—delivering automation, insight, and growth.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: FileText, title: "Inefficient Content Creation", desc: "Generate drafts, summaries, and variations at scale with Generative AI, reducing manual effort and time." },
            { icon: Clock, title: "Time-Consuming Data Analysis", desc: "Automate analysis and reporting so your team can focus on decisions instead of spreadsheets." },
            { icon: Handshake, title: "Poor Customer Engagement", desc: "Personalize interactions and automate support with AI-driven chatbots and recommendation engines." },
            { icon: Lightbulb, title: "Lack of Innovation", desc: "Unlock new product ideas and workflows with Generative AI and exploratory ML models." },
            { icon: MessageSquare, title: "Repetitive Tasks", desc: "Automate routine tasks end-to-end so staff can focus on high-value work." },
            { icon: TrendingUp, title: "Limited Scalability", desc: "Scale operations without proportionally scaling headcount using AI and automation." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Featured Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A selection of our AI and Generative AI projects—from content platforms to intelligent automation.
          </p>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {[
            { tag: "Generative AI", title: "AI-Powered Content Generation Platform", desc: "End-to-end platform for generating and managing marketing and support content at scale.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop" },
            { tag: "AI & ML", title: "Intelligent Automation for Business Processes", desc: "Workflow automation with ML-based routing, validation, and exception handling.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=240&fit=crop" },
            { tag: "Generative AI", title: "Custom LLM Integration for Enterprise", desc: "Secure, governed integration of large language models into internal tools and dashboards.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop" },
            { tag: "AI & ML", title: "Predictive Analytics and Recommendation Engine", desc: "Real-time recommendations and forecasting powered by ML and generative models.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop" },
          ].map((p) => (
            <article key={p.title} className="w-[320px] shrink-0 snap-center overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="relative h-40 bg-slate-200">
                <Image src={p.image} alt="" fill className="object-cover" sizes="320px" />
              </div>
              <div className="p-5">
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">{p.tag}</span>
                <h3 className="mt-3 font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.desc}</p>
                <Link href="/our-work" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-indigo-600">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center">
          <ButtonLink href="/our-work" variant="secondary" className="rounded-lg border-2 border-slate-900 px-6 py-3 font-bold uppercase tracking-wide text-slate-900 hover:bg-slate-50">
            View all projects
          </ButtonLink>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-center sm:py-18">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Ready to revolutionize your business with AI?
        </h2>
        <div className="mt-6">
          <Link
            href="/lets-talk"
            className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold text-slate-900 hover:bg-lime-300"
          >
            Let&apos;s Get Started
          </Link>
        </div>
      </section>

      {/* How We Build Our AI Powered Solutions */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How We Build Our AI Powered Solutions{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A proven process from discovery to deployment—ensuring your AI initiatives are aligned with business goals and built for long-term success.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Lightbulb, title: "Discovery & Planning", desc: "Define use cases, success metrics, and data strategy with stakeholders." },
            { icon: Layout, title: "Design & Architecture", desc: "Design data pipelines, model architecture, and integration points." },
            { icon: Wrench, title: "Development & Training", desc: "Build, train, and validate models with rigorous testing and evaluation." },
            { icon: Rocket, title: "Deployment & Support", desc: "Deploy to production with monitoring, governance, and ongoing support." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us for AI Development Services? */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why Choose Us for AI Development Services?{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We combine technical depth with a focus on business outcomes—delivering AI solutions that are secure, scalable, and aligned with your goals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Award, title: "Expertise & Experience", desc: "Deep experience in ML, Generative AI, and production systems across industries." },
            { icon: Users, title: "Tailored Solutions", desc: "Solutions designed for your data, constraints, and objectives—not one-size-fits-all." },
            { icon: TrendingUp, title: "Cutting-Edge Technology", desc: "We use modern frameworks and stay current with advances in AI and Gen AI." },
            { icon: ShieldCheck, title: "Data Security & Privacy", desc: "Governance, encryption, and compliance built in from day one." },
            { icon: Globe, title: "Ongoing Support", desc: "Post-launch support, monitoring, and iteration to keep your AI performing." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Comprehensive AI Generative AI Development Services */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Comprehensive AI Generative AI Development Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            From natural language generation to custom models and research—we offer a full range of Generative AI and AI development services.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: MessageSquare, title: "Natural Language Generation (NLG)", desc: "Text generation, summarization, and dialogue systems powered by state-of-the-art LLMs." },
            { icon: FileText, title: "Content Creation & Summarization", desc: "Automate content drafts, summaries, and variations for marketing and operations." },
            { icon: Video, title: "Generative AI for Media", desc: "Image, video, and audio generation and editing with responsible use and guardrails." },
            { icon: Box, title: "Generative AI for Design", desc: "Design assistants, layout generation, and creative workflows powered by Gen AI." },
            { icon: FlaskConical, title: "AI Research & Prototyping", desc: "Explore new use cases, benchmark models, and validate feasibility before scaling." },
            { icon: Settings2, title: "AI Model Customization", desc: "Fine-tuning, RAG, and custom pipelines tailored to your domain and data." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Our Clients Say - Testimonials */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What Our Clients Say{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Hear from teams that have transformed their operations with our AI and Generative AI solutions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { quote: "PSV helped us deploy a Generative AI content pipeline that cut our production time by 60%. Professional and responsive throughout.", name: "Sarah M.", role: "Head of Product, SaaS Co", avatar: "https://i.pravatar.cc/150?img=5" },
            { quote: "From discovery to deployment, the team delivered a custom LLM integration that our compliance team approved. Highly recommend.", name: "James K.", role: "CTO, FinTech", avatar: "https://i.pravatar.cc/150?img=12" },
            { quote: "We now have an AI-powered analytics and content workflow that scales. The expertise in Gen AI and ML made the difference.", name: "Priya L.", role: "VP Engineering, Media", avatar: "https://i.pravatar.cc/150?img=9" },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <p className="text-sm italic leading-7 text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <Image src={t.avatar} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By Industry Leaders - expanded logo grid */}
      <section className="space-y-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">Trusted By Industry Leaders</h2>
        <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {clientLogos.map((name) => (
              <div key={name} className="flex items-center justify-center rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-4 text-center text-sm font-semibold tracking-tight text-slate-500">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Blog */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Explore Our Blog{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Insights, updates, and best practices on AI, Generative AI, and digital transformation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { tag: "Generative AI", title: "The Future of Content Creation with Generative AI", snippet: "How Gen AI is changing the way teams create and iterate on content.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop", author: "PSV Team", date: "May 2024", avatar: "https://i.pravatar.cc/150?img=12" },
            { tag: "AI", title: "Leveraging AI for Predictive Analytics", snippet: "Using ML to turn data into actionable forecasts and decisions.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=240&fit=crop", author: "PSV Team", date: "Apr 2024", avatar: "https://i.pravatar.cc/150?img=12" },
            { tag: "Technology", title: "Ethical Considerations in AI Development", snippet: "Building AI that is fair, transparent, and accountable.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop", author: "PSV Team", date: "Mar 2024", avatar: "https://i.pravatar.cc/150?img=12" },
          ].map((post) => (
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
        <div className="flex justify-center">
          <ButtonLink href="/blog" variant="secondary" className="rounded-lg border-2 border-slate-900 px-6 py-3 font-bold uppercase tracking-wide text-slate-900 hover:bg-slate-50">
            View All Blogs
          </ButtonLink>
        </div>
      </section>

      {/* Other Related Services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Other Related Services</h2>
        <div className="flex gap-2 border-b border-slate-200">
          {[
            { id: "all" as const, label: "Show All" },
            { id: "ai" as const, label: "AI Solutions" },
            { id: "cloud" as const, label: "Cloud Services" },
          ].map(({ id, label }) => (
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
            <Link key={s.href} href={s.href} className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition hover:border-lime-200 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">Learn more about our {s.title.toLowerCase()} offerings.</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-slate-700">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Quick answers about our Generative AI and AI development approach, security, and delivery.
          </p>
        </div>
        <Accordion items={faqs} defaultOpenIndex={0} variant="minimal" />
      </section>

      {/* Discover how we can help - Contact + Stats (4 stats with icons) */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Discover how we can help your business grow
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Connect with PSV Enterprises for tailored AI and Generative AI solutions. Let&apos;s turn your ideas into powerful realities together.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "6+", label: "Years Of Experience" },
                { icon: Users, value: "40+", label: "Skilled Professionals" },
                { icon: CheckCircle2, value: "34+", label: "Projects Delivered" },
                { icon: Globe, value: "17+", label: "Global Clientele Served" },
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
            <p className="text-sm font-semibold text-slate-900">
              Let&apos;s listen to what you&apos;ve got and we are here to provide you a solution.
            </p>
            <div className="mt-6">
              <ContactForm source="generative-ai" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
