import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "UI/UX Design",
  description:
    "UI/UX design services to craft clean flows, accessible interfaces, and conversion-friendly experiences—paired with modern frontend implementation.",
  canonical: "/what-we-do/other/ui-ux",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

