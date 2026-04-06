import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { ButtonLink } from "./Button";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";

const aiLinks = [
  { href: "/what-we-do/ai/agents", label: "AI Agent Development" },
  { href: "/what-we-do/ai/chatbots", label: "AI Chatbot Development" },
  { href: "/what-we-do/ai/consulting", label: "AI Consulting" },
  { href: "/what-we-do/ai/automation", label: "AI Automation" },
  { href: "/what-we-do/ai/rag", label: "RAG Development" },
];

const softwareLinks = [
  { href: "/services/mern", label: "Custom Web Apps (MERN)" },
  { href: "/what-we-do/software/apis", label: "API Development" },
  { href: "/what-we-do/software/saas", label: "SaaS & Dashboards" },
  { href: "/what-we-do/software/ecommerce", label: "E‑commerce Platforms" },
  { href: "/services/mobile", label: "Mobile App Development" },
  { href: "/what-we-do/software/ui-ux", label: "UI/UX & Frontend" },
];

const companyLinks = [
  { href: "/company", label: "About" },
  { href: "/our-work", label: "Case Studies" },
  { href: "/industries", label: "Industries" },
  { href: "/lets-talk", label: "Let’s Talk" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-8 border-t border-zinc-800 bg-zinc-950 text-zinc-300">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
        aria-hidden
      />
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-white/20">
              <Image
                src="/logo.png"
                alt="PSV Enterprises"
                width={380}
                height={130}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">
              MERN • AI • Mobile — we ship products with measurable impact and code your team can own.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
              <Mail className="h-4 w-4 text-amber-500" />
              <span>hr@psventerprises.org</span>
            </div>
            <div className="mt-8 flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Github, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all duration-200 hover:border-amber-500/40 hover:text-amber-400"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
            <div>
              <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-amber-500/90">
                AI
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {aiLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-white">
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-amber-500/90">
                Software
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {softwareLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-white">
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-amber-500/90">
                Company
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-white">
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 ring-1 ring-white/5">
              <div className="font-display text-lg font-bold text-white">Join the team</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                We hire builders who care about craft. Tell us what you ship.
              </p>
              <div className="mt-6">
                <ButtonLink href="/career" variant="primary" className="w-full justify-center py-3">
                  View careers
                </ButtonLink>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Clutch", "GoodFirms", "Upwork"].map((b) => (
                  <span
                    key={b}
                    className="rounded-lg border border-zinc-700 bg-zinc-900/80 px-3 py-2 text-xs font-semibold text-zinc-500"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-800 py-8 text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} PSV Enterprises. All rights reserved.</div>
          <div className="text-zinc-500">Next.js · Node.js · MongoDB</div>
        </div>
      </Container>
    </footer>
  );
}
