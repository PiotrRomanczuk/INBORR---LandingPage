"use client";

import { useTranslations } from "next-intl";

export default function Error({ reset }: { reset: () => void }) {
  const t = useTranslations("error");
  return (
    <div className="flex h-screen flex-col items-center justify-center pt-20">
      <div className="pb-10 text-5xl">{t("title")}</div>
      <button
        onClick={() => reset()}
        className="rounded-2xl bg-primary px-12 py-6 text-xl text-primary-foreground transition duration-300 hover:bg-primary/90"
      >
        {t("retry")}
      </button>
    </div>
  );
}
