import Image from "next/image";
import Link from "next/link";

export default function WarsawArticle() {
  const LinkClassNames =
    "text-blue-700 transition-all duration-300 hover:text-blue-900";

  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Kultowe Osiedle za Żelazną Bramą
      </h1>

      <Image
        src="/chlodna/Chlodna-Inborr-apartamenty-Mirow.jpg"
        alt="Osiedle za Żelazną Bramą"
        width={600}
        height={400}
        className="mx-auto mb-6 rounded-lg"
      />

      <section className="mb-8">
        <p className="mb-4">
          Kultowe{" "}
          <Link
            href="https://www.whitemad.pl/marzenie-le-corbusiera-spelnilo-sie-w-warszawie-osiedle-za-zelazna-brama/"
            className={LinkClassNames}
          >
            Osiedle za Żelazną Bramą
          </Link>{" "}
          z lat 70-tych XX wieku to ścisłe centrum Warszawy. Osiedle leżało
          pomiędzy Parkiem Saskim, a Pałacem Kultury i Nauki – dawniej wizytówką
          Stolicy. Powstałe bloki były najnowocześniejszym miejscem do życia dla
          25 tysięcy osób. Inspiracją do jego powstania były modernistyczne
          idee, rozsławione przez francuskiego architekta Le Corbusiera. Bloki
          miały być autonomicznymi miastami, wspierać tworzenie lokalnych
          społeczności mieszkańców.
        </p>
        <p className="mb-4">
          Obecnie - odnowione – poprzerastane nowymi biurowcami, hotelami,
          drapaczami chmur i apartamentowcami – tętni życiem i jest
          komunikacyjnym diamentem – stąd wszędzie jest blisko. Czy są pomysły
          na rewitalizację tego niesamowitego projektu miasta w mieście? O tak,
          i to w duchu ekologii.{" "}
          <Link
            href="https://www.architekturaibiznes.pl/projekt-ozywienia-osiedla-za-zelazna-brama,22905.html"
            className={LinkClassNames}
          >
            Nowa wizja bloków z loggiami i funkcjonalnym dachem mogłaby być
            niesamowitą wizytówką Warszawy.
          </Link>
        </p>
      </section>

      <Image
        src="/chlodna/Chlodna-Inborr-apartamenty-Mirow.jpg"
        alt="Nowoczesna Warszawa"
        width={600}
        height={400}
        className="mx-auto mb-6 rounded-lg"
      />

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Nasza oferta</h2>
        <p className="mb-4">
          W naszej ofercie są dwa mieszkania, w pełni po generalnym remoncie,
          funkcjonalne i świetnie położone.
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li className="mb-2">
            <strong>Blok na Pereca 2</strong> jest niemal w pełni autonomiczny –
            sklep z kawą, restauracje, ochrona. W okolicy 300 m znajdziesz chyba
            wszystkie kuchnie świata, food hall w{" "}
            <Link href="https://fabrykanorblina.pl/" className={LinkClassNames}>
              Fabryce Norblina
            </Link>{" "}
            i{" "}
            <Link
              href="https://browarywarszawskie.com.pl/"
              className={LinkClassNames}
            >
              Browarach Warszawskich.
            </Link>
          </li>
          <li className="mb-2">
            <strong>Blok na Chłodnej 11</strong> to perełka ciszy i pogrążenia
            się we wspomnieniach pozostałości starej warszawskiej dzielnicy
            północnej – w tym części Getta.
          </li>
        </ul>
      </section>

      <Image
        src="/chlodna/Chlodna-Inborr-apartamenty-Mirow.jpg"
        alt="Okolica Osiedla za Żelazną Bramą"
        width={600}
        height={400}
        className="mx-auto mb-6 rounded-lg"
      />

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Atrakcje w okolicy</h2>
        <p className="mb-4">
          W pobliżu jest wiele miejsc opowiadających o historii Warszawy:
        </p>
        <ul className="list-disc pl-6">
          <Link
            href="https://polin.pl/pl?gad_source=1&gclid=EAIaIQobChMIzMr95IKeiwMVpG0PAh02ZwC5EAAYASAAEgJU1fD_BwE"
            className={LinkClassNames}
          >
            <li>
              Interaktywne Muzeum Powstania Warszawskiego na ul. Karolkowej
            </li>
          </Link>
          <Link
            href="https://polin.pl/pl?gad_source=1&gclid=EAIaIQobChMIzMr95IKeiwMVpG0PAh02ZwC5EAAYASAAEgJU1fD_BwE"
            className={LinkClassNames}
          >
            <li>Muzeum Polin przy ul. Anielewicza</li>
          </Link>
          <Link
            href="https://zzw.waw.pl/nasze-tereny/parki/ogrod-saski/"
            className={LinkClassNames}
          >
            <li>Ogród Saski</li>
          </Link>
          <Link
            href="https://eko.um.warszawa.pl/-/ogrod-krasinskich"
            className={LinkClassNames}
          >
            <li>Park Krasińskich</li>
          </Link>
          <li>Zabytkowa Hala Mirowska</li>
          <li>Nostalgiczne zabytkowe bruki i stare kamienice</li>
          <li>Piękny zrewitalizowany deptak na Chłodnej/Elektoralnej</li>
        </ul>
      </section>
    </article>
  );
}
