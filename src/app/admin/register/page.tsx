"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ShieldCheck, UserPlus } from "lucide-react";
import { Button } from "@/components/Button";
import { getApiBase } from "@/lib/apiBase";

type RegisterState = {
  name: string;
  email: string;
  password: string;
};

const tokenStorageKey = "psv_admin_token";

export default function AdminRegisterPage() {
  const [form, setForm] = useState<RegisterState>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ kind: "idle" | "error" | "success"; message?: string }>({
    kind: "idle",
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus({ kind: "idle" });
    try {
      const res = await fetch(`${getApiBase()}/api/admin/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { token?: string; error?: { message?: string } };
      if (!res.ok || !data.token) {
        setStatus({ kind: "error", message: data.error?.message ?? "Registration failed" });
        return;
      }

      window.localStorage.setItem(tokenStorageKey, data.token);
      setStatus({ kind: "success", message: "Admin registered. You can now publish blogs from /admin." });
      setForm({ name: "", email: "", password: "" });
    } catch {
      setStatus({ kind: "error", message: "Network error while registering." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-14">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(2,6,23,0.08)] sm:p-9">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-amber-200/40 blur-3xl" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/60 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Secure onboarding
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Create your admin account
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Register once, then manage blog publishing from <code>/admin</code>. Use a strong
            password and keep credentials private.
          </p>
        </div>
      </section>

      <form
        onSubmit={onSubmit}
        className="mt-8 space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-7"
      >
        <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
          <UserPlus className="h-5 w-5 text-slate-700" />
          Register Admin
        </h2>

        <Field label="Name (optional)">
          <input
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            className={inputClassName}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            className={inputClassName}
            placeholder="admin@company.com"
          />
        </Field>
        <Field label="Password">
          <input
            type="password"
            required
            minLength={8}
            value={form.password}
            onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
            className={inputClassName}
            placeholder="Minimum 8 characters"
          />
        </Field>

        <Button type="submit" variant="dark" className="w-full py-3" disabled={loading}>
          {loading ? "Registering..." : "Register Admin"}
        </Button>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/admin" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Login <ArrowRight className="inline h-3.5 w-3.5" />
          </Link>
        </p>
      </form>

      {status.kind !== "idle" ? (
        <div
          className={[
            "rounded-xl border px-4 py-3 text-sm",
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

