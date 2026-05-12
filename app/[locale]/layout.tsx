import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Manrope, Bricolage_Grotesque } from "next/font/google";

import "../globals.css";
import { NavBar } from "../../components/navBar/NavBar";
import { Footer } from "../../components/ui/Footer";
import { Toaster } from "@/components/ui/toaster";
import { AnalyticsWrapper } from "../AnalyticsWrapper";
import { routing } from "@/i18n/routing";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-bricolage",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("rootTitle"),
    description: t("rootDescription"),
    openGraph: {
      title: t("rootTitle"),
      description: t("ogDescription"),
      url: "https://inborr.pl",
      siteName: "Inborr",
      locale: t("ogLocale"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("rootTitle"),
      description: t("ogDescription"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "metadata" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Inborr Apartamenty",
    description: t("jsonLdDescription"),
    url: "https://inborr.pl",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Warszawa",
      addressRegion: "Mazowieckie",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.237769,
      longitude: 20.989952,
    },
    priceRange: "200-350 PLN",
  };

  return (
    <html lang={locale} className={`${manrope.variable} ${bricolage.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative mx-auto max-w-screen-xl overflow-x-hidden scroll-smooth font-sans">
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <div className="bg-background">{children}</div>
          <Toaster />
          <Footer />
          <AnalyticsWrapper />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
