import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ApartmentsList } from "@/components/sections/Apartments/ApartmentsList";
import { MirowMap } from "@/components/sections/Apartments/MirowMap";
import { Title } from "./Title";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("apartmentsTitle"),
    description: t("apartmentsDescription"),
  };
}

export default function ApartmentsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <main className="bg-skyline-bg">
      <Title />
      <ApartmentsList />
      <MirowMap />
    </main>
  );
}
