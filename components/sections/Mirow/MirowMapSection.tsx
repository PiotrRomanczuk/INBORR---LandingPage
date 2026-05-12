"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { apartmentsList } from "@/data/apartments";
import { localizeApartment, type Locale } from "@/interfaces/IApartment";

type Selected = "both" | string;

export default function MirowMapSection() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const t = useTranslations("mirowMapSection");
  const locale = useLocale() as Locale;
  const [selected, setSelected] = useState<Selected>("both");

  const apartments = useMemo(
    () => apartmentsList.map((a) => localizeApartment(a, locale)),
    [locale],
  );

  const markers = useMemo(
    () =>
      apartments.map((a, i) => ({
        index: i + 1,
        shortName: a.shortName,
        name: a.name,
        lat: a.lattitude,
        lng: a.longitude,
      })),
    [apartments],
  );

  const midpoint = {
    lat: (markers[0].lat + markers[1].lat) / 2,
    lng: (markers[0].lng + markers[1].lng) / 2,
  };

  const districtFor = (shortName: string): string => {
    if (shortName === "pereca") return t("districtPereca");
    if (shortName === "chlodna") return t("districtChlodna");
    return "";
  };

  const metroFor = (shortName: string): string => {
    if (shortName === "pereca") return t("metroPereca");
    if (shortName === "chlodna") return t("metroChlodna");
    return "";
  };

  const viewFor = (sel: Selected) => {
    if (sel === "both") {
      return { lat: midpoint.lat, lng: midpoint.lng, zoom: 15 };
    }
    const m = markers.find((x) => x.shortName === sel) ?? markers[0];
    return { lat: m.lat, lng: m.lng, zoom: 17 };
  };

  const buildEmbedUrl = (sel: Selected) => {
    const { lat, lng, zoom } = viewFor(sel);
    if (sel === "both") {
      return `https://maps.google.com/maps?ll=${lat},${lng}&z=${zoom}&output=embed`;
    }
    return `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  };

  const buildDirectionsUrl = (sel: Selected) => {
    const { lat, lng } = viewFor(sel);
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  };

  const view = viewFor(selected);
  const embedUrl = buildEmbedUrl(selected);
  const directionsUrl = buildDirectionsUrl(selected);

  return (
    <section className="px-6 py-16 md:px-10 md:py-20 lg:px-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="skyline-eyebrow mb-3">{t("eyebrow")}</div>
          <h2 className="font-display text-[32px] leading-[1] tracking-tight text-skyline-ink sm:text-[40px]">
            {t("title")}
          </h2>
          <p className="mt-5 text-[14px] leading-relaxed text-skyline-muted">
            {t("intro")}
          </p>

          <div className="mt-6 inline-flex rounded-full border border-skyline-line bg-white p-1 text-[12px]">
            <button
              type="button"
              onClick={() => setSelected("both")}
              aria-pressed={selected === "both"}
              className={`rounded-full px-3.5 py-1.5 font-semibold transition ${
                selected === "both"
                  ? "bg-skyline-ink text-white"
                  : "text-skyline-muted hover:text-skyline-ink"
              }`}
            >
              {t("both")}
            </button>
            {apartments.map((a) => (
              <button
                key={`pill-${a.apartmentId}`}
                type="button"
                onClick={() => setSelected(a.shortName)}
                aria-pressed={selected === a.shortName}
                className={`rounded-full px-3.5 py-1.5 font-semibold capitalize transition ${
                  selected === a.shortName
                    ? "bg-skyline-ink text-white"
                    : "text-skyline-muted hover:text-skyline-ink"
                }`}
              >
                {a.shortName}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            {apartments.map((a, i) => {
              const isActive = selected === a.shortName;
              return (
                <button
                  key={a.apartmentId}
                  type="button"
                  onClick={() => setSelected(a.shortName)}
                  aria-pressed={isActive}
                  className={`flex w-full items-center gap-4 rounded-lg border p-4 text-left transition ${
                    isActive
                      ? "border-skyline-blue bg-skyline-blue-soft shadow-sm"
                      : "border-skyline-line bg-skyline-paper hover:border-skyline-blue/40 hover:bg-skyline-blue-soft/40"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full font-display text-[15px] font-bold transition ${
                      isActive
                        ? "bg-skyline-blue text-white"
                        : "border-[1.5px] border-skyline-ink bg-white text-skyline-ink"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[13px] font-semibold capitalize text-skyline-ink">
                      {a.shortName}
                    </span>
                    <span className="block text-[11px] text-skyline-muted">
                      {districtFor(a.shortName)}
                    </span>
                  </span>
                  <span className="text-[12px] text-skyline-muted">
                    {metroFor(a.shortName)}
                  </span>
                </button>
              );
            })}
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-skyline-blue hover:text-skyline-blue-deep"
          >
            {selected === "both"
              ? t("openBothInMaps")
              : t("openOneInMaps", { name: selected })}
            <span aria-hidden>→</span>
          </a>
        </div>

        <div
          className="relative overflow-hidden rounded-xl border border-skyline-line bg-skyline-blue-soft md:col-span-8"
          style={{ height: 520 }}
        >
          {apiKey ? (
            <APIProvider apiKey={apiKey}>
              <Map
                key={selected}
                style={{ width: "100%", height: "100%" }}
                defaultCenter={{ lat: view.lat, lng: view.lng }}
                defaultZoom={view.zoom}
                gestureHandling="cooperative"
                disableDefaultUI
                mapId="inborr-mirow-section-map"
              >
                {markers.map((m) => (
                  <AdvancedMarker
                    key={m.shortName}
                    position={{ lat: m.lat, lng: m.lng }}
                    title={m.name}
                  >
                    <Pin
                      background={
                        selected === m.shortName ? "#283E73" : "#3A57A1"
                      }
                      borderColor="#283E73"
                      glyphColor="#ffffff"
                      scale={selected === m.shortName ? 1.2 : 1}
                    />
                  </AdvancedMarker>
                ))}
              </Map>
            </APIProvider>
          ) : (
            <iframe
              key={selected}
              title={t("iframeTitle")}
              src={embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          )}
        </div>
      </div>
    </section>
  );
}
