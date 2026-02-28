import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink } from "@/components/Button";

export default function ContactPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          Tell us what you want to build. We’ll reply with a clear plan and a
          realistic estimate.
        </p>

        <div className="mt-8 space-y-4">
          <InfoRow
            icon={<Mail className="h-4 w-4 text-sky-300" />}
            title="Email"
            value="hello@psventerprises.com"
          />
          <InfoRow
            icon={<Phone className="h-4 w-4 text-emerald-300" />}
            title="Phone"
            value="+91 (your number)"
          />
          <InfoRow
            icon={<MapPin className="h-4 w-4 text-violet-300" />}
            title="Location"
            value="India (remote-friendly)"
          />
        </div>

        <div className="mt-8 rounded-3xl border border-black/5 bg-white/70 p-6 text-sm text-slate-600 shadow-sm">
          <div className="font-semibold text-slate-900">What to include</div>
          <ul className="mt-3 space-y-2">
            {[
              "What you’re building and who it’s for",
              "Key features (must-haves vs nice-to-haves)",
              "Timeline and desired launch date",
              "Any existing codebase or design assets",
              "Budget range (optional, but helpful)",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                <span className="leading-6">{i}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-3xl border border-black/5 bg-white/70 p-6 text-sm text-slate-600 shadow-sm">
          <div className="font-semibold text-slate-900">What happens next?</div>
          <ol className="mt-3 space-y-2">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              <span className="leading-6">We review your message and goals.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              <span className="leading-6">We schedule a short call if needed.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              <span className="leading-6">You get a proposal with timeline & cost.</span>
            </li>
          </ol>
        </div>

        <div className="mt-8 rounded-3xl border border-black/5 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">
            Not sure which service you need?
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            That’s okay. Share your goal—we’ll suggest the best approach (MERN,
            AI, mobile, or a combined roadmap).
          </p>
          <div className="mt-4">
            <ButtonLink href="/services" variant="secondary" className="px-5 py-2.5">
              Explore services
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm lg:col-span-3 sm:p-8">
        <ContactForm source="contact-page" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              q: "Do you sign NDAs?",
              a: "Yes, we can sign an NDA before reviewing sensitive details.",
            },
            {
              q: "Do you provide post‑launch support?",
              a: "Yes. We offer maintenance and ongoing development with clear response expectations.",
            },
            {
              q: "Do you work with startups?",
              a: "Yes—MVPs, iterations, product-market fit loops, and scaling roadmaps are common for us.",
            },
            {
              q: "Do you work with enterprises?",
              a: "Yes—internal tools, dashboards, integrations, and modernization projects.",
            },
          ].map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-900">{f.q}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-white ring-1 ring-black/5">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </div>
        <div className="mt-1 text-sm text-slate-700">{value}</div>
      </div>
    </div>
  );
}

