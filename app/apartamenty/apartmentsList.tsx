import { IApartment } from "../../interfaces/IApartment";

export const apartmentsList: IApartment[] = [
  {
    apartmentId: 1,
    shortName: "chlodna",
    name: "Skyline Cool Space at Chłodna",
    location: "Warszawa, Śródmieście, Chłodna",
    description: {
      short: "Stylowe, nowoczesne miejsce na pobyt w samym centrum Warszawy",
      long: [
        "Stylowe, nowoczesne miejsce na pobyt w samym centrum Warszawy. Podniebny apartament blisko Ronda ONZ mieści się pomiędzy Browarami i Norblinem, a Halą Mirowską. Widok z okien oszałamia - tu poczujesz magię centrum biznesowego stolicy.",
        "Świetna komunikacja. Stacja metra 800 m od budynku, tramwaj 300 m, dojedziesz szybko na Starówkę, Stadion, czy na bulwary nad Wisłą. Dokoła tętni życie centrum, a jednak tu, na Chłodnej, jest urokliwie cicho. Tuż obok świetne knajpki, bary, restauracje i bistra.",
        "Apartament składa się z 2 pokoi. Oddzielna, przytulna sypialnia z podwójnym łóżkiem i szafą na potrzebne w podróży ubrania, ma również kącik do racy z biurkiem i lampą. Salon z aneksem kuchennym pozwoli wygodnie odpocząć przed telewizorem.",
        "W lecie jest do Twojej dyspozycji klimatyzacja oraz ciemniejsze zasłony. Sofa może służyć jako dodatkowe, wygodne podwójne łóżko. W salonie znajdziesz również fotel typu futon, na którym wygodnie usiądziesz, lub -po rozłożeniu - położysz się. Miłego wypoczynku.",
        "W kuchni znajdziesz wszystkie potrzebne naczynia i wyposażenie. Dostępna jest kuchenka combo - z funkcją mikrofali, płyta indukcyjna, ekspres do kawy typu nespresso i czajnik. Zadbaliśmy o kawę i herbatę, jest też cukier i podstawowe przyprawy. W lodówce znajdziesz kostki lodu",
      ],
    },
    accordionData: [
      {
        value: "item-1",
        question:
          "Czy mogą Państwo wystawić fakturę proforma, celem opłacenia pobytu?",
        answer:
          "Tak, wystawienie faktury proforma jest możliwe, w momencie dokonania rezerwacji. Wtedy jestem w stanie określić wartość z przysługującymi zniżkami i ofertami. Proszę o informację (wiadomość systemową) o takiej potrzebie.",
      },
      {
        value: "item-2",
        question: "Mogę tam zaparkować? Ile kosztuje parking za noc?",
        answer:
          "Tak, budynek znajduje się na terenie płatnego parkingu. Dzienna opłata za parking wynosi około 57 PLN (od 08:00 do 20:00), noc jest bezpłatna. W pobliżu (20m) znajduje się płatny parking (144 PLN/dzień), lub 250 m kolejny jeden 70-80PLN/dzień.",
      },
      {
        value: "item-3",
        question:
          "Jak daleko obiekt Sky Apartment Comfy Suite Pereca znajduje się od centrum miasta Warszawa?",
        answer:
          "Sky Apartment Comfy Suite Pereca znajduje się 1,1 km od centrum miasta Warszawa. Wszystkie odległości podane są w linii prostej. Właściwy dystans do pokonania może się różnić.",
      },
      {
        value: "item-4",
        question:
          "Jakie są godziny zameldowania i wymeldowania w obiekcie Sky Apartment Comfy Suite Pereca?",
        answer:
          "Zameldowanie w obiekcie Sky Apartment Comfy Suite Pereca rozpoczyna się o 15:00, a wymeldować się można do 11:00.",
      },
      {
        value: "item-5",
        question: "Ilu gości może się zatrzymać w tym obiekcie?",
        answer:
          "Obiekt Sky Apartment Comfy Suite Pereca udostępnia jedną opcję zakwaterowania. Pomieści ona 4 gości",
      },
    ],
    rooms: ["kuchnia", "salon", "sypialnia", "lazienka"],
    area: 40,
    floor: 13,
    bedrooms: 1,
    bathrooms: 1,
    kitchenStyle: "aneks",
    buildingType: "blok",
    builtYear: 1950,
    localization: "Centrum, Mirów",
    mainPic: "/chlodna/1.jpeg",
    pics: [
      {
        src: "/chlodna/Inborr-Chlodna-wejscie-budynek-apartament.jpg",
        alt: "Building entrance",
      },
      { src: "/chlodna/Inborr-Chlodna-zameksmart.jpg", alt: "Smart lock" },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-Kuchnia1-apartament.jpg",
        alt: "Kitchen view 1",
      },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-Kuchnia2-apartament.jpg",
        alt: "Kitchen view 2",
      },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-Lazienka1-apartament.jpg",
        alt: "Bathroom view",
      },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-apartament-salon.jpg",
        alt: "Living room view",
      },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-kuchniaaneks-apartament.jpg",
        alt: "Kitchen annex",
      },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-salon-apartament.jpg",
        alt: "Main living room",
      },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-sypialnia-apartament.jpg",
        alt: "Bedroom view",
      },
      {
        src: "/chlodna/Inborr-Skyline-Sypialnia-Chlodna.jpg",
        alt: "Bedroom alternate view",
      },
      {
        src: "/chlodna/Inborr-Syline-Chlodna-salon2-apartament.jpg",
        alt: "Living room view 2",
      },
      {
        src: "/chlodna/Inborr-apartament-kuchnia-skyline.jpg",
        alt: "Skyline kitchen view",
      },
      {
        src: "/chlodna/Kuchnia-Inborr-Skyline-Chlodna.jpg",
        alt: "Skyline kitchen alternate view",
      },
      {
        src: "/chlodna/Skyline-Chlodna-Inborr-parking-apartament.jpg",
        alt: "Parking area",
      },
      {
        src: "/chlodna/Sypialnia-Inborr-Skyline-apartament.jpg",
        alt: "Skyline bedroom view",
      },
      {
        src: "/chlodna/Chlodna-Inborr-apartamenty-Mirow.jpg",
        alt: "Apartments Mirow view",
      },
      {
        src: "/chlodna/Inborr-Chlodna-apartament-Skyline-night.jpg",
        alt: "Skyline night view",
      },
      {
        src: "/chlodna/Inborr-Chlodna-apartament-Skyline.jpg",
        alt: "Skyline view",
      },
    ],
    hrefLink: "/apartamenty/chlodna",
    airbnbLink: new URL(
      "https://www.airbnb.pl/rooms/1024727561187007898?_set_bev_on_new_domain=1700305802_ZWNlMmZlODc0OTMy&source_impression_id=p3_1701941187_lcWLDPPjA3yPukzD",
    ),
    bookingLink: new URL(
      "https://www.airbnb.pl/rooms/1024727561187007898?_set_bev_on_new_domain=1700305802_ZWNlMmZlODc0OTMy&source_impression_id=p3_1701941187_lcWLDPPjA3yPukzD",
    ),
  },
  {
    apartmentId: 2,
    shortName: "pereca",
    name: "Sky Apartment Comfy Suite Pereca",
    location: "Warszawa, Śródmieście, Pereca",
    description: {
      short: "Stylowe, nowoczesne miejsce na pobyt w samym centrum Warszawy",
      long: [
        "Apartament na 14 piętrze tuż przy Rondzie ONZ to stylowe miejsce na pobyt w samym centrum Warszawy. Wschodnie okna pokażą perspektywę centrum z widokiem na panoramę miasta..",
        "Świetnie skomunikowane, znajdujące się 100 m od wejścia do metra linii 2, pozwala szybko znaleźć się na Starówce, czy na bulwarach nad Wisłą. Dokoła tętni życie centrum, a w okolicy znajdziesz wiele ciekawych miejsc, świetne knajpki, bary, restauracje i bistra. To jest świetne miejsce do zwiedzania, knajpingu, a także na zakupy.",
        "Jesteś 400 metrów do Food court Fabryka Norblina, 600 m do centrum Browary Warszawskie, 1 przystanek do centrum handlowego Złote Tarasy i dworca kolejowego Warszawa Centralna.",
        "Zmęczony po zwiedzaniu? Na dole w budynku masz 3 bardzo fajne, sprawdzone knajpki. Możesz też kupić coś na szybko w Carrefour express. Wszystko pod ręką. Jeśli zdecydujesz się ruszyć na 10 minutowy spacer, znajdziesz w pobliżu chyba większość kuchni świata.",
        "W mieszkaniu znajdziesz w pełni wyposażony aneks kuchenny ze zmywarką, nowoczesną łazienkę z pralką, Wifi, telewizję kablową, klimatyzację.",
        "Dla Twojej wygody są tutaj też: żelazko i deska, mała suszarka na pranie, szafa wnękowa za kotarą, łóżko dwuosobowe i sofa. Sypialnia jest oddzielona przesuwanymi drzwiami, dla wygody i maksymalnej prywatności",
        "W kuchni znajdziesz naczynia i przybory pozwalające przygotować zarówno śniadanie jak i pełnowymiarowy posiłek dla podróżujących. Do dyspozycji masz płytę indukcyjną, piekarnik combo (z funkcją mikrofali), ekspres do kawy. Zadbaliśmy też o herbatę, kawę i cukier. W łazience możesz cieszyć się prysznicem z deszczownicą.",
      ],
    },
    accordionData: [
      {
        value: "item-1",
        question:
          "Czy mogą Państwo wystawić fakturę proforma, celem opłacenia pobytu?",
        answer:
          "Tak, wystawienie faktury proforma jest możliwe, w momencie dokonania rezerwacji. Wtedy jestem w stanie określić wartość z przysługującymi zniżkami i ofertami. Proszę o informację (wiadomość systemową) o takiej potrzebie.",
      },
      {
        value: "item-2",
        question: "Mogę tam zaparkować? Ile kosztuje parking za noc?",
        answer:
          "Tak, budynek znajduje się na terenie płatnego parkingu. Dzienna opłata za parking wynosi około 57 PLN (od 08:00 do 20:00), noc jest bezpłatna. W pobliżu (20m) znajduje się płatny parking (144 PLN/dzień), lub 250 m kolejny jeden 70-80PLN/dzień.",
      },
      {
        value: "item-3",
        question:
          "Jak daleko obiekt Sky Apartment Comfy Suite Pereca znajduje się od centrum miasta Warszawa?",
        answer:
          "Sky Apartment Comfy Suite Pereca znajduje się 1,1 km od centrum miasta Warszawa. Wszystkie odległości podane są w linii prostej. Właściwy dystans do pokonania może się różnić.",
      },
      {
        value: "item-4",
        question:
          "Jakie są godziny zameldowania i wymeldowania w obiekcie Sky Apartment Comfy Suite Pereca?",
        answer:
          "Zameldowanie w obiekcie Sky Apartment Comfy Suite Pereca rozpoczyna się o 15:00, a wymeldować się można do 11:00.",
      },
      {
        value: "item-5",
        question: "Ilu gości może się zatrzymać w tym obiekcie?",
        answer:
          "Obiekt Sky Apartment Comfy Suite Pereca udostępnia jedną opcję zakwaterowania. Pomieści ona 4 gości",
      },
    ],
    rooms: ["kuchnia", "salon", "sypialnia", "lazienka"],
    area: 28,
    floor: 13,
    bedrooms: 1,
    bathrooms: 1,
    kitchenStyle: "aneks",
    buildingType: "blok",
    builtYear: 1950,
    localization: "Centrum, Rondo ONZ",
    mainPic: "/pereca/1.jpeg",
    pics: [
      {
        src: "/pereca/Inborr-Pereca-Bedroom sypaialnia.jpg",
        alt: "Bedroom view",
      },
      { src: "/pereca/Inborr-Pereca-Kuchnia kitchen.jpg", alt: "Kitchen view" },
      {
        src: "/pereca/Inborr-Pereca-Lazienka-apartament.jpg",
        alt: "Bathroom view",
      },
      { src: "/pereca/Inborr-Pereca-Sky-Szafa.jpg", alt: "Wardrobe" },
      {
        src: "/pereca/Inborr-Pereca-Sky-aneks kuchenny z kwiatami.jpg",
        alt: "Kitchen annex with flowers",
      },
      {
        src: "/pereca/Inborr-Pereca-Sky-apartament-aneks kuchenny.jpg",
        alt: "Apartment kitchen annex",
      },
      {
        src: "/pereca/Inborr-Pereca-Sky-futon-Fotel.jpg",
        alt: "Futon and armchair",
      },
      {
        src: "/pereca/Inborr-Pereca-Sky-salon bez fotela.jpg",
        alt: "Living room without armchair",
      },
      { src: "/pereca/Inborr-Pereca-Sky-widok z okna.jpg", alt: "Window view" },
      { src: "/pereca/Inborr-Pereca-Speed test.jpg", alt: "Speed test" },
      {
        src: "/pereca/Inborr-Pereca-apartament-Salon and sofa.jpg",
        alt: "Living room with sofa",
      },
      {
        src: "/pereca/Inborr-Pereca-apatrament-salon z fotelem.jpg",
        alt: "Living room with armchair",
      },
      { src: "/pereca/Inborr-Pereca-key box.jpg", alt: "Key box" },
      { src: "/pereca/Inborr-Pereca-kuchenka 2.jpg", alt: "Kitchen stove" },
      {
        src: "/pereca/Inborr-Pereca2-centrum-apartament.jpg",
        alt: "Central apartment view",
      },
      {
        src: "/pereca/Inborr-Sky-Apartament-Pereca-salon.jpg",
        alt: "Sky apartment living room",
      },
      {
        src: "/pereca/Inborr-Sky-Pereca-Altanka śmieci Trash disposal.jpg",
        alt: "Trash disposal area",
      },
      {
        src: "/pereca/Inborr-Sky-Pereca-apartament-Salon 1.jpg",
        alt: "Sky apartment living room view",
      },
      {
        src: "/pereca/Inborr-apartament-Pereca-bath-ropes.jpg",
        alt: "Bathroom with towel ropes",
      },
      {
        src: "/pereca/Inborr-apartament-Pereca-bedroom-double-bed.jpg",
        alt: "Bedroom with double bed",
      },
      { src: "/pereca/Pereca2-Budynek-Inborr.jpg", alt: "Building exterior" },
      {
        src: "/pereca/Pereca2-Hall na dole Inborr.jpg",
        alt: "Ground floor hall",
      },
      {
        src: "/pereca/Pereca2-restauracje-Inborr.jpg",
        alt: "Restaurants view",
      },
    ],

    hrefLink: "/apartamenty/pereca",
    airbnbLink: new URL(
      "https://www.airbnb.pl/rooms/1024727561187007898?_set_bev_on_new_domain=1700305802_ZWNlMmZlODc0OTMy&source_impression_id=p3_1701941187_lcWLDPPjA3yPukzD",
    ),
    bookingLink: new URL(
      "https://www.airbnb.pl/rooms/1024727561187007898?_set_bev_on_new_domain=1700305802_ZWNlMmZlODc0OTMy&source_impression_id=p3_1701941187_lcWLDPPjA3yPukzD",
    ),
  },
];
