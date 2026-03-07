import { parseICSToJSON, getEventDates } from "./@components/ParseICSToJson";

const VALID_APARTMENTS = ["chlodna", "pereca"] as const;

export async function fetchAndProcessICSData(apartmentName: string) {
  if (
    !VALID_APARTMENTS.includes(
      apartmentName as (typeof VALID_APARTMENTS)[number],
    )
  ) {
    throw new Error(`Invalid apartment name: ${apartmentName}`);
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://inborr.pl";

  const airbnbICSData = await fetch(
    `${baseUrl}/api/calendar/${apartmentName}/airbnb`,
  );
  const bookingICSData = await fetch(
    `${baseUrl}/api/calendar/${apartmentName}/booking`,
  );

  const airbnbICSDataString = await airbnbICSData.text();
  const bookingICSDataString = await bookingICSData.text();

  const airbnbJsonEvents = parseICSToJSON(airbnbICSDataString);
  const bookingJsonEvents = parseICSToJSON(bookingICSDataString);

  const jsonEvents = [...airbnbJsonEvents, ...bookingJsonEvents];

  return getEventDates(jsonEvents);
}
