import { HeroTailwind } from "@/components/sections/HeroTailwind";
import { Information } from "@/components/sections/Information1";
import { Apartments } from "@/components/sections/Apartments";

import { CookieConsent } from "@/components/CookieConsent";
import { GoogleMaps1 } from "@/components/sections/GoogleMaps1";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import { Carousel } from "@/components/sections/testimonials/Carousel";
import { Services } from "@/components/sections/Services";
import Content from "@/components/sections/content/Content";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between bg-white">
        <HeroTailwind />
        <Content />
        <Apartments />
        <Services />
        {/* <Testimonials /> */}
        <CookieConsent />
      </div>
    </>
  );
}
