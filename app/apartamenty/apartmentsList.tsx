export const apartmentsList = [
  {
    apartmentId: 1,
    name: "Skyline Cool Space at Chłodna",
    location: "Warszawa, Śródmieście, Chłodna",
    description: {
      short: "Stylowe, nowoczesne miejsce na pobyt w samym centrum Warszawy",
      long: [
        "Stylowe, nowoczesne miejsce na pobyt w samym centrum Warszawy.",
        "Podniebny apartament blisko Ronda ONZ mieści się pomiędzy Browarami i Norblinem, a Halą Mirowską.",
        "Widok z okien oszałamia - tu poczujesz magię centrum biznesowego stolicy.",
        "Świetna komunikacja. Stacja metra 800 m od budynku, tramwaj 300 m, dojedziesz szybko na Starówkę, Stadion, czy na bulwary nad Wisłą.",
        "Dokoła tętni życie centrum, a jednak tu, na Chłodnej, jest urokliwie cicho.",
        "Tuż obok świetne knajpki, bary, restauracje i bistra.",
      ],
    },
    accordionData: [
      {
        value: "item-1",
        question: "Jakie to mieszkanie?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      },
      {
        value: "item-2",
        question: "Dupa dupa dupa?",
        answer:
          "Yes. It comes with default styles that match the other components' aesthetic.",
      },
      {
        value: "item-3",
        question: "Is it animated?",
        answer:
          "Yes. It's animated by default, but you can disable it if you prefer.",
      },
    ],
    rooms: ["kuchnia", "salon", "sypialnia", "lazienka"],
    area: 40,
    floor: 13,
    bedrooms: 1,
    bathrooms: 1,
    kitchenStyle: "aneks kuchenny",
    buildingType: "blok",
    builtYear: 1950,
    mainPic: "/chlodna/1.jpeg",
    pics: [
      { src: "/chlodna/1.jpeg", alt: "image" },
      { src: "/chlodna/2.jpeg", alt: "image" },
      { src: "/chlodna/3.jpeg", alt: "image" },
    ],
    hrefLink: "/apartamenty/chlodna",
  },
  {
    apartmentId: 2,
    name: "Sky Apartment Comfy Suite Pereca",
    location: "Warszawa, Śródmieście, Pereca",
    description: {
      short: "Stylowe, nowoczesne miejsce na pobyt w samym centrum Warszawy",
      long: "",
    },
    rooms: ["kuchnia", "salon", "sypialnia", "lazienka"],
    area: 28,
    floor: 13,
    bedrooms: 1,
    bathrooms: 1,
    kitchenStyle: "aneks kuchenny",
    buildingType: "blok",
    builtYear: 1950,
    mainPic: "/pereca/1.jpeg",
    pics: [
      { src: "/pereca/1.jpeg", alt: "image" },
      { src: "/pereca/2.jpeg", alt: "image" },
      { src: "/pereca/3.jpeg", alt: "image" },
    ],
    hrefLink: "/apartamenty/pereca",
  },
];
