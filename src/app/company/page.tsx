import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/marketing/PageHero";
import { buildMetadata } from "@/lib/seo";
import {
  BadgeCheck,
  Briefcase,
  ChartNoAxesCombined,
  Clock3,
  Handshake,
  Lightbulb,
  Users,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Company",
  description:
    "Learn about PSV Enterprises—an IT services company building MERN web apps, AI solutions, and mobile applications with a delivery-first process.",
  canonical: "/company",
});

const coreValues = [
  {
    title: "Clarity over noise",
    desc: "We communicate with written summaries, milestones, and practical trade-off discussions.",
    icon: <Lightbulb className="h-5 w-5 text-indigo-600" />,
  },
  {
    title: "Ownership mindset",
    desc: "We treat products seriously: reliability, maintainability, and long-term health matter.",
    icon: <BadgeCheck className="h-5 w-5 text-emerald-600" />,
  },
  {
    title: "Quality with speed",
    desc: "We move quickly without skipping the engineering habits that keep systems stable.",
    icon: <Clock3 className="h-5 w-5 text-amber-600" />,
  },
  {
    title: "Partnership first",
    desc: "We work like a committed extension of your team, not just a ticket-delivery vendor.",
    icon: <Handshake className="h-5 w-5 text-sky-600" />,
  },
];

export default function CompanyPage() {
  return (
    <div className="space-y-14 py-8 sm:py-12">
      <PageHero
        eyebrow="Company"
        title="Your trusted partner in engineering intelligence for a smarter tomorrow"
        description="PSV Enterprises helps teams design, build, and scale modern products with a practical mix of product thinking, engineering quality, and delivery discipline."
        actions={
          <ButtonLink href="/lets-talk" variant="primary" className="px-6 py-3">
            Let&apos;s understand your needs <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        }
      />

      <section className="relative z-10 -mt-10 grid gap-8 pt-2 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=900&fit=crop"
            alt="PSV Enterprises team collaboration"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Who we are</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            A delivery-focused software team that cares about outcomes
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            We work with startups, growing teams, and established businesses to build software
            that is easier to ship, easier to maintain, and easier to scale. Our strength is
            combining clean engineering with practical business thinking.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            From MERN products to AI-powered workflows and mobile experiences, we help teams move
            faster with better structure, clearer priorities, and stronger execution.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { k: "$18M+", v: "Value delivered" },
          { k: "250k+", v: "Hours of experience" },
          { k: "105+", v: "Projects completed" },
          { k: "96%", v: "Client satisfaction" },
          { k: "25+", v: "Businesses served" },
        ].map((s) => (
          <div
            key={s.v}
            className="rounded-2xl border border-slate-200/70 bg-white p-5 text-center shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
          >
            <div className="text-2xl font-semibold tracking-tight text-slate-900">{s.k}</div>
            <div className="mt-1 text-sm text-slate-600">{s.v}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-8 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] lg:grid-cols-2 sm:p-12">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">What we do</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            Delivering solutions that drive real results
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            We help teams move from complexity to clarity with product strategy, engineering, and
            delivery systems designed for speed and long-term ownership.
          </p>
          <div className="mt-6">
            <ButtonLink href="/services" variant="dark" className="px-5 py-2.5">
              Explore services
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Product thinking",
              desc: "Roadmaps and priorities aligned with real business outcomes.",
              icon: <Briefcase className="h-5 w-5 text-slate-700" />,
            },
            {
              title: "Reliable delivery",
              desc: "Weekly milestones, demos, and clear communication throughout.",
              icon: <Clock3 className="h-5 w-5 text-slate-700" />,
            },
            {
              title: "Scalable engineering",
              desc: "Maintainable architecture, validations, and quality-minded implementation.",
              icon: <ChartNoAxesCombined className="h-5 w-5 text-slate-700" />,
            },
            {
              title: "Partnership approach",
              desc: "We collaborate closely and adapt to your process, team, and goals.",
              icon: <Users className="h-5 w-5 text-slate-700" />,
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200/70 bg-slate-50/60 p-5 shadow-sm"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1 ring-slate-200">
                {c.icon}
              </div>
              <div className="mt-4 text-sm font-semibold text-slate-900">{c.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/70 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Mission</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Our mission</h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
          To help ambitious teams build modern digital systems with clarity, confidence, and
          measurable impact. We aim to make software delivery feel less chaotic and more like a
          repeatable advantage for the businesses we support.
        </p>
      </section>

      <section>
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Values</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            Core values that define PSV Enterprises
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                {v.icon}
              </div>
              <div className="mt-4 text-sm font-semibold text-slate-900">{v.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">How we work</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            How PSV approaches every project
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Understanding your real goals",
              desc: "We start from business outcomes, user needs, and constraints instead of jumping straight into implementation.",
            },
            {
              title: "Clear roadmap and strategy",
              desc: "You get a practical milestone-based plan that helps everyone stay aligned and focused.",
            },
            {
              title: "Product and technical balance",
              desc: "We combine UX, architecture, and delivery thinking so the system works in practice, not just in theory.",
            },
            {
              title: "Collaborative execution",
              desc: "We work closely with stakeholders and teams so progress stays visible and decisions stay informed.",
            },
            {
              title: "Quality-first engineering",
              desc: "Validation, maintainable code, and reliability patterns are part of delivery from day one.",
            },
            {
              title: "Long-term partnership mindset",
              desc: "We build with future maintenance, scaling, and handover in mind so your team stays in control.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">{s.title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:items-center">
          <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
            <div className="flex items-center gap-4">
              <Image
                src="https://i.pravatar.cc/150?img=12"
                alt="Founder portrait"
                width={72}
                height={72}
                className="h-16 w-16 rounded-xl object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-slate-900">Varsha Garg</div>
                <div className="text-xs text-slate-500">Founder, PSV Enterprises</div>
              </div>
            </div>
          </div>

          <blockquote className="text-sm leading-7 text-slate-600 sm:text-base">
            “We believe good software delivery comes from clarity, ownership, and discipline. Our goal
            is to help teams move faster without losing quality, so the systems we build continue to
            support growth long after launch.”
          </blockquote>
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] lg:grid-cols-2 sm:p-12">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Grow with us</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            Discover how we can help your business grow
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { k: "6+", v: "Years of experience" },
              { k: "10+", v: "Skilled professionals" },
              { k: "20+", v: "Projects delivered" },
              { k: "10+", v: "Global clients served" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-slate-200/70 bg-slate-50/60 p-5"
              >
                <div className="text-2xl font-semibold tracking-tight text-slate-900">{s.k}</div>
                <div className="mt-1 text-sm text-slate-600">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-8">
          <div className="text-sm font-semibold text-slate-900">
            Let&apos;s understand your needs and support you with the right solution.
          </div>
          <div className="mt-6">
            <ContactForm source="company-page" />
          </div>
        </div>
      </section>
    </div>
  );
}

