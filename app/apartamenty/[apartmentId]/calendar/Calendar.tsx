import { parseICSToJSON, getEventDates } from "./@components/ParseICSToJson";
import { MultiDateRangeCalendar } from "./@components/MultiDateRangeCalendar";

// interface CalendarProps {
//   apartmentName: string;
// }

// async function fetchAndProcessICSData(apartmentName: string) {
//   const airbnbICSData = await fetch(
//     `http://inborr.pl/api/calendar/${apartmentName}/airbnb`,
//   );
//   const bookingICSData = await fetch(
//     `http://inborr.pl/api/calendar/${apartmentName}/booking`,
//   );

//   const airbnbICSDataString = await airbnbICSData.text();
//   const bookingICSDataString = await bookingICSData.text();

//   const airbnbJsonEvents = parseICSToJSON(airbnbICSDataString);
//   const bookingJsonEvents = parseICSToJSON(bookingICSDataString);

//   const jsonEvents = [...airbnbJsonEvents, ...bookingJsonEvents];

//   return getEventDates(jsonEvents);
// }

async function CalendarComponent() {
  // const eventDates = await fetchAndProcessICSData(apartmentName);

  // const selectedRanges = eventDates.map((date) => ({
  //   from: new Date(date),
  //   to: new Date(date),
  // }));

  return (
    <>{/* <MultiDateRangeCalendar selectedRanges={selectedRanges} /> */}</>
  );
}

export default CalendarComponent;
