import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Software Outsourcing",
  description:
    "Software outsourcing services with end-to-end ownership—from scope to launch—with clear milestones, communication, and delivery standards.",
  canonical: "/what-we-do/engagement/outsourcing",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

