import { useTranslations } from "next-intl";

interface SearchField {
  labelKey: "searchArrive" | "searchDepart" | "searchGuests" | "searchLocation";
  valueKey: "searchArriveValue" | "searchDepartValue" | "searchGuestsValue" | "searchLocationValue";
  active?: boolean;
}

const FIELDS: { labelKey: string; valueLiteral?: string; valueKey?: string; active?: boolean }[] = [
  { labelKey: "searchArrive", valueLiteral: "14 maj", active: true },
  { labelKey: "searchDepart", valueLiteral: "17 maj" },
  { labelKey: "searchGuests", valueLiteral: "2 / 2" },
  { labelKey: "searchLocation", valueKey: "searchLocationValue" },
];

export const ApartmentsSearchBar = () => {
  const t = useTranslations("apartmentsList");
  const tHero = useTranslations("hero");

  const valueFor = (f: (typeof FIELDS)[number]) => {
    if (f.valueKey === "searchLocationValue") return t("searchLocationValue");
    if (f.labelKey === "searchArrive") return tHero("arriveSample");
    if (f.labelKey === "searchDepart") return tHero("departSample");
    if (f.labelKey === "searchGuests") return tHero("guestsSample");
    return f.valueLiteral ?? "";
  };

  return (
    <section className="px-6 pb-6 md:px-10 lg:px-12">
      <div className="flex flex-col items-stretch gap-1 rounded-xl border border-skyline-line bg-white p-2 md:flex-row">
        {FIELDS.map((field) => (
          <div
            key={field.labelKey}
            className={`flex-1 rounded-lg px-4 py-3 ${
              field.active ? "bg-skyline-blue-soft" : ""
            }`}
          >
            <div
              className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                field.active ? "text-skyline-blue" : "text-skyline-muted"
              }`}
            >
              {t(field.labelKey as Parameters<typeof t>[0])}
            </div>
            <div className="mt-1 text-[14px] font-medium text-skyline-ink">
              {valueFor(field)}
            </div>
          </div>
        ))}
        <button
          type="button"
          className="w-full rounded-lg bg-skyline-blue px-7 py-3 text-[13px] font-semibold text-white transition hover:bg-skyline-blue-deep md:w-auto"
        >
          {t("searchUpdate")}
        </button>
      </div>
    </section>
  );
};
