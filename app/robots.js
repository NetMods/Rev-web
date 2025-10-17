import { metaData } from "config/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${metaData.baseUrl}/sitemap.xml`,
  };
}
