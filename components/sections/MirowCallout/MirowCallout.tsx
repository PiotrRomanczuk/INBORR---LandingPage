import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="font-display text-[24px] leading-none text-white sm:text-[28px]">
      {value}
    </div>
    <div className="mt-1 text-[11px] text-white/60">{label}</div>
  </div>
);

export const MirowCallout = () => {
  const t = useTranslations("mirowCallout");

  return (
    <section className="px-6 pb-24 md:px-10 lg:px-12">
      <div className="grid overflow-hidden rounded-2xl bg-skyline-blue-deep md:grid-cols-12">
        <div className="flex flex-col justify-center p-8 text-white md:col-span-7 md:p-12">
          <div className="skyline-eyebrow mb-4 text-skyline-gold">
            {t("eyebrow")}
          </div>
          <h2
            className="font-display text-[36px] leading-[1] tracking-tight sm:text-[44px] lg:text-[56px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>
          <p className="mt-6 max-w-[440px] text-[15px] leading-relaxed text-white/75">
            {t("intro")}
          </p>
          <div className="mt-8">
            <Link
              href="/mirow"
              className="inline-flex items-center gap-2 rounded-md bg-skyline-gold px-5 py-2.5 text-[13px] font-semibold text-skyline-ink transition hover:opacity-90"
            >
              {t("cta")}
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
            <Stat value="100m" label={t("stat1Label")} />
            <Stat value="5 min" label={t("stat2Label")} />
            <Stat value="15 min" label={t("stat3Label")} />
          </div>
        </div>

        <div className="relative min-h-[280px] md:col-span-5">
          <Image
            src="/warsaw.jpg"
            alt={t("imageAlt")}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
