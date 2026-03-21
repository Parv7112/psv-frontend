import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Website Development",
  description:
    "Website development services with modern UI, performance, and SEO-friendly structure—built for conversions and fast load times.",
  canonical: "/what-we-do/software/website",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

