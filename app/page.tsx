import { Apartments } from "./components/Apartments";
import { GoogleMaps } from "./components/GoogleMaps";
import { Hero } from "./components/Hero";
import { Information } from "./components/Information";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between bg-white">
        <Hero />
        <Information />
        <Apartments />
        <GoogleMaps />
      </div>
    </>
  );
}
