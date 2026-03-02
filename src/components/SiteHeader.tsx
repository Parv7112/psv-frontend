"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Container } from "./Container";
import { ButtonLink } from "./Button";
import {
  ChevronDown,
  ChevronRight,
  BarChart3,
  Code2,
  Cpu,
  Handshake,
  Menu,
  Sparkles,
  Smartphone,
  X,
  ArrowLeft,
} from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState<"root" | "submenu">("root");
  const [mobileActive, setMobileActive] = useState<TopMenuKey>("what");
  const [mobileWhatOpen, setMobileWhatOpen] = useState<WhatWeDoTab | null>(null);
  const [mounted, setMounted] = useState(false);

  useOnEscape(() => {
    setOpen(null);
    setMobileMenuOpen(false);
    setMobileView("root");
    setMobileWhatOpen(null);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

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

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileView("root");
    setMobileWhatOpen(null);
  };

  const whatWeDoContentByTab = useMemo(() => {
    const make = (tab: WhatWeDoTab) => {
      const head = {
        ai: { title: "AI Development", subtitle: "Providing future‑ready solutions" },
        software: { title: "Software Development", subtitle: "Next-Gen Software Solutions" },
        other: { title: "Other Services", subtitle: "Next-Gen Software Solutions" },
        engagement: { title: "Engagement Models", subtitle: "Flexible ways to work with PSV" },
      }[tab];

      const items =
        tab === "ai"
          ? [
              { title: "AI Chatbot Development", desc: "AI-driven chatbot solutions", href: "/what-we-do/ai/chatbots" },
              { title: "AI Agent Development", desc: "Adaptive conversational agents", href: "/what-we-do/ai/agents" },
              { title: "AI Consulting Services", desc: "Business‑focused AI advisory service", href: "/what-we-do/ai/consulting" },
              { title: "AI Automation Development", desc: "Next‑gen process automation solutions", href: "/what-we-do/ai/automation" },
              { title: "RAG Development Services", desc: "Private search over your documents", href: "/what-we-do/ai/rag" },
              { title: "MCP Server Development", desc: "Tooling & server frameworks for AI apps", href: "/what-we-do/ai/mcp" },
              { title: "Generative AI Development", desc: "Innovate with generative AI", href: "/what-we-do/ai/generative" },
              { title: "MLOps Development", desc: "Optimized ML operations & deployment", href: "/what-we-do/ai/mlops" },
            ]
          : tab === "software"
            ? [
                { title: "Custom Software Development", desc: "Tailored tech solutions", href: "/what-we-do/software/custom" },
                { title: "ERP Development", desc: "Integrated business ERP solutions", href: "/what-we-do/software/erp" },
                { title: "Mobile Application Development", desc: "Smart Native Mobile Solutions", href: "/what-we-do/software/mobile" },
                { title: "Web Application Development", desc: "Future-ready browser applications", href: "/what-we-do/software/web-app" },
                { title: "Website Development", desc: "Transformative Online Presence", href: "/what-we-do/software/website" },
              ]
            : tab === "other"
              ? [
                  { title: "UI/UX Designing", desc: "User-friendly software solutions", href: "/what-we-do/other/ui-ux" },
                  { title: "Offshore Development Centre", desc: "Optimized remote operations", href: "/what-we-do/other/offshore" },
                  { title: "Support and Maintenance", desc: "Reliable system fine-tuning", href: "/what-we-do/other/maintenance" },
                ]
              : [
                  { title: "Software Outsourcing", desc: "End-to-end project ownership", href: "/what-we-do/engagement/outsourcing" },
                  { title: "Dedicated Team", desc: "Full-time committed resources", href: "/what-we-do/engagement/dedicated-team" },
                  { title: "Staff Augmentation", desc: "On-demand experts for your team", href: "/what-we-do/engagement/staff-augmentation" },
                ];

      return { head, items };
    };

    return {
      ai: make("ai"),
      software: make("software"),
      other: make("other"),
      engagement: make("engagement"),
    } satisfies Record<WhatWeDoTab, ReturnType<typeof make>>;
  }, []);

  const whatWeDoContent = whatWeDoContentByTab[whatTab];

  return (
    <>
      <header
        ref={(n) => {
          headerRef.current = n;
        }}
        className="sticky top-0 z-50 border-b border-black/5 bg-white/65 backdrop-blur"
        onMouseLeave={() => setOpen(null)}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="group inline-flex items-center rounded-xl bg-white/80 px-2 py-1 ring-1 ring-black/10 hover:bg-white"
            >
              <span className="sr-only">PSV Enterprises</span>
              <Image
                src="/logo.png"
                alt="PSV Enterprises"
                width={320}
                height={120}
                priority
                className="h-14 w-auto object-contain sm:h-16"
              />
            </Link>

            <nav className="relative hidden items-center gap-6 md:flex">
              {topNav.map((item) => (
                <div key={item.key} className="relative">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setOpen(item.key)}
                    onFocus={() => setOpen(item.key)}
                    onClick={() => setOpen(null)}
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
                            {whatTab === "software" ? <Code2 className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">{whatWeDoContent.head.title}</div>
                            <div className="text-xs text-slate-500">{whatWeDoContent.head.subtitle}</div>
                          </div>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          {whatTab === "software" && whatWeDoContent.items.length === 5 ? (
                            <>
                              <div className="space-y-4">
                                {whatWeDoContent.items.slice(0, 3).map((i) => (
                                  <Link
                                    key={i.href}
                                    href={i.href}
                                    className="block rounded-2xl border border-black/5 bg-white p-4 shadow-sm hover:bg-slate-50"
                                    onClick={() => setOpen(null)}
                                  >
                                    <div className="text-sm font-semibold text-slate-900">{i.title}</div>
                                    <div className="mt-1 text-sm leading-6 text-slate-600">{i.desc}</div>
                                  </Link>
                                ))}
                              </div>
                              <div className="space-y-4">
                                {whatWeDoContent.items.slice(3, 5).map((i) => (
                                  <Link
                                    key={i.href}
                                    href={i.href}
                                    className="block rounded-2xl border border-black/5 bg-white p-4 shadow-sm hover:bg-slate-50"
                                    onClick={() => setOpen(null)}
                                  >
                                    <div className="text-sm font-semibold text-slate-900">{i.title}</div>
                                    <div className="mt-1 text-sm leading-6 text-slate-600">{i.desc}</div>
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : whatTab === "other" && whatWeDoContent.items.length === 3 ? (
                            <>
                              <div className="space-y-4">
                                {whatWeDoContent.items.slice(0, 2).map((i) => (
                                  <Link
                                    key={i.href}
                                    href={i.href}
                                    className="block rounded-2xl border border-black/5 bg-white p-4 shadow-sm hover:bg-slate-50"
                                    onClick={() => setOpen(null)}
                                  >
                                    <div className="text-sm font-semibold text-slate-900">{i.title}</div>
                                    <div className="mt-1 text-sm leading-6 text-slate-600">{i.desc}</div>
                                  </Link>
                                ))}
                              </div>
                              <div className="space-y-4">
                                {whatWeDoContent.items.slice(2, 3).map((i) => (
                                  <Link
                                    key={i.href}
                                    href={i.href}
                                    className="block rounded-2xl border border-black/5 bg-white p-4 shadow-sm hover:bg-slate-50"
                                    onClick={() => setOpen(null)}
                                  >
                                    <div className="text-sm font-semibold text-slate-900">{i.title}</div>
                                    <div className="mt-1 text-sm leading-6 text-slate-600">{i.desc}</div>
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            whatWeDoContent.items.map((i) => (
                              <Link
                                key={i.href}
                                href={i.href}
                                className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm hover:bg-slate-50"
                                onClick={() => setOpen(null)}
                              >
                                <div className="text-sm font-semibold text-slate-900">{i.title}</div>
                                <div className="mt-1 text-sm leading-6 text-slate-600">{i.desc}</div>
                              </Link>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  ) : open === "industries" ? (
                    <div className="p-6">
                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-sm">
                          <BarChart3 className="h-5 w-5" />
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Industries We Serve</div>
                          <div className="text-xs text-slate-500">Next-Gen Software Solutions</div>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-3">
                        <IndustryLink
                          title="Healthcare"
                          desc="Advancing patient care with tech"
                          href="/industries"
                          onSelect={() => setOpen(null)}
                        />
                        <IndustryLink
                          title="Education"
                          desc="Enhancing learning via software solutions"
                          href="/industries"
                          onSelect={() => setOpen(null)}
                        />
                        <IndustryLink
                          title="Retail & E-commerce"
                          desc="Innovating retail tech solutions"
                          href="/industries"
                          onSelect={() => setOpen(null)}
                        />
                        <IndustryLink
                          title="Manufacturing"
                          desc="Optimizing operations through software"
                          href="/industries"
                          onSelect={() => setOpen(null)}
                        />
                        <IndustryLink
                          title="Finance"
                          desc="Revolutionizing financial services"
                          href="/industries"
                          onSelect={() => setOpen(null)}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="p-6">
                      <div className="text-sm font-semibold text-slate-900">
                        {open === "work" ? "Our work" : "Company"}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">Browse the section pages.</div>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {open === "work" ? (
                          <>
                            <MegaLink
                              href="/our-work"
                              title="Case studies"
                              desc="Featured projects and outcomes."
                              onSelect={() => setOpen(null)}
                            />
                            <MegaLink
                              href="/work"
                              title="Work (detailed)"
                              desc="Expanded writeups and success metrics."
                              onSelect={() => setOpen(null)}
                            />
                          </>
                        ) : (
                          <>
                            <MegaLink
                              href="/company"
                              title="About PSV"
                              desc="How we work, values, and FAQs."
                              onSelect={() => setOpen(null)}
                            />
                            <MegaLink
                              href="/about"
                              title="About (detailed)"
                              desc="Expanded company story and process."
                              onSelect={() => setOpen(null)}
                            />
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
              <div className="hidden md:block">
                <ButtonLink href="/lets-talk" variant="primary" className="px-4">
                  Let&apos;s talk
                </ButtonLink>
              </div>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-slate-700 md:hidden"
                onClick={() => {
                  setMobileMenuOpen(true);
                  setMobileView("root");
                  setMobileWhatOpen(null);
                }}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {mounted && mobileMenuOpen
        ? createPortal(
            <MobileDrawer
              mobileView={mobileView}
              mobileActive={mobileActive}
              mobileWhatOpen={mobileWhatOpen}
              activeWhatTab={whatTab}
              whatWeDoTabs={whatWeDoTabs}
              whatWeDoContentByTab={whatWeDoContentByTab}
              onClose={closeMobile}
              onBack={() => {
                setMobileView("root");
                setMobileWhatOpen(null);
              }}
              onSelectRoot={(k) => {
                setMobileActive(k);
                setMobileView("submenu");
                setMobileWhatOpen(null);
              }}
              onToggleWhat={(k) => {
                setMobileWhatOpen((prev) => (prev === k ? null : k));
                setWhatTab(k);
              }}
            />,
            document.body
          )
        : null}
    </>
  );
}

function MobileDrawer({
  mobileView,
  mobileActive,
  mobileWhatOpen,
  activeWhatTab,
  whatWeDoTabs,
  whatWeDoContentByTab,
  onClose,
  onBack,
  onSelectRoot,
  onToggleWhat,
}: {
  mobileView: "root" | "submenu";
  mobileActive: TopMenuKey;
  mobileWhatOpen: WhatWeDoTab | null;
  activeWhatTab: WhatWeDoTab;
  whatWeDoTabs: Array<{ key: WhatWeDoTab; label: string }>;
  whatWeDoContentByTab: Record<
    WhatWeDoTab,
    { head: { title: string; subtitle: string }; items: Array<{ title: string; desc: string; href: string }> }
  >;
  onClose: () => void;
  onBack: () => void;
  onSelectRoot: (k: TopMenuKey) => void;
  onToggleWhat: (k: WhatWeDoTab) => void;
}) {
  return (
    <div className="fixed inset-0 z-[80] bg-white md:hidden">
      <div className="mx-auto flex h-full w-full max-w-[420px] flex-col">
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          {mobileView === "submenu" ? (
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700"
              aria-label="Back"
              onClick={onBack}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-2 py-1 ring-1 ring-black/10">
              <Image
                src="/logo.png"
                alt="PSV Enterprises"
                width={280}
                height={110}
                className="h-11 w-auto object-contain"
              />
            </span>
          )}

          {mobileView === "submenu" ? (
            <div className="text-xs font-extrabold uppercase tracking-widest text-slate-800">
              {mobileActive === "what"
                ? "What we do"
                : mobileActive === "industries"
                  ? "Industries"
                  : mobileActive === "work"
                    ? "Our work"
                    : "Company"}
            </div>
          ) : (
            <div />
          )}

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 pb-10">
          {mobileView === "root" ? (
            <div className="space-y-4 pt-4">
              {[
                { key: "what" as const, label: "What we do" },
                { key: "industries" as const, label: "Industries" },
                { key: "work" as const, label: "Our work" },
                { key: "company" as const, label: "Company" },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => onSelectRoot(item.key)}
                  className="flex w-full items-center justify-between border-b border-black/10 py-4 text-left"
                >
                  <span className="text-sm font-extrabold uppercase tracking-widest text-slate-800">
                    {item.label}
                  </span>
                  <ChevronRight className="h-5 w-5 text-slate-400" />
                </button>
              ))}
            </div>
          ) : mobileActive === "what" ? (
            <div className="space-y-4">
              {whatWeDoTabs.map((t) => {
                const isOpen = mobileWhatOpen === t.key;
                const content = whatWeDoContentByTab[t.key];
                return (
                  <div key={t.key} className="rounded-2xl border border-black/10 bg-white">
                    <button
                      type="button"
                      onClick={() => onToggleWhat(t.key)}
                      className="flex w-full items-center justify-between px-4 py-4"
                    >
                      <span className="flex items-center gap-3 text-sm font-semibold text-slate-900">
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50 ring-1 ring-black/5">
                          {t.key === "software" ? (
                            <Code2 className="h-4 w-4 text-slate-700" />
                          ) : t.key === "engagement" ? (
                            <Handshake className="h-4 w-4 text-slate-700" />
                          ) : (
                            <Sparkles className="h-4 w-4 text-slate-700" />
                          )}
                        </span>
                        {t.label}
                      </span>
                      <ChevronDown
                        className={[
                          "h-4 w-4 text-slate-500 transition-transform",
                          isOpen ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    </button>

                    {isOpen ? (
                      <div className="border-t border-black/10 px-4 pb-4">
                        <div className="pt-4">
                          <div className="text-sm font-semibold text-slate-900">{content.head.title}</div>
                          <div className="mt-1 text-xs text-slate-500">{content.head.subtitle}</div>
                        </div>
                        <div className="mt-4 space-y-4">
                          {content.items.map((i) => (
                            <Link key={i.href} href={i.href} className="block" onClick={onClose}>
                              <div className="text-sm font-bold text-slate-900">{i.title}</div>
                              <div className="mt-1 text-xs leading-5 text-slate-500">{i.desc}</div>
                            </Link>
                          ))}
                        </div>
                        {t.key !== activeWhatTab ? (
                          <div className="mt-4 text-xs text-slate-500"> </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4 pt-2">
              {mobileActive === "industries" ? (
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-sm">
                      <BarChart3 className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Industries We Serve</div>
                      <div className="text-xs text-slate-500">Next-Gen Software Solutions</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link href="/industries#healthcare" className="block" onClick={onClose}>
                      <div className="text-sm font-bold text-slate-900">Healthcare</div>
                      <div className="mt-1 text-xs leading-5 text-slate-500">Advancing patient care with tech</div>
                    </Link>
                    <Link href="/industries#education" className="block" onClick={onClose}>
                      <div className="text-sm font-bold text-slate-900">Education</div>
                      <div className="mt-1 text-xs leading-5 text-slate-500">
                        Enhancing learning via software solutions
                      </div>
                    </Link>
                    <Link href="/industries#retail-e-commerce" className="block" onClick={onClose}>
                      <div className="text-sm font-bold text-slate-900">Retail &amp; E-commerce</div>
                      <div className="mt-1 text-xs leading-5 text-slate-500">Innovating retail tech solutions</div>
                    </Link>
                    <Link href="/industries#manufacturing" className="block" onClick={onClose}>
                      <div className="text-sm font-bold text-slate-900">Manufacturing</div>
                      <div className="mt-1 text-xs leading-5 text-slate-500">
                        Optimizing operations through software
                      </div>
                    </Link>
                    <Link href="/industries#finance" className="block" onClick={onClose}>
                      <div className="text-sm font-bold text-slate-900">Finance</div>
                      <div className="mt-1 text-xs leading-5 text-slate-500">Revolutionizing financial services</div>
                    </Link>
                  </div>
                </div>
              ) : mobileActive === "work" ? (
                <>
                  <Link href="/our-work" className="block text-sm font-semibold text-slate-900" onClick={onClose}>
                    Case studies
                  </Link>
                  <Link href="/work" className="block text-sm text-slate-600" onClick={onClose}>
                    Work (detailed)
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/company" className="block text-sm font-semibold text-slate-900" onClick={onClose}>
                    About PSV
                  </Link>
                  <Link href="/about" className="block text-sm text-slate-600" onClick={onClose}>
                    About (detailed)
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
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

function IndustryLink({
  title,
  desc,
  href,
  onSelect,
}: {
  title: string;
  desc: string;
  href: string;
  onSelect: () => void;
}) {
  return (
    <Link
      href={href}
      className="rounded-xl px-2 py-2 hover:bg-slate-50"
      onClick={onSelect}
    >
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-0.5 text-xs text-slate-500">{desc}</div>
    </Link>
  );
}

