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
  Brain,
  Briefcase,
  CheckCircle2,
  Eye,
  Lightbulb,
  MessageSquare,
  Scale,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function AiConsultingPage() {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
      title: "Increased Efficiency",
      desc: "Streamline operations and automate repetitive tasks so your team can focus on high-value work. Our AI consulting helps you identify and implement the right automation opportunities.",
    },
    {
      icon: <Target className="h-6 w-6 text-sky-600" />,
      title: "Reduced Costs",
      desc: "Optimize resource allocation and reduce manual effort across processes. We help you achieve measurable cost savings while improving quality and consistency.",
    },
    {
      icon: <Brain className="h-6 w-6 text-emerald-600" />,
      title: "Enhanced Decision Making",
      desc: "Leverage data-driven insights and AI-powered analytics to make faster, more informed decisions. We design solutions that surface the right information at the right time.",
    },
  ];

  const services = [
    {
      icon: <Brain className="h-6 w-6 text-indigo-600" />,
      title: "AI Strategy & Roadmap",
      desc: "Define a clear AI vision aligned with business goals. We help you prioritize use cases, assess readiness, and build a phased roadmap for adoption.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
      title: "Machine Learning Consulting",
      desc: "From model selection to deployment, we guide you through the full ML lifecycle. Get expert advice on data pipelines, training, and production monitoring.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-violet-600" />,
      title: "Natural Language Processing (NLP)",
      desc: "Unlock value from text and speech. We help you implement search, classification, extraction, and conversational AI tailored to your domain.",
    },
    {
      icon: <Eye className="h-6 w-6 text-rose-600" />,
      title: "Computer Vision Consulting",
      desc: "Apply vision AI for quality control, automation, and analytics. We design solutions for image and video understanding that fit your infrastructure.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-sky-600" />,
      title: "Generative AI Solutions",
      desc: "Explore safe, effective use of generative AI for content, code, and workflows. We help you integrate LLMs with guardrails and measurable outcomes.",
    },
    {
      icon: <Scale className="h-6 w-6 text-slate-600" />,
      title: "AI Ethics & Governance",
      desc: "Build responsible AI with clear policies, fairness checks, and compliance. We support governance frameworks and audit-ready documentation.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      desc: "We start by understanding your business goals, current capabilities, and data landscape to identify the most impactful AI opportunities.",
    },
    {
      step: "02",
      title: "Strategy & Roadmap",
      desc: "We develop a tailored AI strategy with prioritized use cases, technology recommendations, and a phased implementation plan.",
    },
    {
      step: "03",
      title: "Proof of Concept",
      desc: "We build and validate a working prototype to demonstrate value and refine the approach before full-scale deployment.",
    },
    {
      step: "04",
      title: "Implementation & Scale",
      desc: "We deploy production-ready solutions with proper monitoring, governance, and support to ensure long-term success.",
    },
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥" },
    { name: "Finance", icon: "💰" },
    { name: "Retail", icon: "🛍️" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Technology", icon: "💻" },
    { name: "Logistics", icon: "🚚" },
  ];

  const caseStudies = [
    {
      title: "AI-Powered Customer Support",
      company: "SaaS Platform",
      result: "60% reduction in response time",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      tag: "NLP",
    },
    {
      title: "Predictive Maintenance System",
      company: "Manufacturing Co.",
      result: "40% decrease in downtime",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      tag: "Machine Learning",
    },
    {
      title: "Intelligent Document Processing",
      company: "Financial Services",
      result: "80% faster processing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tag: "Computer Vision",
    },
  ];

  const technologies = [
    "TensorFlow",
    "PyTorch",
    "OpenAI",
    "Anthropic",
    "Hugging Face",
    "LangChain",
    "AWS SageMaker",
    "Azure AI",
    "Google Cloud AI",
    "Databricks",
    "MLflow",
    "Kubernetes",
  ];

  const blogPosts = [
    {
      tag: "AI Strategy",
      title: "Why Start with an AI Readiness Assessment",
      desc: "Before investing in tools and models, understand where you stand and where to focus first.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      author: "Parv Garg",
      date: "21 May 2024",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Machine Learning",
      title: "MLOps in Practice: What We've Learned",
      desc: "Lessons from production ML: monitoring, retraining, and keeping models aligned with business goals.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
      author: "Parv Garg",
      date: "18 May 2024",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      tag: "Generative AI",
      title: "Generative AI in the Enterprise: Use Cases That Work",
      desc: "Where gen AI delivers value today—and where to wait for the ecosystem to mature.",
      image: "https://images.unsplash.com/photo-1686191128892-c56aac8e0e0e?w=800&h=600&fit=crop",
      author: "Parv Garg",
      date: "15 May 2024",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  const faqs = [
    {
      question: "What does AI consulting typically include?",
      answer:
        "Our AI consulting covers strategy and roadmap design, use-case prioritization, data and infrastructure assessment, vendor and build-vs-buy guidance, and implementation support. We tailor the scope to your goals and maturity.",
    },
    {
      question: "How long does an AI consulting engagement usually take?",
      answer:
        "Discovery and strategy engagements often run 2–4 weeks. Deeper implementation support can extend over several months. We propose a phased approach so you can see value early and scale commitment as needed.",
    },
    {
      question: "Do you work with companies that are new to AI?",
      answer:
        "Yes. We help first-time adopters understand what's possible, where to start, and how to build internal capability. We focus on practical, measurable outcomes rather than technology for its own sake.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We work across sectors including SaaS, healthcare, finance, retail, logistics, and manufacturing. Our approach is industry-aware but methodology-driven, so we adapt to your context and constraints.",
    },
    {
      question: "Can you help us choose between building vs. buying AI solutions?",
      answer:
        "Yes. We evaluate your data, team, timeline, and risk tolerance to recommend the right mix of off-the-shelf tools, APIs, and custom development. We also help with vendor evaluation and integration strategy.",
    },
  ];

  const relatedServices = [
    { label: "AI Consulting", href: "/what-we-do/ai/consulting" },
    { label: "AI Chatbots", href: "/what-we-do/ai/chatbots" },
    { label: "AI Agents", href: "/what-we-do/ai/agents" },
    { label: "AI Automation", href: "/what-we-do/ai/automation" },
    { label: "RAG Development", href: "/what-we-do/ai/rag" },
    { label: "Machine Learning", href: "/what-we-do/ai" },
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              AI Consulting Services
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              AI Consulting
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-slate-600">
              Transform your business with strategic AI consulting. We help you identify opportunities, design solutions, and implement AI that delivers measurable results.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/lets-talk" variant="primary" className="px-8 py-4 text-base">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/our-work" variant="secondary" className="px-8 py-4 text-base">
                View Case Studies
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=800&fit=crop"
                alt="AI Consulting"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">50+</div>
                  <div className="text-sm text-slate-600">AI Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <StatRow />

      {/* Why Choose AI Consulting */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Benefits"
          title="Why businesses adopt AI Consulting Services?"
          description="Unlock the full potential of AI with expert guidance tailored to your business needs."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-all hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Consulting Services */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Our Services"
          title="AI Consulting Services We Provide"
          description="Comprehensive AI solutions from strategy to implementation."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-all hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="How We Work"
          title="Our AI Consulting Process"
          description="A proven methodology to deliver AI solutions that work."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, idx) => (
            <div key={p.step} className="relative">
              <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
                <div className="text-5xl font-bold text-indigo-100">{p.step}</div>
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

      {/* Industries We Serve */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Industries"
          title="Industries We Serve"
          description="AI expertise across diverse sectors."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-all hover:shadow-lg"
            >
              <span className="text-4xl">{industry.icon}</span>
              <span className="text-sm font-semibold text-slate-700 group-hover:text-indigo-600">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Success Stories"
          title="Real Results from AI Consulting"
          description="See how we've helped businesses transform with AI."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies We Work With"
          description="Leveraging the best AI tools and platforms."
        />
        <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-xl border border-slate-200/70 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
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
          description="Hear from businesses we've helped transform with AI."
        />
        <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
          <TestimonialCarousel />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Insights"
          title="Latest from Our AI Experts"
          description="Stay updated with AI trends and best practices."
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
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
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
          description="Everything you need to know about our AI consulting services."
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
              className="rounded-full border border-slate-200/70 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-indigo-600 to-sky-600 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="mt-4 text-lg leading-8 text-indigo-100">
              Let's discuss how our AI consulting services can help you achieve your goals. Get a free consultation with our experts.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Briefcase, label: "8+ Years Experience" },
                { icon: Users, label: "25+ AI Experts" },
                { icon: BarChart3, label: "50+ Projects" },
                { icon: Target, label: "95% Success Rate" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <stat.icon className="h-6 w-6 text-white" />
                  <span className="text-sm font-semibold text-white">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white p-8 shadow-2xl">
            <h3 className="text-lg font-semibold text-slate-900">Get Started Today</h3>
            <p className="mt-2 text-sm text-slate-600">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="mt-6">
              <ContactForm source="ai-consulting" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
