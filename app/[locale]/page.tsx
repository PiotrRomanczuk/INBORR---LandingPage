import { setRequestLocale } from "next-intl/server";
import { HeroTailwind } from "@/components/sections/Hero/HeroTailwind";
import { Values } from "@/components/sections/Values/Values";
import { Apartments } from "@/components/sections/Apartments/Apartments";
import { Testimonials } from "@/components/sections/testimonials/Testimonials";
import { MirowCallout } from "@/components/sections/MirowCallout/MirowCallout";
import { CookieConsent } from "@/components/CookieConsent";
import SEO_Content from "@/components/sections/SEO_Content/SEO_Content";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <main className="relative mx-auto flex flex-col overflow-x-hidden bg-skyline-bg">
      <HeroTailwind />
      <Values />
      <Apartments />
      <Testimonials />
      <MirowCallout />
      <SEO_Content />
      <CookieConsent />
    </main>
  );
}
