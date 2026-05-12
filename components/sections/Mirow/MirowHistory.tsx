import { useTranslations } from "next-intl";

type HistoryEntry = {
  year: string;
  title: string;
  description: string;
};

export default function MirowHistory() {
  const t = useTranslations("mirowHistory");
  const entries = t.raw("entries") as HistoryEntry[];

  return (
    <section className="bg-skyline-blue-deep px-6 md:px-10 lg:px-12 py-16 md:py-20 text-white">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="skyline-eyebrow mb-4">{t("eyebrow")}</div>
          <h2 className="font-display text-[36px] md:text-[52px] leading-[1] tracking-tight">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>
        </div>
        <ol className="md:col-span-7 space-y-8">
          {entries.map((entry, i) => {
            const isLast = i === entries.length - 1;
            return (
              <li
                key={entry.year}
                className={
                  isLast
                    ? "flex gap-6 pb-2"
                    : "flex gap-6 border-b border-white/10 pb-8"
                }
              >
                <div
                  className="font-display text-[36px] md:text-[44px] font-semibold leading-none text-skyline-gold"
                  style={{ minWidth: 100 }}
                >
                  {entry.year}
                </div>
                <div>
                  <h3 className="font-display text-[20px] md:text-[22px] font-semibold">
                    {entry.title}
                  </h3>
                  <p className="mt-2 max-w-[460px] text-[14px] leading-relaxed text-white/70">
                    {entry.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
