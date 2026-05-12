import { useTranslations } from "next-intl";
import PlaceCard from "./PlaceCard";

// Imagery sourced from Wikimedia Commons (free licenses). See /public/mirow/CREDITS.md
const IMAGES = {
  halaMirowska: "/mirow/hala-mirowska.jpg",
  halaGwardii: "/mirow/hala-gwardii.jpg",
  browary: "/mirow/browary.jpg",
  norblina: "/mirow/norblina.jpg",
  metro: "/mirow/rondo-onz.jpg",
  centralna: "/mirow/centralna.jpg",
  zloteTarasy: "/mirow/zlote-tarasy.jpg",
  chopin: "/mirow/chopin.jpg",
  stareMiasto: "/mirow/stare-miasto.jpg",
  bulwary: "/mirow/bulwary.jpg",
  muzeumPowstania: "/mirow/muzeum-powstania.jpg",
  placZbawiciela: "/mirow/plac-zbawiciela.jpg",
} as const;

type PlaceMeta = {
  key: keyof typeof IMAGES;
  dist: string;
  time: string;
};

const CATEGORIES: { titleKey: string; items: PlaceMeta[] }[] = [
  {
    titleKey: "categoryFood",
    items: [
      { key: "halaMirowska", dist: "200 m", time: "3 min" },
      { key: "browary", dist: "600 m", time: "8 min" },
      { key: "norblina", dist: "750 m", time: "10 min" },
      { key: "halaGwardii", dist: "250 m", time: "3 min" },
    ],
  },
  {
    titleKey: "categoryTransport",
    items: [
      { key: "metro", dist: "100 m", time: "1 min" },
      { key: "centralna", dist: "1.2 km", time: "15 min" },
      { key: "zloteTarasy", dist: "", time: "4 min" },
      { key: "chopin", dist: "20 min", time: "20 min" },
    ],
  },
  {
    titleKey: "categoryCulture",
    items: [
      { key: "stareMiasto", dist: "2 km", time: "15 min" },
      { key: "bulwary", dist: "2.5 km", time: "20 min" },
      { key: "muzeumPowstania", dist: "1 km", time: "12 min" },
      { key: "placZbawiciela", dist: "2 km", time: "12 min" },
    ],
  },
];

export default function MirowPlaces() {
  const t = useTranslations("mirowPlaces");
  const places = t.raw("places") as Record<
    string,
    { name: string; cat: string; blurb: string; distOverride?: string }
  >;

  return (
    <>
      {CATEGORIES.map((category, idx) => {
        const isSoft = idx === 1;
        const sectionClasses = [
          "px-6 md:px-10 lg:px-12 pb-14",
          isSoft ? "bg-skyline-blue-soft py-14" : "",
        ]
          .filter(Boolean)
          .join(" ");
        const indexLabel = `0${idx + 1}`;
        return (
          <section key={category.titleKey} className={sectionClasses}>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="font-display text-[28px] font-semibold leading-[1] tracking-tight sm:text-[36px]">
                <span className="text-skyline-blue">{indexLabel}</span>
                &nbsp;&nbsp;{t(category.titleKey)}
              </h2>
              <button
                type="button"
                className="text-[13px] font-semibold text-skyline-blue"
              >
                {t("allPlaces")}
              </button>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {category.items.map((item) => {
                const place = places[item.key];
                return (
                  <PlaceCard
                    key={item.key}
                    name={place.name}
                    cat={place.cat}
                    blurb={place.blurb}
                    dist={place.distOverride ?? item.dist}
                    time={item.time}
                    imageSrc={IMAGES[item.key]}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
