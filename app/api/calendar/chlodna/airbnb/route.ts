export async function GET(request: Request) {
  const link = new URL(
    "https://www.airbnb.pl/calendar/ical/1024727561187007898.ics?s=d6fa8ab96065f48e224f40e44feff419",
  );
  try {
    const response = await fetch(link);
    const icsData = await response.text();
    return new Response(icsData);
  } catch (error) {
    // Handle the error and return a fallback response
    return new Response("Error fetching data", { status: 500 });
  }
}
