import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Offshore Development",
  description:
    "Offshore development services for cost-efficient scaling with strong engineering standards, clear communication, and predictable delivery.",
  canonical: "/what-we-do/other/offshore",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

