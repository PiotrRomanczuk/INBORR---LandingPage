import { useTranslations } from "next-intl";

export const Title = () => {
  const t = useTranslations("apartmentsList");

  return (
    <section className="bg-skyline-bg px-6 pb-10 pt-16 md:px-10 md:pt-20 lg:px-12">
      <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-8">
          <div className="skyline-eyebrow mb-4 text-skyline-gold">
            {t("titleEyebrow")}
          </div>
          <h1
            className="font-display text-[44px] leading-[0.95] tracking-tight text-skyline-ink sm:text-[56px] lg:text-[72px]"
            style={{ letterSpacing: "-0.035em" }}
          >
            {t("titleLine1")}
            <br />
            {t("titleLine2")}{" "}
            <span className="text-skyline-blue">{t("titleAccent")}</span>.
          </h1>
        </div>
        <p className="text-[14px] leading-relaxed text-skyline-muted md:col-span-4">
          {t("titleSubtitle")}
        </p>
      </div>
    </section>
  );
};
