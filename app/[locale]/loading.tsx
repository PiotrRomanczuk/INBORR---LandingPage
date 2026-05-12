import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("loading");
  return (
    <div className="fixed inset-0 z-[10000] flex flex-1 items-center justify-center bg-background">
      <Image alt={t("logoAlt")} src="/logo.png" width={460} height={200} loading="lazy" />
    </div>
  );
}
