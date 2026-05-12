"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { GoogleMaps } from "@/components/GoogleMaps";

type TabKey = "opis" | "wyposazenie" | "lokalizacja" | "faq";

const TABS: { key: TabKey; labelKey: string }[] = [
  { key: "opis", labelKey: "tabDescription" },
  { key: "wyposazenie", labelKey: "tabAmenities" },
  { key: "lokalizacja", labelKey: "tabLocation" },
  { key: "faq", labelKey: "tabFaq" },
];

interface ApartmentTabsProps {
  longDescription: string[];
  faq: { value: string; question: string; answer: string }[];
  lat: number;
  lng: number;
}

export function ApartmentTabs({
  longDescription,
  faq,
  lat,
  lng,
}: ApartmentTabsProps) {
  const t = useTranslations("apartmentPage");
  const [tab, setTab] = useState<TabKey>("opis");
  const [openFaq, setOpenFaq] = useState<number>(0);

  const amenities = t.raw("amenities") as string[];
  const nearby = t.raw("nearby") as { name: string; distance: string }[];

  return (
    <div>
      <div
        role="tablist"
        aria-label={t("tabsAria")}
        className="mt-10 flex items-center gap-7 overflow-x-auto border-b border-skyline-line text-[14px] font-semibold"
      >
        {TABS.map(({ key, labelKey }) => {
          const active = tab === key;
          return (
            <button
              key={key}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() => setTab(key)}
              className={`-mb-px whitespace-nowrap border-b-2 pb-3 pt-1 transition-colors ${
                active
                  ? "border-skyline-blue text-skyline-ink"
                  : "border-transparent text-skyline-muted hover:text-skyline-ink"
              }`}
            >
              {t(labelKey as Parameters<typeof t>[0])}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {tab === "opis" && (
          <div className="space-y-4 text-[15px] leading-relaxed">
            {longDescription.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0 ? "text-skyline-ink" : "text-skyline-muted"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {tab === "wyposazenie" && (
          <ul className="grid grid-cols-1 gap-3 text-[14px] sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <li
                key={a}
                className="flex items-center gap-3 rounded-lg border border-skyline-line bg-white px-4 py-3 text-skyline-ink"
              >
                <Check
                  className="h-3.5 w-3.5 flex-shrink-0 text-skyline-blue"
                  strokeWidth={2.2}
                />
                {a}
              </li>
            ))}
          </ul>
        )}

        {tab === "lokalizacja" && (
          <div>
            <div className="h-[280px] overflow-hidden rounded-xl border border-skyline-line bg-skyline-blue-soft">
              <GoogleMaps lat={lat} lng={lng} />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 text-[13px] sm:grid-cols-2">
              {nearby.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between rounded-lg border border-skyline-line bg-white px-4 py-3"
                >
                  <span className="text-skyline-ink">{p.name}</span>
                  <span className="text-skyline-muted">{p.distance}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "faq" && (
          <div className="border-t border-skyline-line">
            {faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={item.value}
                  className="border-b border-skyline-line"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[15px] font-semibold text-skyline-ink">
                      {item.question}
                    </span>
                    <span className="font-display text-[20px] font-bold leading-none text-skyline-blue">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-5 pr-12 text-[14px] leading-relaxed text-skyline-muted">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
