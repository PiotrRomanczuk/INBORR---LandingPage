"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { TESTIMONIALS_META } from "./testimonials_data";
import { Testimonial } from "./Testimonial";

const SUBSCORES: { key: string; value: string }[] = [
  { key: "subscoreCleanliness", value: "5.0" },
  { key: "subscoreLocation", value: "4.9" },
  { key: "subscoreComfort", value: "4.9" },
  { key: "subscoreCommunication", value: "5.0" },
];

export function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-skyline-bg px-6 py-16 md:px-10 md:py-24 lg:px-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <div className="skyline-eyebrow mb-3 text-skyline-gold">
            {t("eyebrow")}
          </div>
          <h2
            className="font-display text-[36px] leading-[1] tracking-tight text-skyline-ink sm:text-[44px] lg:text-[52px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>

          <div className="mt-10 flow-root">
            <div className="-mt-8 columns-1 sm:-mx-4 sm:columns-2">
              {TESTIMONIALS_META.map((testimonial) => (
                <Testimonial
                  key={testimonial.author.handle}
                  testimonial={testimonial}
                  body={items[testimonial.bodyKey]}
                />
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-4 md:col-span-4">
          <div className="flex items-center gap-6 rounded-xl bg-skyline-blue-deep p-6 text-white">
            <div>
              <div className="font-display text-[40px] font-semibold leading-none sm:text-[44px]">
                4.9
                <span className="text-[16px] text-white/60">/5</span>
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                {t("rating")}
              </div>
            </div>
            <div className="h-12 w-px bg-white/15" aria-hidden />
            <div className="text-[12px]">
              <div className="text-white/85">{t("totalReviews")}</div>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="rounded bg-skyline-gold px-2 py-0.5 text-[10px] font-semibold text-skyline-ink">
                  SUPERHOST
                </span>
                <span className="text-white/70">9.6 Booking</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-skyline-line bg-skyline-paper p-6">
            <div className="skyline-eyebrow mb-4 text-skyline-muted">
              {t("guestsValue")}
            </div>
            <ul className="space-y-3">
              {SUBSCORES.map(({ key, value }) => (
                <li key={key}>
                  <div className="mb-1 flex items-baseline justify-between">
                    <span className="text-[13px] text-skyline-ink">
                      {t(key)}
                    </span>
                    <span className="font-display text-[15px] font-semibold text-skyline-blue">
                      {value}
                    </span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-skyline-blue-soft">
                    <div
                      className="h-full rounded-full bg-skyline-blue"
                      style={{ width: `${(parseFloat(value) / 5) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/apartamenty"
            className="group block rounded-xl border border-skyline-line bg-skyline-paper p-6 transition hover:border-skyline-blue hover:shadow-sm"
          >
            <div className="skyline-eyebrow mb-2 text-skyline-gold">
              {t("ctaEyebrow")}
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-display text-[20px] leading-tight tracking-tight text-skyline-ink">
                {t("ctaTitle")}
              </span>
              <span
                className="font-display text-[20px] text-skyline-blue transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </div>
          </Link>
        </aside>
      </div>
    </section>
  );
}
