import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import type { ILocalizedApartment } from "@/interfaces/IApartment";

export default function GalleryHeader({
  apartment,
}: {
  apartment: ILocalizedApartment;
}) {
  const t = useTranslations("galleryView");
  return (
    <header className="sticky top-0 z-30 border-b border-skyline-line bg-skyline-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-12">
        <Link
          href={`/apartamenty/${apartment.shortName}`}
          className="group inline-flex items-center gap-2 text-[13px] font-medium text-skyline-ink transition hover:text-skyline-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skyline-blue rounded-md"
          aria-label={t("backToApartment", { name: apartment.name })}
        >
          <span
            aria-hidden="true"
            className="transition group-hover:-translate-x-0.5"
          >
            ←
          </span>
          <span className="hidden sm:inline">{t("back")}</span>
          <span className="sm:hidden">{t("backShort")}</span>
        </Link>

        <div className="min-w-0 flex-1 text-center">
          <div className="skyline-eyebrow text-skyline-muted">
            {t("eyebrow")}
          </div>
          <div className="truncate font-display text-[15px] font-semibold text-skyline-ink sm:text-[17px]">
            {apartment.name}
          </div>
        </div>

        <a
          href={apartment.reservedLinks.bookableLink?.toString() ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-md bg-skyline-ink px-4 py-2 text-[13px] font-medium text-white transition hover:bg-skyline-blue-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skyline-gold sm:inline-block"
        >
          {t("reserve")}
        </a>
      </div>
    </header>
  );
}
