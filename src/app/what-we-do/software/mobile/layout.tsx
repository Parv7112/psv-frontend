import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mobile App Engineering",
  description:
    "Mobile app engineering for iOS and Android—UX, integrations, performance, and release readiness with a product-focused delivery process.",
  canonical: "/what-we-do/software/mobile",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

