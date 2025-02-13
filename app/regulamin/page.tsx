'use client'

import type React from "react"
import { motion } from "framer-motion"

export default function RegulationPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
    >
      <motion.div 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg overflow-hidden"
      >
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Regulamin korzystania z apartamentów InBoRR</h1>

          <p className="mb-4 text-sm text-gray-600 text-center">
            Administratorem obiektów jest: InBoRR Bożena Rutkowska-Romańczuk
            <br />
            NIP: PL5251205185 REGON: 524386382
          </p>

          <Section title="Rodzaje i Zakres Usług Świadczonych Drogą Elektroniczną">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Rezerwacja noclegu: Klient ma możliwość dokonania rezerwacji pokoi online, wybierając daty pobytu,
                liczbę osób i preferowane udogodnienia.
              </li>
              <li>
                Dodatkowe Usługi: Strona umożliwia zamawianie dodatkowych usług, takich jak np.: parking (w zależności
                od dostępności w obiekcie), wcześniejszy check in, dodatkowe łóżeczko dla dziecka, dodatkowa pościel.
              </li>
              <li>
                Informacje o apartamencie: Udostępnione są informacje o udogodnieniach, zasadach funkcjonowania hotelu
                oraz galerie zdjęć.
              </li>
            </ul>
          </Section>

          <Section title="Warunki Świadczenia Usług Drogą Elektroniczną">
            <p>
              Wymagania Techniczne: Do korzystania z portalu konieczne jest posiadanie aktualnej przeglądarki
              internetowej i stałego dostępu do internetu.
            </p>
          </Section>

          <Section title="Warunki Zawierania i Rozwiązywania Umów o Świadczenie Usług Drogą Elektroniczną">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Procedura Zawierania Umowy: Klient zawiera umowę poprzez akceptację regulaminu i potwierdzenie
                rezerwacji. Potwierdzenie to może być przesłane drogą elektroniczną.
              </li>
              <li>
                Warunki Rozwiązania Umowy: Apartament zastrzega sobie prawo do odmowy świadczenia usług w przypadku
                naruszenia regulaminu przez Klienta. Może to obejmować nieprawidłowe korzystanie z serwisu lub
                niewłaściwe zachowanie.
              </li>
            </ul>
          </Section>

          <Section title="Procedury składania reklamacji">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Klient może złożyć reklamację przesyłając e-mail na adres biuro@inborr.pl Wymagane jest podanie danych
                kontaktowych i opis problemu.
              </li>
              <li>Apartament zobowiązuje się do rozpatrzenia reklamacji w ciągu 30 dni od daty jej otrzymania.</li>
              <li>
                W przypadku uzasadnionej reklamacji, apartament może zastosować środki naprawcze lub zaoferować
                klientowi odpowiednie odszkodowanie, zgodnie z obowiązującymi przepisami prawa.
              </li>
            </ol>
          </Section>

          <Section title="Regulamin obiektów">
            <ul className="list-disc pl-5 space-y-2">
              <li>W apartamencie obowiązuje całkowity zakaz palenia, w jakiejkolwiek formie.</li>
              <li>W apartamencie obowiązuje całkowity zakaz organizowania imprez.</li>
              <li>
                W apartamencie zakwaterowana może być wyłącznie ilość gości podana przy rezerwacji (maksymalnie 4
                osoby).
              </li>
              <li>
                Rezerwujący zobowiązuje się wykorzystywać Lokal jedynie na cele mieszkaniowe, utrzymywać lokal w
                zastanym stanie technicznym.
              </li>
              <li>Nie wolno dokonywać żadnych zmian w lokalu, bez pisemnej zgody InBoRR Bożena Rutkowska-Romańczuk,</li>
              <li>
                Nie zezwala się oddawać Lokalu w całości, ani w części innej osobie do bezpłatnego używania, ani w
                podnajem.
              </li>
              <li>
                Należy niezwłocznie udostępnić lokal celem usunięcia awarii przez inBoRR lub wskazane przez InBoRR
                osoby. W przypadku wystąpienia w lokalu istotnych awarii, w szczególności zagrażających sąsiadującym
                mieszkaniom, właściciel (Bożena Rutkowska-Romańczuk) ma prawo wejść do lokalu celem ich usunięcia, także
                pod nieobecność Rezerwującego pobyt, podejmując próbę powiadomienia Rezerwującego (poprzez telefon,
                wysłanie sms i maila).
              </li>
            </ul>
          </Section>

          <Section title="Dodatkowe informacje">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                W apartamencie jest możliwy pobyt ze zwierzętami, należy jednak o tym powiadomić i uzyskać zgodę
                administratora (wystarczająca droga – potwierdzenie sms, lub mailowe).
              </li>
              <li>
                Apartament może zapewnić miejsce parkingowe, w zależności od dostępności w obiekcie, co jest opisane w
                ofercie. Rezerwacja miejsca parkingowego jest dodatkowo płatna.
              </li>
              <li>Korzystanie z TV: dostępna jest telewizja kablowa oraz łącze internetowe wifi.</li>
              <li>W apartamentach obowiązuje cisza nocna od godziny 22:00 do godziny 06:00.</li>
              <li>Rezerwacje możliwe na zapytanie, wymagają potwierdzenia.</li>
              <li>Wpłaty całości kwoty za rezerwację należy dokonać do 14 dni przed datą przyjazdu.</li>
              <li>Przy rezerwacjach z wyprzedzeniem wymagana wpłata zadatku w wysokości 30% wartości rezerwacji.</li>
              <li>Końcowe sprzątanie płatne 150,00 PLN za apartament razem z wpłatą za rezerwację.</li>
              <li>
                Za zniszczenia i uszkodzenia sprzętów i urządzeń, zgubienie kluczy lub innych rzeczy, pobrane zostanie
                odszkodowanie z wpłaconej kaucji w wysokości 100% ceny zniszczonej rzeczy.
              </li>
              <li>
                W przypadku gdy zniszczenia przekroczą kwotę kaucji, Wynajmujący zastrzega sobie prawo do dochodzenia
                odszkodowania na drodze cywilnej.
              </li>
              <li>Zakwaterowanie możliwe jest od godziny 15:00.</li>
              <li>Godzina zakwaterowania i wykwaterowania zależy od apartamentu.</li>
              <li>Przedłużenie wykwaterowania wyłącznie na zapytanie.</li>
              <li>
                Przy wykwaterowaniu z apartamentu, w którym udostępniono klucze, należy je zamknąć w skrytce (na kod) na
                korytarzu, przy drzwiach holu.
              </li>
            </ul>
          </Section>

          <Section title="Koszty rezygnacji">
            <ul className="list-disc pl-5 space-y-2">
              <li>Bezpłatne odwołanie rezerwacji możliwe do 21 dni przed przyjazdem;</li>
              <li>Odwołanie od 20-14 dni przed przyjazdem: 30% kosztu pobytu;</li>
              <li>Odwołanie od 13 do 10 dni przed przyjazdem: 50% kosztu pobytu;</li>
              <li>Odwołanie od 9 do 7 dni przed przyjazdem: 70% kosztu pobytu;</li>
              <li>Odwołanie od 6 do 3 dni przed przyjazdem: 90% kosztów pobytu;</li>
              <li>Odwołanie na 48 godzin przed przyjazdem lub nie pojawienie się na miejscu: 100% kosztów pobytu.</li>
            </ul>
          </Section>

          <Section title="Informacje końcowe">
            <ul className="list-disc pl-5 space-y-2">
              <li>Wystawiamy faktury VAT za pobyt.</li>
              <li>Prosimy o czyszczenie pojemnika w ekspresie po zaparzeniu ok 4 kaw.</li>
              <li>
                Prosimy nie dopuszczać do sytuacji, aby ekspres stał w wodzie, która przelała się z pojemnika na
                kapsułki.
              </li>
              <li>
                Na wyposażeniu apartamentu znajduje się apteczka oraz gaśnica (w szafkach w łazience (apteczka) i kuchni
                (gaśnica)).
              </li>
              <li>
                Wszelkie zastane usterki, widoczne zniszczenia należy raportować Wynajmującemu pod numerem 608555713.
                Brak zgłoszenia zniszczenia jest jednoznaczny z pokryciem kosztów naprawy zniszczenia.
              </li>
            </ul>
          </Section>

          <Section title="Kary">
            <p>W mieszkaniach obowiązują następujące kary:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>złamanie zakazu palenia – 500 zł;</li>
              <li>
                pozostawienie zwierzęcia bez opieki, związane ze szkodami, zanieczyszczeniem, zanieczyszczenia mebli,
                dywanu, podłóg – minimum 400 zł;
              </li>
              <li>zakwaterowanie liczby gości większej niż w rezerwacji – 400 zł od niezgłoszonej osoby;</li>
              <li>zorganizowanie imprezy w godzinach ciszy nocnej – 1000 zł.</li>
            </ul>
          </Section>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </motion.section>
  )
}

