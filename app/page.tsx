import { HeroTailwind } from "@/components/sections/HeroTailwind";
import { Information } from "@/components/sections/Information";
import { Apartments } from "@/components/sections/Apartments";

import { CookieConsent } from "@/components/CookieConsent";
import { GoogleMaps1 } from "@/components/sections/GoogleMaps1";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import { Carousel } from "@/components/sections/testimonials/Carousel";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between bg-white">
        <HeroTailwind />
        <div className="mx-auto max-w-7xl">
          <Information />
          {/* <Carousel /> */}
          <Testimonials />
          <Apartments />
          <GoogleMaps1 />
          <CookieConsent />
        </div>
      </div>
    </>
  );
}
