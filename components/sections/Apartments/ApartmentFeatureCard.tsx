import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Maximize,
  BedDouble,
  ArrowUp10,
  Users,
  MapPin,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import type { ILocalizedApartment } from "@/interfaces/IApartment";

interface ApartmentFeatureCardProps {
  apartment: ILocalizedApartment;
}

interface SpecProps {
  label: string;
  value: string | number;
  Icon: LucideIcon;
}

const Spec = ({ label, value, Icon }: SpecProps) => (
  <div className="rounded-lg border border-skyline-line bg-white p-3">
    <div className="flex items-center gap-1.5 text-skyline-muted">
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
        {label}
      </span>
    </div>
    <div className="mt-1.5 font-display text-[18px] font-semibold leading-none text-skyline-ink">
      {value}
    </div>
  </div>
);

const metroDistanceFor = (shortName: string): string => {
  if (shortName === "pereca") return "100 m";
  if (shortName === "chlodna") return "800 m";
  return "—";
};

export const ApartmentFeatureCard = ({ apartment }: ApartmentFeatureCardProps) => {
  const t = useTranslations("apartmentsList");
  const tPage = useTranslations("apartmentPage");
  const sleeps = apartment.bedrooms * 2 + 2;
  const metro = metroDistanceFor(apartment.shortName);
  const amenities = [
    t("amenityWifi"),
    t("amenityAc"),
    t("amenityKitchenette"),
    t("amenitySmartLock"),
    t("amenityTv"),
    t("amenityMetro", { distance: metro }),
  ];

  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-xl border border-skyline-line bg-white md:grid-cols-12">
      <div className="relative min-h-[260px] md:col-span-5 md:min-h-[340px]">
        <Image
          src={apartment.mainPic}
          alt={apartment.name}
          fill
          sizes="(max-width: 768px) 100vw, 42vw"
          className="object-cover"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-skyline-blue">
            {t("available")}
          </span>
          <span className="rounded-md bg-skyline-gold px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-skyline-ink">
            {t("superhost")}
          </span>
        </div>
        <div
          className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] font-medium text-white"
          style={{
            backgroundColor: "rgba(14,24,40,0.7)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Eye className="h-3 w-3" aria-hidden="true" />
          {t("photosCount", { count: apartment.pics.length })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6 md:col-span-7 md:p-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-skyline-muted">
            <MapPin className="h-3 w-3" aria-hidden="true" />
            {apartment.location}
          </div>
          <h2 className="mt-2 font-display text-[28px] font-semibold leading-tight tracking-tight text-skyline-ink lg:text-[32px]">
            {apartment.name}
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-skyline-muted">
            {apartment.description.short}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Spec label={tPage("specsArea")} value={`${apartment.area} m²`} Icon={Maximize} />
            <Spec label={tPage("specsBedrooms")} value={apartment.bedrooms} Icon={BedDouble} />
            <Spec label={tPage("specsFloor")} value={apartment.floor} Icon={ArrowUp10} />
            <Spec label={tPage("specsGuests")} value={sleeps} Icon={Users} />
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {amenities.map((chip) => (
              <span
                key={chip}
                className="rounded-md bg-skyline-blue-soft px-2.5 py-1 text-[11px] text-skyline-blue"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-stretch justify-between gap-6 lg:col-span-4 lg:items-end lg:border-l lg:border-skyline-line lg:pl-6">
          <div className="lg:text-right">
            <div className="flex items-center gap-1 text-[12px] font-semibold lg:justify-end">
              <span className="text-skyline-gold">★</span> 4.9
              <span className="font-normal text-skyline-muted">
                · {t("reviews")}
              </span>
            </div>
            <div className="mt-4 text-[10px] uppercase tracking-[0.16em] text-skyline-muted">
              {t("from")}
            </div>
            <div className="mt-1 font-display text-[36px] font-semibold leading-none text-skyline-ink">
              {apartment.priceFrom}{" "}
              <span className="text-[14px] text-skyline-muted">
                {t("perNight")}
              </span>
            </div>
            <div className="mt-1 text-[11px] text-skyline-muted">
              {t("estimate", { total: apartment.priceFrom * 3 + 120 })}
            </div>
          </div>
          <div className="w-full space-y-2">
            <Link
              href={apartment.hrefLink}
              className="block w-full rounded-lg bg-skyline-blue px-4 py-2.5 text-center text-[13px] font-semibold text-white transition hover:bg-skyline-blue-deep"
            >
              {t("reserve")}
            </Link>
            <Link
              href={apartment.hrefLink}
              className="block w-full rounded-lg border border-skyline-line bg-white px-4 py-2.5 text-center text-[13px] font-semibold text-skyline-ink transition hover:bg-skyline-bg"
            >
              {t("details")}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
