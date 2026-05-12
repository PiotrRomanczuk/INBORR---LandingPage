import { KeyRound, TrainFront, Coffee, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

const VALUE_ITEMS: { key: string; icon: ReactNode }[] = [
  { key: "checkin", icon: <KeyRound className="h-5 w-5" aria-hidden /> },
  { key: "metro", icon: <TrainFront className="h-5 w-5" aria-hidden /> },
  { key: "welcome", icon: <Coffee className="h-5 w-5" aria-hidden /> },
  { key: "hotel", icon: <Sparkles className="h-5 w-5" aria-hidden /> },
];

export const Values = () => {
  const t = useTranslations("values");

  return (
    <section className="px-6 py-16 md:px-10 md:py-20 lg:px-12">
      <div className="mb-10 grid grid-cols-1 items-end gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <div className="skyline-eyebrow mb-3 text-skyline-gold">
            {t("eyebrow")}
          </div>
          <h2
            className="font-display text-[36px] leading-[1] tracking-tight text-skyline-ink sm:text-[44px] lg:text-[52px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>
        </div>
        <p className="max-w-md text-[14px] leading-relaxed text-skyline-muted md:col-span-5 md:col-start-8">
          {t("intro")}
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {VALUE_ITEMS.map((v) => (
          <li
            key={v.key}
            className="rounded-xl border border-skyline-line bg-white p-7"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-skyline-blue-soft text-skyline-blue">
              {v.icon}
            </div>
            <div className="font-display mt-5 text-[20px] font-semibold tracking-tight text-skyline-ink">
              {t(`items.${v.key}.title`)}
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-skyline-muted">
              {t(`items.${v.key}.desc`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
