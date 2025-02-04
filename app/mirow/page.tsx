import WarsawArticle from "./WarsawArticle";

export default function Home() {
  return (
    <section className="flex min-h-[800px] flex-col items-center justify-center bg-gray-100">
      <h1 className="m-4 text-7xl font-bold">Mirow</h1>
      <WarsawArticle />
    </section>
  );
}
