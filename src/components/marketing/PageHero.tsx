"use client";

import type { ReactNode } from "react";
import { isValidElement } from "react";
import { FullBleed } from "@/components/FullBleed";
import { TechMarquee } from "@/components/marketing/TechMarquee";

/** Gradient word treatment used on the homepage and optional inner heroes. */
export function GradientHighlight({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10 bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
        {children}
      </span>
      <span
        className="absolute -inset-1 -z-0 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-md"
        aria-hidden
      />
    </span>
  );
}

export type PageHeroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  /** Renders below copy / actions, above marquee (e.g. StatRow on homepage). */
  footer?: ReactNode;
  showMarquee?: boolean;
  /** Tighter padding (e.g. dense landing pages). */
  compact?: boolean;
  /** Optional breadcrumb row — when set, copy aligns left for readability. */
  breadcrumb?: ReactNode;
  /** `home` uses the largest display scale; `page` is slightly smaller. */
  size?: "home" | "page";
  align?: "center" | "left";
  /** Optional explicit marquee items; otherwise inferred from hero copy. */
  marqueeItems?: string[];
};

const TECH_TOKENS: Array<{ keywords: string[]; label: string }> = [
  { keywords: ["ai", "llm", "agent", "rag", "ml", "machine learning", "generative", "automation"], label: "AI Solutions" },
  { keywords: ["chatbot", "assistant"], label: "Conversational AI" },
  { keywords: ["mcp"], label: "MCP Integration" },
  { keywords: ["mobile", "ios", "android", "flutter", "react native"], label: "Mobile Apps" },
  { keywords: ["web", "frontend", "next.js", "react", "ui"], label: "Web Development" },
  { keywords: ["ux", "ui/ux", "design", "prototype", "wireframe"], label: "UX & Product Design" },
  { keywords: ["api", "integration", "rest", "graphql"], label: "API Engineering" },
  { keywords: ["saas", "platform"], label: "SaaS Platforms" },
  { keywords: ["ecommerce", "shop", "store"], label: "Ecommerce" },
  { keywords: ["erp"], label: "ERP Systems" },
  { keywords: ["devops", "ci/cd", "infra", "cloud", "aws"], label: "Cloud & DevOps" },
  { keywords: ["maintenance", "support", "monitoring", "uptime"], label: "Support & Maintenance" },
  { keywords: ["performance", "scalability", "optimiz"], label: "Performance Optimization" },
  { keywords: ["consult", "strategy", "discovery"], label: "Product Strategy" },
  { keywords: ["offshore", "outsourcing", "staff augmentation", "dedicated team"], label: "Team Extension" },
  { keywords: ["healthcare", "medical"], label: "Healthcare" },
  { keywords: ["finance", "fintech", "bank"], label: "Finance" },
  { keywords: ["retail"], label: "Retail" },
  { keywords: ["manufacturing"], label: "Manufacturing" },
  { keywords: ["education", "edtech"], label: "Education" },
];

const BASE_MARQUEE_ITEMS = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "MongoDB",
  "AWS",
];

function flattenText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(flattenText).join(" ");
  if (isValidElement<{ children?: ReactNode }>(node)) return flattenText(node.props?.children);
  return "";
}

function inferMarqueeItems(parts: Array<ReactNode | undefined>): string[] {
  const text = parts
    .map(flattenText)
    .join(" ")
    .toLowerCase();

  const inferred: string[] = [];
  for (const token of TECH_TOKENS) {
    if (token.keywords.some((k) => text.includes(k)) && !inferred.includes(token.label)) {
      inferred.push(token.label);
    }
  }

  const all = [...inferred, ...BASE_MARQUEE_ITEMS];
  return all.slice(0, 12);
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  footer,
  showMarquee = true,
  compact = false,
  breadcrumb,
  size = "page",
  align: alignProp,
  marqueeItems,
}: PageHeroProps) {
  const align = alignProp ?? (breadcrumb ? "left" : "center");
  const isCenter = align === "center";
  const effectiveMarqueeItems =
    marqueeItems && marqueeItems.length > 0 ? marqueeItems : inferMarqueeItems([eyebrow, title, description]);

  const titleClasses =
    size === "home"
      ? "text-4xl sm:text-6xl lg:text-7xl"
      : "text-4xl sm:text-5xl lg:text-6xl";

  return (
    <FullBleed>
      <section
        className={[
          "relative overflow-hidden rounded-b-[2rem] bg-zinc-950 px-5 pt-10 sm:px-8 sm:pt-14 lg:px-16",
          compact ? "pb-4 sm:pb-6" : "pb-6 sm:pb-10",
        ].join(" ")}
      >
        <div
          className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-30%,rgba(245,158,11,0.22),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.2] [background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:56px_56px]"
          aria-hidden
        />
        <div className="pointer-events-none absolute left-1/2 top-[18%] -translate-x-1/2 sm:top-[22%]">
          <div className="relative h-[min(90vw,520px)] w-[min(90vw,520px)] sm:h-[480px] sm:w-[480px]">
            <div className="animate-spin-slow absolute inset-0 rounded-full border border-white/[0.07]" />
            <div className="animate-spin-slow absolute inset-12 rounded-full border border-amber-500/15 [animation-direction:reverse] sm:inset-16" />
          </div>
        </div>
        <div className="pointer-events-none absolute -right-24 top-32 h-72 w-72 animate-pulse-glow rounded-full bg-amber-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-10 -left-20 h-56 w-56 animate-pulse-glow rounded-full bg-violet-600/15 blur-[90px] [animation-delay:1.5s]" />

        <div
          className={[
            "relative z-10 mx-auto max-w-5xl lg:max-w-6xl",
            isCenter ? "text-center" : "text-left",
          ].join(" ")}
        >
          {breadcrumb ? (
            <div className="mb-8 text-xs text-zinc-500 [&_a]:text-zinc-400 [&_a]:transition-colors hover:[&_a]:text-zinc-200">
              {breadcrumb}
            </div>
          ) : null}

          {eyebrow ? (
            <div
              className={[
                "animate-float-soft inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 shadow-[0_0_40px_-8px_rgba(245,158,11,0.4)]",
                isCenter ? "" : "mx-0",
              ].join(" ")}
            >
              {eyebrow}
            </div>
          ) : null}

          <h1
            className={[
              "font-display mt-8 text-balance font-extrabold leading-[1.05] tracking-tight text-white sm:mt-10",
              titleClasses,
              isCenter ? "mx-auto max-w-4xl" : "max-w-4xl",
            ].join(" ")}
          >
            {title}
          </h1>

          {description ? (
            <div
              className={[
                "mt-6 text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg",
                isCenter ? "mx-auto max-w-2xl" : "max-w-2xl",
              ].join(" ")}
            >
              {description}
            </div>
          ) : null}

          {actions ? (
            <div
              className={[
                "mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5",
                isCenter ? "items-center justify-center" : "items-start justify-start sm:items-center",
              ].join(" ")}
            >
              {actions}
            </div>
          ) : null}
        </div>

        {footer ? (
          <div className="relative z-10 mx-auto mt-14 max-w-5xl lg:max-w-6xl">{footer}</div>
        ) : null}

        {showMarquee ? (
          <div className="relative z-10 mt-10">{/* negative margin handled by parent spacing */}
            <TechMarquee items={effectiveMarqueeItems} variant="dark" />
          </div>
        ) : null}
      </section>
    </FullBleed>
  );
}
