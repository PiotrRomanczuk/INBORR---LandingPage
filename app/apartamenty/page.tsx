import type { Metadata } from "next";
import { CardApartment } from "@/components/sections/Apartments/CardApartment";
import { apartmentsList } from "./apartmentsList";
import { Apartments } from "@/components/sections/Apartments/Apartments";
import { Title } from "./Title";

export const metadata: Metadata = {
  title: "Apartamenty | Inborr - Wynajem krotkoterminowy w Warszawie",
  description:
    "Przegladaj nasze apartamenty w Warszawie. Komfortowe noclegi na wynajem krotkoterminowy - city break, workation, pobyt biznesowy.",
};

export default function Home() {
  return (
    <>
      <Title />
      <Apartments />
    </>
  );
}
