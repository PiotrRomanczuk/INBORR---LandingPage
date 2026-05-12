import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import type { ILocalizedApartment } from "@/interfaces/IApartment";
import { CATEGORIES } from "./categories";
import GalleryHeader from "./GalleryHeader";
import GallerySection from "./GallerySection";
import GalleryTabs from "./GalleryTabs";

export default function GalleryView({
  apartment,
}: {
  apartment: ILocalizedApartment;
}) {
  const t = useTranslations("galleryView");
  const sections = CATEGORIES.map((meta) => ({
    meta,
    photos: apartment.pics.filter((p) => p.category === meta.key),
  })).filter((s) => s.photos.length > 0);

  const total = apartment.pics.length;

  return (
    <div className="min-h-screen bg-skyline-bg text-skyline-ink">
      <GalleryHeader apartment={apartment} />
      <GalleryTabs
        sections={sections.map(({ meta, photos }) => ({
          meta,
          count: photos.length,
        }))}
      />

      <main className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12">
        <div className="pt-10 sm:pt-14">
          <nav
            aria-label={t("breadcrumbNav")}
            className="flex items-center gap-2 text-[12px] text-skyline-muted"
          >
            <Link href="/" className="transition hover:text-skyline-ink">
              {t("home")}
            </Link>
            <span aria-hidden="true">›</span>
            <Link
              href="/apartamenty"
              className="transition hover:text-skyline-ink"
            >
              {t("apartments")}
            </Link>
            <span aria-hidden="true">›</span>
            <Link
              href={`/apartamenty/${apartment.shortName}`}
              className="transition hover:text-skyline-ink"
            >
              {apartment.name}
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-skyline-ink">{t("eyebrow")}</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="skyline-eyebrow text-skyline-muted">
                {t("header", { count: total, sections: sections.length })}
              </div>
              <h1
                className="mt-3 font-display text-[36px] font-semibold leading-tight text-skyline-ink sm:text-[48px]"
                style={{ letterSpacing: "-0.03em" }}
              >
                {t("title")}
              </h1>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-skyline-muted">
                {apartment.description.short}
              </p>
            </div>
          </div>
        </div>

        {sections.map((section, idx) => (
          <GallerySection
            key={section.meta.key}
            meta={section.meta}
            photos={section.photos}
            index={idx}
          />
        ))}

        <div className="border-t border-skyline-line py-12 text-center">
          <Link
            href={`/apartamenty/${apartment.shortName}`}
            className="inline-flex items-center gap-2 rounded-md bg-skyline-ink px-6 py-3 text-[14px] font-medium text-white transition hover:bg-skyline-blue-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skyline-gold"
          >
            <span aria-hidden="true">←</span>
            {t("back")}
          </Link>
        </div>
      </main>
    </div>
  );
}
