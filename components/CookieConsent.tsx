"use client";

import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const CookieConsent = ({
  onConsentChange,
}: {
  onConsentChange?: (consent: boolean) => void;
}) => {
  const [showBanner, setShowBanner] = useState(false);
  const t = useTranslations("cookies");

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
      maxAge: 60 * 60 * 24 * 365,
    });
    onConsentChange?.(true);
  };

  const rejectCookie = () => {
    setShowBanner(false);
    setCookie("localConsent", "false", {
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
    onConsentChange?.(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      role="alert"
      className="fixed bottom-0 left-0 right-0 z-50 flex w-full flex-col gap-4 bg-muted px-6 py-6 shadow-lg sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-foreground text-xs sm:text-sm">
        {t("message")}{" "}
        <Link href="/regulamin" className="underline hover:text-primary">
          {t("policyLink")}
        </Link>
      </p>
      <div className="flex shrink-0 gap-3">
        <button
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
          onClick={rejectCookie}
        >
          {t("reject")}
        </button>
        <button
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          onClick={acceptCookie}
        >
          {t("accept")}
        </button>
      </div>
    </div>
  );
};
