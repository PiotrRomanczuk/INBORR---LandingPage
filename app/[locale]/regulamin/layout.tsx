import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("regulaminTitle"),
    description: t("regulaminDescription"),
  };
}

export default function RegulaminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
