"use client";

import Image from "next/image";
import Link from "next/link";
import { TextAnimation } from "@/components/ui/TextAnimation";

export const HeroTailwind = () => {
  return (
    <section className="bg-background">
      <div className="relative animate-fade-in">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl lg:pt-14">
            {/* // Horizontal cut */}
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-background lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>
            <div className="relative px-6 py-20 sm:py-40 lg:px-8 lg:py-36 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                  <TextAnimation />
                </h1>
                <p className="mt-6 text-base sm:text-lg md:text-xl leading-8 text-muted-foreground">
                  Wynajem na dni i tygodnie – city break, workation czy pobyt
                  biznesowy – zadbamy o jakość i Twój komfort.
                </p>
                <Link
                  href="/apartamenty"
                  className="mt-8 inline-flex min-h-[44px] items-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Zobacz apartamenty
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
          <Image
            className="mx-auto aspect-[3/2] w-full object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/warsaw.jpg"
            width={800}
            height={1200}
            alt="Apartament Inborr w Warszawie"
            priority
          />
        </div>
      </div>
    </section>
  );
};
