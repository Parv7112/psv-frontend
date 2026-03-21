import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "MLOps",
  description:
    "MLOps services to ship and maintain ML/AI in production: pipelines, monitoring, evaluation, and deployment practices for reliability at scale.",
  canonical: "/what-we-do/ai/mlops",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

