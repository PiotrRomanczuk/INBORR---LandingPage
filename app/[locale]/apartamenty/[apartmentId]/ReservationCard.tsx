"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Clock } from "lucide-react";
import { ReserveDialog } from "./ReserveDialog";

interface ReservationCardProps {
  priceFrom: number;
  airbnbLink: URL;
  bookingLink: URL;
  bookableLink?: URL;
  checkIn?: Date;
  checkOut?: Date;
  nights: number;
  onClearDates?: () => void;
}

const CLEANING_FEE = 120;
const SERVICE_FEE = 0;

const toISODate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const formatShort = (date: Date, locale: string) =>
  new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "pl-PL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

const withDates = (url: URL, checkIn?: Date, checkOut?: Date): URL => {
  if (!checkIn || !checkOut) return url;
  const clone = new URL(url.toString());
  clone.searchParams.set("check_in", toISODate(checkIn));
  clone.searchParams.set("check_out", toISODate(checkOut));
  clone.searchParams.set("checkin", toISODate(checkIn));
  clone.searchParams.set("checkout", toISODate(checkOut));
  return clone;
};

export function ReservationCard({
  priceFrom,
  airbnbLink,
  bookingLink,
  bookableLink,
  checkIn,
  checkOut,
  nights,
  onClearDates,
}: ReservationCardProps) {
  const t = useTranslations("reservation");
  const locale = useLocale();
  const nightsTotal = priceFrom * nights;
  const grandTotal = nightsTotal + CLEANING_FEE + SERVICE_FEE;
  const hasSelection = Boolean(checkIn && checkOut);

  const airbnbHref = withDates(airbnbLink, checkIn, checkOut).toString();
  const bookingHref = withDates(bookingLink, checkIn, checkOut).toString();
  const bookableHref = bookableLink
    ? withDates(bookableLink, checkIn, checkOut)
    : undefined;

  return (
    <div
      className="sticky top-24 rounded-xl border border-skyline-line bg-white p-6"
      style={{ boxShadow: "0 4px 24px -8px rgba(14,24,40,.1)" }}
    >
      <div className="flex items-baseline justify-between">
        <div>
          <span className="font-display text-[36px] font-semibold leading-none text-skyline-ink">
            {t("from")} {priceFrom}
          </span>
          <span className="ml-1 text-[13px] text-skyline-muted">
            {t("perNight")}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[13px] text-skyline-ink">
          <span className="text-skyline-gold">★</span>
          {t("rating")}
          <span className="text-skyline-muted"> {t("reviewCount")}</span>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-lg border border-skyline-line">
        <div className="grid grid-cols-2">
          <div
            className={`border-r border-skyline-line p-3 ${
              hasSelection ? "bg-skyline-blue-soft" : "bg-skyline-bg"
            }`}
          >
            <div
              className={`text-[10px] font-semibold uppercase tracking-[.16em] ${
                hasSelection ? "text-skyline-blue" : "text-skyline-muted"
              }`}
            >
              {t("arrive")}
            </div>
            <div
              className={`mt-1 text-[13px] font-semibold ${
                hasSelection ? "text-skyline-ink" : "text-skyline-muted"
              }`}
            >
              {checkIn ? formatShort(checkIn, locale) : t("selectInCalendar")}
            </div>
          </div>
          <div className="p-3">
            <div className="text-[10px] uppercase tracking-[.16em] text-skyline-muted">
              {t("depart")}
            </div>
            <div
              className={`mt-1 text-[13px] font-semibold ${
                hasSelection ? "text-skyline-ink" : "text-skyline-muted"
              }`}
            >
              {checkOut ? formatShort(checkOut, locale) : "—"}
            </div>
          </div>
        </div>
        <div className="border-t border-skyline-line p-3">
          <div className="text-[10px] uppercase tracking-[.16em] text-skyline-muted">
            {t("guests")}
          </div>
          <div className="mt-1 flex items-center justify-between text-[13px] font-semibold text-skyline-ink">
            {t("twoAdults")}
            <span className="text-skyline-muted">▾</span>
          </div>
        </div>
      </div>

      {hasSelection && onClearDates && (
        <button
          type="button"
          onClick={onClearDates}
          className="mt-2 text-[11px] font-medium text-skyline-muted underline-offset-2 hover:text-skyline-ink hover:underline"
        >
          {t("clearDates")}
        </button>
      )}

      {!hasSelection && (
        <a
          href="#dostepnosc"
          className="mt-2 inline-block text-[11px] font-medium text-skyline-blue hover:text-skyline-blue-deep"
        >
          {t("selectDate")}
        </a>
      )}

      <ReserveDialog
        className="mt-5 w-full rounded-md border-0 bg-skyline-blue py-3.5 text-[14px] font-semibold text-white hover:bg-skyline-blue-deep"
        label={t("reserveCta", { total: grandTotal })}
        bookingLink={new URL(bookingHref)}
        airbnbLink={new URL(airbnbHref)}
        bookableLink={bookableHref}
      />

      <div className="mt-2 text-center text-[11px] text-skyline-muted">
        {t("noCharge")}
      </div>

      <div className="mt-5 space-y-2 text-[13px]">
        <div className="flex justify-between">
          <span className="text-skyline-muted">
            {t("nightsTotal", { nights, price: priceFrom })}
          </span>
          <span className="text-skyline-ink">{nightsTotal} zł</span>
        </div>
        <div className="flex justify-between">
          <span className="text-skyline-muted">{t("cleaning")}</span>
          <span className="text-skyline-ink">{CLEANING_FEE} zł</span>
        </div>
        <div className="flex justify-between">
          <span className="text-skyline-muted">{t("serviceFee")}</span>
          <span className="text-skyline-ink">{SERVICE_FEE} zł</span>
        </div>
        <div className="mt-3 flex justify-between border-t border-skyline-line pt-3 font-semibold text-skyline-ink">
          <span>{t("total")}</span>
          <span className="font-display text-[16px]">{grandTotal} zł</span>
        </div>
      </div>

      <div className="mt-5 border-t border-skyline-line pt-5 text-[10px] font-semibold uppercase tracking-[.16em] text-skyline-muted">
        {t("orVia")}
      </div>
      <div className="mt-3 flex gap-2">
        <Link
          href={airbnbHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-md border border-skyline-line bg-white py-2.5 text-center text-[12px] font-medium text-skyline-ink transition hover:bg-skyline-blue-soft"
        >
          Airbnb
        </Link>
        <Link
          href={bookingHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-md border border-skyline-line bg-white py-2.5 text-center text-[12px] font-medium text-skyline-ink transition hover:bg-skyline-blue-soft"
        >
          Booking
        </Link>
      </div>

      <div className="mt-5 flex items-start gap-2.5 border-t border-skyline-line pt-5 text-[12px] text-skyline-muted">
        <Clock
          className="mt-0.5 h-4 w-4 flex-shrink-0 text-skyline-blue"
          strokeWidth={1.6}
        />
        <div>
          <div className="font-medium text-skyline-ink">
            {t("freeCancellation")}
          </div>
          {t("freeCancellationDesc")}
        </div>
      </div>
    </div>
  );
}
