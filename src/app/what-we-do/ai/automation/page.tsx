import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel";
import { StatRow } from "@/components/marketing/StatRow";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Briefcase,
  CheckCircle2,
  Clock,
  Cog,
  Database,
  FileText,
  GitBranch,
  Layers,
  Mail,
  RefreshCw,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export default function AiAutomationPage() {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      title: "Save Time & Resources",
      desc: "Automate repetitive tasks and free up your team to focus on high-value work. Reduce manual effort by up to 80% with intelligent automation.",
    },
    {
      icon: <Target className="h-6 w-6 text-sky-600" />,
      title: "Improve Accuracy",
      desc: "Eliminate human error and ensure consistent execution. AI-powered automation delivers reliable results every time.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-emerald-600" />,
      title: "Scale Operations",
      desc: "Handle growing workloads without proportional increases in staff. Scale your operations efficiently with intelligent automation.",
    },
  ];

  const services = [
    {
      icon: <Workflow className="h-6 w-6 text-indigo-600" />,
      title: "Workflow Automation",
      desc: "Design and implement intelligent workflows that connect your tools, automate approvals, and streamline operations from end to end.",
    },
    {
      icon: <Bot className="h-6 w-6 text-violet-600" />,
      title: "RPA & Intelligent Bots",
      desc: "Deploy software robots that handle repetitive tasks across applications, with AI to adapt to variations and exceptions.",
    },
    {
      icon: <FileText className="h-6 w-6 text-amber-600" />,
      title: "Document Processing",
      desc: "Extract, classify, and route documents automatically. Turn unstructured data into actionable information with AI.",
    },
    {
      icon: <Mail className="h-6 w-6 text-rose-600" />,
      title: "Email & Communication Automation",
      desc: "Automate email responses, routing, and follow-ups. Use AI to understand intent and take appropriate actions.",
    },
    {
      icon: <Database className="h-6 w-6 text-sky-600" />,
      title: "Data Integration & Sync",
      desc: "Keep your systems in sync automatically. Connect CRMs, ERPs, databases, and third-party tools with intelligent data flows.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-emerald-600" />,
      title: "Reporting & Analytics Automation",
      desc: "Generate reports, dashboards, and insights automatically. Schedule and distribute analytics to stakeholders on time.",
    },
  ];

  const useCases = [
    {
      title: "Customer Onboarding",
      desc: "Automate account setup, document collection, verification, and welcome sequences.",
      icon: <Users className="h-5 w-5 text-indigo-600" />,
    },
    {
      title: "Invoice Processing",
      desc: "Extract data from invoices, validate against POs, route for approval, and update accounting systems.",
      icon: <FileText className="h-5 w-5 text-amber-600" />,
    },
    {
      title: "Lead Qualification",
      desc: "Score leads, enrich data, assign to sales reps, and trigger personalized follow-up sequences.",
      icon: <Target className="h-5 w-5 text-sky-600" />,
    },
    {
      title: "IT Service Desk",
      desc: "Triage tickets, route to appropriate teams, provide automated responses, and escalate when needed.",
      icon: <Settings className="h-5 w-5 text-slate-600" />,
    },
    {
      title: "HR Processes",
      desc: "Automate employee onboarding, time-off requests, performance reviews, and compliance tracking.",
      icon: <Briefcase className="h-5 w-5 text-violet-600" />,
    },
    {
      title: "Order Fulfillment",
      desc: "Process orders, check inventory, generate shipping labels, and send tracking updates automatically.",
      icon: <RefreshCw className="h-5 w-5 text-emerald-600" />,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Process Discovery",
      desc: "We analyze your current workflows to identify automation opportunities and quantify potential impact.",
    },
    {
      step: "02",
      title: "Solution Design",
      desc: "We design the automation architecture, select the right tools, and map out the implementation plan.",
    },
    {
      step: "03",
      title: "Build & Test",
      desc: "We develop the automation, integrate with your systems, and thoroughly test before deployment.",
    },
    {
      step: "04",
      title: "Deploy & Monitor",
      desc: "We roll out the automation, train your team, and provide ongoing monitoring and optimization.",
    },
  ];

  const technologies = [
    "Zapier",
    "Make (Integromat)",
    "n8n",
    "UiPath",
    "Automation Anywhere",
    "Power Automate",
    "Workato",
    "Tray.io",
    "Apache Airflow",
    "Temporal",
    "AWS Step Functions",
    "Azure Logic Apps",
  ];

  const caseStudies = [
    {
      title: "Invoice Processing Automation",
      company: "Finance Company",
      result: "75% faster processing time",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      tag: "Document Automation",
      metrics: { time: "75%", accuracy: "99%", cost: "60%" },
    },
    {
      title: "Customer Onboarding Workflow",
      company: "SaaS Platform",
      result: "90% reduction in manual work",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tag: "Workflow Automation",
      metrics: { time: "90%", satisfaction: "95%", errors: "85%" },
    },
    {
      title: "IT Ticket Routing System",
      company: "Tech Company",
      result: "50% faster resolution",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tag: "RPA",
      metrics: { speed: "50%", automation: "70%", satisfaction: "88%" },
    },
  ];

  const features = [
    {
      icon: <Zap className="h-5 w-5 text-indigo-600" />,
      title: "No-Code & Low-Code",
      desc: "Build automations without extensive coding. Empower business users to create and modify workflows.",
    },
    {
      icon: <GitBranch className="h-5 w-5 text-sky-600" />,
      title: "Conditional Logic",
      desc: "Handle complex decision trees, branching, and exception handling with intelligent routing.",
    },
    {
      icon: <Layers className="h-5 w-5 text-violet-600" />,
      title: "Multi-System Integration",
      desc: "Connect any combination of cloud apps, databases, APIs, and legacy systems seamlessly.",
    },
    {
      icon: <Cog className="h-5 w-5 text-amber-600" />,
      title: "Error Handling",
      desc: "Built-in retry logic, fallback options, and alerts to ensure reliability and continuity.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-emerald-600" />,
      title: "Analytics & Monitoring",
      desc: "Track automation performance, identify bottlenecks, and measure ROI with detailed dashboards.",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-rose-600" />,
      title: "Audit Trails",
      desc: "Complete visibility into every action, decision, and data change for compliance and debugging.",
    },
  ];

  const blogPosts = [
    {
      tag: "Automation",
      title: "10 Business Processes You Should Automate Today",
      desc: "Discover the most common automation opportunities that deliver immediate ROI and how to get started.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      author: "Parv Garg",
      date: "28 Feb 2024",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "RPA",
      title: "RPA vs. Workflow Automation: Which is Right for You?",
      desc: "Understanding the differences and when to use each approach for maximum business impact.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      author: "Parv Garg",
      date: "25 Feb 2024",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "AI",
      title: "How AI is Transforming Business Process Automation",
      desc: "The evolution from rule-based automation to intelligent, adaptive systems that learn and improve.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      author: "Parv Garg",
      date: "22 Feb 2024",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  const faqs = [
    {
      question: "What types of processes can be automated?",
      answer:
        "Almost any repetitive, rule-based process can be automated. Common examples include data entry, document processing, email routing, report generation, customer onboarding, invoice processing, and system integrations. We help identify the best candidates based on frequency, complexity, and business impact.",
    },
    {
      question: "How long does it take to implement automation?",
      answer:
        "Simple automations can be deployed in days, while complex multi-system workflows may take weeks or months. We typically start with a pilot project (2-4 weeks) to demonstrate value quickly, then scale to additional processes based on results.",
    },
    {
      question: "Do I need to replace my existing systems?",
      answer:
        "No. Automation works with your existing tools and systems. We connect your current applications, databases, and platforms without requiring replacements or major changes to your infrastructure.",
    },
    {
      question: "What if my process changes?",
      answer:
        "We design flexible automations that can be easily modified as your business evolves. Many solutions include no-code interfaces that allow your team to make updates without developer involvement.",
    },
    {
      question: "How do you measure automation success?",
      answer:
        "We track metrics like time saved, error reduction, cost savings, throughput increase, and employee satisfaction. Each automation includes dashboards and reports to monitor performance and demonstrate ROI.",
    },
    {
      question: "What happens if the automation fails?",
      answer:
        "We build in error handling, retry logic, and alerts to ensure reliability. If an automation encounters an issue, it can notify the appropriate team, fall back to manual processing, or attempt alternative paths. We also provide monitoring and support to quickly resolve any problems.",
    },
  ];

  const relatedServices = [
    { label: "AI Automation", href: "/what-we-do/ai/automation" },
    { label: "AI Chatbots", href: "/what-we-do/ai/chatbots" },
    { label: "AI Agents", href: "/what-we-do/ai/agents" },
    { label: "AI Consulting", href: "/what-we-do/ai/consulting" },
    { label: "RAG Development", href: "/what-we-do/ai/rag" },
    { label: "Machine Learning", href: "/what-we-do/ai" },
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              <Sparkles className="h-4 w-4 text-violet-600" />
              AI Automation Services
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              AI Automation
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-slate-600">
              Automate repetitive business processes with intelligent workflows. Save time, reduce errors, and scale operations with AI-powered automation.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/lets-talk" variant="primary" className="px-8 py-4 text-base">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/our-work" variant="secondary" className="px-8 py-4 text-base">
                View Examples
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop"
                alt="AI Automation"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">
                  <Workflow className="h-6 w-6 text-violet-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">80%</div>
                  <div className="text-sm text-slate-600">Time Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <StatRow />

      {/* Why Choose AI Automation */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Benefits"
          title="Why businesses choose AI Automation?"
          description="Transform your operations with intelligent automation that delivers measurable results."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-all hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 transition-transform group-hover:scale-110">
                {b.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Automation Services */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Our Services"
          title="AI Automation Services We Provide"
          description="End-to-end automation solutions tailored to your business needs."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-all hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 transition-transform group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Use Cases"
          title="Common Automation Use Cases"
          description="Real-world applications of AI automation across industries."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                {uc.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{uc.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Automation Process"
          description="A proven methodology to deliver automation that works."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, idx) => (
            <div key={p.step} className="relative">
              <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
                <div className="text-5xl font-bold text-violet-100">{p.step}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.desc}</p>
              </div>
              {idx < process.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                  <ArrowRight className="h-6 w-6 text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Features"
          title="Powerful Automation Features"
          description="Everything you need to build reliable, scalable automation."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                {f.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="Real Results from AI Automation"
          description="See how we've helped businesses transform with automation."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm">
                    {study.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{study.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{study.company}</p>
                <div className="mt-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-600">{study.result}</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-lg font-bold text-slate-900">{value}</div>
                      <div className="text-xs text-slate-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Automation Tools & Platforms"
          description="We work with leading automation technologies."
        />
        <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-xl border border-slate-200/70 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients Say"
          description="Hear from businesses we've helped automate."
        />
        <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
          <TestimonialCarousel />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Insights"
          title="Latest Automation Insights"
          description="Learn about automation trends and best practices."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {post.tag}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 line-clamp-2">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-2">{post.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src={post.authorAvatar}
                    alt={post.author}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">{post.author}</div>
                    <div className="text-xs text-slate-500">{post.date}</div>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Everything you need to know about AI automation."
        />
        <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
          <Accordion items={faqs} defaultOpenIndex={0} variant="minimal" />
        </div>
      </section>

      {/* Related Services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Related Services</h2>
        <div className="flex flex-wrap gap-3">
          {relatedServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-full border border-slate-200/70 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-violet-600 to-indigo-600 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Automate Your Business Processes?
            </h2>
            <p className="mt-4 text-lg leading-8 text-violet-100">
              Let's identify your automation opportunities and build solutions that deliver measurable ROI. Get started with a free consultation.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Clock, label: "80% Time Saved" },
                { icon: Target, label: "99% Accuracy" },
                { icon: TrendingUp, label: "3x Productivity" },
                { icon: Users, label: "100+ Automations" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <stat.icon className="h-6 w-6 text-white" />
                  <span className="text-sm font-semibold text-white">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white p-8 shadow-2xl">
            <h3 className="text-lg font-semibold text-slate-900">Start Automating Today</h3>
            <p className="mt-2 text-sm text-slate-600">
              Fill out the form and we'll show you what's possible with automation.
            </p>
            <div className="mt-6">
              <ContactForm source="ai-automation" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
