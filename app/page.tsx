import { HeroTailwind } from "@/components/sections/HeroTailwind";
import { Content } from "@/components/sections/content/Content";
import { Apartments } from "@/components/sections/Apartments";
import { Services } from "@/components/sections/services/Services";
import { Testimonials } from "@/components/sections/testimonials/Testimonials";

import { CookieConsent } from "@/components/CookieConsent";

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-white">
      <HeroTailwind />
      <Content />
      <Apartments />
      <Services />
      <Testimonials />
      {/* <CookieConsent /> */}
    </main>
  );
}
