"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import type { ILocalizedApartment } from "@/interfaces/IApartment";
import CalendarComponent from "./calendar/Calendar";
import { SkylineGallery } from "./SkylineGallery";
import { TitleRow } from "./TitleRow";
import { SpecsStrip } from "./SpecsStrip";
import { ApartmentTabs } from "./ApartmentTabs";
import { ReservationCard } from "./ReservationCard";

const DEFAULT_NIGHTS = 3;

const addDays = (date: Date, days: number): Date => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

export default function ApartmentPageClient({
  apartment,
}: {
  apartment: ILocalizedApartment;
}) {
  const t = useTranslations("apartmentPage");
  const sleeps = apartment.bedrooms * 2 + 2;

  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const checkOut = checkIn ? addDays(checkIn, DEFAULT_NIGHTS) : undefined;

  return (
    <div className="bg-skyline-bg text-skyline-ink">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12">
        <nav
          aria-label={t("breadcrumbNav")}
          className="flex items-center gap-2 pt-5 text-[12px] text-skyline-muted"
        >
          <Link href="/" className="transition hover:text-skyline-ink">
            {t("home")}
          </Link>
          <span>›</span>
          <Link
            href="/apartamenty"
            className="transition hover:text-skyline-ink"
          >
            {t("apartments")}
          </Link>
          <span>›</span>
          <span className="text-skyline-ink">{apartment.name}</span>
        </nav>

        <TitleRow
          name={apartment.name}
          location={apartment.location}
          shortName={apartment.shortName}
        />

        <section aria-label={t("galleryAria")}>
          <SkylineGallery
            mainPic={apartment.mainPic}
            apartmentName={apartment.name}
            apartmentShortName={apartment.shortName}
            pics={apartment.pics}
          />
        </section>

        <section className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SpecsStrip
              area={apartment.area}
              bedrooms={apartment.bedrooms}
              floor={apartment.floor}
              sleeps={sleeps}
            />
            <ApartmentTabs
              longDescription={apartment.description.long}
              faq={apartment.accordionData}
              lat={apartment.lattitude}
              lng={apartment.longitude}
            />
          </div>
          <aside className="lg:col-span-5">
            <ReservationCard
              priceFrom={apartment.priceFrom}
              airbnbLink={apartment.reservedLinks.airbnbLink}
              bookingLink={apartment.reservedLinks.bookingLink}
              bookableLink={apartment.reservedLinks.bookableLink}
              checkIn={checkIn}
              checkOut={checkOut}
              nights={DEFAULT_NIGHTS}
              onClearDates={() => setCheckIn(undefined)}
            />
          </aside>
        </section>

        <section id="dostepnosc" className="pb-20">
          <div className="skyline-eyebrow">{t("availabilityEyebrow")}</div>
          <div className="mt-3 flex items-center gap-3">
            <h2
              className="font-display text-[32px] font-semibold leading-tight text-skyline-ink sm:text-[40px]"
              style={{ letterSpacing: "-0.03em" }}
            >
              {t("availabilityTitle")}
            </h2>
          </div>
          <span className="skyline-rule mt-4" />
          <div className="mt-8">
            <CalendarComponent
              apartmentName={apartment.shortName}
              selectedCheckIn={checkIn}
              onSelectCheckIn={setCheckIn}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
