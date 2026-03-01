import type { Metadata } from "next";
import { ContactData } from "./ContactData";
import { ContactForm } from "./form/ContactForm";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt | Inborr - Apartamenty w Warszawie",
  description:
    "Skontaktuj sie z nami. Inborr - komfortowe apartamenty na wynajem krotkoterminowy w Warszawie.",
};

export default function Home() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <ContactData />
        </div>
        <div className="relative w-full h-full min-h-[300px] lg:min-h-0 aspect-[4/3] lg:aspect-auto">
          <Image src="/pereca/Pereca2-Budynek-Inborr.jpg" alt="Warsaw Pereca" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
