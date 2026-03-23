import type { Metadata } from "next";
import Link from "next/link";
import { getApiBase } from "@/lib/apiBase";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  coverImageUrl?: string;
  authorName: string;
  authorAvatarUrl?: string;
  readTimeMin: number;
  publishedAt: string;
};

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AI, product engineering, and growth.",
  alternates: { canonical: "/blog" },
};

async function fetchBlogs(category?: string): Promise<Blog[]> {
  try {
    const query = category ? `?category=${encodeURIComponent(category)}` : "";
    const res = await fetch(`${getApiBase()}/api/blogs${query}`, { cache: "no-store" });
    const data = (await res.json()) as { blogs?: Blog[] };
    return Array.isArray(data.blogs) ? data.blogs : [];
  } catch {
    return [];
  }
}

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "Unknown date"
    : date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: selectedCategoryParam } = await searchParams;
  const selectedCategory = selectedCategoryParam?.trim() || "All";

  const allBlogs = await fetchBlogs();
  const blogs = selectedCategory === "All" ? allBlogs : await fetchBlogs(selectedCategory);
  const categories = ["All", ...new Set(allBlogs.map((b) => b.category))];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={category === "All" ? "/blog" : `/blog?category=${encodeURIComponent(category)}`}
            className={[
              "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
              selectedCategory === category
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
            ].join(" ")}
          >
            {category}
          </Link>
        ))}
      </div>

      {blogs.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-600">
          No blogs published yet. Login at <code>/admin</code> to publish your first blog.
        </div>
      ) : (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog._id}
              href={`/blog/${blog.slug}`}
              className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                {blog.coverImageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={blog.coverImageUrl} alt={blog.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-700 to-fuchsia-700 text-center text-sm font-semibold text-white">
                    {blog.category}
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3 text-xs">
                  <span className="rounded bg-slate-900 px-2 py-1 font-semibold text-white">
                    {blog.category}
                  </span>
                  <span className="text-slate-500">{blog.readTimeMin} min read</span>
                </div>

                <h2 className="line-clamp-2 text-2xl font-semibold tracking-tight text-slate-900">
                  {blog.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{blog.excerpt}</p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {blog.authorAvatarUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={blog.authorAvatarUrl}
                        alt={blog.authorName}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-slate-200 text-xs font-bold text-slate-700">
                        {blog.authorName.slice(0, 1).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{blog.authorName}</p>
                      <p className="text-xs text-slate-500">{formatDate(blog.publishedAt)}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-indigo-600 transition-colors group-hover:text-indigo-500">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

