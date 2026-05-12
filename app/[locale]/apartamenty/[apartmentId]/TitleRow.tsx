import { useTranslations } from "next-intl";
import { Heart, MapPin, Share2 } from "lucide-react";

interface TitleRowProps {
  name: string;
  location: string;
  shortName?: string;
}

export function TitleRow({ name, location, shortName }: TitleRowProps) {
  const t = useTranslations("apartmentPage");
  const otherName = shortName === "chlodna" ? "Pereca" : "Chłodna";

  return (
    <section className="flex flex-col gap-6 pb-8 pt-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.22em] text-skyline-blue">
          <MapPin className="h-3 w-3" strokeWidth={2} />
          {location}
        </div>
        <h1
          className="mt-3 font-display text-[32px] font-semibold leading-[1.05] text-skyline-ink sm:text-[40px] lg:text-[52px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          {name}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px]">
          <span className="flex items-center gap-1 text-skyline-ink">
            <span className="text-skyline-gold">★</span>
            <span className="font-semibold">4.92</span>
            <span className="text-skyline-muted">· {t("reviews", { count: 87 })}</span>
          </span>
          <span className="text-skyline-muted">·</span>
          <span className="rounded bg-skyline-gold px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-skyline-ink">
            {t("superhost")}
          </span>
          <span className="text-skyline-muted">·</span>
          <span className="text-skyline-muted">{t("selfCheckin")}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={t("favorite")}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-skyline-line bg-white text-skyline-ink transition hover:bg-skyline-blue-soft"
        >
          <Heart className="h-3.5 w-3.5" strokeWidth={1.6} />
        </button>
        <button
          type="button"
          aria-label={t("share")}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-skyline-line bg-white text-skyline-ink transition hover:bg-skyline-blue-soft"
        >
          <Share2 className="h-3.5 w-3.5" strokeWidth={1.6} />
        </button>
        <button
          type="button"
          className="rounded-md border border-skyline-line bg-white px-4 py-2 text-[13px] font-medium text-skyline-ink transition hover:bg-skyline-blue-soft"
        >
          {t("compareWith", { name: otherName })}
        </button>
      </div>
    </section>
  );
}
