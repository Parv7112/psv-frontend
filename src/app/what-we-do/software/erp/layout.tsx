import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ERP Development",
  description:
    "ERP development services for streamlined operations—role-based access, workflows, dashboards, and integrations built with reliability and security.",
  canonical: "/what-we-do/software/erp",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

