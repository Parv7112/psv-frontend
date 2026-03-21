import type { Metadata } from "next";

type BuildMetadataArgs = {
  title: string;
  description: string;
  canonical: `/${string}` | "/";
  openGraphTitle?: string;
};

export function buildMetadata({
  title,
  description,
  canonical,
  openGraphTitle,
}: BuildMetadataArgs): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: openGraphTitle ?? `${title} | PSV Enterprises`,
      description,
      url: canonical,
      type: "website",
      images: [
        {
          url: "/logo.png",
          alt: "PSV Enterprises",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: openGraphTitle ?? `${title} | PSV Enterprises`,
      description,
      images: ["/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

