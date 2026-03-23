import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/marketing/PageHero";
import { Bell, Layout, Smartphone, Zap } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mobile App Development",
  description:
    "Mobile app development services focused on performance and UX—integrations, notifications, and release readiness for iOS and Android.",
  canonical: "/services/mobile",
});

export default function MobileServicePage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow={
          <>
            <Smartphone className="h-4 w-4 text-emerald-400" />
            Mobile App Development
          </>
        }
        title="Mobile apps with performance, polish, and product thinking"
        description="We build mobile experiences that users love—fast, reliable, and ready for the app stores. Great UX, robust APIs, and smooth releases."
        actions={
          <>
            <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5">
              Build a mobile app <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/services" variant="outlineLight" className="px-5 py-2.5">
              Back to services
            </ButtonLink>
          </>
        }
      />

      <div className="relative z-10 -mt-10 grid gap-6 pt-2 md:grid-cols-2">
        {[
          {
            icon: <Layout className="h-5 w-5 text-sky-600" />,
            title: "UI/UX that converts",
            desc: "Flows, onboarding, and design systems that feel native and consistent.",
          },
          {
            icon: <Zap className="h-5 w-5 text-emerald-600" />,
            title: "Performance first",
            desc: "Smooth animations, optimized rendering, and reliable offline behavior.",
          },
          {
            icon: <Bell className="h-5 w-5 text-violet-600" />,
            title: "Notifications & integrations",
            desc: "Push notifications, payments, maps, analytics, and third‑party APIs.",
          },
          {
            icon: <Smartphone className="h-5 w-5 text-emerald-600" />,
            title: "Release-ready",
            desc: "Testing, CI guidance, and deployment support for iOS and Android.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-3xl border border-black/5 bg-white/70 p-7 shadow-sm"
          >
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white ring-1 ring-black/5">
              {c.icon}
            </div>
            <div className="mt-4 text-lg font-semibold text-slate-900">{c.title}</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

