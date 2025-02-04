export async function GET(request: Request) {
  const link = new URL(
    "https://ical.booking.com/v1/export?t=be015c14-cbeb-44d5-b285-9a3e8928d745",
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
