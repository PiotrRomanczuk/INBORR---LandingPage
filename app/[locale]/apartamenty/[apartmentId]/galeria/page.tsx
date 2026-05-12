import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { apartmentsList } from "@/data/apartments";
import { localizeApartment, type Locale } from "@/interfaces/IApartment";
import { routing } from "@/i18n/routing";
import GalleryView from "./GalleryView";

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
    return { title: t("galleryNotFound") };
  }

  const localized = localizeApartment(apartment, locale as Locale);
  const title = t("galleryMetaTitle", { name: localized.name });

  return {
    title,
    description: t("galleryMetaDescription", {
      name: localized.name,
      count: localized.pics.length,
    }),
    openGraph: {
      title,
      description: localized.description.short,
      url: `https://inborr.pl/apartamenty/${localized.shortName}/galeria`,
      siteName: "Inborr",
      locale: t("ogLocale"),
      type: "website",
      images: [localized.mainPic],
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
  return <GalleryView apartment={localized} />;
}
