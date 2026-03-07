import { apartmentsList } from "@/data/apartments";

export async function GET() {
  const serializable = apartmentsList.map((apt) => ({
    ...apt,
    reservedLinks: {
      airbnbLink: apt.reservedLinks.airbnbLink.toString(),
      bookingLink: apt.reservedLinks.bookingLink.toString(),
      bookableLink: apt.reservedLinks.bookableLink?.toString(),
    },
  }));

  return new Response(JSON.stringify(serializable));
}
