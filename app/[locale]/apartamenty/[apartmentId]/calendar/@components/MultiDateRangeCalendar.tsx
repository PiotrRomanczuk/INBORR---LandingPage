"use client";

import React, { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Calendar } from "@/components/ui/calendar";

type Status = "loading" | "ready" | "error";

interface MultiDateRangeCalendarProps {
  blockedDays: Date[];
  status: Status;
  lastFetched: Date | null;
  selectedCheckIn?: Date;
  onSelectCheckIn?: (date: Date | undefined) => void;
}

const startOfDay = (d: Date) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

const dayKey = (d: Date) =>
  `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

const LegendDot = ({ className }: { className: string }) => (
  <span
    aria-hidden
    className={`inline-block h-3 w-3 flex-shrink-0 rounded-sm ${className}`}
  />
);

export const MultiDateRangeCalendar: React.FC<MultiDateRangeCalendarProps> = ({
  blockedDays,
  status,
  lastFetched,
  selectedCheckIn,
  onSelectCheckIn,
}) => {
  const t = useTranslations("calendar");
  const locale = useLocale();
  const intlLocale = locale === "en" ? "en-GB" : "pl-PL";

  const formatDateLong = (date: Date) =>
    new Intl.DateTimeFormat(intlLocale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

  const formatTime = (date: Date) =>
    new Intl.DateTimeFormat(intlLocale, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);

  const formatRelativeFreshness = (date: Date): string => {
    const diffMin = Math.round((Date.now() - date.getTime()) / 60000);
    if (diffMin < 1) return t("freshJustNow");
    if (diffMin < 60) return t("freshMin", { minutes: diffMin });
    const diffH = Math.round(diffMin / 60);
    if (diffH < 24) return t("freshHours", { hours: diffH });
    return formatTime(date);
  };

  const blockedSet = useMemo(() => {
    const set = new Set<string>();
    blockedDays.forEach((d) => set.add(dayKey(d)));
    return set;
  }, [blockedDays]);

  const today = startOfDay(new Date());

  const isBlocked = (date: Date) => blockedSet.has(dayKey(date));
  const isPast = (date: Date) => startOfDay(date) < today;
  const isDisabled = (date: Date) => isPast(date) || isBlocked(date);

  const availableNext30 = useMemo(() => {
    let count = 0;
    for (let i = 0; i < 30; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      if (!isBlocked(d)) count++;
    }
    return count;
  }, [today, blockedSet]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <aside className="space-y-6 lg:col-span-4">
        <div>
          <p className="text-[14px] leading-relaxed text-skyline-muted">
            {t("intro")}
          </p>
        </div>

        {status === "ready" && (
          <div className="rounded-xl border border-skyline-line bg-skyline-paper p-5">
            <div className="skyline-eyebrow text-skyline-gold">
              {t("freeDays")}
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-[36px] font-semibold leading-none text-skyline-ink">
                {availableNext30}
              </span>
              <span className="text-[13px] text-skyline-muted">
                {t("outOf30")}
              </span>
            </div>
            {lastFetched && (
              <div className="mt-3 border-t border-skyline-line pt-3 text-[11px] text-skyline-muted">
                {t("updated", { when: formatRelativeFreshness(lastFetched) })}
              </div>
            )}
          </div>
        )}

        {status === "loading" && (
          <div className="rounded-xl border border-skyline-line bg-skyline-blue-soft/40 p-5 text-[13px] text-skyline-muted">
            {t("loadingAvailability")}
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="rounded-xl border border-amber-300 bg-amber-50 p-5 text-[13px] text-amber-900"
          >
            <div className="font-semibold">{t("errorTitle")}</div>
            <div className="mt-1 text-amber-800">{t("errorBody")}</div>
          </div>
        )}

        {selectedCheckIn && (
          <div className="rounded-xl border border-skyline-blue bg-skyline-blue-soft p-5">
            <div className="skyline-eyebrow text-skyline-blue">
              {t("selectedArrival")}
            </div>
            <div className="mt-2 font-display text-[18px] font-semibold capitalize leading-tight text-skyline-ink">
              {formatDateLong(selectedCheckIn)}
            </div>
            {onSelectCheckIn && (
              <button
                type="button"
                onClick={() => onSelectCheckIn(undefined)}
                className="mt-3 text-[11px] font-medium text-skyline-blue underline-offset-2 hover:underline"
              >
                {t("clear")}
              </button>
            )}
          </div>
        )}

        <ul className="space-y-2.5 text-[13px]">
          <li className="flex items-center gap-3 text-skyline-ink">
            <LegendDot className="border border-skyline-line bg-white" />
            <span className="text-skyline-muted">{t("legendFree")}</span>
          </li>
          <li className="flex items-center gap-3 text-skyline-ink">
            <LegendDot className="bg-skyline-line/80" />
            <span className="text-skyline-muted">{t("legendBlocked")}</span>
          </li>
          <li className="flex items-center gap-3 text-skyline-ink">
            <LegendDot className="bg-skyline-blue" />
            <span className="text-skyline-muted">{t("legendSelected")}</span>
          </li>
        </ul>
      </aside>

      <div className="lg:col-span-8">
        <div className="rounded-2xl border border-skyline-line bg-white p-4 shadow-sm sm:p-6">
          <Calendar
            mode="single"
            weekStartsOn={1}
            numberOfMonths={2}
            selected={selectedCheckIn}
            onSelect={onSelectCheckIn}
            disabled={isDisabled}
            modifiers={{
              blocked: (date) => isBlocked(date),
            }}
            modifiersClassNames={{
              blocked:
                "!bg-skyline-line/40 !text-skyline-muted line-through !opacity-70",
            }}
            className="mx-auto w-fit p-0"
            classNames={{
              months:
                "flex flex-col gap-6 sm:flex-row sm:gap-10 justify-center",
              month: "space-y-3",
              caption:
                "flex justify-center pt-1 relative items-center pb-2",
              caption_label:
                "font-display text-[15px] font-semibold tracking-tight text-skyline-ink capitalize",
              nav: "flex items-center",
              nav_button:
                "h-8 w-8 rounded-md bg-transparent text-skyline-muted hover:bg-skyline-blue-soft hover:text-skyline-ink transition flex items-center justify-center",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse",
              head_row: "flex",
              head_cell:
                "text-skyline-muted w-10 font-semibold text-[10px] uppercase tracking-[0.12em] pb-2",
              row: "flex w-full mt-0.5",
              cell: "h-10 w-10 text-center text-[13px] relative focus-within:relative focus-within:z-20",
              day: "h-10 w-10 p-0 font-medium text-skyline-ink rounded-md hover:bg-skyline-blue-soft hover:text-skyline-blue transition aria-selected:opacity-100",
              day_selected:
                "!bg-skyline-blue !text-white hover:!bg-skyline-blue-deep hover:!text-white focus:!bg-skyline-blue-deep",
              day_today:
                "ring-1 ring-inset ring-skyline-blue/40 font-semibold text-skyline-blue",
              day_outside: "text-skyline-muted/50",
              day_disabled:
                "text-skyline-muted/40 cursor-not-allowed hover:bg-transparent hover:text-skyline-muted/40",
              day_hidden: "invisible",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiDateRangeCalendar;
