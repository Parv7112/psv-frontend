import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://psventerprises.com";
const baseUrl = siteUrl.replace(/\/$/, "");

function u(pathname: string) {
  return `${baseUrl}${pathname}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls = [
    "/",
    "/about",
    "/company",
    "/contact",
    "/industries",
    "/industries/healthcare",
    "/industries/education",
    "/industries/finance",
    "/industries/retail",
    "/industries/manufacturing",
    "/lets-talk",
    "/our-work",
    "/services",
    "/services/ai",
    "/services/mern",
    "/services/mobile",
    "/what-we-do",
    "/what-we-do/ai/agents",
    "/what-we-do/ai/automation",
    "/what-we-do/ai/chatbots",
    "/what-we-do/ai/consulting",
    "/what-we-do/ai/generative",
    "/what-we-do/ai/mcp",
    "/what-we-do/ai/mlops",
    "/what-we-do/ai/rag",
    "/what-we-do/engagement/dedicated-team",
    "/what-we-do/engagement/outsourcing",
    "/what-we-do/engagement/staff-augmentation",
    "/what-we-do/other/devops",
    "/what-we-do/other/discovery",
    "/what-we-do/other/maintenance",
    "/what-we-do/other/offshore",
    "/what-we-do/other/performance",
    "/what-we-do/other/ui-ux",
    "/what-we-do/software/apis",
    "/what-we-do/software/custom",
    "/what-we-do/software/ecommerce",
    "/what-we-do/software/erp",
    "/what-we-do/software/mobile",
    "/what-we-do/software/saas",
    "/what-we-do/software/ui-ux",
    "/what-we-do/software/web-app",
    "/what-we-do/software/website",
    "/work",
  ];

  return urls.map((pathname) => ({
    url: u(pathname),
    lastModified: now,
  }));
}

