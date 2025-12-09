import posthog from "posthog-js";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: "2025-11-30",
  debug: process.env.NODE_ENV === "development",
});

posthog.capture("my event", { property: "value" });
