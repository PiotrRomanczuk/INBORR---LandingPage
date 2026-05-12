"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Link } from "@/i18n/routing";

const SearchField = ({
  label,
  value,
  active = false,
}: {
  label: string;
  value: string;
  active?: boolean;
}) => (
  <div
    className={`flex-1 rounded-lg px-4 py-3 ${active ? "bg-skyline-blue-soft" : ""}`}
  >
    <div
      className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${active ? "text-skyline-blue" : "text-skyline-muted"}`}
    >
      {label}
    </div>
    <div className="mt-1 text-[14px] font-medium text-skyline-ink">
      {value}
    </div>
  </div>
);

const StatBlock = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="font-display text-[24px] leading-none text-skyline-ink">
      {value}
    </div>
    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-skyline-muted">
      {label}
    </div>
  </div>
);

export const HeroTailwind = () => {
  const t = useTranslations("hero");

  return (
    <section className="bg-skyline-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col px-6 pb-16 pt-14 md:px-10 lg:px-12 lg:pb-16 lg:pt-20">
          <div className="mb-6 flex items-center gap-2 text-skyline-blue">
            <span className="skyline-rule" aria-hidden />
            <span className="skyline-eyebrow">{t("eyebrow")}</span>
          </div>

          <h1
            className="font-display text-[52px] leading-[0.95] tracking-tight text-skyline-ink sm:text-[64px] lg:text-[80px] xl:text-[88px]"
            style={{ letterSpacing: "-0.035em" }}
          >
            {t("titleLine1")}
            <br />
            <span className="text-skyline-blue">{t("titleLine2")}</span>
            <br />
            {t("titleLine3")}
          </h1>

          <p className="mt-6 max-w-[440px] text-[16px] leading-[1.55] text-skyline-muted lg:text-[17px]">
            {t("subtitle")}
          </p>

          <div
            className="mt-10 flex flex-col gap-1 rounded-xl border border-skyline-line bg-white p-2 sm:flex-row sm:items-stretch"
            style={{ boxShadow: "0 4px 24px -8px rgba(14,24,40,.1)" }}
          >
            <SearchField label={t("arrive")} value={t("arriveSample")} active />
            <SearchField label={t("depart")} value={t("departSample")} />
            <SearchField label={t("guests")} value={t("guestsSample")} />
            <Link
              href="/apartamenty"
              className="flex items-center justify-center rounded-lg bg-skyline-blue px-5 py-3 text-white transition hover:bg-skyline-blue-deep"
              aria-label={t("eyebrow")}
            >
              <Search className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-skyline-muted">
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "#3B9D6E" }}
                aria-hidden
              />
              {t("availability")}
            </span>
            <span aria-hidden>·</span>
            <span>{t("freeCancellation")}</span>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-2 gap-x-6 gap-y-6 border-t border-skyline-line pt-6 sm:grid-cols-4 lg:mt-auto">
            <StatBlock value="4.9/5" label={t("statGuestsLabel")} />
            <StatBlock value="2" label={t("statApartmentsLabel")} />
            <StatBlock value="100m" label={t("statMetroLabel")} />
            <StatBlock value="24/7" label={t("statCheckinLabel")} />
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[700px]">
          <Image
            src="/warsaw.jpg"
            alt={t("imageAlt")}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div
            className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/60 p-5 backdrop-blur"
            style={{ background: "rgba(255,255,255,0.96)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="skyline-eyebrow text-skyline-blue">
                  {t("featuredEyebrow")}
                </div>
                <div className="font-display mt-1 text-[18px] font-semibold leading-tight text-skyline-ink sm:text-[20px]">
                  {t("featuredName")}
                </div>
                <div className="mt-1 text-[12px] text-skyline-muted">
                  {t("featuredSpecs")}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-skyline-muted">
                  {t("from")}
                </div>
                <div className="font-display mt-0.5 text-[24px] font-semibold leading-none text-skyline-ink sm:text-[28px]">
                  250 zł
                  <span className="text-[12px] text-skyline-muted">
                    {t("perNight")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
