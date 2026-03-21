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

function createInitialState(service = "AI"): FormState {
  return {
    name: "",
    email: "",
    company: "",
    phone: "",
    service,
    budget: "Not sure",
    message: "",
  };
}

export function ContactForm({
  source = "website",
  submitLabel,
  variant = "default",
}: {
  source?: string;
  submitLabel?: string;
  variant?: "default" | "contact-page";
}) {
  const isContactPage = variant === "contact-page";
  const [state, setState] = useState<FormState>(() =>
    createInitialState(isContactPage ? "" : "AI")
  );
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
      setState(createInitialState(isContactPage ? "" : "AI"));
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className={isContactPage ? "space-y-4" : "space-y-5"}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" required variant={variant}>
          <input
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            className={getInputClassName(variant)}
            placeholder={isContactPage ? "Full Name" : "Your name"}
          />
        </Field>
        <Field label="Email" required variant={variant}>
          <input
            type="email"
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            className={getInputClassName(variant)}
            placeholder={isContactPage ? "Email" : "you@company.com"}
          />
        </Field>
        <Field label="Phone" variant={variant}>
          <input
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            className={getInputClassName(variant)}
            placeholder="+91 ..."
          />
        </Field>
        <Field label="Select Service" required variant={variant}>
          <select
            value={state.service}
            onChange={(e) =>
              setState((s) => ({ ...s, service: e.target.value }))
            }
            className={getInputClassName(variant)}
          >
            {isContactPage ? (
              <option value="" disabled>
                Select Service
              </option>
            ) : null}
            <option>AI</option>
            <option>MERN Stack</option>
            <option>Mobile App</option>
            <option>Full Product Team</option>
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Company Name" variant={variant}>
            <input
              value={state.company}
              onChange={(e) =>
                setState((s) => ({ ...s, company: e.target.value }))
              }
              className={getInputClassName(variant)}
              placeholder={isContactPage ? "Company Name" : "Company (optional)"}
            />
          </Field>
        </div>
      </div>

      <Field label="Brief Your Requirement" required variant={variant}>
        <textarea
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          className={getTextareaClassName(variant)}
          placeholder={
            isContactPage
              ? "Brief Your Requirement"
              : "Share your goals, timeline, and any context..."
          }
        />
      </Field>

      <div
        className={[
          "flex flex-col gap-3",
          isContactPage ? "items-start" : "sm:flex-row sm:items-center sm:justify-between",
        ].join(" ")}
      >
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
          className={
            isContactPage
              ? "min-w-32 rounded-full px-8 py-3 text-xs font-bold uppercase tracking-wide"
              : "w-full px-5 py-3"
          }
          disabled={!canSubmit || status.kind === "submitting"}
        >
          {status.kind === "submitting" ? "Submitting..." : submitLabel ?? "Submit"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  variant = "default",
  children,
}: {
  label: string;
  required?: boolean;
  variant?: "default" | "contact-page";
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <div
        className={
          variant === "contact-page"
            ? "text-[11px] font-medium text-slate-500"
            : "text-xs font-semibold uppercase tracking-wide text-slate-500"
        }
      >
        {label} {required ? <span className="text-rose-300">*</span> : null}
      </div>
      {children}
    </label>
  );
}

function getInputClassName(variant: "default" | "contact-page") {
  return variant === "contact-page"
    ? "h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
    : "h-11 w-full rounded-xl bg-white px-3 text-sm text-slate-900 ring-1 ring-black/10 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25";
}

function getTextareaClassName(variant: "default" | "contact-page") {
  return variant === "contact-page"
    ? "min-h-28 w-full resize-y rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
    : "min-h-32 w-full resize-y rounded-xl bg-white px-3 py-2 text-sm text-slate-900 ring-1 ring-black/10 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25";
}

