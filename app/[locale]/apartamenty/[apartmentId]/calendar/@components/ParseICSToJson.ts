export type ICSEvent = {
  uid: string;
  start: Date;
  end: Date;
  summary: string;
};

const parseICSDate = (raw: string): Date | null => {
  const cleaned = raw.split(";")[0].trim();
  if (cleaned.length < 8) return null;
  const year = Number(cleaned.slice(0, 4));
  const month = Number(cleaned.slice(4, 6)) - 1;
  const day = Number(cleaned.slice(6, 8));
  if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
    return null;
  }
  return new Date(year, month, day);
};

const stripParams = (key: string) => key.split(";")[0];

export function parseICSToJSON(icsData: string): ICSEvent[] {
  const events: ICSEvent[] = [];
  const veventRegex = /BEGIN:VEVENT([\s\S]*?)END:VEVENT/g;
  let match: RegExpExecArray | null;

  while ((match = veventRegex.exec(icsData)) !== null) {
    const block = match[1];
    let uid = "";
    let summary = "";
    let start: Date | null = null;
    let end: Date | null = null;

    block.split(/\r?\n/).forEach((line) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex === -1) return;
      const rawKey = line.slice(0, colonIndex);
      const value = line.slice(colonIndex + 1);
      const key = stripParams(rawKey);

      if (key === "DTSTART") start = parseICSDate(value);
      else if (key === "DTEND") end = parseICSDate(value);
      else if (key === "UID") uid = value.trim();
      else if (key === "SUMMARY") summary = value.trim();
    });

    if (start && end) {
      events.push({ uid, start, end, summary });
    }
  }

  return events;
}

const addDays = (date: Date, days: number): Date => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

const toDayKey = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

/**
 * Expands ICS events into the set of fully-blocked calendar days.
 *
 * Short-let convention: DTSTART = arrival day, DTEND = departure day.
 * Both endpoints are bookable as turnover days, so we trim them:
 * blocked = [DTSTART + 1, DTEND - 1] inclusive.
 */
export function getBlockedDays(events: ICSEvent[]): Date[] {
  const seen = new Set<string>();
  const blocked: Date[] = [];

  events.forEach(({ start, end }) => {
    const firstBlocked = addDays(start, 1);
    const lastBlocked = addDays(end, -1);
    let cursor = firstBlocked;
    while (cursor <= lastBlocked) {
      const key = toDayKey(cursor);
      if (!seen.has(key)) {
        seen.add(key);
        blocked.push(new Date(cursor));
      }
      cursor = addDays(cursor, 1);
    }
  });

  return blocked;
}
