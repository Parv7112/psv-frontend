import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Web App Development",
  description:
    "Custom web app development with clean architecture, secure APIs, and scalable data models—built for speed, reliability, and maintainability.",
  canonical: "/what-we-do/software/web-app",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

