"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { parseICSToJSON, getBlockedDays } from "./@components/ParseICSToJson";

const MultiDateRangeCalendar = lazy(
  () => import("./@components/MultiDateRangeCalendar"),
);

interface CalendarProps {
  apartmentName: string;
  selectedCheckIn?: Date;
  onSelectCheckIn?: (date: Date | undefined) => void;
}

type CalendarStatus = "loading" | "ready" | "error";

async function fetchSource(path: string): Promise<string> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
  return res.text();
}

async function fetchBlockedDays(apartmentName: string): Promise<Date[]> {
  const sources = [
    `/api/calendar/${apartmentName}/airbnb`,
    `/api/calendar/${apartmentName}/booking`,
  ];

  const results = await Promise.allSettled(sources.map(fetchSource));
  const events = results.flatMap((result) =>
    result.status === "fulfilled" ? parseICSToJSON(result.value) : [],
  );

  if (results.every((r) => r.status === "rejected")) {
    throw new Error("All calendar sources failed");
  }

  return getBlockedDays(events);
}

function CalendarComponent({
  apartmentName,
  selectedCheckIn,
  onSelectCheckIn,
}: CalendarProps) {
  const t = useTranslations("calendar");
  const [blockedDays, setBlockedDays] = useState<Date[]>([]);
  const [status, setStatus] = useState<CalendarStatus>("loading");
  const [lastFetched, setLastFetched] = useState<Date | null>(null);

  useEffect(() => {
    let cancelled = false;

    setStatus("loading");
    fetchBlockedDays(apartmentName)
      .then((days) => {
        if (cancelled) return;
        setBlockedDays(days);
        setLastFetched(new Date());
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [apartmentName]);

  return (
    <Suspense
      fallback={
        <div className="py-8 text-center text-sm text-skyline-muted">
          {t("loading")}
        </div>
      }
    >
      <MultiDateRangeCalendar
        blockedDays={blockedDays}
        status={status}
        lastFetched={lastFetched}
        selectedCheckIn={selectedCheckIn}
        onSelectCheckIn={onSelectCheckIn}
      />
    </Suspense>
  );
}

export default CalendarComponent;
