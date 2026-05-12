import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { apartmentsList } from "@/data/apartments";
import { localizeApartment, type Locale } from "@/interfaces/IApartment";
import { CardApartment } from "@/components/sections/Apartments/CardApartment";

const districtKeyFor = (location: string): "chlodna" | "pereca" | "default" => {
  if (location.includes("Chłodna")) return "chlodna";
  if (location.includes("Pereca")) return "pereca";
  return "default";
};

export const Apartments = async () => {
  const t = await getTranslations("apartmentsHome");
  const locale = (await getLocale()) as Locale;
  const apartments = apartmentsList.map((apt) => localizeApartment(apt, locale));

  return (
    <section className="px-6 pb-16 md:px-10 md:pb-20 lg:px-12">
      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="skyline-eyebrow mb-3 text-skyline-gold">
            {t("eyebrow")}
          </div>
          <h2
            className="font-display text-[36px] leading-[1] tracking-tight text-skyline-ink sm:text-[44px] lg:text-[52px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            {t("title")}
          </h2>
        </div>
        <Link
          href="/apartamenty"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-skyline-blue"
        >
          {t("allLink")}
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {apartments.map((apartment) => {
          const districtKey = districtKeyFor(apartment.location);
          return (
            <CardApartment
              key={apartment.apartmentId}
              title={apartment.name}
              district={t(
                districtKey === "chlodna"
                  ? "districtChlodna"
                  : districtKey === "pereca"
                  ? "districtPereca"
                  : "districtDefault",
              )}
              description={apartment.description.short}
              imageSrc={apartment.mainPic}
              bedroomsNb={apartment.bedrooms}
              area={apartment.area}
              floor={apartment.floor}
              sleeps={apartment.bedrooms * 2 + 2}
              priceFrom={apartment.priceFrom}
              hrefLink={apartment.hrefLink}
              galleryCount={apartment.pics?.length ?? 18}
            />
          );
        })}
      </div>
    </section>
  );
};
