import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://inborr.pl";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/apartamenty`, lastModified: new Date() },
    { url: `${baseUrl}/kontakt`, lastModified: new Date() },
    { url: `${baseUrl}/mirow`, lastModified: new Date() },
    { url: `${baseUrl}/regulamin`, lastModified: new Date() },
  ];
}
