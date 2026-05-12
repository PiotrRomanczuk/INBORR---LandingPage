import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { apartmentsList } from "@/data/apartments";

const ApartNotFound = () => {
  const t = useTranslations("apartNotFound");
  return (
    <>
      <div>{t("line1")}</div>
      <div>{t("line2")}</div>
      <ul>
        {apartmentsList.map((apartment) => (
          <li key={apartment.shortName}>
            <Link href={`/apartamenty/${apartment.shortName}`}>
              {apartment.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ApartNotFound;
