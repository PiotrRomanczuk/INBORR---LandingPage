import { CardApartment } from "@/components/cards/CardApartment";
import { apartmentsList } from "./apartmentsList";
import { Apartments } from "@/components/sections/Apartments";
import { Title } from "./Title";

export default function Home() {
  return (
    <>
      <Title />
      <Apartments />
    </>
  );
}
