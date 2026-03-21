import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "MCP Development",
  description:
    "Model Context Protocol (MCP) development to connect AI agents to tools and systems safely—designed for reliability, permissions, and production use.",
  canonical: "/what-we-do/ai/mcp",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

