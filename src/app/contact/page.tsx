import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PSV Enterprises to discuss your project. Share your goals and we’ll reply with a clear plan and realistic estimate.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact PSV Enterprises",
    description:
      "Tell us what you want to build. We’ll reply with a clear plan and a realistic estimate.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/logo.png",
        alt: "PSV Enterprises",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Contact PSV Enterprises",
    description:
      "Tell us what you want to build. We’ll reply with a clear plan and a realistic estimate.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-10 py-8 sm:space-y-12 sm:py-12">
      <PageHero
        eyebrow="Contact"
        breadcrumb={
          <>
            <Link href="/">Home</Link>
            <span className="px-2">›</span>
            <span className="text-zinc-300">Contact</span>
          </>
        }
        title="We’d Love To Hear From You!"
        description="Please fill out the form below or contact us through email or phone, and we will get back to you promptly regarding your request."
      />

      <section className="relative z-10 -mt-10 mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-slate-200 bg-white pt-2 shadow-[0_18px_50px_rgba(2,6,23,0.08)]">
        <div className="grid lg:grid-cols-[320px_1fr]">
          <div className="border-b border-slate-200 bg-slate-50 p-8 lg:border-b-0 lg:border-r">
            <h2 className="max-w-[220px] text-3xl font-semibold tracking-tight text-slate-900">
              Brainstorming Next Big Thing?
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Connect with PSV Enterprises for tailored software solutions and seamless
              collaboration. Let&apos;s turn your ideas into powerful realities together.
            </p>

            <div className="mt-8 space-y-5">
              <InfoRow
                icon={<Phone className="h-4 w-4 text-slate-700" />}
                value="+91 81415 17087"
              />
              <InfoRow
                icon={<Mail className="h-4 w-4 text-slate-700" />}
                value="hr@psventerprises.com"
              />
              <InfoRow
                icon={<MapPin className="h-4 w-4 text-slate-700" />}
                value="India (remote-friendly)"
              />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {["Clutch 5.0", "GoodFirms 5.0"].map((badge) => (
                <div
                  key={badge}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center text-sm font-semibold text-slate-700"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-slate-900">
              Let&apos;s listen to what you&apos;ve got and we are here to provide you a
              solution.
            </h2>

            <div className="mt-8">
              <ContactForm
                source="contact-page"
                variant="contact-page"
                submitLabel="SUBMIT"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoRow({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 text-sm text-slate-600">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white ring-1 ring-slate-200">
        {icon}
      </div>
      <div className="pt-1 leading-6 text-slate-700">{value}</div>
    </div>
  );
}

