import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { ButtonLink } from "./Button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

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
    <footer className="bg-slate-950 text-slate-200">
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="PSV Enterprises"
                width={380}
                height={130}
                className="h-12 w-auto"
              />
            </Link>
            <div className="mt-2 text-xs text-slate-400">MERN • AI • Mobile Apps</div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              We build modern web platforms, AI-enabled solutions, and
              high-performance mobile applications—designed for measurable
              business impact.
            </p>

            <div className="mt-5 flex items-center gap-3 text-xs text-slate-400">
              <Mail className="h-4 w-4" />
              <span>hr@psventerprises.com</span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-slate-200" />
              </a>
              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-slate-200" />
              </a>
              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-slate-200" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-3">
            <div className="space-y-3 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                AI Development
              </div>
              {aiLinks.map((l) => (
                <Link key={l.href} href={l.href} className="block text-slate-300 hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="space-y-3 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Software Development
              </div>
              {softwareLinks.map((l) => (
                <Link key={l.href} href={l.href} className="block text-slate-300 hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="space-y-3 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Regarding us
              </div>
              {companyLinks.map((l) => (
                <Link key={l.href} href={l.href} className="block text-slate-300 hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">
                Looking for a career opportunity?
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                We’re always interested in strong engineers and builders. Share
                your profile and we’ll get back to you.
              </p>
              <div className="mt-5">
                <ButtonLink href="/lets-talk" variant="dark" className="w-full justify-center px-5 py-2.5">
                  Apply now
                </ButtonLink>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Clutch", "GoodFirms", "Upwork", "Top Rated"].map((b) => (
                  <div
                    key={b}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center text-xs font-semibold text-slate-200"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-xs text-slate-400">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} PSV Enterprises. All rights reserved.</div>
            <div>Built with Next.js • Node.js • MongoDB</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

