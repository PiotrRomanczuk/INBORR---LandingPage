import type { Metadata } from "next";
import WarsawArticle from "./WarsawArticle";

export const metadata: Metadata = {
  title: "Mirow | Inborr - Apartamenty w Warszawie",
  description:
    "Informacje o lokalizacji Mirow. Inborr - apartamenty na wynajem krotkoterminowy w Warszawie.",
};

export default function Home() {
  return (
    <section className="flex min-h-[800px] flex-col items-center justify-center bg-muted">
      <h1 className="m-4 text-7xl font-bold">Mirow</h1>
      <WarsawArticle />
    </section>
  );
}
