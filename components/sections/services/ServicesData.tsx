import { Microwave, Wifi, AirVent } from "lucide-react";
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
];

export default servicesData;
