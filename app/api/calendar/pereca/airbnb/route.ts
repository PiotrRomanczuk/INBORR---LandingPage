export async function GET(request: Request) {
  const link = new URL(
    "https://www.airbnb.com/calendar/ical/921541253367297308.ics?s=3500d8b515272c463f72ae3529949d95&locale=pl",
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
