"use client";

import { useState } from "react";

const KEY = "psv_cookie_consent_v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    try {
      const v = window.localStorage.getItem(KEY);
      return !v;
    } catch {
      return true;
    }
  });

  if (!visible) return null;

  function accept() {
    try {
      window.localStorage.setItem(KEY, "accepted");
    } catch {
      // ignore
    }
    setVisible(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="mx-auto w-full max-w-6xl px-5 pb-5 sm:px-8">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(2,6,23,0.10)] sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="text-xs leading-5 text-slate-600">
            We use cookies to improve your experience. By using this site, you
            agree to our Cookie Policy.
          </div>
          <button
            type="button"
            onClick={accept}
            className="inline-flex h-10 items-center justify-center rounded-xl bg-slate-950 px-5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-slate-900"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

