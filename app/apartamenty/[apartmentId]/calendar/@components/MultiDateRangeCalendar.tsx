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
    <div className="flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6">
          <div className="text-center space-y-1 mb-6">
            <h1 className="text-xl font-bold text-gray-900">Kalendarz dostępności</h1>
            <h2 className="text-xl font-semibold text-gray-700">mieszkania</h2>
          </div>

          <div className="mt-4">
            <Calendar
              mode="single"
              modifiers={{ highlighted: highlightDates }}
              modifiersClassNames={{
                highlighted: "bg-red-100 text-red-700 hover:bg-red-200",
              }}
              className="rounded-md  p-3 h-[400px]"
              classNames={{
                months: "space-y-4",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                table: "w-full border-collapse h-[300px]",
                head_row: "flex",
                head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "h-9 w-9 text-center text-sm relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                day_range_end: "day-range-end",
                day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                day_today: "bg-accent text-accent-foreground",
                day_outside: "text-muted-foreground opacity-50",
                day_disabled: "text-muted-foreground opacity-50",
                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


export default MultiDateRangeCalendar;
