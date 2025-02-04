import { parseICSToJSON, getEventDates } from "./@components/ParseICSToJson";

export async function fetchAndProcessICSData(apartmentName: string) {
  const airbnbICSData = await fetch(
    `http://inborr.pl/api/calendar/${apartmentName}/airbnb`,
  );
  const bookingICSData = await fetch(
    `http://inborr.pl/api/calendar/${apartmentName}/booking`,
  );

  const airbnbICSDataString = await airbnbICSData.text();
  const bookingICSDataString = await bookingICSData.text();

  const airbnbJsonEvents = parseICSToJSON(airbnbICSDataString);
  const bookingJsonEvents = parseICSToJSON(bookingICSDataString);

  const jsonEvents = [...airbnbJsonEvents, ...bookingJsonEvents];

  return getEventDates(jsonEvents);
}
