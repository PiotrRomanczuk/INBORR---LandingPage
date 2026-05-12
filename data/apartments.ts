import { IApartment } from "../interfaces/IApartment";

export const apartmentsList: IApartment[] = [
  {
    apartmentId: 1,
    shortName: "chlodna",
    name: "Skyline Cool Space at Chłodna",
    location: {
      pl: "Warszawa, Śródmieście, Chłodna",
      en: "Warsaw, City Centre, Chłodna",
    },
    description: {
      short: {
        pl: "Stylowe, nowoczesne miejsce na pobyt w samym centrum Warszawy",
        en: "A stylish, modern place to stay in the heart of Warsaw",
      },
      long: {
        pl: [
          "Stylowe, nowoczesne miejsce na pobyt w samym centrum Warszawy. Podniebny apartament blisko Ronda ONZ mieści się pomiędzy Browarami i Norblinem, a Halą Mirowską. Widok z okien oszałamia - tu poczujesz magię centrum biznesowego stolicy.",
          "Świetna komunikacja. Stacja metra 800 m od budynku, tramwaj 300 m, dojedziesz szybko na Starówkę, Stadion, czy na bulwary nad Wisłą. Dokoła tętni życie centrum, a jednak tu, na Chłodnej, jest urokliwie cicho. Tuż obok świetne knajpki, bary, restauracje i bistra.",
          "Apartament składa się z 2 pokoi. Oddzielna, przytulna sypialnia z podwójnym łóżkiem i szafą na potrzebne w podróży ubrania, ma również kącik do racy z biurkiem i lampą. Salon z aneksem kuchennym pozwoli wygodnie odpocząć przed telewizorem.",
          "W lecie jest do Twojej dyspozycji klimatyzacja oraz ciemniejsze zasłony. Sofa może służyć jako dodatkowe, wygodne podwójne łóżko. W salonie znajdziesz również fotel typu futon, na którym wygodnie usiądziesz, lub -po rozłożeniu - położysz się. Miłego wypoczynku.",
          "W kuchni znajdziesz wszystkie potrzebne naczynia i wyposażenie. Dostępna jest kuchenka combo - z funkcją mikrofali, płyta indukcyjna, ekspres do kawy typu nespresso i czajnik. Zadbaliśmy o kawę i herbatę, jest też cukier i podstawowe przyprawy. W lodówce znajdziesz kostki lodu",
        ],
        en: [
          "A stylish, modern place to stay in the heart of Warsaw. This skyline apartment, just steps from Rondo ONZ, sits between Browary Warszawskie, Fabryka Norblina and Hala Mirowska. The view from the windows is stunning — you can feel the magic of the capital's business core.",
          "Excellent transport. The metro station is 800 m from the building, a tram stop is 300 m away — you can be in the Old Town, at the National Stadium or on the Vistula boulevards in minutes. The city centre buzzes all around, yet Chłodna itself stays charmingly quiet. Great cafés, bars, restaurants and bistros are right next door.",
          "The apartment has two rooms. A separate, cosy bedroom with a double bed and a wardrobe for your travel essentials, plus a small workspace with a desk and a lamp. The living room with kitchenette is the perfect place to unwind in front of the TV.",
          "In summer you have air conditioning and blackout curtains. The sofa converts into a comfortable extra double bed. There is also a futon armchair in the living room — comfortable to sit on or, once unfolded, to sleep on. Enjoy your stay.",
          "The kitchen comes fully equipped with everything you need. There is a combo oven with a microwave function, an induction hob, a Nespresso machine and a kettle. We've stocked coffee, tea, sugar and basic seasonings — and you'll find ice cubes in the freezer.",
        ],
      },
    },
    accordionData: [
      {
        value: "item-1",
        question: {
          pl: "Czy mogą Państwo wystawić fakturę proforma, celem opłacenia pobytu?",
          en: "Can you issue a proforma invoice to settle the stay?",
        },
        answer: {
          pl: "Tak, fakturę wystawiamy po pobycie, lub jeśli potrzeba – przed, w przypadku rezerwacji z przedpłatą.",
          en: "Yes — we issue the invoice after your stay, or before it if needed for a pre-paid reservation.",
        },
      },
      {
        value: "item-2",
        question: {
          pl: "Mogę tam zaparkować? Ile kosztuje parking za noc?",
          en: "Can I park there? How much is parking per night?",
        },
        answer: {
          pl: "Tak, budynek znajduje się w obszarze płatnego parkingu miejskiego. Dzienna opłata za parking wynosi około 57 PLN (od 08:00 do 20:00), noc i weekendy, święta -  parkowanie bezpłatne. W pobliżu (500 m) znajduje się płatny parking (Chłodna 51), lub 600 m w centrum Browary Warszawskie.",
          en: "Yes — the building is in the paid on-street parking zone. The daytime fee is about 57 PLN (08:00–20:00); nights, weekends and public holidays are free. There's a paid garage 500 m away (Chłodna 51), or 600 m away at Browary Warszawskie.",
        },
      },
      {
        value: "item-3",
        question: {
          pl: "Jak daleko obiekt Sky Apartment Comfy Suite Pereca znajduje się od centrum miasta Warszawa?",
          en: "How far is Skyline Cool Space at Chłodna from Warsaw city centre?",
        },
        answer: {
          pl: "Sky Apartment Comfy Suite Pereca znajduje się 1,1 km od centrum miasta Warszawa. Wszystkie odległości podane są w linii prostej. Właściwy dystans do pokonania może się różnić.",
          en: "The apartment is 1.1 km from Warsaw city centre. All distances are given as the crow flies — the actual walking distance may differ.",
        },
      },
      {
        value: "item-4",
        question: {
          pl: "Jakie są godziny zameldowania i wymeldowania w obiekcie Sky Apartment Comfy Suite Pereca?",
          en: "What are the check-in and check-out times?",
        },
        answer: {
          pl: "Zameldowanie w Skyline Comfy at Chłodna rozpoczyna się o 16:00, a wymeldować się można do 10:00",
          en: "Check-in at Skyline Cool Space at Chłodna starts at 16:00; check-out is by 10:00.",
        },
      },
      {
        value: "item-5",
        question: {
          pl: "Ilu gości może się zatrzymać w tym obiekcie?",
          en: "How many guests can stay in this apartment?",
        },
        answer: {
          pl: "Obiekt Sky Apartment Comfy Suite Pereca udostępnia jedną opcję zakwaterowania. Pomieści ona 4 gości",
          en: "The apartment offers a single accommodation option that sleeps up to 4 guests.",
        },
      },
    ],
    rooms: ["kuchnia", "salon", "sypialnia", "lazienka"],
    area: 40,
    floor: 13,
    bedrooms: 1,
    bathrooms: 1,
    kitchenStyle: "aneks",
    buildingType: "wielopiętrowy",
    builtYear: 1950,
    localization: {
      pl: "Centrum, Mirów",
      en: "Centre, Mirów",
    },
    lattitude: 52.237769375971396,
    longitude: 20.989952066912494,
    priceFrom: 250,
    mainPic: "/chlodna/Inborr-Skyline-Chlodna-apartament-salon.jpg",
    pics: [
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-apartament-salon.jpg",
        alt: { pl: "Widok salonu", en: "Living room view" },
        category: "salon",
      },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-salon-apartament.jpg",
        alt: { pl: "Główny salon", en: "Main living room" },
        category: "salon",
      },
      {
        src: "/chlodna/Inborr-Syline-Chlodna-salon2-apartament.jpg",
        alt: { pl: "Widok salonu — ujęcie 2", en: "Living room view 2" },
        category: "salon",
      },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-kuchniaaneks-apartament.jpg",
        alt: { pl: "Aneks kuchenny", en: "Kitchen annex" },
        category: "kuchnia",
      },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-Kuchnia1-apartament.jpg",
        alt: { pl: "Kuchnia — ujęcie 1", en: "Kitchen view 1" },
        category: "kuchnia",
      },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-Kuchnia2-apartament.jpg",
        alt: { pl: "Kuchnia — ujęcie 2", en: "Kitchen view 2" },
        category: "kuchnia",
      },
      {
        src: "/chlodna/Inborr-apartament-kuchnia-skyline.jpg",
        alt: { pl: "Kuchnia z widokiem skyline", en: "Skyline kitchen view" },
        category: "kuchnia",
      },
      {
        src: "/chlodna/Kuchnia-Inborr-Skyline-Chlodna.jpg",
        alt: {
          pl: "Kuchnia z widokiem skyline — alternatywne ujęcie",
          en: "Skyline kitchen alternate view",
        },
        category: "kuchnia",
      },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-sypialnia-apartament.jpg",
        alt: { pl: "Sypialnia", en: "Bedroom view" },
        category: "sypialnia",
      },
      {
        src: "/chlodna/Inborr-Skyline-Sypialnia-Chlodna.jpg",
        alt: {
          pl: "Sypialnia — alternatywne ujęcie",
          en: "Bedroom alternate view",
        },
        category: "sypialnia",
      },
      {
        src: "/chlodna/Sypialnia-Inborr-Skyline-apartament.jpg",
        alt: { pl: "Sypialnia w apartamencie skyline", en: "Skyline bedroom view" },
        category: "sypialnia",
      },
      {
        src: "/chlodna/Inborr-Skyline-Chlodna-Lazienka1-apartament.jpg",
        alt: { pl: "Łazienka", en: "Bathroom view" },
        category: "lazienka",
      },
      {
        src: "/chlodna/Inborr-Chlodna-wejscie-budynek-apartament.jpg",
        alt: { pl: "Wejście do budynku", en: "Building entrance" },
        category: "budynek",
      },
      {
        src: "/chlodna/Inborr-Chlodna-zameksmart.jpg",
        alt: { pl: "Smart lock", en: "Smart lock" },
        category: "budynek",
      },
      {
        src: "/chlodna/Skyline-Chlodna-Inborr-parking-apartament.jpg",
        alt: { pl: "Parking", en: "Parking area" },
        category: "budynek",
      },
      {
        src: "/chlodna/Inborr-Chlodna-apartament-Skyline.jpg",
        alt: { pl: "Widok na panoramę miasta", en: "Skyline view" },
        category: "widok",
      },
      {
        src: "/chlodna/Inborr-Chlodna-apartament-Skyline-night.jpg",
        alt: { pl: "Nocny widok skyline", en: "Skyline night view" },
        category: "widok",
      },
      {
        src: "/chlodna/Chlodna-Inborr-apartamenty-Mirow.jpg",
        alt: { pl: "Apartamenty — widok Mirowa", en: "Apartments Mirów view" },
        category: "widok",
      },
    ],
    hrefLink: "/apartamenty/chlodna",
    reservedLinks: {
      airbnbLink: new URL(
        "https://www.airbnb.pl/rooms/1024727561187007898?_set_bev_on_new_domain=1700305802_ZWNlMmZlODc0OTMy&source_impression_id=p3_1701941187_lcWLDPPjA3yPukzD",
      ),
      bookingLink: new URL(
        "https://www.booking.com/hotel/pl/skyline-cool-space-at-chlodna.pl.html?aid=1263239&label=PShare-Pulse-IdIA5b%401755528048&sid=946de9355dcafe7b521169e2f6643929&dist=0&keep_landing=1&sb_price_type=total&type=total&",
      ),
      bookableLink: new URL("https://rezerwacje.inborr.pl/"),
    },
    calendarLinks: {
      airbnb: process.env.AIRBNB_ICAL_CHLODNA || "",
      booking: process.env.BOOKING_ICAL_CHLODNA || "",
    },
  },
  {
    apartmentId: 2,
    shortName: "pereca",
    name: "Sky Apartment Comfy Suite Pereca",
    location: {
      pl: "Warszawa, Śródmieście, Pereca",
      en: "Warsaw, City Centre, Pereca",
    },
    description: {
      short: {
        pl: "Stylowe, nowoczesne miejsce na pobyt w samym centrum Warszawy",
        en: "A stylish, modern place to stay in the heart of Warsaw",
      },
      long: {
        pl: [
          "Apartament na 14 piętrze tuż przy Rondzie ONZ to stylowe miejsce na pobyt w samym centrum Warszawy. Wschodnie okna pokażą perspektywę centrum z widokiem na panoramę miasta..",
          "Świetnie skomunikowane, znajdujące się 100 m od wejścia do metra linii 2, pozwala szybko znaleźć się na Starówce, czy na bulwarach nad Wisłą. Dokoła tętni życie centrum, a w okolicy znajdziesz wiele ciekawych miejsc, świetne knajpki, bary, restauracje i bistra. To jest świetne miejsce do zwiedzania, knajpingu, a także na zakupy.",
          "Jesteś 400 metrów do Food court Fabryka Norblina, 600 m do centrum Browary Warszawskie, 1 przystanek do centrum handlowego Złote Tarasy i dworca kolejowego Warszawa Centralna.",
          "Zmęczony po zwiedzaniu? Na dole w budynku masz 3 bardzo fajne, sprawdzone knajpki. Możesz też kupić coś na szybko w Carrefour express. Wszystko pod ręką. Jeśli zdecydujesz się ruszyć na 10 minutowy spacer, znajdziesz w pobliżu chyba większość kuchni świata.",
          "W mieszkaniu znajdziesz w pełni wyposażony aneks kuchenny ze zmywarką, nowoczesną łazienkę z pralką, Wifi, telewizję kablową, klimatyzację.",
          "Dla Twojej wygody są tutaj też: żelazko i deska, mała suszarka na pranie, szafa wnękowa za kotarą, łóżko dwuosobowe i sofa. Sypialnia jest oddzielona przesuwanymi drzwiami, dla wygody i maksymalnej prywatności",
          "W kuchni znajdziesz naczynia i przybory pozwalające przygotować zarówno śniadanie jak i pełnowymiarowy posiłek dla podróżujących. Do dyspozycji masz płytę indukcyjną, piekarnik combo (z funkcją mikrofali), ekspres do kawy. Zadbaliśmy też o herbatę, kawę i cukier. W łazience możesz cieszyć się prysznicem z deszczownicą.",
        ],
        en: [
          "An apartment on the 14th floor right by Rondo ONZ — a stylish place to stay in the heart of Warsaw. East-facing windows give you a sweeping view across the city skyline.",
          "Excellent transport: 100 m from the entrance to metro line M2, you'll be in the Old Town or on the Vistula boulevards in no time. The city centre buzzes all around and the area is packed with great cafés, bars, restaurants and bistros. A great base for sightseeing, eating out and shopping.",
          "You're 400 m from Fabryka Norblina food hall, 600 m from Browary Warszawskie, one tram stop from Złote Tarasy shopping centre and Warsaw Central station.",
          "Tired after sightseeing? There are three great, well-tried places to eat right downstairs, and a Carrefour express for quick groceries. Everything within reach. A 10-minute walk gets you to most of the world's cuisines.",
          "The apartment has a fully equipped kitchenette with a dishwasher, a modern bathroom with a washing machine, Wi-Fi, cable TV and air conditioning.",
          "For your convenience there's also: an iron and a board, a small drying rack, a built-in wardrobe behind a curtain, a double bed and a sofa. The bedroom is separated from the living area by sliding doors for comfort and maximum privacy.",
          "The kitchen has the cookware and utensils you need to prepare anything from a quick breakfast to a full meal. You'll find an induction hob, a combo oven (with microwave), and a coffee machine. We've also stocked tea, coffee and sugar. In the bathroom you can enjoy a rainfall shower.",
        ],
      },
    },
    accordionData: [
      {
        value: "item-1",
        question: {
          pl: "Czy mogą Państwo wystawić fakturę proforma, celem opłacenia pobytu?",
          en: "Can you issue a proforma invoice to settle the stay?",
        },
        answer: {
          pl: "Tak, fakturę wystawiamy po pobycie, lub jeśli potrzeba – przed, w przypadku rezerwacji z przedpłatą.",
          en: "Yes — we issue the invoice after your stay, or before it if needed for a pre-paid reservation.",
        },
      },
      {
        value: "item-2",
        question: {
          pl: "Mogę tam zaparkować? Ile kosztuje parking za noc?",
          en: "Can I park there? How much is parking per night?",
        },
        answer: {
          pl: "Tak, budynek znajduje się w obszarze płatnego parkingu miejskiego. Dzienna opłata za parking wynosi około 57 PLN (od 08:00 do 20:00), noc i weekendy, święta -  parkowanie bezpłatne. W pobliżu (20m) znajduje się płatny parking (144 PLN/dzień), lub 500 m w centrum Browary Warszawskie.",
          en: "Yes — the building is in the paid on-street parking zone. The daytime fee is about 57 PLN (08:00–20:00); nights, weekends and public holidays are free. There is a paid car park 20 m away (144 PLN/day), or 500 m away at Browary Warszawskie.",
        },
      },
      {
        value: "item-3",
        question: {
          pl: "Jak daleko obiekt Sky Apartment Comfy Suite Pereca znajduje się od centrum miasta Warszawa?",
          en: "How far is Sky Apartment Comfy Suite Pereca from Warsaw city centre?",
        },
        answer: {
          pl: "Sky Apartment Comfy Suite Pereca znajduje się 1,1 km od centrum miasta Warszawa. Wszystkie odległości podane są w linii prostej. Właściwy dystans do pokonania może się różnić.",
          en: "Sky Apartment Comfy Suite Pereca is 1.1 km from Warsaw city centre. All distances are as the crow flies — the actual walking distance may differ.",
        },
      },
      {
        value: "item-4",
        question: {
          pl: "Jakie są godziny zameldowania i wymeldowania w obiekcie Sky Apartment Comfy Suite Pereca?",
          en: "What are the check-in and check-out times at Sky Apartment Comfy Suite Pereca?",
        },
        answer: {
          pl: "Zameldowanie w Sky Apartment Comfy Suite Pereca rozpoczyna się o 15:00, a wymeldować się można do 11:00.",
          en: "Check-in at Sky Apartment Comfy Suite Pereca starts at 15:00; check-out is by 11:00.",
        },
      },
      {
        value: "item-5",
        question: {
          pl: "Ilu gości może się zatrzymać w tym obiekcie?",
          en: "How many guests can stay in this apartment?",
        },
        answer: {
          pl: "Obiekt Sky Apartment Comfy Suite Pereca udostępnia jedną opcję zakwaterowania. Pomieści ona 4 gości",
          en: "The apartment offers a single accommodation option that sleeps up to 4 guests.",
        },
      },
    ],
    rooms: ["kuchnia", "salon", "sypialnia", "lazienka"],
    area: 28,
    floor: 14,
    bedrooms: 1,
    bathrooms: 1,
    kitchenStyle: "aneks",
    buildingType: "wielopiętrowy",
    builtYear: 1950,
    localization: {
      pl: "Centrum, Rondo ONZ",
      en: "Centre, Rondo ONZ",
    },
    lattitude: 52.234436403787896,
    longitude: 20.996200972297228,
    priceFrom: 200,
    mainPic: "/pereca/Inborr-Pereca-apartament-Salon and sofa.jpg",
    pics: [
      {
        src: "/pereca/Inborr-Pereca-apartament-Salon and sofa.jpg",
        alt: { pl: "Salon z sofą", en: "Living room with sofa" },
        category: "salon",
      },
      {
        src: "/pereca/Inborr-Pereca-apatrament-salon z fotelem.jpg",
        alt: { pl: "Salon z fotelem", en: "Living room with armchair" },
        category: "salon",
      },
      {
        src: "/pereca/Inborr-Sky-Apartament-Pereca-salon.jpg",
        alt: { pl: "Salon w apartamencie Sky", en: "Sky apartment living room" },
        category: "salon",
      },
      {
        src: "/pereca/Inborr-Sky-Pereca-apartament-Salon 1.jpg",
        alt: {
          pl: "Salon w apartamencie Sky — ujęcie",
          en: "Sky apartment living room view",
        },
        category: "salon",
      },
      {
        src: "/pereca/Inborr-Pereca-Sky-salon bez fotela.jpg",
        alt: { pl: "Salon bez fotela", en: "Living room without armchair" },
        category: "salon",
      },
      {
        src: "/pereca/Inborr-Pereca-Sky-futon-Fotel.jpg",
        alt: { pl: "Futon i fotel", en: "Futon and armchair" },
        category: "salon",
      },
      {
        src: "/pereca/Inborr-Pereca-Kuchnia kitchen.jpg",
        alt: { pl: "Kuchnia", en: "Kitchen view" },
        category: "kuchnia",
      },
      {
        src: "/pereca/Inborr-Pereca-Sky-aneks kuchenny z kwiatami.jpg",
        alt: { pl: "Aneks kuchenny z kwiatami", en: "Kitchen annex with flowers" },
        category: "kuchnia",
      },
      {
        src: "/pereca/Inborr-Pereca-Sky-apartament-aneks kuchenny.jpg",
        alt: { pl: "Aneks kuchenny w apartamencie", en: "Apartment kitchen annex" },
        category: "kuchnia",
      },
      {
        src: "/pereca/Inborr-Pereca-kuchenka 2.jpg",
        alt: { pl: "Kuchenka", en: "Kitchen stove" },
        category: "kuchnia",
      },
      {
        src: "/pereca/Inborr-Pereca-Bedroom sypaialnia.jpg",
        alt: { pl: "Sypialnia", en: "Bedroom view" },
        category: "sypialnia",
      },
      {
        src: "/pereca/Inborr-apartament-Pereca-bedroom-double-bed.jpg",
        alt: { pl: "Sypialnia z podwójnym łóżkiem", en: "Bedroom with double bed" },
        category: "sypialnia",
      },
      {
        src: "/pereca/Inborr-Pereca-Sky-Szafa.jpg",
        alt: { pl: "Szafa", en: "Wardrobe" },
        category: "sypialnia",
      },
      {
        src: "/pereca/Inborr-Pereca-Lazienka-apartament.jpg",
        alt: { pl: "Łazienka", en: "Bathroom view" },
        category: "lazienka",
      },
      {
        src: "/pereca/Inborr-apartament-Pereca-bath-ropes.jpg",
        alt: {
          pl: "Łazienka z linkami na ręczniki",
          en: "Bathroom with towel ropes",
        },
        category: "lazienka",
      },
      {
        src: "/pereca/Pereca2-Budynek-Inborr.jpg",
        alt: { pl: "Budynek z zewnątrz", en: "Building exterior" },
        category: "budynek",
      },
      {
        src: "/pereca/Pereca2-Hall na dole Inborr.jpg",
        alt: { pl: "Hol na parterze", en: "Ground floor hall" },
        category: "budynek",
      },
      {
        src: "/pereca/Inborr-Pereca-key box.jpg",
        alt: { pl: "Skrytka na klucze", en: "Key box" },
        category: "budynek",
      },
      {
        src: "/pereca/Inborr-Sky-Pereca-Altanka śmieci Trash disposal.jpg",
        alt: { pl: "Altanka śmietnikowa", en: "Trash disposal area" },
        category: "budynek",
      },
      {
        src: "/pereca/Inborr-Pereca-Speed test.jpg",
        alt: { pl: "Test prędkości internetu", en: "Speed test" },
        category: "budynek",
      },
      {
        src: "/pereca/Inborr-Pereca-Sky-widok z okna.jpg",
        alt: { pl: "Widok z okna", en: "Window view" },
        category: "widok",
      },
      {
        src: "/pereca/Inborr-Pereca2-centrum-apartament.jpg",
        alt: { pl: "Widok na centrum", en: "Central apartment view" },
        category: "widok",
      },
      {
        src: "/pereca/Pereca2-restauracje-Inborr.jpg",
        alt: { pl: "Restauracje w okolicy", en: "Restaurants view" },
        category: "widok",
      },
    ],
    hrefLink: "/apartamenty/pereca",
    reservedLinks: {
      airbnbLink: new URL(
        "https://www.airbnb.pl/rooms/921541253367297308?viralityEntryPoint=1&unique_share_id=EA1D5AD0-2222-4DA9-AF69-4104CF386DB1&slcid=439a43665ea04d648a78683b9444a000&s=76&feature=share&adults=1&channel=native&slug=DgkUchXQ",
      ),
      bookingLink: new URL(
        "https://www.booking.com/hotel/pl/sky-apartment-comfy-suite-pereca.pl.html?aid=1263239&label=PShare-Pulse-EgVfYD%401738518237&sid=d4e97663c83b5caba0087180fea308d9&dist=0&keep_landing=1&sb_price_type=total&type=total&",
      ),
      bookableLink: new URL("https://rezerwacje.inborr.pl/"),
    },
    calendarLinks: {
      airbnb: process.env.AIRBNB_ICAL_PERECA || "",
      booking: process.env.BOOKING_ICAL_PERECA || "",
    },
  },
];

export type Locale = "pl" | "en";
