"use client";

import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 z-10 flex w-full flex-col justify-between gap-4 bg-muted px-4 py-8 sm:flex-row">
      <span className="text-foreground flex text-xs sm:text-sm">
        Ta stronka używa ciasteczek (cookies) do przechowywania informacji o
        Twoich preferencjach i wizycie na stronie.
      </span>
      <button
        className="mr-4 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 lg:mr-16"
        onClick={() => acceptCookie()}
      >
        Akceptuję
      </button>
    </div>
  );
};
