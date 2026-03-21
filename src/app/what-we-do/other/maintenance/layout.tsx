import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Maintenance & Support",
  description:
    "Maintenance and support services to keep your product stable: fixes, enhancements, performance improvements, and reliable delivery post-launch.",
  canonical: "/what-we-do/other/maintenance",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

