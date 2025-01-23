"use client";

import { ServiceCard } from "./ServiceCard";
// import { wifiIcon, airIcon, kitchenIcon } from "./IconList";

import { Wifi, AirVent, Microwave } from "lucide-react";

export const Services = () => {
  return (
    <section className="dark:bg-dark pb-12 lg:pb-[90px] lg:pt-[60px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="text-dark mb-3 pt-6 text-4xl font-bold leading-[1.2] dark:text-white sm:text-5xl md:text-[48px]">
                Co zapewniamy
              </h2>
              <p className="text-body-color dark:text-dark-6 text-base">
                Ponizej znajduje sie lista uslug, które oferujemy w kazdym z
                naszych apartamentow
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap ">
          <ServiceCard
            title="Bezpłatne Wi-Fi"
            details="Zapewniamy szybki i nieograniczony dostęp do bezpłatnego Wi-Fi dla wszystkich naszych gości."
            icon={<Wifi />}
            ariaLabel="Bezpłatne Wi-Fi"
          />
          <ServiceCard
            title="Ogrzewanie i klimatyzacja"
            details="Twój komfort jest naszym priorytetem. Nasze apartamenty są wyposażone w zaawansowane systemy ogrzewania i klimatyzacji, abyś zawsze czuł się idealnie w każdej sytuacji."
            icon={<AirVent />}
            ariaLabel="Ogrzewanie i klimatyzacja"
          />
          <ServiceCard
            title="Wyposażenie kuchenne"
            details="W naszych apartamentach znajdziesz kompleksowe wyposażenie kuchenne, które umożliwi Ci samodzielne przygotowywanie posiłków."
            icon={<Microwave />}
            ariaLabel="Wyposażenie kuchenne"
          />
        </div>
      </div>
    </section>
  );
};
