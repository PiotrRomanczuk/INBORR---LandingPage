"use client";
import { lazy, Suspense, useEffect, useState } from "react";
import { parseICSToJSON, getEventDates } from "./@components/ParseICSToJson";

// Lazy load the MultiDateRangeCalendar component
const MultiDateRangeCalendar = lazy(
  () => import("./@components/MultiDateRangeCalendar"),
);

interface CalendarProps {
  apartmentName: string;
}

async function fetchAndProcessICSData(apartmentName: string) {
  console.log(apartmentName);
  console.log("fetching iCal data");
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

function CalendarComponent({ apartmentName }: CalendarProps) {
  const [selectedRanges, setSelectedRanges] = useState<
    Array<{ from: Date; to: Date }>
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const eventDates = await fetchAndProcessICSData(apartmentName);
      const ranges = eventDates.map((date) => ({
        from: new Date(date),
        to: new Date(date),
      }));
      setSelectedRanges(ranges);
    };

    fetchData();
  }, [apartmentName]);

  return (
    <Suspense fallback={<div>Loading calendar...</div>}>
      <MultiDateRangeCalendar selectedRanges={selectedRanges} />
    </Suspense>
  );
}

export default CalendarComponent;
