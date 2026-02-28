"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { Accordion } from "@/components/marketing/Accordion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  FileStack,
  Film,
  Folder,
  FolderOpen,
  GitBranch,
  Github,
  Globe,
  GraduationCap,
  Landmark,
  MessageSquare,
  Server,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  TrendingUp,
  Truck,
  User,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { getApiBase } from "@/lib/apiBase";

function McpHeroForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus("submitting");
    try {
      const res = await fetch(`${getApiBase()}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: "",
          phone: "",
          service: "AI",
          budget: "Not sure",
          message,
          source: "mcp-hero",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Talk to us</h3>
      <p className="mt-1 text-sm text-slate-600">Get an Estimate</p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/25"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Your Email</label>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/25"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/25"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="h-11 w-full rounded-lg bg-sky-500 px-4 text-sm font-semibold text-white hover:bg-sky-600 disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : status === "success" ? "Sent!" : "Submit"}
        </button>
      </form>
      <div className="mt-6 flex flex-wrap justify-between gap-2">
        {[
          { icon: Database, label: "Database", color: "bg-sky-500" },
          { icon: User, label: "Support", color: "bg-orange-500" },
          { icon: MessageSquare, label: "Chat", color: "bg-sky-500" },
          { icon: Settings, label: "Settings", color: "bg-amber-500" },
        ].map(({ icon: Icon, label, color }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span className={`flex h-10 w-10 items-center justify-center rounded-full ${color} text-white`}>
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-xs font-medium text-slate-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function McpCtaForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phoneCode: "+91",
    phone: "",
    service: "MCP Server Development",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const canSubmit = useMemo(
    () =>
      state.name.trim().length >= 2 &&
      state.email.trim().length >= 5 &&
      state.message.trim().length >= 10,
    [state.name, state.email, state.message]
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || status === "submitting") return;
    setStatus("submitting");
    try {
      const phone = state.phone.trim() ? `${state.phoneCode} ${state.phone}` : undefined;
      const res = await fetch(`${getApiBase()}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          phone: phone || undefined,
          company: state.company || undefined,
          service: state.service || undefined,
          budget: undefined,
          message: state.message,
          source: "mcp",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setState({
          name: "",
          email: "",
          phoneCode: "+91",
          phone: "",
          service: "MCP Server Development",
          company: "",
          message: "",
        });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-300";
  const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm font-semibold text-slate-900">
        Let&apos;s listen to what you&apos;ve got and we are here to provide you a solution.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Full Name <span className="text-rose-500">*</span></label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            className={inputClass}
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          <label className={labelClass}>Business Email <span className="text-rose-500">*</span></label>
          <input
            type="email"
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            className={inputClass}
            placeholder="you@company.com"
            required
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Phone Number</label>
          <div className="flex rounded-xl border border-slate-200 bg-slate-50/80 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500/25 focus-within:border-indigo-300">
            <select
              value={state.phoneCode}
              onChange={(e) => setState((s) => ({ ...s, phoneCode: e.target.value }))}
              className="h-11 border-0 bg-transparent pl-3 pr-8 text-sm text-slate-900 focus:outline-none focus:ring-0"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+81">+81</option>
              <option value="+49">+49</option>
            </select>
            <input
              type="tel"
              value={state.phone}
              onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
              className="h-11 flex-1 border-0 bg-transparent px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>Select Services <span className="text-rose-500">*</span></label>
          <select
            value={state.service}
            onChange={(e) => setState((s) => ({ ...s, service: e.target.value }))}
            className={inputClass}
            required
          >
            <option>MCP Server Development</option>
            <option>AI Chatbots</option>
            <option>AI Agents</option>
            <option>AI Consulting</option>
            <option>RAG Development</option>
            <option>Software Development</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Company Name</label>
        <input
          type="text"
          value={state.company}
          onChange={(e) => setState((s) => ({ ...s, company: e.target.value }))}
          className={inputClass}
          placeholder="Company Name"
        />
      </div>
      <div>
        <label className={labelClass}>Brief Your Requirement <span className="text-rose-500">*</span></label>
        <textarea
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          rows={5}
          className="min-h-[120px] w-full resize-y rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-300"
          placeholder="Share your goals and requirements..."
          required
        />
      </div>
      {status === "success" && (
        <p className="text-sm text-emerald-600">Thanks! We received your message and will reply soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-rose-600">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={!canSubmit || status === "submitting"}
        className="h-12 w-full rounded-xl bg-slate-900 px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-slate-800 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default function McpPage() {
  const [relatedTab, setRelatedTab] = useState<"all" | "ai" | "cloud">("all");

  const industries = [
    { icon: Landmark, title: "Fintech Solutions", desc: "Secure, compliant MCP servers for payments, trading, and risk analytics." },
    { icon: Stethoscope, title: "Healthcare Solutions", desc: "HIPAA-aware tool servers for clinical workflows and patient data." },
    { icon: ShoppingCart, title: "Retail & E-commerce", desc: "Inventory, orders, and personalization via MCP integrations." },
    { icon: GraduationCap, title: "Education Solutions", desc: "LMS and content tool servers for learning platforms." },
    { icon: Film, title: "Media & Entertainment", desc: "Content and analytics tool servers for media workflows." },
    { icon: Truck, title: "Logistics & Supply Chain", desc: "Shipping, tracking, and warehouse MCP integrations." },
  ];

  const features = [
    { icon: GitBranch, title: "Continuous Integration", desc: "Automated builds and tests for MCP server deployments." },
    { icon: Cloud, title: "Cloud Monitoring", desc: "Observability and alerting for production MCP servers." },
    { icon: ShieldCheck, title: "Security & Compliance", desc: "Auth, encryption, and audit trails for tool access." },
    { icon: TrendingUp, title: "Automated Deployments", desc: "Safe rollout and rollback for MCP server updates." },
    { icon: Code2, title: "Infrastructure as Code", desc: "Version-controlled config and provisioning." },
    { icon: Zap, title: "Scalability & Reliability", desc: "Horizontal scaling and fault tolerance for MCP." },
  ];

  const benefits = [
    { title: "Enhanced Scalability", desc: "Scale MCP servers and tool capacity as your AI workloads grow." },
    { title: "Cost Optimization", desc: "Right-size resources and reduce operational overhead." },
    { title: "Improved Performance", desc: "Low-latency tool calls and efficient resource use." },
    { title: "Robust Security", desc: "Role-based access and secure credential handling." },
    { title: "Faster Time-to-Market", desc: "Ship new tools and integrations quickly with MCP." },
    { title: "Expert Support", desc: "Ongoing maintenance and best-practice guidance." },
  ];

  const faqs = [
    { question: "What is MCP Server development?", answer: "MCP (Model Context Protocol) Server development involves building backend services that expose tools and data to AI agents in a standardized way. We design and implement MCP servers that integrate with your existing systems and enable safe, reliable tool use." },
    { question: "How can MCP Server benefit my business?", answer: "MCP Server lets AI agents perform real actions—querying databases, calling APIs, and executing workflows—while you control access and security. This reduces manual work and enables smarter automation." },
    { question: "What technologies are used in MCP Server development?", answer: "We use Node.js, Python, and other runtimes compatible with the MCP SDK. Servers can connect to databases, REST/GraphQL APIs, and internal services with proper auth and error handling." },
    { question: "Is MCP Server suitable for large-scale applications?", answer: "Yes. MCP servers can be scaled horizontally and integrated with load balancers and monitoring. We design for reliability and performance from the start." },
    { question: "What kind of support do you offer for MCP Server?", answer: "We provide implementation, documentation, monitoring setup, and ongoing maintenance. We can also train your team on extending and operating MCP servers." },
    { question: "How do you ensure the security of data on MCP Server?", answer: "We implement authentication, authorization, encryption in transit and at rest, and audit logging. Access is scoped to the minimum required for each tool." },
    { question: "Can MCP Server integrate with existing systems?", answer: "Yes. MCP servers wrap your existing APIs, databases, and services behind a consistent protocol so AI agents can use them safely without direct access." },
    { question: "What is the typical timeline for an MCP Server project?", answer: "A simple MCP server with a few tools can be delivered in 2–4 weeks. Complex integrations and custom tooling may take 6–12 weeks depending on scope." },
  ];

  const blogPosts = [
    { tag: "AI", title: "Revolutionizing Industries with AI-Powered Agents", desc: "How MCP and AI agents are changing the way businesses automate workflows.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=320&fit=crop", author: "Parv Garg", date: "21 May 2024", avatar: "https://i.pravatar.cc/150?img=12" },
    { tag: "Cloud", title: "The Future of AI Consulting", desc: "Integrating MCP servers with cloud infrastructure for scalable AI applications.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=320&fit=crop", author: "Parv Garg", date: "18 May 2024", avatar: "https://i.pravatar.cc/150?img=12" },
    { tag: "MCP", title: "Building Tool Servers for LLM Applications", desc: "Best practices for designing and deploying MCP servers in production.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=320&fit=crop", author: "Parv Garg", date: "15 May 2024", avatar: "https://i.pravatar.cc/150?img=12" },
  ];

  const relatedServicesAll = [
    { title: "AI Chatbots", href: "/what-we-do/ai/chatbots", category: "ai" },
    { title: "AI Agents", href: "/what-we-do/ai/agents", category: "ai" },
    { title: "AI Consulting", href: "/what-we-do/ai/consulting", category: "ai" },
    { title: "RAG Development", href: "/what-we-do/ai/rag", category: "ai" },
    { title: "Cloud & DevOps", href: "/what-we-do/other/devops", category: "cloud" },
    { title: "APIs & Integrations", href: "/what-we-do/software/apis", category: "cloud" },
  ];

  const relatedFiltered =
    relatedTab === "ai"
      ? relatedServicesAll.filter((s) => s.category === "ai")
      : relatedTab === "cloud"
        ? relatedServicesAll.filter((s) => s.category === "cloud")
        : relatedServicesAll;

  return (
    <div className="space-y-16">
      {/* Hero - Bitontree style: light bg, left = breadcrumbs + title + paragraph + CTA, right = MCP architecture diagram */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 shadow-[0_4px_20px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-700">Home</Link>
              <span className="mx-1.5">&#62;</span>
              <Link href="/what-we-do" className="hover:text-slate-700">Services</Link>
              <span className="mx-1.5">&#62;</span>
              <span className="text-slate-800 font-medium">Mcp Server Development Company</span>
            </nav>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              MCP Server Development Company
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We build robust MCP servers with AI integration and 99.99% uptime. Our focus is on performance, scalability, security, and automation—so your applications are ready for AI-driven use cases. From tool orchestration to resource management, we deliver production-grade MCP infrastructure that fits your stack.
            </p>
            <div className="mt-8">
              <ButtonLink href="/lets-talk" variant="dark" className="rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide">
                Consult our AI experts
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-slate-50/90 p-6 shadow-sm lg:p-8">
            {/* MCP architecture diagram: Host Application > MCP Client > MCP Server > Tools | Resources > icons */}
            <div className="flex flex-col items-center gap-0">
              <div className="w-full rounded-lg border border-slate-200 bg-white p-4">
                <div className="text-center text-xs font-semibold uppercase tracking-wide text-slate-500">Host Application</div>
                <div className="mt-3 rounded-lg border-2 border-dashed border-sky-400 bg-sky-50/50 p-3 text-center">
                  <span className="text-sm font-semibold text-slate-800">MCP Client</span>
                </div>
              </div>
              <ChevronDown className="my-1 h-6 w-6 shrink-0 text-slate-400" aria-hidden />
              <div className="w-full rounded-lg border-2 border-sky-500 bg-white py-3 text-center">
                <span className="text-sm font-bold text-slate-900">MCP Server</span>
              </div>
              <div className="my-2 flex w-full gap-4">
                <div className="flex-1 border-t-2 border-dashed border-slate-300" />
                <div className="flex-1 border-t-2 border-dashed border-slate-300" />
              </div>
              <div className="grid w-full grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <div className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-medium text-slate-700">Tools</div>
                  <div className="mt-2 flex gap-2 border-t-2 border-dashed border-slate-200 pt-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600">
                      <Github className="h-5 w-5" />
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-sky-500">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-amber-500">
                      <FolderOpen className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-medium text-slate-700">Resources</div>
                  <div className="mt-2 flex gap-2 border-t-2 border-dashed border-slate-200 pt-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-sky-600">
                      <Database className="h-5 w-5" />
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-amber-50 text-amber-600">
                      <Folder className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is MCP Server? */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200/70 bg-white p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border-2 border-dashed border-sky-300 bg-sky-100/80 p-5">
                <Server className="h-10 w-10 text-sky-600" />
              </div>
              <div className="h-0.5 w-6 border-t-2 border-dashed border-slate-300" />
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/20 ring-4 ring-sky-400/30">
                <div className="h-3 w-3 rounded-full bg-sky-500" />
              </div>
              <div className="h-0.5 w-6 border-t-2 border-dashed border-slate-300" />
              <div className="flex flex-col gap-2">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                  <FileStack className="h-5 w-5 text-slate-600" />
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                  <BarChart3 className="h-5 w-5 text-slate-600" />
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-6 text-xs font-medium text-slate-500">
              <span>Frontend</span>
              <span>Backend</span>
              <span>Database</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              What is MCP Server?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              MCP Server is a powerful backend framework that enables AI applications to securely connect to your tools, databases, and APIs. It provides a standardized protocol so LLMs and agents can discover, invoke, and stream results from your services.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              It simplifies complex server-side operations by exposing well-defined tools with clear inputs and outputs. This reduces integration friction and lets you add new capabilities—from search and analytics to workflow automation—without rebuilding your AI stack.
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="space-y-8">
        <SectionHeading
          title="Industries We Serve with MCP Server Development"
          description="We offer our MCP Server development expertise across a wide range of industries, helping organizations expose their data and workflows to AI agents safely and efficiently."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50">
                <Icon className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key MCP-Based DevOps Features */}
      <section className="space-y-8">
        <SectionHeading
          title="Key MCP-Based DevOps Features"
          description="Our MCP server implementations are built with DevOps best practices: CI/CD, monitoring, security, and scalability so your tool servers run reliably in production."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50">
                <Icon className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of Partnering with MCP Server */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          title="Benefits of Partnering with MCP Server"
          description="Working with our team gives you access to proven patterns, security practices, and scalable architecture for MCP server development and operations."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* We Serve A Diverse Group - Testimonials */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          We Serve A Diverse Group
        </h2>
        <div className="flex flex-wrap gap-6 rounded-2xl border border-slate-200/70 bg-white px-6 py-5">
          {["Client A", "Client B", "Client C"].map((name) => (
            <div key={name} className="flex h-12 w-32 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-500">
              {name}
            </div>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { quote: "PSV delivered our MCP server on time and with clear documentation. Our AI agents now integrate seamlessly with our internal tools.", name: "Sarah Chen", role: "CTO, DataFlow Inc", avatar: "https://i.pravatar.cc/150?img=5" },
            { quote: "The team understood our security requirements and built an MCP server that our compliance team approved. Highly recommend.", name: "James Wilson", role: "VP Engineering, SecureTech", avatar: "https://i.pravatar.cc/150?img=12" },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <p className="text-lg italic leading-8 text-slate-700">&ldquo;{t.quote}&rdquo;</p>
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
        <div className="flex justify-center gap-2">
          {[0, 1].map((i) => (
            <button key={i} type="button" className="h-2 w-2 rounded-full bg-slate-300" aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Get Insights From Our Latest Blogs */}
      <section className="space-y-8">
        <SectionHeading
          title="Get Insights From Our Latest Blogs"
          description="Explore our articles and stay informed."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="relative h-40 w-full bg-slate-200">
                <Image src={post.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">{post.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{post.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <Image src={post.avatar} alt="" width={24} height={24} className="h-6 w-6 rounded-full object-cover" />
                  <span className="font-medium text-slate-700">{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
                <Link href="/blog" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-indigo-600">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Other Related Services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Other Related Services</h2>
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
              className={`border-b-2 px-4 py-2 text-sm font-semibold transition ${
                relatedTab === id
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
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
              className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition hover:border-indigo-200 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">Learn more about our {s.title.toLowerCase()} offerings.</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-indigo-600">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <Accordion items={faqs} defaultOpenIndex={0} variant="arrow" />
      </section>

      {/* Discover how we can help - Bitontree-style two columns: left stats, right form */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Discover how we can help your business grow
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Connect with PSV Enterprises: Reach out for tailored software solutions and seamless collaboration. Let&apos;s turn your ideas into powerful realities together.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "6+", label: "Years Of Experience" },
                { icon: Users, value: "40+", label: "Skilled Professionals" },
                { icon: CheckCircle2, value: "105+", label: "Projects Delivered" },
                { icon: Globe, value: "35+", label: "Global Clientele Served" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-slate-900">{value}</div>
                    <div className="text-sm text-slate-600">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_4px_20px_rgba(2,6,23,0.08)] sm:p-8">
            <McpCtaForm />
          </div>
        </div>
      </section>
    </div>
  );
}
