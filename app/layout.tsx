import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

// import { ThemeProvider } from "@/components/theme-provider";

import { Suspense } from "react";
import Loading from "./loading";

import { NavBar } from "../components/ui/NavBar";
import { Footer } from "../components/ui/Footer";

import { Roboto } from "next/font/google";
import { Open_Sans } from "next/font/google";

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

const openSans = Open_Sans({
  weight: ["300", "500", "700"],
  style: "normal",
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="mx-auto max-w-7xl">
        <Suspense fallback={<Loading />}>
          <NavBar />
          {/* <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              // disableTransitionOnChange
            > */}
          <div className=" bg-white pt-24">
            {children}
            <SpeedInsights />
            <Analytics />
          </div>
          {/* </ThemeProvider> */}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
