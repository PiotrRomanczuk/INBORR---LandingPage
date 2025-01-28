import { HeroTailwind } from "@/components/sections/Hero/HeroTailwind";
import { Content } from "@/components/sections/Content/Content";
import { Apartments } from "@/components/sections/Apartments";
import { Services } from "@/components/sections/Services/Services";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";

import { CookieConsent } from "@/components/CookieConsent";
import SEO_Content from "@/components/sections/SEO_Content/SEO_Content";

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-white">
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
