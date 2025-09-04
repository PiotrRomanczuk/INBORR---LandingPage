import { HeroTailwind } from "@/components/sections/Hero/HeroTailwind";
import { Content } from "@/components/sections/content/Content";
import { Apartments } from "@/components/sections/Apartments/Apartments";
import { Services } from "@/components/sections/services/Services";
import { Testimonials } from "@/components/sections/testimonials/Testimonials";

import { CookieConsent } from "@/components/CookieConsent";
import SEO_Content from "@/components/sections/SEO_Content/SEO_Content";

export default function Home() {
  return (
    <main className="relative mx-auto flex max-w-screen-xl flex-col justify-between overflow-x-hidden bg-white">
      <HeroTailwind />
      <Content />
      <Apartments />
      <Services />
      <Testimonials />
      <SEO_Content />
      {/* <CookieConsent /> */}
    </main>
  );
}
