"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "./Container";
import { ButtonLink } from "./Button";
import { ChevronDown, Code2, Cpu, Sparkles, Smartphone } from "lucide-react";

type TopMenuKey = "what" | "industries" | "work" | "company";
type WhatWeDoTab = "ai" | "software" | "other" | "engagement";

const topNav: Array<{ key: TopMenuKey; label: string; href: string }> = [
  { key: "what", label: "What we do", href: "/what-we-do" },
  { key: "industries", label: "Industries", href: "/industries" },
  { key: "work", label: "Our work", href: "/our-work" },
  { key: "company", label: "Company", href: "/company" },
];

function useOnEscape(handler: () => void) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handler();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handler]);
}

export function SiteHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState<TopMenuKey | null>(null);
  const [whatTab, setWhatTab] = useState<WhatWeDoTab>("ai");

  useOnEscape(() => setOpen(null));

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      const el = headerRef.current;
      if (!el) return;
      if (e.target instanceof Node && el.contains(e.target)) return;
      setOpen(null);
    }
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const whatWeDoTabs = useMemo(
    () =>
      [
        { key: "ai" as const, label: "AI Development" },
        { key: "software" as const, label: "Software Development" },
        { key: "other" as const, label: "Other Services" },
        { key: "engagement" as const, label: "Engagement Models" },
      ] satisfies Array<{ key: WhatWeDoTab; label: string }>,
    []
  );

  const whatWeDoContent = useMemo(() => {
    const commonHead = {
      ai: { title: "AI Development", subtitle: "Providing future‑ready solutions" },
      software: { title: "Software Development", subtitle: "Modern web platforms that scale" },
      other: { title: "Other Services", subtitle: "Add-ons that accelerate delivery" },
      engagement: { title: "Engagement Models", subtitle: "Flexible ways to work with PSV" },
    }[whatTab];

    const items =
      whatTab === "ai"
        ? [
            {
              title: "AI Chatbot Development",
              desc: "AI-driven chatbot solutions",
              href: "/what-we-do/ai/chatbots",
            },
            {
              title: "AI Agent Development",
              desc: "Adaptive conversational agents",
              href: "/what-we-do/ai/agents",
            },
            {
              title: "AI Consulting Services",
              desc: "Business‑focused AI advisory service",
              href: "/what-we-do/ai/consulting",
            },
            {
              title: "AI Automation Development",
              desc: "Next‑gen process automation solutions",
              href: "/what-we-do/ai/automation",
            },
            {
              title: "RAG Development Services",
              desc: "Private search over your documents",
              href: "/what-we-do/ai/rag",
            },
            {
              title: "MCP Server Development",
              desc: "Tooling & server frameworks for AI apps",
              href: "/what-we-do/ai/mcp",
            },
            {
              title: "Generative AI Development",
              desc: "Innovate with generative AI",
              href: "/what-we-do/ai/generative",
            },
            {
              title: "MLOps Development",
              desc: "Optimized ML operations & deployment",
              href: "/what-we-do/ai/mlops",
            },
          ]
        : whatTab === "software"
          ? [
              {
                title: "MERN Stack Development",
                desc: "Next.js + Node + MongoDB systems",
                href: "/services/mern",
              },
              {
                title: "API Development",
                desc: "Secure REST APIs and integrations",
                href: "/what-we-do/software/apis",
              },
              {
                title: "SaaS & Dashboards",
                desc: "Multi‑tenant products and admin tools",
                href: "/what-we-do/software/saas",
              },
              {
                title: "E‑commerce Platforms",
                desc: "Catalog, payments, and order workflows",
                href: "/what-we-do/software/ecommerce",
              },
              {
                title: "Mobile App Development",
                desc: "iOS/Android apps with premium UX",
                href: "/services/mobile",
              },
              {
                title: "UI/UX & Frontend",
                desc: "Conversion-focused design systems",
                href: "/what-we-do/software/ui-ux",
              },
            ]
          : whatTab === "other"
            ? [
                {
                  title: "Product Discovery",
                  desc: "Scope, roadmap, and MVP definition",
                  href: "/what-we-do/other/discovery",
                },
                {
                  title: "DevOps & Deployment",
                  desc: "CI/CD, environments, and reliability",
                  href: "/what-we-do/other/devops",
                },
                {
                  title: "Performance Optimization",
                  desc: "Speed improvements for web & APIs",
                  href: "/what-we-do/other/performance",
                },
                {
                  title: "Maintenance & Support",
                  desc: "Post-launch improvements and SLAs",
                  href: "/what-we-do/other/maintenance",
                },
              ]
            : [
                {
                  title: "Software Outsourcing",
                  desc: "End-to-end project ownership",
                  href: "/what-we-do/engagement/outsourcing",
                },
                {
                  title: "Dedicated Team",
                  desc: "Full-time committed resources",
                  href: "/what-we-do/engagement/dedicated-team",
                },
                {
                  title: "Staff Augmentation",
                  desc: "On-demand experts for your team",
                  href: "/what-we-do/engagement/staff-augmentation",
                },
              ];

    return { head: commonHead, items };
  }, [whatTab]);

  return (
    <header
      ref={(n) => {
        headerRef.current = n;
      }}
      className="sticky top-0 z-50 border-b border-black/5 bg-white/65 backdrop-blur"
      onMouseLeave={() => setOpen(null)}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 shadow-sm shadow-indigo-600/20">
              <span className="text-sm font-black tracking-tight text-white">
                PSV
              </span>
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-slate-900">
                PSV Enterprises
              </div>
              <div className="text-xs text-slate-500">
                MERN • AI • Mobile Apps
              </div>
            </div>
          </Link>

          <nav className="relative hidden items-center gap-6 md:flex">
            {topNav.map((item) => (
              <div key={item.key} className="relative">
                <Link
                  href={item.href}
                  onMouseEnter={() => setOpen(item.key)}
                  onFocus={() => setOpen(item.key)}
                  onClick={() => {
                    // Clicking should navigate; if user wants to just open the menu,
                    // they can hover/focus. Keeping click as navigation.
                    setOpen(null);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-slate-600 hover:text-slate-900"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}

            {open ? (
              <div className="absolute left-1/2 top-[calc(100%+14px)] w-[min(1040px,calc(100vw-64px))] -translate-x-1/2 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
                {open === "what" ? (
                  <div className="grid grid-cols-12">
                    <div className="col-span-4 border-r border-black/5 bg-slate-50 p-4">
                      <div className="space-y-1">
                        {whatWeDoTabs.map((t) => (
                          <button
                            key={t.key}
                            type="button"
                            onMouseEnter={() => setWhatTab(t.key)}
                            onFocus={() => setWhatTab(t.key)}
                            className={[
                              "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold",
                              whatTab === t.key
                                ? "bg-white text-slate-900 ring-1 ring-black/10"
                                : "text-slate-700 hover:bg-white/70",
                            ].join(" ")}
                          >
                            <span>{t.label}</span>
                            <span className="text-slate-400">→</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-8 p-6">
                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-sm">
                          <Sparkles className="h-5 w-5" />
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">
                            {whatWeDoContent.head.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {whatWeDoContent.head.subtitle}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {whatWeDoContent.items.map((i) => (
                          <Link
                            key={i.href}
                            href={i.href}
                            className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm hover:bg-slate-50"
                            onClick={() => setOpen(null)}
                          >
                            <div className="text-sm font-semibold text-slate-900">
                              {i.title}
                            </div>
                            <div className="mt-1 text-sm leading-6 text-slate-600">
                              {i.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6">
                    <div className="text-sm font-semibold text-slate-900">
                      {open === "industries"
                        ? "Industries"
                        : open === "work"
                          ? "Our work"
                          : "Company"}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Browse the section pages.
                    </div>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {open === "industries" ? (
                        <>
                          <MegaLink href="/industries" title="Industries overview" desc="Domains we support and common use-cases." onSelect={() => setOpen(null)} />
                          <MegaLink href="/lets-talk" title="Discuss your industry" desc="Tell us your domain constraints and goals." onSelect={() => setOpen(null)} />
                        </>
                      ) : open === "work" ? (
                        <>
                          <MegaLink href="/our-work" title="Case studies" desc="Featured projects and outcomes." onSelect={() => setOpen(null)} />
                          <MegaLink href="/work" title="Work (detailed)" desc="Expanded writeups and success metrics." onSelect={() => setOpen(null)} />
                        </>
                      ) : (
                        <>
                          <MegaLink href="/company" title="About PSV" desc="How we work, values, and FAQs." onSelect={() => setOpen(null)} />
                          <MegaLink href="/about" title="About (detailed)" desc="Expanded company story and process." onSelect={() => setOpen(null)} />
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 lg:flex">
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs text-slate-700 ring-1 ring-black/10">
                <Code2 className="h-3.5 w-3.5" />
                MERN
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs text-slate-700 ring-1 ring-black/10">
                <Cpu className="h-3.5 w-3.5" />
                AI
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs text-slate-700 ring-1 ring-black/10">
                <Smartphone className="h-3.5 w-3.5" />
                Mobile
              </span>
            </div>
            <ButtonLink href="/lets-talk" variant="primary" className="px-4">
              Let&apos;s talk
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}

function MegaLink({
  href,
  title,
  desc,
  onSelect,
}: {
  href: string;
  title: string;
  desc: string;
  onSelect: () => void;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm hover:bg-slate-50"
      onClick={onSelect}
    >
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm leading-6 text-slate-600">{desc}</div>
    </Link>
  );
}

