import { parseICSToJSON, getEventDates } from "./@components/ParseICSToJson";
import { MultiDateRangeCalendar } from "./@components/MultiDateRangeCalendar";

export default async function CalendarComponent() {
  const airbnbICSData = await fetch("http://inborr.pl/api/calendar/airbnb");
  const bookingICSData = await fetch("http://inborr.pl/api/calendar/booking");

  const airbnbICSDataString = await airbnbICSData.text();
  const bookingICSDataString = await bookingICSData.text();

  const airbnbJsonEvents = parseICSToJSON(airbnbICSDataString);
  const bookingJsonEvents = parseICSToJSON(bookingICSDataString);

  const jsonEvents = [...airbnbJsonEvents, ...bookingJsonEvents];

  const eventDates = getEventDates(jsonEvents);

  const selectedRanges = eventDates.map((date) => ({
    from: new Date(date),
    to: new Date(date),
  }));

  return (
    <>
      <MultiDateRangeCalendar selectedRanges={selectedRanges} />
    </>
  );
}
