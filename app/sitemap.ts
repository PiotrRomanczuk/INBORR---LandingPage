import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const PATHS = ["", "/apartamenty", "/kontakt", "/mirow", "/regulamin"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://inborr.pl";
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    const prefix =
      locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`;
    PATHS.forEach((path) => {
      entries.push({ url: `${prefix}${path}`, lastModified: now });
    });
  });

  return entries;
}
