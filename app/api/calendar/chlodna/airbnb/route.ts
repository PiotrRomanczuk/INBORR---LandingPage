export async function GET() {
  const url = process.env.AIRBNB_ICAL_CHLODNA;
  if (!url) {
    return new Response("Calendar configuration missing", { status: 500 });
  }
  try {
    const response = await fetch(url);
    const icsData = await response.text();
    return new Response(icsData);
  } catch (error) {
    return new Response("Error fetching data", { status: 500 });
  }
}
