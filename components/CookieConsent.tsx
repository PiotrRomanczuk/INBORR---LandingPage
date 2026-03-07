"use client";

import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Link from "next/link";

export const CookieConsent = ({ onConsentChange }: { onConsentChange?: (consent: boolean) => void }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasConsent = hasCookie("localConsent");
    setShowBanner(!hasConsent);
    if (hasConsent) {
      onConsentChange?.(true);
    }
  }, [onConsentChange]);

  const acceptCookie = () => {
    setShowBanner(false);
    setCookie("localConsent", "true", {
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365
    });
    onConsentChange?.(true);
  };

  const rejectCookie = () => {
    setShowBanner(false);
    setCookie("localConsent", "false", {
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365
    });
    onConsentChange?.(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      role="alert"
      className="fixed bottom-0 z-50 flex w-full flex-col justify-between gap-4 bg-muted px-4 py-8 sm:flex-row sm:items-center"
    >
      <span className="text-foreground flex text-xs sm:text-sm">
        Ta stronka używa ciasteczek (cookies) do przechowywania informacji o
        Twoich preferencjach i wizycie na stronie.{" "}
        <Link href="/regulamin" className="ml-1 underline hover:text-primary">
          Polityka prywatności
        </Link>
      </span>
      <div className="flex gap-2">
        <button
          className="rounded-md border border-border px-4 py-2 text-foreground hover:bg-accent"
          onClick={rejectCookie}
        >
          Odrzucam
        </button>
        <button
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          onClick={acceptCookie}
        >
          Akceptuję
        </button>
      </div>
    </div>
  );
};
