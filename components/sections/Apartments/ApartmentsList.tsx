import { getLocale, getTranslations } from "next-intl/server";
import { apartmentsList } from "@/data/apartments";
import { localizeApartment, type Locale } from "@/interfaces/IApartment";
import { ApartmentsSearchBar } from "./ApartmentsSearchBar";
import { ApartmentFeatureCard } from "./ApartmentFeatureCard";

const FILTER_CHIPS = [
  "filterAll",
  "filterUpTo2",
  "filterView",
  "filterKitchenette",
  "filterSmartLock",
] as const;

export const ApartmentsList = async () => {
  const t = await getTranslations("apartmentsList");
  const locale = (await getLocale()) as Locale;
  const apartments = apartmentsList.map((apt) => localizeApartment(apt, locale));

  return (
    <>
      <ApartmentsSearchBar />

      <section className="px-6 pb-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-3 text-[12px] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_CHIPS.map((chipKey, i) => (
              <button
                key={chipKey}
                type="button"
                className={
                  i === 0
                    ? "rounded-full bg-skyline-ink px-3.5 py-1.5 text-[12px] text-white"
                    : "rounded-full border border-skyline-line bg-white px-3.5 py-1.5 text-[12px] text-skyline-ink hover:bg-skyline-bg"
                }
              >
                {t(chipKey)}
              </button>
            ))}
          </div>
          <div className="text-skyline-muted">
            {t("summary", { count: apartments.length })}
          </div>
        </div>
      </section>

      <section className="space-y-6 px-6 pb-16 md:px-10 lg:px-12">
        {apartments.map((apartment) => (
          <ApartmentFeatureCard key={apartment.apartmentId} apartment={apartment} />
        ))}
      </section>
    </>
  );
};
