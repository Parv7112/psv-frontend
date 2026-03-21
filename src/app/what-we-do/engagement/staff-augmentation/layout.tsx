import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Staff Augmentation",
  description:
    "Staff augmentation services to add specialists quickly—engineers who integrate with your team to accelerate delivery without sacrificing quality.",
  canonical: "/what-we-do/engagement/staff-augmentation",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

