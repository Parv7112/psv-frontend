import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Appointment Booking AI Chatbot for Healthcare",
  description:
    "Case study: How PSV Enterprises built an AI-powered appointment booking chatbot for healthcare—improving patient scheduling, reducing admin load, and ensuring HIPAA-compliant integration.",
  canonical: "/case-studies/appointment-booking-ai-chatbot-healthcare",
});

const clientDetails = [
  { label: "Client", value: "XYZ" },
  { label: "Industry", value: "Healthcare" },
  { label: "Location", value: "USA" },
  { label: "Services", value: "AI Chatbot Development" },
];

const approachSteps = [
  {
    title: "Requirement Gathering",
    text: "We collaborated closely with the client to understand their specific needs and challenges in managing appointment requests, patient flow, and integration with existing systems.",
  },
  {
    title: "Design and Prototyping",
    text: "Our team created wireframes and interactive prototypes to visualize the chatbot's flow and user experience before development.",
  },
  {
    title: "Development and Deployment",
    text: "We developed the chatbot using cutting-edge AI technologies and ensured seamless deployment with the client's healthcare management infrastructure.",
  },
];

const challenges = [
  "Managing concurrent requests: Handling a high volume of appointment requests simultaneously while maintaining accuracy and efficiency.",
  "Integration with existing systems: Seamlessly integrating the chatbot with the client's legacy healthcare management systems and EHR/EMR platforms.",
  "Data security and compliance: Ensuring strict adherence to healthcare data privacy regulations such as HIPAA and maintaining robust security measures.",
];

const features = [
  {
    title: "AI-Powered Scheduling",
    desc: "Intelligent calendar and slot management that learns from booking patterns and reduces no-shows.",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400&h=280&fit=crop",
    alt: "Calendar and scheduling interface",
  },
  {
    title: "Multi-lingual Support",
    desc: "Patients can interact in their preferred language, improving accessibility and satisfaction.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400&h=280&fit=crop",
    alt: "Language and communication",
  },
  {
    title: "Integration with EHR/EMR",
    desc: "Bidirectional sync with electronic health and medical records for a unified workflow.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=280&fit=crop",
    alt: "Healthcare data integration",
  },
  {
    title: "Real-time Availability Check",
    desc: "Instant visibility into doctor and resource availability so patients book with confidence.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=280&fit=crop",
    alt: "Real-time availability",
  },
  {
    title: "Automated Reminders",
    desc: "SMS and in-app reminders to reduce no-shows and keep patients informed.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=280&fit=crop",
    alt: "Notifications and reminders",
  },
  {
    title: "Secure Patient Authentication",
    desc: "HIPAA-aligned login and verification so only authorized users access sensitive data.",
    image: "https://images.unsplash.com/photo-1614064548237-096ae7c8d8d9?w=400&h=280&fit=crop",
    alt: "Secure authentication",
  },
];

const quantitativeResults = [
  { metric: "150% Increase in Appointment Bookings", detail: "More patients could self-serve, reducing front-desk bottleneck." },
  { metric: "25% Reduction in Administrative Load", detail: "Staff could focus on care instead of manual scheduling." },
  { metric: "98% Patient Satisfaction Rate", detail: "Faster, clearer booking improved the patient experience." },
];

const qualitativeBenefits = [
  { title: "Improved operational efficiency", detail: "Streamlined scheduling and fewer double-bookings." },
  { title: "Enhanced Patient Experience", detail: "24/7 booking and clear confirmations in the patient's language." },
  { title: "Scalable Solution for Future Growth", detail: "The system scales with new locations and providers." },
];

const technologies = [
  "Node.js",
  "React",
  "Python",
  "TensorFlow",
  "AWS",
  "MongoDB",
  "HIPAA-Compliant Infra",
];

const relatedCaseStudies = [
  {
    title: "AI-Powered Predictive Dialing System",
    desc: "Smart outbound calling and lead engagement automation.",
    href: "/our-work",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    alt: "Predictive dialing",
  },
  {
    title: "AI-Driven Supply Chain Platform",
    desc: "Demand forecasting and inventory optimization with ML.",
    href: "/our-work",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    alt: "Supply chain",
  },
  {
    title: "AI Chatbot For Financial Planning",
    desc: "Conversational assistant for personalized financial guidance.",
    href: "/our-work",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    alt: "Financial planning",
  },
];

export default function AppointmentBookingCaseStudyPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="mx-auto max-w-5xl pb-12 pt-4 text-center sm:pb-16 sm:pt-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Appointment Booking AI Chatbot for Healthcare
        </h1>
        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=700&fit=crop"
            alt="Appointment booking dashboard and healthcare scheduling interface"
            width={1200}
            height={700}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* About the Client */}
      <section className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">About the Client</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            The client is a growing healthcare provider facing a high volume of appointment requests
            across multiple locations. Manual scheduling led to double-bookings, long wait times on
            phone lines, and administrative overload. They needed a robust, user-friendly AI chatbot
            solution that could handle concurrent requests, integrate with existing EHR/EMR systems,
            and comply with healthcare data privacy regulations.
          </p>
          <div className="mt-8 grid gap-x-12 gap-y-3 sm:grid-cols-2">
            {clientDetails.map(({ label, value }) => (
              <div key={label} className="flex justify-between border-b border-slate-100 py-2">
                <span className="text-sm font-medium text-slate-500">{label}</span>
                <span className="text-sm font-semibold text-slate-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-t border-slate-200 py-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Our Approach</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Our approach involved a comprehensive strategy to deliver a robust and user-friendly AI
            chatbot solution. We focused on requirement gathering, iterative design, and
            secure deployment aligned with healthcare standards.
          </p>
          <ul className="mt-6 space-y-4">
            {approachSteps.map((step) => (
              <li key={step.title} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                <div>
                  <span className="font-semibold text-slate-900">{step.title}:</span>{" "}
                  <span className="text-sm leading-7 text-slate-600">{step.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Challenges */}
      <section className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">The Challenges</h2>
          <ul className="mt-6 space-y-4">
            {challenges.map((item) => (
              <li key={item.slice(0, 30)} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                <span className="text-sm leading-7 text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core Features Developed */}
      <section className="border-t border-slate-200 py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Core Features Developed</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-44 w-full bg-slate-100">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="text-sm font-semibold text-slate-500">
                    {index + 1}. {feature.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">The Result</h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Quantitative Results
              </h3>
              {quantitativeResults.map((r) => (
                <div key={r.metric}>
                  <div className="font-semibold text-slate-900">{r.metric}</div>
                  <p className="mt-1 text-sm text-slate-600">{r.detail}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Qualitative Benefits
              </h3>
              {qualitativeBenefits.map((b) => (
                <div key={b.title}>
                  <div className="font-semibold text-slate-900">{b.title}</div>
                  <p className="mt-1 text-sm text-slate-600">{b.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="border-t border-slate-200 py-12">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Technologies Used</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="bg-slate-950 py-14 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Do you have an exciting project in mind?
          </h2>
          <p className="mt-3 text-slate-300">
            Let&apos;s bring your vision to life. Connect with us!
          </p>
          <div className="mt-8">
            <ButtonLink
              href="/contact"
              variant="primary"
              className="rounded-full px-8 py-3 text-base"
            >
              Get a quote
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">What Our Clients Say</h2>
          <div className="relative mt-8">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-slate-200 bg-slate-100">
              <Image
                src="https://i.pravatar.cc/150?img=12"
                alt="Client"
                fill
                className="object-cover"
              />
            </div>
            <blockquote className="mt-6 text-lg font-medium leading-relaxed text-slate-700 sm:text-xl">
              &ldquo;The PSV team delivered an outstanding AI chatbot that transformed our appointment
              booking process, significantly improving patient engagement and operational
              efficiency.&rdquo;
            </blockquote>
            <footer className="mt-4 text-sm font-semibold text-slate-900">
              Dr. John Doe, CEO, HealthPlus Medical Center
            </footer>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="border-t border-slate-200 py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Looking For More Case Studies?
            </h2>
            <Link
              href="/our-work"
              className="text-sm font-semibold uppercase tracking-wide text-slate-900 hover:text-slate-600"
            >
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCaseStudies.map((study) => (
              <article
                key={study.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <Link href={study.href} className="block">
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={study.image}
                      alt={study.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-slate-900">{study.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{study.desc}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                      Read more →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
