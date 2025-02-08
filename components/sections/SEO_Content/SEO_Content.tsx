import React from "react";

const SEO_Content = () => {
  return (
    <>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
          Wynajem Krótkoterminowy Mieszkań w Warszawie – Komfort i Wygoda w
          Centrum Miasta
        </h1>

        <section className="space-y-12">
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              Szukasz idealnego miejsca na krótki pobyt w Warszawie? Nasza firma
              specjalizuje się w wynajmie krótkoterminowym mieszkań w
              najlepszych lokalizacjach stolicy. Oferujemy nowoczesne
              apartamenty, które zapewniają wygodę, prywatność i dostęp do
              najważniejszych atrakcji miasta.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Dlaczego warto wybrać nasz wynajem krótkoterminowy?
            </h2>
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p className="text-gray-700">
                  <strong>Atrakcyjne lokalizacje</strong> – nasze mieszkania
                  znajdują się w centrum Warszawy, zawsze blisko stacji metra.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p className="text-gray-700">
                  <strong>Komfort i wyposażenie</strong> – każde mieszkanie jest
                  w pełni umeblowane, z dostępem do Wi-Fi, klimatyzacji i aneksu
                  kuchennego.
                </p>
              </li>
              {/* <li className="flex items-start">
                <span className="mr-2">•</span>
                <p className="text-gray-700">
                  <strong>Elastyczność rezerwacji</strong> – dostosowujemy się
                  do Twoich potrzeb, oferując elastyczne godziny zameldowania i
                  wymeldowania.
                </p>
              </li> */}
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p className="text-gray-700">
                  <strong>Konkurencyjne ceny</strong> - wysokiej jakości
                  apartamenty w przystępnych cenach.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Poznaj Warszawę z najlepszej strony
            </h2>
            <p className="leading-relaxed text-gray-700">
              Wynajem krótkoterminowy to idealne rozwiązanie zarówno dla
              turystów, jak i osób podróżujących służbowo. Odkryj piękno
              Warszawy, zwiedzając Stare Miasto, Pałac Kultury i Nauki, czy
              Łazienki Królewskie - wszystko w zasięgu ręki!
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Nasze mieszkania - Twoje miejsce w Warszawie
            </h2>
            <p className="leading-relaxed text-gray-700">
              {/* W naszej ofercie znajdziesz apartamenty o różnej wielkości: od
              przytulnych kawalerek po przestronne mieszkania idealne dla
              rodzin. */}
               W naszych apartamentach dbamy o każdy szczegół, aby zapewnić naszym gościom
              niezapomniany pobyt.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Skontaktuj się z nami już dziś!
            </h2>
            <p className="leading-relaxed text-gray-700">
              Zarezerwuj swoje mieszkanie w Warszawie i ciesz się wygodnym
              noclegiem podczas pobytu w stolicy. Sprawdź naszą ofertę i
              zarezerwuj apartament w zaledwie kilka minut!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SEO_Content;
