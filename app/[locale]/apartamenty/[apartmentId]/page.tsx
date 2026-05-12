import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { apartmentsList } from "@/data/apartments";
import { localizeApartment, type Locale } from "@/interfaces/IApartment";
import { routing } from "@/i18n/routing";
import ApartmentPageClient from "./ApartmentPageClient";

export function generateStaticParams() {
  const params: { locale: string; apartmentId: string }[] = [];
  routing.locales.forEach((locale) => {
    apartmentsList.forEach((apt) => {
      params.push({ locale, apartmentId: apt.shortName });
    });
  });
  return params;
}

export async function generateMetadata({
  params: { locale, apartmentId },
}: {
  params: { locale: string; apartmentId: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const apartment = apartmentsList.find((apt) => apt.shortName === apartmentId);

  if (!apartment) {
    return { title: t("apartmentNotFound") };
  }

  const localized = localizeApartment(apartment, locale as Locale);

  return {
    title: t("apartmentMetaTitle", { name: localized.name }),
    description: localized.description.short,
    openGraph: {
      title: t("apartmentMetaTitle", { name: localized.name }),
      description: localized.description.short,
      url: `https://inborr.pl/apartamenty/${localized.shortName}`,
      siteName: "Inborr",
      locale: t("ogLocale"),
      type: "website",
    },
  };
}

export default function Page({
  params: { locale, apartmentId },
}: {
  params: { locale: string; apartmentId: string };
}) {
  setRequestLocale(locale);
  const apartment = apartmentsList.find((apt) => apt.shortName === apartmentId);

  if (!apartment) {
    notFound();
  }

  const localized = localizeApartment(apartment, locale as Locale);
  return <ApartmentPageClient apartment={localized} />;
}
