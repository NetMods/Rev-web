import posthog from "posthog-js";

const isProduction = process.env.NODE_ENV === "production";

if (typeof window !== "undefined" && isProduction) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: "https://revord.org/ingest",
    defaults: "2025-11-30",
  });
}
