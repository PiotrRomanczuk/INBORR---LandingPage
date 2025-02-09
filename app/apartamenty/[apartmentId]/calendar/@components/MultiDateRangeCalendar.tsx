"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { isWithinInterval } from "date-fns";
type Range = {
  from: Date;
  to: Date;
};

type MultiDateRangeCalendarProps = {
  selectedRanges: Range[];
};

export const MultiDateRangeCalendar: React.FC<MultiDateRangeCalendarProps> = ({
  selectedRanges,
}) => {
  const highlightDates = (date: Date) => {
    return selectedRanges.some((range) =>
      isWithinInterval(date, { start: range.from!, end: range.to! }),
    );
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Card>
        <CardContent className="mx-auto flex flex-col items-center justify-center">
          <h1 className="mb-4 text-xl font-bold">Apartment Availability</h1>


        <div className="mt-4">
          <Calendar
            mode="single"
            modifiers={{ highlighted: highlightDates }}
            modifiersClassNames={{ highlighted: "bg-red-500 " }}
          />
        </div>
      </CardContent>
    </Card>
    </div>
  );
};


export default MultiDateRangeCalendar;
