export interface IApartment {
  apartmentId: number;
  shortName: string;
  name: string;
  location: string;
  description: {
    short: string;
    long: string[];
  };
  accordionData: {
    value: string;
    question: string;
    answer: string;
  }[];
  rooms: string[];
  area: number;
  floor: number;
  bedrooms: number;
  bathrooms: number;
  kitchenStyle: string;
  buildingType: string;
  builtYear: number;
  localization: string;
  mainPic: string;
  pics: {
    src: string;
    alt: string;
  }[];
  hrefLink: string;
  reservedLinks: {
    airbnbLink: URL;
    bookingLink: URL;
  };
  calendarLinks: {
    airbnb: URL;
    booking: URL;
  };
}
