import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CircleDollarSign,
  DoorOpen,
  GraduationCap,
  HeartHandshake,
  House,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Career",
  description:
    "Explore career opportunities at PSV Enterprises. Learn about our culture, benefits, and current openings for builders who care about craft and ownership.",
  canonical: "/career",
});

const benefits = [
  {
    title: "5 Days Working",
    desc: "Focused work weeks that support consistency and recovery.",
    icon: <CalendarDays className="h-5 w-5 text-slate-700" />,
  },
  {
    title: "No Contract",
    desc: "Simple, transparent working relationships built on trust.",
    icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
  },
  {
    title: "Bonus Plan",
    desc: "Performance is recognized through meaningful incentives.",
    icon: <CircleDollarSign className="h-5 w-5 text-slate-700" />,
  },
  {
    title: "Work Life Balance",
    desc: "A sustainable pace so great work does not cost your well-being.",
    icon: <HeartHandshake className="h-5 w-5 text-slate-700" />,
  },
  {
    title: "Career Growth",
    desc: "Room to learn, lead, and level up through real project ownership.",
    icon: <BriefcaseBusiness className="h-5 w-5 text-slate-700" />,
  },
  {
    title: "Work From Home",
    desc: "Flexible collaboration with remote-friendly workflows.",
    icon: <House className="h-5 w-5 text-slate-700" />,
  },
  {
    title: "Open Door Policy",
    desc: "Ideas, concerns, and feedback always have a place here.",
    icon: <DoorOpen className="h-5 w-5 text-slate-700" />,
  },
  {
    title: "Learning & Development",
    desc: "We invest in upskilling through shared knowledge and practice.",
    icon: <GraduationCap className="h-5 w-5 text-slate-700" />,
  },
];

const openings = [
  {
    title: "Jr. Business Development Executive",
    experience: "Fresher",
    positions: "2",
  },
  {
    title: "MERN Stack Developer",
    experience: "2+ Years",
    positions: "2",
  },
];

const lifeAtPsv = [
  {
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&h=700&fit=crop",
    alt: "Team lunch and conversation",
    className: "sm:col-span-2 lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=520&fit=crop",
    alt: "Team meeting in office",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&h=900&fit=crop",
    alt: "Team collaboration and planning",
    className: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&h=520&fit=crop",
    alt: "Colleagues working together",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&h=520&fit=crop",
    alt: "Workspace and office environment",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&h=700&fit=crop",
    alt: "PSV team culture and growth",
    className: "sm:col-span-2 lg:col-span-2",
  },
];

export default function CareerPage() {
  return (
    <div className="space-y-14 py-8 sm:space-y-16 sm:py-12">
      <section className="mx-auto max-w-5xl text-center">
        <div className="text-left text-xs text-slate-400">
          <Link href="/" className="hover:text-slate-600">
            Home
          </Link>
          <span className="px-2">›</span>
          <span className="text-slate-600">Career</span>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Be One of Us, Where Passion Meets Profession
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            PSV Enterprises always looks for talented and skilled people ready to show
            enthusiasm to join our vibrant team.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact" variant="dark" className="rounded-full px-6 py-3">
              Get In Touch With Us
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Perks and Benefits
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Here at PSV Enterprises, we are proud to be an alliance that itself is accountable
            for its work. At every step, we focus on building a strong team that can go beyond
            the limits to obtain its goals. Every individual in PSV Enterprises is open to
            sharing their ideas and opinions. It is this freedom and zeal to work amazingly
            that our team can proudly stand upon in our daily professional journey.
          </p>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(2,6,23,0.05)] sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={[
                "border-slate-200 p-6",
                index % 3 !== 2 ? "lg:border-r" : "",
                index < benefits.length - 3 ? "border-b" : "",
                index % 2 === 0 ? "sm:border-r lg:border-r" : "",
              ].join(" ")}
            >
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                  {benefit.icon}
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-900">{benefit.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="openings" className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Job Openings</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Here at PSV Enterprises, we offer more than just jobs. Come join us and be a part
            of our thriving work environment.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {openings.map((job) => (
            <div
              key={job.title}
              className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)]"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-lg font-semibold text-slate-900">{job.title}</div>
                  <div className="mt-3 flex flex-wrap gap-6 text-sm text-slate-600">
                    <span>
                      Experience : <span className="font-medium text-slate-800">{job.experience}</span>
                    </span>
                    <span>
                      Positions : <span className="font-medium text-slate-800">{job.positions}</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="secondary" className="rounded-full px-5 py-2.5">
                    View Details
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="dark" className="rounded-full px-5 py-2.5">
                    Apply Now
                  </ButtonLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Life At PSV Enterprises
          </h2>
        </div>

        <div className="mt-8 grid auto-rows-[180px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lifeAtPsv.map((image) => (
            <div
              key={image.src}
              className={[
                "relative overflow-hidden rounded-[22px] border border-slate-200 bg-slate-100",
                image.className,
              ].join(" ")}
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
