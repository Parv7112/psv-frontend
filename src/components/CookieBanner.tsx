"use client";

import { useEffect, useState } from "react";
import { PSV_COOKIE_CONSENT_EVENT } from "./GoogleAnalytics";

const KEY = "psv_cookie_consent_v1";

function hasConsent(): boolean {
  try {
    if (window.localStorage.getItem(KEY) === "accepted") return true;
  } catch {
    // ignore localStorage errors
  }
  try {
    return document.cookie.split("; ").some((cookie) => cookie === `${KEY}=accepted`);
  } catch {
    return false;
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!hasConsent());
  }, []);

  if (!visible) return null;

  function accept() {
    try {
      window.localStorage.setItem(KEY, "accepted");
    } catch {
      // ignore
    }
    try {
      document.cookie = `${KEY}=accepted; Path=/; Max-Age=31536000; SameSite=Lax`;
    } catch {
      // ignore cookie write errors
    }
    setVisible(false);
    window.dispatchEvent(new Event(PSV_COOKIE_CONSENT_EVENT));
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] animate-[slideUpBanner_0.4s_ease-out]">
      <div className="mx-auto w-full max-w-[1600px] px-5 pb-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-3 rounded-2xl border border-zinc-700 bg-zinc-950/95 px-4 py-3 text-zinc-300 shadow-[0_-12px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="text-xs leading-5 text-zinc-400">
            We use cookies to improve your experience. By using this site, you
            agree to our Cookie Policy.
          </div>
          <button
            type="button"
            onClick={accept}
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-amber-400 px-6 text-xs font-bold uppercase tracking-wide text-zinc-950 shadow-lg transition-all duration-200 hover:bg-amber-300 active:scale-[0.98]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

