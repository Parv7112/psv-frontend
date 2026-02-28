"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { getApiBase } from "@/lib/apiBase";

function getApiErrorMessage(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const rec = data as Record<string, unknown>;
  const err = rec["error"];
  if (!err || typeof err !== "object") return null;
  const msg = (err as Record<string, unknown>)["message"];
  return typeof msg === "string" && msg.trim().length > 0 ? msg : null;
}

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "AI",
  budget: "Not sure",
  message: "",
};

export function ContactForm({ source = "website" }: { source?: string }) {
  const [state, setState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "submitting" }
    | { kind: "success"; message: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  const canSubmit = useMemo(() => {
    return (
      state.name.trim().length >= 2 &&
      state.email.trim().length >= 5 &&
      state.message.trim().length >= 10
    );
  }, [state.email, state.message, state.name]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit || status.kind === "submitting") return;

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch(`${getApiBase()}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...state, source }),
      });

      const data: unknown = await res.json().catch(() => null);
      if (!res.ok) {
        const msg =
          getApiErrorMessage(data) ||
          "Something went wrong. Please try again in a moment.";
        setStatus({ kind: "error", message: msg });
        return;
      }

      setStatus({
        kind: "success",
        message: "Thanks! We received your message and will reply soon.",
      });
      setState(initialState);
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" required>
          <input
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            className="h-11 w-full rounded-xl bg-white px-3 text-sm text-slate-900 ring-1 ring-black/10 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
            placeholder="Your name"
          />
        </Field>
        <Field label="Business email" required>
          <input
            type="email"
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            className="h-11 w-full rounded-xl bg-white px-3 text-sm text-slate-900 ring-1 ring-black/10 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
            placeholder="you@company.com"
          />
        </Field>
        <Field label="Phone">
          <input
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            className="h-11 w-full rounded-xl bg-white px-3 text-sm text-slate-900 ring-1 ring-black/10 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
            placeholder="+91 ..."
          />
        </Field>
        <Field label="Select service" required>
          <select
            value={state.service}
            onChange={(e) =>
              setState((s) => ({ ...s, service: e.target.value }))
            }
            className="h-11 w-full rounded-xl bg-white px-3 text-sm text-slate-900 ring-1 ring-black/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
          >
            <option>AI</option>
            <option>MERN Stack</option>
            <option>Mobile App</option>
            <option>Full Product Team</option>
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Company name">
            <input
              value={state.company}
              onChange={(e) =>
                setState((s) => ({ ...s, company: e.target.value }))
              }
              className="h-11 w-full rounded-xl bg-white px-3 text-sm text-slate-900 ring-1 ring-black/10 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
              placeholder="Company (optional)"
            />
          </Field>
        </div>
      </div>

      <Field label="Brief your requirement" required>
        <textarea
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          className="min-h-32 w-full resize-y rounded-xl bg-white px-3 py-2 text-sm text-slate-900 ring-1 ring-black/10 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
          placeholder="Share your goals, timeline, and any context..."
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm">
          {status.kind === "success" ? (
            <div className="rounded-xl border border-emerald-300/50 bg-emerald-50 px-4 py-3 text-emerald-900">
              {status.message}
            </div>
          ) : status.kind === "error" ? (
            <div className="rounded-xl border border-rose-300/60 bg-rose-50 px-4 py-3 text-rose-900">
              {status.message}
            </div>
          ) : null}
        </div>
        <Button
          type="submit"
          variant="dark"
          className="w-full px-5 py-3"
          disabled={!canSubmit || status.kind === "submitting"}
        >
          {status.kind === "submitting" ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label} {required ? <span className="text-rose-300">*</span> : null}
      </div>
      {children}
    </label>
  );
}

