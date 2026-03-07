import type { Metadata } from "next";
import { Apartments } from "@/components/sections/Apartments/Apartments";
import { TrustSignals } from "@/components/sections/Apartments/TrustSignals";
import { ApartmentsMap } from "@/components/sections/Apartments/ApartmentsMap";
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
      <TrustSignals />
      <ApartmentsMap />
    </>
  );
}
