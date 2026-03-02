import type { Metadata } from "next";

import GoogleAnalytics from "@/components/GoogleAnalytics";

import "./globals.css";

import { NavBar } from "../components/navBar/NavBar";
import { Footer } from "../components/ui/Footer";

import { Open_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Inborr | Apartamenty na wynajem krotkoterminowy w Warszawie",
  description: `Inborr Apartment - noclegi warszawa, apartamenty w Warszawie, apartamenty na doby, wynajem krótkoterminowy, najem krótkoterminowy, zakwaterowanie, nocleg w Warszawie, wysoka jakość i komfort noclegów, możliwość rezerwacji online z bezpieczeństwem rezerwacji, świetnie wyposażone w dobrym standardzie. Sprawdź nas - odwiedź nas!`,
  openGraph: {
    title: "Inborr | Apartamenty na wynajem krotkoterminowy w Warszawie",
    description:
      "Komfortowe apartamenty w Warszawie na wynajem krótkoterminowy. City break, workation, pobyt biznesowy. Rezerwuj online!",
    url: "https://inborr.pl",
    siteName: "Inborr",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inborr | Apartamenty na wynajem krotkoterminowy w Warszawie",
    description:
      "Komfortowe apartamenty w Warszawie na wynajem krótkoterminowy. City break, workation, pobyt biznesowy. Rezerwuj online!",
  },
};

const openSans = Open_Sans({
  weight: ["300", "500", "700"],
  style: "normal",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={openSans.className}>
      <body className="relative mx-auto max-w-screen-xl overflow-x-hidden scroll-smooth">
        <NavBar />
        <div className="bg-white pt-24">{children}</div>
        <Toaster />
        <Footer />
      </body>
      {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
    </html>
  );
}
