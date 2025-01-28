import { CardApartment } from "@/components/sections/Apartments/CardApartment";
import { apartmentsList } from "./apartmentsList";
import { Apartments } from "@/components/sections/Apartments/Apartments";
import { Title } from "./Title";

export default function Home() {
  return (
    <>
      <Title />
      <Apartments />
    </>
  );
}
