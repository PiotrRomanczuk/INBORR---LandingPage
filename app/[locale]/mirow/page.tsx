import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import MirowPlaces from "@/components/sections/Mirow/MirowPlaces";
import MirowMapSection from "@/components/sections/Mirow/MirowMapSection";
import MirowHistory from "@/components/sections/Mirow/MirowHistory";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("mirowTitle"),
    description: t("mirowDescription"),
  };
}

const HeroStat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="font-display text-[26px] font-semibold leading-none sm:text-[32px]">
      {value}
    </div>
    <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
      {label}
    </div>
  </div>
);

function MirowContent() {
  const t = useTranslations("mirowPage");

  return (
    <main className="bg-skyline-bg">
      <section className="relative min-h-[480px] md:min-h-[560px]">
        <Image
          src="/warsaw.jpg"
          alt={t("imageAlt")}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,24,40,.35) 0%, rgba(14,24,40,.85) 100%)",
          }}
          aria-hidden
        />
        <div className="relative flex min-h-[480px] flex-col px-6 pb-12 pt-16 text-white md:min-h-[560px] md:px-10 md:pt-20 lg:px-12">
          <div className="mb-5 flex items-center gap-2 text-skyline-gold">
            <span className="skyline-rule" aria-hidden />
            <span className="skyline-eyebrow">{t("heroEyebrow")}</span>
          </div>
          <h1
            className="font-display max-w-[820px] text-[48px] leading-[0.95] tracking-tight sm:text-[64px] lg:text-[80px] xl:text-[88px]"
            style={{ letterSpacing: "-0.035em" }}
          >
            {t("heroTitleLine1")}
            <br />
            <span className="text-skyline-gold">{t("heroTitleLine2")}</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-[16px] leading-relaxed text-white/80">
            {t("heroSubtitle")}
          </p>
          <div className="mt-auto grid grid-cols-2 gap-6 border-t border-white/15 pt-8 md:grid-cols-4">
            <HeroStat value="100 m" label={t("statMetro")} />
            <HeroStat value="600 m" label={t("statBrowary")} />
            <HeroStat value="2 km" label={t("statOldTown")} />
            <HeroStat value="20 min" label={t("statAirport")} />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="skyline-eyebrow mb-4 text-skyline-gold">
              {t("editorialEyebrow")}
            </div>
            <h2
              className="font-display text-[36px] leading-[1] tracking-tight text-skyline-ink sm:text-[44px]"
              style={{ letterSpacing: "-0.03em" }}
            >
              {t("editorialTitleLine1")}
              <br />
              {t("editorialTitleLine2")}
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-[1.7] text-skyline-muted md:col-span-7 md:col-start-6">
            <p className="text-[18px] font-medium text-skyline-ink">
              {t("editorialLead")}
            </p>
            <p>{t("editorialPara1")}</p>
            <p>{t("editorialPara2")}</p>
          </div>
        </div>
      </section>

      <MirowPlaces />
      <MirowMapSection />
      <MirowHistory />

      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-skyline-line bg-white p-8 md:grid-cols-12 md:p-12">
          <div className="md:col-span-7">
            <div className="skyline-eyebrow mb-3 text-skyline-gold">
              {t("ctaEyebrow")}
            </div>
            <h2
              className="font-display text-[32px] leading-[1] tracking-tight text-skyline-ink sm:text-[44px]"
              style={{ letterSpacing: "-0.03em" }}
            >
              {t("ctaTitleLine1")}
              <br />
              <span className="text-skyline-blue">{t("ctaTitleLine2")}</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-3 md:col-span-5 md:justify-end">
            <Link
              href="/apartamenty"
              className="inline-flex items-center gap-2 rounded-md border border-skyline-line bg-white px-5 py-2.5 text-[13px] font-semibold text-skyline-ink transition hover:bg-skyline-blue-soft"
            >
              {t("ctaSeeApartments")}
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-md bg-skyline-blue px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-skyline-blue-deep"
            >
              {t("ctaCheck")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Mirow({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return <MirowContent />;
}
