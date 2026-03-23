import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getApiBase } from "@/lib/apiBase";
import { BlogToc, type TocItem } from "@/components/blog/BlogToc";

type Blog = {
  title: string;
  category: string;
  content: string;
  coverImageUrl?: string;
  authorName: string;
  authorAvatarUrl?: string;
  readTimeMin: number;
  publishedAt: string;
};

type Params = { slug: string };

type BlogBlock =
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "paragraph"; text: string };

async function fetchBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${getApiBase()}/api/blogs/${slug}`, { cache: "no-store" });
    if (!res.ok) return null;
    const data = (await res.json()) as { blog?: Blog };
    return data.blog ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlog(slug);
  if (!blog) return { title: "Blog" };
  return {
    title: blog.title,
    description: blog.content.slice(0, 160),
    alternates: { canonical: `/blog/${slug}` },
  };
}

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "Unknown date"
    : date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function looksLikeHeading(line: string) {
  const words = line.trim().split(/\s+/);
  if (words.length < 3 || words.length > 14) return false;
  if (/[.!?]$/.test(line.trim())) return false;
  const startsUpper = /^[A-Z]/.test(line.trim());
  return startsUpper && line.length <= 90;
}

function parseContent(content: string): BlogBlock[] {
  const lines = content.split(/\r?\n/);
  const blocks: BlogBlock[] = [];
  const usedIds = new Set<string>();

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    let headingLevel: 2 | 3 | null = null;
    let headingText = "";

    if (line.startsWith("## ")) {
      headingLevel = 2;
      headingText = line.slice(3).trim();
    } else if (line.startsWith("### ")) {
      headingLevel = 3;
      headingText = line.slice(4).trim();
    } else if (looksLikeHeading(line)) {
      headingLevel = 2;
      headingText = line;
    }

    if (headingLevel && headingText) {
      const baseId = slugify(headingText) || "section";
      let id = baseId;
      let i = 2;
      while (usedIds.has(id)) {
        id = `${baseId}-${i}`;
        i += 1;
      }
      usedIds.add(id);
      blocks.push({ type: "heading", level: headingLevel, text: headingText, id });
      continue;
    }

    blocks.push({ type: "paragraph", text: line });
  }

  return blocks;
}

export default async function BlogDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const blog = await fetchBlog(slug);
  if (!blog) notFound();
  const blocks = parseContent(blog.content);
  const tocItems = blocks.filter(
    (b): b is Extract<BlogBlock, { type: "heading" }> => b.type === "heading"
  );
  const toc: TocItem[] = tocItems.map((item) => ({
    id: item.id,
    text: item.text,
    level: item.level,
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="grid gap-12 lg:grid-cols-[1fr_360px]">
        <div className="min-w-0">
          <nav className="mb-5 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link href="/blog" className="hover:text-slate-700">
              Blog
            </Link>
            <span className="px-2">/</span>
            <span className="font-medium text-slate-700">{blog.title}</span>
          </nav>

          <p className="inline-flex rounded bg-slate-900 px-2 py-1 text-xs font-semibold text-white">
            {blog.category}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{blog.title}</h1>
          <div className="mt-4 text-sm text-slate-500">
            {blog.authorName} • {formatDate(blog.publishedAt)} • {blog.readTimeMin} min read
          </div>

          {blog.coverImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={blog.coverImageUrl}
              alt={blog.title}
              className="mt-6 h-auto w-full rounded-2xl border border-slate-200 object-cover"
            />
          ) : null}

          <BlogToc items={toc} showDesktop={false} />

          <div className="mt-2 space-y-6 text-lg leading-9 text-slate-700">
            {blocks.map((block, idx) => {
              if (block.type === "heading") {
                return block.level === 2 ? (
                  <h2
                    key={`${block.id}-${idx}`}
                    id={block.id}
                    className="scroll-mt-28 text-3xl font-bold leading-tight text-slate-900"
                  >
                    {block.text}
                  </h2>
                ) : (
                  <h3
                    key={`${block.id}-${idx}`}
                    id={block.id}
                    className="scroll-mt-28 text-2xl font-semibold leading-tight text-slate-900"
                  >
                    {block.text}
                  </h3>
                );
              }
              return <p key={`p-${idx}`}>{block.text}</p>;
            })}
          </div>
        </div>
        <BlogToc items={toc} showMobile={false} />
      </article>
    </div>
  );
}

