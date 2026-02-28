import { ButtonLink } from "@/components/Button";
import { Bell, Layout, Smartphone, Zap } from "lucide-react";

export default function MobileServicePage() {
  return (
    <div className="space-y-10">
      <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/10">
          <Smartphone className="h-4 w-4 text-emerald-600" />
          Mobile App Development
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Mobile apps with performance, polish, and product thinking
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          We build mobile experiences that users love—fast, reliable, and ready
          for the app stores. Great UX, robust APIs, and smooth releases.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5">
            Build a mobile app
          </ButtonLink>
          <ButtonLink href="/services" variant="ghost" className="px-5 py-2.5">
            Back to services
          </ButtonLink>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
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

