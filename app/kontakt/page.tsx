import type { Metadata } from "next";
import { ContactData } from "./ContactData";
import { ContactForm } from "./form/ContactForm";
import { GoogleMaps } from "@/components/GoogleMaps";
import { AnimatedSection } from "./AnimatedSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt | Inborr - Apartamenty w Warszawie",
  description:
    "Skontaktuj sie z nami. Inborr - komfortowe apartamenty na wynajem krotkoterminowy w Warszawie.",
};

export default function Home() {
  return (
    <div className="relative isolate bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact info with building image accent */}
          <div className="relative overflow-hidden rounded-2xl bg-muted p-8 lg:p-12">
            <Image
              src="/pereca/Pereca2-Budynek-Inborr.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-[0.08]"
            />
            <div className="relative">
              <ContactData />
            </div>
          </div>

          {/* Contact form */}
          <div className="flex flex-col justify-center">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map section */}
      <AnimatedSection delay={0.2}>
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <h3 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
            Nasza lokalizacja
          </h3>
          <div className="overflow-hidden rounded-2xl">
            <GoogleMaps lat={52.2326} lng={20.9842} />
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
