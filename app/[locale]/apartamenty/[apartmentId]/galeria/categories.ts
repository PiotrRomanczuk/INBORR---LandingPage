import type { PhotoCategory } from "@/interfaces/IApartment";

export interface CategoryMeta {
  key: PhotoCategory;
  labelKey: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { key: "salon", labelKey: "categorySalon" },
  { key: "sypialnia", labelKey: "categorySypialnia" },
  { key: "kuchnia", labelKey: "categoryKuchnia" },
  { key: "lazienka", labelKey: "categoryLazienka" },
  { key: "widok", labelKey: "categoryWidok" },
  { key: "budynek", labelKey: "categoryBudynek" },
];
