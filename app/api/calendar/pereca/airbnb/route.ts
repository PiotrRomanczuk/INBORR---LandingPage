export const revalidate = 600;

export async function GET() {
  const url = process.env.AIRBNB_ICAL_PERECA;
  if (!url) {
    return new Response("Calendar configuration missing", { status: 500 });
  }
  try {
    const response = await fetch(url, { next: { revalidate: 600 } });
    const icsData = await response.text();
    return new Response(icsData, {
      headers: { "Content-Type": "text/calendar; charset=utf-8" },
    });
  } catch {
    return new Response("Error fetching data", { status: 502 });
  }
}
