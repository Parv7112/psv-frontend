import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Generative AI",
  description:
    "Generative AI development services for assistants, content workflows, and automation—built with guardrails, evaluation, and secure integrations.",
  canonical: "/what-we-do/ai/generative",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

