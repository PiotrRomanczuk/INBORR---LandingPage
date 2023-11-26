import { HeroTailwind } from "./components/sections/HeroTailwind";
import { Information } from "./components/sections/Information";
import { Apartments } from "./components/sections/Apartments";
import { GoogleMaps } from "./components/sections/GoogleMaps";
import { CookieConsent } from "./components/reusable/CookieConsent";
// import { GoogleMaps1 } from "./components/sections/GoogleMaps1";

export default function Home() {
  console.log(process.env.GOOGLE_MAPS_API_KEY as string);

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
