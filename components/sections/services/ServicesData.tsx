import { Microwave, Wifi, AirVent, Tv, BedDouble, KeyRound, CarFront } from "lucide-react";

const servicesData = [
  {
    title: "Bezpłatne Wi-Fi",
    details: "Zapewniamy szybki i nieograniczony internet.",
    icon: <Wifi />,
    ariaLabel: "Bezpłatne Wi-Fi",
  },
  {
    title: "Ogrzewanie i klimatyzacja",
    details: "Twój komfort jest naszym priorytetem.",
    icon: <AirVent />,
    ariaLabel: "Ogrzewanie i klimatyzacja",
  },
  {
    title: "Wyposażenie kuchenne",
    details:
      "W naszych apartamentach znajdziesz kompleksowe wyposażenie kuchenne.",
    icon: <Microwave />,
    ariaLabel: "Wyposażenie kuchenne",
  },
  {
    title: "Smart TV",
    details:
      "Telewizor Smart TV z dostępem do popularnych platform streamingowych.",
    icon: <Tv />,
    ariaLabel: "Smart TV",
  },
  {
    title: "Świeża pościel i ręczniki",
    details:
      "Każdy apartament wyposażony w czystą pościel i komplet ręczników.",
    icon: <BedDouble />,
    ariaLabel: "Świeża pościel i ręczniki",
  },
  {
    title: "Samodzielne zameldowanie",
    details:
      "Wygodne zameldowanie o dowolnej porze dzięki systemowi samodzielnego dostępu.",
    icon: <KeyRound />,
    ariaLabel: "Samodzielne zameldowanie",
  },
  {
    title: "Parking w pobliżu",
    details:
      "Możliwość parkowania w pobliżu apartamentu - informacje przy rezerwacji.",
    icon: <CarFront />,
    ariaLabel: "Parking w pobliżu",
  },
];

export default servicesData;
