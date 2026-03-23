import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CookieBanner } from "@/components/CookieBanner";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { PageBackground } from "@/components/PageBackground";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://psventerprises.com";

export const metadata: Metadata = {
  title: {
    default: "PSV Enterprises | IT Services (MERN, AI, Mobile)",
    template: "%s | PSV Enterprises",
  },
  description:
    "PSV Enterprises builds modern web apps with MERN stack, AI-powered solutions, and high-performance mobile applications.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "PSV Enterprises",
    description:
      "Modern IT services company delivering MERN, AI, and mobile app development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${syne.variable} min-h-dvh bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        <PageBackground />
        <SiteHeader />
        <main className="relative w-full pb-28 pt-0">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">{children}</div>
        </main>
        <SiteFooter />
        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
