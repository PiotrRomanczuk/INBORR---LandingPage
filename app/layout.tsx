import type { Metadata } from "next";

import "./globals.css";

// import { ThemeProvider } from "@/components/theme-provider";

import { Suspense } from "react";
import Loading from "./loading";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

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
          <div className=" bg-white pt-24">
            {/* <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              // disableTransitionOnChange
            > */}
            {children}
            {/* </ThemeProvider> */}
          </div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
