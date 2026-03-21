"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "psv_cookie_consent_v1";

/** Fired from CookieBanner when the user clicks Accept. */
export const PSV_COOKIE_CONSENT_EVENT = "psv-cookie-consent";

/**
 * Loads Google Analytics 4 (gtag.js) after the user accepts cookies.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local (e.g. G-XXXXXXXXXX).
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!gaId) return;

    function checkConsent() {
      try {
        return localStorage.getItem(CONSENT_KEY) === "accepted";
      } catch {
        return false;
      }
    }

    if (checkConsent()) {
      setEnabled(true);
    }

    function onConsent() {
      setEnabled(true);
    }

    window.addEventListener(PSV_COOKIE_CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(PSV_COOKIE_CONSENT_EVENT, onConsent);
  }, [gaId]);

  if (!gaId || !enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
