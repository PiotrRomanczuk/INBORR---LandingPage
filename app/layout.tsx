import type { Metadata } from "next";

import "./globals.css";

import { Suspense } from "react";
import Loading from "./loading";

import { NavBar } from "./components/reusable/NavBar";
import { Footer } from "./components/reusable/Footer";

import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Inborr",
  description: `Inborr Apartment - noclegi warszawa, apartamenty w Warszawie,
    apartamenty na doby, wynajem krótkoterminowy,
    najem krótkoterminowy, zakwaterowanie,
    nocleg w Warszawie, wysoka jakość i komfort noclegów,
    możliwość rezerwacji online z bezpieczeństwem rezerwacji,
    świetnie wyposażone w dobrym standardzie.Sprawdź nas - odwiedź nas!`,
};

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  style: "normal",
  preload: false,
  // subsets: latin,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Suspense fallback={<Loading />}>
          <NavBar />
          <div className=" bg-white">{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
