import { siteConfig } from "@/config/site";

export default function sitemap() {
  const baseUrl = siteConfig.baseUrl.replace(/\/$/, "");

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/_not-found`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
