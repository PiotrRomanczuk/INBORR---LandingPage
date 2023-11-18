import { HeroTailwind } from "./components/sections/HeroTailwind";
import { Information } from "./components/sections/Information";
import { Apartments } from "./components/sections/Apartments";
import { GoogleMaps } from "./components/sections/GoogleMaps";
import { CookieConsent } from "./components/reusable/CookieConsent";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between bg-white">
        <HeroTailwind />
        <Information />
        <Apartments />
        <GoogleMaps />
        <CookieConsent />
      </div>
    </>
  );
}
