import { useTranslations } from "next-intl";

const SEO_Content = () => {
  const t = useTranslations("seo");

  return (
    <div className="container mx-auto max-w-4xl px-3 sm:px-4 md:px-6 py-16 md:py-24">
      <h2 className="mb-8 text-center text-4xl font-bold text-foreground">
        {t("title")}
      </h2>

      <section className="space-y-12">
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t("intro")}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-semibold text-foreground">
            {t("whyTitle")}
          </h3>
          <ul className="list-disc pl-5 space-y-4">
            <li className="text-muted-foreground">
              <strong>{t("why1Strong")}</strong>
              {t("why1Rest")}
            </li>
            <li className="text-muted-foreground">
              <strong>{t("why2Strong")}</strong>
              {t("why2Rest")}
            </li>
            <li className="text-muted-foreground">
              <strong>{t("why3Strong")}</strong>
              {t("why3Rest")}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-semibold text-foreground">
            {t("exploreTitle")}
          </h3>
          <p className="leading-relaxed text-muted-foreground">{t("explore")}</p>
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-semibold text-foreground">
            {t("yourPlaceTitle")}
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            {t("yourPlace")}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-semibold text-foreground">
            {t("contactTitle")}
          </h3>
          <p className="leading-relaxed text-muted-foreground">{t("contact")}</p>
        </div>
      </section>
    </div>
  );
};

export default SEO_Content;
