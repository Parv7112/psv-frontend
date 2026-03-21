import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Custom Software Development",
  description:
    "Custom software development for web platforms and internal tools—clean architecture, secure APIs, and delivery built for long-term ownership.",
  canonical: "/what-we-do/software/custom",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

