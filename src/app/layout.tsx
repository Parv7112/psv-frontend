import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CookieBanner } from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PSV Enterprises | IT Services (MERN, AI, Mobile)",
    template: "%s | PSV Enterprises",
  },
  description:
    "PSV Enterprises builds modern web apps with MERN stack, AI-powered solutions, and high-performance mobile applications.",
  metadataBase: new URL("https://psventerprises.example"),
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh text-slate-900 antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(70%_45%_at_50%_0%,rgba(99,102,241,0.16)_0%,rgba(255,255,255,0)_60%),radial-gradient(55%_35%_at_10%_10%,rgba(14,165,233,0.10)_0%,rgba(255,255,255,0)_55%)]" />
        </div>
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
          {children}
        </main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
