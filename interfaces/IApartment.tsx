export type PhotoCategory =
  | "salon"
  | "sypialnia"
  | "kuchnia"
  | "lazienka"
  | "widok"
  | "budynek";

export type Locale = "pl" | "en";

export type ILocalized<T = string> = { pl: T; en: T };

export interface IApartment {
  apartmentId: number;
  shortName: string;
  name: string;
  location: ILocalized;
  description: {
    short: ILocalized;
    long: ILocalized<string[]>;
  };
  accordionData: {
    value: string;
    question: ILocalized;
    answer: ILocalized;
  }[];
  rooms: string[];
  area: number;
  floor: number;
  bedrooms: number;
  bathrooms: number;
  kitchenStyle: string;
  buildingType: string;
  builtYear: number;
  localization: ILocalized;
  lattitude: number;
  longitude: number;
  priceFrom: number;
  mainPic: string;
  pics: {
    src: string;
    alt: ILocalized;
    category: PhotoCategory;
  }[];
  hrefLink: string;
  reservedLinks: {
    airbnbLink: URL;
    bookingLink: URL;
    bookableLink?: URL;
  };
  calendarLinks: {
    airbnb: string;
    booking: string;
  };
}

export interface ILocalizedApartment {
  apartmentId: number;
  shortName: string;
  name: string;
  location: string;
  description: { short: string; long: string[] };
  accordionData: { value: string; question: string; answer: string }[];
  rooms: string[];
  area: number;
  floor: number;
  bedrooms: number;
  bathrooms: number;
  kitchenStyle: string;
  buildingType: string;
  builtYear: number;
  localization: string;
  lattitude: number;
  longitude: number;
  priceFrom: number;
  mainPic: string;
  pics: { src: string; alt: string; category: PhotoCategory }[];
  hrefLink: string;
  reservedLinks: IApartment["reservedLinks"];
  calendarLinks: IApartment["calendarLinks"];
}

export function localizeApartment(
  apt: IApartment,
  locale: Locale,
): ILocalizedApartment {
  return {
    ...apt,
    location: apt.location[locale],
    localization: apt.localization[locale],
    description: {
      short: apt.description.short[locale],
      long: apt.description.long[locale],
    },
    accordionData: apt.accordionData.map((item) => ({
      value: item.value,
      question: item.question[locale],
      answer: item.answer[locale],
    })),
    pics: apt.pics.map((pic) => ({
      src: pic.src,
      alt: pic.alt[locale],
      category: pic.category,
    })),
  };
}
