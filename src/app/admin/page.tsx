"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/marketing/PageHero";
import { getApiBase } from "@/lib/apiBase";

type LoginState = { email: string; password: string };
type BlogState = {
  title: string;
  category: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  authorName: string;
  authorAvatarUrl: string;
  readTimeMin: string;
};
type ExistingBlog = BlogState & {
  _id: string;
  slug: string;
  publishedAt?: string;
};

const tokenStorageKey = "psv_admin_token";

export default function AdminPage() {
  const [token, setToken] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return window.localStorage.getItem(tokenStorageKey) ?? "";
  });
  const [login, setLogin] = useState<LoginState>({ email: "", password: "" });
  const [blog, setBlog] = useState<BlogState>({
    title: "",
    category: "",
    excerpt: "",
    content: "",
    coverImageUrl: "",
    authorName: "",
    authorAvatarUrl: "",
    readTimeMin: "5",
  });
  const [status, setStatus] = useState<{ kind: "idle" | "error" | "success"; message?: string }>({
    kind: "idle",
  });
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<ExistingBlog[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedBlogCategory, setSelectedBlogCategory] = useState("All");

  const isLoggedIn = useMemo(() => token.trim().length > 0, [token]);
  const blogCategories = useMemo(
    () => ["All", ...new Set(blogs.map((b) => b.category).filter(Boolean))],
    [blogs]
  );
  const filteredBlogs = useMemo(
    () =>
      selectedBlogCategory === "All"
        ? blogs
        : blogs.filter((b) => b.category === selectedBlogCategory),
    [blogs, selectedBlogCategory]
  );

  async function loadBlogs() {
    if (!isLoggedIn) return;
    setLoadingBlogs(true);
    try {
      const res = await fetch(`${getApiBase()}/api/blogs`, { cache: "no-store" });
      const data = (await res.json()) as { blogs?: ExistingBlog[] };
      setBlogs(Array.isArray(data.blogs) ? data.blogs : []);
    } catch {
      setStatus({ kind: "error", message: "Could not load existing blogs." });
    } finally {
      setLoadingBlogs(false);
    }
  }

  useEffect(() => {
    if (isLoggedIn) loadBlogs();
  }, [isLoggedIn]);

  async function loginAdmin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus({ kind: "idle" });
    try {
      const res = await fetch(`${getApiBase()}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });
      const data = (await res.json()) as { token?: string; error?: { message?: string } };
      if (!res.ok || !data.token) {
        setStatus({ kind: "error", message: data.error?.message ?? "Login failed" });
        return;
      }
      window.localStorage.setItem(tokenStorageKey, data.token);
      setToken(data.token);
      setStatus({ kind: "success", message: "Logged in successfully." });
    } catch {
      setStatus({ kind: "error", message: "Network error while logging in." });
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    window.localStorage.removeItem(tokenStorageKey);
    setToken("");
    setStatus({ kind: "idle" });
    setEditingBlogId(null);
    setShowCreateForm(false);
  }

  async function createBlog(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isLoggedIn) return;
    setLoading(true);
    setStatus({ kind: "idle" });
    try {
      const payload = {
        ...blog,
        readTimeMin: Number(blog.readTimeMin) || 5,
      };
      const url = editingBlogId ? `${getApiBase()}/api/blogs/${editingBlogId}` : `${getApiBase()}/api/blogs`;
      const res = await fetch(url, {
        method: editingBlogId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { error?: { message?: string } };
      if (!res.ok) {
        setStatus({
          kind: "error",
          message: data.error?.message ?? (editingBlogId ? "Failed to update blog" : "Failed to create blog"),
        });
        return;
      }
      setStatus({
        kind: "success",
        message: editingBlogId
          ? "Blog updated successfully."
          : "Blog published successfully. It is live on /blog.",
      });
      setBlog({
        title: "",
        category: "",
        excerpt: "",
        content: "",
        coverImageUrl: "",
        authorName: "",
        authorAvatarUrl: "",
        readTimeMin: "5",
      });
      setEditingBlogId(null);
      setShowCreateForm(false);
      await loadBlogs();
    } catch {
      setStatus({ kind: "error", message: "Network error while saving blog." });
    } finally {
      setLoading(false);
    }
  }

  function startEdit(existing: ExistingBlog) {
    setEditingBlogId(existing._id);
    setShowCreateForm(true);
    setBlog({
      title: existing.title,
      category: existing.category,
      excerpt: existing.excerpt,
      content: existing.content,
      coverImageUrl: existing.coverImageUrl ?? "",
      authorName: existing.authorName,
      authorAvatarUrl: existing.authorAvatarUrl ?? "",
      readTimeMin: String(existing.readTimeMin ?? 5),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function deleteBlog(id: string) {
    if (!confirm("Delete this blog? This cannot be undone.")) return;
    setLoading(true);
    setStatus({ kind: "idle" });
    try {
      const res = await fetch(`${getApiBase()}/api/blogs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = (await res.json().catch(() => null)) as { error?: { message?: string } } | null;
      if (!res.ok) {
        setStatus({ kind: "error", message: data?.error?.message ?? "Failed to delete blog." });
        return;
      }
      if (editingBlogId === id) {
        setEditingBlogId(null);
      }
      setStatus({ kind: "success", message: "Blog deleted successfully." });
      await loadBlogs();
    } catch {
      setStatus({ kind: "error", message: "Network error while deleting blog." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-10 pb-12">
      <PageHero
        showMarquee={false}
        breadcrumb={
          <nav className="text-sm">
            <Link href="/">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">Admin</span>
          </nav>
        }
        eyebrow="Admin Console"
        title="Manage and publish blogs"
        description="Create, edit, and delete blog posts from one place. New content appears instantly on /blog."
      />

      {!isLoggedIn ? (
        <form
          onSubmit={loginAdmin}
          className="relative z-10 mx-auto -mt-10 max-w-3xl space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-7"
        >
          <h2 className="text-xl font-semibold text-slate-900">Admin Login</h2>
          <Field label="Email">
            <input
              type="email"
              required
              value={login.email}
              onChange={(e) => setLogin((s) => ({ ...s, email: e.target.value }))}
              className={inputClassName}
              placeholder="admin@company.com"
            />
          </Field>
          <Field label="Password">
            <input
              type="password"
              required
              value={login.password}
              onChange={(e) => setLogin((s) => ({ ...s, password: e.target.value }))}
              className={inputClassName}
              placeholder="Enter your password"
            />
          </Field>
          <Button type="submit" variant="dark" className="w-full py-3" disabled={loading}>
            {loading ? "Logging in..." : "Login to Admin"}
          </Button>
          <p className="text-center text-sm text-slate-600">
            No account yet?{" "}
            <Link href="/admin/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Register here <ArrowRight className="inline h-3.5 w-3.5" />
            </Link>
          </p>
        </form>
      ) : (
        <section className="relative z-10 mx-auto -mt-10 max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="grid gap-1">
              <h2 className="text-xl font-semibold text-slate-900">Blog Management</h2>
              <p className="text-sm text-slate-600">Create, edit, and manage all published blogs.</p>
            </div>
            <div className="flex items-center gap-2">
              {!showCreateForm ? (
                <Button type="button" variant="dark" onClick={() => setShowCreateForm(true)}>
                  Create Blog
                </Button>
              ) : null}
              <Button type="button" variant="secondary" onClick={logout}>
                Logout
              </Button>
            </div>
          </div>

          {showCreateForm ? (
            <form onSubmit={createBlog} className="mt-6 space-y-5 border-t border-slate-200 pt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  {editingBlogId ? "Edit Blog" : "Publish New Blog"}
                </h3>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setEditingBlogId(null);
                    setShowCreateForm(false);
                    setBlog({
                      title: "",
                      category: "",
                      excerpt: "",
                      content: "",
                      coverImageUrl: "",
                      authorName: "",
                      authorAvatarUrl: "",
                      readTimeMin: "5",
                    });
                  }}
                >
                  Close
                </Button>
              </div>

              <Field label="Blog title">
                <input
                  required
                  value={blog.title}
                  onChange={(e) => setBlog((s) => ({ ...s, title: e.target.value }))}
                  className={inputClassName}
                  placeholder="Write a clear, value-driven title"
                />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Category">
                  <input
                    required
                    value={blog.category}
                    onChange={(e) => setBlog((s) => ({ ...s, category: e.target.value }))}
                    className={inputClassName}
                    placeholder="e.g. Generative AI"
                  />
                </Field>
                <Field label="Read time (minutes)">
                  <input
                    required
                    value={blog.readTimeMin}
                    onChange={(e) => setBlog((s) => ({ ...s, readTimeMin: e.target.value }))}
                    className={inputClassName}
                    placeholder="5"
                  />
                </Field>
              </div>
              <Field label="Excerpt">
                <textarea
                  required
                  value={blog.excerpt}
                  onChange={(e) => setBlog((s) => ({ ...s, excerpt: e.target.value }))}
                  className={textareaClassName}
                  placeholder="2-3 lines for the listing card"
                />
              </Field>
              <Field label="Full content">
                <textarea
                  required
                  value={blog.content}
                  onChange={(e) => setBlog((s) => ({ ...s, content: e.target.value }))}
                  className="min-h-56 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="Write full blog content..."
                />
              </Field>
              <Field label="Cover image URL (optional)">
                <input
                  value={blog.coverImageUrl}
                  onChange={(e) => setBlog((s) => ({ ...s, coverImageUrl: e.target.value }))}
                  className={inputClassName}
                  placeholder="https://..."
                />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Author name">
                  <input
                    required
                    value={blog.authorName}
                    onChange={(e) => setBlog((s) => ({ ...s, authorName: e.target.value }))}
                    className={inputClassName}
                    placeholder="Author name"
                  />
                </Field>
                <Field label="Author avatar URL (optional)">
                  <input
                    value={blog.authorAvatarUrl}
                    onChange={(e) => setBlog((s) => ({ ...s, authorAvatarUrl: e.target.value }))}
                    className={inputClassName}
                    placeholder="https://..."
                  />
                </Field>
              </div>

              <Button type="submit" variant="dark" className="w-full py-3" disabled={loading}>
                {loading ? "Saving..." : editingBlogId ? "Update blog" : "Publish blog"}
              </Button>
            </form>
          ) : null}
        </section>
      )}

      {isLoggedIn ? (
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-7">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">Existing Blogs</h2>
            <Button type="button" variant="secondary" onClick={loadBlogs} disabled={loadingBlogs}>
              {loadingBlogs ? "Refreshing..." : "Refresh"}
            </Button>
          </div>

          {blogs.length === 0 ? (
            <p className="text-sm text-slate-600">No blogs found yet.</p>
          ) : (
            <>
              <div className="mb-5 flex flex-wrap gap-2">
                {blogCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedBlogCategory(category)}
                    className={[
                      "rounded-md border px-3 py-1.5 text-xs font-medium transition-colors",
                      selectedBlogCategory === category
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredBlogs.map((item) => (
                  <article
                    key={item._id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                      {item.coverImageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={item.coverImageUrl} alt={item.title} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-700 to-fuchsia-700 text-center text-sm font-semibold text-white">
                          {item.category || "Blog"}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between gap-2 text-xs">
                        <span className="rounded bg-slate-900 px-2 py-1 font-semibold text-white">
                          {item.category || "General"}
                        </span>
                        <span className="text-slate-500">{item.readTimeMin} min read</span>
                      </div>
                      <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                      <p className="mt-2 truncate text-[11px] text-slate-500">/blog/{item.slug}</p>

                      <div className="mt-4 flex items-center gap-2">
                        <Button type="button" variant="secondary" className="flex-1" onClick={() => startEdit(item)}>
                          Edit
                        </Button>
                        <Button
                          type="button"
                          variant="dark"
                          className="flex-1 bg-rose-700 hover:bg-rose-600"
                          onClick={() => deleteBlog(item._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredBlogs.length === 0 ? (
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                  No blogs found in this category.
                </div>
              ) : null}
            </>
          )}
        </section>
      ) : null}

      {status.kind !== "idle" ? (
        <div
          className={[
            "mt-5 rounded-xl border px-4 py-3 text-sm",
            status.kind === "error"
              ? "border-rose-300 bg-rose-50 text-rose-900"
              : "border-emerald-300 bg-emerald-50 text-emerald-900",
          ].join(" ")}
        >
          {status.message}
        </div>
      ) : null}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</span>
      {children}
    </label>
  );
}

const inputClassName =
  "h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

const textareaClassName =
  "min-h-24 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

