import posthog from "posthog-js";

const isProduction = process.env.NODE_ENV === "production";

if (typeof window !== "undefined" && isProduction) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: "2025-11-30",
  });
}
