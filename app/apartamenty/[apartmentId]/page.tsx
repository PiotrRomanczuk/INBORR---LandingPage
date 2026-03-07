import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apartmentsList } from "../apartmentsList";
import ApartmentPageClient from "./ApartmentPageClient";

export function generateStaticParams() {
  return apartmentsList.map((apt) => ({
    apartmentId: apt.shortName,
  }));
}

export function generateMetadata({ params }: { params: { apartmentId: string } }): Metadata {
  const apartment = apartmentsList.find(
    (apt) => apt.shortName === params.apartmentId
  );

  if (!apartment) {
    return { title: "Apartament nie znaleziony | Inborr" };
  }

  return {
    title: `${apartment.name} | Inborr Apartamenty Warszawa`,
    description: apartment.description.short,
    openGraph: {
      title: `${apartment.name} | Inborr Apartamenty`,
      description: apartment.description.short,
      url: `https://inborr.pl/apartamenty/${apartment.shortName}`,
      siteName: "Inborr",
      locale: "pl_PL",
      type: "website",
    },
  };
}

export default function Page({ params }: { params: { apartmentId: string } }) {
  const apartment = apartmentsList.find(
    (apt) => apt.shortName === params.apartmentId
  );

  if (!apartment) {
    notFound();
  }

  return <ApartmentPageClient apartment={apartment} />;
}
