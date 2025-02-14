export async function GET(request: Request) {
  const link = new URL(
    "https://ical.booking.com/v1/export?t=792cb4ca-a15c-40cb-b4e8-0bfcb12d7f3b",
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
