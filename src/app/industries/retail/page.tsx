import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel";
import { StatRow } from "@/components/marketing/StatRow";
import { RetailChallenges } from "@/components/marketing/RetailChallenges";
import { RetailRoiCalculator } from "@/components/marketing/RetailRoiCalculator";
import { GrowthSection } from "@/components/marketing/GrowthSection";
import { buildMetadata } from "@/lib/seo";
import {
  ArrowRight,
  BadgePercent,
  BarChart3,
  Boxes,
  ClipboardList,
  CreditCard,
  Layers,
  Megaphone,
  PackageSearch,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Retail",
  description:
    "Retail & e-commerce software by PSV Enterprises—storefronts, catalog search, checkout, ops automation, and analytics built for performance and conversions.",
  canonical: "/industries/retail",
  openGraphTitle: "Retail & E‑commerce Software Development",
});

export default function RetailPage() {
  return (
    <div className="space-y-16 py-12">
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-amber-50 via-white to-sky-50 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span className="text-slate-300">›</span>
          <Link href="/industries" className="hover:text-slate-700">
            Industries
          </Link>
          <span className="text-slate-300">›</span>
          <span className="text-slate-700">Retail</span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              <PackageSearch className="h-4 w-4 text-amber-600" />
              Retail &amp; E‑commerce
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Retail software that improves conversion, speed, and operations
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
              PSV Enterprises builds modern storefronts and operational systems—catalog search, checkout,
              fulfillment workflows, and analytics—optimized for performance and reliability.
            </p>

            <ul className="mt-7 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {[
                "Fast pages and conversion-first UX",
                "Search, filters, and discovery that scale",
                "Order, inventory, and returns automation",
                "Integrations (payments, shipping, CRM, analytics)",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-2 rounded-2xl border border-slate-200/70 bg-white/70 p-4"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <span className="leading-6">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/lets-talk" variant="primary" className="px-6 py-3">
                Book a consultation <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary" className="px-6 py-3">
                View work
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.08)] sm:p-8">
            <div className="text-sm font-semibold text-slate-900">Tell us what you’re building.</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              Share your requirements and we’ll respond with a clear plan and estimate.
            </div>
            <div className="mt-6">
              <ContactForm source="retail-industry" />
            </div>
          </div>
        </div>
      </section>

      <StatRow />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Challenges"
          title="Common bottlenecks in retail and e‑commerce"
          description="We help teams streamline operations and improve conversion with performance-first engineering."
        />
        <RetailChallenges />
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Solutions"
          title="Retail solutions we deliver"
          description="From storefront UX to ops automation and analytics."
          right={
            <ButtonLink href="/what-we-do/software/ecommerce" variant="secondary" className="px-5 py-2.5">
              Explore e‑commerce
            </ButtonLink>
          }
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "High-performance storefronts",
              desc: "Fast landing pages, product pages, and flows optimized for Core Web Vitals and conversions.",
              icon: <Layers className="h-5 w-5 text-indigo-600" />,
              href: "/lets-talk",
              image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop",
            },
            {
              title: "Catalog, search & filters",
              desc: "Discovery experiences that scale: search, ranking, filters, and performance-aware data access.",
              icon: <Search className="h-5 w-5 text-sky-600" />,
              href: "/lets-talk",
              image:
                "https://images.unsplash.com/photo-1515165562835-c4c2b1c0f51a?w=1200&h=800&fit=crop",
            },
            {
              title: "Checkout, payments & subscriptions",
              desc: "Reliable checkout flows with payment integrations, fraud-aware patterns, and clean error handling.",
              icon: <CreditCard className="h-5 w-5 text-emerald-600" />,
              href: "/lets-talk",
              image:
                "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&h=800&fit=crop",
            },
          ].map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="relative h-44 w-full bg-slate-200">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-900">{s.title}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</div>
                  </div>
                </div>
                <div className="mt-6">
                  <ButtonLink href={s.href} variant="ghost" className="px-5 py-2.5">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Additional retail and e-commerce capabilities"
          description="Operational and customer-facing systems that complement storefront delivery."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Boxes className="h-5 w-5 text-indigo-600" />,
              t: "Inventory & warehouse workflows",
              d: "Track stock, automate updates, and reduce overselling with cleaner inventory visibility.",
            },
            {
              icon: <Truck className="h-5 w-5 text-sky-600" />,
              t: "Fulfillment & shipping integrations",
              d: "Sync carriers, order routing, delivery status, and notifications across operational systems.",
            },
            {
              icon: <Megaphone className="h-5 w-5 text-emerald-600" />,
              t: "Campaign landing pages",
              d: "Launch conversion-focused pages fast with reusable sections and performance-first implementation.",
            },
            {
              icon: <Users className="h-5 w-5 text-violet-600" />,
              t: "Customer portals",
              d: "Order history, returns, support status, and self-service experiences that reduce ticket load.",
            },
            {
              icon: <BadgePercent className="h-5 w-5 text-amber-600" />,
              t: "Promotions & pricing logic",
              d: "Coupons, bundles, discounts, and merchandising workflows with maintainable rules.",
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-rose-600" />,
              t: "Funnel analytics & reporting",
              d: "Track campaigns, cohorts, conversion drop-offs, and performance across the customer journey.",
            },
            {
              icon: <Search className="h-5 w-5 text-slate-700" />,
              t: "Search relevance tuning",
              d: "Improve ranking, filters, and product discovery with cleaner data and faster responses.",
            },
            {
              icon: <CreditCard className="h-5 w-5 text-indigo-600" />,
              t: "Payments & subscriptions",
              d: "Robust checkout, renewals, retries, and transaction flows with safe error handling.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
              t: "Security & reliability",
              d: "Observability, validations, safe defaults, and operational guardrails for production systems.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                {c.icon}
              </div>
              <div className="mt-4 text-base font-semibold text-slate-900">{c.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Case studies"
          title="A few retail builds we deliver"
          description="Examples of storefronts, ops workflows, and analytics we ship."
          right={
            <ButtonLink href="/work" variant="secondary" className="px-5 py-2.5">
              View all case studies
            </ButtonLink>
          }
        />

        <div className="space-y-6">
          {[
            {
              tag: "E‑commerce",
              title: "Storefront performance optimization",
              desc: "Improved Core Web Vitals, reduced load times, and refined UX patterns to improve conversion.",
              stack: ["Performance", "Next.js", "SEO", "UX"],
              image:
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=800&fit=crop",
            },
            {
              tag: "Operations",
              title: "Inventory + fulfillment workflows",
              desc: "Automation across stock updates, order routing, and returns handling with audit-friendly logs.",
              stack: ["Automation", "Integrations", "Dashboards", "Notifications"],
              image:
                "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop",
            },
            {
              tag: "Analytics",
              title: "Funnel dashboards and reporting",
              desc: "Decision-grade reporting for conversion, cohorts, campaigns, and operational KPIs.",
              stack: ["Analytics", "Pipelines", "Dashboards", "Events"],
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
            },
          ].map((c) => (
            <article
              key={c.title}
              className="grid gap-6 overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)] lg:grid-cols-12"
            >
              <div className="p-7 lg:col-span-6">
                <div className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                  {c.tag}
                </div>
                <div className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
                  {c.title}
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{c.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <ButtonLink href="/work" variant="dark" className="px-5 py-2.5">
                    Read full case study <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>

              <div className="relative min-h-56 bg-slate-200 lg:col-span-6">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Benefits"
          title="Business outcomes you can measure"
          description="Software should increase revenue, reduce friction, and improve reliability."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Higher conversion", d: "Faster pages and clearer journeys reduce drop-offs." },
            { t: "Lower support load", d: "Self-serve and automation reduce repetitive tickets." },
            { t: "Cleaner operations", d: "Better inventory and order flows reduce refunds and delays." },
            { t: "Better discovery", d: "Search and filters help customers find products faster." },
            { t: "Decision-grade analytics", d: "Measure funnels, campaigns, and LTV with clean data." },
            { t: "Security and reliability", d: "Safe defaults, observability, and robust error handling." },
          ].map((b) => (
            <div
              key={b.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="text-lg font-semibold text-slate-900">{b.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{b.d}</div>
            </div>
          ))}
        </div>
      </section>

      <RetailRoiCalculator />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Why PSV"
          title="Why teams choose PSV for retail software delivery"
          description="A practical mix of conversion thinking, operational discipline, and scalable engineering."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Conversion-first mindset",
              d: "We focus on speed, clarity, and journeys that improve revenue without adding friction.",
            },
            {
              t: "Operational awareness",
              d: "Storefront work is tied to inventory, fulfillment, and support—so we design with operations in mind.",
            },
            {
              t: "Scalable architecture",
              d: "Search, checkout, and analytics need clean data and maintainable systems to scale.",
            },
            {
              t: "Weekly delivery cadence",
              d: "Milestone-based progress, demos, and written updates keep teams aligned and in control.",
            },
          ].map((m) => (
            <div
              key={m.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="text-base font-semibold text-slate-900">{m.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{m.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-slate-950 px-8 py-12 text-center shadow-[0_14px_40px_rgba(2,6,23,0.22)] sm:px-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Improve conversion with performance-first delivery
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          Ship faster journeys, cleaner ops, and analytics your team can act on.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/lets-talk" variant="primary" className="px-6 py-3">
            Book a strategic consultation
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" className="px-6 py-3">
            Contact us
          </ButtonLink>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Process"
          title="Our retail software development process"
          description="A milestone-based approach that keeps delivery predictable and quality high."
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {[
            {
              t: "Discovery",
              d: "Clarify goals, users, KPIs, and integrations.",
              icon: <Sparkles className="h-5 w-5 text-indigo-600" />,
            },
            {
              t: "Design",
              d: "Conversion-first UX, information architecture, and flows.",
              icon: <Layers className="h-5 w-5 text-sky-600" />,
            },
            {
              t: "Build",
              d: "Implement features with QA, performance, and reliability checks.",
              icon: <ClipboardList className="h-5 w-5 text-emerald-600" />,
            },
            {
              t: "Launch & iterate",
              d: "Deploy, measure, and improve with steady milestones.",
              icon: <BarChart3 className="h-5 w-5 text-rose-600" />,
            },
          ].map((s) => (
            <div
              key={s.t}
              className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                {s.icon}
              </div>
              <div className="mt-4 text-base font-semibold text-slate-900">{s.t}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What teams say after shipping with PSV"
          description="Clear communication, steady progress, and production-ready delivery."
        />
        <TestimonialCarousel
          items={[
            {
              quote:
                "Performance improvements reduced drop-offs and improved conversion without breaking reliability.",
              name: "Client",
              role: "E‑commerce Lead",
              industry: "Retail",
              avatar: "https://i.pravatar.cc/150?img=14",
            },
            {
              quote:
                "The ops automation reduced manual work across orders and returns, making the team faster and calmer.",
              name: "Client",
              role: "Operations Manager",
              industry: "Retail",
              avatar: "https://i.pravatar.cc/150?img=27",
            },
            {
              quote:
                "Dashboards gave leadership clarity on funnel performance and campaign impact.",
              name: "Client",
              role: "Growth Manager",
              industry: "E‑commerce",
              avatar: "https://i.pravatar.cc/150?img=41",
            },
          ]}
        />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Latest buzz"
          title="Get insights from our latest articles"
          description="Short, practical reads on conversion, analytics, and operational automation."
          right={
            <ButtonLink href="/company" variant="secondary" className="px-5 py-2.5">
              View all
            </ButtonLink>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              category: "Conversion",
              read: "10 min read",
              title: "Improving checkout without adding friction",
              excerpt:
                "Tactics to reduce drop-offs: speed, clarity, and robust error handling across payments.",
              date: "Feb 2026",
              tint: "from-indigo-600/15 to-sky-500/10",
            },
            {
              category: "Operations",
              read: "12 min read",
              title: "Inventory workflows that reduce refunds",
              excerpt:
                "How clean stock updates, order routing, and returns automation improve reliability at scale.",
              date: "Jan 2026",
              tint: "from-emerald-600/15 to-indigo-600/10",
            },
            {
              category: "Analytics",
              read: "9 min read",
              title: "Event tracking for decision-grade funnels",
              excerpt:
                "A pragmatic approach to tracking events that help teams improve campaigns and conversion.",
              date: "Jan 2026",
              tint: "from-violet-600/15 to-sky-500/10",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="group rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-shadow hover:shadow-[0_12px_26px_rgba(2,6,23,0.08)]"
            >
              <div className={`h-28 rounded-2xl bg-gradient-to-br ${b.tint} ring-1 ring-slate-200`} />
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <span>{b.category}</span>
                <span className="text-slate-300">•</span>
                <span>{b.read}</span>
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-900">{b.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{b.excerpt}</div>
              <div className="mt-4 text-xs text-slate-500">{b.date}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently asked questions"
          description="Quick answers about delivery, integrations, and performance."
        />
        <Accordion
          variant="minimal"
          defaultOpenIndex={0}
          items={[
            {
              question: "Can you integrate payments, shipping, and analytics?",
              answer:
                "Yes. We integrate payment gateways, shipping carriers, CRMs, and analytics stacks using APIs and secure workflows, with careful error handling and observability.",
            },
            {
              question: "Do you optimize for SEO and performance?",
              answer:
                "Yes. We prioritize Core Web Vitals, caching strategies, and clean metadata so pages load fast and rank better.",
            },
            {
              question: "Can you help with catalog search and filters at scale?",
              answer:
                "Yes. We design data models and search experiences that remain fast as your catalog grows, with sensible ranking and filter performance.",
            },
            {
              question: "Do you provide post-launch support?",
              answer:
                "Yes. We offer maintenance and ongoing development with a predictable monthly capacity model and clear response expectations.",
            },
          ]}
        />
      </section>

      <GrowthSection />

      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Let’s talk"
          title="Tell us what you’re building"
          description="We’ll reply with a clear plan, timeline, and realistic estimate."
          right={
            <ButtonLink href="/services" variant="secondary" className="px-5 py-2.5">
              Explore services
            </ButtonLink>
          }
        />
        <div className="mt-8">
          <ContactForm source="retail-bottom" />
        </div>
      </section>
    </div>
  );
}

