"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { ButtonLink } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Database,
  Cpu,
  Cloud,
  Layout,
  Zap,
  Users,
  Award,
  Globe,
  BarChart3,
  Lightbulb,
  Wrench,
  Rocket,
  Monitor,
  Gauge,
  Box,
  FlaskConical,
  Settings2,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

const accentDot = <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" aria-hidden />;

export default function MlopsPage() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [faqs] = useState([
    { question: "What is MLOps?", answer: "MLOps (Machine Learning Operations) is the practice of deploying, monitoring, and maintaining ML models in production. It combines ML with DevOps principles to ensure reliable, scalable, and reproducible model lifecycle management." },
    { question: "Why do I need MLOps?", answer: "MLOps helps you ship models faster, reduce drift and errors, and scale ML across your organization. Without it, models often fail in production due to data shifts, version skew, or lack of monitoring." },
    { question: "What tools do you use for MLOps?", answer: "We use industry-standard tools including MLflow, Kubeflow, Docker, Kubernetes, and cloud ML services (AWS SageMaker, Azure ML, GCP Vertex). We choose based on your stack and scale." },
    { question: "How long does an MLOps implementation take?", answer: "A basic pipeline can be in place in 2–4 weeks. Full production-grade MLOps with monitoring, retraining, and governance typically takes 6–12 weeks depending on complexity." },
  ]);

  const processSteps = [
    { num: "01", icon: Lightbulb, title: "Strategy & Planning", desc: "Define ML goals, data strategy, and success metrics with stakeholders." },
    { num: "02", icon: Layout, title: "Design & Architecture", desc: "Design data pipelines, model serving, and monitoring architecture." },
    { num: "03", icon: Wrench, title: "Development & Training", desc: "Build, train, and validate models with versioning and experiment tracking." },
    { num: "04", icon: Rocket, title: "Deployment & Monitoring", desc: "Deploy to production with CI/CD, monitoring, and drift detection." },
  ];

  const techStack = ["TensorFlow", "PyTorch", "Kubernetes", "Docker", "AWS", "Azure", "GCP", "MLflow", "Jenkins", "Airflow", "Grafana", "Prometheus"];

  const blogPosts = [
    { tag: "MLOps", title: "Building Production-Ready ML Pipelines", snippet: "Best practices for versioning, testing, and deploying ML models at scale.", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=240&fit=crop", author: "PSV Team", date: "Jun 2024", avatar: "https://i.pravatar.cc/150?img=12" },
    { tag: "AI", title: "Monitoring ML Models in Production", snippet: "How to detect drift, track performance, and automate retraining.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=240&fit=crop", author: "PSV Team", date: "May 2024", avatar: "https://i.pravatar.cc/150?img=12" },
    { tag: "DevOps", title: "CI/CD for Machine Learning", snippet: "Integrating ML into your existing DevOps workflow for faster releases.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop", author: "PSV Team", date: "Apr 2024", avatar: "https://i.pravatar.cc/150?img=12" },
  ];

  const scrollProjects = (dir: "left" | "right") => {
    if (!projectsRef.current) return;
    const step = 340;
    projectsRef.current.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

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
        <span className="font-semibold text-slate-900">MLOps</span>
      </nav>

      {/* Hero */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-100/60 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">AI & ML / MLOps</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              MLOps Development Services
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We help you operationalize machine learning from experiment to production. Our MLOps services cover pipeline automation, model deployment, monitoring, and continuous improvement—so your ML initiatives deliver reliable, scalable results.
            </p>
            <div className="mt-8">
              <ButtonLink href="/lets-talk" variant="dark" className="rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide">
                Get Started
              </ButtonLink>
            </div>
          </div>
          {/* Infinity loop: ML (left) | Ops (right) */}
          <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_4px_20px_rgba(2,6,23,0.08)]">
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center rounded-2xl border-2 border-sky-200 bg-sky-50/50 p-6">
                <span className="text-lg font-bold text-slate-800">ML</span>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-medium text-slate-600">
                  <span className="flex items-center gap-1"><Database className="h-3.5 w-3.5" /> Data</span>
                  <span className="flex items-center gap-1"><Box className="h-3.5 w-3.5" /> Model</span>
                  <span className="flex items-center gap-1"><FlaskConical className="h-3.5 w-3.5" /> Experimentation</span>
                  <span className="flex items-center gap-1"><Settings2 className="h-3.5 w-3.5" /> Feature Eng.</span>
                </div>
              </div>
              <div className="h-12 w-px bg-slate-200" />
              <div className="flex flex-col items-center rounded-2xl border-2 border-slate-200 bg-slate-50/50 p-6">
                <span className="text-lg font-bold text-slate-800">Ops</span>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-medium text-slate-600">
                  <span className="flex items-center gap-1"><Rocket className="h-3.5 w-3.5" /> Deployment</span>
                  <span className="flex items-center gap-1"><Monitor className="h-3.5 w-3.5" /> Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How MLOps Works for You */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex justify-center">
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-2 border-dashed border-sky-200 bg-sky-50/30">
              <div className="absolute inset-0 flex items-center justify-center gap-2">
                <Database className="h-8 w-8 text-sky-600" />
                <Cpu className="h-8 w-8 text-slate-600" />
                <Cloud className="h-8 w-8 text-sky-600" />
                <Gauge className="h-8 w-8 text-slate-600" />
              </div>
              <span className="relative z-10 text-center text-xs font-semibold text-slate-600">Data → Train → Deploy → Monitor</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              How MLOps Works for You{accentDot}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              MLOps brings discipline to the ML lifecycle: from data ingestion and feature engineering to model training, deployment, and ongoing monitoring. We design pipelines that fit your stack and scale, so your team can iterate quickly without sacrificing reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Core Components of MLOps */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Core Components of MLOps{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A robust MLOps setup rests on data management, model development, and production deployment with full observability.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Database, title: "Data & Feature Management", desc: "Versioned datasets, feature stores, and pipelines that keep training and inference data consistent and traceable." },
            { icon: Cpu, title: "Model Development", desc: "Experiment tracking, model registry, and reproducible training workflows integrated with your codebase." },
            { icon: Cloud, title: "Deployment & Monitoring", desc: "Scalable model serving, A/B testing, and monitoring for latency, drift, and business metrics." },
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

      {/* Unlock Your Business Potential with MLOps */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Unlock Your Business Potential with MLOps{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            MLOps accelerates delivery, improves collaboration, and keeps your models performing in production.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Zap, title: "Accelerated Deployment", desc: "Ship models faster with automated pipelines, testing, and rollback—reducing time from experiment to production." },
            { icon: Users, title: "Enhanced Collaboration", desc: "Unified workflows and visibility so data scientists and engineers work from a single source of truth." },
            { icon: BarChart3, title: "Improved Model Performance", desc: "Continuous monitoring and retraining keep models accurate as data and requirements evolve." },
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

      {/* Why Choose Us for MLOps (with image) */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Why Choose Us for Your MLOps Needs?{accentDot}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              We combine deep ML engineering with production DevOps experience. From pipeline design to monitoring and governance, we help you build MLOps that scales with your team and your data—without vendor lock-in.
            </p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl bg-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
              alt="MLOps and data analytics"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Our MLOps Development Process */}
      <section className="space-y-10">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Our MLOps Development Process{accentDot}
        </h2>
        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {processSteps.map((step, i) => {
            const StepIcon = step.icon;
            return (
            <div key={step.num} className="flex items-center gap-4">
              <div className="flex w-full flex-col items-center rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:w-auto">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <StepIcon className="h-6 w-6" />
                </div>
                <span className="mt-3 text-2xl font-bold text-slate-300">{step.num}</span>
                <h3 className="mt-2 font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{step.desc}</p>
              </div>
              {i < processSteps.length - 1 && (
                <div className="hidden shrink-0 lg:block">
                  <ArrowRight className="h-6 w-6 text-slate-300" />
                </div>
              )}
            </div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Featured Projects</h2>
            <p className="mt-2 max-w-xl text-base text-slate-600">MLOps and ML pipeline implementations we&apos;ve delivered.</p>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => scrollProjects("left")} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50" aria-label="Previous projects">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => scrollProjects("right")} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50" aria-label="Next projects">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div ref={projectsRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {[
            { tag: "MLOps", title: "End-to-End ML Pipeline for FinTech", desc: "Automated training, deployment, and monitoring for fraud detection models.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop", tech: "TensorFlow, Kubernetes" },
            { tag: "AI", title: "Model Registry and CI/CD for Healthcare", desc: "Governed model lifecycle with audit trails and rollback.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=240&fit=crop", tech: "MLflow, Azure ML" },
            { tag: "MLOps", title: "Real-Time Inference at Scale", desc: "Low-latency serving and A/B testing for recommendation models.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop", tech: "PyTorch, Docker" },
          ].map((p) => (
            <article key={p.title} className="w-[85vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:w-[320px]">
              <div className="relative h-40 bg-slate-200">
                <Image src={p.image} alt="" fill className="object-cover" sizes="320px" />
              </div>
              <div className="p-5">
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">{p.tag}</span>
                <h3 className="mt-3 font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.desc}</p>
                <p className="mt-2 text-xs text-slate-500">{p.tech}</p>
                <Link href="/our-work" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-indigo-600">
                  View Case Study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-center sm:py-18">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Ready to Transform Your ML Workflow?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Let&apos;s build MLOps that scales with your data and your team.
        </p>
        <div className="mt-6">
          <Link href="/lets-talk" className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold text-slate-900 hover:bg-lime-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Why Choose Us for MLOps Development Services? (2x2) */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why Choose Us for MLOps Development Services?{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We bring engineering rigor and production experience to every MLOps engagement.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { icon: Award, title: "Expert Team", desc: "ML engineers and DevOps practitioners with hands-on experience in model deployment and pipeline automation." },
            { icon: Layout, title: "Custom Solutions", desc: "We design MLOps to fit your stack, scale, and compliance requirements—no one-size-fits-all." },
            { icon: Globe, title: "Proven at Scale", desc: "From startups to enterprises, we&apos;ve delivered MLOps that handle high throughput and strict SLAs." },
            { icon: BarChart3, title: "Measurable Outcomes", desc: "Clear metrics for deployment frequency, model performance, and operational cost." },
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

      {/* Our Comprehensive MLOps Development Services (2x3) */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Comprehensive MLOps Development Services{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            From pipeline design to monitoring and governance, we cover the full MLOps lifecycle.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "ML Pipeline Automation", desc: "End-to-end automation for data ingestion, training, and deployment with versioning and rollback." },
            { title: "Model Monitoring & Management", desc: "Track performance, drift, and data quality with alerts and automated retraining triggers." },
            { title: "Model Registry & Versioning", desc: "Centralized registry for model artifacts, metadata, and stage transitions." },
            { title: "CI/CD for ML", desc: "Integrate ML into your CI/CD with testing, staging, and production promotion." },
            { title: "Feature Store & Data Pipelines", desc: "Consistent features for training and serving with low-latency access." },
            { title: "Governance & Compliance", desc: "Audit trails, access control, and compliance-ready model lifecycle management." },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Tech Stack for MLOps */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our Tech Stack for MLOps{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We work with industry-standard frameworks and clouds to build MLOps that fits your environment.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {techStack.map((name) => (
              <div key={name} className="flex items-center justify-center rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-4 text-center text-sm font-semibold tracking-tight text-slate-600">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <TestimonialCarousel
          items={[
            { quote: "PSV set up our MLOps pipeline from scratch. We now deploy models weekly with confidence and full traceability.", name: "Alex R.", role: "Head of ML", industry: "FinTech", avatar: "https://i.pravatar.cc/150?img=3" },
            { quote: "Their team understood our compliance requirements and delivered a governed model lifecycle we could audit.", name: "Maria S.", role: "VP Engineering", industry: "Healthcare", avatar: "https://i.pravatar.cc/150?img=5" },
            { quote: "Monitoring and retraining are automated. Our model performance has stayed high as our data has grown.", name: "David L.", role: "CTO", industry: "E-commerce", avatar: "https://i.pravatar.cc/150?img=8" },
          ]}
        />
      </section>

      {/* Explore Our Blog */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Explore Our Blog{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Insights on MLOps, ML pipelines, and production machine learning.
          </p>
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
        <div className="flex justify-center">
          <ButtonLink href="/blog" variant="secondary" className="rounded-lg border-2 border-slate-900 px-6 py-3 font-bold uppercase tracking-wide text-slate-900 hover:bg-slate-50">
            View All Blogs
          </ButtonLink>
        </div>
      </section>

      {/* Discover how we can help */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Discover how we can help
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Tell us about your ML goals and we&apos;ll help you design and implement MLOps that scale.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Briefcase, value: "150+", label: "Projects Delivered" },
                { icon: CheckCircle2, value: "10+", label: "Global Clientele Served" },
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
              Let&apos;s listen to your project idea!
            </p>
            <div className="mt-6">
              <ContactForm source="mlops" submitLabel="GET IN TOUCH" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions{accentDot}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Common questions about MLOps, our approach, and what to expect.
          </p>
        </div>
        <Accordion items={faqs} defaultOpenIndex={0} variant="arrow" />
      </section>
    </div>
  );
}
