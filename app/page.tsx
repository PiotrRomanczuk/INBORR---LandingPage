import { HeroTailwind } from "@/components/sections/HeroTailwind";
import { Information } from "@/components/sections/Information1";
import { Apartments } from "@/components/sections/Apartments";

import { CookieConsent } from "@/components/CookieConsent";
import { Carousel } from "@/components/sections/testimonials/Carousel";
import { Services } from "@/components/sections/services/Services";
import Content from "@/components/sections/content/Content";

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-white">
      <HeroTailwind />
      <Content />
      <Apartments />
      <Services />
      {/* <CookieConsent /> */}
    </main>
  );
}
