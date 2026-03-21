import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dedicated Team",
  description:
    "Hire a dedicated development team from PSV Enterprises for ongoing delivery, predictable capacity, and direct collaboration aligned to your roadmap.",
  canonical: "/what-we-do/engagement/dedicated-team",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

