"use client";

import { useState } from "react";
import { hasCookie } from "cookies-next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { CookieConsent } from "@/components/CookieConsent";

export function AnalyticsWrapper() {
  const [hasConsent, setHasConsent] = useState(() => {
    if (typeof window === "undefined") return false;
    return hasCookie("localConsent") && document.cookie.includes("localConsent=true");
  });

  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics hasConsent={hasConsent} />
      )}
      <CookieConsent onConsentChange={setHasConsent} />
    </>
  );
}
